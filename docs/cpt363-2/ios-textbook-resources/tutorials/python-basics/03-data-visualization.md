# 数据可视化

本节介绍用可视化表达数据含义,目标是让学生能够用图形回答工程问题,而不是只画出好看的图。

## 学习目标

- 能够使用 Matplotlib 绑制基础图表
- 能够绑制船舶轨迹图
- 能够绘制时间序列和性能对比图
- 能够使用交互式地图展示地理数据

## 绘图原则

图形需要服务于问题。绑图前先说明你要回答什么问题,例如:
- 轨迹是否连续?
- 速度是否异常?
- 通信延迟是否波动?
- 不同链路的性能差异有多大?

## Matplotlib 基础

### 基本折线图

```python
import pandas as pd
import matplotlib.pyplot as plt

# 读取数据
df = pd.read_csv("../../datasets/ais-samples/vessel_tracks.csv")

# 筛选单艘船舶
vessel_df = df[df["mmsi"] == 412345678].copy()
vessel_df["timestamp"] = pd.to_datetime(vessel_df["timestamp"])

# 绑制速度变化曲线
plt.figure(figsize=(10, 4))
plt.plot(vessel_df["timestamp"], vessel_df["sog"], marker="o", markersize=3)
plt.xlabel("时间")
plt.ylabel("对地速度 (节)")
plt.title("DALIAN STAR 速度变化")
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("speed_plot.png", dpi=150)
plt.show()
```

### 船舶轨迹图

```python
import pandas as pd
import matplotlib.pyplot as plt

# 读取轨迹数据
df = pd.read_csv("../../datasets/ais-samples/vessel_tracks.csv")

# 创建图形
plt.figure(figsize=(10, 8))

# 按船舶分组绑制不同颜色的轨迹
colors = plt.cm.Set1.colors
vessels = df["mmsi"].unique()

for i, mmsi in enumerate(vessels):
    vessel_df = df[df["mmsi"] == mmsi]
    color = colors[i % len(colors)]
    name = vessel_df["vessel_name"].iloc[0]

    plt.plot(vessel_df["lon"], vessel_df["lat"],
             color=color, linewidth=1.5, label=name)

    # 标记起点和终点
    plt.scatter(vessel_df["lon"].iloc[0], vessel_df["lat"].iloc[0],
                color=color, marker="o", s=50, zorder=5)
    plt.scatter(vessel_df["lon"].iloc[-1], vessel_df["lat"].iloc[-1],
                color=color, marker="s", s=50, zorder=5)

plt.xlabel("经度")
plt.ylabel("纬度")
plt.title("多船轨迹显示")
plt.legend(loc="upper left", fontsize=8)
plt.grid(True, alpha=0.3)
plt.axis("equal")
plt.tight_layout()
plt.savefig("multi_vessel_tracks.png", dpi=150)
plt.show()
```

### 通信延迟对比

```python
import pandas as pd
import matplotlib.pyplot as plt

# 读取延迟数据
df = pd.read_csv("../../datasets/comm-logs/latency_data.csv")

# 按链路类型分组
link_types = df["link_type"].unique()

fig, axes = plt.subplots(2, 2, figsize=(12, 8))
axes = axes.flatten()

for ax, link_type in zip(axes, link_types):
    link_df = df[df["link_type"] == link_type]

    ax.fill_between(range(len(link_df)),
                    link_df["rtt_min_ms"],
                    link_df["rtt_max_ms"],
                    alpha=0.3, label="RTT范围")
    ax.plot(link_df["rtt_avg_ms"], marker="o", markersize=4, label="平均RTT")

    ax.set_title(f"{link_type} 链路延迟")
    ax.set_xlabel("采样点")
    ax.set_ylabel("延迟 (ms)")
    ax.legend(fontsize=8)
    ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig("latency_comparison.png", dpi=150)
plt.show()
```

### 异常检测可视化

```python
import pandas as pd
import matplotlib.pyplot as plt

# 读取异常数据
df = pd.read_csv("../../datasets/security/anomaly_data.csv")

# 按严重程度着色
severity_colors = {
    "low": "#5CA078",      # 绿色
    "medium": "#DC9656",   # 橙色
    "high": "#C0392B",     # 红色
    "critical": "#8E44AD"  # 紫色
}

plt.figure(figsize=(12, 6))

for severity in ["low", "medium", "high", "critical"]:
    subset = df[df["severity"] == severity]
    plt.scatter(range(len(subset)), subset["deviation_sigma"],
                c=severity_colors[severity], label=severity,
                s=subset["confidence"] * 100, alpha=0.7)

plt.xlabel("事件序号")
plt.ylabel("偏差 (σ)")
plt.title("异常事件分布")
plt.legend(title="严重程度")
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("anomaly_detection.png", dpi=150)
plt.show()
```

## 子图布局

当需要对比多个视图时,使用子图布局:

```python
import pandas as pd
import matplotlib.pyplot as plt

# 读取数据
df = pd.read_csv("../../datasets/ais-samples/vessel_tracks.csv")
vessel_df = df[df["mmsi"] == 412345678].copy()
vessel_df["timestamp"] = pd.to_datetime(vessel_df["timestamp"])

fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 左上: 轨迹
axes[0, 0].plot(vessel_df["lon"], vessel_df["lat"], "b-", linewidth=1)
axes[0, 0].set_xlabel("经度")
axes[0, 0].set_ylabel("纬度")
axes[0, 0].set_title("航行轨迹")
axes[0, 0].axis("equal")
axes[0, 0].grid(True, alpha=0.3)

# 右上: 速度
axes[0, 1].plot(vessel_df["timestamp"], vessel_df["sog"], "g-")
axes[0, 1].set_xlabel("时间")
axes[0, 1].set_ylabel("速度 (节)")
axes[0, 1].set_title("速度变化")
axes[0, 1].grid(True, alpha=0.3)
axes[0, 1].tick_params(axis="x", rotation=45)

# 左下: 航向
axes[1, 0].plot(vessel_df["timestamp"], vessel_df["cog"], "r-")
axes[1, 0].set_xlabel("时间")
axes[1, 0].set_ylabel("航向 (°)")
axes[1, 0].set_title("航向变化")
axes[1, 0].grid(True, alpha=0.3)
axes[1, 0].tick_params(axis="x", rotation=45)

# 右下: 速度分布
axes[1, 1].hist(vessel_df["sog"], bins=10, color="steelblue", edgecolor="white")
axes[1, 1].set_xlabel("速度 (节)")
axes[1, 1].set_ylabel("频次")
axes[1, 1].set_title("速度分布")
axes[1, 1].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig("vessel_analysis.png", dpi=150)
plt.show()
```

## 交互式地图 (Folium)

对于地理数据,使用 Folium 创建交互式地图更直观:

```python
import pandas as pd
import folium

# 读取轨迹数据
df = pd.read_csv("../../datasets/ais-samples/vessel_tracks.csv")

# 创建地图,中心点为数据平均位置
center_lat = df["lat"].mean()
center_lon = df["lon"].mean()
m = folium.Map(location=[center_lat, center_lon], zoom_start=12)

# 颜色映射
vessel_colors = {
    "DALIAN STAR": "blue",
    "BOHAI FERRY": "green",
    "FISHING BOAT 01": "red",
    "CONTAINER EXPRESS": "purple"
}

# 绑制每艘船的轨迹
for vessel_name in df["vessel_name"].unique():
    vessel_df = df[df["vessel_name"] == vessel_name]

    # 轨迹线
    coordinates = list(zip(vessel_df["lat"], vessel_df["lon"]))
    color = vessel_colors.get(vessel_name, "gray")

    folium.PolyLine(
        coordinates,
        weight=3,
        color=color,
        opacity=0.8,
        popup=vessel_name
    ).add_to(m)

    # 起点标记
    folium.CircleMarker(
        coordinates[0],
        radius=6,
        color=color,
        fill=True,
        popup=f"{vessel_name} 起点"
    ).add_to(m)

    # 终点标记
    folium.CircleMarker(
        coordinates[-1],
        radius=6,
        color=color,
        fill=True,
        fill_color="white",
        popup=f"{vessel_name} 终点"
    ).add_to(m)

# 保存地图
m.save("vessel_tracks_map.html")
print("地图已保存为 vessel_tracks_map.html")
```

## 图形保存与格式

```python
# 保存为不同格式
plt.savefig("figure.png", dpi=150)           # 位图,适合网页
plt.savefig("figure.pdf", bbox_inches="tight") # 矢量图,适合论文
plt.savefig("figure.svg")                     # 矢量图,适合编辑
```

## 配色建议

使用与教材一致的配色方案:

```python
# 船联网配色方案
COLORS = {
    "primary": "#4682B4",      # 钢蓝色
    "secondary": "#2F528F",    # 深蓝色
    "success": "#5CA078",      # 草绿色
    "warning": "#DC9656",      # 琥珀色
    "info": "#489196",         # 青色
    "light": "#B0CEE6",        # 浅蓝色
}
```

## 与实验的关系

本节内容可直接用于:
- Lab05: 轨迹绑制与分析
- Lab06: 融合结果可视化对比
- Lab07: 通信性能分析图表
- Lab08: 安全事件可视化展示
