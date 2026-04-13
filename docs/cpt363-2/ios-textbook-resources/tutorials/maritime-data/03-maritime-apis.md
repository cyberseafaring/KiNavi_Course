# 海事数据接口

本节说明如何把外部数据接口接入课程实验,目标是让学生理解接口调用的证据链要求与安全边界。

## 学习目标

- 能够理解海事数据接口的类型和用途
- 能够进行 API 调用并处理响应
- 能够记录接口调用的证据链
- 能够遵守数据使用的安全边界

## 海事数据接口类型

### 公开数据接口

| 数据源 | 数据类型 | 访问方式 | 用途 |
|--------|---------|---------|------|
| MarineTraffic | AIS 位置、船舶信息 | REST API (付费) | 船舶跟踪 |
| VesselFinder | AIS 位置、港口信息 | REST API (付费) | 船舶查询 |
| AISHub | AIS 原始数据 | 数据交换 | 学术研究 |
| ITU MARS | 船舶登记信息 | 网页查询 | MMSI 验证 |

### 标准数据格式

- **NMEA 0183**: 船载设备通信标准
- **NMEA 2000**: 现代船载网络协议
- **IEC 61162**: 海事电子设备接口标准
- **S-100 系列**: IHO 海道测量数据标准

## 接口调用基础

### HTTP 请求示例

```python
import requests
import json
from datetime import datetime

def call_api(url, params=None, headers=None, timeout=30):
    """通用 API 调用函数"""
    call_record = {
        "url": url,
        "params": params,
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "response_code": None,
        "response_size": None,
        "error": None
    }

    try:
        response = requests.get(url, params=params, headers=headers, timeout=timeout)
        call_record["response_code"] = response.status_code
        call_record["response_size"] = len(response.content)

        if response.status_code == 200:
            return response.json(), call_record
        else:
            call_record["error"] = f"HTTP {response.status_code}"
            return None, call_record

    except requests.exceptions.Timeout:
        call_record["error"] = "请求超时"
        return None, call_record
    except requests.exceptions.RequestException as e:
        call_record["error"] = str(e)
        return None, call_record

# 使用示例 (模拟)
# data, record = call_api("https://api.example.com/vessels", {"mmsi": "412345678"})
```

### 响应解析

```python
def parse_vessel_response(data):
    """解析船舶信息响应"""
    if not data:
        return None

    # 标准化字段
    vessel = {
        "mmsi": data.get("MMSI") or data.get("mmsi"),
        "name": data.get("SHIPNAME") or data.get("name"),
        "imo": data.get("IMO") or data.get("imo"),
        "ship_type": data.get("SHIPTYPE") or data.get("ship_type"),
        "flag": data.get("FLAG") or data.get("flag"),
        "length": data.get("LENGTH") or data.get("length"),
        "width": data.get("WIDTH") or data.get("beam"),
    }

    # 移除空值
    vessel = {k: v for k, v in vessel.items() if v is not None}

    return vessel
```

## 接口调用的证据链

每次调用至少记录请求参数、时间戳、返回码与响应摘要。记录的意义是当结果异常时能追溯发生了什么,避免只能复述跑不出来。

### 日志记录类

```python
import json
import os
from datetime import datetime

class APILogger:
    """API 调用日志记录器"""

    def __init__(self, log_dir="api_logs"):
        self.log_dir = log_dir
        os.makedirs(log_dir, exist_ok=True)
        self.session_id = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
        self.log_file = os.path.join(log_dir, f"api_log_{self.session_id}.jsonl")
        self.call_count = 0

    def log_call(self, record):
        """记录一次 API 调用"""
        self.call_count += 1
        record["call_id"] = self.call_count
        record["session_id"] = self.session_id

        with open(self.log_file, "a") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")

        return record["call_id"]

    def summary(self):
        """输出日志摘要"""
        print(f"会话 ID: {self.session_id}")
        print(f"调用次数: {self.call_count}")
        print(f"日志文件: {self.log_file}")

# 使用示例
logger = APILogger()

# 记录调用
call_record = {
    "url": "https://api.example.com/vessel",
    "params": {"mmsi": "412345678"},
    "timestamp": datetime.utcnow().isoformat() + "Z",
    "response_code": 200,
    "response_size": 1024,
    "response_summary": {"mmsi": "412345678", "name": "DEMO VESSEL"}
}
logger.log_call(call_record)
logger.summary()
```

### 请求限流

```python
import time
from collections import deque

class RateLimiter:
    """请求限流器"""

    def __init__(self, max_requests=10, window_seconds=60):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.requests = deque()

    def acquire(self):
        """获取请求许可,必要时等待"""
        now = time.time()

        # 移除过期记录
        while self.requests and now - self.requests[0] > self.window_seconds:
            self.requests.popleft()

        # 检查是否需要等待
        if len(self.requests) >= self.max_requests:
            wait_time = self.window_seconds - (now - self.requests[0])
            if wait_time > 0:
                print(f"达到请求限制,等待 {wait_time:.1f} 秒...")
                time.sleep(wait_time)
                return self.acquire()

        self.requests.append(now)
        return True

# 使用示例
limiter = RateLimiter(max_requests=5, window_seconds=60)

for i in range(10):
    limiter.acquire()
    print(f"发送请求 {i+1}")
    # call_api(...)
```

## 安全边界

调用外部接口时需要遵守以下原则:

### 数据使用规范

1. **授权范围**: 只使用授权范围内的数据
2. **用途限制**: 仅用于课程实验,不用于商业目的
3. **数据保护**: 不公开传播获取的原始数据
4. **引用标注**: 使用数据时标注数据来源

### 技术规范

```python
# 安全配置示例

API_CONFIG = {
    # 超时设置
    "timeout": 30,  # 秒

    # 限流设置
    "rate_limit": {
        "max_requests": 10,
        "window_seconds": 60
    },

    # 重试设置
    "retry": {
        "max_attempts": 3,
        "backoff_factor": 2
    },

    # 禁止操作
    "forbidden": [
        "DELETE",       # 不执行删除操作
        "stress_test",  # 不进行压力测试
        "crawl",        # 不进行大规模爬取
    ]
}

def safe_api_call(url, params, config=API_CONFIG):
    """安全的 API 调用"""
    # 检查 URL 是否在允许列表
    # 应用限流
    # 记录日志
    # 执行请求
    pass
```

### 敏感信息处理

```python
import os
from hashlib import sha256

def mask_sensitive(data, fields=["mmsi", "imo"]):
    """脱敏处理敏感字段"""
    masked = data.copy()
    for field in fields:
        if field in masked:
            value = str(masked[field])
            # 保留前3位,其余用*替代
            masked[field] = value[:3] + "*" * (len(value) - 3)
    return masked

def hash_identifier(value, salt=None):
    """哈希处理标识符"""
    if salt is None:
        salt = os.environ.get("HASH_SALT", "default_salt")
    return sha256(f"{salt}{value}".encode()).hexdigest()[:16]

# 使用示例
vessel_data = {"mmsi": "412345678", "name": "DEMO VESSEL"}
print(mask_sensitive(vessel_data))
# 输出: {"mmsi": "412******", "name": "DEMO VESSEL"}
```

## 模拟数据接口

对于无法访问真实 API 的情况,可以使用本地模拟接口:

```python
import json
import random
from datetime import datetime

class MockMaritimeAPI:
    """模拟海事数据 API"""

    def __init__(self, data_path="../../datasets/ais-samples/vessel_info.json"):
        with open(data_path, "r") as f:
            self.data = json.load(f)
        self.vessels = {v["mmsi"]: v for v in self.data["vessels"]}

    def get_vessel(self, mmsi):
        """查询船舶信息"""
        vessel = self.vessels.get(mmsi)
        if vessel:
            return {
                "status": "success",
                "data": vessel,
                "timestamp": datetime.utcnow().isoformat() + "Z"
            }
        return {
            "status": "not_found",
            "data": None,
            "timestamp": datetime.utcnow().isoformat() + "Z"
        }

    def get_position(self, mmsi):
        """查询船舶位置 (模拟)"""
        if mmsi in self.vessels:
            # 模拟位置数据
            return {
                "status": "success",
                "data": {
                    "mmsi": mmsi,
                    "lat": 38.9 + random.uniform(-0.1, 0.1),
                    "lon": 121.6 + random.uniform(-0.1, 0.1),
                    "sog": random.uniform(8, 15),
                    "cog": random.uniform(0, 360),
                    "timestamp": datetime.utcnow().isoformat() + "Z"
                },
                "timestamp": datetime.utcnow().isoformat() + "Z"
            }
        return {"status": "not_found", "data": None}

# 使用示例
api = MockMaritimeAPI()
result = api.get_vessel(412345678)
print(json.dumps(result, indent=2, ensure_ascii=False))
```

## 与实验的关系

本节内容支撑:
- Lab03: AIS 报文解析 (数据格式理解)
- Lab06: 数据融合实验 (多源数据获取)
- Lab07: 网络通信实验 (接口调用实践)
