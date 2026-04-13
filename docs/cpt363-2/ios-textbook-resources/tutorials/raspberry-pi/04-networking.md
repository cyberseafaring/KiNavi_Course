# 网络通信

本节说明端侧设备如何与外部系统通信，目标是让学生理解"网络可用"与"链路质量可接受"是两件事。

## 学习目标

- 能够完成网络连通性诊断
- 能够使用 HTTP 协议上传数据
- 能够使用 MQTT 协议进行发布/订阅通信
- 能够设计弱网环境下的数据传输策略

## 基本检查

### 连通性诊断

先检查 IP 配置与网关，再检查 DNS。很多"偶发断网"问题来自 DNS 解析不稳定。

```bash
# 检查 IP 配置
ip addr show

# 检查网关
ip route show

# 测试网关连通性
ping -c 3 $(ip route | grep default | awk '{print $3}')

# 测试互联网连通性
ping -c 3 8.8.8.8

# 测试 DNS 解析
nslookup baidu.com
ping -c 3 baidu.com
```

### Python 网络诊断工具

```python
import socket
import subprocess
from datetime import datetime

def check_network():
    """网络连通性检查"""
    results = {
        "timestamp": datetime.now().isoformat(),
        "checks": {}
    }

    # 1. 检查本地 IP
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        local_ip = s.getsockname()[0]
        s.close()
        results["checks"]["local_ip"] = {"status": "OK", "value": local_ip}
    except Exception as e:
        results["checks"]["local_ip"] = {"status": "FAIL", "error": str(e)}

    # 2. 检查网关
    try:
        output = subprocess.check_output(
            "ip route | grep default | awk '{print $3}'",
            shell=True, text=True
        ).strip()
        results["checks"]["gateway"] = {"status": "OK", "value": output}
    except Exception as e:
        results["checks"]["gateway"] = {"status": "FAIL", "error": str(e)}

    # 3. Ping 测试
    for host in ["8.8.8.8", "baidu.com"]:
        try:
            output = subprocess.check_output(
                f"ping -c 1 -W 2 {host}",
                shell=True, stderr=subprocess.STDOUT, text=True
            )
            # 提取延迟
            if "time=" in output:
                latency = output.split("time=")[1].split()[0]
                results["checks"][f"ping_{host}"] = {"status": "OK", "latency_ms": latency}
            else:
                results["checks"][f"ping_{host}"] = {"status": "OK"}
        except subprocess.CalledProcessError:
            results["checks"][f"ping_{host}"] = {"status": "FAIL"}

    # 4. DNS 解析
    try:
        ip = socket.gethostbyname("baidu.com")
        results["checks"]["dns"] = {"status": "OK", "resolved": ip}
    except socket.gaierror as e:
        results["checks"]["dns"] = {"status": "FAIL", "error": str(e)}

    return results

# 使用
result = check_network()
for check, status in result["checks"].items():
    print(f"{check}: {status}")
```

## HTTP 通信

HTTP 适合上传少量结构化数据，优点是工具丰富，缺点是弱网条件下重试与幂等性需要自己设计。

### 安装 requests 库

```bash
pip3 install requests
```

### 基本 HTTP 请求

```python
import requests
import json
from datetime import datetime

def http_post(url, data, timeout=10):
    """发送 HTTP POST 请求"""
    try:
        response = requests.post(
            url,
            json=data,
            headers={"Content-Type": "application/json"},
            timeout=timeout
        )

        return {
            "success": response.status_code == 200,
            "status_code": response.status_code,
            "response": response.json() if response.headers.get("content-type", "").startswith("application/json") else response.text,
            "latency_ms": response.elapsed.total_seconds() * 1000
        }

    except requests.exceptions.Timeout:
        return {"success": False, "error": "TIMEOUT"}
    except requests.exceptions.ConnectionError:
        return {"success": False, "error": "CONNECTION_ERROR"}
    except Exception as e:
        return {"success": False, "error": str(e)}

# 使用示例
data = {
    "sensor_id": "bme280_01",
    "timestamp": datetime.now().isoformat(),
    "temperature": 25.5,
    "humidity": 60.2
}

result = http_post("http://example.com/api/sensor", data)
print(f"发送结果: {result}")
```

### 带重试的 HTTP 客户端

```python
import requests
import time
from datetime import datetime

class HTTPClient:
    """带重试功能的 HTTP 客户端"""

    def __init__(self, base_url, timeout=10, max_retries=3, retry_delay=2):
        self.base_url = base_url
        self.timeout = timeout
        self.max_retries = max_retries
        self.retry_delay = retry_delay
        self.stats = {"success": 0, "failed": 0, "retries": 0}

    def post(self, endpoint, data):
        """发送 POST 请求，失败时自动重试"""
        url = f"{self.base_url}{endpoint}"

        for attempt in range(self.max_retries + 1):
            try:
                response = requests.post(
                    url,
                    json=data,
                    timeout=self.timeout
                )

                if response.status_code == 200:
                    self.stats["success"] += 1
                    return {
                        "success": True,
                        "attempt": attempt + 1,
                        "status_code": response.status_code,
                        "latency_ms": response.elapsed.total_seconds() * 1000
                    }

            except requests.exceptions.RequestException as e:
                if attempt < self.max_retries:
                    self.stats["retries"] += 1
                    print(f"请求失败，{self.retry_delay}秒后重试 ({attempt + 1}/{self.max_retries})")
                    time.sleep(self.retry_delay)
                    continue

        self.stats["failed"] += 1
        return {"success": False, "error": "MAX_RETRIES_EXCEEDED"}

    def get_stats(self):
        """获取统计信息"""
        total = self.stats["success"] + self.stats["failed"]
        success_rate = self.stats["success"] / total * 100 if total > 0 else 0
        return {
            **self.stats,
            "total": total,
            "success_rate": f"{success_rate:.1f}%"
        }

# 使用
client = HTTPClient("http://example.com", max_retries=3)

for i in range(10):
    data = {"sensor_id": "test", "value": i, "timestamp": datetime.now().isoformat()}
    result = client.post("/api/data", data)
    print(f"[{i+1}] {result}")

print(f"统计: {client.get_stats()}")
```

## MQTT 通信

MQTT 适合持续上报与订阅控制，工程上需要明确主题结构、保活策略和断链重连策略。

### 安装 paho-mqtt

```bash
pip3 install paho-mqtt
```

### MQTT 基础概念

| 概念 | 说明 |
|-----|------|
| Broker | 消息代理服务器，负责消息路由 |
| Topic | 消息主题，用于消息分类 |
| Publish | 发布消息到指定主题 |
| Subscribe | 订阅主题以接收消息 |
| QoS | 服务质量等级 (0/1/2) |
| Retain | 保留消息，新订阅者可收到最后一条消息 |

### MQTT 发布者

```python
import paho.mqtt.client as mqtt
import json
import time
from datetime import datetime

class MQTTPublisher:
    """MQTT 消息发布者"""

    def __init__(self, broker, port=1883, client_id=None):
        self.broker = broker
        self.port = port
        self.client = mqtt.Client(client_id or f"sensor_{int(time.time())}")
        self.connected = False

        # 设置回调
        self.client.on_connect = self._on_connect
        self.client.on_disconnect = self._on_disconnect

    def _on_connect(self, client, userdata, flags, rc):
        if rc == 0:
            print(f"已连接到 MQTT Broker: {self.broker}")
            self.connected = True
        else:
            print(f"连接失败，返回码: {rc}")

    def _on_disconnect(self, client, userdata, rc):
        print(f"与 MQTT Broker 断开连接")
        self.connected = False

    def connect(self, username=None, password=None):
        """连接到 Broker"""
        if username and password:
            self.client.username_pw_set(username, password)

        try:
            self.client.connect(self.broker, self.port, keepalive=60)
            self.client.loop_start()
            time.sleep(1)  # 等待连接建立
            return self.connected
        except Exception as e:
            print(f"连接错误: {e}")
            return False

    def publish(self, topic, payload, qos=1, retain=False):
        """发布消息"""
        if not self.connected:
            return {"success": False, "error": "NOT_CONNECTED"}

        if isinstance(payload, dict):
            payload = json.dumps(payload)

        result = self.client.publish(topic, payload, qos=qos, retain=retain)

        return {
            "success": result.rc == mqtt.MQTT_ERR_SUCCESS,
            "message_id": result.mid
        }

    def disconnect(self):
        """断开连接"""
        self.client.loop_stop()
        self.client.disconnect()

# 使用示例
publisher = MQTTPublisher("test.mosquitto.org")

if publisher.connect():
    # 发布传感器数据
    topic = "iot/ship/sensor/bme280"
    data = {
        "sensor_id": "bme280_01",
        "timestamp": datetime.now().isoformat(),
        "temperature": 25.5,
        "humidity": 60.2
    }

    result = publisher.publish(topic, data)
    print(f"发布结果: {result}")

    publisher.disconnect()
```

### MQTT 订阅者

```python
import paho.mqtt.client as mqtt
import json
import time

class MQTTSubscriber:
    """MQTT 消息订阅者"""

    def __init__(self, broker, port=1883, client_id=None):
        self.broker = broker
        self.port = port
        self.client = mqtt.Client(client_id or f"subscriber_{int(time.time())}")
        self.message_handler = None

        self.client.on_connect = self._on_connect
        self.client.on_message = self._on_message
        self.client.on_disconnect = self._on_disconnect

    def _on_connect(self, client, userdata, flags, rc):
        if rc == 0:
            print(f"已连接到 MQTT Broker")
            # 重连后自动重新订阅
            for topic in getattr(self, '_subscribed_topics', []):
                client.subscribe(topic)

    def _on_message(self, client, userdata, msg):
        try:
            payload = msg.payload.decode('utf-8')
            # 尝试解析 JSON
            try:
                payload = json.loads(payload)
            except json.JSONDecodeError:
                pass

            message = {
                "topic": msg.topic,
                "payload": payload,
                "qos": msg.qos,
                "retain": msg.retain
            }

            if self.message_handler:
                self.message_handler(message)
            else:
                print(f"收到消息: {message}")

        except Exception as e:
            print(f"消息处理错误: {e}")

    def _on_disconnect(self, client, userdata, rc):
        print(f"与 Broker 断开连接，尝试重连...")

    def connect(self, username=None, password=None):
        """连接到 Broker"""
        if username and password:
            self.client.username_pw_set(username, password)

        self.client.connect(self.broker, self.port, keepalive=60)
        self._subscribed_topics = []

    def subscribe(self, topic, qos=1):
        """订阅主题"""
        self.client.subscribe(topic, qos)
        self._subscribed_topics.append(topic)
        print(f"已订阅: {topic}")

    def set_handler(self, handler):
        """设置消息处理函数"""
        self.message_handler = handler

    def run(self):
        """运行消息循环"""
        try:
            self.client.loop_forever()
        except KeyboardInterrupt:
            self.client.disconnect()

# 使用示例
def handle_message(msg):
    print(f"[{msg['topic']}] {msg['payload']}")

subscriber = MQTTSubscriber("test.mosquitto.org")
subscriber.set_handler(handle_message)
subscriber.connect()
subscriber.subscribe("iot/ship/sensor/#")  # 订阅所有传感器主题
subscriber.run()
```

### MQTT 主题设计

船联网场景的 MQTT 主题建议结构：

```
iot/
├── ship/
│   ├── {mmsi}/
│   │   ├── sensor/
│   │   │   ├── temperature
│   │   │   ├── humidity
│   │   │   └── gps
│   │   ├── status/
│   │   │   ├── engine
│   │   │   └── network
│   │   └── command/
│   │       ├── config
│   │       └── reboot
│   └── broadcast/
│       └── alert
```

## 弱网策略

弱网条件下应优先保证关键信息，并设计缓存补传。缓存补传要记录队列长度与重试次数，避免"悄悄失败"。

### 消息队列缓存

```python
import json
import os
import time
from collections import deque
from datetime import datetime

class MessageBuffer:
    """消息缓存队列"""

    def __init__(self, max_size=1000, persist_file=None):
        self.max_size = max_size
        self.persist_file = persist_file
        self.queue = deque(maxlen=max_size)
        self.stats = {"enqueued": 0, "sent": 0, "dropped": 0}

        # 从文件恢复
        if persist_file and os.path.exists(persist_file):
            self._load_from_file()

    def enqueue(self, message, priority=0):
        """入队消息"""
        entry = {
            "timestamp": datetime.now().isoformat(),
            "priority": priority,
            "retries": 0,
            "message": message
        }

        if len(self.queue) >= self.max_size:
            self.stats["dropped"] += 1

        self.queue.append(entry)
        self.stats["enqueued"] += 1

        # 持久化
        if self.persist_file:
            self._save_to_file()

    def dequeue(self):
        """出队消息"""
        if self.queue:
            return self.queue.popleft()
        return None

    def peek(self):
        """查看队首消息"""
        if self.queue:
            return self.queue[0]
        return None

    def requeue(self, entry):
        """重新入队 (发送失败时)"""
        entry["retries"] += 1
        if entry["retries"] <= 3:
            self.queue.appendleft(entry)
        else:
            self.stats["dropped"] += 1
            print(f"消息超过最大重试次数，丢弃")

    def mark_sent(self):
        """标记发送成功"""
        self.stats["sent"] += 1
        if self.persist_file:
            self._save_to_file()

    def _save_to_file(self):
        """保存到文件"""
        with open(self.persist_file, "w") as f:
            json.dump(list(self.queue), f)

    def _load_from_file(self):
        """从文件加载"""
        try:
            with open(self.persist_file, "r") as f:
                data = json.load(f)
                self.queue = deque(data, maxlen=self.max_size)
                print(f"从缓存恢复 {len(self.queue)} 条消息")
        except Exception as e:
            print(f"加载缓存失败: {e}")

    def get_stats(self):
        """获取统计"""
        return {
            **self.stats,
            "pending": len(self.queue)
        }

# 使用
buffer = MessageBuffer(max_size=100, persist_file="message_buffer.json")

# 入队消息
buffer.enqueue({"sensor_id": "test", "value": 25.5})

# 出队并发送
entry = buffer.dequeue()
if entry:
    # 尝试发送...
    success = False  # 模拟发送失败

    if success:
        buffer.mark_sent()
    else:
        buffer.requeue(entry)

print(f"统计: {buffer.get_stats()}")
```

### 带缓存的数据上传器

```python
import requests
import time
import threading
from datetime import datetime

class DataUploader:
    """带缓存的数据上传器"""

    def __init__(self, url, buffer_size=100, upload_interval=5):
        self.url = url
        self.buffer = MessageBuffer(max_size=buffer_size)
        self.upload_interval = upload_interval
        self.running = False

    def add_data(self, data):
        """添加数据到缓存"""
        self.buffer.enqueue(data)

    def _upload_worker(self):
        """上传工作线程"""
        while self.running:
            # 检查是否有待发送消息
            entry = self.buffer.peek()
            if entry:
                try:
                    response = requests.post(
                        self.url,
                        json=entry["message"],
                        timeout=10
                    )

                    if response.status_code == 200:
                        self.buffer.dequeue()
                        self.buffer.mark_sent()
                        print(f"上传成功: {entry['message']}")
                    else:
                        self.buffer.requeue(self.buffer.dequeue())

                except requests.exceptions.RequestException as e:
                    print(f"上传失败: {e}")
                    # 等待后重试
                    time.sleep(self.upload_interval)
                    continue

            time.sleep(0.1)  # 避免空转

    def start(self):
        """启动上传器"""
        self.running = True
        self.thread = threading.Thread(target=self._upload_worker, daemon=True)
        self.thread.start()
        print("数据上传器已启动")

    def stop(self):
        """停止上传器"""
        self.running = False
        print(f"上传器已停止，统计: {self.buffer.get_stats()}")

# 使用
uploader = DataUploader("http://example.com/api/data")
uploader.start()

# 添加数据
for i in range(10):
    uploader.add_data({
        "sensor_id": "test",
        "value": i,
        "timestamp": datetime.now().isoformat()
    })
    time.sleep(1)

uploader.stop()
```

## WebSocket 通信

WebSocket 适合需要双向实时通信的场景：

```python
import asyncio
import websockets
import json
from datetime import datetime

async def websocket_client(uri, handler):
    """WebSocket 客户端"""
    async with websockets.connect(uri) as websocket:
        print(f"已连接到 {uri}")

        # 发送数据
        async def sender():
            while True:
                data = {
                    "type": "sensor_data",
                    "timestamp": datetime.now().isoformat(),
                    "temperature": 25.5
                }
                await websocket.send(json.dumps(data))
                await asyncio.sleep(5)

        # 接收数据
        async def receiver():
            async for message in websocket:
                data = json.loads(message)
                handler(data)

        await asyncio.gather(sender(), receiver())

def message_handler(data):
    print(f"收到消息: {data}")

# 运行
# asyncio.run(websocket_client("ws://example.com/ws", message_handler))
```

## 网络质量监控

```python
import subprocess
import time
import json
from datetime import datetime

class NetworkMonitor:
    """网络质量监控"""

    def __init__(self, targets=None):
        self.targets = targets or ["8.8.8.8", "baidu.com"]
        self.history = []

    def measure(self):
        """执行一次测量"""
        result = {
            "timestamp": datetime.now().isoformat(),
            "measurements": {}
        }

        for target in self.targets:
            try:
                output = subprocess.check_output(
                    f"ping -c 3 -W 2 {target}",
                    shell=True, stderr=subprocess.STDOUT, text=True
                )

                # 解析结果
                lines = output.strip().split('\n')
                stats_line = [l for l in lines if 'min/avg/max' in l or 'rtt' in l]

                if stats_line:
                    # 格式: rtt min/avg/max/mdev = x/x/x/x ms
                    times = stats_line[0].split('=')[1].strip().split('/') if '=' in stats_line[0] else []
                    if len(times) >= 3:
                        result["measurements"][target] = {
                            "status": "OK",
                            "min_ms": float(times[0]),
                            "avg_ms": float(times[1]),
                            "max_ms": float(times[2].split()[0])
                        }
                    else:
                        result["measurements"][target] = {"status": "OK"}
                else:
                    result["measurements"][target] = {"status": "OK"}

            except subprocess.CalledProcessError:
                result["measurements"][target] = {"status": "UNREACHABLE"}

        self.history.append(result)
        return result

    def get_summary(self):
        """获取监控摘要"""
        if not self.history:
            return None

        summary = {}
        for target in self.targets:
            latencies = [
                h["measurements"].get(target, {}).get("avg_ms")
                for h in self.history
                if h["measurements"].get(target, {}).get("avg_ms")
            ]

            if latencies:
                summary[target] = {
                    "samples": len(latencies),
                    "avg_latency_ms": sum(latencies) / len(latencies),
                    "max_latency_ms": max(latencies),
                    "min_latency_ms": min(latencies)
                }

        return summary

# 使用
monitor = NetworkMonitor(["8.8.8.8", "baidu.com"])

for i in range(5):
    result = monitor.measure()
    print(f"测量 {i+1}: {result}")
    time.sleep(2)

print(f"摘要: {monitor.get_summary()}")
```

## 与实验的关系

本节内容直接支撑：
- Lab01: 网络连通性验证
- Lab04: NMEA 数据上传
- Lab06: 多源数据融合传输
- Lab07: 端侧设备与云平台通信

