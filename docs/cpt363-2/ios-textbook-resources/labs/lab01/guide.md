# 树莓派开发环境搭建实验

本实验完成树莓派端侧开发环境的准备工作，目标是让后续实验具备稳定可重复的运行条件。实验结束后，学生应能够独立完成系统安装、网络配置与基础开发工具部署，并能解释每一步的工程含义。

## 学习目标

- 能够独立完成树莓派系统烧录与初始配置
- 能够配置网络并验证连通性
- 能够部署 Python 开发环境
- 能够通过 SSH 远程管理树莓派

## 预备知识

学生需要具备基本的计算机操作能力，能够使用终端执行简单命令，能够理解 IP 地址、网关与 DNS 的含义。

## 环境与器材

- Raspberry Pi 4 或同等性能型号
- microSD 卡（建议 16GB 及以上，Class 10）
- 读卡器、网线或无线网络环境
- 电脑一台（用于烧录系统镜像与远程登录）
- 5V 3A USB-C 电源适配器

## 实验步骤

### 第一步: 系统镜像烧录

使用官方 Raspberry Pi Imager 工具把系统写入 microSD 卡。安装阶段的关键点是提前启用远程登录能力，避免后续必须接显示器键鼠才能继续配置。

#### 1.1 下载并安装 Raspberry Pi Imager

从官方网站下载适合你操作系统的 Raspberry Pi Imager:

- Windows/macOS/Linux: https://www.raspberrypi.com/software/

#### 1.2 烧录系统镜像

```
操作步骤:
1. 将 microSD 卡插入读卡器
2. 打开 Raspberry Pi Imager
3. 点击"选择操作系统" -> "Raspberry Pi OS (64-bit)"
4. 点击"选择存储卡" -> 选择你的 microSD 卡
5. 点击齿轮图标进入高级设置
```

#### 1.3 高级设置 (关键)

在高级设置中配置以下内容:

```
高级设置清单:
□ 设置主机名: iot-pi-XX (XX 为学号后两位)
□ 启用 SSH: 使用密码认证
□ 设置用户名和密码: pi / 你的密码
□ 配置无线网络 (可选): SSID 和密码
□ 设置区域: Asia/Shanghai
```

#### 1.4 验证烧录结果

烧录完成后，将 microSD 卡插入电脑验证:

```bash
# macOS/Linux 查看分区
ls /Volumes/  # 应该看到 boot 和 rootfs 分区

# 确认 SSH 已启用
ls /Volumes/boot/ssh  # 文件应存在 (可能是空文件)
```

### 第二步: 首次启动与网络配置

把树莓派接入网络后，确认能稳定获取 IP 地址，并能解析域名。

#### 2.1 有线网络连接 (推荐)

```bash
# 将网线连接到树莓派和路由器
# 启动树莓派 (接通电源)
# 等待 1-2 分钟完成启动
```

#### 2.2 查找树莓派 IP 地址

方法一: 在路由器管理界面查看新接入设备

方法二: 使用网络扫描工具

```bash
# macOS/Linux
# 假设你的网络是 192.168.1.0/24
ping -c 1 192.168.1.255  # 发送广播
arp -a | grep -i "b8:27:eb\|dc:a6:32\|e4:5f:01"  # 树莓派 MAC 地址前缀

# 或使用 nmap (需安装)
nmap -sn 192.168.1.0/24
```

方法三: 使用主机名 (如果在同一网络)

```bash
ping iot-pi-XX.local  # XX 是你设置的主机名后缀
```

#### 2.3 静态 IP 配置 (可选但推荐)

通过 SSH 连接后，配置静态 IP 避免 IP 变化:

```bash
# 编辑 dhcpcd 配置
sudo nano /etc/dhcpcd.conf

# 在文件末尾添加 (根据实际网络修改)
interface eth0
static ip_address=192.168.1.100/24
static routers=192.168.1.1
static domain_name_servers=192.168.1.1 8.8.8.8
```

### 第三步: SSH 远程登录

从电脑端通过 SSH 连接树莓派，验证远程访问稳定。

```bash
# 首次连接
ssh pi@192.168.1.100

# 或使用主机名
ssh pi@iot-pi-XX.local

# 首次连接会提示确认指纹，输入 yes
# 然后输入密码
```

#### 3.1 配置 SSH 密钥登录 (推荐)

```bash
# 在你的电脑上生成密钥 (如果没有)
ssh-keygen -t ed25519 -C "your_email@example.com"

# 复制公钥到树莓派
ssh-copy-id pi@192.168.1.100

# 验证密钥登录
ssh pi@192.168.1.100  # 应该不再需要密码
```

#### 3.2 SSH 配置优化

在电脑上创建 SSH 配置文件简化连接:

```bash
# 编辑 ~/.ssh/config
Host iot-pi
    HostName 192.168.1.100
    User pi
    Port 22

# 之后可以直接使用
ssh iot-pi
```

### 第四步: 系统更新与基础软件

完成系统更新与基础工具安装。更新的目的不是追求最新版本，而是避免后续实验遇到依赖冲突时难以定位问题来源。

```bash
# 更新软件源索引
sudo apt update

# 升级已安装软件 (可能需要较长时间)
sudo apt -y upgrade

# 安装基础开发工具
sudo apt -y install git python3 python3-pip python3-venv

# 安装常用工具
sudo apt -y install vim htop tmux curl wget

# 清理不需要的包
sudo apt autoremove -y
```

### 第五步: Python 开发环境

确认 Python 与 pip 可用，并能安装第三方库。使用虚拟环境隔离依赖，避免不同实验相互污染。

#### 5.1 验证 Python 安装

```bash
# 检查版本
python3 --version    # 应该是 3.9 或更高
pip3 --version       # 确认 pip 可用
```

#### 5.2 创建项目虚拟环境

```bash
# 创建实验目录
mkdir -p ~/iot-labs
cd ~/iot-labs

# 创建虚拟环境
python3 -m venv .venv

# 激活虚拟环境
source .venv/bin/activate

# 确认激活成功 (命令提示符前应有 .venv)
which python   # 应该指向 .venv/bin/python
```

#### 5.3 安装常用库

```bash
# 确保在虚拟环境中
source ~/iot-labs/.venv/bin/activate

# 升级 pip
pip install --upgrade pip

# 安装船联网实验常用库
pip install pandas numpy matplotlib
pip install requests pyserial
pip install paho-mqtt

# 验证安装
python -c "import pandas; print(f'pandas {pandas.__version__}')"
python -c "import numpy; print(f'numpy {numpy.__version__}')"
```

#### 5.4 创建 requirements.txt

```bash
# 导出当前环境依赖
pip freeze > requirements.txt

# 查看内容
cat requirements.txt
```

### 第六步: 系统配置验证

运行验证脚本确认环境就绪:

```python
#!/usr/bin/env python3
"""环境验证脚本 - verify_env.py"""

import sys
import subprocess
import socket

def check_python():
    """检查 Python 版本"""
    version = sys.version_info
    print(f"Python 版本: {version.major}.{version.minor}.{version.micro}")
    if version.major >= 3 and version.minor >= 9:
        return True, "Python 版本符合要求"
    return False, "需要 Python 3.9 或更高版本"

def check_network():
    """检查网络连通性"""
    try:
        socket.create_connection(("8.8.8.8", 53), timeout=5)
        return True, "网络连接正常"
    except OSError:
        return False, "无法连接外网"

def check_dns():
    """检查 DNS 解析"""
    try:
        socket.gethostbyname("www.baidu.com")
        return True, "DNS 解析正常"
    except socket.gaierror:
        return False, "DNS 解析失败"

def check_packages():
    """检查关键包"""
    packages = ["pandas", "numpy", "matplotlib", "requests"]
    results = []
    for pkg in packages:
        try:
            __import__(pkg)
            results.append((pkg, True))
        except ImportError:
            results.append((pkg, False))
    return results

def main():
    print("=" * 50)
    print("树莓派开发环境验证")
    print("=" * 50)

    # 检查项
    checks = [
        ("Python 版本", check_python),
        ("网络连接", check_network),
        ("DNS 解析", check_dns),
    ]

    all_pass = True
    for name, check_func in checks:
        ok, msg = check_func()
        status = "✓" if ok else "✗"
        print(f"[{status}] {name}: {msg}")
        if not ok:
            all_pass = False

    # 检查包
    print("\n包安装状态:")
    for pkg, installed in check_packages():
        status = "✓" if installed else "✗"
        print(f"  [{status}] {pkg}")
        if not installed:
            all_pass = False

    print("\n" + "=" * 50)
    if all_pass:
        print("环境验证通过，可以开始后续实验")
    else:
        print("部分检查未通过，请根据提示修复问题")

if __name__ == "__main__":
    main()
```

保存并运行:

```bash
# 创建脚本
nano ~/iot-labs/verify_env.py
# 粘贴上述代码

# 运行验证
python ~/iot-labs/verify_env.py
```

## 预期结果

完成实验后，树莓派应满足以下条件：

- 可以通过 SSH 远程登录 (密钥或密码)
- 可以稳定访问互联网并完成软件安装
- Python 3.9+ 运行正常
- 虚拟环境已创建，常用库已安装
- 验证脚本全部检查项通过

## 扩展任务

### 任务1: 配置 VNC 远程桌面

```bash
# 启用 VNC
sudo raspi-config
# 选择 Interface Options -> VNC -> Enable

# 安装 VNC 客户端 (电脑端)
# 使用 RealVNC Viewer 连接
```

### 任务2: 配置自动启动脚本

```bash
# 创建启动脚本
sudo nano /etc/systemd/system/iot-lab.service

# 添加内容
[Unit]
Description=IoT Lab Service
After=network.target

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/iot-labs
ExecStart=/home/pi/iot-labs/.venv/bin/python your_script.py
Restart=on-failure

[Install]
WantedBy=multi-user.target

# 启用服务
sudo systemctl enable iot-lab.service
```

## 常见问题

### 无法找到树莓派 IP

1. 确认树莓派电源指示灯亮起
2. 确认网线连接稳固
3. 等待 2 分钟让系统完全启动
4. 检查路由器 DHCP 客户端列表
5. 尝试使用 `iot-pi-XX.local` 主机名连接

### SSH 连接被拒绝

```bash
# 确认 SSH 服务状态 (需要显示器或串口)
sudo systemctl status ssh

# 如果未启动
sudo systemctl enable ssh
sudo systemctl start ssh
```

### 网络不稳定

1. 检查网线质量
2. 确认路由器 DHCP 池有足够地址
3. 考虑配置静态 IP
4. 检查 DNS 服务器配置

### 安装依赖缓慢

```bash
# 配置清华源 (可选)
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# 系统源配置 (谨慎操作)
sudo nano /etc/apt/sources.list.d/raspi.list
# 可替换为国内镜像
```

## 实验报告要求

提交包含以下内容的实验报告:

1. 记录你的树莓派 IP 地址和主机名
2. 截图: SSH 登录成功界面
3. 截图: 验证脚本运行结果
4. 记录遇到的问题及解决方法
