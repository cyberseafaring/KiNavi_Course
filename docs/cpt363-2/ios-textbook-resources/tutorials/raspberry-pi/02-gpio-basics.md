# GPIO 基础

本节介绍 GPIO 的基本概念与安全边界，目标是让学生能够完成一次简单的数字输入输出实验，并形成对电气风险的敬畏。

## 学习目标

- 能够理解 GPIO 引脚的功能与编号方式
- 能够安全地进行硬件接线
- 能够使用 Python 控制 GPIO 输入输出
- 能够识别常见的电气风险并采取防护措施

## GPIO 基本概念

GPIO (General Purpose Input/Output) 是通用输入输出接口，允许树莓派与外部电子元件进行交互。工程上需要同时关注引脚编号、工作电压与电流限制，避免把软件问题变成硬件损坏。

### 树莓派 GPIO 引脚布局

树莓派 4B/5 有 40 针 GPIO 接口，包含多种功能引脚：

| 引脚类型 | 数量 | 说明 |
|---------|------|------|
| GPIO | 26 | 可编程输入/输出 |
| 3.3V 电源 | 2 | 为低功耗元件供电 |
| 5V 电源 | 2 | 为较大功耗元件供电 |
| GND (接地) | 8 | 公共参考电位 |
| I2C | 2 | SDA/SCL 总线 |
| SPI | 5 | MOSI/MISO/SCLK/CE0/CE1 |
| UART | 2 | TX/RX 串口 |

### 引脚编号方式

树莓派 GPIO 有两种编号方式，使用时需要明确指定：

```python
import RPi.GPIO as GPIO

# BCM 编号：使用芯片上的 GPIO 编号
GPIO.setmode(GPIO.BCM)
# 例如：GPIO18 对应物理引脚 12

# BOARD 编号：使用物理引脚编号
GPIO.setmode(GPIO.BOARD)
# 例如：物理引脚 12 对应 GPIO18
```

### 常用 GPIO 引脚对照表

| 物理引脚 | BCM编号 | 功能 | 备注 |
|---------|--------|------|------|
| 11 | GPIO17 | 通用IO | |
| 12 | GPIO18 | PWM0 | 硬件PWM |
| 13 | GPIO27 | 通用IO | |
| 15 | GPIO22 | 通用IO | |
| 16 | GPIO23 | 通用IO | |
| 18 | GPIO24 | 通用IO | |
| 22 | GPIO25 | 通用IO | |
| 3 | GPIO2 | I2C SDA | 有上拉电阻 |
| 5 | GPIO3 | I2C SCL | 有上拉电阻 |

## 安全边界

### 电压与电流限制

树莓派 GPIO 的电气特性必须严格遵守：

| 参数 | 限制值 | 后果 |
|-----|-------|------|
| 逻辑电平 | 3.3V | 接入5V会损坏芯片 |
| 单引脚最大电流 | 16mA | 超过可能损坏引脚 |
| 所有引脚总电流 | 50mA | 超过可能损坏芯片 |

### 安全操作原则

1. **接线前断电**：修改电路时务必断开电源
2. **确认电压**：传感器供电与信号电平必须匹配
3. **使用限流电阻**：LED 等负载必须串联电阻
4. **共地连接**：所有设备的 GND 必须连接在一起
5. **避免短路**：检查接线无误后再通电

### 电平转换

当需要连接 5V 设备时，必须使用电平转换器：

```
5V 设备                    树莓派
   │                         │
   └──[电平转换器]──────────┘
      (5V ↔ 3.3V)
```

常用电平转换方案：
- 专用电平转换模块 (推荐)
- 电阻分压器 (仅适用于单向信号)
- 光耦隔离 (用于隔离要求高的场景)

## 数字输出

### LED 闪烁示例

最基本的 GPIO 输出实验，控制 LED 闪烁。

#### 硬件接线

```
GPIO18 (物理引脚12) ──[330Ω电阻]──[LED正极]──[LED负极]── GND
```

电阻计算：
- LED 正向电压约 2V
- 期望电流 10mA
- R = (3.3V - 2V) / 10mA = 130Ω
- 实际使用 330Ω 更安全 (约 4mA)

#### Python 代码

```python
import time
import RPi.GPIO as GPIO

# 引脚定义
LED_PIN = 18

# 初始化
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

try:
    print("LED 闪烁测试，按 Ctrl+C 退出")
    while True:
        GPIO.output(LED_PIN, GPIO.HIGH)
        print("LED 开")
        time.sleep(0.5)

        GPIO.output(LED_PIN, GPIO.LOW)
        print("LED 关")
        time.sleep(0.5)

except KeyboardInterrupt:
    print("\n程序退出")

finally:
    # 清理 GPIO 状态
    GPIO.cleanup()
    print("GPIO 已清理")
```

### PWM 控制 LED 亮度

```python
import time
import RPi.GPIO as GPIO

LED_PIN = 18

GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

# 创建 PWM 对象，频率 1000Hz
pwm = GPIO.PWM(LED_PIN, 1000)
pwm.start(0)  # 初始占空比 0%

try:
    print("PWM 亮度渐变测试")
    while True:
        # 渐亮
        for duty in range(0, 101, 5):
            pwm.ChangeDutyCycle(duty)
            time.sleep(0.05)

        # 渐暗
        for duty in range(100, -1, -5):
            pwm.ChangeDutyCycle(duty)
            time.sleep(0.05)

except KeyboardInterrupt:
    pass

finally:
    pwm.stop()
    GPIO.cleanup()
```

## 数字输入

### 按钮读取示例

#### 硬件接线 (使用内部上拉电阻)

```
GPIO17 (物理引脚11) ──[按钮]── GND
```

按钮按下时，GPIO17 接地变为低电平；释放时，内部上拉电阻使其变为高电平。

#### Python 代码

```python
import time
import RPi.GPIO as GPIO

BUTTON_PIN = 17

GPIO.setmode(GPIO.BCM)
# 配置为输入，启用内部上拉电阻
GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)

try:
    print("按钮状态监测，按 Ctrl+C 退出")
    last_state = GPIO.HIGH

    while True:
        current_state = GPIO.input(BUTTON_PIN)

        if current_state != last_state:
            if current_state == GPIO.LOW:
                print("按钮按下")
            else:
                print("按钮释放")
            last_state = current_state

        time.sleep(0.01)  # 消抖

except KeyboardInterrupt:
    pass

finally:
    GPIO.cleanup()
```

### 中断方式读取

使用中断可以避免轮询，提高效率：

```python
import time
import RPi.GPIO as GPIO

BUTTON_PIN = 17

def button_callback(channel):
    """按钮中断回调函数"""
    if GPIO.input(channel) == GPIO.LOW:
        print(f"按钮按下 (GPIO{channel})")
    else:
        print(f"按钮释放 (GPIO{channel})")

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)

# 添加中断检测
GPIO.add_event_detect(
    BUTTON_PIN,
    GPIO.BOTH,           # 上升沿和下降沿都触发
    callback=button_callback,
    bouncetime=200       # 消抖时间 200ms
)

try:
    print("中断方式监测按钮，按 Ctrl+C 退出")
    while True:
        time.sleep(1)

except KeyboardInterrupt:
    pass

finally:
    GPIO.cleanup()
```

## 输入输出组合

### 按钮控制 LED

```python
import time
import RPi.GPIO as GPIO

BUTTON_PIN = 17
LED_PIN = 18

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(LED_PIN, GPIO.OUT)

led_state = False

def toggle_led(channel):
    """切换 LED 状态"""
    global led_state
    led_state = not led_state
    GPIO.output(LED_PIN, led_state)
    print(f"LED {'开' if led_state else '关'}")

GPIO.add_event_detect(
    BUTTON_PIN,
    GPIO.FALLING,        # 只在按下时触发
    callback=toggle_led,
    bouncetime=300
)

try:
    print("按钮控制 LED，按 Ctrl+C 退出")
    while True:
        time.sleep(1)

except KeyboardInterrupt:
    pass

finally:
    GPIO.cleanup()
```

## 多引脚控制

### 流水灯示例

```python
import time
import RPi.GPIO as GPIO

# 定义 LED 引脚列表 (BCM 编号)
LED_PINS = [17, 18, 27, 22, 23, 24]

GPIO.setmode(GPIO.BCM)

# 初始化所有 LED 引脚
for pin in LED_PINS:
    GPIO.setup(pin, GPIO.OUT)
    GPIO.output(pin, GPIO.LOW)

def all_off():
    """关闭所有 LED"""
    for pin in LED_PINS:
        GPIO.output(pin, GPIO.LOW)

def running_light(delay=0.1):
    """流水灯效果"""
    for pin in LED_PINS:
        GPIO.output(pin, GPIO.HIGH)
        time.sleep(delay)
        GPIO.output(pin, GPIO.LOW)

    # 反向
    for pin in reversed(LED_PINS):
        GPIO.output(pin, GPIO.HIGH)
        time.sleep(delay)
        GPIO.output(pin, GPIO.LOW)

try:
    print("流水灯测试，按 Ctrl+C 退出")
    while True:
        running_light(0.1)

except KeyboardInterrupt:
    pass

finally:
    all_off()
    GPIO.cleanup()
```

## GPIO 状态监控

### 创建监控工具

```python
import time
import RPi.GPIO as GPIO

def monitor_gpio_pins(pins, interval=1):
    """监控指定 GPIO 引脚状态"""
    GPIO.setmode(GPIO.BCM)

    for pin in pins:
        try:
            GPIO.setup(pin, GPIO.IN)
        except Exception as e:
            print(f"GPIO{pin} 设置失败: {e}")

    try:
        print("GPIO 状态监控")
        print("-" * 40)

        while True:
            states = []
            for pin in pins:
                try:
                    state = GPIO.input(pin)
                    states.append(f"GPIO{pin}:{state}")
                except:
                    states.append(f"GPIO{pin}:ERR")

            print(" | ".join(states))
            time.sleep(interval)

    except KeyboardInterrupt:
        pass

    finally:
        GPIO.cleanup()

# 使用
monitor_gpio_pins([17, 18, 27, 22], interval=0.5)
```

## 使用 gpiozero 库

gpiozero 是更高层次的 GPIO 库，代码更简洁：

### 安装

```bash
pip3 install gpiozero
```

### LED 控制

```python
from gpiozero import LED
from time import sleep

led = LED(18)

# 基本控制
led.on()
sleep(1)
led.off()

# 闪烁
led.blink(on_time=0.5, off_time=0.5)
sleep(5)

led.close()
```

### 按钮读取

```python
from gpiozero import Button
from signal import pause

button = Button(17)

def on_press():
    print("按钮按下")

def on_release():
    print("按钮释放")

button.when_pressed = on_press
button.when_released = on_release

print("等待按钮事件...")
pause()
```

### 按钮控制 LED

```python
from gpiozero import LED, Button
from signal import pause

led = LED(18)
button = Button(17)

# 按住按钮时 LED 亮
button.when_pressed = led.on
button.when_released = led.off

# 或使用切换模式
# button.when_pressed = led.toggle

pause()
```

## 常见问题

### GPIO 警告信息

```python
# 忽略通道已使用警告
GPIO.setwarnings(False)
```

### 程序退出后引脚仍保持状态

确保在程序退出时调用 `GPIO.cleanup()`，建议使用 try-finally 结构。

### 引脚无响应

检查清单：
1. 确认使用正确的编号方式 (BCM/BOARD)
2. 确认接线正确
3. 确认引脚未被其他程序占用
4. 使用万用表测量电压确认硬件正常

## 与实验的关系

本节内容直接支撑：
- Lab01: 船载传感器节点搭建
- Lab02: 传感器数据采集实验
- 后续 GPIO 相关开发任务

