# YOLO 船舶检测

本节给出 YOLO 检测流程的最小路径，目标是完成一次可复现的推理与结果可视化，并能对误差做解释。

## 学习目标

- 能够安装并配置 YOLO 运行环境
- 能够使用预训练模型进行船舶图像检测
- 能够解析和可视化检测结果
- 能够分析误检与漏检原因并提出改进方向

## YOLO 简介

YOLO (You Only Look Once) 是一种实时目标检测算法。相比传统的两阶段检测方法，YOLO 将检测任务转化为回归问题，在一次前向传播中同时预测边界框和类别，因此速度较快。

### 版本选择

| 版本 | 特点 | 适用场景 |
|-----|------|---------|
| YOLOv5 | 易于使用，文档完善 | 入门学习，快速部署 |
| YOLOv8 | 最新版本，性能更好 | 实际应用，追求效果 |
| YOLOv5n/YOLOv8n | 轻量版本，速度快 | 边缘设备，资源受限 |

本教程使用 Ultralytics YOLOv8，因其接口简洁且支持多种任务。

## 环境配置

### 安装 Ultralytics

```bash
pip install ultralytics
```

### 验证安装

```python
from ultralytics import YOLO

# 检查版本
import ultralytics
print(f"Ultralytics 版本: {ultralytics.__version__}")

# 加载预训练模型 (首次运行会自动下载)
model = YOLO("yolov8n.pt")
print("模型加载成功")
```

### GPU 支持

如果有 NVIDIA GPU，安装 CUDA 版本的 PyTorch 可显著提升速度：

```bash
# 检查 CUDA 可用性
python -c "import torch; print(f'CUDA 可用: {torch.cuda.is_available()}')"
```

## 使用预训练模型

### 基本推理

```python
from ultralytics import YOLO
import cv2

# 加载预训练模型
model = YOLO("yolov8n.pt")  # n=nano, s=small, m=medium, l=large, x=xlarge

# 对单张图片进行推理
results = model("../../datasets/ship-images/ship_sample_01.jpg")

# 查看结果
for result in results:
    print(f"检测到 {len(result.boxes)} 个目标")

    # 遍历每个检测框
    for box in result.boxes:
        # 边界框坐标
        x1, y1, x2, y2 = box.xyxy[0].tolist()
        # 置信度
        confidence = box.conf[0].item()
        # 类别 ID
        class_id = int(box.cls[0].item())
        # 类别名称
        class_name = model.names[class_id]

        print(f"  {class_name}: {confidence:.2f} @ [{x1:.0f}, {y1:.0f}, {x2:.0f}, {y2:.0f}]")
```

### 批量推理

```python
from ultralytics import YOLO
import os

def batch_detect(model, image_dir, output_dir, conf_threshold=0.25):
    """批量检测图像"""
    os.makedirs(output_dir, exist_ok=True)

    image_files = [f for f in os.listdir(image_dir)
                   if f.lower().endswith((".jpg", ".jpeg", ".png"))]

    all_results = []

    for filename in image_files:
        input_path = os.path.join(image_dir, filename)

        # 推理
        results = model(input_path, conf=conf_threshold, verbose=False)

        # 保存可视化结果
        output_path = os.path.join(output_dir, f"det_{filename}")
        results[0].save(output_path)

        # 记录检测结果
        detections = []
        for box in results[0].boxes:
            detections.append({
                "bbox": box.xyxy[0].tolist(),
                "class": model.names[int(box.cls[0].item())],
                "confidence": box.conf[0].item()
            })

        all_results.append({
            "image": filename,
            "detections": detections
        })

        print(f"{filename}: {len(detections)} 个检测")

    return all_results

# 使用
model = YOLO("yolov8n.pt")
results = batch_detect(
    model,
    "../../datasets/ship-images",
    "../../datasets/ship-images/detections"
)
```

### 设置检测参数

```python
from ultralytics import YOLO

model = YOLO("yolov8n.pt")

# 常用推理参数
results = model(
    "image.jpg",
    conf=0.25,        # 置信度阈值
    iou=0.45,         # NMS IoU 阈值
    imgsz=640,        # 输入图像尺寸
    device="0",       # 使用 GPU 0，"cpu" 使用 CPU
    classes=[0, 1],   # 只检测指定类别
    max_det=100,      # 最大检测数量
)
```

## 检测结果解析

### 结果数据结构

```python
from ultralytics import YOLO
import json

def parse_detection_results(results, model):
    """解析检测结果为结构化数据"""
    parsed = []

    for result in results:
        image_info = {
            "image_path": result.path,
            "image_shape": result.orig_shape,
            "detections": []
        }

        for box in result.boxes:
            detection = {
                "bbox_xyxy": box.xyxy[0].tolist(),
                "bbox_xywh": box.xywh[0].tolist(),
                "confidence": round(box.conf[0].item(), 4),
                "class_id": int(box.cls[0].item()),
                "class_name": model.names[int(box.cls[0].item())]
            }
            image_info["detections"].append(detection)

        parsed.append(image_info)

    return parsed

# 使用
model = YOLO("yolov8n.pt")
results = model("../../datasets/ship-images/ship_sample_01.jpg")
parsed = parse_detection_results(results, model)

print(json.dumps(parsed, indent=2, ensure_ascii=False))
```

### 保存检测结果

```python
import json
from datetime import datetime

def save_detection_results(results, model, output_path):
    """保存检测结果到 JSON 文件"""
    parsed = parse_detection_results(results, model)

    output = {
        "timestamp": datetime.now().isoformat(),
        "model": model.model_name if hasattr(model, "model_name") else "yolov8",
        "results": parsed
    }

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"结果已保存: {output_path}")

# 使用
model = YOLO("yolov8n.pt")
results = model("../../datasets/ship-images/ship_sample_01.jpg")
save_detection_results(results, model, "detection_results.json")
```

## 结果可视化

### 使用内置可视化

```python
from ultralytics import YOLO

model = YOLO("yolov8n.pt")
results = model("../../datasets/ship-images/ship_sample_01.jpg")

# 保存带标注的图像
results[0].save("detection_output.jpg")

# 显示结果 (需要 GUI 环境)
# results[0].show()
```

### 自定义可视化

```python
import cv2
from ultralytics import YOLO

def visualize_detections(image_path, model, conf_threshold=0.25, output_path=None):
    """自定义检测结果可视化"""
    # 读取原图
    img = cv2.imread(image_path)
    if img is None:
        print(f"读取失败: {image_path}")
        return None

    # 推理
    results = model(image_path, conf=conf_threshold, verbose=False)

    # 配色方案 (与教材一致)
    colors = {
        "boat": (70, 130, 180),     # 钢蓝色
        "ship": (70, 130, 180),
        "person": (92, 160, 120),   # 草绿色
        "car": (220, 150, 86),      # 琥珀色
        "truck": (72, 145, 150),    # 青色
    }
    default_color = (128, 128, 128)

    # 绘制检测框
    for box in results[0].boxes:
        x1, y1, x2, y2 = [int(v) for v in box.xyxy[0].tolist()]
        conf = box.conf[0].item()
        class_name = model.names[int(box.cls[0].item())]

        color = colors.get(class_name, default_color)

        # 绘制边界框
        cv2.rectangle(img, (x1, y1), (x2, y2), color, 2)

        # 绘制标签
        label = f"{class_name}: {conf:.2f}"
        (w, h), _ = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.6, 1)
        cv2.rectangle(img, (x1, y1-h-10), (x1+w+10, y1), color, -1)
        cv2.putText(img, label, (x1+5, y1-5),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 1)

    # 添加统计信息
    num_detections = len(results[0].boxes)
    cv2.putText(img, f"Detections: {num_detections}", (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)

    if output_path:
        cv2.imwrite(output_path, img)
        print(f"可视化结果已保存: {output_path}")

    return img

# 使用
model = YOLO("yolov8n.pt")
visualize_detections(
    "../../datasets/ship-images/ship_sample_01.jpg",
    model,
    output_path="custom_visualization.jpg"
)
```

## 结果分析与解释

### 分析单张图像

至少挑选两张结果进行解释，一张准确，一张误检或漏检明显。解释时说清楚原因与改进方向，不追求"把模型调到最好"。

```python
def analyze_detection(image_path, model, ground_truth=None):
    """分析单张图像的检测结果"""
    results = model(image_path, verbose=False)

    print(f"=== 检测分析: {image_path} ===")
    print(f"检测数量: {len(results[0].boxes)}")

    for i, box in enumerate(results[0].boxes):
        class_name = model.names[int(box.cls[0].item())]
        conf = box.conf[0].item()
        x1, y1, x2, y2 = box.xyxy[0].tolist()
        width = x2 - x1
        height = y2 - y1

        print(f"\n检测 {i+1}:")
        print(f"  类别: {class_name}")
        print(f"  置信度: {conf:.3f}")
        print(f"  位置: ({x1:.0f}, {y1:.0f}) - ({x2:.0f}, {y2:.0f})")
        print(f"  尺寸: {width:.0f} x {height:.0f} 像素")

        # 分析可能的问题
        if conf < 0.5:
            print(f"  [注意] 置信度较低，可能是边缘案例或误检")
        if width < 32 or height < 32:
            print(f"  [注意] 目标较小，可能存在漏检风险")
        if width / height > 3 or height / width > 3:
            print(f"  [注意] 宽高比异常，可能定位不准确")

    if ground_truth:
        # 与真实标注对比
        print(f"\n真实标注: {len(ground_truth)} 个目标")
        # 计算匹配情况...

    return results

# 使用
model = YOLO("yolov8n.pt")
analyze_detection("../../datasets/ship-images/ship_sample_01.jpg", model)
```

### 常见问题分析

```python
def diagnose_detection_issues(results, model, image_shape):
    """诊断检测问题"""
    issues = []

    # 检查是否有检测结果
    if len(results[0].boxes) == 0:
        issues.append({
            "type": "no_detection",
            "message": "未检测到任何目标",
            "suggestion": "检查图像质量、降低置信度阈值或使用更大的模型"
        })
        return issues

    for box in results[0].boxes:
        x1, y1, x2, y2 = box.xyxy[0].tolist()
        conf = box.conf[0].item()
        width = x2 - x1
        height = y2 - y1
        img_h, img_w = image_shape[:2]

        # 小目标检测
        if width * height < 1024:  # 32x32 以下
            issues.append({
                "type": "small_object",
                "message": f"检测到小目标 ({width:.0f}x{height:.0f})",
                "suggestion": "使用更高分辨率输入或专门的小目标检测模型"
            })

        # 边缘目标
        margin = 10
        if x1 < margin or y1 < margin or x2 > img_w - margin or y2 > img_h - margin:
            issues.append({
                "type": "edge_object",
                "message": "目标位于图像边缘",
                "suggestion": "边缘目标可能被截断，检测结果可能不完整"
            })

        # 低置信度
        if conf < 0.5:
            issues.append({
                "type": "low_confidence",
                "message": f"置信度较低 ({conf:.2f})",
                "suggestion": "可能是遮挡、模糊或不典型样本"
            })

    return issues

# 使用
model = YOLO("yolov8n.pt")
img = cv2.imread("../../datasets/ship-images/ship_sample_01.jpg")
results = model(img, verbose=False)
issues = diagnose_detection_issues(results, model, img.shape)

for issue in issues:
    print(f"[{issue['type']}] {issue['message']}")
    print(f"  建议: {issue['suggestion']}")
```

## 船舶检测专用模型

通用预训练模型可能无法很好地检测船舶类别。以下是使用专用模型或微调的思路。

### 使用海事数据集微调 (概念说明)

```python
# 微调步骤示意 (需要标注数据)
"""
1. 准备数据集
   - 收集船舶图像
   - 使用 YOLO 格式标注 (每张图对应一个 txt 文件)
   - 划分训练集/验证集

2. 配置数据集文件 (dataset.yaml)
   path: ./datasets/ships
   train: images/train
   val: images/val
   names:
     0: cargo_ship
     1: tanker
     2: container_ship
     3: fishing_boat
     4: passenger_ship

3. 训练命令
   yolo detect train data=dataset.yaml model=yolov8n.pt epochs=100
"""

from ultralytics import YOLO

# 如果有微调后的模型
# model = YOLO("best.pt")  # 加载微调后的权重
```

### 评估模型性能

```python
from ultralytics import YOLO

def evaluate_on_test_set(model, test_images_dir, test_labels_dir):
    """在测试集上评估模型"""
    # 准备评估数据
    results = model.val(
        data="dataset.yaml",  # 数据集配置
        split="test",
        conf=0.25,
        iou=0.5,
        verbose=True
    )

    # 输出评估指标
    print(f"mAP@0.5: {results.box.map50:.3f}")
    print(f"mAP@0.5:0.95: {results.box.map:.3f}")
    print(f"Precision: {results.box.mp:.3f}")
    print(f"Recall: {results.box.mr:.3f}")

    return results
```

## 完整检测流程示例

```python
from ultralytics import YOLO
import cv2
import json
import os
from datetime import datetime

def ship_detection_pipeline(image_path, output_dir, conf_threshold=0.25):
    """船舶检测完整流程"""

    # 1. 初始化
    os.makedirs(output_dir, exist_ok=True)
    model = YOLO("yolov8n.pt")

    # 2. 读取图像
    img = cv2.imread(image_path)
    if img is None:
        return {"error": f"无法读取图像: {image_path}"}

    # 3. 推理
    results = model(image_path, conf=conf_threshold, verbose=False)

    # 4. 解析结果
    detections = []
    for box in results[0].boxes:
        detections.append({
            "bbox": box.xyxy[0].tolist(),
            "class": model.names[int(box.cls[0].item())],
            "confidence": round(box.conf[0].item(), 4)
        })

    # 5. 保存可视化
    viz_path = os.path.join(output_dir, "detection_result.jpg")
    results[0].save(viz_path)

    # 6. 保存 JSON 结果
    result_data = {
        "timestamp": datetime.now().isoformat(),
        "image_path": image_path,
        "image_shape": list(img.shape),
        "conf_threshold": conf_threshold,
        "num_detections": len(detections),
        "detections": detections
    }

    json_path = os.path.join(output_dir, "detection_result.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(result_data, f, indent=2, ensure_ascii=False)

    # 7. 输出摘要
    print(f"检测完成: {len(detections)} 个目标")
    print(f"可视化: {viz_path}")
    print(f"JSON: {json_path}")

    return result_data

# 使用
result = ship_detection_pipeline(
    "../../datasets/ship-images/ship_sample_01.jpg",
    "./detection_output"
)
```

## 与实验的关系

本节内容直接支撑：
- Lab07: 视觉感知实验（船舶检测任务）
- 后续研究: 船舶识别与跟踪

