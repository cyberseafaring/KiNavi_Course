# Python 环境配置

本节完成 Python 开发环境的最小配置,目标是让学生能够稳定运行脚本、安装依赖并复现实验结果。

## 学习目标

- 能够安装并配置 Python 开发环境
- 能够使用虚拟环境隔离项目依赖
- 能够管理和安装第三方库
- 能够验证环境配置正确性

## Python 版本选择

课程建议使用 Python 3.10 或更高版本。版本差异会在依赖安装时表现为不可复现的问题,因此需要记录 Python 版本与依赖版本。

检查当前 Python 版本:

```bash
python3 --version
# 期望输出: Python 3.10.x 或更高
```

如果系统未安装 Python 或版本过低,可从官方网站下载安装:https://www.python.org/downloads/

## 虚拟环境

虚拟环境用于隔离不同实验的依赖。对工程实践而言,这相当于把运行环境显式化,避免出现换一台电脑就跑不起来的问题。

### 创建虚拟环境

```bash
# 在项目目录下创建虚拟环境
python3 -m venv .venv

# 激活虚拟环境 (macOS/Linux)
source .venv/bin/activate

# 激活虚拟环境 (Windows)
.venv\Scripts\activate
```

激活后,命令行提示符会显示 `(.venv)` 前缀,表示当前处于虚拟环境中。

### 升级 pip

```bash
pip install --upgrade pip
```

### 退出虚拟环境

```bash
deactivate
```

## 依赖管理

建议把依赖写入 `requirements.txt` 并固定版本区间,保证同班同学之间的结果一致。

### 创建依赖文件

```bash
# 导出当前环境的依赖
pip freeze > requirements.txt
```

### 示例 requirements.txt

```
numpy>=1.21.0,<2.0.0
pandas>=1.3.0,<3.0.0
matplotlib>=3.4.0,<4.0.0
pyserial>=3.5
pyais>=2.0.0
```

### 安装依赖

```bash
pip install -r requirements.txt
```

## 验证安装

创建一个测试脚本 `test_env.py`:

```python
#!/usr/bin/env python3
"""环境验证脚本"""

import sys

def check_version():
    """检查 Python 版本"""
    version = sys.version_info
    print(f"Python 版本: {version.major}.{version.minor}.{version.micro}")
    if version.major < 3 or (version.major == 3 and version.minor < 10):
        print("警告: 建议使用 Python 3.10 或更高版本")
        return False
    return True

def check_packages():
    """检查必需的包"""
    packages = ['numpy', 'pandas', 'matplotlib']
    missing = []

    for pkg in packages:
        try:
            __import__(pkg)
            print(f"✓ {pkg} 已安装")
        except ImportError:
            print(f"✗ {pkg} 未安装")
            missing.append(pkg)

    return len(missing) == 0

def main():
    print("=" * 40)
    print("Python 环境验证")
    print("=" * 40)

    version_ok = check_version()
    print()
    packages_ok = check_packages()

    print()
    if version_ok and packages_ok:
        print("环境配置正确,可以开始实验")
    else:
        print("请修复上述问题后重试")

if __name__ == "__main__":
    main()
```

运行验证:

```bash
python test_env.py
```

## 常见问题

### pip 命令找不到

确认使用的是虚拟环境中的 pip:

```bash
which pip  # macOS/Linux
where pip  # Windows
```

如果路径不在 `.venv` 目录下,说明虚拟环境未正确激活。

### 依赖冲突

当出现版本冲突时,可以尝试:

```bash
pip install --upgrade --force-reinstall -r requirements.txt
```

### 网络问题

如果下载速度慢,可以使用国内镜像源:

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple package_name
```

## 与实验的关系

本节配置的环境将用于后续所有 Python 实验,包括:
- Lab03: AIS 报文解析
- Lab04: NMEA 协议分析
- Lab05: 轨迹可视化
- Lab06: 数据融合实验
