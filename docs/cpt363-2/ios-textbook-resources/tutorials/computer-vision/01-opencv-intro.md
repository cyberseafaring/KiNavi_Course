# OpenCV 入门

本节完成 OpenCV 的最小入门，目标是让学生能够读取、显示与保存图像，并理解图像在计算机中以矩阵形式表示。

## 学习目标

- 能够安装并验证 OpenCV 环境
- 能够读取、显示和保存图像文件
- 能够理解图像的矩阵表示结构
- 能够进行基本的像素级操作

## 环境准备

### 安装 OpenCV

OpenCV 的 Python 绑定通过 opencv-python 包提供。安装后建议记录版本号，避免不同版本在接口细节上造成差异。

```bash
pip install opencv-python
```

### 验证安装

```python
import cv2
print(f"OpenCV 版本: {cv2.__version__}")
# 期望输出: OpenCV 版本: 4.x.x
```

如果需要使用扩展功能（如 SIFT 特征提取），需要安装 contrib 版本：

```bash
pip install opencv-contrib-python
```

## 图像的矩阵表示

图像在计算机中以数值矩阵形式存储。彩色图像通常使用三维数组表示：高度 × 宽度 × 通道数。

### 读取图像

```python
import cv2

# 读取彩色图像
img = cv2.imread("../../datasets/ship-images/ship_sample_01.jpg")

# 检查读取是否成功
if img is None:
    print("图像读取失败，请检查文件路径")
else:
    print(f"图像形状: {img.shape}")  # (高度, 宽度, 通道数)
    print(f"数据类型: {img.dtype}")  # uint8
    print(f"像素值范围: 0-255")
```

### 读取模式

```python
# 彩色模式 (默认)
img_color = cv2.imread("image.jpg", cv2.IMREAD_COLOR)

# 灰度模式
img_gray = cv2.imread("image.jpg", cv2.IMREAD_GRAYSCALE)

# 包含透明通道
img_alpha = cv2.imread("image.png", cv2.IMREAD_UNCHANGED)
```

### 通道顺序

OpenCV 使用 BGR 顺序而非常见的 RGB 顺序，这是历史遗留设计。在与其他库（如 Matplotlib）配合时需要转换。

```python
import cv2
import matplotlib.pyplot as plt

img_bgr = cv2.imread("image.jpg")

# BGR 转 RGB
img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)

# 使用 Matplotlib 显示
plt.imshow(img_rgb)
plt.axis("off")
plt.show()
```

## 图像显示

### 使用 OpenCV 窗口

```python
import cv2

img = cv2.imread("image.jpg")

# 创建窗口并显示图像
cv2.imshow("Ship Image", img)

# 等待按键 (0 表示无限等待)
cv2.waitKey(0)

# 关闭所有窗口
cv2.destroyAllWindows()
```

### 在 Jupyter Notebook 中显示

Jupyter 环境下建议使用 Matplotlib 而非 OpenCV 窗口：

```python
import cv2
import matplotlib.pyplot as plt

def show_image(img, title="Image"):
    """在 Jupyter 中显示图像"""
    if len(img.shape) == 3:
        # 彩色图像，BGR 转 RGB
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        plt.imshow(img_rgb)
    else:
        # 灰度图像
        plt.imshow(img, cmap="gray")

    plt.title(title)
    plt.axis("off")
    plt.show()

# 使用
img = cv2.imread("image.jpg")
show_image(img, "船舶图像")
```

## 图像保存

```python
import cv2

img = cv2.imread("input.jpg")

# 保存为不同格式
cv2.imwrite("output.jpg", img)           # JPEG 格式
cv2.imwrite("output.png", img)           # PNG 格式
cv2.imwrite("output.bmp", img)           # BMP 格式

# JPEG 质量控制 (0-100)
cv2.imwrite("output_high.jpg", img, [cv2.IMWRITE_JPEG_QUALITY, 95])
cv2.imwrite("output_low.jpg", img, [cv2.IMWRITE_JPEG_QUALITY, 30])

# PNG 压缩级别 (0-9)
cv2.imwrite("output.png", img, [cv2.IMWRITE_PNG_COMPRESSION, 9])
```

## 像素操作

### 访问单个像素

```python
import cv2

img = cv2.imread("image.jpg")

# 访问像素 (y, x) 处的 BGR 值
y, x = 100, 200
pixel = img[y, x]
print(f"像素 ({y}, {x}) 的 BGR 值: {pixel}")

# 修改像素值
img[y, x] = [255, 255, 255]  # 设置为白色
```

### 访问图像区域

```python
import cv2

img = cv2.imread("image.jpg")

# 获取图像区域 (ROI - Region of Interest)
roi = img[100:300, 200:400]  # y1:y2, x1:x2
print(f"ROI 形状: {roi.shape}")

# 复制区域到另一位置
img[50:250, 50:250] = roi
```

### 分离与合并通道

```python
import cv2

img = cv2.imread("image.jpg")

# 分离通道
b, g, r = cv2.split(img)
print(f"蓝色通道形状: {b.shape}")

# 合并通道
merged = cv2.merge([b, g, r])

# 单通道可视化
cv2.imwrite("blue_channel.jpg", b)
cv2.imwrite("green_channel.jpg", g)
cv2.imwrite("red_channel.jpg", r)
```

## 图像基本属性

```python
import cv2

def print_image_info(img, name="Image"):
    """打印图像基本信息"""
    print(f"=== {name} ===")
    print(f"形状 (H, W, C): {img.shape}")
    print(f"总像素数: {img.size}")
    print(f"数据类型: {img.dtype}")
    print(f"内存占用: {img.nbytes / 1024:.2f} KB")

    if len(img.shape) == 3:
        print(f"通道数: {img.shape[2]}")
    else:
        print(f"通道数: 1 (灰度图)")
    print()

# 使用
img = cv2.imread("image.jpg")
print_image_info(img, "船舶图像")
```

## 图像尺寸调整

```python
import cv2

img = cv2.imread("image.jpg")
print(f"原始尺寸: {img.shape[:2]}")

# 指定目标尺寸
resized = cv2.resize(img, (640, 480))  # (宽度, 高度)
print(f"调整后尺寸: {resized.shape[:2]}")

# 按比例缩放
scale = 0.5
resized = cv2.resize(img, None, fx=scale, fy=scale)
print(f"缩放后尺寸: {resized.shape[:2]}")

# 不同插值方法
resized_nn = cv2.resize(img, (320, 240), interpolation=cv2.INTER_NEAREST)   # 最近邻
resized_linear = cv2.resize(img, (320, 240), interpolation=cv2.INTER_LINEAR) # 双线性
resized_cubic = cv2.resize(img, (320, 240), interpolation=cv2.INTER_CUBIC)   # 双三次
```

## 完整示例

以下示例完成船舶图像的读取、处理和保存：

```python
import cv2
import os

def process_ship_images(input_dir, output_dir, target_size=(640, 480)):
    """批量处理船舶图像"""
    os.makedirs(output_dir, exist_ok=True)

    processed = 0
    failed = 0

    for filename in os.listdir(input_dir):
        if not filename.lower().endswith((".jpg", ".jpeg", ".png")):
            continue

        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, f"processed_{filename}")

        # 读取图像
        img = cv2.imread(input_path)
        if img is None:
            print(f"读取失败: {filename}")
            failed += 1
            continue

        # 调整尺寸
        resized = cv2.resize(img, target_size)

        # 保存结果
        cv2.imwrite(output_path, resized)
        processed += 1

    print(f"处理完成: {processed} 张成功, {failed} 张失败")

# 使用
process_ship_images(
    "../../datasets/ship-images",
    "../../datasets/ship-images/processed",
    target_size=(640, 480)
)
```

## 常见问题

### 图像读取返回 None

检查文件路径是否正确，OpenCV 不会抛出异常而是返回 None：

```python
import cv2
import os

path = "image.jpg"
if not os.path.exists(path):
    print(f"文件不存在: {path}")
else:
    img = cv2.imread(path)
    if img is None:
        print("文件存在但无法解码，可能格式不支持")
```

### 中文路径问题

OpenCV 在某些系统上无法正确处理中文路径：

```python
import cv2
import numpy as np

def imread_unicode(path):
    """支持中文路径的图像读取"""
    with open(path, "rb") as f:
        data = np.frombuffer(f.read(), dtype=np.uint8)
    return cv2.imdecode(data, cv2.IMREAD_COLOR)

def imwrite_unicode(path, img):
    """支持中文路径的图像保存"""
    ext = os.path.splitext(path)[1]
    _, encoded = cv2.imencode(ext, img)
    with open(path, "wb") as f:
        f.write(encoded.tobytes())
```

## 与实验的关系

本节内容直接支撑：
- Lab07: 视觉感知实验（图像读取与预处理）
- 后续计算机视觉教程（图像处理、目标检测）

