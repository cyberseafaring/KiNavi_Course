# 图像预处理

本节介绍图像预处理的基本操作，目标是让学生理解预处理不是为了"好看"，而是为了提高后续检测的可分辨性。

## 学习目标

- 能够理解图像预处理在视觉任务中的作用
- 能够进行灰度化、滤波、边缘增强等基本操作
- 能够针对船舶图像场景选择合适的预处理方法
- 能够记录处理参数以保证结果可复现

## 预处理的目的

图像预处理服务于后续的分析任务，典型目标包括：降低噪声干扰、增强目标与背景的对比度、标准化输入格式。海上场景常见的挑战包括波浪反光、雾霾遮挡、光照变化剧烈等，预处理需要针对这些问题进行设计。

## 灰度化

灰度化将彩色图像转换为单通道图像，减少计算量并简化后续处理。

### 基本转换

```python
import cv2

img = cv2.imread("../../datasets/ship-images/ship_sample_01.jpg")

# 方法1: 读取时直接转灰度
gray = cv2.imread("image.jpg", cv2.IMREAD_GRAYSCALE)

# 方法2: 彩色转灰度
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

print(f"原始形状: {img.shape}")    # (H, W, 3)
print(f"灰度形状: {gray.shape}")   # (H, W)

cv2.imwrite("gray_output.jpg", gray)
```

### 灰度化原理

OpenCV 的默认转换公式为加权平均：

```
Gray = 0.299 × R + 0.587 × G + 0.114 × B
```

该权重基于人眼对不同颜色的敏感度设计。绿色权重最高，因为人眼对绿色最敏感。

## 滤波去噪

滤波用于抑制图像噪声，但会导致边缘模糊，需要在去噪与保边之间权衡。

### 均值滤波

均值滤波用邻域像素的平均值替代中心像素，对高斯噪声有效但会模糊边缘。

```python
import cv2

img = cv2.imread("image.jpg")

# 均值滤波，核大小 5x5
blurred = cv2.blur(img, (5, 5))

# 不同核大小对比
blur_3 = cv2.blur(img, (3, 3))
blur_7 = cv2.blur(img, (7, 7))
blur_11 = cv2.blur(img, (11, 11))

cv2.imwrite("blur_comparison.jpg", cv2.hconcat([blur_3, blur_7, blur_11]))
```

### 高斯滤波

高斯滤波使用高斯函数加权，中心像素权重高，边缘权重低，效果比均值滤波更自然。

```python
import cv2

img = cv2.imread("image.jpg")

# 高斯滤波
# 参数: 图像, 核大小, 标准差 (0 表示自动计算)
gaussian = cv2.GaussianBlur(img, (5, 5), 0)

# 不同标准差对比
gaussian_1 = cv2.GaussianBlur(img, (5, 5), 1)
gaussian_2 = cv2.GaussianBlur(img, (5, 5), 2)
gaussian_5 = cv2.GaussianBlur(img, (5, 5), 5)

cv2.imwrite("gaussian_output.jpg", gaussian)
```

### 中值滤波

中值滤波用邻域像素的中值替代中心像素，对椒盐噪声效果显著，能较好保留边缘。

```python
import cv2

img = cv2.imread("image.jpg")

# 中值滤波，核大小必须为奇数
median = cv2.medianBlur(img, 5)

cv2.imwrite("median_output.jpg", median)
```

### 双边滤波

双边滤波在考虑空间距离的同时考虑像素值差异，能在去噪的同时保留边缘。计算代价较高。

```python
import cv2

img = cv2.imread("image.jpg")

# 双边滤波
# 参数: 图像, 邻域直径, 颜色空间标准差, 坐标空间标准差
bilateral = cv2.bilateralFilter(img, 9, 75, 75)

cv2.imwrite("bilateral_output.jpg", bilateral)
```

### 滤波方法对比

```python
import cv2
import numpy as np

def compare_filters(img_path):
    """对比不同滤波方法"""
    img = cv2.imread(img_path)

    results = {
        "原图": img,
        "均值滤波": cv2.blur(img, (5, 5)),
        "高斯滤波": cv2.GaussianBlur(img, (5, 5), 0),
        "中值滤波": cv2.medianBlur(img, 5),
        "双边滤波": cv2.bilateralFilter(img, 9, 75, 75)
    }

    # 保存各结果
    for name, result in results.items():
        cv2.imwrite(f"filter_{name}.jpg", result)

    return results

compare_filters("../../datasets/ship-images/ship_sample_01.jpg")
```

## 边缘检测

边缘是图像中像素值急剧变化的区域，边缘检测用于提取目标轮廓。

### Sobel 算子

Sobel 算子分别计算水平和垂直方向的梯度。

```python
import cv2
import numpy as np

img = cv2.imread("image.jpg", cv2.IMREAD_GRAYSCALE)

# 水平方向梯度
sobel_x = cv2.Sobel(img, cv2.CV_64F, 1, 0, ksize=3)

# 垂直方向梯度
sobel_y = cv2.Sobel(img, cv2.CV_64F, 0, 1, ksize=3)

# 梯度幅值
magnitude = np.sqrt(sobel_x**2 + sobel_y**2)
magnitude = np.uint8(np.clip(magnitude, 0, 255))

cv2.imwrite("sobel_x.jpg", np.uint8(np.abs(sobel_x)))
cv2.imwrite("sobel_y.jpg", np.uint8(np.abs(sobel_y)))
cv2.imwrite("sobel_magnitude.jpg", magnitude)
```

### Canny 边缘检测

Canny 是多阶段边缘检测算法，效果通常优于单一梯度算子。

```python
import cv2

img = cv2.imread("image.jpg", cv2.IMREAD_GRAYSCALE)

# Canny 边缘检测
# 参数: 图像, 低阈值, 高阈值
edges = cv2.Canny(img, 50, 150)

# 不同阈值对比
edges_low = cv2.Canny(img, 30, 100)    # 检测更多边缘
edges_high = cv2.Canny(img, 100, 200)  # 只保留强边缘

cv2.imwrite("canny_edges.jpg", edges)
cv2.imwrite("canny_low.jpg", edges_low)
cv2.imwrite("canny_high.jpg", edges_high)
```

### 阈值选择

Canny 的两个阈值决定边缘保留程度。低阈值以下的梯度被抛弃，高阈值以上的梯度直接保留为边缘，中间的根据连通性判断。

```python
import cv2
import numpy as np

def auto_canny(img, sigma=0.33):
    """自动计算 Canny 阈值"""
    median = np.median(img)
    lower = int(max(0, (1.0 - sigma) * median))
    upper = int(min(255, (1.0 + sigma) * median))
    return cv2.Canny(img, lower, upper)

img = cv2.imread("image.jpg", cv2.IMREAD_GRAYSCALE)
edges = auto_canny(img)
cv2.imwrite("auto_canny.jpg", edges)
```

## 形态学操作

形态学操作用于处理二值图像，常用于噪点去除和区域连接。

### 基本操作

```python
import cv2
import numpy as np

img = cv2.imread("image.jpg", cv2.IMREAD_GRAYSCALE)
_, binary = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)

# 结构元素
kernel = np.ones((5, 5), np.uint8)

# 腐蚀：缩小白色区域，去除小噪点
eroded = cv2.erode(binary, kernel, iterations=1)

# 膨胀：扩大白色区域，填补小孔洞
dilated = cv2.dilate(binary, kernel, iterations=1)

# 开运算：先腐蚀后膨胀，去除小噪点
opened = cv2.morphologyEx(binary, cv2.MORPH_OPEN, kernel)

# 闭运算：先膨胀后腐蚀，填补小孔洞
closed = cv2.morphologyEx(binary, cv2.MORPH_CLOSE, kernel)

cv2.imwrite("eroded.jpg", eroded)
cv2.imwrite("dilated.jpg", dilated)
cv2.imwrite("opened.jpg", opened)
cv2.imwrite("closed.jpg", closed)
```

### 梯度操作

形态学梯度可用于边缘提取。

```python
import cv2
import numpy as np

img = cv2.imread("image.jpg", cv2.IMREAD_GRAYSCALE)
kernel = np.ones((3, 3), np.uint8)

# 形态学梯度：膨胀与腐蚀之差
gradient = cv2.morphologyEx(img, cv2.MORPH_GRADIENT, kernel)

cv2.imwrite("morph_gradient.jpg", gradient)
```

## 直方图处理

直方图反映图像的灰度分布，直方图均衡化可增强对比度。

### 直方图计算与显示

```python
import cv2
import matplotlib.pyplot as plt

img = cv2.imread("image.jpg", cv2.IMREAD_GRAYSCALE)

# 计算直方图
hist = cv2.calcHist([img], [0], None, [256], [0, 256])

# 显示直方图
plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.imshow(img, cmap="gray")
plt.title("原图")
plt.axis("off")

plt.subplot(1, 2, 2)
plt.plot(hist)
plt.title("灰度直方图")
plt.xlabel("灰度值")
plt.ylabel("像素数")

plt.tight_layout()
plt.savefig("histogram.png")
plt.show()
```

### 直方图均衡化

```python
import cv2

img = cv2.imread("image.jpg", cv2.IMREAD_GRAYSCALE)

# 直方图均衡化
equalized = cv2.equalizeHist(img)

# 对比保存
comparison = cv2.hconcat([img, equalized])
cv2.imwrite("equalized_comparison.jpg", comparison)
```

### 自适应直方图均衡化 (CLAHE)

CLAHE 在局部区域进行均衡化，避免过度增强噪声。

```python
import cv2

img = cv2.imread("image.jpg", cv2.IMREAD_GRAYSCALE)

# 创建 CLAHE 对象
clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))

# 应用 CLAHE
clahe_img = clahe.apply(img)

cv2.imwrite("clahe_output.jpg", clahe_img)
```

## 海事图像预处理示例

### 去雾处理

海上场景常受雾霾影响，可通过暗通道先验方法去雾。

```python
import cv2
import numpy as np

def dark_channel(img, size=15):
    """计算暗通道"""
    b, g, r = cv2.split(img)
    min_channel = cv2.min(cv2.min(b, g), r)
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (size, size))
    dark = cv2.erode(min_channel, kernel)
    return dark

def estimate_atmosphere(img, dark, percentile=0.001):
    """估计大气光"""
    flat_dark = dark.flatten()
    flat_img = img.reshape(-1, 3)

    num_pixels = int(flat_dark.size * percentile)
    indices = np.argsort(flat_dark)[-num_pixels:]

    atmosphere = np.mean(flat_img[indices], axis=0)
    return atmosphere

def dehaze(img, omega=0.95, t_min=0.1):
    """简单去雾处理"""
    img_float = img.astype(np.float64) / 255.0

    dark = dark_channel(img)
    atmosphere = estimate_atmosphere(img, dark)

    # 透射率估计
    normalized = img_float / atmosphere
    t = 1 - omega * dark_channel((normalized * 255).astype(np.uint8)) / 255.0
    t = np.maximum(t, t_min)

    # 恢复图像
    result = np.zeros_like(img_float)
    for i in range(3):
        result[:, :, i] = (img_float[:, :, i] - atmosphere[i]) / t + atmosphere[i]

    result = np.clip(result * 255, 0, 255).astype(np.uint8)
    return result

# 使用
img = cv2.imread("../../datasets/ship-images/foggy_ship.jpg")
dehazed = dehaze(img)
cv2.imwrite("dehazed_output.jpg", dehazed)
```

### 船舶图像预处理流程

```python
import cv2
import numpy as np

def preprocess_ship_image(img_path, output_path=None):
    """船舶图像预处理流程"""
    # 读取图像
    img = cv2.imread(img_path)
    if img is None:
        print(f"读取失败: {img_path}")
        return None

    # 记录原始尺寸
    original_shape = img.shape

    # 1. 调整尺寸 (保持宽高比)
    target_width = 640
    scale = target_width / img.shape[1]
    new_height = int(img.shape[0] * scale)
    resized = cv2.resize(img, (target_width, new_height))

    # 2. 去噪
    denoised = cv2.bilateralFilter(resized, 9, 75, 75)

    # 3. 对比度增强 (CLAHE)
    lab = cv2.cvtColor(denoised, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    l_enhanced = clahe.apply(l)
    enhanced = cv2.merge([l_enhanced, a, b])
    enhanced = cv2.cvtColor(enhanced, cv2.COLOR_LAB2BGR)

    # 记录处理参数
    params = {
        "original_shape": original_shape,
        "target_width": target_width,
        "bilateral_d": 9,
        "bilateral_sigma": 75,
        "clahe_clip": 2.0,
        "clahe_grid": (8, 8)
    }

    if output_path:
        cv2.imwrite(output_path, enhanced)
        print(f"处理完成: {output_path}")
        print(f"参数: {params}")

    return enhanced, params

# 使用
result, params = preprocess_ship_image(
    "../../datasets/ship-images/ship_sample_01.jpg",
    "preprocessed_ship.jpg"
)
```

## 预处理参数记录

工程上需要记录参数，避免"换一张图就不行"的不可复现结果。

```python
import json
from datetime import datetime

def save_preprocessing_log(params, input_path, output_path, log_file="preprocessing_log.json"):
    """保存预处理日志"""
    log_entry = {
        "timestamp": datetime.now().isoformat(),
        "input": input_path,
        "output": output_path,
        "parameters": params
    }

    # 追加到日志文件
    try:
        with open(log_file, "r") as f:
            logs = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        logs = []

    logs.append(log_entry)

    with open(log_file, "w") as f:
        json.dump(logs, f, indent=2, ensure_ascii=False)

    print(f"日志已保存: {log_file}")
```

## 与实验的关系

本节内容直接支撑：
- Lab07: 视觉感知实验（图像预处理流程）
- 后续教程: 目标检测（输入预处理）

