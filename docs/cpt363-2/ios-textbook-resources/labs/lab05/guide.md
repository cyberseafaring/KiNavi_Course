# 轨迹可视化实验

本实验把 AIS 或轨迹点数据转化为可视化结果,并通过回放理解时间语义、采样间隔与轨迹平滑的关系。实验重点是让学生能够把数据表转化为可解释的态势呈现。

## 学习目标

- 能够加载和清洗轨迹数据
- 能够绑制静态轨迹图
- 能够实现简单的轨迹回放
- 能够计算和解释航行指标

## 数据与工具

- 轨迹数据: `../../datasets/ais-samples/vessel_tracks.csv`
- Python 3.10+
- 必需库: `pandas`, `matplotlib`
- 可选库: `folium` (交互式地图)

## 实验步骤

### 第一步: 读取轨迹点

加载 CSV,检查时间戳字段是否单调递增,检查经纬度是否存在缺失与异常值。

```python
import pandas as pd
import matplotlib.pyplot as plt

def load_trajectory_data(filepath):
    """加载轨迹数据"""
    df = pd.read_csv(filepath)

    # 转换时间戳
    df["timestamp"] = pd.to_datetime(df["timestamp"])

    # 基础信息
    print(f"数据加载完成:")
    print(f"  记录数: {len(df)}")
    print(f"  船舶数: {df['mmsi'].nunique()}")
    print(f"  时间范围: {df['timestamp'].min()} ~ {df['timestamp'].max()}")

    return df

def check_data_quality(df):
    """数据质量检查"""
    issues = []

    # 缺失值检查
    missing = df[["lat", "lon", "sog"]].isnull().sum()
    if missing.sum() > 0:
        issues.append(f"缺失值: lat={missing['lat']}, lon={missing['lon']}, sog={missing['sog']}")

    # 位置范围检查
    invalid_lat = df[(df["lat"] < -90) | (df["lat"] > 90)]
    invalid_lon = df[(df["lon"] < -180) | (df["lon"] > 180)]
    if len(invalid_lat) > 0:
        issues.append(f"纬度异常: {len(invalid_lat)} 条")
    if len(invalid_lon) > 0:
        issues.append(f"经度异常: {len(invalid_lon)} 条")

    # 时间戳单调性检查
    for mmsi in df["mmsi"].unique():
        vessel_df = df[df["mmsi"] == mmsi].sort_values("timestamp")
        if not vessel_df["timestamp"].is_monotonic_increasing:
            issues.append(f"船舶 {mmsi} 时间戳非单调递增")

    if issues:
        print("数据质量问题:")
        for issue in issues:
            print(f"  - {issue}")
    else:
        print("数据质量检查通过")

    return issues

# 加载数据
df = load_trajectory_data("../../datasets/ais-samples/vessel_tracks.csv")
check_data_quality(df)
```

### 第二步: 单船轨迹绑制

在二维坐标系上绑制轨迹线,并用颜色或点大小表达时间或速度变化。

```python
def plot_single_vessel_track(df, mmsi):
    """绑制单艘船舶的轨迹"""
    vessel_df = df[df["mmsi"] == mmsi].sort_values("timestamp")
    vessel_name = vessel_df["vessel_name"].iloc[0] if "vessel_name" in vessel_df else str(mmsi)

    fig, axes = plt.subplots(1, 2, figsize=(14, 6))

    # 左图: 轨迹与速度
    scatter = axes[0].scatter(vessel_df["lon"], vessel_df["lat"],
                               c=vessel_df["sog"], cmap="viridis",
                               s=30, alpha=0.7)
    axes[0].plot(vessel_df["lon"], vessel_df["lat"], "b-", alpha=0.3, linewidth=1)

    # 标记起点和终点
    axes[0].scatter(vessel_df["lon"].iloc[0], vessel_df["lat"].iloc[0],
                    c="green", s=100, marker="o", label="起点", zorder=5)
    axes[0].scatter(vessel_df["lon"].iloc[-1], vessel_df["lat"].iloc[-1],
                    c="red", s=100, marker="s", label="终点", zorder=5)

    axes[0].set_xlabel("经度")
    axes[0].set_ylabel("纬度")
    axes[0].set_title(f"{vessel_name} 轨迹 (颜色=速度)")
    axes[0].legend()
    axes[0].grid(True, alpha=0.3)
    axes[0].axis("equal")
    plt.colorbar(scatter, ax=axes[0], label="速度 (节)")

    # 右图: 速度时间序列
    axes[1].plot(vessel_df["timestamp"], vessel_df["sog"], "b-", marker="o", markersize=3)
    axes[1].set_xlabel("时间")
    axes[1].set_ylabel("速度 (节)")
    axes[1].set_title("速度变化")
    axes[1].grid(True, alpha=0.3)
    axes[1].tick_params(axis="x", rotation=45)

    plt.tight_layout()
    plt.savefig(f"track_{mmsi}.png", dpi=150)
    plt.show()

# 绑制第一艘船的轨迹
first_mmsi = df["mmsi"].iloc[0]
plot_single_vessel_track(df, first_mmsi)
```

### 第三步: 多船轨迹对比

在同一张图上显示多艘船舶的轨迹。

```python
def plot_multi_vessel_tracks(df):
    """绑制多艘船舶的轨迹"""
    vessels = df["mmsi"].unique()
    colors = plt.cm.Set1.colors

    plt.figure(figsize=(12, 10))

    for i, mmsi in enumerate(vessels):
        vessel_df = df[df["mmsi"] == mmsi].sort_values("timestamp")
        color = colors[i % len(colors)]
        name = vessel_df["vessel_name"].iloc[0] if "vessel_name" in vessel_df else str(mmsi)

        plt.plot(vessel_df["lon"], vessel_df["lat"],
                 color=color, linewidth=2, label=name)

        # 起点标记
        plt.scatter(vessel_df["lon"].iloc[0], vessel_df["lat"].iloc[0],
                    color=color, s=80, marker="o", edgecolor="white", zorder=5)

    plt.xlabel("经度")
    plt.ylabel("纬度")
    plt.title("多船轨迹对比")
    plt.legend(loc="upper left", fontsize=8)
    plt.grid(True, alpha=0.3)
    plt.axis("equal")
    plt.tight_layout()
    plt.savefig("multi_tracks.png", dpi=150)
    plt.show()

plot_multi_vessel_tracks(df)
```

### 第四步: 轨迹回放

按时间顺序逐点更新当前位置,形成简单回放。回放的目的不是做动画效果,而是暴露时间戳异常或采样间隔不稳定造成的跳变。

```python
import matplotlib.animation as animation
from IPython.display import HTML

def create_trajectory_animation(df, mmsi, interval_ms=200):
    """创建轨迹回放动画"""
    vessel_df = df[df["mmsi"] == mmsi].sort_values("timestamp").reset_index(drop=True)

    fig, ax = plt.subplots(figsize=(10, 8))

    # 设置坐标范围
    margin = 0.01
    ax.set_xlim(vessel_df["lon"].min() - margin, vessel_df["lon"].max() + margin)
    ax.set_ylim(vessel_df["lat"].min() - margin, vessel_df["lat"].max() + margin)
    ax.set_xlabel("经度")
    ax.set_ylabel("纬度")
    ax.grid(True, alpha=0.3)
    ax.axis("equal")

    # 初始化图形元素
    trail_line, = ax.plot([], [], "b-", alpha=0.5, linewidth=1)
    current_point, = ax.plot([], [], "ro", markersize=10)
    time_text = ax.text(0.02, 0.98, "", transform=ax.transAxes, verticalalignment="top")

    def init():
        trail_line.set_data([], [])
        current_point.set_data([], [])
        time_text.set_text("")
        return trail_line, current_point, time_text

    def animate(frame):
        # 轨迹线 (历史)
        trail_line.set_data(vessel_df["lon"][:frame+1], vessel_df["lat"][:frame+1])
        # 当前点
        current_point.set_data([vessel_df["lon"].iloc[frame]], [vessel_df["lat"].iloc[frame]])
        # 时间戳
        time_text.set_text(f"时间: {vessel_df['timestamp'].iloc[frame]}\n"
                          f"速度: {vessel_df['sog'].iloc[frame]:.1f} 节")
        return trail_line, current_point, time_text

    anim = animation.FuncAnimation(
        fig, animate, init_func=init,
        frames=len(vessel_df), interval=interval_ms,
        blit=True, repeat=False
    )

    return anim

# 创建动画 (在 Jupyter 中可用 HTML(anim.to_jshtml()) 显示)
# anim = create_trajectory_animation(df, first_mmsi)
# anim.save("trajectory_replay.gif", writer="pillow")
```

### 第五步: 指标计算

计算航行指标,并说明这些指标受采样间隔影响的原因。

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

def calculate_voyage_metrics(df, mmsi):
    """计算航行指标"""
    vessel_df = df[df["mmsi"] == mmsi].sort_values("timestamp")

    if len(vessel_df) < 2:
        return None

    # 总航程
    total_distance = 0
    for i in range(1, len(vessel_df)):
        prev = vessel_df.iloc[i-1]
        curr = vessel_df.iloc[i]
        dist = haversine_distance(prev["lat"], prev["lon"], curr["lat"], curr["lon"])
        total_distance += dist

    # 时间跨度
    time_span = (vessel_df["timestamp"].iloc[-1] - vessel_df["timestamp"].iloc[0]).total_seconds() / 3600

    # 平均速度 (基于报告)
    avg_speed_reported = vessel_df["sog"].mean()

    # 平均速度 (基于航程)
    avg_speed_calculated = total_distance / time_span if time_span > 0 else 0

    # 采样统计
    time_deltas = vessel_df["timestamp"].diff().dt.total_seconds().dropna()
    avg_interval = time_deltas.mean()
    max_interval = time_deltas.max()

    metrics = {
        "mmsi": mmsi,
        "vessel_name": vessel_df["vessel_name"].iloc[0] if "vessel_name" in vessel_df else str(mmsi),
        "point_count": len(vessel_df),
        "total_distance_nm": round(total_distance, 2),
        "time_span_hours": round(time_span, 2),
        "avg_speed_reported": round(avg_speed_reported, 1),
        "avg_speed_calculated": round(avg_speed_calculated, 1),
        "avg_interval_sec": round(avg_interval, 1),
        "max_interval_sec": round(max_interval, 1)
    }

    return metrics

# 计算各船指标
print("=" * 60)
print("航行指标统计")
print("=" * 60)

for mmsi in df["mmsi"].unique():
    metrics = calculate_voyage_metrics(df, mmsi)
    if metrics:
        print(f"\n{metrics['vessel_name']} ({metrics['mmsi']}):")
        print(f"  轨迹点数: {metrics['point_count']}")
        print(f"  总航程: {metrics['total_distance_nm']} 海里")
        print(f"  航行时间: {metrics['time_span_hours']} 小时")
        print(f"  报告平均速度: {metrics['avg_speed_reported']} 节")
        print(f"  计算平均速度: {metrics['avg_speed_calculated']} 节")
        print(f"  平均采样间隔: {metrics['avg_interval_sec']} 秒")
        print(f"  最大采样间隔: {metrics['max_interval_sec']} 秒")
```

### 第六步: 交互式地图 (可选)

使用 Folium 创建交互式地图。

```python
import folium

def create_interactive_map(df):
    """创建交互式轨迹地图"""
    # 计算中心点
    center_lat = df["lat"].mean()
    center_lon = df["lon"].mean()

    m = folium.Map(location=[center_lat, center_lon], zoom_start=12)

    # 颜色映射
    colors = ["blue", "green", "red", "purple", "orange"]
    vessels = df["mmsi"].unique()

    for i, mmsi in enumerate(vessels):
        vessel_df = df[df["mmsi"] == mmsi].sort_values("timestamp")
        name = vessel_df["vessel_name"].iloc[0] if "vessel_name" in vessel_df else str(mmsi)
        color = colors[i % len(colors)]

        # 轨迹线
        coords = list(zip(vessel_df["lat"], vessel_df["lon"]))
        folium.PolyLine(coords, weight=3, color=color, opacity=0.8, popup=name).add_to(m)

        # 起点标记
        folium.CircleMarker(
            coords[0], radius=8, color=color, fill=True,
            popup=f"{name} 起点"
        ).add_to(m)

        # 终点标记
        folium.CircleMarker(
            coords[-1], radius=8, color=color, fill=True, fill_color="white",
            popup=f"{name} 终点"
        ).add_to(m)

    m.save("tracks_map.html")
    print("交互式地图已保存为 tracks_map.html")
    return m

# 创建地图
# create_interactive_map(df)
```

## 预期结果

- 输出单船轨迹图 (静态)
- 输出多船轨迹对比图
- 完成一次可重复的轨迹回放
- 给出各船航行指标并解释采样间隔的影响

## 扩展任务

### 任务1: 轨迹平滑

实现简单的移动平均平滑:

```python
def smooth_trajectory(df, window=3):
    """轨迹移动平均平滑"""
    df = df.copy()
    df["lat_smooth"] = df["lat"].rolling(window=window, center=True).mean()
    df["lon_smooth"] = df["lon"].rolling(window=window, center=True).mean()
    return df.dropna()
```

### 任务2: 异常点检测

标记位置跳变点:

```python
def detect_jumps(df, max_speed=50):
    """检测位置跳变"""
    jumps = []
    for i in range(1, len(df)):
        prev, curr = df.iloc[i-1], df.iloc[i]
        dist = haversine_distance(prev["lat"], prev["lon"], curr["lat"], curr["lon"])
        time_hours = (curr["timestamp"] - prev["timestamp"]).total_seconds() / 3600
        if time_hours > 0 and dist / time_hours > max_speed:
            jumps.append(i)
    return jumps
```

## 常见问题

### 图形坐标比例失调

使用 `plt.axis("equal")` 确保经纬度比例一致。

### 动画无法显示

确保安装了 `pillow` 或使用 Jupyter 的 `HTML(anim.to_jshtml())`。
