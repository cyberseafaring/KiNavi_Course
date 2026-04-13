# 传感器数据采集传输实验

本实验完成一次端侧传感器数据采集与传输的闭环。实验重点是把"采集是否可靠""传输是否稳定"变成可观测的日志与证据，而不是只追求一次性的成功演示。

## 学习目标

- 能够从传感器或模拟数据源采集数据
- 能够设计合理的数据结构记录观测值
- 能够实现本地日志落盘保证证据链完整
- 能够通过网络上传数据并记录传输状态

## 环境要求

- 已完成 Lab01
- Raspberry Pi 可联网，Python 环境可用
- 任选一种可接入的传感器或模拟数据源

## 实验步骤

### 第一步: 数据源准备

如果没有实体传感器，可以使用模拟数据源。本实验提供三种数据源方案。

#### 方案A: 模拟传感器数据

```python
"""模拟传感器模块 - mock_sensor.py"""

import random
import time
from datetime import datetime

class MockGPSSensor:
    """模拟 GPS 传感器"""

    def __init__(self, base_lat=38.92, base_lon=121.63):
        self.base_lat = base_lat
        self.base_lon = base_lon
        self.speed = 10.0  # 初始速度 (节)
        self.course = 45.0  # 初始航向 (度)

    def read(self):
        """读取一次 GPS 数据"""
        # 模拟位置漂移
        drift_lat = random.uniform(-0.0001, 0.0001)
        drift_lon = random.uniform(-0.0001, 0.0001)

        # 模拟速度变化
        self.speed += random.uniform(-0.5, 0.5)
        self.speed = max(0, min(25, self.speed))

        # 模拟航向变化
        self.course += random.uniform(-2, 2)
        self.course = self.course % 360

        return {
            "timestamp": datetime.utcnow().isoformat() + "Z",
            "sensor_id": "GPS_001",
            "lat": round(self.base_lat + drift_lat, 6),
            "lon": round(self.base_lon + drift_lon, 6),
            "speed": round(self.speed, 1),
            "course": round(self.course, 1),
            "quality": random.choice(["good", "good", "good", "degraded"]),
        }


class MockEnvironmentSensor:
    """模拟环境传感器"""

    def __init__(self):
        self.temp = 25.0
        self.humidity = 60.0

    def read(self):
        """读取环境数据"""
        # 模拟温湿度变化
        self.temp += random.uniform(-0.2, 0.2)
        self.temp = max(15, min(35, self.temp))

        self.humidity += random.uniform(-1, 1)
        self.humidity = max(30, min(90, self.humidity))

        return {
            "timestamp": datetime.utcnow().isoformat() + "Z",
            "sensor_id": "ENV_001",
            "temperature": round(self.temp, 1),
            "humidity": round(self.humidity, 1),
            "pressure": round(1013.25 + random.uniform(-5, 5), 2),
            "quality": "good" if random.random() > 0.05 else "suspect",
        }


# 使用示例
if __name__ == "__main__":
    gps = MockGPSSensor()
    env = MockEnvironmentSensor()

    for _ in range(5):
        print("GPS:", gps.read())
        print("ENV:", env.read())
        print()
        time.sleep(1)
```

#### 方案B: 读取真实 GPIO 传感器

```python
"""GPIO 传感器读取 - gpio_sensor.py (需要真实硬件)"""

try:
    import RPi.GPIO as GPIO
    import Adafruit_DHT
    HAS_GPIO = True
except ImportError:
    HAS_GPIO = False
    print("警告: GPIO 库未安装，使用模拟模式")

from datetime import datetime

class DHT22Sensor:
    """DHT22 温湿度传感器"""

    def __init__(self, pin=4):
        self.pin = pin
        self.sensor = Adafruit_DHT.DHT22 if HAS_GPIO else None

    def read(self):
        """读取温湿度数据"""
        if not HAS_GPIO:
            # 模拟模式
            import random
            return {
                "timestamp": datetime.utcnow().isoformat() + "Z",
                "sensor_id": f"DHT22_GPIO{self.pin}",
                "temperature": round(25 + random.uniform(-2, 2), 1),
                "humidity": round(60 + random.uniform(-5, 5), 1),
                "quality": "simulated",
            }

        humidity, temperature = Adafruit_DHT.read_retry(self.sensor, self.pin)

        if humidity is None or temperature is None:
            return {
                "timestamp": datetime.utcnow().isoformat() + "Z",
                "sensor_id": f"DHT22_GPIO{self.pin}",
                "temperature": None,
                "humidity": None,
                "quality": "read_error",
            }

        return {
            "timestamp": datetime.utcnow().isoformat() + "Z",
            "sensor_id": f"DHT22_GPIO{self.pin}",
            "temperature": round(temperature, 1),
            "humidity": round(humidity, 1),
            "quality": "good",
        }
```

#### 方案C: 从串口读取 NMEA 数据

```python
"""串口 GPS 读取 - serial_gps.py"""

import serial
from datetime import datetime

class SerialGPS:
    """串口 GPS 模块"""

    def __init__(self, port="/dev/ttyUSB0", baudrate=9600):
        self.port = port
        self.baudrate = baudrate
        self.serial = None

    def connect(self):
        """连接串口"""
        try:
            self.serial = serial.Serial(
                self.port,
                self.baudrate,
                timeout=2
            )
            return True
        except serial.SerialException as e:
            print(f"串口连接失败: {e}")
            return False

    def read_nmea(self):
        """读取一行 NMEA 数据"""
        if not self.serial:
            return None

        try:
            line = self.serial.readline().decode("ascii", errors="ignore").strip()
            return line if line.startswith("$") else None
        except Exception as e:
            return None

    def parse_gprmc(self, sentence):
        """解析 GPRMC 语句"""
        parts = sentence.split(",")
        if len(parts) < 12:
            return None

        try:
            # 纬度
            lat = float(parts[3][:2]) + float(parts[3][2:]) / 60
            if parts[4] == "S":
                lat = -lat

            # 经度
            lon = float(parts[5][:3]) + float(parts[5][3:]) / 60
            if parts[6] == "W":
                lon = -lon

            # 速度 (节)
            speed = float(parts[7]) if parts[7] else 0

            # 航向
            course = float(parts[8]) if parts[8] else 0

            return {
                "timestamp": datetime.utcnow().isoformat() + "Z",
                "sensor_id": "SERIAL_GPS",
                "lat": round(lat, 6),
                "lon": round(lon, 6),
                "speed": round(speed, 1),
                "course": round(course, 1),
                "quality": "good" if parts[2] == "A" else "invalid",
            }
        except (ValueError, IndexError):
            return None

    def close(self):
        """关闭串口"""
        if self.serial:
            self.serial.close()
```

### 第二步: 数据结构定义

为采集数据定义最小字段集，确保每条记录都包含时间、来源和质量信息。

```python
"""数据模型定义 - data_model.py"""

from dataclasses import dataclass, asdict
from datetime import datetime
from typing import Optional, Any
import json

@dataclass
class SensorReading:
    """传感器读数基类"""
    timestamp: str           # ISO 格式时间戳
    sensor_id: str          # 传感器标识
    quality: str            # 质量标注 (good/degraded/invalid/error)

    def to_dict(self) -> dict:
        return asdict(self)

    def to_json(self) -> str:
        return json.dumps(self.to_dict(), ensure_ascii=False)


@dataclass
class GPSReading(SensorReading):
    """GPS 读数"""
    lat: Optional[float] = None
    lon: Optional[float] = None
    speed: Optional[float] = None    # 节
    course: Optional[float] = None   # 度


@dataclass
class EnvironmentReading(SensorReading):
    """环境传感器读数"""
    temperature: Optional[float] = None  # 摄氏度
    humidity: Optional[float] = None     # 百分比
    pressure: Optional[float] = None     # hPa


@dataclass
class TransmissionRecord:
    """传输记录"""
    timestamp: str
    reading_id: str
    endpoint: str
    method: str
    status_code: Optional[int]
    response_time_ms: float
    retry_count: int
    success: bool
    error_message: Optional[str] = None

    def to_dict(self) -> dict:
        return asdict(self)
```

### 第三步: 本地日志落盘

把采集结果写入本地日志文件，确保断网时仍能保留证据链。

```python
"""日志记录模块 - logger.py"""

import os
import json
from datetime import datetime
from typing import Any

class DataLogger:
    """数据日志记录器"""

    def __init__(self, log_dir: str = "logs"):
        self.log_dir = log_dir
        os.makedirs(log_dir, exist_ok=True)

        # 创建会话目录
        self.session_id = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
        self.session_dir = os.path.join(log_dir, self.session_id)
        os.makedirs(self.session_dir, exist_ok=True)

        # 初始化日志文件
        self.readings_file = os.path.join(self.session_dir, "readings.jsonl")
        self.transmissions_file = os.path.join(self.session_dir, "transmissions.jsonl")
        self.summary_file = os.path.join(self.session_dir, "summary.json")

        # 计数器
        self.reading_count = 0
        self.transmission_count = 0
        self.error_count = 0

    def log_reading(self, reading: dict) -> str:
        """记录传感器读数"""
        self.reading_count += 1
        reading_id = f"R_{self.session_id}_{self.reading_count:06d}"

        record = {
            "reading_id": reading_id,
            "logged_at": datetime.utcnow().isoformat() + "Z",
            **reading
        }

        with open(self.readings_file, "a") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")

        return reading_id

    def log_transmission(self, transmission: dict):
        """记录传输结果"""
        self.transmission_count += 1

        if not transmission.get("success"):
            self.error_count += 1

        record = {
            "logged_at": datetime.utcnow().isoformat() + "Z",
            **transmission
        }

        with open(self.transmissions_file, "a") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")

    def save_summary(self):
        """保存会话摘要"""
        summary = {
            "session_id": self.session_id,
            "start_time": self.session_id,
            "end_time": datetime.utcnow().strftime("%Y%m%d_%H%M%S"),
            "reading_count": self.reading_count,
            "transmission_count": self.transmission_count,
            "error_count": self.error_count,
            "success_rate": round(
                (self.transmission_count - self.error_count) /
                max(self.transmission_count, 1) * 100, 2
            )
        }

        with open(self.summary_file, "w") as f:
            json.dump(summary, f, indent=2, ensure_ascii=False)

        return summary


# 使用示例
if __name__ == "__main__":
    logger = DataLogger()

    # 模拟记录
    reading_id = logger.log_reading({
        "sensor_id": "GPS_001",
        "lat": 38.92,
        "lon": 121.63,
        "quality": "good"
    })
    print(f"记录 ID: {reading_id}")

    logger.log_transmission({
        "reading_id": reading_id,
        "endpoint": "http://example.com/api",
        "method": "POST",
        "status_code": 200,
        "response_time_ms": 150,
        "retry_count": 0,
        "success": True
    })

    summary = logger.save_summary()
    print(f"会话摘要: {summary}")
```

### 第四步: 数据上传

选择一种简单可复现的上传方式，记录请求时间、返回码和重试次数。

#### 方案A: HTTP POST 上传

```python
"""HTTP 上传模块 - uploader_http.py"""

import requests
import time
from datetime import datetime
from typing import Optional, Dict, Any

class HTTPUploader:
    """HTTP 数据上传器"""

    def __init__(self, base_url: str, timeout: int = 30):
        self.base_url = base_url
        self.timeout = timeout
        self.session = requests.Session()

    def upload(self,
               endpoint: str,
               data: dict,
               max_retries: int = 3,
               retry_delay: float = 1.0) -> Dict[str, Any]:
        """
        上传数据并返回传输记录

        Returns:
            包含传输状态的字典
        """
        url = f"{self.base_url}{endpoint}"

        for attempt in range(max_retries):
            start_time = time.time()

            try:
                response = self.session.post(
                    url,
                    json=data,
                    timeout=self.timeout,
                    headers={"Content-Type": "application/json"}
                )

                elapsed_ms = (time.time() - start_time) * 1000

                return {
                    "timestamp": datetime.utcnow().isoformat() + "Z",
                    "endpoint": url,
                    "method": "POST",
                    "status_code": response.status_code,
                    "response_time_ms": round(elapsed_ms, 2),
                    "retry_count": attempt,
                    "success": 200 <= response.status_code < 300,
                    "error_message": None if response.ok else response.text[:200]
                }

            except requests.exceptions.Timeout:
                if attempt < max_retries - 1:
                    time.sleep(retry_delay * (attempt + 1))
                    continue

                return {
                    "timestamp": datetime.utcnow().isoformat() + "Z",
                    "endpoint": url,
                    "method": "POST",
                    "status_code": None,
                    "response_time_ms": self.timeout * 1000,
                    "retry_count": attempt,
                    "success": False,
                    "error_message": "请求超时"
                }

            except requests.exceptions.RequestException as e:
                if attempt < max_retries - 1:
                    time.sleep(retry_delay * (attempt + 1))
                    continue

                return {
                    "timestamp": datetime.utcnow().isoformat() + "Z",
                    "endpoint": url,
                    "method": "POST",
                    "status_code": None,
                    "response_time_ms": (time.time() - start_time) * 1000,
                    "retry_count": attempt,
                    "success": False,
                    "error_message": str(e)[:200]
                }
```

#### 方案B: MQTT 上传

```python
"""MQTT 上传模块 - uploader_mqtt.py"""

import json
import time
from datetime import datetime
from typing import Optional, Dict, Any
import paho.mqtt.client as mqtt

class MQTTUploader:
    """MQTT 数据上传器"""

    def __init__(self,
                 broker: str = "localhost",
                 port: int = 1883,
                 client_id: str = "iot_sensor"):
        self.broker = broker
        self.port = port
        self.client_id = client_id
        self.client = mqtt.Client(client_id=client_id)
        self.connected = False
        self.last_mid = None
        self.publish_confirmed = False

        # 设置回调
        self.client.on_connect = self._on_connect
        self.client.on_publish = self._on_publish

    def _on_connect(self, client, userdata, flags, rc):
        self.connected = (rc == 0)
        if rc != 0:
            print(f"MQTT 连接失败: {rc}")

    def _on_publish(self, client, userdata, mid):
        if mid == self.last_mid:
            self.publish_confirmed = True

    def connect(self, username: str = None, password: str = None):
        """连接到 MQTT 代理"""
        try:
            if username and password:
                self.client.username_pw_set(username, password)

            self.client.connect(self.broker, self.port, keepalive=60)
            self.client.loop_start()

            # 等待连接
            timeout = 5
            while not self.connected and timeout > 0:
                time.sleep(0.1)
                timeout -= 0.1

            return self.connected
        except Exception as e:
            print(f"MQTT 连接异常: {e}")
            return False

    def publish(self,
                topic: str,
                data: dict,
                qos: int = 1,
                timeout: float = 5.0) -> Dict[str, Any]:
        """
        发布消息到指定主题

        Args:
            topic: MQTT 主题
            data: 要发布的数据
            qos: 服务质量等级 (0, 1, 2)
            timeout: 等待确认超时时间

        Returns:
            传输记录
        """
        if not self.connected:
            return {
                "timestamp": datetime.utcnow().isoformat() + "Z",
                "endpoint": f"mqtt://{self.broker}:{self.port}/{topic}",
                "method": "PUBLISH",
                "status_code": None,
                "response_time_ms": 0,
                "retry_count": 0,
                "success": False,
                "error_message": "未连接到 MQTT 代理"
            }

        start_time = time.time()
        payload = json.dumps(data, ensure_ascii=False)

        try:
            self.publish_confirmed = False
            result = self.client.publish(topic, payload, qos=qos)
            self.last_mid = result.mid

            # 等待发布确认 (QoS > 0)
            if qos > 0:
                wait_time = 0
                while not self.publish_confirmed and wait_time < timeout:
                    time.sleep(0.05)
                    wait_time += 0.05

            elapsed_ms = (time.time() - start_time) * 1000

            return {
                "timestamp": datetime.utcnow().isoformat() + "Z",
                "endpoint": f"mqtt://{self.broker}:{self.port}/{topic}",
                "method": "PUBLISH",
                "status_code": result.rc,
                "response_time_ms": round(elapsed_ms, 2),
                "retry_count": 0,
                "success": result.rc == mqtt.MQTT_ERR_SUCCESS,
                "error_message": None if result.rc == 0 else f"发布错误码: {result.rc}"
            }

        except Exception as e:
            elapsed_ms = (time.time() - start_time) * 1000
            return {
                "timestamp": datetime.utcnow().isoformat() + "Z",
                "endpoint": f"mqtt://{self.broker}:{self.port}/{topic}",
                "method": "PUBLISH",
                "status_code": None,
                "response_time_ms": round(elapsed_ms, 2),
                "retry_count": 0,
                "success": False,
                "error_message": str(e)[:200]
            }

    def disconnect(self):
        """断开连接"""
        self.client.loop_stop()
        self.client.disconnect()
        self.connected = False
```

### 第五步: 完整采集传输流程

整合采集、日志和上传模块:

```python
"""主程序 - main.py"""

import time
import signal
import sys
from mock_sensor import MockGPSSensor, MockEnvironmentSensor
from logger import DataLogger
from uploader_http import HTTPUploader

class DataCollector:
    """数据采集传输控制器"""

    def __init__(self,
                 upload_url: str = None,
                 sample_interval: float = 5.0):
        self.sample_interval = sample_interval
        self.running = False

        # 初始化组件
        self.gps_sensor = MockGPSSensor()
        self.env_sensor = MockEnvironmentSensor()
        self.logger = DataLogger()

        # 上传器 (可选)
        self.uploader = None
        if upload_url:
            self.uploader = HTTPUploader(upload_url)

        # 注册信号处理
        signal.signal(signal.SIGINT, self._signal_handler)
        signal.signal(signal.SIGTERM, self._signal_handler)

    def _signal_handler(self, signum, frame):
        """处理终止信号"""
        print("\n收到停止信号，正在保存数据...")
        self.running = False

    def collect_and_upload(self):
        """执行一次采集和上传"""
        # 采集 GPS 数据
        gps_data = self.gps_sensor.read()
        gps_id = self.logger.log_reading(gps_data)
        print(f"[GPS] {gps_data['lat']:.6f}, {gps_data['lon']:.6f} | "
              f"速度: {gps_data['speed']} 节 | 质量: {gps_data['quality']}")

        # 采集环境数据
        env_data = self.env_sensor.read()
        env_id = self.logger.log_reading(env_data)
        print(f"[ENV] 温度: {env_data['temperature']}°C | "
              f"湿度: {env_data['humidity']}% | 质量: {env_data['quality']}")

        # 上传数据 (如果配置了上传)
        if self.uploader:
            # 上传 GPS 数据
            tx_result = self.uploader.upload("/api/gps", {
                "reading_id": gps_id,
                **gps_data
            })
            tx_result["reading_id"] = gps_id
            self.logger.log_transmission(tx_result)

            status = "✓" if tx_result["success"] else "✗"
            print(f"[上传] {status} GPS -> {tx_result['response_time_ms']:.0f}ms")

            # 上传环境数据
            tx_result = self.uploader.upload("/api/environment", {
                "reading_id": env_id,
                **env_data
            })
            tx_result["reading_id"] = env_id
            self.logger.log_transmission(tx_result)

            status = "✓" if tx_result["success"] else "✗"
            print(f"[上传] {status} ENV -> {tx_result['response_time_ms']:.0f}ms")

    def run(self, duration: float = None):
        """
        运行采集循环

        Args:
            duration: 运行时长 (秒)，None 表示持续运行
        """
        self.running = True
        start_time = time.time()
        cycle = 0

        print(f"开始数据采集 (间隔: {self.sample_interval}秒)")
        print("按 Ctrl+C 停止")
        print("-" * 50)

        try:
            while self.running:
                cycle += 1
                print(f"\n[周期 {cycle}] {time.strftime('%H:%M:%S')}")

                self.collect_and_upload()

                # 检查运行时长
                if duration and (time.time() - start_time) >= duration:
                    print("\n达到设定时长，停止采集")
                    break

                time.sleep(self.sample_interval)

        finally:
            # 保存摘要
            summary = self.logger.save_summary()
            print("\n" + "=" * 50)
            print("采集会话结束")
            print(f"会话 ID: {summary['session_id']}")
            print(f"采集记录: {summary['reading_count']}")
            print(f"传输记录: {summary['transmission_count']}")
            print(f"传输成功率: {summary['success_rate']}%")
            print(f"日志目录: {self.logger.session_dir}")


# 运行示例
if __name__ == "__main__":
    # 不配置上传 URL 时只做本地记录
    # collector = DataCollector()

    # 配置 HTTP 上传 (需要有对应服务端)
    # collector = DataCollector(upload_url="http://localhost:8080")

    # 本地测试模式
    collector = DataCollector(sample_interval=3.0)
    collector.run(duration=30)  # 运行 30 秒
```

### 第六步: 数据分析验证

分析采集结果，验证数据完整性:

```python
"""日志分析脚本 - analyze_logs.py"""

import os
import json
import pandas as pd
from datetime import datetime

def analyze_session(session_dir: str):
    """分析采集会话"""
    # 读取采集记录
    readings_file = os.path.join(session_dir, "readings.jsonl")
    readings = []
    with open(readings_file, "r") as f:
        for line in f:
            readings.append(json.loads(line))

    df_readings = pd.DataFrame(readings)

    print("=" * 50)
    print("采集数据分析")
    print("=" * 50)

    # 基本统计
    print(f"\n总记录数: {len(df_readings)}")
    print(f"传感器类型: {df_readings['sensor_id'].unique()}")

    # 时间跨度
    df_readings["timestamp"] = pd.to_datetime(df_readings["timestamp"])
    time_range = df_readings["timestamp"].max() - df_readings["timestamp"].min()
    print(f"时间跨度: {time_range}")

    # 质量统计
    print("\n质量分布:")
    print(df_readings["quality"].value_counts())

    # 采样间隔分析
    df_readings = df_readings.sort_values("timestamp")
    df_readings["interval"] = df_readings["timestamp"].diff().dt.total_seconds()

    print("\n采样间隔统计:")
    print(f"  平均: {df_readings['interval'].mean():.2f} 秒")
    print(f"  最大: {df_readings['interval'].max():.2f} 秒")
    print(f"  最小: {df_readings['interval'].min():.2f} 秒")

    # 读取传输记录 (如果存在)
    transmissions_file = os.path.join(session_dir, "transmissions.jsonl")
    if os.path.exists(transmissions_file):
        transmissions = []
        with open(transmissions_file, "r") as f:
            for line in f:
                transmissions.append(json.loads(line))

        df_tx = pd.DataFrame(transmissions)

        print("\n" + "=" * 50)
        print("传输数据分析")
        print("=" * 50)

        print(f"\n总传输次数: {len(df_tx)}")
        print(f"成功率: {df_tx['success'].mean() * 100:.1f}%")

        print("\n响应时间统计 (ms):")
        print(f"  平均: {df_tx['response_time_ms'].mean():.1f}")
        print(f"  最大: {df_tx['response_time_ms'].max():.1f}")
        print(f"  P95: {df_tx['response_time_ms'].quantile(0.95):.1f}")

        # 重试统计
        retry_counts = df_tx[df_tx["retry_count"] > 0]
        if len(retry_counts) > 0:
            print(f"\n需要重试的请求: {len(retry_counts)}")

        # 错误分析
        errors = df_tx[~df_tx["success"]]
        if len(errors) > 0:
            print("\n错误类型:")
            for _, row in errors.iterrows():
                print(f"  - {row['error_message']}")

    return df_readings


# 使用示例
if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1:
        session_dir = sys.argv[1]
    else:
        # 找最新的会话
        log_dir = "logs"
        sessions = sorted(os.listdir(log_dir))
        if sessions:
            session_dir = os.path.join(log_dir, sessions[-1])
        else:
            print("没有找到日志文件")
            sys.exit(1)

    print(f"分析会话: {session_dir}")
    analyze_session(session_dir)
```

## 预期结果

完成实验后应得到两类文件：

- `logs/<session_id>/readings.jsonl` - 采集日志，包含连续时间戳的观测值
- `logs/<session_id>/transmissions.jsonl` - 传输日志，包含上传请求与回执信息
- `logs/<session_id>/summary.json` - 会话摘要

运行分析脚本应能输出:
- 采集记录数和质量分布
- 采样间隔统计
- 传输成功率和响应时间

## 扩展任务

### 任务1: 缓存补传机制

```python
"""带缓存的上传器 - uploader_cached.py"""

import os
import json
import time

class CachedUploader:
    """带本地缓存的上传器"""

    def __init__(self, uploader, cache_file: str = "upload_cache.jsonl"):
        self.uploader = uploader
        self.cache_file = cache_file

    def upload_with_cache(self, endpoint: str, data: dict):
        """上传数据，失败时缓存"""
        result = self.uploader.upload(endpoint, data)

        if not result["success"]:
            # 写入缓存
            cache_entry = {
                "endpoint": endpoint,
                "data": data,
                "cached_at": time.time()
            }
            with open(self.cache_file, "a") as f:
                f.write(json.dumps(cache_entry) + "\n")

        return result

    def retry_cached(self):
        """重试缓存的数据"""
        if not os.path.exists(self.cache_file):
            return 0

        # 读取缓存
        with open(self.cache_file, "r") as f:
            entries = [json.loads(line) for line in f]

        if not entries:
            return 0

        success_count = 0
        failed_entries = []

        for entry in entries:
            result = self.uploader.upload(entry["endpoint"], entry["data"])
            if result["success"]:
                success_count += 1
            else:
                failed_entries.append(entry)

        # 重写缓存 (只保留失败的)
        with open(self.cache_file, "w") as f:
            for entry in failed_entries:
                f.write(json.dumps(entry) + "\n")

        return success_count
```

### 任务2: 降级策略

```python
"""降级策略模块 - degradation.py"""

class DegradationPolicy:
    """网络降级策略"""

    def __init__(self):
        self.consecutive_failures = 0
        self.degraded_mode = False
        self.failure_threshold = 3

    def on_upload_result(self, success: bool):
        """更新状态"""
        if success:
            self.consecutive_failures = 0
            self.degraded_mode = False
        else:
            self.consecutive_failures += 1
            if self.consecutive_failures >= self.failure_threshold:
                self.degraded_mode = True

    def should_upload_full(self) -> bool:
        """是否应该上传完整数据"""
        return not self.degraded_mode

    def prepare_summary(self, readings: list) -> dict:
        """准备摘要数据 (降级模式)"""
        return {
            "count": len(readings),
            "time_range": {
                "start": readings[0]["timestamp"],
                "end": readings[-1]["timestamp"]
            },
            "avg_values": self._calculate_averages(readings)
        }

    def _calculate_averages(self, readings: list) -> dict:
        """计算平均值"""
        numeric_fields = ["lat", "lon", "speed", "temperature", "humidity"]
        averages = {}

        for field in numeric_fields:
            values = [r.get(field) for r in readings if r.get(field) is not None]
            if values:
                averages[field] = round(sum(values) / len(values), 4)

        return averages
```

## 常见问题

### 传感器读取失败

1. 检查接线是否正确
2. 确认 GPIO 引脚号配置正确
3. 检查传感器供电电压

### MQTT 连接失败

1. 确认 MQTT 代理正在运行
2. 检查端口号是否正确 (默认 1883)
3. 确认网络连通性

### 日志文件过大

1. 实现日志轮转机制
2. 定期压缩或清理历史日志
3. 考虑减少采样频率

## 实验报告要求

1. 截图: 采集运行过程
2. 提交: 日志目录打包文件
3. 分析: 运行 analyze_logs.py 的输出结果
4. 说明: 采样间隔的选择依据
5. 讨论: 如何保证断网时的数据完整性
