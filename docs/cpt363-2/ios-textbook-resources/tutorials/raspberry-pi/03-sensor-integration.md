# 传感器接入

本节完成一次传感器接入与数据采集，目标是让学生理解采样时间、采样周期与质量标注的关系。

## 学习目标

- 能够理解常用传感器的通信接口类型
- 能够完成传感器的硬件接线与软件配置
- 能够采集传感器数据并进行质量标注
- 能够将采集数据保存为结构化日志

## 接入思路

先保证数据能读出来，再讨论精度。采集链路的第一步是可观测，第二步是可重复。

### 传感器接入流程

1. **确认接口类型**：数字/模拟、通信协议
2. **硬件接线**：供电、信号、接地
3. **驱动安装**：启用接口、安装库
4. **读取验证**：确认能读到数据
5. **数据记录**：保存带时间戳的日志

## 常用接口类型

### 接口对比

| 接口类型 | 特点 | 适用传感器 | 树莓派支持 |
|---------|------|-----------|-----------|
| GPIO | 简单开关量 | 按钮、继电器、光电开关 | 原生支持 |
| I2C | 双线制总线 | 温湿度、气压、光照 | 原生支持 |
| SPI | 高速四线制 | ADC、显示屏、SD卡 | 原生支持 |
| UART | 串口通信 | GPS、RS232设备 | 原生支持 |
| 1-Wire | 单线制 | DS18B20温度传感器 | 需配置 |
| 模拟信号 | 电压/电流 | 热电偶、压力变送器 | 需要ADC |

### 启用 I2C 接口

```bash
# 使用 raspi-config 启用
sudo raspi-config
# Interface Options -> I2C -> Enable

# 或直接编辑配置
sudo nano /boot/config.txt
# 添加: dtparam=i2c_arm=on

# 重启生效
sudo reboot

# 验证 I2C 启用
ls /dev/i2c*
# 应显示: /dev/i2c-1
```

### 启用 SPI 接口

```bash
sudo raspi-config
# Interface Options -> SPI -> Enable

# 验证
ls /dev/spidev*
# 应显示: /dev/spidev0.0 /dev/spidev0.1
```

### 启用 1-Wire 接口

```bash
sudo nano /boot/config.txt
# 添加: dtoverlay=w1-gpio

sudo reboot

# 验证
ls /sys/bus/w1/devices/
```

## 温湿度传感器 (DHT22)

DHT22 是常用的温湿度传感器，单线数字接口。

### 硬件接线

```
DHT22 引脚:
1 (VCC)  -> 3.3V
2 (DATA) -> GPIO4 (物理引脚7)，串联 10kΩ 上拉电阻到 VCC
3 (NC)   -> 不连接
4 (GND)  -> GND
```

### 安装驱动

```bash
pip3 install adafruit-circuitpython-dht
sudo apt install libgpiod2
```

### 读取代码

```python
import time
import board
import adafruit_dht
from datetime import datetime

# 初始化传感器
dht = adafruit_dht.DHT22(board.D4)

def read_dht22():
    """读取 DHT22 温湿度"""
    try:
        temperature = dht.temperature
        humidity = dht.humidity

        if temperature is not None and humidity is not None:
            return {
                "timestamp": datetime.now().isoformat(),
                "temperature": round(temperature, 1),
                "humidity": round(humidity, 1),
                "quality": "VALID"
            }
        else:
            return {
                "timestamp": datetime.now().isoformat(),
                "temperature": None,
                "humidity": None,
                "quality": "NULL_VALUE"
            }

    except RuntimeError as e:
        return {
            "timestamp": datetime.now().isoformat(),
            "temperature": None,
            "humidity": None,
            "quality": f"ERROR: {str(e)}"
        }

# 连续采集
try:
    print("DHT22 温湿度采集，按 Ctrl+C 退出")
    while True:
        reading = read_dht22()
        print(f"{reading['timestamp']}: T={reading['temperature']}°C, H={reading['humidity']}%, Q={reading['quality']}")
        time.sleep(2)  # DHT22 采样间隔至少 2 秒

except KeyboardInterrupt:
    print("\n采集结束")

finally:
    dht.exit()
```

## I2C 传感器 (BME280)

BME280 是高精度温湿度气压传感器，I2C 接口。

### 硬件接线

```
BME280 -> 树莓派
VCC    -> 3.3V
GND    -> GND
SCL    -> GPIO3 (物理引脚5)
SDA    -> GPIO2 (物理引脚3)
```

### 检测 I2C 设备

```bash
# 扫描 I2C 总线
sudo i2cdetect -y 1

# 应显示设备地址，如 0x76 或 0x77
```

### 安装驱动

```bash
pip3 install adafruit-circuitpython-bme280
```

### 读取代码

```python
import time
import board
import busio
import adafruit_bme280
from datetime import datetime

# 初始化 I2C
i2c = busio.I2C(board.SCL, board.SDA)

# 初始化传感器 (地址可能是 0x76 或 0x77)
bme280 = adafruit_bme280.Adafruit_BME280_I2C(i2c, address=0x76)

# 设置海平面气压参考值 (用于计算海拔)
bme280.sea_level_pressure = 1013.25

def read_bme280():
    """读取 BME280 传感器数据"""
    try:
        return {
            "timestamp": datetime.now().isoformat(),
            "temperature": round(bme280.temperature, 2),
            "humidity": round(bme280.relative_humidity, 2),
            "pressure": round(bme280.pressure, 2),
            "altitude": round(bme280.altitude, 2),
            "quality": "VALID"
        }
    except Exception as e:
        return {
            "timestamp": datetime.now().isoformat(),
            "temperature": None,
            "humidity": None,
            "pressure": None,
            "altitude": None,
            "quality": f"ERROR: {str(e)}"
        }

# 连续采集
try:
    print("BME280 环境数据采集")
    while True:
        data = read_bme280()
        print(f"T: {data['temperature']}°C | H: {data['humidity']}% | P: {data['pressure']}hPa | Alt: {data['altitude']}m")
        time.sleep(1)

except KeyboardInterrupt:
    print("\n采集结束")
```

## GPS 模块 (UART)

GPS 模块通过 UART 输出 NMEA 格式数据。

### 硬件接线

```
GPS 模块 -> 树莓派
VCC     -> 5V (或 3.3V，视模块而定)
GND     -> GND
TX      -> GPIO15 (RXD, 物理引脚10)
RX      -> GPIO14 (TXD, 物理引脚8) [可选]
```

### 启用 UART

```bash
sudo raspi-config
# Interface Options -> Serial Port
# Login shell: No
# Serial hardware: Yes

sudo reboot
```

### 安装库

```bash
pip3 install pyserial pynmea2
```

### 读取代码

```python
import serial
import pynmea2
from datetime import datetime

# 打开串口
ser = serial.Serial('/dev/serial0', 9600, timeout=1)

def parse_gps_line(line):
    """解析 NMEA 语句"""
    try:
        msg = pynmea2.parse(line)

        if isinstance(msg, pynmea2.GGA):
            return {
                "timestamp": datetime.now().isoformat(),
                "type": "GGA",
                "latitude": msg.latitude if msg.latitude else None,
                "longitude": msg.longitude if msg.longitude else None,
                "altitude": msg.altitude if msg.altitude else None,
                "satellites": msg.num_sats,
                "quality": "VALID" if msg.latitude else "NO_FIX"
            }

        elif isinstance(msg, pynmea2.RMC):
            return {
                "timestamp": datetime.now().isoformat(),
                "type": "RMC",
                "latitude": msg.latitude if msg.latitude else None,
                "longitude": msg.longitude if msg.longitude else None,
                "speed_knots": msg.spd_over_grnd if msg.spd_over_grnd else None,
                "course": msg.true_course if msg.true_course else None,
                "quality": "VALID" if msg.status == 'A' else "NO_FIX"
            }

    except pynmea2.ParseError:
        return None

    return None

# 连续读取
try:
    print("GPS 数据采集")
    while True:
        line = ser.readline().decode('ascii', errors='replace').strip()
        if line.startswith('$'):
            data = parse_gps_line(line)
            if data and data.get("latitude"):
                print(f"{data['type']}: ({data['latitude']:.6f}, {data['longitude']:.6f})")

except KeyboardInterrupt:
    print("\n采集结束")

finally:
    ser.close()
```

## ADC 模块 (MCP3008)

树莓派没有模拟输入，需要外接 ADC 芯片读取模拟传感器。

### 硬件接线 (SPI)

```
MCP3008    -> 树莓派
VDD        -> 3.3V
VREF       -> 3.3V
AGND       -> GND
CLK        -> GPIO11 (SCLK)
DOUT       -> GPIO9 (MISO)
DIN        -> GPIO10 (MOSI)
CS         -> GPIO8 (CE0)
DGND       -> GND
```

模拟传感器接到 MCP3008 的 CH0-CH7 通道。

### 安装库

```bash
pip3 install adafruit-circuitpython-mcp3xxx
```

### 读取代码

```python
import time
import board
import busio
import digitalio
import adafruit_mcp3xxx.mcp3008 as MCP
from adafruit_mcp3xxx.analog_in import AnalogIn
from datetime import datetime

# 初始化 SPI
spi = busio.SPI(clock=board.SCK, MISO=board.MISO, MOSI=board.MOSI)

# 片选
cs = digitalio.DigitalInOut(board.D8)

# 创建 MCP3008 对象
mcp = MCP.MCP3008(spi, cs)

# 创建模拟输入通道
channel0 = AnalogIn(mcp, MCP.P0)
channel1 = AnalogIn(mcp, MCP.P1)

def read_adc():
    """读取 ADC 数据"""
    return {
        "timestamp": datetime.now().isoformat(),
        "ch0_raw": channel0.value,
        "ch0_voltage": round(channel0.voltage, 3),
        "ch1_raw": channel1.value,
        "ch1_voltage": round(channel1.voltage, 3),
        "quality": "VALID"
    }

# 连续采集
try:
    print("ADC 数据采集")
    while True:
        data = read_adc()
        print(f"CH0: {data['ch0_voltage']:.3f}V | CH1: {data['ch1_voltage']:.3f}V")
        time.sleep(0.5)

except KeyboardInterrupt:
    print("\n采集结束")
```

## 数据结构与质量标注

建议为每条采样记录至少保留四类字段：时间戳、观测值、来源标识、质量线索。质量线索用于表达缺测与异常，避免后续误用。

### 标准数据结构

```python
from dataclasses import dataclass
from datetime import datetime
from typing import Optional, Any

@dataclass
class SensorReading:
    """传感器读数标准结构"""
    timestamp: str           # ISO 格式时间戳
    sensor_id: str          # 传感器标识
    sensor_type: str        # 传感器类型
    value: Optional[Any]    # 观测值
    unit: str               # 单位
    quality: str            # 质量标识
    raw_value: Optional[Any] = None  # 原始值 (可选)

    def to_dict(self):
        return {
            "timestamp": self.timestamp,
            "sensor_id": self.sensor_id,
            "sensor_type": self.sensor_type,
            "value": self.value,
            "unit": self.unit,
            "quality": self.quality,
            "raw_value": self.raw_value
        }
```

### 质量标识定义

| 标识 | 含义 | 处理建议 |
|-----|------|---------|
| VALID | 正常数据 | 可直接使用 |
| NULL_VALUE | 空值 | 检查传感器连接 |
| OUT_OF_RANGE | 超出合理范围 | 标记异常，人工确认 |
| STALE | 数据过期 | 检查采集频率 |
| ERROR | 读取错误 | 检查硬件/驱动 |
| UNCALIBRATED | 未校准 | 需要校准后使用 |

### 质量检查函数

```python
def check_value_quality(value, min_val, max_val, sensor_type):
    """检查数值质量"""
    if value is None:
        return "NULL_VALUE"

    if not isinstance(value, (int, float)):
        return "INVALID_TYPE"

    if value < min_val or value > max_val:
        return "OUT_OF_RANGE"

    return "VALID"

# 使用示例
SENSOR_LIMITS = {
    "temperature": (-40, 85),
    "humidity": (0, 100),
    "pressure": (300, 1100),
}

temp = 25.5
quality = check_value_quality(temp, *SENSOR_LIMITS["temperature"], "temperature")
print(f"温度 {temp}°C, 质量: {quality}")
```

## 数据日志记录

### JSON Lines 格式

```python
import json
from datetime import datetime

class SensorLogger:
    """传感器数据日志记录器"""

    def __init__(self, log_file):
        self.log_file = log_file
        self.record_count = 0

    def log(self, reading):
        """记录一条数据"""
        with open(self.log_file, "a") as f:
            f.write(json.dumps(reading, ensure_ascii=False) + "\n")
        self.record_count += 1

    def summary(self):
        """输出日志摘要"""
        print(f"日志文件: {self.log_file}")
        print(f"记录数量: {self.record_count}")

# 使用
logger = SensorLogger(f"sensor_log_{datetime.now():%Y%m%d_%H%M%S}.jsonl")

# 记录数据
reading = {
    "timestamp": datetime.now().isoformat(),
    "sensor_id": "bme280_01",
    "temperature": 25.5,
    "humidity": 60.2,
    "quality": "VALID"
}
logger.log(reading)
```

### CSV 格式

```python
import csv
from datetime import datetime

class CSVLogger:
    """CSV 格式日志记录器"""

    def __init__(self, log_file, fieldnames):
        self.log_file = log_file
        self.fieldnames = fieldnames
        self.record_count = 0

        # 写入表头
        with open(log_file, "w", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()

    def log(self, reading):
        """记录一条数据"""
        with open(self.log_file, "a", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=self.fieldnames)
            writer.writerow(reading)
        self.record_count += 1

# 使用
fieldnames = ["timestamp", "sensor_id", "temperature", "humidity", "quality"]
csv_logger = CSVLogger("sensor_data.csv", fieldnames)

reading = {
    "timestamp": datetime.now().isoformat(),
    "sensor_id": "dht22_01",
    "temperature": 24.5,
    "humidity": 55.0,
    "quality": "VALID"
}
csv_logger.log(reading)
```

## 完整采集示例

```python
import time
import json
import board
import busio
import adafruit_bme280
from datetime import datetime

class SensorCollector:
    """传感器数据采集器"""

    def __init__(self, sensor_id, log_prefix="sensor"):
        self.sensor_id = sensor_id
        self.log_file = f"{log_prefix}_{datetime.now():%Y%m%d_%H%M%S}.jsonl"

        # 初始化 BME280
        i2c = busio.I2C(board.SCL, board.SDA)
        self.bme280 = adafruit_bme280.Adafruit_BME280_I2C(i2c, address=0x76)

        print(f"采集器初始化完成")
        print(f"传感器ID: {self.sensor_id}")
        print(f"日志文件: {self.log_file}")

    def read(self):
        """读取传感器数据"""
        try:
            temp = round(self.bme280.temperature, 2)
            hum = round(self.bme280.relative_humidity, 2)
            pres = round(self.bme280.pressure, 2)

            # 质量检查
            quality = "VALID"
            if temp < -40 or temp > 85:
                quality = "OUT_OF_RANGE"
            if hum < 0 or hum > 100:
                quality = "OUT_OF_RANGE"

            return {
                "timestamp": datetime.now().isoformat(),
                "sensor_id": self.sensor_id,
                "sensor_type": "BME280",
                "temperature": temp,
                "humidity": hum,
                "pressure": pres,
                "quality": quality
            }

        except Exception as e:
            return {
                "timestamp": datetime.now().isoformat(),
                "sensor_id": self.sensor_id,
                "sensor_type": "BME280",
                "temperature": None,
                "humidity": None,
                "pressure": None,
                "quality": f"ERROR: {str(e)}"
            }

    def log(self, reading):
        """记录数据到文件"""
        with open(self.log_file, "a") as f:
            f.write(json.dumps(reading, ensure_ascii=False) + "\n")

    def run(self, interval=5, duration=None):
        """运行采集循环"""
        start_time = time.time()
        count = 0

        print(f"开始采集，间隔 {interval} 秒")

        try:
            while True:
                reading = self.read()
                self.log(reading)
                count += 1

                print(f"[{count}] T:{reading['temperature']}°C H:{reading['humidity']}% P:{reading['pressure']}hPa Q:{reading['quality']}")

                if duration and (time.time() - start_time) >= duration:
                    break

                time.sleep(interval)

        except KeyboardInterrupt:
            print("\n采集中断")

        print(f"采集完成，共 {count} 条记录")
        print(f"日志: {self.log_file}")

# 使用
if __name__ == "__main__":
    collector = SensorCollector("bme280_cabin_01")
    collector.run(interval=5)  # 每5秒采集一次
```

## 与实验的关系

本节内容可直接用于 Lab02。完成本节后，建议把采集结果写入 CSV 或 JSON Lines 形成日志，为后续数据分析做准备。

