# AIS 数据基础

本节说明 AIS 数据的基本形态与使用边界,目标是让学生能把 NMEA 报文解析为字段,并理解字段可信度不是绝对的。

## 学习目标

- 能够理解 AIS 系统的工作原理和数据来源
- 能够解析 AIS NMEA 报文格式
- 能够使用 Python 库解析 AIS 数据
- 能够识别和处理 AIS 数据质量问题

## AIS 系统概述

AIS (Automatic Identification System) 是船舶自动识别系统,通过 VHF 无线电广播船舶信息。AIS 设备分为 A 类和 B 类:

| 类型 | 适用船舶 | 发射功率 | 报告间隔 | 功能 |
|------|---------|---------|---------|------|
| A类 | 300总吨以上商船 | 12.5W | 2秒-3分钟 | 完整功能 |
| B类 | 小型船舶、渔船 | 2W | 30秒-3分钟 | 基本功能 |

## 数据形态

AIS 常见形态包括 NMEA 文本报文与解码后的结构化表。工程上建议保留原始报文引用字段,便于排错与追溯。

### NMEA 报文格式

AIS 报文使用 AIVDM/AIVDO 封装格式:

```
!AIVDM,1,1,,A,13aG?P0P00PD2t8MD5MTDwwP0<2R,0*2F
```

各字段含义:

| 位置 | 示例值 | 含义 |
|------|--------|------|
| 1 | !AIVDM | 报文类型 (AIVDM=接收, AIVDO=本船) |
| 2 | 1 | 分片总数 |
| 3 | 1 | 当前分片序号 |
| 4 | (空) | 序列 ID (多分片时使用) |
| 5 | A | 通道 (A 或 B) |
| 6 | 13aG?P0... | 负载数据 (6位ASCII编码) |
| 7 | 0 | 填充位数 |
| 8 | *2F | 校验和 |

### 消息类型

常见的 AIS 消息类型:

| 类型 | 名称 | 内容 | 来源 |
|------|------|------|------|
| 1,2,3 | 位置报告 | 位置、速度、航向 | A类设备 |
| 5 | 静态和航次数据 | 船名、目的港、ETA | A类设备 |
| 18 | 标准位置报告 | 位置、速度、航向 | B类设备 |
| 21 | 助航设备报告 | 浮标、灯塔位置 | AtoN |
| 24 | 静态数据 | 船名、呼号 | B类设备 |

## Python 解析示例

### 使用 pyais 库

```python
from pyais import decode

# 解析单条报文
nmea = "!AIVDM,1,1,,A,13aG?P0P00PD2t8MD5MTDwwP0<2R,0*2F"
msg = decode(nmea)

# 获取解码后的字段
print(f"消息类型: {msg.msg_type}")
print(f"MMSI: {msg.mmsi}")
print(f"纬度: {msg.lat}")
print(f"经度: {msg.lon}")
print(f"对地速度: {msg.speed} 节")
print(f"对地航向: {msg.course}°")
print(f"航向: {msg.heading}°")
print(f"航行状态: {msg.status}")
```

### 批量解析文件

```python
from pyais import decode
import pandas as pd

def parse_ais_file(filepath):
    """解析 AIS NMEA 文件"""
    records = []

    with open(filepath, "r") as f:
        for line in f:
            line = line.strip()
            # 跳过注释和空行
            if not line or line.startswith("#"):
                continue

            try:
                msg = decode(line)
                # 只处理位置报告 (类型 1, 2, 3, 18)
                if msg.msg_type in [1, 2, 3, 18]:
                    records.append({
                        "raw": line,
                        "msg_type": msg.msg_type,
                        "mmsi": msg.mmsi,
                        "lat": msg.lat,
                        "lon": msg.lon,
                        "sog": msg.speed,
                        "cog": msg.course,
                        "heading": getattr(msg, "heading", None),
                        "nav_status": getattr(msg, "status", None),
                    })
            except Exception as e:
                print(f"解析失败: {line[:50]}... 错误: {e}")

    return pd.DataFrame(records)

# 使用示例
df = parse_ais_file("../../datasets/ais-samples/ais_nmea_sample.txt")
print(f"解析成功: {len(df)} 条记录")
print(df.head())
```

### 校验和验证

```python
def verify_checksum(nmea_sentence):
    """验证 NMEA 校验和"""
    # 去除首尾字符
    if nmea_sentence.startswith("!") or nmea_sentence.startswith("$"):
        nmea_sentence = nmea_sentence[1:]

    # 分离校验和
    if "*" not in nmea_sentence:
        return False, "无校验和"

    data, checksum = nmea_sentence.rsplit("*", 1)
    checksum = checksum.strip()

    # 计算 XOR 校验和
    calculated = 0
    for char in data:
        calculated ^= ord(char)

    expected = int(checksum, 16)

    if calculated == expected:
        return True, f"校验通过 ({checksum})"
    else:
        return False, f"校验失败 (期望: {checksum}, 计算: {calculated:02X})"

# 测试
test_sentences = [
    "!AIVDM,1,1,,A,13aG?P0P00PD2t8MD5MTDwwP0<2R,0*2F",  # 正确
    "!AIVDM,1,1,,A,13aG?P0P00PD2t8MD5MTDwwP0<2R,0*FF",  # 错误
]

for sentence in test_sentences:
    valid, message = verify_checksum(sentence)
    print(f"{valid}: {message}")
```

## 字段含义与质量问题

学习字段时优先关注三个问题:
- 字段表示的物理含义是什么
- 字段更新频率大致如何
- 字段缺失或异常时会如何表现

### 关键字段说明

| 字段 | 含义 | 有效范围 | 异常标识 |
|------|------|---------|---------|
| MMSI | 海上移动业务识别码 | 9位数字 | 格式错误 |
| lat | 纬度 | -90 ~ +90 | 91 表示不可用 |
| lon | 经度 | -180 ~ +180 | 181 表示不可用 |
| sog | 对地速度 | 0 ~ 102.2 节 | 102.3 表示不可用 |
| cog | 对地航向 | 0 ~ 359.9° | 360 表示不可用 |
| heading | 真航向 | 0 ~ 359° | 511 表示不可用 |
| nav_status | 航行状态 | 0 ~ 15 | 15 表示未定义 |
| rot | 转向率 | ±126°/min | 128 表示不可用 |

### 数据质量检查

```python
def check_ais_quality(df):
    """AIS 数据质量检查"""
    issues = []

    # 位置有效性检查
    invalid_pos = df[(df["lat"] > 90) | (df["lat"] < -90) |
                     (df["lon"] > 180) | (df["lon"] < -180)]
    if len(invalid_pos) > 0:
        issues.append(f"无效位置: {len(invalid_pos)} 条")

    # 速度有效性检查
    if "sog" in df.columns:
        invalid_speed = df[df["sog"] > 102.2]
        if len(invalid_speed) > 0:
            issues.append(f"无效速度: {len(invalid_speed)} 条")

    # MMSI 格式检查
    if "mmsi" in df.columns:
        invalid_mmsi = df[df["mmsi"].astype(str).str.len() != 9]
        if len(invalid_mmsi) > 0:
            issues.append(f"无效MMSI: {len(invalid_mmsi)} 条")

    # 位置跳变检查
    if len(df) > 1:
        df_sorted = df.sort_values(["mmsi", "timestamp"] if "timestamp" in df.columns else "mmsi")
        # 计算连续点间距离 (简化版)
        df_sorted["lat_diff"] = df_sorted.groupby("mmsi")["lat"].diff().abs()
        df_sorted["lon_diff"] = df_sorted.groupby("mmsi")["lon"].diff().abs()
        jumps = df_sorted[(df_sorted["lat_diff"] > 1) | (df_sorted["lon_diff"] > 1)]
        if len(jumps) > 0:
            issues.append(f"位置跳变: {len(jumps)} 条")

    if issues:
        print("数据质量问题:")
        for issue in issues:
            print(f"  - {issue}")
    else:
        print("数据质量检查通过")

    return issues
```

## AIS 数据的局限性

AIS 数据存在以下固有局限:

1. **覆盖局限**: 依赖 VHF 传播,远洋区域需要卫星 AIS
2. **合规依赖**: 部分船舶可能关闭或伪造 AIS
3. **延迟问题**: 卫星 AIS 延迟可达数分钟
4. **精度限制**: 位置精度约 10 米,更新间隔 2 秒 - 3 分钟
5. **欺骗风险**: MMSI、位置等字段可被篡改

工程实践中需要结合雷达、LRIT 等多源数据进行交叉验证。

## 与实验的关系

本节内容直接支撑:
- Lab03: AIS 报文解析实验
- Lab05: 轨迹可视化实验
- Lab06: 多源数据融合实验
