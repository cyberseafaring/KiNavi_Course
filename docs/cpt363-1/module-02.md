# Module 2: Shipborne Radar System Architecture and Components

## 2.1 Radar System Hardware Composition

船舶导航雷达系统是由多种硬件组件集成而成的复杂系统，每个组件都有其特定的功能，以确保系统能够有效运行。以下是这些组件的详细分解，并附有说明性图表。

The marine navigation radar system is a complex assembly of various hardware components, each serving a specific function to ensure the system operates effectively. Below is a detailed breakdown of these components, supported by illustrative diagrams.

**Radar System Components:**

船舶导航雷达系统的主要组成部分包括电源系统、发射系统、接收系统和显示系统。电源系统为雷达系统提供稳定的电源，确保其正常运行。发射系统负责生成和发射雷达信号，包括触发单元、调制器、磁控管、波导管和天线扫描器。接收系统则负责接收和处理雷达信号，包括TR开关、混频器、本地振荡器、中频放大器和视频放大器。显示系统将处理后的雷达数据以图像形式展示给操作员，包括显示处理单元和显示单元（PPI）。

The main components of the marine navigation radar system include the power supply system, transmitter system, receiver system, and display system. The power supply system provides stable power to the radar system to ensure its normal operation. The transmitter system is responsible for generating and transmitting radar signals, including the trigger unit, modulator, magnetron, waveguide, and antenna scanner. The receiver system is responsible for receiving and processing radar signals, including the TR switch, mixer, local oscillator, IF amplifier, and video amplifier. The display system presents the processed radar data to the operator in the form of images, including the display processing unit and the display unit (PPI).

**Other Sensors Required by the Radar System:**

雷达系统还需要与其他传感器集成，以提供更全面的导航信息。这些传感器包括罗经、测深仪、GPS、AIS、ECDIS和VDR等。罗经提供船舶的航向信息，测深仪测量水深，GPS提供船舶的位置信息，AIS与其他船舶交换导航信息，ECDIS显示电子海图并集成雷达数据，VDR记录雷达数据和其他导航信息。

The radar system also needs to be integrated with other sensors to provide more comprehensive navigation information. These sensors include the compass, depth sounder, GPS, AIS, ECDIS, and VDR. The compass provides the ship's heading information, the depth sounder measures water depth, GPS provides the ship's position, AIS exchanges navigation information with other vessels, ECDIS displays electronic charts and integrates radar data, and VDR records radar data and other navigation information.

## 2.2 Radar Sensor

雷达传感器是雷达系统的核心部件，负责发射和接收雷达信号。以下是雷达传感器的基本组成元器件，并附有说明性图表。

The radar sensor is the core component of the radar system, responsible for transmitting and receiving radar signals. Below is a detailed breakdown of the basic components of the radar sensor, supported by illustrative diagrams.

**Radar Sensor Components:**

雷达传感器的主要组成部分包括发射机、接收机、双工器和天线。发射机负责生成高功率微波脉冲，通常使用磁控管或固态发射机。接收机由低噪声放大器、混频器和中频放大器组成，具有高灵敏度和低噪声，以确保能够检测到弱信号。双工器允许天线在发射和接收模式之间切换。天线负责辐射和接收雷达信号，常见的类型包括缝隙天线、抛物面天线和相控阵天线。

The main components of the radar sensor include the transmitter, receiver, duplexer, and antenna. The transmitter is responsible for generating high-power microwave pulses, typically using a magnetron or solid-state transmitter. The receiver consists of a low-noise amplifier, mixer, and IF amplifier, with high sensitivity and low noise to ensure the detection of weak signals. The duplexer allows the antenna to switch between transmit and receive modes. The antenna is responsible for radiating and receiving radar signals, with common types including slot antennas, parabolic antennas, and phased array antennas.

## 2.3 Radar Signal Flow

雷达信号的产生、发射、接收、处理和显示是一个连续的过程，涉及多个步骤。以下是整个过程的详细描述，并附有说明性图表。

The generation, transmission, reception, processing, and display of radar signals is a continuous process involving multiple steps. Below is a detailed description of the entire process, supported by illustrative diagrams.

**Signal Generation:** 发射机生成高功率微波脉冲。

**Transmission:** 脉冲通过波导管传输到天线。

**Emission:** 天线将脉冲辐射到周围环境中。

**Reflection:** 脉冲反射回天线。

**Reception:** 天线接收反射信号。

**Processing:** 接收机处理信号，放大并转换为适合显示的格式。

**Display:** 处理后的信号在雷达屏幕上显示。

**Signal Generation:** The transmitter generates high-power microwave pulses.

**Transmission:** The pulses are transmitted through the waveguide to the antenna.

**Emission:** The antenna radiates the pulses into the surrounding environment.

**Reflection:** The pulses reflect off objects and return to the antenna.

**Reception:** The antenna receives the reflected signals.

**Processing:** The receiver processes the signals, amplifies them, and converts them into a format suitable for display.

**Display:** The processed signals are displayed on the radar screen.

## 2.4 Key Technical Parameters of Radar Performance

雷达性能的关键技术参数包括工作频率与波长、脉冲宽度与脉冲重复频率、发射功率和中频带宽。这些参数对雷达的探测距离、分辨率和灵敏度有重要影响。

The key technical parameters of radar performance include working frequency and wavelength, pulse width and pulse repetition frequency, transmit power, and intermediate frequency bandwidth. These parameters have a significant impact on the radar's detection range, resolution, and sensitivity.

**Working Frequency and Wavelength:** 工作频率影响雷达的分辨率和大气衰减。较高的频率提供更好的分辨率，但更容易受到大气衰减的影响。

**Pulse Width and Pulse Repetition Frequency:** 脉冲宽度和脉冲重复频率决定了雷达的探测距离和分辨率。较短的脉冲提供更好的分辨率，但需要更高的功率以实现长距离探测。较高的脉冲重复频率可以更快地更新数据，但可能导致距离模糊。

**Transmit Power:** 发射功率影响雷达的探测距离。较高的发射功率可以增加探测距离，但也会增加干扰。

**Intermediate Frequency Bandwidth:** 中频带宽影响接收机的灵敏度。较宽的带宽可以提高灵敏度，但也会增加噪声。

**Working Frequency and Wavelength:** The working frequency affects the radar's resolution and atmospheric attenuation. Higher frequencies provide better resolution but are more susceptible to atmospheric attenuation.

**Pulse Width and Pulse Repetition Frequency:** Pulse width and pulse repetition frequency determine the radar's detection range and resolution. Shorter pulses provide better resolution but require higher power for long-range detection. Higher pulse repetition frequency allows faster data updates but can cause range ambiguity.

**Transmit Power:** Transmit power affects the radar's detection range. Higher transmit power increases the detection range but also increases interference.

**Intermediate Frequency Bandwidth:** Intermediate frequency bandwidth affects receiver sensitivity. Wider bandwidth increases sensitivity but also increases noise.

## 2.5 Radar Signal Processing Techniques (Elective)

雷达信号处理技术包括信号预处理、动目标检测（MTI）、恒虚警（CFAR）和多普勒处理。这些技术可以提高雷达信号的质量和目标检测的准确性。

Radar signal processing techniques include signal preprocessing, moving target indication (MTI), constant false alarm rate (CFAR), and Doppler processing. These techniques can improve the quality of radar signals and the accuracy of target detection.

**Signal Preprocessing:** 信号预处理包括噪声抑制和干扰消除，以提高信号质量。

**Moving Target Indication (MTI):** MTI技术通过比较连续的雷达扫描来检测移动目标，利用多普勒效应区分移动目标和静止杂波。

**Constant False Alarm Rate (CFAR):** CFAR技术通过自适应调整检测阈值来维持恒定的虚警率，从而在不同背景噪声下保持稳定的检测性能。

**Doppler Processing:** 多普勒处理利用多普勒效应测量目标的速度，通过分析反射信号的频率变化来确定目标的速度。

**Signal Preprocessing:** Signal preprocessing includes noise suppression and interference elimination to improve signal quality.

**Moving Target Indication (MTI):** MTI technology detects moving targets by comparing successive radar scans, using the Doppler effect to distinguish moving targets from stationary clutter.

**Constant False Alarm Rate (CFAR):** CFAR technology maintains a constant false alarm rate by adaptively adjusting the detection threshold, ensuring stable detection performance in varying background noise.

**Doppler Processing:** Doppler processing uses the Doppler effect to measure target velocity, analyzing the frequency shift of reflected signals to determine target speed.
