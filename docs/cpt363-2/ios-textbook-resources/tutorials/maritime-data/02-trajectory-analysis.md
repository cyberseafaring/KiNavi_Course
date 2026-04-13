# 船舶轨迹分析

本节介绍轨迹分析的基本问题,目标是让学生能够用时间语义把轨迹数据组织成可解释的过程。

## 学习目标

- 能够理解轨迹数据的时间语义
- 能够进行轨迹数据清洗和预处理
- 能够识别航行段和停泊段
- 能够检测轨迹中的异常行为

## 时间语义

轨迹分析首先要确认时间戳的来源。采集时间与到达时间混用会导致回放和统计出现系统性偏差。

### 时间戳类型

| 类型 | 含义 | 来源 | 用途 |
|------|------|------|------|
| 事件时间 | 数据产生的时刻 | GPS/设备时钟 | 轨迹回放、速度计算 |
| 处理时间 | 数据到达系统的时刻 | 服务器时钟 | 日志排序、系统监控 |
| 入库时间 | 数据写入数据库的时刻 | 数据库时钟 | 数据追溯 |

### 时间戳处理

```python
import pandas as pd
from datetime import timezone

def normalize_timestamps(df, timestamp_col="timestamp"):
    """时间戳标准化处理"""
    # 转换为 datetime
    df[timestamp_col] = pd.to_datetime(df[timestamp_col])

    # 确保时区信息 (假设 UTC)
    if df[timestamp_col].dt.tz is None:
        df[timestamp_col] = df[timestamp_col].dt.tz_localize("UTC")

    # 按时间排序
    df = df.sort_values(timestamp_col).reset_index(drop=True)

    # 计算时间间隔
    df["time_delta"] = df[timestamp_col].diff().dt.total_seconds()

    return df
```

## 轨迹数据清洗

### 常见问题及处理

```python
import pandas as pd
import numpy as np

def clean_trajectory(df):
    """轨迹数据清洗"""
    original_len = len(df)
    issues = []

    # 1. 移除无效位置
    valid_pos = (df["lat"].between(-90, 90)) & (df["lon"].between(-180, 180))
    invalid_pos_count = (~valid_pos).sum()
    if invalid_pos_count > 0:
        issues.append(f"移除无效位置: {invalid_pos_count} 条")
    df = df[valid_pos].copy()

    # 2. 移除重复时间戳
    duplicates = df.duplicated(subset=["mmsi", "timestamp"], keep="first")
    dup_count = duplicates.sum()
    if dup_count > 0:
        issues.append(f"移除重复时间戳: {dup_count} 条")
    df = df[~duplicates].copy()

    # 3. 按时间排序
    df = df.sort_values(["mmsi", "timestamp"]).reset_index(drop=True)

    # 4. 计算衍生字段
    df["time_delta"] = df.groupby("mmsi")["timestamp"].diff().dt.total_seconds()

    # 5. 标记异常间隔 (超过10分钟)
    df["gap_flag"] = df["time_delta"] > 600

    print(f"清洗完成: {original_len} -> {len(df)} 条")
    for issue in issues:
        print(f"  {issue}")

    return df
```

### 位置跳变检测

```python
from math import radians, sin, cos, sqrt, atan2

def haversine_distance(lat1, lon1, lat2, lon2):
    """计算两点间的大圆距离 (海里)"""
    R = 3440.065  # 地球半径 (海里)

    lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])
    dlat = lat2 - lat1
    dlon = lon2 - lon1

    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * atan2(sqrt(a), sqrt(1-a))

    return R * c

def detect_position_jumps(df, max_speed_knots=50):
    """检测位置跳变"""
    df = df.sort_values(["mmsi", "timestamp"]).copy()

    jumps = []

    for mmsi in df["mmsi"].unique():
        vessel_df = df[df["mmsi"] == mmsi].reset_index()

        for i in range(1, len(vessel_df)):
            prev = vessel_df.iloc[i-1]
            curr = vessel_df.iloc[i]

            # 计算距离和时间
            dist = haversine_distance(prev["lat"], prev["lon"],
                                       curr["lat"], curr["lon"])
            time_hours = (curr["timestamp"] - prev["timestamp"]).total_seconds() / 3600

            if time_hours > 0:
                implied_speed = dist / time_hours

                if implied_speed > max_speed_knots:
                    jumps.append({
                        "mmsi": mmsi,
                        "timestamp": curr["timestamp"],
                        "distance_nm": round(dist, 2),
                        "time_hours": round(time_hours, 4),
                        "implied_speed": round(implied_speed, 1)
                    })

    return pd.DataFrame(jumps)
```

## 航行段与停泊段识别

### 基于速度的分段

```python
def identify_segments(df, speed_threshold=0.5, min_duration_minutes=30):
    """识别航行段和停泊段"""
    df = df.sort_values(["mmsi", "timestamp"]).copy()

    # 标记移动状态
    df["is_moving"] = df["sog"] > speed_threshold

    # 计算状态变化
    df["state_change"] = df.groupby("mmsi")["is_moving"].diff().fillna(0) != 0

    # 分配段 ID
    df["segment_id"] = df.groupby("mmsi")["state_change"].cumsum()

    # 汇总各段
    segments = df.groupby(["mmsi", "segment_id"]).agg({
        "timestamp": ["first", "last", "count"],
        "is_moving": "first",
        "lat": ["first", "last", "mean"],
        "lon": ["first", "last", "mean"],
        "sog": ["mean", "max"]
    }).reset_index()

    segments.columns = ["mmsi", "segment_id", "start_time", "end_time", "point_count",
                        "is_moving", "start_lat", "end_lat", "mean_lat",
                        "start_lon", "end_lon", "mean_lon", "avg_speed", "max_speed"]

    # 计算持续时间
    segments["duration_minutes"] = (
        (segments["end_time"] - segments["start_time"]).dt.total_seconds() / 60
    ).round(1)

    # 标记段类型
    segments["segment_type"] = segments.apply(
        lambda row: "航行" if row["is_moving"] else
                   ("停泊" if row["duration_minutes"] >= min_duration_minutes else "短停"),
        axis=1
    )

    return segments

# 使用示例
df = pd.read_csv("../../datasets/ais-samples/vessel_tracks.csv")
df["timestamp"] = pd.to_datetime(df["timestamp"])
segments = identify_segments(df)
print(segments[["mmsi", "segment_type", "start_time", "duration_minutes", "avg_speed"]])
```

### 停泊点聚类

```python
from collections import defaultdict

def find_anchorages(df, speed_threshold=0.5, min_points=5, cluster_radius_nm=0.5):
    """识别停泊区域"""
    # 筛选低速点
    stationary = df[df["sog"] <= speed_threshold].copy()

    if len(stationary) == 0:
        return pd.DataFrame()

    anchorages = []

    for mmsi in stationary["mmsi"].unique():
        vessel_points = stationary[stationary["mmsi"] == mmsi]

        if len(vessel_points) >= min_points:
            # 简单聚类: 使用中心点
            center_lat = vessel_points["lat"].mean()
            center_lon = vessel_points["lon"].mean()

            anchorages.append({
                "mmsi": mmsi,
                "center_lat": round(center_lat, 6),
                "center_lon": round(center_lon, 6),
                "point_count": len(vessel_points),
                "start_time": vessel_points["timestamp"].min(),
                "end_time": vessel_points["timestamp"].max(),
            })

    return pd.DataFrame(anchorages)
```

## 异常行为检测

### 速度异常

```python
def detect_speed_anomalies(df, vessel_type_speeds=None):
    """检测速度异常"""
    if vessel_type_speeds is None:
        # 默认速度阈值 (节)
        vessel_type_speeds = {
            "default": {"max": 30, "typical": 12},
            "container": {"max": 25, "typical": 18},
            "tanker": {"max": 18, "typical": 12},
            "fishing": {"max": 15, "typical": 8},
        }

    anomalies = []

    for _, row in df.iterrows():
        limits = vessel_type_speeds.get("default")
        if row["sog"] > limits["max"]:
            anomalies.append({
                "mmsi": row["mmsi"],
                "timestamp": row["timestamp"],
                "anomaly_type": "over_speed",
                "value": row["sog"],
                "threshold": limits["max"]
            })

    return pd.DataFrame(anomalies)
```

### 航向突变检测

```python
def detect_course_changes(df, threshold_degrees=45):
    """检测航向突变"""
    df = df.sort_values(["mmsi", "timestamp"]).copy()

    def angle_diff(a, b):
        """计算角度差 (考虑环绕)"""
        diff = abs(a - b)
        return min(diff, 360 - diff)

    df["cog_prev"] = df.groupby("mmsi")["cog"].shift(1)
    df["cog_change"] = df.apply(
        lambda row: angle_diff(row["cog"], row["cog_prev"])
        if pd.notna(row["cog_prev"]) else 0,
        axis=1
    )

    sudden_turns = df[df["cog_change"] > threshold_degrees][
        ["mmsi", "timestamp", "cog_prev", "cog", "cog_change"]
    ]

    return sudden_turns
```

## 轨迹可视化

```python
import matplotlib.pyplot as plt

def plot_trajectory_with_segments(df, segments, mmsi):
    """绑制带分段标注的轨迹"""
    vessel_df = df[df["mmsi"] == mmsi].copy()
    vessel_segments = segments[segments["mmsi"] == mmsi]

    fig, ax = plt.subplots(figsize=(10, 8))

    # 绑制完整轨迹
    ax.plot(vessel_df["lon"], vessel_df["lat"], "b-", alpha=0.3, linewidth=1)

    # 按段类型着色
    colors = {"航行": "blue", "停泊": "red", "短停": "orange"}

    for _, seg in vessel_segments.iterrows():
        seg_data = vessel_df[
            (vessel_df["timestamp"] >= seg["start_time"]) &
            (vessel_df["timestamp"] <= seg["end_time"])
        ]
        color = colors.get(seg["segment_type"], "gray")
        ax.plot(seg_data["lon"], seg_data["lat"],
                color=color, linewidth=2, label=seg["segment_type"])

    # 去重图例
    handles, labels = ax.get_legend_handles_labels()
    by_label = dict(zip(labels, handles))
    ax.legend(by_label.values(), by_label.keys())

    ax.set_xlabel("经度")
    ax.set_ylabel("纬度")
    ax.set_title(f"船舶 {mmsi} 轨迹分析")
    ax.grid(True, alpha=0.3)
    ax.axis("equal")

    plt.tight_layout()
    plt.show()
```

## 与实验的关系

本节内容直接支撑:
- Lab05: 轨迹可视化实验
- Lab06: 多源数据融合实验 (轨迹对齐)
- Lab08: 船舶行为分析案例
