# RADAR AND ARPA MANUAL

## 第一章：基本雷达原理

### 1.1 引言

雷达是几乎所有船舶（除了最小的船只）上安装的重要导航设备。它显示的关键信息很容易被受过训练的用户理解，并且已经成为其他导航数据展示的焦点，因此在船舶驾驶台上占据了应得的重要位置。它将在可预见的未来继续保持其在电子导航中的核心角色，只有电子海图这一相对较新的发展在显示重要性上与之相当。它们将共同为海洋导航提供主要的显示基础，进入一个日益集成的导航世界。

Radar forms an important component of the navigational equipment fitted on virtually all vessels apart from the very smallest. Its display of critical information is easily assimilated by a trained user and has acted as a focus for the presentation of other navigational data, giving it a deserved prominence on the bridge of a vessel. It is poised to retain its central electronic navigational role into the foreseeable future, equalled only in display significance by the rather more recent development, the electronic chart. Together, they will provide the basis of the major displays for marine navigation into an increasingly integrated navigational world.

雷达一词是“无线电探测与测距”的缩写。科学家亨利希·赫兹（频率的基本单位以他的名字命名）于1886年证明，无线电波可以从金属物体上反射。1904年，德国工程师克里斯蒂安·赫尔佐格在多个国家获得了一种能够探测船只的无线电波装置的专利，但由于其非常有限的作用距离，几乎没有引起热情。马可尼在1922年的一次演讲中，提到了赫兹的工作，并提出了今天我们所知的船用雷达的基本原理。尽管雷达在20世纪20年代中期被用来测量电离层的高度，但直到1935年，雷达脉冲才成功地被用来探测和测量飞机的距离。20世纪30年代，英国、德国、法国和美国都同时但独立地发展了雷达技术。雷达首次在军舰上使用是在1937年，到1939年性能有了相当大的提高。到1944年，海军雷达开始出现在商船上，从第二次世界大战结束前后开始，民用船用雷达开始发展。它逐渐被改进以满足和平时期导航和避免碰撞的需要。

The word RADAR is an acronym derived from the words Radio Detection and Ranging. The scientist Heinrich Hertz, after whom the basic unit of frequency is named, demonstrated in 1886 that radio waves could be reflected from metallic objects. In 1904 a German engineer, Christian Hu¨lsmeyer, obtained a patent in several countries for a radio wave device capable of detecting ships, but it aroused little enthusiasm because of its very limited range. Marconi, delivering a lecture in 1922, drew attention to the work of Hertz and proposed in principle what we know today as marine radar. Although radar was used to determine the height of the ionosphere in the mid-1920s, it was not until 1935 that radar pulses were successfully used to detect and measure the range of an aircraft. In the 1930s there was much simultaneous but independent development of radar techniques in Britain, Germany, France and America. Radar first went to sea in a warship in 1937 and by 1939 considerable improvement in performance had been achieved. By 1944 naval radar had made an appearance on merchant ships and from about the end of the Second World War the growth of civil marine radar began. Progressively it was refined to meet the needs of peacetime navigation and collision avoidance.

如今的民用船用雷达在尺寸、外观和多功能性方面与20世纪40年代的祖先大不相同，但它们提供的基本数据，即目标的距离和方位，是通过利用很久以前揭示的相同基本原理来确定的。理解这些原理是任何船用雷达学习的起点，尽管最近使用一种称为相干雷达的技术的发展使情况变得有些复杂。这种技术将在第2.9节中详细解释，但在首先了解雷达背后的基本原理是有用的。

The civil marine radars in use today differ markedly from their ancestors of the 1940s in size, appearance and versatility, but the basic data that they offer, namely target range and bearing, are determined by exploiting the same fundamental principles unveiled so long ago. An understanding of such principles is an essential starting point in any study of marine radar, even though recent developments in the use of a technology known as coherent radar have somewhat complicated the picture. This latter technology is explained in some detail in Section 2.9, but first it is useful to gain an understanding of the basic principles behind radar.

### 1.2 距离和方位测量原理

#### 1.2.1 回波原理

通过发射无线电能量作为脉冲或其他形式，并随后接收被目标反射回来的一部分能量（回波），来探测一个物体（通常称为目标）。这种现象类似于声波从地形和大型建筑物反射。想象一下有人通过双手拢成杯状来聚焦声音能量，发出一声短促而响亮的喊叫。声波向外传播，其中一些可能会击中，例如，悬崖。被拦截的部分能量将被悬崖反射。如果反射的能量以足够的强度返回到喊叫者的方向，它将被听到为一个可听见的回声，类似于原来的喊叫。在考虑这个类比时，以下几点有助于初步理解脉冲雷达探测：

An object (normally referred to as a target) is detected by the transmission of radio energy as a pulse or otherwise, and the subsequent reception of a fraction of such energy (the echo) which is reflected by the target in the direction of the transmitter. The phenomenon is analogous to the reflection of sound waves from land formations and large buildings. Imagine somebody giving a short sharp shout through cupped hands to focus the sound energy. The sound wave travels outwards and some of it may strike, for example, a cliff. Some of the energy which is intercepted will be reflected by the cliff. If the reflected energy returns in the direction of the caller, and is of sufficient strength, it will be heard as an audible echo, resembling the original shout. In considering this analogy, the following points can usefully assist in gaining a preliminary understanding of pulse radar detection:

- 回波永远不会像原来的喊叫那样响亮。
- 检测到回波的可能性取决于喊叫的响度和持续时间。
- 如果不想让近距离目标的回波被原始喊叫淹没，就需要短促的喊叫。
- 需要在喊叫之间留出足够长的间隔，以便让远处目标的回波返回。
- 当喊叫时用手拢在嘴边，听回波时用手捂住耳朵，可能会更有效。

A. The echo is never as loud as the original shout.
B. The chance of detecting an echo depends on the loudness and duration of the shout.
C. Short shouts are required if echoes from close targets are not to be drowned by the original shout.
D. A sufficiently long interval between shouts is required to allow time for echoes from distant targets to return.
E. It can be more effective to cup one’s hands over the mouth when shouting and put a hand to the ear when listening for the echo.

现在考虑雷达，其基本组成部分如图1.1所示。天线用于发射信号和接收其反射。在发射时，天线的作用很像拢成杯状的手，将能量聚焦在特定方向上。在接收时，它更像是捂住耳朵的手，从那个方向收集更多的接收能量。发射机的作用类似于喊叫者的嘴巴和声带，雷达接收机则起到耳朵的作用。处理器澄清接收到的信号并判断其距离，这有点类似于训练有素的人类大脑识别和评估接收到的声波。最后，雷达将信息显示给操作员，这有点类似于人类写下产生回声的物体的估计距离和方向。

Now considering radar, its basic building blocks are illustrated diagrammatically in Figure 1.1. The antenna is used both to transmit the signal and to receive its reflection. On transmit, the antenna is acting very much like the cupped hand, focussing the energy in a particular direction. On receive it is acting more like a hand to the ear, collecting more received energy from that direction. The transmitter has a similar role to that of the mouth and vocal chords of the shouter, and the radar receiver acts as the ear. The processor clarifies the received signal and judges its distance, perhaps somewhat similar to what a trained human brain can do in identifying and assessing a received sound wave. Finally the radar displays the information to a human operator, perhaps analogous to a human writing down the estimated range and direction of the object producing the echo.

船用雷达的天线在水平面上稳定旋转，大约每2秒旋转一周。这意味着雷达脉冲连续覆盖所有方向，每次天线旋转都会覆盖360°。无线电波的速度非常高，大约是声波速度的百万倍，即299,792,458米/秒。在我们自己的思维中，这最容易被考虑为几乎精确的300,000,000（三亿）米/秒，或者作为300米/微秒（µs），其中1 µs代表百万分之一秒（即10^-6秒）。使用这个值，我们可以得出一个简单的通用关系，即目标距离与发射脉冲和接收回波之间经过的时间之间的关系（见图1.2）。

The antenna of a marine radar rotates steadily in the horizontal plane giving a complete rotation about every 2 s. This means that radar pulses consecutively cover all directions over 360° at each rotation of the antenna. The speed of radio waves is so high, about one million times greater than sound waves, that the antenna receives all the reflected energy from a particular transmitted pulse before it has appreciably rotated. The velocity of radio waves is dependent on the nature of the medium through which they travel. In fact, within the Earth’s atmosphere it is hardly different to that within a space-type vacuum, that is 299,792,458 m/s. In our own minds this is easiest to be considered to be almost precisely 300,000,000 (three hundred million) metres per second, or as 300 metres per microsecond (µs), where 1 µs represents one millionth part of a second (i.e. 10^-6 s). Using this value it is possible to produce a simple general relationship between target range and the elapsed time which separates the transmission of the pulse and the reception of an echo in any particular case (Figure 1.2).

设D为脉冲往返目标的距离（米），
R为目标的距离（米），
T为经过的时间（微秒），
S为无线电波的速度（米/微秒），
则D=S×T，R=(S×T)/2，
因此R=(300×T)/2，
即R=150T。

Let D = the distance travelled by the pulse to and from the target (metres)
R = the range of the target (m)
T = the elapsed time (µs)
S = the speed of radio waves (m/µs)
Then D = S × T and R = (S × T)/2
hence R = (300 × T)/2 thus R = 150T

这个关系的应用可以通过以下例子来说明。

The application of this relationship can be illustrated by the following example.

**例1.1** 计算脉冲往返雷达目标所需的时间，该目标的距离为（a）40米（b）12海里（NM）。

**EXAMPLE 1.1** Calculate the elapsed time for a pulse to travel to and return from a radar target whose range is (a) 40 m (b) 12 nautical miles (NM).

a. R=150T
因此40=150T，所以T=40/150≈0.27µs
这个值特别有趣，因为40米代表了必须实现的最小检测距离，以确保符合国际海事组织雷达设备性能标准（见第11.2.1节）。虽然这个话题将在第3.2.4节中全面探讨，但在此阶段需要注意传输和接收必须在极短的时间间隔内完成。

a. R = 150T
thus 40 = 150T hence T = 40/150 ≈ 0.27µs
This value is of particular interest because 40 m represents the minimum detection range that must be achieved to ensure compliance with IMO Performance Standards for Radar Equipment (see Section 11.2.1). While this topic will be fully explored in Section 3.2.4, it is useful at this stage to note the extremely short time interval within which transmission and reception must be accomplished.

b. R=150T
由于1海里=1852米，
12×1852=150T，
因此T=12×1852/150=148.16µs
这个结果值得注意，因为它代表了常用船用雷达量程刻度的经过时间。本节中建立的经过时间约为百万分之一秒，因此需要特殊的仪器才能准确测量它们。在雷达的早期，这是尖端技术，但随着石英计时技术和快速微电子技术的发展，这已不再是主要问题。这种技术成本低、精度高且无处不在，大多数人拥有多个精确计时的例子，如手表、手机、电脑、电视和汽车。

b. R = 150T
Since 1 NM = 1852 m,
12 × 1852 = 150T
hence T = 12 × 1852/150 = 148.16 µs
This result is noteworthy as it represents the elapsed time for a commonly used marine radar range scale. The elapsed times established in this section are of the order of millionths of a second and therefore need special instrumentation to be able to measure them accurately. In the early days of radar this was cutting-edge technology, but with the advent of quartz timing technology, and fast microelectronics it is no longer a major issue. Such technology is low cost, accurate and ubiquitous, with most humans owning multiple examples of precision timing in their watches, mobile phones, computers, TVs and cars.

#### 1.2.2 方向性发射和接收

在船用雷达系统中，使用单一天线进行发射和接收在成本和空间上是有效的。它被设计成（见第2.5节）将发射的能量聚焦成一个在水平面上非常窄的波束。能量被限制在其中的角度称为水平波束宽度（见图1.3）。如果要符合管理船用雷达的国际法规，其值不得超过2.0°。大型船舶的民用船用雷达的水平波束宽度可窄至0.75°。天线的相应接收特性是，它将检测从水平波束宽度的角度限制内返回的能量，即从被相应雷达发射照亮的目标返回的能量。它对从其他方向拾取不需要的噪声的不敏感性有效地提高了其检测反射回波的能力。

In a marine radar system it is cost and space effective to use a single antenna for both transmission and reception. It is designed in such a way (see Section 2.5) as to focus the transmitted energy into a beam which is very narrow in the horizontal plane. The angle within which the energy is constrained is called the horizontal beamwidth (Figure 1.3). It must have a value of not more than 2.0° if it is to comply with the international regulations which govern marine radar. Civil marine radars for large ships are available with horizontal beamwidths as narrow as 0.75°. The equivalent reception property of the antenna is such that it will detect energy which has returned from within the angular limits of the horizontal beamwidth; that is from those targets that have been illuminated by the corresponding radar transmission. Its insensitivity to picking up unwanted noise from other directions effectively increases its ability to detect the reflected echoes.

船用雷达的一个重要特点是，它应该提供完整的360°方位角覆盖。为了实现这一点，天线必须旋转，船舶的任何部分都不应遮挡雷达波束，如桅杆和其他上层建筑。典型的天线旋转速度为24°-45转/分钟，根据系统不同，每次完整旋转大约每1.3-2.5秒发生一次。

An essential feature of a marine radar is that it should provide continuous coverage over the full 360° of azimuth angle. To achieve this the antenna has to rotate and no part of the vessel should obscure the radar beam, such as masts and other superstructure. Typical antenna rotation rates are 24°-45 revolutions per minute, resulting in a complete rotation occurring every 1.3-2.5 s, depending on the system.

发射脉冲之间的间隔至少要允许发射信号到达最远的目标并返回，尽管还有其他考虑因素（见第2.3.3.2节）。这个间隔通常被认为是脉冲重复频率（PRF），即1秒内发射的脉冲数。例如，以1500脉冲/秒（1500 Hz）为例；这相当于每667微秒发射一个脉冲。以扫描器旋转一周的时间为2秒为例，可以看出在一次旋转中发射了3000个脉冲，扫描器在脉冲之间旋转了0.12°。因此，图像由大约3000条反射回波的径向线组成。

The interval between successive transmitted pulses has to at least allow the transmitted signal to travel out to the furthest target of interest and back again, although there are other considerations, which are discussed in Section 2.3.3.2. This interval is normally considered as a pulse repetition frequency (PRF), that is the number of pulses transmitted in 1 s. If we take, as an example, a value of 1500 pulses per second (1500 Hz); this is equivalent to one pulse every 667 µs. Taking a representative time for one revolution of the scanner to be 2 s, it is seen that 3000 pulses are transmitted during one revolution and that the scanner rotates through 0.12° between pulses. The picture is thus ‘built up’ of approximately 3000 radial lines of reflected echoes.

#### 1.2.3 雷达信息显示

##### 1.2.3.1 A扫描显示

A扫描是一个有助于理解反射雷达信号的构成以及如何显示它的有用概念。这种基本类型的显示有时今天被工程师和技术人员用于特殊目的，但不是作为船用雷达作为导航辅助工具时的显示。A扫描显示将返回的雷达信号绘制为图形（见图1.4）。水平轴表示时间，垂直轴表示接收信号的强度（幅度）。每次雷达脉冲发射时，图形开始绘制。这个事件由一个垂直尖峰表示，称为发射标记。返回的回波也会在图形中产生尖峰。这些尖峰的幅度与回波的强度有关。图中还显示了相应的“现实生活”情况。

1.2.4 Display of Radar Information
1.2.4.1 The A-Scan Display
The A-scan is a useful concept to help understand the makeup of a reflected radar signal and how it can be displayed. This basic type of display is sometimes used today by engineers and technicians for special purposes, but is not a display that is available on a marine radar when used as a navigational aid. An A-scan display plots the returned radar signal as a graph, see Figure 1.4. The horizontal axis represents time and the vertical axis represents the strength (amplitude) of the received signal. The plot, sometimes called a trace, commences at the instant each radar pulse is transmitted. This event is indicated by a vertical spike, known as the transmission mark. Returning echoes also generate spikes in the plot. The amplitude of these spikes are related to the strength of the echo. The equivalent ‘real-life’ situation is also shown in the diagram.

水平距离发射标记和回波尖峰之间的距离是目标距离的量度。根据例1.1（b）的结果，如果图形的全部范围代表12海里（选定的量程刻度），这相当于大约148微秒的时间刻度。

The horizontal distance between the transmission mark and an echo spike is a measure of the range of the target. Using the result from Example 1.1(b), it is evident that if the full extent of the plot is to represent a range of 12 NM (the selected range scale) this is equivalent to a timescale of approximately 148 µs.

##### 1.2.4.2 平面位置指示器显示

A扫描显示了雷达天线特定方位角上的反射雷达能量的幅度与距离的关系。理论上，这个角度可以用度数在显示屏上显示为一个信息框，允许用户确定雷达天线旋转时视野内任何目标的距离和方位。实际上，这不会是一个非常有效的显示。由于目标每次天线旋转时只显示一次，人脑很难评估任何真实情况。

1.2.4.2 The Plan Position Indicator Display
The A-scan shows the amplitude of the reflected radar energy as a function of range at a particular azimuth bearing angle of the radar antenna. In principle, this angle could be shown in degrees as an information box on the display, allowing the user to determine the range and azimuth of any target in view, as the antenna rotated. In practice, this would not be a very effective display. With targets only being visible for a short period, once per revolution of the antenna, the human brain would have difficulty in assessing any real situation.

理想的情况是需要一个平面视图，使雷达图像创建一个周围区域的“地图”，让用户能够轻松理解当前情况。这在现代世界尤其相关，因为它还允许雷达显示屏显示常规海图特征作为雷达图像的“底层”，将它们置于地理上下文中。

What is perhaps ideally required is a plan view, such that the radar image creates a ‘map’ of the surrounding area, allowing easy assimilation of the current situation by the user. This is particularly relevant in our modern world as it also allows the radar display to show conventionally charted features as an ‘underlay’ to the radar image, putting them into geographical context.

自20世纪40年代以来，平面位置指示器（PPI）一直被用于这种类型的雷达显示。如今，显示屏上的精确图像由数字处理技术产生。这有效地计算了如图1.4所示的A扫描中显示的接收信号的幅度，在距离的小增量处。使用的增量称为距离单元增量。该过程产生了一个针对特定方位角（方位）的信号强度与距离的计算机化列表。当雷达天线旋转过一个称为方位单元增量的小角度时，发射下一个雷达脉冲，为每个距离单元增量创建另一个信号强度列表。这个持续的过程产生了一个数字存储的信号强度与距离和方位角的表格。这个过程如图1.5所示。

The term Plan Position Indicator (PPI) has been used for this type of radar display, since the 1940s. Nowadays the precise image on the display is produced by digital processing technology. This effectively computes the amplitude of the received signal, as shown in Figure 1.4 for the A-scan, at small increments of range. The increment used is known as the range cell increment. The process produces a computerized list of signal strengths against range for the particular azimuth angle (bearing) of the antenna. The next radar pulse is transmitted when the antenna has turned through a small angle, known as the azimuth cell increment, creating another list of signal strengths for each range cell increment. This ongoing process results in a digitally stored table of signal strengths against range and azimuth angle. This process is illustrated in Figure 1.5.

主图是一个平面视图，船舶位置在中心，其航向用垂直箭头表示。它看起来很像雷达显示屏，但在这个案例中，它仅表示实际地理情况。每个方位单元增量在方位方向上被描绘为一条径向线，每个距离单元增量在径向方向上被描绘为一个圆，以本船位置为中心。实际的增量大小被选择，以便一个点目标会在多个相邻的距离和方位采样点中被检测到，考虑到天线的波束宽度和发射脉冲的长度。这意味着，在实践中，方位单元比图1.5中描绘的要多得多，通常有1024个或更多覆盖完整的360°。此外，距离单元的长度通常以数十米为单位测量，但取决于选定的脉冲长度（见第2.3.3.1节）。反射信号强度测量在这些线和圆的交叉点中心进行。雷达将它们存储为信号强度（幅度）的值表，也在图1.5中描绘。示例表使用了实际值，包括信号强度的描绘。在这个例子中，信号强度基于一个介于0到1023之间的缩放值。

The main diagram is a plan view of an area with the ship’s position at the centre, showing its heading as a vertical arrow. It looks rather similar to a radar display, but in this case it is solely representing the actual geographical situation. Each cell increment in the azimuthal direction is depicted as a radial line and each increment in the radial direction as a circle, centred at the own ship’s position. The actual increment size is chosen so that a point target would be detected in a number of adjacent range and azimuth sampling points, taking into account the beamwidth of the antenna and the length of the transmitted pulse. This means, in practice, that there are many more azimuth cells than are depicted in Figure 1.5, typically 1,024 or more covering the full 360°. Also, the length of a range cell is typically measured in tens of metres but depends on the chosen pulse length, see Section 2.3.3.1. The reflected signal strength measurement is centred at the crossing points of these lines and circles. The radar stores them as a table of values of signal strengths (amplitudes), which is also depicted in Figure 1.5. The illustrated table uses realistic values, including the depiction of signal strength. Signal strength, in this example, is based on a scaled value of between 0 and 1,023.

为了显示图像，雷达的数字处理器必须将测量的距离和方位转换为相对于本船的“x”和“y”坐标，使用图1.6中所示的简单数学概念。在将x和y位置缩放到可以在雷达显示屏上表示之后，接收到的回波在它们的等效位置上以适当颜色和强度的点表示，这取决于接收到的信号强度。每次天线旋转时，存储的数据以及因此产生的雷达图像都会更新。这个过程产生了常规的雷达目标显示图像，如图1.7所示。

To display the image the radar’s digital processor has to convert the ranges and azimuths of the measurements to ‘x’ and ‘y’ coordinates, relative to the own ship, using the simple mathematical concept illustrated in Figure 1.6. After scaling the x and y positions to allow them to be represented on the radar display, the received echoes are indicated at their equivalent position by spots of appropriate colour and intensity, depending on the received signal strength. At every revolution of the antenna the stored data, and hence the resultant radar image, is updated. This process produces the conventional image of displayed radar targets, such as that illustrated in Figure 1.7.

如今，雷达显示屏是一个常规的“平板”电子屏幕，类似于现代电视和电脑显示屏所使用的。平板显示屏背后的技术在第2.8.3节中讨论。雷达图像通常在一个圆形区域内显示，其半径相当于选定的最大显示距离。这不再是在管理船用雷达的国际法规下的强制要求，但仍然是一个广泛的做法，反映了原始雷达阴极射线管（CRT）显示屏是圆形而非矩形的事实。这些曾经是雷达装置的典型代表，见图1.8。总是有一个方位标度显示在操作显示区域的周边，无论是圆形还是其他形状。在旧雷达上，这个标度曾经刻在围绕CRT的边缘上。如今，这个标度是电子产生的，并且是显示图像的一部分。方位标度以度数标记。

Today, the radar display is a conventional ‘flat-panel’ electronic screen, similar to that used on modern TVs and computer displays. The technology lying behind flat-panel displays is discussed in Section 2.8.3. The radar image is conventionally shown within a circular domain, with a radius equivalent to the selected maximum display range. This is no longer compulsory under the international regulations that govern marine radar but remains a widespread practice, reflecting the fact that original radar cathode ray tube (CRT) displays were circular rather than rectangular. These used to epitomize a radar installation, see Figure 1.8. There is always a bearing scale shown around the periphery of the operational display area, whether circular or otherwise. On older radars this used to be engraved on the rim surrounding the CRT. Nowadays, the scale is produced electronically and forms part of the displayed image. The bearing scale is labelled in degrees.

此外，还显示了以原点（本船位置）为中心的范围圈。这些被称为范围圈，操作员可以将它们设置为方便的值，见图1.9。这个图显示了雷达在一个12海里的量程刻度上，范围圈设置为2海里的间隔。如果不需要，这些圈可以被关闭。此外，还有工具可以启用用户准确确定显示屏上任何目标的距离和方位。这些在第6.9节中全面讨论，例如，包括一个可变范围标记（VRM），如图1.9中所示。

Also displayed are range circles centred on the origin (position of the own ship). These are known as range rings and can be set to convenient values by the operator, see Figure 1.9. This shows the radar on a 12 NM scale, with range rings set at 2 NM spacing. The rings can be switched off, if not required. In addition there are tools that enable a user to accurately determine the range and bearing of any target on the display. These are fully discussed in Section 6.9 and, for instance, include a variable range marker (VRM), as also illustrated in Figure 1.9.

雷达的通常圆形操作显示区域是快速评估船上任何特定显示屏是否设置为雷达或电子海图的一个有用方式。后者的图像通常被显示为矩形，即使它可能在显示的图像中包含了雷达数据。第10.2节解释了在雷达显示屏（PPI）和电子海图上查看和使用雷达衍生数据的重要差异。一般来说，简单的规则是，关于避碰的基本决策应该始终在雷达显示屏上做出，但主要航线监控活动应该使用海图显示屏。

The normally circular operational display area of a radar is a useful means of assessing quickly whether any particular display on a ship’s bridge is set up as a radar or as an electronic chart. The latter image is generally displayed as a rectangle, even though it may have radar data included in the displayed image. Section 10.2 explains the significant differences between viewing and using radar-derived data on a radar display (PPI) and on an electronic chart. In general, the simple rule is that fundamental decisions concerning collision avoidance should always be made on the radar display, but the main route monitoring activity should be using the chart display.

术语PPI可能会随着时间的推移而逐渐停止使用，特别是随着多功能显示屏的使用增加，它可以被设置为在任何特定时间作为雷达、电子海图或其他导航显示屏。然而，本书将使用PPI和雷达显示屏这两个术语互换，这是在写作时的常见用法。未来，主要雷达显示屏越来越可能被称为避碰显示屏，电子海图显示屏（当不用于航线规划时）被称为航线监控显示屏。当雷达数据用于其他功能时，如定位或协助航线监控，这些任务将在适当的显示模式上执行，显示相关的雷达信息以及其他可用数据。

The term PPI will perhaps cease to be used over time, especially with the increased use of multifunction displays, which can be set to be used at any one time as a radar, electronic chart or other navigational display. However, this book will use the terms PPI and radar display interchangeably, as is in common usage at the time of writing. Into the future the likely trend is that the main radar display will increasingly become known as the collision avoidance display and the electronic chart display (when not being used for route planning) as the route monitoring display. When radar data is being used for other functions, such as position fixing or assistance with route monitoring, these task will be performed on the appropriate display modes, showing relevant radar information as well as other available data.

##### 1.2.4.3 目标轨迹

在雷达显示屏上，目标的过去轨迹保持可见通常是很有用的，至少在几分钟内。这可以更清楚地可视化关键目标的运动。目标被认为在显示屏上留下轨迹。最初，这个功能是通过使用具有非常高图像持久性的阴极射线管（CRT）实现的。显示屏上的任何即时图像只会因为CRT显示屏上特别选择的磷光体而缓慢褪去。因此，目标会在显示屏上创建一条线，显示它们过去的位置。在目标的最近位置附近，轨迹会很亮，并且会逐渐褪去，进一步沿着它的长度变得不可见，见图1.10。如今，这种效果是通过数字处理显示的雷达图像人为创造的。这允许在轨迹显示中更大的灵活性，例如它们的消逝时间长度以及是否显示它们。它还可以更清楚地区分目标和轨迹，例如，通过使用不同的颜色。

1.2.4.3 Target Trails
It is very often useful on a radar display for the past track of targets to remain visible, at least for a few minutes. This can give a much clearer visualization of the movement of critical targets. Targets are said to leave a trail on the display. Originally this feature was achieved by using CRTs with a very high image persistence. Any instantaneous image on the display only slowly faded because of the specially chosen phosphors used on the display surface of the CRT. Consequently, targets would create a line on the display, showing their past positions. Close to the most recent position of the target the trail would be bright and would gradually fade to being invisible further along its length, see Figure 1.10. Nowadays this effect is artificially created by digital processing of the displayed radar image. This allows greater flexibility in the display of trails, such as their time length to extinction and whether or not they are displayed. It also more clearly distinguishes between targets and trials, for instance, by the use of different colours.

### 1.3 方位测量原理

#### 1.3.1 航向标记

一般来说，方位是选定参考方向与感兴趣物体方向之间的角度。在PPI显示屏上，基本的参考是观测船舶航向的瞬时方向。

1.3 PRINCIPLES OF BEARING MEASUREMENT
1.3.1 The Heading Marker
In general, a bearing is the angle between the direction of a chosen reference and that of an object of interest. On a PPI display the fundamental reference is the instantaneous direction of the observing vessel’s heading.

当雷达天线波束的轴线穿过船舶的首尾线向前方向时，雷达天线旋转机构内的一个传感器被激活，相关的电子设备向雷达接收机发送一个时间脉冲。这个脉冲用于将显示电子设备与天线旋转同步，特别是用作航向标记或航向指示器的参考。此外，随着天线的旋转，还会在规则的角度增量处产生方位脉冲，以考虑其可能由于风、振动和船舶运动效应而产生的不均匀旋转。因此，所有目标不仅以彼此之间的正确角度关系显示，而且也以与本船航向的正确角度关系显示（见图1.11）。

As the axis of the beam of the radar antenna crosses the ship’s fore-and-aft line in the forward direction, a sensor within the turning mechanism of the radar antenna is activated and the associated electronics sends a timing pulse to the radar receiver. This pulse is used to synchronize the display electronics to the antenna rotation and, in particular, is used as the reference for the heading marker or heading indicator. In addition, azimuth pulses are generated at regular angular increments as the antenna rotates to take into account its potentially uneven rotation due to wind, vibration and vessel motion effects. Thus all targets are displayed, not only in the correct angular relationship to one another, but also in the correct angular relationship to the own ship’s heading (see Figure 1.11).

天线方向与观测船舶航向之间的角度有时被称为天线角。国际海事组织性能标准（见第11.2.1节）要求航向标记能够对准到0.1°以内。检查这种准确性的程序在第6.6.8节中讨论。存在一个危险，如果目标位于航向标记的方向上，它可能会被遮挡。该规范认识到这种危险，要求有临时关闭标记的设置。然而，由于它是雷达显示屏上的一个重要特征，它不能被永久关闭。特别是，航向标记的出现确认了显示屏的方向（见第1.4节）。

The angle between the observed vessel’s heading and the direction of the horizontal beam is sometimes called the antenna angle. IMO Performance Standards (see Section 11.2.1) require that the heading marker is able to be aligned to within 0.1°. The procedure for checking this accuracy is discussed in Section 6.6.8. There is a danger that a target may be masked if it lies in the direction of the heading marker. The specification recognizes this danger by requiring that there is a provision for temporarily switching the marker off. However, it is such an important feature on the radar display that it cannot be permanently switched off. In particular, the appearance of the heading marker confirms the orientation of the display (see Section 1.4).

现代雷达还可能能够显示一个尾线，该线在航向的相反方位上绘制，当船舶倒车时非常有用。这条线可以根据需要打开或关闭。当选择了尾线时，航向线仍然可见。

A modern radar may also be able to display a stern line, drawn on a reciprocal bearing to the heading, which can be very useful when manoeuvring astern. This line can be switched on or off, as required. The heading line remains visible when the stern line is selected.

#### 1.3.2 方位测量

国际海事组织性能标准（见第11.2.1节）要求提供一种快速获取显示屏上任何物体回波方位的方法。

1.3.2 Bearing Measurement
IMO Performance Standards (see Section 11.2.1) require that provision be made for quickly obtaining the bearing of any object whose echo appears on the display.

传统上，这是通过各种机械和机电设备实现的，这些设备使观测者能够测量航向标记与感兴趣目标之间的角度。在现代雷达上，电子方位线（EBLs）用于这种测量。特别是，这些被设计用来能够快速确定目标相对于本船航向的方位。在雷达的基本设置中，EBL从显示屏的中心（原点）开始，那里是本船的位置，延伸到操作显示区域的边缘，其角度位置可以从周边的方位标度上读取。使用适当的控制装置，操作员可以将EBL定位，使其通过感兴趣的目标。这在图1.12（a）中进行了说明。

In particular, these are designed to be able to quickly determine the bearing of a target with respect to the own ship’s heading. In the basic setting of the radar the EBL emanates from the centre (origin) of the display, there will the own ship’s position, to the edge of the operational display area, where its angular position can be read off from the bearing scale around the periphery of the area. Using the appropriate controls the operator can orientate the EBL such that it passes through the target of interest. This is illustrated in Figure 1.12(a).

除了方位标度设施外，显示屏上还会有一个方位的数值读出，这在当今通常比使用方位标度更常用。方位标度主要帮助用户保持适当的方位意识。各种方位测量设施及其正确使用程序在第6.6节中进行了讨论。

In addition to the bearing scale facility there will also be a numerical readout of the bearing on the display, which is more typically used nowadays rather than the bearing scale. The bearing scale mainly helps the user to keep an appropriate awareness of bearing. A variety of bearing measurement facilities and the correct procedure for their use are discussed in Section 6.6.

### 1.4 显示模式

现代雷达上有多种显示模式，用于确定雷达如何显示与外部世界的信息。这些包括三种不同的区域，即方位模式、运动模式和稳定模式。方位模式定义显示屏的“垂直”方向如何与外部世界水平（方位）方向对齐；运动模式定义本船如何相对于显示屏移动；稳定模式定义绝对运动如何参照——相对于地面还是相对于海洋。将显示屏视为一个传统的x和y坐标图形表示，y方向被认为是垂直的，x方向被认为是水平的。

1.4 DISPLAY MODES
There are a number of display modes on a modern radar for determining exactly how the radar shows information in relation to the outside world. These cover three different areas, which are referred to as orientation, motion and stabilization modes. The orientation mode defines how the ‘vertical’ direction of the display aligns with the outside world horizontal (azimuthal) direction; the motion mode defines how the own-vessel moves with respect to the display; and the stabilization mode defines how absolute movement is referenced — relative to the ground or relative to the sea. Taking the display to be a conventional graphical representation in x and y coordinates, it is the y-direction that is considered to be vertical and the x-direction as being horizontal.

#### 1.4.1 方位模式

一艘船的雷达显示屏提供了多种方位模式的选择。自然模式就是前面已经描述过的，船舶的航向方向，因此航向线，在显示屏上是垂直向上的。这被称为船首向上模式。

A vessel’s radar display provides a choice of orientation modes. The natural mode is the one already described where the heading direction of the ship, and therefore the heading line, is vertically upwards on the display. This is known as the head-up mode.

还有两种其他方位模式可供选择。一种是真北向上，显示屏的垂直方向代表真北；另一种是航向向上，显示屏的垂直方向代表船舶期望的航向。

There are two other orientation modes available. One is termed north-up, where the vertical direction represents true-north and the other is course-up, where the vertical direction of the display represents the desired course of the vessel.

##### 1.4.1.1 船首向上（未稳定）

这种方位模式下，航向标记在显示屏上始终是垂直的，如图1.13所示。随着船舶航向的变化，显示屏上的图像也随之变化——图像与船舶稳定，与驾驶台窗户的视角一致，但相对于真北是未稳定的。图中展示了船舶改变航向前后的对比情况。这种模式是早期船用雷达上唯一可用的方位模式，由于成本和技术限制。然而，这种模式今天唯一显著的优势是它不需要向雷达输入工作中的罗经或罗盘信号，与现代雷达上的其他方位模式不同，即真北向上和航向向上。这两种模式在下面的章节中分别描述，它们稳定了雷达图像的方位。因此，船首向上模式通常被称为未稳定模式。如果遇到罗经问题，可能需要使用这种模式，因此需要充分理解。

1.4.1.1 Head-Up Orientation
This orientation, where the heading marker is always vertical on the display, is illustrated in Figure 1.13. As the vessel’s heading changes, so does the orientation of the displayed image — the image is vessel stabilized, aligning with the view from the bridge windows, but is unstabilized with respect to true-north. The figure shows the situation just before and after a course change. This was the only orientation mode available on very early marine radars because of cost and technological limitations. However, the only significant attraction of using the basic head-up mode today is that it does not need a working gyro or compass input to the radar, unlike the other orientation modes on a modern radar, north-up and course-up. These modes, described separately in the sections below, stabilize the orientation of the radar image. For this reason, head-up mode is often described as unstabilized. If compass problems are encountered its use may be essential and so needs to be fully understood.

船首向上未稳定模式在表面上很有吸引力，因为显示屏上的雷达图像直接对应于通过驾驶台窗户看到的场景。一个放置良好的显示屏，靠近驾驶台窗户且面向前方，无论用户是查看雷达屏幕还是通过驾驶台窗户向前看，船舶右侧的物体都会出现在显示屏的右侧，左侧的物体则出现在左侧。

The head-up unstabilized mode is superficially attractive because of the very fact that the displayed radar image corresponds directly with the scene as viewed through the wheelhouse window. A well placed display unit, close to the bridge windows and facing forwards, means that irrespective of whether the user is viewing the radar screen or looking forward through the wheelhouse window, objects on the starboard side of the ship will lie on the right of the display and those on the port side will lie on the left.

然而，在引入真北向上稳定后，这种方位模式就很少被使用了。原因有多个。首先，早期雷达在船首向上模式下的图像可能会非常不清楚。静态目标的“余辉”轨迹，尤其是像陆地这样的扩展目标，可能会掩盖关键的小型移动目标，当图像旋转时。在现代雷达设置为船首向上模式时，由于采用了数字处理技术，这已不再是严重问题。其次，船舶的小偏航运动会引起雷达图像方向的相应振荡，这可能会使精确的目标距离和方位测量变得困难。即使在现代雷达设置为未稳定的船首向上模式时，这通常仍然是一个问题。第三个问题是，未稳定的船首向上雷达的方位标度与真北无关，因此在确定目标的真方位时会增加额外的工作量。

However, this orientation mode became generally little used after north-up stabilization was introduced on marine radars. This was for a number of reasons. Firstly, the head-up image of earlier radars could become very unclear when in head-up mode. The ‘afterglow’ trail of static targets, especially of extended targets such as land masses, could obliterate critical small moving targets when the image rotated. This is not such a serious problem on modern radars set to head-up mode because of the digital processing technology now employed. Secondly, small yawing movements of the vessel create corresponding oscillations in the orientation of the radar image, which can make precise target range and bearing measurements difficult. This generally remains an issue, even on a modern radar set to unstabilized head-up mode. The third issue is that the bearing scale on an unstabilized head-up radar is not true-north related, and therefore creates extra work in establishing the true bearing of targets.

真北向上模式变得如此频繁使用的一个特别原因是，使用与纸质海图相匹配的方位非常吸引人，因为它显著有助于情境意识。事实上，随着电子海图的出现，它们也可以在船首向上模式下显示，这种模式的使用可能更具吸引力。在电子海图时代之前，船首向上模式的使用主要限于特殊情境，如在河流、河口、狭窄水道和船闸中航行，或者在没有罗经接口时。虽然航向向上模式（在第1.4.1.3节中描述）是一个很好的替代方案，但许多雷达有一个先进的船首向上模式，通常被称为稳定船首向上。它使用陀螺仪/罗盘输入来定位方位标度，使航向方向相对于真北进行参考，并且显示屏上的任何其他方位指示也是如此。智能处理还可以防止船舶的小偏航运动产生振荡图像，通常允许轻松进行目标测量，并且还提高了显示屏的清晰度。

A particular reason for north-up mode becoming so frequently used was the general attractiveness of using an orientation which matches that of the paper chart, since it considerably benefits situation awareness. In fact, with the advent of electronic charts, which can also be displayed in head-up mode, the use of a head-up orientation mode potentially becomes more attractive. Before the era of electronic charts the use of head-up mode was mainly confined to special situations, such as when negotiating rivers, estuaries, narrow channels and locks, or when no compass interface was available. While course-up mode, described in Section 1.4.1.3, is a good alternative, many radars have an advanced head-up mode that is generally called stabilized head-up. This uses the gyro/compass input to orientate the bearing scale such that the heading direction is referenced relative to true-north, together with any other indications of bearing on the radar display. Smart processing can also prevent small yawing motions of the vessel creating an oscillating image, generally allowing targets, measurements to be easily performed, and also improving the clarity of the display.

应该记住，在稳定和未稳定的船首向上模式中，一个粗心或未经适当培训的观察者可能会被显示屏的角旋转误导，因为本船航向的变化。例如，观测船舶的小航向变化可能会给人一种目标方位变化的印象，而实际上真方位保持不变。在第7章中将详细讨论系统观察目标运动这一极其重要的主题。

It should be borne in mind that in both stabilized and unstabilized head-up mode, an unwary or poorly trained observer can be misled by the angular rotation of the display as the own-vessel heading changes. For example, a small change of course by the observing vessel may give the impression that the bearing of a target is changing, while in fact the true bearing is remaining constant. The extremely important topic of systematic observation of target movement is discussed at length in Chapter 7.

##### 1.4.1.2 真北向上（稳定）

在真北向上方位模式下，航向标记与方位标度上对应船舶即时航向相对于真北的刻度对齐。这意味着方位标度上的000°与真北对齐。因此，观察者查看的图像以屏幕的“顶部”为北，这也是该方位模式得名的原因。图1.12（b）显示了与图1.12（a）中船首向上模式相同的场景，但系统设置为真北向上，假设本船航向为280°。图1.14比较了船首向上、真北向上和航向向上操作的情况。稳定信号可以从任何传输罗经中得出，但在实践中，信号源通常是一个陀螺罗经，对于大型船舶来说是强制性的。真北向上方位模式的原理在图1.15中进行了说明。

1.4.1.2 North-Up Orientation
In north-up orientation, the heading marker is aligned with the graduation on the bearing scale that corresponds with the instantaneous value of the ship’s heading relative to true-north. It means that 000° on the bearing scale aligns with true-north. Thus the observer views the picture with north at the ‘top’ of the screen and it is for this reason that the orientation is so named. Figure 1.12(b) shows the same situation as that displayed in the head-up mode in Figure 1.12(a) but with the system set to north-up, assuming that the own ship is on a heading of 280°. Compass stabilization is essential to maintain north-up orientation, not least when the observing vessel alters course or yaws about its chosen course (Figure 1.14, which compares the cases for head-up, north-up and course-up operation). The stabilization signal can be derived from any transmitting compass, but in practice the signal source is often a gyro compass, which is compulsory for larger vessels. The principles of north-up orientation are illustrated in Figure 1.15.

一个主要优势是，该方位与纸质海图的方位直接匹配。此外，由于显示屏是稳定的，它消除了早期雷达在船首向上模式下，当船舶改变航向时，雷达显示图像出现显著模糊的重大缺点。这两个因素导致真北向上模式成为大多数船舶上最常用的方位选项。在使用电子海图时，它仍然相关。一些用户在使用电子海图和雷达时，更喜欢真北向上模式，因为它们将雷达和海图图像与他们对区域的心理图像对齐，有助于情境意识。对于其他人来说，特别是当船舶在朝南航行时，他们发现真北向上模式看起来很别扭或不舒服，因为它看起来“上下颠倒”。

A major benefit is that the orientation compares directly with that of the paper chart. Also, because the display is stabilized it removed the significant disadvantage of earlier radars that changes in heading caused significant blurring of the radar displayed image when in head-up mode. These two factors have led to north-up mode becoming the most commonly used orientation option on most vessels. It also remains relevant when using electronic charts in north-up mode. Some users find using electronic charts and radar in north-up mode preferable, as it aligns both the radar and the chart image with the mind image they have of the area, easing situation awareness. For others, especially when on a southerly course, they find north-up awkward or uncomfortable to view as it appears ‘upside down’.

##### 1.4.1.3 航向向上（稳定）

在航向向上方位模式下，显示屏的垂直方向与代表船舶期望航向的方位对齐。这可以通过自动或半自动方式从雷达内存储的航线规划信息中获得，也可以由操作员选择特定航向。由于罗经稳定，船舶即时航向的变化会反映在航向标记的相应角运动上，从而保持船舶的航向（参考航向）与显示屏的垂直方向对齐。出于同样的原因，与未稳定显示屏相关的回波的角漂移被消除了。在现代雷达上，方位标度将相对于真北，但旧雷达可能始终将垂直方向显示为000°，代表期望的航向。图1.16说明了航向向上方位模式。

1.4.1.3 Course-Up Orientation
In course-up orientation the vertical direction on the display is aligned to the bearing which represents the desired course of the vessel. This can be obtained either automatically or semi-automatically from route planning information stored within the radar or by the operator selecting a particular course. By virtue of the compass stabilization, changes in the vessel’s instantaneous heading are reflected by sympathetic angular movements of the heading marker, thus maintaining the ship’s course (the reference course) in alignment with the display’s vertical direction. For the same reason, the angular wander of echoes associated with an unstabilized display is eliminated. On modern radars the bearing scale will be relative to true-north, but older radars may have the vertical direction always shown as 000°, representing the desired course. Figure 1.16 illustrates course-up orientation.

只要观测船舶不偏离其选定的航向太远，这种方位模式就比稳定船首向上模式更有效，因为它消除了由于偏航引起的所有图像的角漂移，同时保持航向标记在显示屏上大致垂直。不可避免的是，由于碰撞规避或一般航行的要求，需要大幅改变航向。当船舶稳定在新的航向上时，方位虽然并非毫无意义，但已失去了其作为船首向上的主要特性。问题是，方位仍然是以前的航向向上，而图像应该重新定向，以使航向标记与显示屏的垂直方向对齐（见图1.16（d））。

Provided that the observing vessel does not stray very far from her chosen course, this orientation can be more effective than a stabilized head-up orientation because it eliminates all angular wander of the picture due to yaw, while maintaining the heading marker approximately vertical on the display. Inevitably a major alteration of course will become necessary either due to the requirements of collision avoidance or to those of general navigation. When the vessel is steadied on the new course the orientation, although not meaningless, will have lost its property of being substantially head-up. The problem is that the orientation is still previous-course-up and the picture should be re-oriented to align the heading marker to the vertical direction of the display (see Figure 1.16(d)).

#### 1.4.1.4 方位模式选择

任何民用船用雷达的基本功能是提供一种测量目标距离和方位的手段，以规避碰撞和确定观测船舶的位置，从而确保安全航行。实现这些目标的难易程度受到所选方位模式的影响。在本文中描述各种碰撞规避和航行技术时，将适当关注方位模式的影响。方位模式的实际使用和设置将在第6章中讨论。表1.1总结了所描述的三种方位模式的基本特征。

1.4.1.4 Choice of Orientation
The fundamental function of any civil marine radar is to provide a means of measuring the ranges and bearings of targets for collision avoidance and the determination of the observing vessel’s position in order to ensure safe navigation. The ease with which these objectives can be achieved is affected by the choice of orientation. Where the various techniques of collision avoidance and navigation are described in this text, appropriate attention will be given to the influence of orientation. The practical use and setting up of orientations is discussed in Chapter 6. Table 1.1 summarizes the essential features of the three described orientations.

除了紧急情况外，当方位稳定因设备故障而受损时，未稳定的船首向上方位模式除了其主观吸引力外，别无他物可提供，因为其本质是定期破坏有利于测量方位和跟踪回波运动的稳定状态（见图1.14（a））。稳定的真北向上和航向向上模式没有表现出这种角破坏，因此在履行基本要求方面是同等优越的。幸运的是，它们是互补的，因为当一个处于真北向上时，另一个是以一种不会疏远有船首向上偏好的用户的方式定向的。在一些雷达系统中，稳定船首向上方位模式可能被包括作为航向向上模式的替代方案。

Except in emergency situations, when azimuth stabilization has been compromised by equipment failure, head-up unstabilized orientation has nothing to offer other than its subjective appeal, because by its very nature it regularly disrupts the steady-state condition conducive to measurement of bearing and tracking of echo movement (see Figure 1.14(a)). The stabilized north-up and course-up orientations do not exhibit this angular disruption and hence are equally superior in fulfilling the fundamental requirements. Fortunately they are complementary in that while one is north-up, the other is orientated in such a way as not to alienate the user who has a ship’s-head-up preference. On some radar systems, stabilized head-up orientation may be included as an alternative to the use of course-up mode.

### 1.5 运动和稳定模式

有两种运动模式，即相对运动和真运动。相对运动是指相对于本船的运动，而真运动是指相对于外部参考系统的运动。外部参考分为两种稳定模式：地面稳定和海洋稳定。地面稳定需要一个外部传感器信号，至少能够确定观测船舶相对于地面的速度（SOG）。在当今世界，这通常基于全球导航卫星系统（GNSS）的输出，使用来自美国全球定位系统（GPS）和/或俄罗斯全球导航卫星系统（GLONASS）的数据。其他系统也可以提供此类信息，如第6.9.6节中所述。当海洋稳定时，重要的传感器是速度计，它测量船舶相对于水的速度（STW）。

1.5 MOTION AND STABILIZATION MODES
There are two motion modes, known as relative motion and true motion. Relative means relative to the own ship, while true means relative to an outside reference system. The outside reference is split into two stabilization modes — ground stabilized and sea stabilized. Ground stabilization requires an external sensor signal that at least can determine the speed over ground (SOG) of the observing vessel. In today’s world this is typically based on the output of a Global Navigation Satellite System (GNSS) using data from the US Global Positioning System (GPS) and/or Russia’s Globalnaya Navigatsionnaya Sputnikovaya Sistema (GLONASS). Other systems can also give this information, as discussed in Section 6.9.6. When sea stabilized, the important sensor is the speed log, which measures the vessel’s speed through the water (STW).

#### 1.5.1 相对运动显示

在相对运动显示中，显示屏的原点始终代表观测船舶的有效位置，是静止的。通常，原点位于显示屏圆的中心，但用户可以根据实际需要将其移动到其他位置。其基本特点是原点静止，因此目标显示出相对于观测船舶的运动。相对运动的设置与所选的方位模式无关。此外，就目标在显示屏上出现的位置而言，设置地面稳定或海洋稳定并不重要，因为所有位置都以观测船舶为参考。相对运动显示的特点最好通过一个例子来说明。在这个例子中，假设任何偏航可以忽略不计。

1.5.1 Relative-Motion Presentation
In relative-motion presentation the origin of the display, which always represents the effective position of the observing vessel, is stationary. Commonly, the origin is located at the centre of the display circle, but the user can move this to a position of choice to better meet the needs of the actual situation. The essential feature is that the origin is stationary and as a consequence targets exhibit their motion relative to the observing vessel. The setting of relative motion is independent of the chosen orientation mode. Also, in terms of where the targets appear on the display at any one time, it is immaterial whether ground or sea stabilization has been set, simply because all positions are referenced to the observing vessel. The essential features of a relative-motion presentation are best illustrated by an example. In this example it is assumed that any leeway is negligible.

假设观测船舶以稳定的航向000°（真北）和10节的速度通过水，在一个均匀的潮流中，潮流方向为270°（真北），流速为4节。简化的情况图如图1.17（a）所示，有四个目标：

Consider the case of an observing vessel on a steady heading of 000° (T) at a speed of 10 knots through the water in a tide (which is uniform throughout the area) setting 270° (T) at a rate of 4 knots. For this case the basic PPI view would look very similar, whether the orientation mode was set to head-up (unstabilized or stabilized), course-up or north-up. A simplified chart of the situation is illustrated in Figure 1.17(a), showing four targets:

i. 船舶A位于观测船舶正北7海里处，在水中静止，航向045°（真北）。
ii. 船舶B位于船舶A正东8海里处，以稳定的航向270°（真北）和10节的速度通过水航行。
iii. 船舶C位于船舶A正北5海里处，以稳定的航向180°（真北）和5节的速度通过水航行。
iv. 一个大型导航浮标L，它被锚定，因此在本例中可以认为是相对于地面静止的。它的位置在船舶A正西7海里处。

i. Vessel A which is located 7 NM due north of the observing vessel and is stopped in the water heading 045° (T).
ii. Vessel B which is located 8 NM due east of vessel A and is on a steady heading of 270° (T) at a speed of 10 knots through the water.
iii. Vessel C which is located 5 NM due north of vessel A and is on a steady heading of 180° (T) at a speed of 5 knots through the water.
iv. A large navigational buoy L which is anchored and therefore, for the purposes of this example, can be considered to be stationary over the ground. Its position is 7 NM due west of vessel A.

为了帮助理解相对运动，图1.17（b）表示了观测船舶的PPI在1000时的样子。为了比较，图1.17（c）表示了相同的PPI，显示了回波在1030时的位置，以及它们在1000时的位置记录。可以注意到，回波的形状通常不会给出目标轮廓的指示，如第2.8.5节中解释的那样。现在考虑这四个回波的运动，从在水中静止的目标A开始，它提供了一个简单的基础，可以在此基础上理解所有相对运动。重要的是要记住观测船舶保持稳定航向的假设。

To assist in the understanding of relative motion, Figure 1.17(b) represents the observing vessel’s PPI as it would appear at 1000 h. For comparison, Figure 1.17(c) represents the same PPI showing the positions of the echoes as they would appear at 1030 together with a record of their 1000 positions. It will be noticed that the shape of the echoes normally gives little indication of the outline of the targets, as explained in Section 2.8.5. Consider now the movement of each of the four echoes in turn, commencing with that of the water-stationary target A, which offers a simple basis on which an understanding of all relative motion can be built. It is important to remember the assumption that the observing vessel is maintaining a steady heading.

在1000到1030的期间，观测船舶将向北移动5海里。因为原点保持静止，目标A的距离以10海里/小时（节）的速度减少，因此A的回波将在30分钟间隔内沿着航向标记向下移动5海里的距离。这揭示了相对运动显示的一个基本特性，即在水中静止的目标的回波将在屏幕上以与观测船舶通过水的速度（STW）相等的速率，沿着观测船舶航向的相反方向移动。重要的是，这通常不适用于航向被航迹（COG）取代，STW被地面速度（SOG）取代的情况。

In the period 1000–1030 the observing vessel will move north by a distance of 5 NM through the water. Because the origin remains stationary, and the range of target A decreases at 10 NM/h (knots), it follows that the echo of A will move down the heading marker by a distance of 5 NM in the 30 min interval. This reveals the basic property of the relative-motion presentation which is that the echo of a target which is stationary in the water will move across the screen in a direction reciprocal to that of the observing vessel’s heading, at a rate equal to the observing vessel’s speed through the water (STW). Importantly, this is not generally the case if heading is replaced by course over ground (COG) and STW is replaced by speed over ground (SOG).

现在考虑船舶B的回波运动，它在1000时位于静止船舶A正东8海里处。由于B正以10节的速度直接朝A驶去，因此它在1030时的位置将位于A正东3海里处。图1.17（c）显示，船舶B的回波留下的轨迹可以指示目标将如何通过，前提是两船都不进行操纵。然而，回波的移动方向和速度与目标的航向和速度完全不同。正确理解这一事实是绝对必要的，如果要正确解释基本显示并用于评估碰撞规避策略的话。（实际上，目标跟踪向量将用于做出此类决策，如第4.4节和第7章中详细讨论的）进一步考虑该图将表明，船舶B的相对运动是水中静止目标的相对运动（由观测船舶的航向和STW决定）和船舶B通过水的真运动的合成。可以基于地面参考运动进行类似的论证。正确使用雷达进行碰撞规避是基于对遭遇中其他目标的相对运动和真运动的系统观察和分析（见第7章）。

Consider now the movement of the echo of vessel B which at 1000 was 8 NM due east of the stationary vessel A. As B is heading directly towards A at 10 knots, it follows that its 1030 position will be 3 NM due east of A. Figure 1.17(c) reveals that the trail left by the echo of vessel B offers an indication of how far off the target will pass if neither vessel manoeuvres. However, the echo has moved across the screen in a direction and at a rate which is quite different from the target’s course and speed. An appreciation of this fact is absolutely essential if the basic presentation is to be interpreted correctly and used in assessing collision avoidance strategy. (In practice, target tracking vectors would be used to make such decisions, as discussed in detail in Section 4.4 and Chapter 7) Further consideration of the figure will show that the relative motion of echo B is the resultant of that of a water-stationary target (which is determined by the observing vessel’s course and STW) and the true motion of the vessel B through the water. An analogous argument can be based on ground referenced motions. The proper use of radar for collision avoidance is based on systematic observation and analysis of both the relative motion and the true motion of the other targets in an encounter (see Chapter 7).

现在考虑船舶C的回波在屏幕上的运动。在1000时，它位于静止船舶A正北5海里处，并且正以5节的速度直接朝A驶去。因此，在1030时，它将位于船舶A正北2.5海里处。如图1.17（c）所示，由于船舶A的回波本身已经沿着屏幕上向南移动了5海里，因此船舶C的回波总移动距离为7.5海里，方向相同。因此，与船舶B的情况一样，回波在屏幕上移动的方式与船舶通过水的移动方式不同。然而，应该注意的是，由于巧合，船舶C的回波轨迹与静止船舶A的回波轨迹方向相同。这揭示了相对运动显示的另一个特性，即在水中静止的目标、与观测船舶航向相反的目标以及与观测船舶航向相同但速度较慢的目标，它们的回波将在屏幕上以相同的方向（但以不同的速度）移动。这一特性有可能误导未经培训或粗心的观察者，将例如一个正在被追越的目标与一个航向相反的目标混淆。这进一步强调了在使用雷达进行碰撞规避时，需要很好地理解这些基本原则，并采取系统的方法（见第7章）。

Consider now the movement on the screen of the echo of vessel C. At 1000 its position was 5 NM due north of the water-stationary vessel A and heading directly towards it at 5 knots. It follows that at 1030 its position will be 2.5 NM north of vessel A. As shown in Figure 1.17(c), because the echo of vessel A has itself moved across the screen by 5 NM in a direction of south, the aggregate movement of echo C is 7.5 NM in the same direction. Thus, as in the case of vessel B, the echo has moved across the screen in a way that is different from the movement of the vessel through the water. However it should be noted that, by coincidence, the track across the screen of echo C is in the same direction as that of the water-stationary target A. This reveals a further feature of the relative-motion presentation, which is that the echoes of targets which are stopped in the water, targets which are on a reciprocal course to the observing vessel and targets which are on the same course as the observing vessel, but slower, will all move across the screen in the same direction (but at different speeds). This feature has the potential to mislead the untrained or unwary observer into confusing, for example, a target that is being overtaken with one that is on a reciprocal course. This further emphasizes the necessity of having a good understanding of these basic principles and a systematic approach when using the radar for collision avoidance (see Chapter 7).

最初，浮标和静止船舶之间的东西距离为7海里。由于潮流将静止船舶推向浮标，速度为4节，因此到1030时，该距离将减少到5海里。研究图1.17（c）将表明，浮标的回波在屏幕上以与观测船舶地面轨迹相反的方向移动，速度等于观测船舶在地面上的速度。这一特性在使用雷达进行导航（与碰撞规避相对）时被利用，各种程序在第8章中进行了说明。

Initially the east/west distance between the buoy and the stationary ship was 7 NM. As the tide is setting the stationary vessel down on to the buoy at 4 knots, it follows that this distance will have reduced to 5 NM by 1030. A study of Figure 1.17(c) will show that the echo of the buoy has moved across the screen in a direction which is the reciprocal of the observing vessel’s ground track at a speed equal to the speed of the observing vessel over the ground. This property is exploited in the use of radar for navigation (as opposed to collision avoidance); the various procedures are set out in Chapter 8.

#### 1.5.2 真运动显示

已经表明，在相对运动显示中，所有回波在屏幕上的移动都受到观测船舶的航向和速度的影响。在一个正确调整的真运动显示中，所有目标的回波运动与观测船舶的运动无关。这是通过使图像的原点在屏幕上以对应于观测船舶运动的方向和速率移动来实现的。显然，根据设置的是地面稳定还是海洋稳定，原点的实际移动方式有所不同，但无论方位、运动或稳定模式如何，PPI上目标相对于原点（但不是其方向或绝对位置）的基本几何布局始终相同，因为“外部世界”显然不受雷达设置的影响。

1.5.2 The True-Motion Presentation
It has been shown that in a relative-motion presentation the movement of all echoes across the screen is affected by the course and speed of the observing vessel. In a correctly adjusted true-motion presentation, the echo movement of all targets is rendered independent of the motion of the observing vessel. This is achieved by causing the origin of the picture to track across the screen in a direction and at a rate which corresponds with the motion of the observing vessel. There is clearly a fundamental difference to the actual movement of the origin as to whether ground or sea stabilisation has been set, although the displayed basic geometrical layout of targets with respect to the origin (but not its orientation or absolute position) always remains identical on the PPI. This remains true whatever the orientation, motion or stabilisation mode, simply because the ‘world outside’ is obviously not affected by the settings of the radar.

显然，在一段时间后，原点即观测船舶的位置将移动到显示屏的边缘。然后需要重置原点，要么由用户干预，要么由用户设置的自动过程完成。重置策略在第6.2.6.3节中进行了讨论。

It is clear that after a period of time the origin — that is the position of the observing vessel — will move to the edge of the display. It then has to be reset, either by user intervention or by an automatic process set up by the user. Strategies for resetting are discussed in Section 6.2.6.3.

##### 1.5.2.1 真运动海洋稳定显示

为了产生真运动海洋稳定显示，图像的原点必须在屏幕上以对应于观测船舶航向和通过水的速度（STW）的方向和速率移动。在图中的示例（图1.18）中，航向为000°（真北），速度为10节。

1.5.2.1 True-Motion Sea-Stabilized Presentation
To produce a true-motion sea-stabilized presentation, the origin of the picture must be made to track across the screen in a direction and at a rate that corresponds with the observing vessel’s course and speed through the water (STW). In the example in the illustration (Figure 1.18) the course is 000° (T) and the speed is 10 knots.

图1.18（b）显示了观测船舶的PPI在1000时的样子。图像的原点被偏移，以充分利用可用的屏幕区域（见第6.2.6.3节）。图1.18（c）显示了这四个回波在1030时的位置，以及它们在1000时的位置，以便进行比较。现在将依次考虑这四个回波的运动，从在水中静止的目标A开始。

Figure 1.18(b) shows the PPI of the observing vessel as it would appear at 1000. The origin of the picture is offset in such a way as to make optimum use of the available screen area (see Section 6.2.6.3). Figure 1.18(c) shows the position of the four echoes as they would appear at 1030, together with an indication of their 1000 positions for the purpose of comparison. The movement of each of the four echoes will now be considered in turn, commencing with target A which is stopped in the water.

在1000到1030的期间，原点将向北移动5海里的距离，而目标A保持在航向标记上，但其距离将减少5海里。因此，目标A的回波的净运动为零。考虑图1.18将揭示正确设置的真运动海洋稳定显示的一个基本特性，即在水中静止的目标的回波将在屏幕上保持固定位置。

In the interval 1000–1030 the origin will move due north by a scale distance of 5 NM, while in the same time target A will remain on the heading marker but its range will decrease by 5 NM. It follows that the net motion of the echo of target A will be zero. Consideration of Figure 1.18 reveals the basic property of a correctly setup true-motion sea-stabilized presentation, which is that the echo of a target which is stationary in the water will maintain a constant position on the screen.

在1000时，移动目标B位于船舶A正东8海里处。由于它正以10节的速度直接朝A驶去，因此其相对于A的方位将保持不变，但到1030时，其距离将减少到3海里。图1.18（c）表明，目标B的回波将在屏幕上以对应于目标船舶的航向和通过水的速度（STW）的方向和速率移动。类似的论证将表明，船舶C的回波将在屏幕上以180°（真北）的方向和5节的速率移动。因此，该显示具有这样一个特性：目标轨迹提供了所有移动目标的航向（实际上是通过水的航迹——CTW）的指示。这一特性与相对运动显示的相应特性（见第1.5.1节）是互补的。必须强调的是，碰撞规避策略必须基于对显示目标运动的系统分析，如第7章中详细所述。

At 1000 the moving target B was located 8 NM due east of vessel A. As it is heading directly towards A its bearing from A will remain steady, but the range will have decreased to 3 NM by 1030. Figure 1.18(c) shows that the echo of target B will move across the screen in a direction and at a rate which corresponds with the target vessel’s course and STW. A similar argument will reveal that the echo of vessel C will move across the screen in a direction of 180° (T) at a scale speed of 5 knots. The presentation thus has the property that the target trails offer an indication of the headings (actually course through the water — CTW) of all moving targets. This feature is complementary to the corresponding property of the relative-motion presentation (see Section 1.5.1). It must be stressed that collision avoidance strategy must be based on systematic analysis of the displayed target movements, as detailed in Chapter 7.

由于潮流，静止在水中的船舶A将直接朝浮标移动，在1000到1030期间，两者之间的东西距离将减少2海里。已经确定目标A的回波将在屏幕上保持固定位置，因此可以得出结论，在1000到1030期间，浮标L的回波将在屏幕上向东移动2海里的距离。考虑图1.18（c）将表明，真运动海洋稳定显示的第三个特性是，陆地静止目标将在屏幕上以与潮流相反的方向、潮流速度相等的速率移动。

As a result of the tide, the water-stationary vessel A will be set directly towards the buoy and by 1030 the east/west distance between the two will have reduced to 5 NM. It has been established that echo A will maintain its position on the screen, and thus it follows that in the interval from 1000 to 1030, echo L will move east across the screen by a scale distance of 2 NM. Consideration of Figure 1.18(c) will show that a third property of the true-motion sea-stabilized presentation is that land stationary targets will move across the screen at a rate equal to the tide but in the opposite direction to the set.

在考虑真运动海洋稳定显示的特性时，必须认识到，显示目标运动的准确性完全取决于图像原点的运动方向和速率表示观测船舶航向和STW的准确性。真运动显示仅与输入数据一样好。真运动设置的实用程序以及误差和不准确性的影响在第6.2节和第7.9节中分别进行了讨论。由于示例场景中观测船舶的航向为北，所使用的方位模式是无关紧要的。应该注意的是，除了未稳定船首向上模式外，任何方位模式都可以与真运动一起使用，与航向无关。
