# Python 数据结构

本节聚焦数据处理常用的数据结构,目标是让学生能够把航行数据、日志数据组织成可计算的形式。

## 学习目标

- 能够使用列表、字典、元组存储航行数据
- 能够使用 pandas DataFrame 进行数据处理
- 能够读取和解析 CSV、JSON 格式数据
- 能够进行基本的数据清洗和校验

## 基本数据结构

### 列表 (List)

列表适合按时间顺序存放采样点:

```python
# 船舶轨迹点列表
track_points = [
    {"timestamp": "2026-01-25T08:00:00Z", "lat": 38.9000, "lon": 121.6000},
    {"timestamp": "2026-01-25T08:01:00Z", "lat": 38.9002, "lon": 121.6007},
    {"timestamp": "2026-01-25T08:02:00Z", "lat": 38.9004, "lon": 121.6014},
]

# 遍历轨迹点
for point in track_points:
    print(f"{point['timestamp']}: ({point['lat']}, {point['lon']})")
```

### 字典 (Dict)

字典适合表达字段化记录:

```python
# 船舶信息
vessel = {
    "mmsi": 412345678,
    "name": "DALIAN STAR",
    "ship_type": 70,
    "length": 180,
    "beam": 28,
    "destination": "SHANGHAI"
}

# 访问字段
print(f"船名: {vessel['name']}")
print(f"目的港: {vessel.get('destination', '未知')}")  # 安全访问
```

### 元组 (Tuple)

元组适合存储不可变的坐标对:

```python
# 位置坐标
position = (38.9000, 121.6000)
lat, lon = position  # 解包

# 多个坐标点
waypoints = [
    (38.9000, 121.6000),
    (38.9200, 121.6500),
    (38.9400, 121.7000),
]
```

## Pandas DataFrame

pandas 是数据处理的核心工具,DataFrame 可以理解为带标签的二维表格。

### 从 CSV 读取数据

```python
import pandas as pd

# 读取 AIS 解码数据
df = pd.read_csv("../../datasets/ais-samples/ais_decoded_sample.csv")

# 查看数据概览
print(df.head())        # 前5行
print(df.info())        # 数据类型和缺失值
print(df.describe())    # 统计摘要
```

### 从 JSON 读取数据

```python
import json

# 读取船舶信息
with open("../../datasets/ais-samples/vessel_info.json", "r") as f:
    data = json.load(f)

# 转换为 DataFrame
vessels_df = pd.DataFrame(data["vessels"])
print(vessels_df)
```

### 数据筛选

```python
# 筛选特定船舶的数据
mmsi = 412345678
vessel_data = df[df["mmsi"] == mmsi]

# 筛选有效位置数据
valid_data = df[df["quality_flag"] == "VALID"]

# 筛选速度大于10节的记录
high_speed = df[df["sog"] > 10]

# 组合条件
filtered = df[(df["mmsi"] == mmsi) & (df["sog"] > 5)]
```

### 数据转换

```python
# 时间戳转换
df["timestamp"] = pd.to_datetime(df["timestamp"])

# 提取日期和小时
df["date"] = df["timestamp"].dt.date
df["hour"] = df["timestamp"].dt.hour

# 计算速度变化
df["sog_diff"] = df["sog"].diff()
```

## 面向数据处理的习惯

读取数据后先做三件事:检查缺失值、检查异常值、检查时间戳顺序。这个习惯能把很多后续错误提前暴露出来。

### 数据质量检查脚本

```python
import pandas as pd
import numpy as np

def check_data_quality(df, timestamp_col="timestamp"):
    """数据质量检查"""
    print("=" * 50)
    print("数据质量检查报告")
    print("=" * 50)

    # 1. 基本信息
    print(f"\n记录数: {len(df)}")
    print(f"字段数: {len(df.columns)}")

    # 2. 缺失值检查
    print("\n缺失值统计:")
    missing = df.isnull().sum()
    missing_pct = (missing / len(df) * 100).round(2)
    for col in df.columns:
        if missing[col] > 0:
            print(f"  {col}: {missing[col]} ({missing_pct[col]}%)")
    if missing.sum() == 0:
        print("  无缺失值")

    # 3. 位置异常检查
    if "lat" in df.columns and "lon" in df.columns:
        print("\n位置范围:")
        print(f"  纬度: {df['lat'].min():.4f} ~ {df['lat'].max():.4f}")
        print(f"  经度: {df['lon'].min():.4f} ~ {df['lon'].max():.4f}")

        # 检查超出范围的位置
        invalid_lat = df[(df['lat'] < -90) | (df['lat'] > 90)]
        invalid_lon = df[(df['lon'] < -180) | (df['lon'] > 180)]
        if len(invalid_lat) > 0:
            print(f"  警告: {len(invalid_lat)} 条记录纬度超出范围")
        if len(invalid_lon) > 0:
            print(f"  警告: {len(invalid_lon)} 条记录经度超出范围")

    # 4. 速度异常检查
    if "sog" in df.columns:
        print("\n速度统计:")
        print(f"  最小: {df['sog'].min():.1f} 节")
        print(f"  最大: {df['sog'].max():.1f} 节")
        print(f"  平均: {df['sog'].mean():.1f} 节")

        # AIS 速度上限为 102.2 节
        over_speed = df[df['sog'] > 102.2]
        if len(over_speed) > 0:
            print(f"  警告: {len(over_speed)} 条记录速度超出物理限制")

    # 5. 时间戳顺序检查
    if timestamp_col in df.columns:
        df_sorted = df.sort_values(timestamp_col)
        if not df[timestamp_col].equals(df_sorted[timestamp_col]):
            print(f"\n警告: 时间戳未按顺序排列")
        else:
            print(f"\n时间戳顺序: 正常")

    print("\n" + "=" * 50)

# 使用示例
df = pd.read_csv("../../datasets/ais-samples/ais_decoded_sample.csv")
check_data_quality(df)
```

## 数据处理示例

### 轨迹数据处理

```python
import pandas as pd

def process_vessel_tracks(filepath):
    """处理船舶轨迹数据"""
    # 读取数据
    df = pd.read_csv(filepath)

    # 时间戳转换
    df["timestamp"] = pd.to_datetime(df["timestamp"])

    # 按船舶分组统计
    summary = df.groupby("mmsi").agg({
        "timestamp": ["min", "max", "count"],
        "sog": ["mean", "max"],
        "lat": ["first", "last"],
        "lon": ["first", "last"]
    }).round(2)

    return summary

# 使用
summary = process_vessel_tracks("../../datasets/ais-samples/vessel_tracks.csv")
print(summary)
```

### 通信日志分析

```python
import pandas as pd

def analyze_comm_logs(filepath):
    """分析通信日志"""
    df = pd.read_csv(filepath)

    # 按链路类型统计
    link_stats = df.groupby("link_type").agg({
        "rtt_ms": ["mean", "max", "std"],
        "packet_loss": "mean",
        "bytes": "sum"
    }).round(2)

    return link_stats

# 使用
stats = analyze_comm_logs("../../datasets/comm-logs/comm_log_sample.csv")
print(stats)
```

## 与实验的关系

本节内容直接支撑以下实验:
- Lab03: AIS 报文解析后的数据组织
- Lab04: NMEA 语句解析结果存储
- Lab05: 轨迹数据的读取和处理
- Lab06: 多源数据融合的数据结构设计
