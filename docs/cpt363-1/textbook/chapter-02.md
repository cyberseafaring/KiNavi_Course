# 第二章：雷达系统的技术原理

## 2.1 引言

本章深入探讨现代船舶雷达系统的结构和技术原理。虽然理解这些原理不需要深厚的科学或工程学知识，但需要一定的数学基础。本章主要介绍传统的磁控管脉冲雷达系统，同时也会涉及固态雷达的基本原理。

## Introduction

This chapter delves into the structure and technical principles of modern marine radar systems. While a deep understanding of science or engineering is not required, some basic mathematical knowledge is necessary. The chapter primarily focuses on conventional magnetron-based pulse radar systems but also touches on the principles of solid-state radar.

## 2.2 基本功能

### 2.2.1 发射机

发射机的作用是产生被辐射的电磁能量。对于标准脉冲雷达，发射机提供脉冲的正确射频（RF）、重复频率、脉冲长度、形状和功率。现代小型船用雷达的发射机通常位于桅杆顶部，靠近天线，通过旋转关节与天线相连。这种设计允许发射的RF能量在静态发射机和旋转天线之间传输。在中大型商船上，发射机位于天线甲板下，通过传输线（通常是S波段的同轴电缆和X波段的波导）连接到天线单元的旋转关节。同轴电缆由中心导体、绝缘材料和外屏蔽层组成，而波导则是具有精确矩形或圆形横截面的空心刚性铜管。波导也可以制成柔性的，例如通过使墙壁呈波纹状并使用椭圆形横截面。波导在技术上是一个很好的解决方案，因为它在传输或接收信号时产生的损耗很小。典型的运行长度可达20至30米。然而，波导是一种非常昂贵且笨重的传输线，尤其是在S波段。

### Transmitter

The function of the transmitter is to generate the radiated electromagnetic energy. For a standard pulse radar, the transmitter provides the correct radio frequency (RF) of the pulses, along with their repetition frequency, length, shape, and power. Nowadays, the transmitter is often located upmast, close to the antenna, separated from it by the rotating joint. This allows the transmitted RF energy to travel between the typically static transmitter and the rotating antenna. On some systems, the transmitter is below-deck and there is a transmission line, normally a coaxial cable at S-band and a waveguide at X-band, connecting it to the rotating joint of the antenna unit. A coaxial cable is one having a central conductor surrounded by insulating material together with an outer screening sheath. The traditional waveguide is hollow rigid copper tubing with a precise rectangular or circular cross-section. Waveguide can also be made flexible, such as by corrugating the walls and using an elliptical cross-section. Waveguide is a technically good solution because it creates little loss in the transmitted or received signal. Typical runs can be up to 20–30 m in length. However, it is a very expensive and bulky transmission line, especially at S-band.

### 2.2.2 天线

天线、扫描器和空中都用于描述将无线电能量辐射到空间并收集返回回波的设备。其构造定义了雷达波束在水平和垂直平面上的形状（功率分布）。为了实现所需的定向特性，水平波束宽度必须很窄，大约在1°到2°之间。相比之下，垂直波束宽度较宽，以便在船舶横摇和纵摇时保持良好的性能。国际海事组织（IMO）的雷达性能标准规定了某些范围性能要求，这些要求必须在船舶横摇或纵摇达到6°时实现。理论上，天线可以安装在补偿船舶俯仰和横摇的稳定平台上，如一些海军雷达所采用的那样。然而，实际上，这种解决方案成本很高，简单的低成本解决方案是确保天线的垂直波束宽度能够容纳船舶的运动，实际上要求其最小值为20°。

### Antenna

Antenna, scanner and aerial are all names that are used to describe the device which radiates the radio energy into space and collects the returning echoes. Its construction defines the shape (power distribution) of the radar beam in both the horizontal and vertical planes. In order to achieve the required directional characteristic, the horizontal limits of the beam must be narrow, in the order of 1°–2°. By contrast, the beam is wide in the vertical plane in order to maintain adequate performance when the vessel is rolling and pitching in a seaway. The International Maritime Organization (IMO) Performance Standards for radar set out certain range performance requirements and these must be achieved when the vessel is rolling or pitching up to 6°. In principle, the antenna could be mounted on a stabilized platform that compensates for the vessel pitch and roll, as implemented on some naval radars. In practice, this is very expensive and the simple low-cost solution is to ensure that the antenna’s vertical beamwidth accommodates the motion, effectively requiring it to be a minimum of 20°.

### 2.2.3 接收机

接收机的作用是放大天线截获的非常微弱的回波。这使得信号能够被处理，以便在显示屏上尽可能清晰地显示，并且可以用于自动处理，例如目标跟踪（TT）。接收机是雷达中非常关键的一个模块，因为它必须准确地放大接收到的信号而不产生任何失真。接收到的原始信号水平很低，这使得这一过程非常具有挑战性。特别是，设计不佳的接收机可能会在接收到的信号中添加不必要的噪声，这可能会完全掩盖微弱的信号，甚至会扭曲较强的信号。在当今拥挤的射频谱中，接收机内的任何失真效应都可能不恰当地将其他传输（如数字电信信号）的成分添加到接收到的雷达信号中，从而造成显著的干扰效应。这些问题在第2.6.5节中进行了更详细的讨论。

### Receiver

The function of the receiver is to amplify the very weak echoes intercepted by the antenna. This permits the signals to be processed such that they appear as clear as possible on the display, and also so that they can be used for automated processes, such as target tracking (TT). The receiver is a very critical module of a radar as it must accurately amplify the received signal without any distortion. The very low levels of the original signal make this a demanding process. In particular, a poorly designed receiver can add unwanted noise into the received signal, which can then totally obscure weak signals and can also distort stronger ones. In today’s crowded radio spectrum any distortion effects within the receiver can inappropriately add components of other transmissions, such as digital telecommunications signals, into the received radar signal causing significant interference effects. These issues are looked at in more detail in Section 2.6.5.

### 2.2.4 雷达处理器

雷达处理器的主要功能是将接收到的雷达信号转换为优化后的图像，以便在操作员的显示屏上显示。特别是，图像的构建必须确保经过训练的用户能够充分利用返回雷达信号中可用的所有信息。这从根本上包括通过在显示屏上生成清晰可见的响应来清楚地指示目标的存在，其角度和径向位置相对于例如本船的航向线和指示位置，代表相应目标相对于本船的方位和距离。

### Radar Processor

The prime function of the radar processor is to turn the received radar signals into an optimized image that can be shown on the operator’s display. In particular, the image must be constructed to ensure that a trained user can make maximum use of the information that is available within the returned radar signals. This fundamentally includes a clear indication of the presence of objects by generating on the display a visible response whose angular and radial position with respect to, for instance, the own ship’s heading line and indicated position, are representative of the bearing and range at which the corresponding target lies.

### 2.2.5 显示和用户界面

雷达操作员界面，包括雷达图像的显示和雷达功能的控制，对于雷达操作员来说非常重要。它必须被放置在船桥上合适的位置，以便能够有效地与其他系统一起使用，同时提供从船桥窗户的良好视野。显示屏需要在所有操作条件下都清晰可见，无论是白天、黄昏还是夜晚。特别是在夜间，它必须在不降低用户和其他人在船桥上的夜视能力的情况下提供清晰度。控制和操作菜单需要易于理解，用户设置的值可以轻松观察，帮助确保雷达始终根据当前情况的需要进行最佳设置。在当今的术语中，它必须是用户友好的。

### Display and User Interface

The user interface, including the display of the radar image and the control of the radar’s functionality, is obviously of high importance to the radar operator. It must be appropriately positioned on the ship’s bridge, to enable it to be used effectively in conjunction with other systems, while providing a good view from the bridge windows. The display needs to be clear under all operating conditions in day, dusk and night. In particular, at night, it must give clarity without diminishing the night vision of the user and others on the bridge. The controls and operating menus need to be easy to understand, with values that have been set by the user readily observable, helping to ensure that the radar is always set optimally to meet the needs of the immediate situation. In today’s terminology, it must be user-friendly.

## 2.3 雷达信号

### 2.3.1 基本考虑

雷达需要传输一种信号，以便当它从目标反射并被接收时，能够尽可能多地收集有关该目标的相关信息，特别是包括其瞬时距离和方位。需要从相对于本船的0°到360°方位收集目标信息，并且能够覆盖到指定的距离范围。此外，信号特性需要提供足够快速的更新信息，以便连续更新目标信息，使得人机界面或雷达内的任何自动系统能够跟踪所有单独目标的相对位置变化。如果目标之间的位置跳跃过大，可能会导致混淆，因为人机界面或雷达内的自动过程将无法将目标在更新之间进行关联。

### Fundamental Considerations

The radar needs to transmit a signal such that when it is echoed from a target and received, as much relevant information about that target can be collected, especially including its instantaneous range and bearing. There is a need to collect information from targets at all bearings from 0° to 360° relative to own ship, and out to a specified range. In addition, the signal characteristics need to provide sufficiently rapid updates in information so that the successive changes in relative position of own ship and any target are small enough to allow a human operator or any automatic system within the radar to be able to keep track of all individual targets. Excessive positional jumps of targets between refreshes of the information would create the potential for confusion because the human user or the automatic process within the radar would not be able to correlate targets between updates.

### 2.3.2 频率选择

雷达的一个重要考虑因素是其工作频率。这与两个重要问题密切相关。首先，需要的角分辨率；其次，信号在地球大气中的传播情况。在第2.5.1.4节中将展示，角分辨率主要由天线控制；天线越宽，其水平波束宽度可以越窄。实际船舶雷达需要能够区分出在同一距离上相隔2.5°或更多的两个点目标；同时，整个系统需要达到1°的目标方位精度。这两个要求都包含在国际海事组织（IMO）的雷达性能标准中。这意味着船舶雷达天线需要有一个小于2.5°的水平波束宽度。这只有在微波频率下才实际可行；否则，天线的水平尺寸会变得过于笨重。在船舶雷达的早期阶段，低于2.5 GHz的操作开始变得不切实际，而高于此频率的操作可以实现更实用尺寸的天线。

### Choice of Frequency

An essential consideration for the radar is the frequency at which it operates. This is fundamentally connected to two important issues. The first is the angular resolution that is required and the second is how well the signal travels within the atmosphere of the earth. In Section 2.5.1.4 it is shown that angular resolution is fundamentally controlled by the antenna; the wider the antenna, the narrower its horizontal beamwidth can be made. Practical marine radars for ships need to be able to discriminate between two point targets at the same range that are separated by 2.5° or more; also a target bearing accuracy of 1° is required from the complete system. Both these requirements are embodied within IMO’s radar performance standards, see Section 11.2.1. It means that the marine radar antenna needs to have a horizontal beamwidth somewhat less than 2.5°. This only becomes practical at microwave frequencies; otherwise the antenna horizontal dimensions become too unwieldy. It became clear in the early days of marine radar that operation below about 2.5 GHz started to become impractical and that operation well above this frequency allowed even more practically sized antennas.

### 2.3.3 脉冲雷达概念

传统的磁控管脉冲雷达需要产生具有定义长度、脉冲重复频率（PRF）、功率和形状的脉冲，以实现IMO规定的雷达性能。每个传输脉冲的实际脉冲长度、PRF和功率非常重要，用于有效检测目标。最终脉冲形状影响范围的准确测量，以及可能令人惊讶的是，雷达的干扰，无论是与其他雷达还是与其他射频系统，特别是数字电信系统，都密切相关。干扰问题在第2.6.5节中进行了讨论。

### Pulse Radar Concepts

A marine pulse radar, such as that realized by a conventional magnetron-based transmitter, has to produce pulses of defined length, PRF, power and shape that are optimized to achieve the required radar performance defined by IMO. The actual pulse length, PRF and power of each transmitted pulse are of considerable importance in the effective detection of targets. The final pulse shape influences the accurate measurement of range and, perhaps surprisingly, the interference of the radar, both with other radars and with other RF systems, particularly digital telecommunications. Interference issues are discussed in Section 2.6.5.

#### 2.3.3.1 脉冲长度

脉冲长度定义为单个发射雷达脉冲的持续时间，通常以微秒（µs）为单位报价，尽管有时也会以纳秒（ns）为单位给出较短的脉冲，其中1 ns = 10^-9 s；因此，1000 ns = 1 µs。例如，一个典型的短脉冲长度为0.05 µs，也可以表示为50 ns。一般来说，较长脉冲的目标回波比短脉冲更容易被检测，因为长脉冲包含更多的能量。考虑一个功率为3 kW的电加热器的例子。如果它只开了5分钟，房间温度的升高可能几乎无法察觉。另一方面，如果它开了50分钟，房间很可能会明显变暖。能量通常以千瓦时或千瓦时来衡量，上述加热器的例子分别相当于0.25 kW小时和2.5 kW小时的能量。然而，短雷达脉冲通常可以更轻松、更准确地确定目标的距离，并且允许在同一方位上紧密间隔的两个目标被显示为单独的目标。这被称为距离分辨力，如图2.3所示。非常短的脉冲在操作低最大显示范围时是必需的。例如，一个1 µs的脉冲在空间中的长度约为300米，实际上限制了最小可检测范围至少为该长度的一半——传统雷达在脉冲仍在传输时不能接收。另一方面，一个0.05 µs的脉冲长度仅为7.5米，极大地提高了最小可检测范围。有关最小范围的讨论，请参阅第3.2.4节。

#### Pulse Length

Pulse length is defined as the duration of a single transmitted radar pulse and is often quoted in microseconds (µs), although pulses rather shorter than 1 µs are sometimes given in nanoseconds (ns), where 1 ns = 10^-9 s; and so there are 1000 ns to 1 µs. As an example, a typical short pulse length of 0.05 µs can alternatively be stated as 50 ns. In general, the target echoes from longer pulses are easier to detect than those from shorter pulses, simply because long pulses contain more energy. Consider the analogy of an electric heater with a power of 3 kW. If it had been on for only 5 min any rise in the room’s temperature may be imperceptible. On the other hand, if it had been on for 50 min the room is likely to have become perceptibly warmer. Energy is typically measured in watt hours or kilowatt hours, with the heater examples being the equivalent of 3 × 5/60 = 0.25 kW hours and 3 × 50/60 = 2.5 kW hours, respectively. However, short radar pulses generally allow more easy and accurate determination of the range of a target, and also permit two targets closely spaced in range and at the same bearing to be displayed as separate targets. This is known as range discrimination, see Figure 2.3. Very short pulses are required when operating at a low maximum displayed range. For instance, a radiated pulse of 1 µs has a length in space of about 300 m, effectively limiting the minimum range to at least half this figure — a conventional radar cannot receive while the pulse is still being transmitted. On the other hand, a pulse of 0.05 µs is only 7.5 m in length, greatly enhancing the minimum detectable range. See Section 3.2.4 for discussion of minimum range.

#### 2.3.3.2 脉冲重复频率

脉冲重复频率（PRF）通常表示为每秒发射的脉冲数，因此以赫兹或pps（每秒脉冲数）表示。船舶雷达的典型值为1000至3000 pps。脉冲重复间隔（PRI）是脉冲之间的时间间隔。应该注意的是，PRF和PRI实际上指的是同一个特征，它们只是通过表达式PRF = 1/PRI相互关联。

#### Pulse Repetition Frequency

PRF is normally expressed as the number of pulses transmitted in 1 s and is therefore denoted in Hertz or pps (pulses per second). Typical values for a marine radar are 1000–3000 pps. The pulse repetition interval (PRI) is the time interval between pulses. It should be noted that PRF and PRI effectively refer to the same feature and are simply related by the expression PRF = 1/PRI.

#### 2.3.3.3 功率考虑

目标的检测范围显然取决于发射信号的实际功率。事实上，许多其他因素也影响目标的检测范围，但发射信号功率可能是最明显的。在磁控管雷达上，瞬时功率以千瓦为单位测量，通常可能为3 kW（小型船只雷达）或25 kW（船舶雷达）。如前所述，这看起来很大，特别是与具有类似操作范围的25 W甚高频（VHF）发射机相比。实际上，如上一节所述，更重要的是有效用于照亮目标的能量，能量是功率和时间的乘积。

#### Power Considerations

It is obvious that the range at which a target can be detected is dependent on the actual power of the transmitted signal. In fact, many other factors affect the range at which detection takes place, but the transmitted signal power is perhaps the most obvious. On a magnetron-based radar, the instantaneous power is measured in kilowatts and may typically be 3 kW for a small craft radar or 25 kW for a ship’s radar. As previously noted, this seems large, especially when compared to a 25 W VHF transmitter that has a similar operational range. In fact, as discussed in the previous section, what is more important is the energy that is effectively available to illuminate targets, with energy being the product (multiplication) of power and time.

#### 2.3.3.4 脉冲形状

脉冲形状在准确确定距离方面具有特别重要的意义，尽管现代处理系统可以补偿非理想性。从概念上讲，脉冲的轮廓（或包络）应该是矩形的，特别是脉冲的前沿应该是垂直上升的。其重要性如图2.4所示，该图比较了使用理想脉冲形状与使用与理想形状不同的脉冲形状时获得的范围测量结果。由于接收到的信号强度与发射脉冲强度之间的巨大差异，实际上无法按比例显示它们的振幅。因此，在考虑图2.4时，必须认识到发射脉冲的振幅极高，而即使经过放大，接收到的回波振幅也相对较弱，只有在其振幅达到接收机可以检测到的最小信号水平时才会被观察到。该水平称为最小可检测信号，是接收机的一个特性，将在第3.2.3节中进一步讨论。

#### Pulse Shape

The pulse shape is of particular significance in the accurate determination of range, although modern processing systems can compensate for non-idealities. Conceptually, the outline (or envelope) of the pulse should be rectangular and, particularly, the leading edge of the pulse should take the form of a vertical rise. The significance of this is illustrated by Figure 2.4, which shows the envelope of an ideal pulse and then compares the range measurement obtained using such an ideal pulse shape with that obtained using a pulse shape which differs from the ideal. Because of the great disparity between the strength of the transmitted pulse and that of the returning signals, it is not practical to show their amplitudes to scale. Thus, when considering Figure 2.4, it must be appreciated that the transmitted pulse is of extremely high power, whereas the received echo, even after amplification, is comparatively weak and will only be observed where its amplitude rises to the minimum level at which the receiver can detect signals. That level is called the minimum detectable signal and is a receiver characteristic which is discussed further in Section 3.2.3.

## 2.4 雷达发射机

雷达发射机必须产生具有正确功率和详细特性的发射信号。发射信号的细节需要考虑许多因素，包括：IMO定义的雷达目标检测性能、用户的具体设置（如显示范围）、国际电信联盟（ITU）设定的频率和干扰限制要求以及可能有助于特定制造商提高其整体性能的系统设计细微差别。本节讨论传统磁控管雷达发射机的工作原理。固态雷达发射机的概念在第2.9节中讨论。

## The Radar Transmitter

The radar transmitter has to generate the required transmitted signal of the correct power and detailed characteristics. The detail of the transmitted signal has to take into account many factors, including: the target detection performance of the radar as defined by IMO; the specific settings of the user, such as the display range; the frequency and interference limitation requirements set by the International Telecommunication Union (ITU) — see Section 2.6.5.2; and subtleties in the specific design of the radar system that may help a particular manufacturer in improving its overall performance. This section looks at the operation of a conventional magnetron-based radar transmitter. The transmitter concepts for a solid-state coherent radar are considered in Section 2.9.

### 2.4.1 磁控管发射机

传统磁控管雷达发射机的基本组成部分如图2.5所示。它包括以下部分：触发发生器，控制发射脉冲的重复频率；脉冲形成网络，与磁控管一起定义发射脉冲的长度和形状；磁控管本身，根据脉冲形成网络的长度产生脉冲的RF能量。该脉冲的RF能量通过传输线发送到天线（见图2.1），天线将能量辐射到外部世界。

### Magnetron-Based Transmitter

The basic components of a magnetron-based radar transmitter are shown in Figure 2.5. It consists of the following: the trigger generator, which controls the repetition frequency of the transmitted pulses; the pulse-forming network, which defines the length and shape of the transmitted pulses in conjunction with the magnetron; the magnetron itself, which creates the pulse of RF energy equating to the characteristics set by the pulse-forming network length. This pulse of RF energy is sent via the transmission line to the antenna (see Figure 2.1), which radiates the energy to the outside world.

### 2.4.2 磁控管工作原理

磁控管（或更准确地说，腔体磁控管）于1939年发明，当时电子系统主要由真空管（电子管）技术主导。如今，它是少数幸存的真空管技术之一。该技术基于在近真空环境中从真空管内的内部装置（称为阴极）向收集装置（称为阳极）发射电子。为了使电子流动，阳极必须相对于阴极处于高正电压。二极管真空管只有阴极和阳极，但用于放大真空管的电子管（自20世纪60年代以来被晶体管取代）在其内部有其他控制电子的装置，称为栅极。

### Magnetron Operation

The magnetron (or cavity magnetron as it is more correctly named) was invented in 1939, when electronic systems were dominated by vacuum tube (valve) technology. Today, it is one of the very last vacuum tubes in common use to survive the solid-state revolution. The technology is based on the emission of electrons in a near vacuum from an internal device within the vacuum tube, known as the cathode, towards a collecting device, known as the anode. The anode has to be at a high positive voltage compared to the cathode for this to happen. Diode vacuum tubes just have a cathode and an anode but amplifying vacuum tubes, which used to do the job that has been dominated by transistors since the 1960s, have other electron controlling devices within them known as grids.

## 2.5 天线原理

天线系统需要将发射能量聚焦成波束，接收来自目标的反射信号，并以适当的角速度旋转波束。它还提供精确的旋转角度和航向标记数据给雷达处理器。天线是整个雷达系统的重要组成部分，对其整体性能贡献巨大，因此理解其基本概念非常重要。特别难以在不使用分贝（dB）术语的情况下谈论天线和雷达性能，分贝是使非常小和非常大的比率更易于理解的机制。在电子学领域，它主要用于功率比率。功率为1000 W的系统与功率为1 W的系统相比，功率大1000倍。取1000的以10为底的对数，得到值3，这是以对数形式表示的功率比率，单位称为贝尔，以电信先驱亚历山大·格拉汉姆·贝尔命名。通常使用的分贝数字仅仅是贝尔数乘以10；这意味着3贝尔的功率比率通常表示为30分贝（30 dB）。工程师通常以分贝表示所有功率比率，即使是单位比率（0 dB）。以下是一些示例：功率比率 dB等效值 1 0 dB 2 3 dB（实际为3.01029996...） 10 10 dB 100 20 dB 1000 30 dB

## Antenna Principles

The antenna system is required to focus the transmitted energy into a beam, to receive reflected signals from targets and to rotate the beam at an appropriate angular speed. It also provides accurate rotation angle and heading marker data to the radar processor. The antenna forms a very important part of the total radar system, contributing greatly to its overall performance, and so it is important to understand its basic concepts. It is especially difficult to talk about antennas and, in general, about radar performance without using the term decibel, abbreviated as dB. This is a mechanism for making very small and very large ratios more comprehensible. In the electronics world it is mainly applied to power ratios. A system that can produce 1000 W compared to one producing 1 W is 1000 times more powerful. If we now take the logarithm to the base 10 of 1000 we get the value 3, which is the power ratio in logarithmic format, with units known as bels, named after the telecommunications pioneer Alexander Graham Bell. The more normally used decibel figure is just the number in bels multiplied by 10; this means that a power ratio of 3 bels is more normally referenced as 30 decibels (30 dB). Formally stated:
\[ R(\text{dB}) = 10 \log_{10}\left(\frac{P_1}{P_0}\right) \]
where:
\( R \) is the ratio given in decibels \( P_1 \) is the measured power and \( P_0 \) is the reference power
All power ratios tend to be quoted in dB by engineers, even those that are unity (0 dB). Here are some examples:
Power Ratio dB Equivalent
1 0 dB
2 3 dB (actually 3.01029996...)
10 10 dB
100 20 dB
1000 30 dB
10,000 40 dB

### 2.5.1 天线概念

#### 2.5.1.1 各向同性源

各向同性源是天线理论中的一个有用概念，尽管在实践中无法实现。它简单地指一个在所有方向上辐射相等的天线，或者等效地，在所有方向上对接收灵敏度相等。它可以被想象为位于一个假想球体中心的一个点；在球体表面上的所有点都将存在相等的辐射强度。等效地，在接收方面，各向同性天线对接收来自任何方向的辐射同样敏感。尽管这个概念简单且有用，但详细的电磁理论表明，这样的辐射器实际上无法存在。这意味着所有实际天线在某些方向上的辐射会比其他方向更好。实际上，雷达天线的本质正是如此，它在特定方向上辐射得特别好。然而，通过比较实际天线的最大辐射与各向同性源将获得的辐射，可以方便地获得其方向性能力的度量。当以比率给出时，通常以分贝表示。

#### 2.5.1.1 Isotropic Source

An isotropic source is a useful concept in antenna theory, even though it cannot actually be realized in practice. It is simply an antenna that radiates equally in all directions or, equivalently, has equal receive sensitivity from all directions. It can be imagined as a point at the centre of an imaginary sphere; at all points on the sphere’s surface equal radiation intensity will be present. Equivalently on receive, the isotropic antenna is equally sensitive to radiation coming from any direction. Despite the usefulness and simplicity of the concept, detailed electromagnetic theory shows that such a radiator cannot actually exist. It means that all real antennas will radiate better in some directions than in others. In fact, the essential characteristic of a radar antenna is that it does precisely that, radiating particularly well in one chosen direction. However, a convenient measure of its directional ability can be obtained by comparing the maximum radiation from a real antenna with that which would be obtained from an isotropic source. When given as a ratio this is normally expressed in dBs.

#### 2.5.1.2 功率密度

随着从发射机通过天线传输的功率向外传播，它分布在不断增加的面积上，因此任何目标反射的可用功率逐渐减少。功率密度是衡量在天线影响区域的任何位置上每单位面积的功率的量度，通常以每平方米瓦特（W/m²）为单位测量。

#### Power Density

As the power delivered from the transmitter via the antenna moves outwards in space it becomes distributed over a continuously increasing area, and thus the power available to be reflected by any intervening target decreases progressively. Power density is a measure of the power per unit area available at any location in the area of influence of an antenna and is typically measured in watts per square metre (W/m²).

#### 2.5.1.3 辐射强度

功率密度概念是雷达方程的一部分，雷达方程展示了发射机功率与目标检测范围之间的理论关系。雷达方程在第2.6.1节和第3章中进一步讨论。对于各向同性源，功率密度在所有方向上都是相同的，而对于实际天线，它在某些方向上的功率密度会比其他方向更高。

#### Radiation Intensity

The concept of power density forms part of the radar range equation, which shows the theoretical relationship that exists between transmitter power and target detection range. The radar equation is discussed further in Section 2.6.1 and in Chapter 3. For the case of an isotropic source the power density is the same in all directions, whereas for a real antenna it will be greater in some directions than in others.

#### 2.5.1.4 波束宽度和旁瓣

在考虑波束的形状时，我们特别关注其在水平和垂直平面上的角宽度。波束宽度，无论在哪个平面，都被定义为功率不小于最大值一半的角限制。这可以直接从辐射图中提取，如图2.7（c）所示。

#### Beamwidth and Sidelobes

In considering the shape of the beam we are particularly concerned with its angular width, normally in both the horizontal and vertical planes. The beamwidth, in either plane, is defined as the angular limits within which the power does not fall to less than half its maximum value. This is readily extracted from the radiation pattern, as illustrated by Figure 2.7(c).

#### 2.5.1.5 天线增益和方向性

天线增益是衡量天线将发射机提供的功率有效地辐射向目标的最大有效性的量度。天线增益通常用符号G表示，定义为天线产生的最大辐射强度与由相同功率水平供电的无损耗各向同性辐射器产生的辐射强度的比率。如果天线的增益为2（3 dB），这意味着在特定方向上将有效功率发送给目标的量是各向同性辐射器的两倍，从而在该特定方向上相当于将发射机的功率加倍。实际上，船舶雷达天线的增益约为30 dB（1000倍）。根据定义，各向同性辐射器的增益为0 dB（单位）。

#### Antenna Gain and Directivity

Antenna gain is a measure of the maximum effectiveness with which the antenna can radiate the power delivered to it by the transmitter towards a target. Antenna gain is typically given the symbol G, and is defined as the maximum radiation intensity produced by the antenna compared to that given by a lossless isotropic radiator supplied with the same level of power. If an antenna’s gain is 2 (3 dB), it means that twice the amount of effective power will be sent in the direction of a target than from an isotropic radiator, and so has the equivalent effect of doubling the power of the transmitter in that particular direction. In practice, the gain of a ship’s radar antenna will be around 30 dB (1000 times). By definition, the gain of an isotropic radiator is 0 dB (unity).

#### 2.5.1.6 接收特性

在上述内容中，天线主要被视为发射元件。对于船舶雷达，同一天线用于发射和接收。然而，先进的电磁理论表明，存在互易性原理；无论在传输方面所说的关于方向性的内容，同样适用于接收。这意味着，例如，如果在特定方向上的发射增益和方向性为3 dB，则在接收时也将具有相同的增益和方向性。如果在发射时某个旁瓣相对于主波束为-30 dB，则在接收时也将如此。

#### Receiving Characteristics

In the above, the antenna has been mainly treated as a transmitting element. For marine radar the same antenna is used for transmission and reception. However, advanced electromagnetic theory shows that there is a principle of reciprocity; whatever is said in relation to the directional nature of transmissions applies equally well to reception. This means, for instance, that the transmit and receive gains and directivities of an antenna are identical and if, say, a particular sidelobe, is -30 dB relative to the main beam on transmit, the same would be true on receive.

#### 2.5.1.7 极化

从天线向外传播的能量以电磁波的形式存在，具有相互垂直的电场和磁场，除了非常靠近天线的地方外，它们也与传播方向垂直。极化被定义为电场平面的方向。为了符合IMO性能标准（见第11.2.1节），所有使用X波段的船舶雷达必须能够以水平极化方式操作。这是为了确保它们能够正确激活雷达信标和搜救应答器（SARTs），它们也具有水平极化的天线。其他极化方式也是允许的，前提是清楚地表明正在使用的是什么，并且可以轻松访问水平极化。原则上，圆极化（见第3.7.4.6节）在某些情况下，如雨中，可能提供一些好处，但在商业船舶雷达中很少遇到。实际上，当前的X波段和S波段船舶雷达系统通常只提供水平极化。

#### Polarization

The energy travelling outward from the antenna is in the form of an electromagnetic wave having electric and magnetic fields which are at right angles to one another and, except very close to the antenna, are also at right angles to the direction of propagation. The fields are said to be orthogonal to the direction of propagation. The polarization is defined as the direction of the plane of the electric field. To comply with IMO Performance Standards (see Section 11.2.1), all marine radars using the X-band must be capable of being operated with horizontal polarization. This is to ensure that they properly activate radar beacons and Search and Rescue Transponders (SARTs), which also have horizontally polarized antennas. Other polarizations are allowed, provided there is a clear indication of what is being used and that horizontal polarization can be readily accessed. In principle, circular polarization (see Section 3.7.4.6) offers benefits in some situations, such as in rain, but is currently rarely encountered on commercial marine radars. In practice, current X- and S-band marine radar systems typically only offer horizontal polarization.

### 2.5.2 阵列天线

为了实现雷达测量方位所需的定向传输，雷达天线的水平波束宽度必须适当狭窄。这也有助于提高天线增益，通过将所有可用功率集中在一次方位方向上来实现。此外，这种定向传输是必要的，以便使系统能够分别显示位于同一距离且方位紧密间隔的目标。这种特性被称为方位分辨力，并在第2.8.5.3节中讨论。

### Array Antennas

To achieve the directional transmission necessary for the accurate measurement of bearings (see Section 1.3), the horizontal beamwidth of the radar antenna must be appropriately narrow. This also has the effect of producing high antenna gain by concentrating all the available power in one azimuthal direction at a time. Further, such directional transmission is necessary in order to give the system the ability to display separately targets which are at the same range and closely spaced in bearing. This property is known as bearing discrimination and is discussed in Section 2.8.5.3.

#### 2.5.2.1 多个辐射单元

阵列天线由多个辐射单元组成。图2.7（a）显示了单个各向同性辐射器的天线图。如第2.5.1.1节所述，这实际上是一个球体，但为了简化，图中仅展示了通过球体中心的一个平面。对于理论上的无损耗各向同性辐射器，\( D = G = 1 \)，因此球体的半径为单位长度。现在考虑一个从各向同性辐射器发出的电磁波，其频率与前面讨论的相同。该波以光速从点源向外呈球形传播。在某一特定时刻，波峰可能出现在图2.9（a）所示的位置，这类似于图2.7（a）中的平面图。可以通过比较它与在平静水面上扔石头后产生的水波来帮助可视化，水波的波峰在某一时刻（类似于图2.9（a）中的虚线同心圆）被“冻结”为照片。如果我们在图2.9（a）所示的直径线上绘制波的振幅，我们将得到一个类似于正弦波的波，但随着距离源点的增加，其振幅逐渐减小，如图2.9（b）所示。X波段雷达的波长约为3厘米。在每个加倍的径向距离上，波的振幅减小4倍，这仅仅是基于照亮的球体面积随波传播而增加的事实。这种效应通常被称为\( 1/R^2 \)效应。从点源理论反向推导，在源点处波的振幅理论上会无限大。这表明，尽管点源理论在概念上有用，但在极端情况下存在理论问题。

#### Multiple Radiating Elements

An array antenna is comprised of multiple radiating elements. Figure 2.7(a) shows the antenna pattern of a single isotropic radiator. As discussed in Section 2.5.1.1, this is actually a sphere but the figure, for simplicity, is just looking at a single plane passing through the sphere’s centre. For a theoretical and lossless isotropic radiator, \( D = G = 1 \), and therefore the radius of the sphere is unity. Now consider an electromagnetic wave emanating from the isotropic radiator at a certain frequency. This wave travels spherically outwards from the point source at the speed of light. At one particular instant the peaks in the wave could appear in the positions shown in Figure 2.9(a), which similarly to Figure 2.7(a) is depicted in a single plane. It can help to visualize this by comparing it to the water waves emanating on a calm surface after a stone has been thrown into the water. The wave-peaks at a particular time, frozen as in a photograph, correspond to the dashed concentric circles shown in Figure 2.9(a). If we now plot the amplitude of a wave along a single radius, such as the diametrical line depicted in Figure 2.9(a), we get a sine-like wave but one that is diminishing in amplitude with distance from the isotropic source, as depicted in Figure 2.9(b). The wavelength is that of the radiated signal, which for an X-band radar is about 3 cm. At every doubling of the radial distance the amplitude of the wave diminishes by a factor of 4, simply based on the increase in area of the sphere that is being illuminated as the complete wave travels out from the source. This is often referred to as the \( 1/R^2 \) (one over R-squared) effect. Taking this philosophy in reverse, towards the source, each time halving the distance and therefore increasing the amplitude by four, mathematically ends up with an infinite amplitude of the wave at the point source. This shows that point source theory, although a useful concept, has theoretical problems in extreme circumstances.

#### 2.5.2.2 旁瓣

所有方向性天线的旁瓣都是不可避免的不幸现实。它们是自然产生的，与光中的衍射效应有关，水波和声波中也有类似的效应。衍射效应发生在辐射或反射表面上出现尖锐不连续性时。在前面讨论的阵列天线上，我们有两个元素都在辐射，并且突然天线结束，这就产生了衍射或旁瓣效应。这些效应可以通过仔细控制每个元素的辐射功率来最小化，一般来说，离中心越远的元素，其辐射功率应该越小。这在一定程度上“软化”了边缘效应，降低了衍射的成分。多年来，人们已经开发出了许多复杂的算法，试图通过确定每个元素的“最佳”辐射功率来优化天线阵列的性能。

#### Sidelobes

Sidelobes are an unfortunate reality of all directional antennas. They are a consequence of nature and are directly related to diffraction effects in light — and there are similar effects in sound and water waves. Diffraction occurs whenever there is a sharp discontinuity in a radiating or reflecting surface. On the antenna arrays so far described we have a number of elements all radiating and suddenly the antenna ends, which creates diffraction or sidelobe type effects. These effects can be minimized by carefully controlling the power radiated by each element such that, in general, the further an element is away from the centre the less power it should radiate. In a sense this ‘softens’ the edge effect, lowering the component of diffraction. There have been many complicated algorithms developed over the years in attempts to optimize the performance of antenna arrays by determining the ‘optimum’ radiated power for each element.
