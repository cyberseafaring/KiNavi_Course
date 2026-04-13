# 树莓派入门配置

本节完成树莓派的最小可用配置，目标是让设备具备稳定运行与远程维护能力。教程不追求复杂桌面环境，更关注可复现与可排错。

## 学习目标

- 能够完成树莓派系统镜像的写入与首次启动
- 能够配置网络连接与 SSH 远程登录
- 能够完成基础系统更新与开发环境安装
- 能够记录系统配置以便后续排错

## 关键结果

完成本节后，树莓派应满足三点：可远程登录、可稳定联网、可安装依赖。

## 硬件准备

### 必需硬件

| 硬件 | 规格要求 | 说明 |
|-----|---------|------|
| 树莓派主板 | 树莓派 4B/5 推荐 | 2GB 内存版本可用，4GB 更佳 |
| microSD 卡 | 16GB 以上，Class 10 | 建议使用知名品牌，劣质卡易损坏 |
| 电源适配器 | 5V/3A (Type-C) | 供电不足会导致不稳定 |
| 读卡器 | USB 或内置 | 用于写入系统镜像 |

### 可选硬件

| 硬件 | 用途 |
|-----|------|
| 散热片/风扇 | 长时间运行时降温 |
| 外壳 | 保护主板 |
| HDMI 线 + 显示器 | 首次调试 (可选，使用无头配置可省略) |
| USB 键盘 | 首次调试 (可选) |

## 系统安装

### 镜像选择

优先选择官方长期维护版本。版本越新不一定越好，关键是后续依赖能够稳定安装。

| 镜像类型 | 特点 | 推荐场景 |
|---------|------|---------|
| Raspberry Pi OS Lite | 无桌面，资源占用小 | 服务器、嵌入式应用 |
| Raspberry Pi OS with Desktop | 有桌面环境 | 需要图形界面时 |
| Ubuntu Server | 社区支持广泛 | 熟悉 Ubuntu 生态时 |

本教程使用 Raspberry Pi OS Lite (64-bit)。

### 使用 Raspberry Pi Imager 写入

1. 下载 Raspberry Pi Imager: https://www.raspberrypi.com/software/
2. 安装并启动 Imager

```bash
# macOS 安装
brew install raspberry-pi-imager

# 或直接下载 dmg 安装
```

### 写入前配置 (重要)

在 Imager 中点击齿轮图标进行预配置，减少后续操作：

```yaml
# 推荐配置项
主机名: iotship       # 自定义设备名
SSH: 启用             # 关键：启用 SSH
用户名: pi            # 默认用户
密码: ********        # 设置强密码

# WiFi 配置 (如使用无线网络)
SSID: YourWiFiName
密码: YourWiFiPassword
国家: CN

# 语言设置
时区: Asia/Shanghai
键盘布局: us
```

### 写入镜像

```bash
# 确认 SD 卡设备名 (macOS)
diskutil list

# Imager 会自动处理以下步骤：
# 1. 格式化 SD 卡
# 2. 写入系统镜像
# 3. 应用预配置
# 4. 验证写入完整性
```

写入完成后，将 SD 卡插入树莓派并接通电源。

## 首次启动

### 有线网络 (推荐)

首次配置时使用有线网络更稳定：

1. 用网线连接树莓派和路由器
2. 接通电源，等待 1-2 分钟启动完成
3. 在路由器管理界面查找设备 IP

### 无线网络

如果使用 WiFi：

1. 确认写入时已配置正确的 WiFi 信息
2. 启动后等待 2-3 分钟 (首次启动需要更长时间)
3. 在路由器管理界面查找设备 IP

### 查找设备 IP

```bash
# 方法1: 路由器管理界面查看 DHCP 客户端列表

# 方法2: 使用 nmap 扫描 (macOS/Linux)
brew install nmap
nmap -sn 192.168.1.0/24 | grep -B 2 "Raspberry"

# 方法3: 使用 arp 扫描
arp -a | grep -i "dc:a6:32"  # 树莓派 MAC 前缀

# 方法4: 使用主机名 (如果 mDNS 可用)
ping iotship.local
```

## 远程登录

### SSH 连接

在电脑端执行 SSH 连接，确认可以稳定进入终端。

```bash
# 使用 IP 地址连接
ssh pi@192.168.1.100

# 或使用主机名
ssh pi@iotship.local

# 首次连接会提示确认主机密钥
# Are you sure you want to continue connecting (yes/no)? yes
```

### 免密登录配置

配置 SSH 密钥可避免每次输入密码：

```bash
# 在本地电脑生成密钥 (如果没有)
ssh-keygen -t ed25519 -C "your_email@example.com"

# 复制公钥到树莓派
ssh-copy-id pi@iotship.local

# 验证免密登录
ssh pi@iotship.local
```

### SSH 配置优化

在本地 `~/.ssh/config` 添加便捷配置：

```
Host iotship
    HostName iotship.local
    User pi
    IdentityFile ~/.ssh/id_ed25519
```

配置后可直接使用 `ssh iotship` 连接。

## 基础更新

完成系统更新与基础工具安装后，记录系统版本信息，作为后续排错依据。

### 系统更新

```bash
# 更新软件包列表
sudo apt update

# 升级已安装软件包
sudo apt -y upgrade

# 清理不需要的包
sudo apt -y autoremove
```

### 安装基础工具

```bash
# 开发必需工具
sudo apt -y install git python3 python3-pip python3-venv

# 网络调试工具
sudo apt -y install curl wget net-tools

# 硬件接口工具
sudo apt -y install i2c-tools

# 文本编辑器
sudo apt -y install vim
```

### 记录系统信息

```bash
# 创建系统信息记录脚本
cat > ~/system_info.sh << 'EOF'
#!/bin/bash
echo "=== 系统信息 ==="
echo "日期: $(date)"
echo "主机名: $(hostname)"
echo "系统版本: $(cat /etc/os-release | grep PRETTY_NAME)"
echo "内核版本: $(uname -r)"
echo "Python版本: $(python3 --version)"
echo "pip版本: $(pip3 --version)"
echo "IP地址: $(hostname -I)"
echo "磁盘使用: $(df -h / | tail -1 | awk '{print $5}')"
echo "内存使用: $(free -h | grep Mem | awk '{print $3"/"$2}')"
EOF

chmod +x ~/system_info.sh
~/system_info.sh
```

### 保存配置记录

```bash
# 保存系统信息到文件
~/system_info.sh > ~/system_info_$(date +%Y%m%d).txt
```

## 网络配置

### 静态 IP 配置

服务器场景建议配置静态 IP：

```bash
# 编辑 dhcpcd 配置
sudo nano /etc/dhcpcd.conf

# 添加以下内容 (根据网络环境修改)
interface eth0
static ip_address=192.168.1.100/24
static routers=192.168.1.1
static domain_name_servers=192.168.1.1 8.8.8.8
```

### WiFi 管理

```bash
# 查看 WiFi 状态
iwconfig wlan0

# 扫描可用网络
sudo iwlist wlan0 scan | grep ESSID

# 添加新 WiFi 网络
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

# 添加网络配置
network={
    ssid="NetworkName"
    psk="Password"
    key_mgmt=WPA-PSK
}
```

### 网络诊断

```bash
# 检查网络连通性
ping -c 3 8.8.8.8         # 测试互联网
ping -c 3 baidu.com       # 测试 DNS

# 查看 IP 配置
ip addr show

# 查看路由表
ip route show

# 测试 DNS 解析
nslookup baidu.com
```

## 时间同步

正确的时间对日志和调试至关重要：

```bash
# 查看当前时间
date

# 设置时区
sudo timedatectl set-timezone Asia/Shanghai

# 检查时间同步状态
timedatectl status

# 手动同步时间 (如果需要)
sudo systemctl restart systemd-timesyncd
```

## 开机自启动

### 使用 systemd 服务

创建自定义服务实现开机自启动：

```bash
# 创建服务文件
sudo nano /etc/systemd/system/myapp.service
```

服务文件模板：

```ini
[Unit]
Description=My Application
After=network.target

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/myapp
ExecStart=/home/pi/myapp/start.sh
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

启用服务：

```bash
# 重新加载服务配置
sudo systemctl daemon-reload

# 启用开机自启动
sudo systemctl enable myapp

# 启动服务
sudo systemctl start myapp

# 查看状态
sudo systemctl status myapp
```

## 常见问题

### 无法 SSH 连接

```bash
# 检查 SSH 服务状态 (需要连接显示器)
sudo systemctl status ssh

# 启用 SSH
sudo systemctl enable ssh
sudo systemctl start ssh

# 检查防火墙 (通常不需要)
sudo ufw status
```

### 启动后无网络

```bash
# 检查网线连接
ethtool eth0

# 重启网络服务
sudo systemctl restart dhcpcd

# 检查 DHCP 客户端日志
journalctl -u dhcpcd
```

### SD 卡空间不足

```bash
# 检查磁盘使用
df -h

# 扩展文件系统 (如果未自动扩展)
sudo raspi-config --expand-rootfs
sudo reboot
```

### 系统运行缓慢

```bash
# 检查 CPU 使用
top

# 检查内存使用
free -h

# 检查 CPU 温度
vcgencmd measure_temp
```

## 安全建议

### 修改默认密码

```bash
# 修改当前用户密码
passwd

# 使用强密码 (12位以上，包含大小写字母、数字、符号)
```

### 禁用密码登录

配置 SSH 密钥后，禁用密码登录提高安全性：

```bash
sudo nano /etc/ssh/sshd_config

# 修改以下配置
PasswordAuthentication no
ChallengeResponseAuthentication no

# 重启 SSH 服务
sudo systemctl restart ssh
```

### 定期更新

```bash
# 建议每周执行一次
sudo apt update && sudo apt -y upgrade
```

## 与实验的关系

本节内容直接支撑：
- Lab01: 船载传感器节点搭建
- Lab02: 传感器数据采集实验
- 后续所有树莓派相关实验

远程登录不只是为了方便，也是船联网场景下远程运维能力的最小演练。

