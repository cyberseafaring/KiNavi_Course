# 目标检测基础

本节说明目标检测的基本输出形式与评价方式，目标是让学生能够读懂边界框、类别与置信度，并形成阈值选择的意识。

## 学习目标

- 能够理解目标检测任务的输入与输出
- 能够解析边界框坐标、类别标签和置信度分数
- 能够理解并计算检测性能指标
- 能够分析误检与漏检的常见原因

## 目标检测任务

目标检测是在图像中定位并识别特定类别物体的任务。输入是一张图像，输出是若干检测结果，每个结果包含边界框位置、类别标签和置信度分数。

### 输入输出结构

```python
# 输入: 图像 (H, W, C) 的 numpy 数组或文件路径
input_image = "../../datasets/ship-images/harbor_scene.jpg"

# 输出: 检测结果列表
detections = [
    {
        "bbox": [x1, y1, x2, y2],  # 边界框坐标 (左上角, 右下角)
        "class": "ship",           # 类别标签
        "confidence": 0.92         # 置信度分数 (0-1)
    },
    {
        "bbox": [x1, y1, x2, y2],
        "class": "buoy",
        "confidence": 0.78
    }
]
```

## 边界框表示

边界框是包围目标的矩形区域，有多种坐标表示方式。

### 常见格式

```python
# 格式1: (x1, y1, x2, y2) - 左上角和右下角坐标
bbox_xyxy = [100, 150, 300, 400]  # x1, y1, x2, y2

# 格式2: (x, y, w, h) - 左上角坐标和宽高
bbox_xywh = [100, 150, 200, 250]  # x, y, width, height

# 格式3: (cx, cy, w, h) - 中心点坐标和宽高 (YOLO 格式)
bbox_cxcywh = [200, 275, 200, 250]  # center_x, center_y, width, height

# 格式4: 归一化坐标 (0-1 范围)
bbox_normalized = [0.156, 0.208, 0.312, 0.347]  # 相对于图像尺寸
```

### 格式转换

```python
def xyxy_to_xywh(bbox):
    """(x1, y1, x2, y2) -> (x, y, w, h)"""
    x1, y1, x2, y2 = bbox
    return [x1, y1, x2 - x1, y2 - y1]

def xywh_to_xyxy(bbox):
    """(x, y, w, h) -> (x1, y1, x2, y2)"""
    x, y, w, h = bbox
    return [x, y, x + w, y + h]

def xyxy_to_cxcywh(bbox):
    """(x1, y1, x2, y2) -> (cx, cy, w, h)"""
    x1, y1, x2, y2 = bbox
    w, h = x2 - x1, y2 - y1
    return [x1 + w/2, y1 + h/2, w, h]

def cxcywh_to_xyxy(bbox):
    """(cx, cy, w, h) -> (x1, y1, x2, y2)"""
    cx, cy, w, h = bbox
    return [cx - w/2, cy - h/2, cx + w/2, cy + h/2]

def normalize_bbox(bbox, img_width, img_height):
    """坐标归一化"""
    x1, y1, x2, y2 = bbox
    return [x1/img_width, y1/img_height, x2/img_width, y2/img_height]

def denormalize_bbox(bbox, img_width, img_height):
    """坐标反归一化"""
    x1, y1, x2, y2 = bbox
    return [x1*img_width, y1*img_height, x2*img_width, y2*img_height]
```

## 置信度分数

置信度表示模型对检测结果的确信程度，范围通常为 0 到 1。置信度不是概率的万能替代，需要结合场景约束解释。

### 阈值筛选

```python
def filter_by_confidence(detections, threshold=0.5):
    """按置信度筛选检测结果"""
    return [d for d in detections if d["confidence"] >= threshold]

# 不同阈值的效果
detections_raw = [
    {"bbox": [100, 100, 200, 200], "class": "ship", "confidence": 0.95},
    {"bbox": [300, 150, 450, 350], "class": "ship", "confidence": 0.72},
    {"bbox": [500, 200, 600, 300], "class": "buoy", "confidence": 0.45},
    {"bbox": [150, 300, 250, 400], "class": "ship", "confidence": 0.31},
]

high_conf = filter_by_confidence(detections_raw, 0.7)   # 2 个结果
medium_conf = filter_by_confidence(detections_raw, 0.5) # 2 个结果
low_conf = filter_by_confidence(detections_raw, 0.3)    # 4 个结果

print(f"阈值 0.7: {len(high_conf)} 个检测")
print(f"阈值 0.5: {len(medium_conf)} 个检测")
print(f"阈值 0.3: {len(low_conf)} 个检测")
```

### 阈值选择的权衡

- 高阈值：减少误检，但可能增加漏检
- 低阈值：减少漏检，但可能增加误检
- 实际阈值需要根据应用场景调整，安全相关场景通常倾向于低阈值

## IoU (交并比)

IoU (Intersection over Union) 用于衡量两个边界框的重叠程度，是评价检测准确性的基础指标。

### IoU 计算

```python
def calculate_iou(box1, box2):
    """计算两个边界框的 IoU"""
    x1_1, y1_1, x2_1, y2_1 = box1
    x1_2, y1_2, x2_2, y2_2 = box2

    # 计算交集区域
    x1_i = max(x1_1, x1_2)
    y1_i = max(y1_1, y1_2)
    x2_i = min(x2_1, x2_2)
    y2_i = min(y2_1, y2_2)

    # 交集面积
    if x2_i <= x1_i or y2_i <= y1_i:
        intersection = 0
    else:
        intersection = (x2_i - x1_i) * (y2_i - y1_i)

    # 各自面积
    area1 = (x2_1 - x1_1) * (y2_1 - y1_1)
    area2 = (x2_2 - x1_2) * (y2_2 - y1_2)

    # 并集面积
    union = area1 + area2 - intersection

    # IoU
    iou = intersection / union if union > 0 else 0

    return iou

# 使用示例
pred_box = [100, 100, 200, 200]
gt_box = [110, 105, 210, 210]
iou = calculate_iou(pred_box, gt_box)
print(f"IoU: {iou:.3f}")
```

### IoU 阈值

IoU 阈值用于判断检测结果是否正确：
- IoU >= 0.5: 通常认为检测正确 (PASCAL VOC 标准)
- IoU >= 0.75: 更严格的标准
- COCO 数据集使用多个 IoU 阈值 (0.5:0.05:0.95)

## 性能评价指标

### 精确率与召回率

```python
def calculate_precision_recall(detections, ground_truths, iou_threshold=0.5):
    """计算精确率和召回率"""
    # 按置信度排序
    detections = sorted(detections, key=lambda x: x["confidence"], reverse=True)

    tp = 0  # True Positive
    fp = 0  # False Positive
    matched_gt = set()

    for det in detections:
        best_iou = 0
        best_gt_idx = -1

        for idx, gt in enumerate(ground_truths):
            if idx in matched_gt:
                continue
            iou = calculate_iou(det["bbox"], gt["bbox"])
            if iou > best_iou:
                best_iou = iou
                best_gt_idx = idx

        if best_iou >= iou_threshold and best_gt_idx != -1:
            tp += 1
            matched_gt.add(best_gt_idx)
        else:
            fp += 1

    fn = len(ground_truths) - len(matched_gt)  # False Negative

    precision = tp / (tp + fp) if (tp + fp) > 0 else 0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0

    return {
        "precision": precision,
        "recall": recall,
        "tp": tp,
        "fp": fp,
        "fn": fn
    }
```

### AP (平均精度)

AP 是不同召回率下精确率的平均值，用于综合评价检测器性能。

```python
import numpy as np

def calculate_ap(precisions, recalls):
    """计算 AP (11点插值法)"""
    # 11 个召回率点
    recall_points = np.linspace(0, 1, 11)

    ap = 0
    for r in recall_points:
        # 找到召回率 >= r 时的最大精确率
        prec = max([p for p, rec in zip(precisions, recalls) if rec >= r], default=0)
        ap += prec

    return ap / 11

def calculate_ap_all_points(precisions, recalls):
    """计算 AP (所有点插值法, COCO 风格)"""
    # 按召回率排序
    sorted_indices = np.argsort(recalls)
    recalls = np.array(recalls)[sorted_indices]
    precisions = np.array(precisions)[sorted_indices]

    # 在首尾添加点
    recalls = np.concatenate([[0], recalls, [1]])
    precisions = np.concatenate([[0], precisions, [0]])

    # 确保精确率单调递减
    for i in range(len(precisions) - 2, -1, -1):
        precisions[i] = max(precisions[i], precisions[i + 1])

    # 计算曲线下面积
    ap = 0
    for i in range(1, len(recalls)):
        ap += (recalls[i] - recalls[i-1]) * precisions[i]

    return ap
```

### mAP (平均精度均值)

mAP 是所有类别 AP 的平均值。

```python
def calculate_map(class_results):
    """计算 mAP"""
    aps = []
    for class_name, result in class_results.items():
        ap = calculate_ap_all_points(result["precisions"], result["recalls"])
        aps.append(ap)
        print(f"{class_name}: AP = {ap:.3f}")

    map_score = np.mean(aps)
    print(f"mAP: {map_score:.3f}")
    return map_score
```

## 误差分析

### 误差类型

| 误差类型 | 说明 | 可能原因 |
|---------|------|---------|
| 误检 (FP) | 将背景检测为目标 | 背景复杂、训练数据不足 |
| 漏检 (FN) | 未检测到目标 | 目标被遮挡、尺度过小、训练样本不足 |
| 定位误差 | IoU 低于阈值 | 锚框设计不当、特征表达不足 |
| 分类误差 | 类别判断错误 | 类间相似性高、训练样本不均衡 |

### 误差来源分析

```python
def analyze_errors(detections, ground_truths, iou_threshold=0.5):
    """分析检测误差"""
    errors = {
        "localization_error": [],  # 定位误差
        "classification_error": [],  # 分类误差
        "false_positive": [],  # 误检
        "false_negative": []   # 漏检
    }

    matched_gt = set()

    for det in detections:
        best_iou = 0
        best_gt = None
        best_gt_idx = -1

        for idx, gt in enumerate(ground_truths):
            iou = calculate_iou(det["bbox"], gt["bbox"])
            if iou > best_iou:
                best_iou = iou
                best_gt = gt
                best_gt_idx = idx

        if best_iou >= iou_threshold:
            if best_gt["class"] == det["class"]:
                # 正确检测
                matched_gt.add(best_gt_idx)
            else:
                # 分类误差
                errors["classification_error"].append({
                    "detection": det,
                    "ground_truth": best_gt,
                    "iou": best_iou
                })
                matched_gt.add(best_gt_idx)
        elif best_iou >= 0.1:
            # 定位误差 (有重叠但不够)
            errors["localization_error"].append({
                "detection": det,
                "best_gt": best_gt,
                "iou": best_iou
            })
        else:
            # 误检
            errors["false_positive"].append(det)

    # 漏检
    for idx, gt in enumerate(ground_truths):
        if idx not in matched_gt:
            errors["false_negative"].append(gt)

    # 统计
    print("误差分析结果:")
    print(f"  定位误差: {len(errors['localization_error'])}")
    print(f"  分类误差: {len(errors['classification_error'])}")
    print(f"  误检: {len(errors['false_positive'])}")
    print(f"  漏检: {len(errors['false_negative'])}")

    return errors
```

### 海事场景常见误差原因

1. **尺度变化大**: 远处船舶像素较少，难以检测
2. **遮挡**: 船舶相互遮挡或被港口设施遮挡
3. **光照变化**: 日出日落时光照剧烈变化
4. **波浪干扰**: 波浪反光可能被误检为目标
5. **类内差异大**: 不同类型船舶外观差异显著

## 检测结果可视化

```python
import cv2
import numpy as np

def draw_detections(img, detections, class_colors=None):
    """绘制检测结果"""
    if class_colors is None:
        class_colors = {
            "ship": (70, 130, 180),      # 钢蓝色
            "buoy": (92, 160, 120),       # 草绿色
            "container": (220, 150, 86),  # 琥珀色
            "fishing_boat": (72, 145, 150) # 青色
        }

    img_draw = img.copy()

    for det in detections:
        x1, y1, x2, y2 = [int(v) for v in det["bbox"]]
        cls = det["class"]
        conf = det["confidence"]

        color = class_colors.get(cls, (128, 128, 128))

        # 绘制边界框
        cv2.rectangle(img_draw, (x1, y1), (x2, y2), color, 2)

        # 绘制标签背景
        label = f"{cls}: {conf:.2f}"
        (w, h), _ = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.5, 1)
        cv2.rectangle(img_draw, (x1, y1-h-10), (x1+w+10, y1), color, -1)

        # 绘制标签文字
        cv2.putText(img_draw, label, (x1+5, y1-5),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)

    return img_draw

def visualize_comparison(img, predictions, ground_truths, output_path):
    """可视化预测与真实标注对比"""
    img_pred = draw_detections(img.copy(), predictions)

    gt_viz = [{"bbox": gt["bbox"], "class": gt["class"], "confidence": 1.0}
              for gt in ground_truths]
    img_gt = draw_detections(img.copy(), gt_viz)

    # 拼接对比图
    comparison = cv2.hconcat([img_gt, img_pred])

    # 添加标题
    cv2.putText(comparison, "Ground Truth", (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.putText(comparison, "Predictions", (img.shape[1] + 10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    cv2.imwrite(output_path, comparison)
    print(f"对比图已保存: {output_path}")

# 使用
img = cv2.imread("../../datasets/ship-images/harbor_scene.jpg")
predictions = [
    {"bbox": [100, 100, 300, 250], "class": "ship", "confidence": 0.92},
    {"bbox": [400, 150, 550, 300], "class": "ship", "confidence": 0.78}
]
ground_truths = [
    {"bbox": [105, 95, 295, 245], "class": "ship"},
    {"bbox": [395, 145, 545, 295], "class": "ship"}
]
visualize_comparison(img, predictions, ground_truths, "detection_comparison.jpg")
```

## 与实验的关系

本节内容直接支撑：
- Lab07: 视觉感知实验（检测结果解析）
- 后续教程: YOLO 船舶检测（模型输出理解）

