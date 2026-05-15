window.KINAVI_RADAR_DECKS = {
  principles: {
    unit: "Unit 01",
    title: "雷达工作原理",
    slides: [
      {
        type: "cover",
        title: "雷达工作原理",
        subtitle: "Radar Working Principles",
        lead: "从测距、测方位、显示方式和电磁波传播入手，理解雷达为什么能把海上目标转化为屏幕回波。",
        en: "From range, bearing, display modes, and electromagnetic propagation, this deck explains how a marine radar turns targets into a navigational picture.",
        meta: ["教材第2-3章", "Chapters 2-3", "Echo · Range · Bearing"]
      },
      {
        type: "signal",
        title: "雷达信息链",
        tag: "Echo Chain",
        lead: "雷达的基本逻辑是发射、传播、反射、接收、处理和显示。",
        en: "The basic radar chain is transmit, propagate, reflect, receive, process, and display.",
        steps: [
          ["发射脉冲", "Transmit pulse"],
          ["电磁波传播", "Wave propagation"],
          ["目标反射", "Target reflection"],
          ["接收回波", "Echo reception"],
          ["信号处理", "Signal processing"],
          ["图像显示", "Radar display"]
        ]
      },
      {
        type: "cards",
        title: "距离如何得到",
        tag: "Range",
        lead: "教材第二章把测距建立在电磁波往返传播时间上，课堂中要把公式转化为操作判断。",
        en: "Range is derived from the round-trip travel time of the radar pulse; students should connect the formula to operational judgement.",
        items: [
          ["往返时间", "雷达测量的是脉冲从天线到目标再返回接收机的时间差。", "Round-trip time of flight"],
          ["距离换算", "传播速度近似为光速，距离等于传播速度与往返时间乘积的一半。", "Range = c x time / 2"],
          ["操作含义", "量程、脉冲宽度和回波前沿会影响驾驶员对目标距离的读取。", "Range scale and pulse width matter"]
        ]
      },
      {
        type: "cards",
        title: "方位如何得到",
        tag: "Bearing",
        lead: "方位来自天线指向和艏线基准，方位误差会直接影响定位、标绘和避碰。",
        en: "Bearing depends on antenna direction and heading reference; bearing errors propagate into fixing, plotting, and collision avoidance.",
        items: [
          ["天线扫描", "旋转天线把不同方向的回波映射到显示器上。", "Antenna scan"],
          ["艏线基准", "艏向输入和艏线校准决定相对方位和真方位的可靠性。", "Heading reference"],
          ["误差敏感", "方位误差在远距离目标上会放大成显著的位置误差。", "Bearing error grows with range"]
        ]
      },
      {
        type: "matrix",
        title: "显示方式的判断价值",
        tag: "Display Modes",
        lead: "教材第二章强调显示方式服务于观测目的，不能只记名称。",
        en: "Display modes should be selected for the observation task, not memorised as labels.",
        cells: [
          "显示方式", "主要基准", "适合用途", "注意点",
          "Head-Up", "本船船首", "直观操船", "图像随艏向变化旋转",
          "North-Up", "真北", "海图对照", "依赖稳定航向输入",
          "Course-Up", "设定航向", "航道监控", "改向后需重新理解画面"
        ]
      },
      {
        type: "cards",
        title: "电磁波传播带来的限制",
        tag: "Propagation",
        lead: "教材第三章把传播、反射、折射、散射与雷达观测现象连接起来。",
        en: "Propagation, reflection, refraction, and scattering explain many real radar display phenomena.",
        items: [
          ["雷达地平", "天线高度、目标高度和大气折射决定远距离目标能否被看到。", "Radar horizon"],
          ["异常传播", "超折射或波导效应可能造成异常探测距离和误判。", "Abnormal propagation"],
          ["遮挡阴影", "上层建筑、货物和岸线会产生阴影区，使弱小目标漏失。", "Shadow sectors"]
        ]
      },
      {
        type: "case",
        title: "课堂案例：雾航中的回波判断",
        tag: "Bridge Scenario",
        lead: "把工作原理放入雾航场景，训练学生从回波可靠性出发解释航行判断。",
        en: "A restricted-visibility case links radar principles to bridge judgement.",
        caseText: "本船在雾中沿岸航行，雷达显示前方 8 NM 出现弱小回波，AIS 无对应目标。",
        points: [
          "先判断回波是否稳定出现，并用量程变化复核。",
          "核对目标方位变化，避免把杂波或假回波当作船舶。",
          "Use radar first for non-cooperative targets, then cross-check with AIS, lookout, and chart context."
        ]
      },
      {
        type: "closing",
        title: "本单元沉淀",
        tag: "Takeaways",
        lead: "雷达原理的核心不是背诵部件，而是解释屏幕图像的来源和限制。",
        en: "The purpose is to explain where the radar picture comes from and where its limits are.",
        summary: "学生应能把距离、方位、显示模式和传播条件连接到一个可解释的海上态势图像。",
        points: [
          "Range and bearing are measurements, not absolute truth.",
          "Display mode changes the frame of reference.",
          "Propagation and target properties decide what can be seen."
        ]
      }
    ]
  },

  system: {
    unit: "Unit 02",
    title: "雷达组成",
    slides: [
      {
        type: "cover",
        title: "雷达组成",
        subtitle: "Radar System Architecture",
        lead: "从教材第三章的系统配置出发，建立船载雷达的硬件链路、信号流和外部数据输入图。",
        en: "Based on the system configuration chapter, this deck maps the shipborne radar hardware chain, signal flow, and external data inputs.",
        meta: ["教材第3章", "Chapter 3", "Antenna · Transceiver · Display"]
      },
      {
        type: "signal",
        title: "典型系统链路",
        tag: "System Flow",
        lead: "船载雷达可以看成一个由微波、电子和显示处理共同组成的闭环系统。",
        en: "A shipborne radar is a closed operational chain of microwave hardware, electronics, and display processing.",
        steps: [
          ["天线系统", "Antenna system"],
          ["发射机", "Transmitter"],
          ["双工器", "Duplexer"],
          ["接收机", "Receiver"],
          ["信息处理", "Processor"],
          ["显示控制", "Display and controls"]
        ]
      },
      {
        type: "cards",
        title: "天线与微波传输",
        tag: "Antenna",
        lead: "天线决定雷达向哪里看，也决定波束宽度、方位分辨力和盲区特性。",
        en: "The antenna determines where the radar looks, while beam width affects bearing resolution and blind sectors.",
        items: [
          ["旋转扫描", "天线连续旋转形成周向目标图像。", "Rotating scan"],
          ["波束宽度", "水平波束影响方位分辨力，垂直波束影响近距离和俯仰覆盖。", "Beam width"],
          ["安装影响", "桅杆、烟囱和甲板货物会造成遮挡和阴影扇区。", "Installation effects"]
        ]
      },
      {
        type: "cards",
        title: "发射、双工与接收",
        tag: "Transceiver",
        lead: "教材把发射机、双工器和接收机作为雷达信号链的关键部件。",
        en: "The transmitter, duplexer, and receiver are the core elements of the radar signal chain.",
        items: [
          ["发射机", "产生高频脉冲或固态调制信号，决定发射功率和脉冲特性。", "Transmitter"],
          ["双工器", "在发射与接收之间保护接收机并切换信号路径。", "Duplexer"],
          ["接收机", "放大弱回波并完成检波、滤波和杂波抑制前处理。", "Receiver"]
        ]
      },
      {
        type: "matrix",
        title: "外部数据输入",
        tag: "Bridge Inputs",
        lead: "现代雷达已经和罗经、计程仪、GNSS、AIS、ECDIS 等设备共同形成驾驶台信息系统。",
        en: "Modern radar relies on heading, speed, position, AIS, and ECDIS data for integrated bridge functions.",
        cells: [
          "输入", "用于什么", "影响对象", "失效风险",
          "Heading", "真方位和显示稳定", "North-Up / Course-Up", "方位与矢量错误",
          "Speed", "真运动和 ARPA 计算", "True vector", "CPA / TCPA 偏差",
          "GNSS / ECDIS", "位置对照和叠加", "Radar overlay", "图层错位"
        ]
      },
      {
        type: "cards",
        title: "信息处理与显示系统",
        tag: "Display Processor",
        lead: "显示系统把原始回波转化为可读、可量测、可跟踪的导航信息。",
        en: "The display processor turns raw echoes into readable, measurable, and trackable navigation information.",
        items: [
          ["回波增强", "进行视频处理、噪声控制和杂波抑制。", "Echo enhancement"],
          ["测量工具", "提供 VRM、EBL、光标、平行线和导航线。", "Measurement tools"],
          ["目标处理", "支持自动捕获、跟踪、矢量、CPA / TCPA 和告警。", "Target processing"]
        ]
      },
      {
        type: "case",
        title: "课堂案例：真矢量突然异常",
        tag: "Fault Thinking",
        lead: "系统组成学习要服务于故障定位和风险判断。",
        en: "System architecture should support fault diagnosis and operational risk control.",
        caseText: "ARPA 目标真矢量突然方向异常，但相对运动显示仍较稳定。",
        points: [
          "先检查罗经和速度输入，确认真运动计算是否可靠。",
          "再检查雷达目标跟踪是否稳定，避免直接相信单个输出。",
          "A true-vector error may come from external sensor input rather than the echo itself."
        ]
      },
      {
        type: "closing",
        title: "本单元沉淀",
        tag: "Takeaways",
        lead: "理解组成的目标是知道每个信息从哪里来、在哪里可能失真。",
        en: "The goal is to know where each item of information comes from and where it can become unreliable.",
        summary: "学生应能画出船载雷达信号链，并说明外部传感器输入对显示和避碰计算的影响。",
        points: [
          "Hardware creates and receives the echo.",
          "Processor and display turn echoes into bridge information.",
          "External inputs can improve the radar picture and can also inject errors."
        ]
      }
    ]
  },

  operation: {
    unit: "Unit 03",
    title: "雷达操作",
    slides: [
      {
        type: "cover",
        title: "雷达操作",
        subtitle: "Radar Operation",
        lead: "以教材第四章为主线，把雷达操作从按钮记忆整理为开机、调图、测量、复核和安全使用流程。",
        en: "Following the operation chapter, this deck turns radar controls into a workflow: start, tune, measure, verify, and use safely.",
        meta: ["教材第4章", "Chapter 4", "Range · Gain · EBL / VRM"]
      },
      {
        type: "process",
        title: "基本操作路径",
        tag: "Operating Route",
        lead: "课堂中建议把操作顺序固定下来，再让学生解释每一步的目的。",
        en: "Students should first learn a stable operating sequence, then explain why each step is needed.",
        steps: [
          ["安全检查", "确认天线附近无人员和危险作业。", "Safety before transmit"],
          ["开机预热", "完成电源、待机和发射状态转换。", "Power and standby"],
          ["选择量程", "先看总体态势，再切换到任务量程。", "Range scale"],
          ["调节图像", "依次处理亮度、增益、海雨杂波和干扰。", "Tune the picture"],
          ["测量复核", "用 EBL / VRM、光标和显示模式复核目标。", "Measure and verify"]
        ]
      },
      {
        type: "cards",
        title: "量程与脉冲选择",
        tag: "Range",
        lead: "量程不是放大缩小画面那么简单，它决定观测任务、目标密度和脉冲特性。",
        en: "Range selection affects observation purpose, target density, and pulse characteristics.",
        items: [
          ["远量程", "适合提前发现目标、岸线和天气区域。", "Long range awareness"],
          ["中量程", "适合跟踪交通态势和会遇目标。", "Traffic monitoring"],
          ["短量程", "适合靠离泊、港区、狭水道和近距离避碰。", "Close-quarter control"]
        ]
      },
      {
        type: "cards",
        title: "增益和杂波控制",
        tag: "Tuning",
        lead: "教材第四章强调控制旋钮服务于目标可见性，过度抑制会带来漏检风险。",
        en: "Controls should improve target visibility; over-suppression can remove real targets.",
        items: [
          ["Gain", "增益过低会漏掉弱小目标，过高会让噪声淹没画面。", "Avoid under-gain and over-gain"],
          ["Sea clutter", "海浪抑制要谨慎，近距离小船和浮标可能一起被压掉。", "Use STC carefully"],
          ["Rain clutter", "雨雪抑制可改善雨区画面，也可能削弱目标回波前沿。", "FTC is a tradeoff"]
        ]
      },
      {
        type: "matrix",
        title: "EBL / VRM / Cursor",
        tag: "Measurement",
        lead: "测量工具应和目标性质、显示模式和航行任务一起使用。",
        en: "Measurement tools should be used with target type, display mode, and navigation task in mind.",
        cells: [
          "工具", "读取内容", "典型用途", "复核重点",
          "VRM", "距离", "安全距离、定位", "目标前沿与量程",
          "EBL", "方位", "会遇趋势、定位", "艏线和方位误差",
          "Cursor", "距离方位", "快速读数", "读数精度和目标稳定性"
        ]
      },
      {
        type: "case",
        title: "课堂案例：雨区中目标消失",
        tag: "Tuning Scenario",
        lead: "操作课要训练学生解释“为什么看不到”，再选择控制策略。",
        en: "Operation training should ask why a target disappears before changing controls.",
        caseText: "强降雨区域中，一个小目标在开启雨雪抑制后变得不稳定。",
        points: [
          "先降低或分级调整雨雪抑制，观察目标是否恢复。",
          "改变量程和脉冲设置，检查目标是否只是被雨区遮蔽。",
          "Cross-check with AIS, visual lookout when possible, and safe speed requirements."
        ]
      },
      {
        type: "cards",
        title: "显示模式选择",
        tag: "Display Selection",
        lead: "显示模式应根据操船任务选择，操作员需要能说明选择理由。",
        en: "The operator should be able to justify the selected display mode for the bridge task.",
        items: [
          ["航道监控", "Course-Up 或 North-Up 便于与航道和海图方向对照。", "Channel monitoring"],
          ["近距离操船", "Head-Up 直观反映本船船首前方目标。", "Close manoeuvring"],
          ["避碰分析", "相对运动与真运动需要结合，避免只看一种矢量。", "Relative and true motion"]
        ]
      },
      {
        type: "closing",
        title: "本单元沉淀",
        tag: "Takeaways",
        lead: "操作能力体现在稳定流程和风险意识上。",
        en: "Operational competence is a stable workflow plus an awareness of what each control may hide.",
        summary: "学生应能完成从开机到图像调节、目标测量和复核的完整流程，并说明每一步对安全判断的影响。",
        points: [
          "Tune the picture for the task, not for a clean-looking screen.",
          "Every control has a safety tradeoff.",
          "Measurement must be checked against mode, scale, and target stability."
        ]
      }
    ]
  },

  observation: {
    unit: "Unit 04",
    title: "雷达目标观测",
    slides: [
      {
        type: "cover",
        title: "雷达目标观测",
        subtitle: "Radar Target Observation",
        lead: "依据教材第五章，把观测性能、目标特性和影响因素整理成可用于课堂判读训练的知识图谱。",
        en: "Based on the observation chapter, this deck turns radar performance, target properties, and environmental factors into a practical interpretation map.",
        meta: ["教材第5章", "Chapter 5", "Detection · Clutter · Error"]
      },
      {
        type: "cards",
        title: "观测性能的四个关键词",
        tag: "Performance",
        lead: "观测性能决定雷达图像能否支撑可靠判断。",
        en: "Observation performance determines whether the radar picture can support reliable judgement.",
        items: [
          ["探测距离", "受天线高度、目标高度、功率、传播和天气影响。", "Detection range"],
          ["距离分辨力", "决定两个前后接近目标能否分开显示。", "Range resolution"],
          ["方位分辨力", "决定两个同距不同向目标能否分开显示。", "Bearing resolution"],
          ["测量精度", "距离和方位误差会影响定位、标绘和避碰。", "Measurement accuracy"]
        ]
      },
      {
        type: "matrix",
        title: "目标特性与回波强弱",
        tag: "Target Echo",
        lead: "目标回波不是只由大小决定，还与形状、材料、姿态和海况有关。",
        en: "Echo strength depends on size, shape, material, aspect, and sea state.",
        cells: [
          "目标因素", "回波影响", "课堂问题", "英文术语",
          "尺寸和高度", "影响可探测距离", "小目标何时容易漏失", "Size and height",
          "材料和形状", "影响反射能力", "木船为何弱于钢船", "Reflectivity",
          "姿态变化", "影响回波稳定性", "目标转向后为何闪烁", "Aspect angle"
        ]
      },
      {
        type: "cards",
        title: "海况与天气",
        tag: "Clutter",
        lead: "教材第五章把海浪、雨雪和同频干扰列为影响正常观测的重要因素。",
        en: "Sea clutter, rain/snow clutter, and interference are major factors that disturb normal observation.",
        items: [
          ["海杂波", "近距离回波密集，小目标可能被海浪回波淹没。", "Sea clutter"],
          ["雨雪回波", "雨区可能形成大面积强回波，遮蔽真实目标。", "Rain and snow clutter"],
          ["同频干扰", "其他雷达产生的条纹或点线干扰会影响判读。", "Radar interference"]
        ]
      },
      {
        type: "cards",
        title: "假回波与异常现象",
        tag: "False Echoes",
        lead: "能识别假回波，是从“看见”走向“会判断”的关键。",
        en: "Recognising false echoes is a key step from seeing the screen to judging the situation.",
        items: [
          ["多次反射", "强目标和船体结构可能造成重复回波。", "Multiple reflection"],
          ["旁瓣回波", "强目标可能通过天线旁瓣形成虚假位置。", "Side-lobe echoes"],
          ["二次扫描", "远距离强目标可能出现在错误量程位置。", "Second-trace echoes"]
        ]
      },
      {
        type: "process",
        title: "目标观测复核流程",
        tag: "Verification",
        lead: "课堂判图时用固定流程减少主观猜测。",
        en: "A fixed verification flow reduces guesswork during radar interpretation.",
        steps: [
          ["看稳定性", "连续扫描中目标是否持续存在。", "Persistence"],
          ["变换量程", "目标位置和形态是否符合真实目标规律。", "Range check"],
          ["测距离方位", "用 VRM / EBL 形成可记录数据。", "Measure"],
          ["对照海图", "判断岸线、浮标和固定物标。", "Chart context"],
          ["交叉验证", "结合 AIS、视觉和航行环境。", "Cross-check"]
        ]
      },
      {
        type: "case",
        title: "课堂案例：弱小目标与海杂波",
        tag: "Observation Scenario",
        lead: "目标观测训练要让学生区分“目标弱”和“设置不当”。",
        en: "Observation training should distinguish a weak target from poor tuning.",
        caseText: "近距离海面有小型渔船活动，雷达屏幕近区海杂波较强，目标时隐时现。",
        points: [
          "逐步调整海杂波抑制，避免一次性压掉小目标。",
          "在短量程和中量程之间切换，观察目标是否有连续运动规律。",
          "Maintain a proper lookout and use safe speed because radar may not reliably show every small craft."
        ]
      },
      {
        type: "closing",
        title: "本单元沉淀",
        tag: "Takeaways",
        lead: "观测能力的核心是知道哪些目标可靠、哪些现象需要复核。",
        en: "The core skill is knowing which targets are reliable and which phenomena require verification.",
        summary: "学生应能从性能、目标、环境和操作四个角度解释一张雷达图像。",
        points: [
          "A weak echo may still be a real navigational risk.",
          "Clutter suppression can improve visibility and can hide small targets.",
          "False echoes should be tested through range, bearing, persistence, and context."
        ]
      }
    ]
  },

  collision: {
    unit: "Unit 05",
    title: "雷达避碰",
    slides: [
      {
        type: "cover",
        title: "雷达避碰",
        subtitle: "Radar Collision Avoidance",
        lead: "结合教材第七章雷达标绘和第八章雷达避碰，把目标运动、ARPA、AIS 和避碰规则组织成决策流程。",
        en: "Combining radar plotting and collision avoidance chapters, this deck links target motion, ARPA, AIS, and COLREGs into a decision workflow.",
        meta: ["教材第7-8章", "Chapters 7-8", "Plotting · ARPA · COLREGs"]
      },
      {
        type: "process",
        title: "避碰判断链",
        tag: "Decision Chain",
        lead: "雷达避碰从连续观测开始，以行动后效果复核结束。",
        en: "Radar collision avoidance starts with continuous observation and ends with checking the effect of action.",
        steps: [
          ["连续观测", "获取目标相对运动趋势。", "Observe"],
          ["运动分析", "判断相对运动线和真运动。", "Analyse"],
          ["风险评估", "计算或读取 CPA / TCPA。", "Assess"],
          ["规则判断", "结合会遇局面和 COLREGs。", "COLREGs"],
          ["行动复核", "行动后检查 CPA 是否增大。", "Verify"]
        ]
      },
      {
        type: "cards",
        title: "手工标绘的价值",
        tag: "Plotting",
        lead: "教材第七章把标绘作为避碰数理思维的基础。",
        en: "Manual plotting builds the mathematical thinking behind collision avoidance.",
        items: [
          ["相对运动线", "连续目标位置形成相对运动趋势。", "Relative motion line"],
          ["CPA / TCPA", "最近会遇距离和到达最近会遇点时间用于风险判断。", "Closest point and time"],
          ["行动效果", "通过新相对运动线判断避让是否有效。", "Effect of manoeuvre"]
        ]
      },
      {
        type: "cards",
        title: "ARPA 的作用与边界",
        tag: "ARPA",
        lead: "自动跟踪提高效率，但初始捕获、传感器输入和目标机动都会影响可靠性。",
        en: "ARPA improves efficiency, but acquisition, sensor inputs, and target manoeuvres affect reliability.",
        items: [
          ["目标获取", "自动或人工获取后需要等待跟踪稳定。", "Target acquisition"],
          ["矢量显示", "相对矢量和真矢量服务于不同判断。", "Relative and true vectors"],
          ["告警阈值", "CPA / TCPA 告警需要结合海区、速度和交通密度设置。", "Alarm limits"]
        ]
      },
      {
        type: "matrix",
        title: "雷达目标与 AIS 目标",
        tag: "Radar / AIS",
        lead: "教材第八章把 AIS 目标报告和雷达跟踪目标关联作为现代避碰的重要内容。",
        en: "AIS reports and radar-tracked targets must be correlated carefully in modern bridge operations.",
        cells: [
          "信息源", "优势", "限制", "使用策略",
          "Radar", "直接观测目标", "受杂波和遮挡影响", "用于非合作目标和距离方位复核",
          "AIS", "身份和航行数据", "可能延迟、错误或缺失", "用于识别与通信辅助",
          "ARPA", "自动计算运动", "依赖稳定跟踪和输入", "用于趋势分析和告警"
        ]
      },
      {
        type: "cards",
        title: "会遇局面与行动",
        tag: "COLREGs",
        lead: "雷达信息需要进入避碰规则框架，形成明确、及早、有效的行动。",
        en: "Radar information must be interpreted through COLREGs to support early, substantial, and effective action.",
        items: [
          ["对遇", "关注方位接近、相对运动线和双方行动协调。", "Head-on situation"],
          ["交叉", "判断让路船与直航船责任，避免小幅连续改向。", "Crossing situation"],
          ["追越", "识别相对方位和速度关系，保持宽裕通过距离。", "Overtaking situation"]
        ]
      },
      {
        type: "case",
        title: "课堂案例：CPA 过小的交叉会遇",
        tag: "Collision Scenario",
        lead: "避碰课件要让学生把读数、规则和操船动作连在一起。",
        en: "A collision-avoidance lesson should connect readouts, rules, and manoeuvring action.",
        caseText: "右舷前方目标稳定接近，ARPA 显示 CPA 0.4 NM、TCPA 16 min，AIS 航向与雷达真矢量存在小差异。",
        points: [
          "先复核跟踪稳定性、航向航速输入和雷达 / AIS 目标关联。",
          "判断会遇局面和本船责任，形成及早、明显的避让行动。",
          "After action, verify the new vector and confirm CPA is opening."
        ]
      },
      {
        type: "closing",
        title: "本单元沉淀",
        tag: "Takeaways",
        lead: "雷达避碰能力是观测、计算、规则和操船复核的综合能力。",
        en: "Radar collision avoidance combines observation, calculation, COLREGs judgement, and post-action verification.",
        summary: "学生应能从连续目标观测出发，完成 CPA / TCPA 判断、规则分析、行动选择和行动效果复核。",
        points: [
          "ARPA supports judgement; it does not replace judgement.",
          "Radar and AIS disagreements are signals for verification.",
          "A collision-avoidance action must be checked after it is made."
        ]
      }
    ]
  }
};
