import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const out = join(root, "docs", "cpt363-2", "slides");
const assetDir = join(out, "assets");
const bookDir = join(root, "docs", "cpt363-2", "book");
mkdirSync(assetDir, { recursive: true });
mkdirSync(bookDir, { recursive: true });

const site = "https://cyberseafaring.github.io/KiNavi_Course";
const shortBook = `${site}/cpt363-2/book/`;
const longBase = `${site}/cpt363-2/ios-textbook-resources`;

const chapters = [
  {
    id: "ch01",
    slug: "chapter-01",
    no: 1,
    title: "物联网技术基础",
    subtitle: "从物理世界到数字服务的数据链",
    color: "#0b6f7a",
    accent: "#df7a25",
    lessons: ["物联网概念与系统要素", "传感器网络与嵌入式基础", "云计算、边缘计算与协同", "通用 IoT 到船联网的迁移"],
    mainline: [
      ["概念起源", "物联网把物理对象、传感器、网络、计算平台和应用服务连成持续运行的系统。"],
      ["典型应用", "智能交通、工业设备、港口设施、环境监测等场景共享同一条数据链。"],
      ["传感器网络", "采集对象、采样频率、误差来源和校准机制决定数据能否进入后续分析。"],
      ["嵌入式系统", "微控制器、实时操作系统和本地驱动负责把物理量转换成可处理的数据。"],
      ["云边协同", "边缘侧处理低时延与断链可用，云端侧负责汇聚、存储、训练和跨域服务。"],
      ["船联网衔接", "船舶是移动、弱网、强安全约束的物联网对象，后续章节在此基础上展开。"]
    ],
    concepts: ["对象标识", "感知数据", "可靠传输", "边缘节点", "云端服务", "应用闭环"],
    scenario: "一艘训练船把温湿度、舱室状态和定位信息上传到岸端平台，形成最小物联网系统。",
    pipeline: ["物理量", "传感器", "嵌入式节点", "网络传输", "云边处理", "应用服务"],
    metrics: ["采样频率", "误差范围", "时间戳", "功耗", "网络可用率", "数据完整率"],
    applications: [
      ["最小系统", "传感器、采集程序、消息传输和展示页面构成最小可运行闭环。"],
      ["误差控制", "校准、滤波和异常值标注让数据进入后续章节的融合与治理。"],
      ["边缘处理", "本地阈值判断、缓存和摘要上传降低带宽消耗。"],
      ["云端汇聚", "跨设备、跨时间的历史数据支持趋势分析和服务开发。"],
      ["设备管理", "在线状态、版本、心跳和告警构成基础运维能力。"],
      ["船舶迁移", "船端设备需要面对供电、振动、盐雾、弱网和安全边界。"]
    ],
    risks: ["只记定义而忽略数据链", "把云端当作唯一计算位置", "忽视传感器误差与时间语义", "把演示系统误认为工程系统"],
    outputs: ["画出最小 IoT 四层图", "解释边缘计算的必要性", "说明物理量如何进入应用服务"],
    resources: [
      ["教材第 1 章", `${longBase}/chapters/ch01/index.html`],
      ["L01 概念发展历程", `${longBase}/lectures/L01/index.html`],
      ["L02 核心技术栈", `${longBase}/lectures/L02/index.html`],
      ["Lab01 树莓派环境", `${longBase}/labs/lab01/index.html`],
      ["Python 基础教程", `${longBase}/tutorials/python-basics/index.html`],
      ["树莓派教程", `${longBase}/tutorials/raspberry-pi/index.html`]
    ]
  },
  {
    id: "ch02",
    slug: "chapter-02",
    no: 2,
    title: "船联网技术演变",
    subtitle: "从船舶数字化到船岸协同服务",
    color: "#144d8c",
    accent: "#d59d2a",
    lessons: ["船联网的对象范围", "AIS 的基础作用与局限", "e-Navigation 与服务化演进", "航区差异与失效模式"],
    mainline: [
      ["概念边界", "船联网覆盖船端设备、通信链路、岸端服务和业务协同，边界随应用目标变化。"],
      ["对象范围", "船舶、船员、岸基中心、港口、监管机构和服务商共同构成协同网络。"],
      ["AIS 基础", "AIS 提供身份、位置、航向和速度等基础态势信息，是海上协同的重要底座。"],
      ["岸端服务", "岸端系统把多船数据转化为监管、运维、航行支持和绿色航运服务。"],
      ["e-Navigation", "国际海事数字化共识推动信息标准化、服务化和跨主体共享。"],
      ["发展趋势", "智能航海、绿色航运和标准化演进把船联网推向更高层次应用。"]
    ],
    concepts: ["广义船联网", "狭义船联网", "AIS", "e-Navigation", "船岸协同", "航区差异"],
    scenario: "同一艘船在港区、近岸和远洋三类航区内，信息协同对象、链路条件和服务需求明显不同。",
    pipeline: ["船端数字化", "身份与位置共享", "岸端汇聚", "服务化协同", "标准化接口", "智能应用"],
    metrics: ["覆盖范围", "更新周期", "可见对象", "服务对象", "链路条件", "失效后果"],
    applications: [
      ["港区协同", "靠离泊、引航、拖轮和港口调度依赖高频、低时延信息交换。"],
      ["近岸监管", "交通组织、风险预警和应急响应需要多源态势融合。"],
      ["远洋支持", "卫星链路、摘要同步和远程运维成为关键能力。"],
      ["AIS 解码", "原始 NMEA 报文经解析后形成结构化位置与航行状态。"],
      ["服务目录", "航行警告、气象海况、交通建议和能效报告逐步服务化。"],
      ["标准连接", "统一数据模型和服务描述降低跨机构协同成本。"]
    ],
    risks: ["把 AIS 等同于完整船联网", "忽略港区与远洋差异", "只看技术不看协同主体", "把历史演进讲成孤立名词"],
    outputs: ["界定广义与狭义船联网", "说明 AIS 的基础作用与局限", "区分不同航区的信息需求"],
    resources: [
      ["教材第 2 章", `${longBase}/chapters/ch02/index.html`],
      ["L03 概念边界", `${longBase}/lectures/L03/index.html`],
      ["L04 AIS 协同基础", `${longBase}/lectures/L04/index.html`],
      ["AIS 报文解析", `${longBase}/labs/lab03/index.html`],
      ["AIS NMEA 样本", `${longBase}/datasets/ais-samples/ais_nmea_sample.txt`],
      ["AIS 解码表", `${longBase}/datasets/ais-samples/ais_decoded_sample.csv`]
    ]
  },
  {
    id: "ch03",
    slug: "chapter-03",
    no: 3,
    title: "船联网体系架构",
    subtitle: "船端、链路、岸端如何拼成系统",
    color: "#0f5a4c",
    accent: "#cc5a43",
    lessons: ["分层模型与职责边界", "船端系统与边缘节点", "岸端接入与服务门户", "缓存补传、降级与追溯"],
    mainline: [
      ["分层模型", "分层用于划清感知、传输、计算和应用之间的职责，降低系统复杂度。"],
      ["协同关系", "感知层提供数据，传输层保证可达，计算层完成处理，应用层形成业务价值。"],
      ["船端系统", "船载网关、边缘节点和设备接口负责船上数据汇聚与本地处理。"],
      ["岸端系统", "接入、汇聚、治理、分析和门户服务构成岸端数字基础设施。"],
      ["接口类型", "设备接口、消息接口和服务接口分别解决接入、交换和业务调用问题。"],
      ["运行策略", "缓存补传、多链路调度、降级运行和日志追溯保证海上条件下仍可运行。"]
    ],
    concepts: ["感知层", "传输层", "计算层", "应用层", "船载网关", "岸端服务"],
    scenario: "远洋航行中卫星链路不稳定，船端网关先本地缓存并生成摘要，链路恢复后补传完整数据。",
    pipeline: ["设备接入", "船端网关", "链路调度", "岸端接入", "数据治理", "业务门户"],
    metrics: ["接口类型", "消息格式", "缓存队列", "重传次数", "服务可用率", "审计日志"],
    applications: [
      ["架构分层", "每层只承担明确职责，跨层协同通过数据和服务边界完成。"],
      ["船端边缘", "弱网条件下保留本地判断、临时存储和关键告警能力。"],
      ["岸端汇聚", "多船数据进入统一治理流程，服务不同业务部门。"],
      ["消息接口", "时间戳、来源、质量标注和版本号使数据可以追溯。"],
      ["降级运行", "关键功能保留、非关键功能延后，系统状态保持可解释。"],
      ["运维追溯", "日志、配置、版本和链路记录支持问题定位。"]
    ],
    risks: ["把架构图画成设备清单", "只讨论正常联网状态", "接口字段缺少时间语义", "忽视日志与版本追溯"],
    outputs: ["画出船端/链路/岸端结构", "说明三类接口的差异", "解释缓存补传为什么属于架构能力"],
    resources: [
      ["教材第 3 章", `${longBase}/chapters/ch03/index.html`],
      ["L05 分层架构", `${longBase}/lectures/L05/index.html`],
      ["L06 船岸协同", `${longBase}/lectures/L06/index.html`],
      ["分层架构交互图", `${longBase}/interactive/diagrams/layered-architecture/index.html`],
      ["交互内容总览", `${longBase}/interactive/index.html`]
    ]
  },
  {
    id: "ch04",
    slug: "chapter-04",
    no: 4,
    title: "船载感知信息采集",
    subtitle: "船上数据从哪里来，为什么需要标注质量",
    color: "#7a3d12",
    accent: "#147d7f",
    lessons: ["船舶自身状态感知", "周边交通态势感知", "运行状态与能耗采集", "多源互补与质量标注"],
    mainline: [
      ["自身状态", "定位、时间基准、航向姿态、速度和航程描述船舶自身运动状态。"],
      ["周边态势", "AIS、雷达、视觉和声呐从不同角度刻画周边目标与环境。"],
      ["运行状态", "主机、电力、机舱、能耗和舱室监测反映船舶运行健康状况。"],
      ["质量问题", "缺失、漂移、延迟、重复和异常值都需要被识别与标注。"],
      ["多源互补", "不同传感器的优势互补依赖时间同步、空间对齐和目标关联。"],
      ["感知闭环", "弱网断链条件下，船端仍需完成本地采集、校核、缓存和告警。"]
    ],
    concepts: ["GNSS", "AIS", "雷达", "视觉", "声呐", "质量标注"],
    scenario: "同一目标在 AIS、雷达和视觉中出现时间差，融合前必须确认时间基准和目标关联关系。",
    pipeline: ["自身状态", "周边态势", "运行状态", "时间同步", "质量标注", "融合使用"],
    metrics: ["时间精度", "空间误差", "目标置信度", "缺失率", "漂移程度", "同步偏差"],
    applications: [
      ["定位链条", "GNSS 与惯性/姿态信息共同形成船舶自身状态基础。"],
      ["AIS 态势", "身份与航行状态便于协同，但存在更新周期和报文质量限制。"],
      ["雷达目标", "雷达对非合作目标有价值，需要目标检测与跟踪。"],
      ["视觉识别", "图像可用于船型、障碍物和环境识别，受光照与天气影响。"],
      ["设备监测", "主机、电力和能耗数据支持运维与绿色航运。"],
      ["质量字段", "confidence、quality、source 和 timestamp 让数据进入融合流程。"]
    ],
    risks: ["不同时间基准混用", "把单一传感器结果当作真实态势", "缺少质量字段", "弱网下采集链条中断"],
    outputs: ["说明三类感知链条", "设计质量标注字段", "举例解释多源同步失败的后果"],
    resources: [
      ["教材第 4 章", `${longBase}/chapters/ch04/index.html`],
      ["L07 感知链条", `${longBase}/lectures/L07/index.html`],
      ["L08 数据质量", `${longBase}/lectures/L08/index.html`],
      ["Lab02 传感器采集", `${longBase}/labs/lab02/index.html`],
      ["Lab06 视觉船舶检测", `${longBase}/labs/lab06/index.html`],
      ["计算机视觉教程", `${longBase}/tutorials/computer-vision/index.html`],
      ["船舶图像样本", `${longBase}/datasets/ship-images/sample-ship-01.svg`]
    ]
  },
  {
    id: "ch05",
    slug: "chapter-05",
    no: 5,
    title: "海上通信网络基础",
    subtitle: "覆盖、时延、费用和可靠性的工程取舍",
    color: "#243f73",
    accent: "#2e8a57",
    lessons: ["通信链路的位置与指标", "船内网络与本地汇聚", "船船与船岸通信", "多链路管理与降级"],
    mainline: [
      ["链路位置", "通信层连接船端感知与岸端服务，是船联网持续协同的关键通道。"],
      ["船内网络", "船内网络完成设备分区、本地汇聚和协议转换。"],
      ["船船通信", "AIS、VHF、VDES 等链路支持近距离协同和安全信息交换。"],
      ["船岸通信", "蜂窝、卫星、北斗短报文和港区专网覆盖不同海区与业务。"],
      ["多链路管理", "业务分级、链路探测、缓存补传和安全接入共同保障关键业务。"],
      ["性能边界", "带宽、时延、抖动、费用、覆盖和稳定性决定链路选型。"]
    ],
    concepts: ["带宽", "时延", "抖动", "丢包", "缓存补传", "链路优先级"],
    scenario: "船舶从港区驶向远洋，通信从港区专网切到蜂窝再到卫星，业务同步策略随链路条件变化。",
    pipeline: ["船内采集", "本地汇聚", "链路探测", "业务分级", "多链路选择", "补传对账"],
    metrics: ["带宽", "时延", "抖动", "费用", "覆盖", "安全接入"],
    applications: [
      ["船内分区", "导航、机舱、生活与外部接入需要清晰分区，降低风险扩散。"],
      ["AIS/VHF", "近距离安全协同强调可达性和规范报文。"],
      ["卫星通信", "远洋场景依赖卫星，成本和带宽约束要求摘要与批传。"],
      ["蜂窝网络", "近岸高带宽链路适合图像、日志和批量数据上传。"],
      ["北斗短报文", "短消息适合关键状态、位置和应急信息。"],
      ["缓存补传", "队列长度、重试次数和幂等标识决定补传可靠性。"]
    ],
    risks: ["只追求高带宽", "忽略抖动对实时业务的影响", "关键业务与批量同步混用同一策略", "补传缺少幂等设计"],
    outputs: ["比较不同链路特征", "设计三类业务优先级", "解释缓存补传需要哪些字段"],
    resources: [
      ["教材第 5 章", `${longBase}/chapters/ch05/index.html`],
      ["L09 链路特性", `${longBase}/lectures/L09/index.html`],
      ["L10 多链路降级", `${longBase}/lectures/L10/index.html`],
      ["Lab04 NMEA 分析", `${longBase}/labs/lab04/index.html`],
      ["NMEA 样本", `${longBase}/datasets/nmea-logs/nmea_sample.txt`],
      ["通信日志", `${longBase}/datasets/comm-logs/comm_log_sample.csv`],
      ["延迟样本", `${longBase}/datasets/comm-logs/latency_data.csv`]
    ]
  },
  {
    id: "ch06",
    slug: "chapter-06",
    no: 6,
    title: "船联网数据治理",
    subtitle: "把原始数据变成可共享、可分析、可追溯的信息产品",
    color: "#4b587c",
    accent: "#b64f3a",
    lessons: ["数据类型与时间语义", "字典、解析与异常处理", "分层存储与融合分析", "一致性、补传和版本对账"],
    mainline: [
      ["类型分层", "原始报文、结构化记录、融合结果和业务产品具有不同治理要求。"],
      ["时间语义", "采集时间、到达时间和处理时间要分清，避免轨迹和事件错位。"],
      ["数据字典", "字段名、单位、坐标、精度和版本统一是跨系统共享的基础。"],
      ["解析流程", "真实样例需要处理异常、缺失、重复、非法值和来源差异。"],
      ["分层存储", "船端侧重可用与补传，岸端侧重历史、检索、分析和共享。"],
      ["一致性治理", "缓存补传、幂等标识、版本对账和审计记录保证结果可信。"]
    ],
    concepts: ["原始层", "清洗层", "融合层", "产品层", "幂等", "版本对账"],
    scenario: "AIS 轨迹、机舱状态和通信日志在不同时间到达，岸端需要完成对齐、清洗、融合和共享。",
    pipeline: ["原始采集", "解析校验", "字典映射", "异常处理", "融合分析", "共享服务"],
    metrics: ["字段单位", "时间语义", "缺失率", "重复率", "版本号", "审计记录"],
    applications: [
      ["AIS 解析", "原始 NMEA 报文转换为 MMSI、经纬度、航速和航向等字段。"],
      ["轨迹清洗", "时间排序、异常跳点、速度阈值和重复点处理形成可用轨迹。"],
      ["数据字典", "同一字段在不同系统内的名称、单位和精度需要统一。"],
      ["融合对齐", "不同来源数据按时间和对象进行对齐，形成综合态势。"],
      ["分层存储", "原始层保留追溯，产品层服务展示、告警和统计。"],
      ["版本对账", "补传数据进入系统后，需要确认是否重复、覆盖或新增。"]
    ],
    risks: ["混用三类时间", "缺少字段单位", "清洗过程不可追溯", "补传数据造成重复统计"],
    outputs: ["区分三类时间语义", "设计最小数据字典", "说明轨迹清洗和版本对账流程"],
    resources: [
      ["教材第 6 章", `${longBase}/chapters/ch06/index.html`],
      ["L11 解析存储", `${longBase}/lectures/L11/index.html`],
      ["L12 融合分析", `${longBase}/lectures/L12/index.html`],
      ["Lab05 轨迹可视化", `${longBase}/labs/lab05/index.html`],
      ["Lab07 多源融合", `${longBase}/labs/lab07/index.html`],
      ["轨迹数据", `${longBase}/datasets/ais-samples/vessel_tracks.csv`],
      ["治理批次样本", `${longBase}/datasets/governance/ais_quality_batch.csv`],
      ["版本审计样本", `${longBase}/datasets/governance/version_audit_sample.csv`]
    ]
  },
  {
    id: "ch07",
    slug: "chapter-07",
    no: 7,
    title: "船联网安全机制",
    subtitle: "在攻击、误操作和弱网条件下保持可信与可用",
    color: "#4f334f",
    accent: "#c87b2f",
    lessons: ["安全目标与威胁模型", "攻击面与风险分级", "认证、加密、审计与分区", "远程运维、补丁和降级"],
    mainline: [
      ["安全目标", "船联网安全同时关注机密性、完整性、可用性、可追溯和业务连续性。"],
      ["威胁模型", "攻击者能力、入口、目标资产和可能后果共同构成风险分析框架。"],
      ["攻击面", "设备侧、网络侧、数据侧和人员流程侧都可能引入风险。"],
      ["防护机制", "身份认证、访问控制、加密、完整性校验和日志审计形成基础防线。"],
      ["可用性协调", "安全策略需要服务航行安全，关键业务进入可解释的降级状态。"],
      ["运维合规", "远程运维、补丁、备份、恢复和合规记录支撑长期运行。"]
    ],
    concepts: ["身份认证", "访问控制", "加密", "完整性", "审计日志", "降级运行"],
    scenario: "岸端远程维护船载网关时，系统需要身份校验、最小权限、操作记录和异常回退。",
    pipeline: ["资产识别", "威胁建模", "分区隔离", "访问控制", "日志审计", "应急恢复"],
    metrics: ["资产等级", "访问权限", "加密状态", "日志完整性", "告警级别", "恢复时间"],
    applications: [
      ["设备安全", "默认口令、固件版本和物理接入是船端设备常见风险点。"],
      ["网络分区", "导航关键区、业务区和外部接入区需要明确边界。"],
      ["数据保护", "加密、签名和校验保护传输与存储过程中的完整性。"],
      ["审计日志", "登录、配置变更、数据访问和远程命令都需要可追溯。"],
      ["降级策略", "弱网或攻击状态下保留关键安全信息，暂停低优先级服务。"],
      ["备份恢复", "配置备份、版本管理和恢复流程决定事故后恢复速度。"]
    ],
    risks: ["安全机制只停留在术语", "远程运维权限过大", "日志不可追溯", "弱网时简单关闭安全控制"],
    outputs: ["画出最小安全分区", "写出远程运维访问规则", "说明安全事件如何影响航行风险"],
    resources: [
      ["教材第 7 章", `${longBase}/chapters/ch07/index.html`],
      ["L13 威胁模型", `${longBase}/lectures/L13/index.html`],
      ["L14 降级运行", `${longBase}/lectures/L14/index.html`],
      ["Lab08 安全实验", `${longBase}/labs/lab08/index.html`],
      ["安全日志", `${longBase}/datasets/security/security_log_sample.csv`],
      ["异常数据", `${longBase}/datasets/security/anomaly_data.csv`]
    ]
  },
  {
    id: "ch08",
    slug: "chapter-08",
    no: 8,
    title: "典型应用发展趋势",
    subtitle: "把前七章能力落到船岸协同、监管、运维和绿色航运",
    color: "#0d5261",
    accent: "#af5d2c",
    lessons: ["船岸协同航行支持", "海事监管与应急取证", "远程运维与状态监控", "绿色航运与智能航海"],
    mainline: [
      ["航行支持", "船岸协同通过态势共享、风险识别和动态优化提升航行服务能力。"],
      ["监管服务", "海事监管和应急响应依赖可追溯数据、轨迹分析和事件记录。"],
      ["远程运维", "设备状态、告警、版本和维修记录支撑岸端运维协同。"],
      ["绿色航运", "能效指标、燃油消耗、航速优化和排放合规成为重要应用方向。"],
      ["智能航海", "人机协同、责任边界和自主能力评估连接未来 MASS 与船联网。"],
      ["测试评估", "需求表达、标准约束、数据质量和场景验证决定应用能否落地。"]
    ],
    concepts: ["航行支持", "监管服务", "远程运维", "能效指标", "人机协同", "测试评估"],
    scenario: "一条航线从港口出发进入远洋，船岸系统持续提供交通态势、设备状态、能效优化和风险记录。",
    pipeline: ["业务需求", "数据输入", "模型处理", "服务输出", "边界说明", "评估改进"],
    metrics: ["风险等级", "响应时间", "设备健康", "燃油消耗", "排放指标", "服务可用率"],
    applications: [
      ["船岸协同", "岸端提供态势、气象、航线和交通建议，船端保留航行决策责任边界。"],
      ["动态优化", "速度、航线、天气和港口窗口共同影响能效与到港计划。"],
      ["海事监管", "轨迹、身份、事件和通信记录支持监管服务与应急处置。"],
      ["远程运维", "状态监控、告警分级和备件计划减少故障影响。"],
      ["绿色航运", "能效和排放数据需要来源、口径和计算过程可追溯。"],
      ["智能航海", "船联网为智能航海提供数据、链路、治理和安全基础。"]
    ],
    risks: ["只展示炫酷应用而忽略输入数据", "服务边界不清", "能效指标缺少数据来源", "应用验证缺少场景覆盖"],
    outputs: ["描述一个应用的输入、处理和输出", "说明船岸协同支持的边界", "解释绿色航运指标的数据链"],
    resources: [
      ["教材第 8 章", `${longBase}/chapters/ch08/index.html`],
      ["L15 船岸协同", `${longBase}/lectures/L15/index.html`],
      ["L16 绿色航运", `${longBase}/lectures/L16/index.html`],
      ["轨迹回放", `${longBase}/interactive/simulations/trajectory-player/index.html`],
      ["海事数据教程", `${longBase}/tutorials/maritime-data/index.html`],
      ["数据资源总览", `${longBase}/datasets/index.html`]
    ]
  }
];

const slides = Object.fromEntries(chapters.map(ch => [ch.slug, buildSlides(ch)]));

writeFileSync(join(out, "deck-data.js"), `window.KINAVI_CPT3632_DECKS = ${JSON.stringify(slides, null, 2)};\n`);
writeFileSync(join(out, "deck.js"), deckJs());
writeFileSync(join(out, "deck.css"), deckCss());
writeFileSync(join(out, "index.html"), indexHtml());
for (const chapter of chapters) {
  writeFileSync(join(out, `${chapter.slug}.html`), deckHtml(chapter));
  writeFileSync(join(assetDir, `${chapter.id}.svg`), chapterSvg(chapter));
}
writeFileSync(join(bookDir, "index.html"), bookHtml());

function buildSlides(ch) {
  const lessonCards = ch.lessons.map((title, i) => [`第 ${i + 1} 课时`, title]);
  const mainSlides = ch.mainline.map((item, i) => ({
    type: "focus",
    title: `${String(i + 1).padStart(2, "0")} ${item[0]}`,
    tag: "教材主线",
    figure: String(i + 1),
    lead: item[1],
    points: [
      `在系统中的位置：${ch.pipeline[Math.min(i, ch.pipeline.length - 1)]}`,
      `关联指标：${ch.metrics[i % ch.metrics.length]}`,
      `后续连接：${ch.applications[i % ch.applications.length][0]}`
    ]
  }));
  const appSlides = ch.applications.map((item, i) => ({
    type: "cards",
    title: `${String(i + 1).padStart(2, "0")} ${item[0]}`,
    tag: "应用展开",
    lead: item[1],
    items: [
      ["输入", `${ch.pipeline[i % ch.pipeline.length]} 产生的数据或状态。`],
      ["处理", `${item[1]}`],
      ["输出", `${ch.metrics[i % ch.metrics.length]} 被转化为可判断、可共享的信息。`]
    ]
  }));
  return {
    title: ch.title,
    subtitle: ch.subtitle,
    chapter: `Chapter ${ch.no}`,
    shortBook,
    visual: `assets/${ch.id}.svg`,
    color: ch.color,
    accent: ch.accent,
    references: ch.resources.map(([label, url]) => ({ label, url })),
    slides: [
      {
        type: "cover",
        title: ch.title,
        tag: `Chapter ${ch.no}`,
        lead: ch.subtitle,
        meta: ["船联网技术基础", "4 课时", "本科课程"],
        links: [{ label: "数字教材短链接", url: shortBook }]
      },
      {
        type: "cards",
        title: "本章位置",
        tag: "32 课时结构",
        lead: `第 ${ch.no} 章对应 4 个课时，围绕“${ch.subtitle}”展开。`,
        items: lessonCards
      },
      {
        type: "process",
        title: "四课时路径",
        tag: "学习路线",
        steps: ch.lessons.map((x, i) => [`第 ${i + 1} 课时`, x])
      },
      {
        type: "chips",
        title: "术语坐标",
        tag: "核心词",
        lead: "本章先把术语放到系统位置中理解，再进入案例、样本和应用边界。",
        chips: ch.concepts
      },
      {
        type: "pipeline",
        title: "系统链路",
        tag: "从输入到服务",
        steps: ch.pipeline
      },
      ...mainSlides,
      {
        type: "matrix",
        title: "概念矩阵",
        tag: "关系辨析",
        cells: matrixCells(ch)
      },
      {
        type: "scenario",
        title: "典型场景",
        tag: "场景入口",
        lead: ch.scenario,
        points: [
          `关键对象：${ch.concepts.slice(0, 3).join("、")}`,
          `关键链路：${ch.pipeline.slice(0, 4).join(" -> ")}`,
          `关键指标：${ch.metrics.slice(0, 4).join("、")}`
        ]
      },
      {
        type: "cards",
        title: "第一次课时块的结构沉淀",
        tag: "结构整合",
        lead: "前两个课时负责建立概念边界、系统位置和技术链路。",
        items: [
          ["概念", ch.concepts.slice(0, 3).join("、")],
          ["链路", ch.pipeline.slice(0, 4).join(" -> ")],
          ["指标", ch.metrics.slice(0, 4).join("、")]
        ]
      },
      {
        type: "resources",
        title: "教材与范例资源",
        tag: "资源入口",
        lead: "以下入口来自已整理的教材数字资源，保留八章主线内容。",
        resources: ch.resources.slice(0, 4).map(([label, url]) => ({ label, url }))
      },
      {
        type: "divider",
        title: "从教材概念进入工程样本",
        tag: "第二次课时块",
        lead: "后两个课时把本章概念放入数据样本、实验入口、故障限制和工程取舍。"
      },
      ...appSlides,
      {
        type: "cards",
        title: "限制与风险",
        tag: "工程边界",
        lead: "真实系统的价值来自对限制条件的处理。",
        items: ch.risks.slice(0, 4).map((x, i) => [`边界 ${i + 1}`, x])
      },
      {
        type: "cards",
        title: "指标与字段",
        tag: "数据表达",
        lead: "指标让本章概念能够进入报文、日志、表格和服务接口。",
        items: ch.metrics.slice(0, 6).map((x, i) => [`指标 ${i + 1}`, x])
      },
      {
        type: "pipeline",
        title: "案例链路",
        tag: "从问题到服务",
        steps: ch.pipeline
      },
      {
        type: "cards",
        title: "对象、数据与服务",
        tag: "三层对应",
        lead: "同一个问题可以从物理对象、数据表达和服务输出三个层次理解。",
        items: [
          ["对象层", `${ch.concepts[0]}、${ch.concepts[1]} 是本章首先识别的对象。`],
          ["数据层", `${ch.metrics[0]}、${ch.metrics[1]} 让对象状态进入可计算表达。`],
          ["服务层", `${ch.applications[0][0]}、${ch.applications[1][0]} 把数据转化为业务能力。`]
        ]
      },
      {
        type: "cards",
        title: "运行条件与限制",
        tag: "海上约束",
        lead: "船联网系统需要在移动平台、弱网链路和安全边界下保持稳定表达。",
        items: [
          ["移动平台", "船舶位置、姿态、环境和业务状态持续变化。"],
          ["链路波动", "带宽、时延、费用和覆盖共同影响数据同步策略。"],
          ["安全边界", "远程接入、数据共享和设备控制需要明确权限与审计。"]
        ]
      },
      {
        type: "cards",
        title: "样本分析路径",
        tag: "从文件到判断",
        lead: "教材资源中的报文、日志、轨迹和图像样本都可以按统一路径分析。",
        items: [
          ["读取", "确认文件来源、字段含义、编码格式和时间范围。"],
          ["校核", "检查缺失、重复、异常值、单位和坐标口径。"],
          ["解释", "把样本结果放回航行、运维、监管或能效场景。"]
        ]
      },
      {
        type: "matrix",
        title: "整章结构表",
        tag: "结构总览",
        cells: [
          "层次", "问题", "表达", "输出",
          "概念层", ch.subtitle, ch.concepts.slice(0, 3).join("、"), ch.outputs[0],
          "系统层", ch.pipeline.slice(0, 3).join(" -> "), ch.metrics.slice(0, 3).join("、"), ch.outputs[1],
          "应用层", ch.applications.slice(0, 2).map(x => x[0]).join("、"), ch.resources.slice(0, 2).map(x => x[0]).join("、"), ch.outputs[2]
        ]
      },
      {
        type: "resources",
        title: "实验、数据与交互入口",
        tag: "资源入口",
        lead: "这些入口用于把章节知识落到可查看、可运行、可分析的对象。",
        resources: ch.resources.slice(4).map(([label, url]) => ({ label, url }))
      },
      {
        type: "cards",
        title: "章节输出",
        tag: "学习成果",
        lead: "本章完成后，应能把概念、链路和数据表达连成完整说明。",
        items: ch.outputs.map((x, i) => [`输出 ${i + 1}`, x])
      },
      {
        type: "cards",
        title: "与前后章节的连接",
        tag: "全书骨架",
        lead: "船联网教材的八章内容按“技术底座 -> 系统结构 -> 数据链路 -> 应用趋势”推进。",
        items: [
          ["上一层基础", ch.no === 1 ? "通用物联网和工程系统思维" : `第 ${ch.no - 1} 章提供前置边界与能力`],
          ["本章贡献", ch.subtitle],
          ["下一层去向", ch.no === 8 ? "综合应用、项目设计和未来智能航海" : `第 ${ch.no + 1} 章继续展开相关技术链条`]
        ]
      },
      {
        type: "cards",
        title: "四课时分配",
        tag: "时间结构",
        lead: "每章对应 4 个课时，建议按两次连续学习组织。",
        items: lessonCards
      },
      {
        type: "cards",
        title: "常见误解",
        tag: "概念校准",
        lead: "下面的表述会削弱对船联网工程系统的理解。",
        items: ch.risks.slice(0, 3).map((x, i) => [`误解 ${i + 1}`, x])
      },
      {
        type: "resources",
        title: "数字教材短链接",
        tag: "主入口",
        lead: "分享给学生时优先使用短入口，长路径资源仍作为后台资料库保留。",
        resources: [
          { label: "《船联网技术基础》数字教材", url: shortBook },
          { label: `第 ${ch.no} 章教材资源`, url: `${longBase}/chapters/${ch.id}/index.html` }
        ]
      },
      {
        type: "closing",
        title: "本章结论",
        tag: `Chapter ${ch.no}`,
        lead: ch.outputs.join("；"),
        points: [
          `核心链路：${ch.pipeline.join(" -> ")}`,
          `关键指标：${ch.metrics.slice(0, 5).join("、")}`,
          `下一步：进入数字教材短链接继续查看章节资源`
        ]
      }
    ]
  };
}

function matrixCells(ch) {
  const rows = ch.concepts.slice(0, 3).map((concept, i) => [concept, ch.pipeline[i], ch.metrics[i], ch.applications[i][0]]);
  return ["概念", "系统位置", "关键指标", "应用入口", ...rows.flat()];
}

function deckHtml(ch) {
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(ch.title)} - 船联网技术基础</title><link rel="stylesheet" href="deck.css?v=1"></head><body><main class="deck-shell"><div id="deck" class="deck"></div></main><nav class="deck-nav"><button id="prev" title="上一页">‹</button><span id="counter">1 / 36</span><button id="next" title="下一页">›</button><button id="overview-toggle" title="总览">O</button></nav><div class="progress"><span id="progress-bar"></span></div><div id="overview" class="overview"></div><script>window.KINAVI_CPT3632_DECK_ID="${ch.slug}";</script><script src="deck-data.js?v=1"></script><script src="deck.js?v=1"></script></body></html>\n`;
}

function indexHtml() {
  const cards = chapters.map(ch => `<a class="chapter-card" href="${ch.slug}.html">
    <span>Chapter ${ch.no}</span>
    <strong>${escapeHtml(ch.title)}</strong>
    <p>${escapeHtml(ch.subtitle)}</p>
    <em>36 页 · 4 课时</em>
  </a>`).join("");
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>船联网技术基础 HTML 课件</title><link rel="stylesheet" href="deck.css?v=1"></head><body class="index-page"><main class="index-wrap"><section class="index-hero"><p class="kicker">CPT363-2 · Nautical Internet of Things</p><h1>《船联网技术基础》八章 HTML 课件</h1><p>每章 36 页，对应 4 个课时；配套教材短链接：<a href="../book/">${shortBook}</a></p></section><section class="chapter-index">${cards}</section></main></body></html>\n`;
}

function bookHtml() {
  const rows = chapters.map(ch => `<a class="book-chapter" href="../ios-textbook-resources/chapters/${ch.id}/index.html"><b>${String(ch.no).padStart(2, "0")}</b><span>${escapeHtml(ch.title)}</span><em>${escapeHtml(ch.subtitle)}</em></a>`).join("");
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>船联网技术基础数字教材</title><style>${bookCss()}</style></head><body><main><section class="hero"><p>CPT363-2 · 短链接入口</p><h1>《船联网技术基础》数字教材</h1><strong>${shortBook}</strong><div class="actions"><a href="../ios-textbook-resources/index.html">进入完整资源平台</a><a href="../slides/">查看八章 HTML 课件</a></div></section><section><h2>八章教材内容</h2><div class="grid">${rows}</div></section></main></body></html>\n`;
}

function chapterSvg(ch) {
  const nodes = ch.pipeline.map((x, i) => `<g transform="translate(${90 + i * 145} ${250 + (i % 2) * 70})"><circle r="38" fill="${i % 2 ? ch.accent : ch.color}" opacity=".92"/><text text-anchor="middle" y="6" font-size="18" font-weight="800" fill="#fff">${escapeHtml(String(i + 1))}</text><text text-anchor="middle" y="62" font-size="18" font-weight="700" fill="#20313a">${escapeHtml(x)}</text></g>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#f6f0e4"/><stop offset="1" stop-color="#dfeeea"/></linearGradient><pattern id="p" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0v36" fill="none" stroke="#20313a" stroke-opacity=".06"/></pattern></defs><rect width="1200" height="675" fill="url(#g)"/><rect width="1200" height="675" fill="url(#p)"/><path d="M95 289 C280 130 430 440 610 280 S920 170 1080 310" fill="none" stroke="${ch.color}" stroke-width="12" stroke-linecap="round" opacity=".18"/><path d="M95 360 C310 500 480 185 675 350 S950 470 1080 255" fill="none" stroke="${ch.accent}" stroke-width="8" stroke-linecap="round" opacity=".18"/><text x="70" y="95" font-size="34" font-weight="900" fill="${ch.color}">Chapter ${ch.no}</text><text x="70" y="150" font-size="58" font-weight="900" fill="#15252d">${escapeHtml(ch.title)}</text><text x="70" y="205" font-size="28" font-weight="700" fill="#56666d">${escapeHtml(ch.subtitle)}</text>${nodes}<text x="70" y="610" font-size="23" font-weight="800" fill="#15252d">船联网技术基础 · ${escapeHtml(ch.lessons.join(" / "))}</text></svg>\n`;
}

function deckJs() {
  return `(function(){const id=window.KINAVI_CPT3632_DECK_ID;const deck=window.KINAVI_CPT3632_DECKS&&window.KINAVI_CPT3632_DECKS[id];if(!deck){document.body.innerHTML="<p style='color:white;font:22px sans-serif;padding:40px'>Deck data not found.</p>";return}document.documentElement.style.setProperty("--theme",deck.color);document.documentElement.style.setProperty("--accent",deck.accent);const root=document.getElementById("deck");const counter=document.getElementById("counter");const bar=document.getElementById("progress-bar");const overview=document.getElementById("overview");let index=readIndex();document.title=deck.title+" - 船联网技术基础";root.innerHTML=deck.slides.map(renderSlide).join("");overview.innerHTML=deck.slides.map((s,i)=>"<button class='thumb' data-goto='"+i+"'><b>"+String(i+1).padStart(2,"0")+"</b>"+esc(s.title||deck.title)+"</button>").join("");const slides=[...root.querySelectorAll(".slide")];function renderSlide(slide,i){return "<section class='slide type-"+(slide.type||"cards")+"'><div class='slide-inner layout-"+(slide.type||"cards")+"'>"+content(slide,i)+"</div><div class='page-number'>"+(i+1)+" / "+deck.slides.length+"</div></section>"}function head(s){return "<div class='slide-header'><div><div class='eyebrow'>"+esc(deck.chapter)+" · 船联网技术基础</div><h2>"+esc(s.title||"")+"</h2></div><span class='tag'>"+esc(s.tag||"")+"</span></div>"+(s.lead?"<p class='lead'>"+esc(s.lead)+"</p>":"")}function content(s,i){if(s.type==="cover")return "<div class='cover-grid'><div><div class='eyebrow'>"+esc(s.tag)+" · Nautical Internet of Things</div><h1>"+esc(s.title)+"</h1><p class='lead'>"+esc(s.lead)+"</p><div class='cover-meta'>"+s.meta.map(x=>"<span class='tag'>"+esc(x)+"</span>").join("")+"</div><a class='short-link' href='"+attr(deck.shortBook)+"' target='_blank'>"+esc(deck.shortBook)+"</a></div><img class='hero-img' src='"+attr(deck.visual)+"' alt='"+attr(deck.title)+"'></div>";if(s.type==="divider")return head(s)+"<div class='divider-panel'><strong>"+esc(s.title)+"</strong><p>"+esc(s.lead||"")+"</p></div>";if(s.type==="focus")return head(s)+"<div class='focus'><div class='big-number'>"+esc(s.figure)+"</div><div class='card major'><p>"+esc(s.lead)+"</p><ul>"+(s.points||[]).map(x=>"<li>"+esc(x)+"</li>").join("")+"</ul></div></div>";if(s.type==="process")return head(s)+"<div class='process'>"+s.steps.map((x,i)=>"<div class='step'><b>"+(i+1)+"</b><strong>"+esc(x[0])+"</strong><p>"+esc(x[1])+"</p></div>").join("")+"</div>";if(s.type==="pipeline")return head(s)+"<div class='pipe'>"+s.steps.map((x,i)=>"<div><b>"+String(i+1).padStart(2,"0")+"</b><span>"+esc(x)+"</span></div>").join("")+"</div>";if(s.type==="chips")return head(s)+"<div class='chips'>"+s.chips.map(x=>"<span>"+esc(x)+"</span>").join("")+"</div><img class='inline-visual' src='"+attr(deck.visual)+"' alt='"+attr(deck.title)+"'>";if(s.type==="matrix")return head(s)+"<div class='matrix'>"+s.cells.map((x,i)=>"<div class='"+(i<4||i%4===0?"head":"")+"'>"+esc(x)+"</div>").join("")+"</div>";if(s.type==="scenario")return head(s)+"<div class='scenario'><img src='"+attr(deck.visual)+"' alt='"+attr(deck.title)+"'><div><p>"+esc(s.lead)+"</p><ul>"+s.points.map(x=>"<li>"+esc(x)+"</li>").join("")+"</ul></div></div>";if(s.type==="resources")return head(s)+"<div class='resource-list'>"+(s.resources||[]).map(r=>"<a href='"+attr(r.url)+"' target='_blank' rel='noopener'><span>"+esc(r.label)+"</span><small>"+esc(shorten(r.url))+"</small></a>").join("")+"</div>";if(s.type==="closing")return head(s)+"<div class='closing'><p>"+esc(s.lead)+"</p><ul>"+s.points.map(x=>"<li>"+esc(x)+"</li>").join("")+"</ul></div>";return head(s)+"<div class='"+((s.items||[]).length>3?"grid four":"grid")+"'>"+(s.items||[]).map(x=>"<article class='card'><strong>"+esc(x[0])+"</strong><p>"+esc(x[1])+"</p></article>").join("")+"</div>"}function go(n){index=Math.max(0,Math.min(deck.slides.length-1,n));slides.forEach((el,i)=>el.classList.toggle("is-active",i===index));counter.textContent=(index+1)+" / "+deck.slides.length;bar.style.width=((index+1)/deck.slides.length*100)+"%";location.hash=String(index+1)}function readIndex(){const n=Number(location.hash.replace("#",""));return Number.isFinite(n)&&n>0?n-1:0}function esc(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\\"":"&quot;","'":"&#39;"}[m]))}function attr(v){return esc(v).replace(/\\n/g," ")}function shorten(u){return String(u).replace("https://cyberseafaring.github.io/KiNavi_Course/","/")}document.getElementById("prev").addEventListener("click",()=>go(index-1));document.getElementById("next").addEventListener("click",()=>go(index+1));document.getElementById("overview-toggle").addEventListener("click",()=>overview.classList.toggle("is-open"));overview.addEventListener("click",e=>{const b=e.target.closest("[data-goto]");if(b){overview.classList.remove("is-open");go(Number(b.dataset.goto))}});window.addEventListener("keydown",e=>{if(["ArrowRight"," ","PageDown"].includes(e.key))go(index+1);if(["ArrowLeft","PageUp"].includes(e.key))go(index-1);if(e.key==="Home")go(0);if(e.key==="End")go(deck.slides.length-1);if(e.key.toLowerCase()==="o")overview.classList.toggle("is-open");if(e.key.toLowerCase()==="f"&&document.fullscreenEnabled)document.documentElement.requestFullscreen();if(e.key==="Escape")overview.classList.remove("is-open")});go(index)})();\n`;
}

function deckCss() {
  return `:root{--theme:#0d5261;--accent:#c66b2f;--ink:#14232b;--muted:#576a73;--paper:#f7f2e7;--line:rgba(20,35,43,.14);--font:"Source Sans Pro","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;--serif:Georgia,"Noto Serif SC","Songti SC",serif}*{box-sizing:border-box}html,body{width:100%;height:100%;margin:0;overflow:hidden;background:#10232c;color:var(--ink);font-family:var(--font)}body{background:linear-gradient(135deg,#0b2731,#173d42 52%,#25382c)}.deck-shell{width:100vw;height:100vh;padding:26px}.deck{position:relative;width:min(100%,calc(100vh * 16 / 9));aspect-ratio:16/9;max-height:100%;margin:0 auto;overflow:hidden;border-radius:22px;background:var(--paper);box-shadow:0 30px 100px rgba(0,0,0,.4)}.slide{position:absolute;inset:0;display:none;padding:42px 56px;background:linear-gradient(rgba(20,35,43,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(20,35,43,.04) 1px,transparent 1px),linear-gradient(135deg,#f8f2e7,#fffaf0 58%,#e7f1ef);background-size:30px 30px,30px 30px,100% 100%}.slide.is-active{display:grid;animation:enter .28s ease both}@keyframes enter{from{opacity:0;transform:translateY(12px) scale(.994)}to{opacity:1;transform:none}}.slide:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--theme) 14%,transparent),transparent 28%),linear-gradient(180deg,transparent 78%,color-mix(in srgb,var(--accent) 10%,transparent));pointer-events:none}.slide-inner{position:relative;z-index:1;display:grid;height:100%;gap:18px;min-height:0}.page-number{position:absolute;top:18px;right:24px;z-index:5;min-width:76px;padding:7px 13px;border:1px solid color-mix(in srgb,var(--theme) 24%,transparent);border-radius:999px;background:rgba(255,250,240,.9);color:var(--theme);font-size:18px;font-weight:900;text-align:center;box-shadow:0 8px 24px rgba(20,35,43,.12)}h1,h2,p{margin:0}h1{font-family:var(--serif);font-size:84px;line-height:.96;color:var(--ink);max-width:760px}h2{font-size:52px;line-height:1.04;max-width:900px}.lead{font-size:29px;line-height:1.34;color:#334850;max-width:980px}.eyebrow{display:inline-flex;gap:10px;align-items:center;color:var(--theme);font-size:18px;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.eyebrow:before{content:"";width:34px;height:4px;border-radius:4px;background:var(--accent)}.tag{display:inline-flex;align-items:center;min-height:36px;padding:7px 13px;border-radius:999px;border:1px solid color-mix(in srgb,var(--theme) 18%,transparent);background:color-mix(in srgb,var(--theme) 8%,white);color:var(--theme);font-size:17px;font-weight:900}.slide-header{display:flex;justify-content:space-between;gap:26px;align-items:flex-start}.slide-header .tag{margin-right:90px}.cover-grid{display:grid;grid-template-columns:1fr 460px;gap:30px;align-items:center}.cover-meta{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0}.short-link{display:inline-block;margin-top:8px;padding:14px 18px;border-radius:16px;background:var(--ink);color:#fff;font-size:22px;font-weight:900;text-decoration:none}.hero-img,.inline-visual,.scenario img{width:100%;border-radius:20px;border:1px solid var(--line);box-shadow:0 18px 60px rgba(20,35,43,.14);background:#fff}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.grid.four{grid-template-columns:repeat(4,1fr)}.card{border:1px solid var(--line);border-radius:16px;padding:18px;background:rgba(255,255,255,.72);box-shadow:0 10px 34px rgba(20,35,43,.08)}.card strong{display:block;margin-bottom:9px;color:var(--theme);font-size:24px}.card p,.card li{font-size:21px;line-height:1.38;color:#31454e}.major p{font-size:33px;line-height:1.32}.major li{font-size:24px;margin-top:12px}.focus{display:grid;grid-template-columns:330px 1fr;gap:28px;align-items:stretch}.big-number{display:grid;place-items:center;border-radius:22px;background:linear-gradient(135deg,var(--theme),var(--accent));color:white;font:900 150px/1 var(--serif);box-shadow:0 20px 80px rgba(20,35,43,.18)}.process{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.step{padding:18px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.74)}.step b{display:grid;place-items:center;width:38px;height:38px;margin-bottom:12px;border-radius:50%;background:var(--accent);color:#fff;font-size:18px}.step strong{display:block;color:var(--theme);font-size:23px}.step p{margin-top:8px;font-size:20px;line-height:1.36;color:#344952}.pipe{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;align-items:stretch}.pipe div{position:relative;padding:20px 12px 18px;border-radius:18px;background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.62));border:1px solid var(--line);text-align:center}.pipe div:after{content:"";position:absolute;right:-13px;top:50%;width:14px;height:3px;background:var(--accent)}.pipe div:last-child:after{display:none}.pipe b{display:block;color:var(--accent);font-size:18px}.pipe span{display:block;margin-top:12px;color:var(--theme);font-size:24px;font-weight:900;line-height:1.16}.chips{display:flex;flex-wrap:wrap;gap:16px;align-content:start}.chips span{padding:16px 20px;border-radius:18px;background:var(--theme);color:white;font-size:29px;font-weight:900;box-shadow:0 12px 34px rgba(20,35,43,.12)}.inline-visual{max-height:300px;object-fit:cover}.matrix{display:grid;grid-template-columns:1fr 1.15fr 1.15fr 1.15fr;border:1px solid var(--line);border-radius:18px;overflow:hidden;background:rgba(255,255,255,.76)}.matrix div{min-height:62px;padding:14px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);font-size:21px;line-height:1.28}.matrix .head{font-weight:900;color:var(--theme);background:color-mix(in srgb,var(--theme) 10%,white)}.scenario{display:grid;grid-template-columns:460px 1fr;gap:24px;align-items:stretch}.scenario p{font-size:31px;line-height:1.34}.scenario li,.closing li{font-size:24px;line-height:1.4;margin-top:12px}.resource-list{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.resource-list a{display:grid;gap:8px;padding:19px;border-radius:16px;border:1px solid var(--line);background:rgba(255,255,255,.78);color:var(--ink);text-decoration:none}.resource-list span{font-size:25px;font-weight:900;color:var(--theme)}.resource-list small{font-size:17px;color:var(--muted);overflow-wrap:anywhere}.divider-panel,.closing{display:grid;align-content:center;gap:22px;min-height:410px;padding:34px;border-radius:24px;background:linear-gradient(135deg,var(--theme),color-mix(in srgb,var(--theme) 74%,var(--accent)));color:white;box-shadow:0 22px 80px rgba(20,35,43,.2)}.divider-panel strong{font-size:58px;line-height:1}.divider-panel p,.closing p{font-size:33px;line-height:1.34}.closing li{color:white}.deck-nav{position:fixed;left:50%;bottom:18px;z-index:10;display:flex;gap:10px;align-items:center;transform:translateX(-50%);padding:8px;border-radius:999px;background:rgba(10,24,30,.72);backdrop-filter:blur(10px)}.deck-nav button{width:42px;height:42px;border:0;border-radius:50%;background:#fff;color:var(--theme);font-size:24px;font-weight:900}.deck-nav span{min-width:86px;color:#fff;text-align:center;font-weight:900}.progress{position:fixed;left:0;right:0;bottom:0;height:5px;background:rgba(255,255,255,.12)}.progress span{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--accent),#fff)}.overview{position:fixed;right:18px;top:18px;bottom:82px;z-index:9;display:none;width:320px;padding:12px;overflow:auto;border-radius:18px;background:rgba(15,28,35,.88);backdrop-filter:blur(12px)}.overview.is-open{display:grid;align-content:start;gap:8px}.thumb{display:grid;grid-template-columns:44px 1fr;gap:10px;align-items:center;padding:10px;border:0;border-radius:12px;background:rgba(255,255,255,.08);color:white;text-align:left;font-size:14px}.thumb b{color:#f2c170}.index-page{overflow:auto;background:#f7f2e7}.index-wrap{max-width:1180px;margin:0 auto;padding:56px 28px}.index-hero h1{max-width:920px;color:#14232b}.index-hero p{font-size:24px;line-height:1.5}.kicker{color:var(--theme);font-weight:900;letter-spacing:.08em;text-transform:uppercase}.chapter-index{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:34px}.chapter-card{display:grid;gap:10px;min-height:230px;padding:22px;border-radius:18px;background:white;border:1px solid rgba(20,35,43,.12);box-shadow:0 14px 40px rgba(20,35,43,.08);text-decoration:none;color:#14232b}.chapter-card span,.chapter-card em{color:#8b4e20;font-weight:900;font-style:normal}.chapter-card strong{font-size:28px;color:#0d5261}.chapter-card p{font-size:20px;line-height:1.35}@media(max-width:900px){.deck-shell{padding:8px}.slide{padding:28px}.cover-grid,.scenario,.focus{grid-template-columns:1fr}.hero-img,.scenario img{display:none}.grid,.grid.four,.process,.resource-list,.chapter-index{grid-template-columns:1fr 1fr}.pipe{grid-template-columns:repeat(3,1fr)}h1{font-size:54px}h2{font-size:38px}.lead{font-size:23px}}\n`;
}

function bookCss() {
  return `*{box-sizing:border-box}body{margin:0;background:#f6f0e6;color:#17272f;font-family:"Source Sans Pro","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif}main{max-width:1120px;margin:0 auto;padding:56px 24px}.hero{padding:46px;border-radius:28px;background:linear-gradient(135deg,#0d5261,#214b52 62%,#af5d2c);color:white;box-shadow:0 22px 80px rgba(23,39,47,.18)}.hero p{font-size:19px;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.hero h1{margin:12px 0;font-size:58px;line-height:1}.hero strong{display:block;font-size:24px;overflow-wrap:anywhere}.actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}.actions a{padding:14px 18px;border-radius:14px;background:#fff;color:#0d5261;text-decoration:none;font-weight:900}h2{margin:42px 0 18px;font-size:34px}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.book-chapter{display:grid;grid-template-columns:58px 1fr;gap:4px 14px;padding:18px;border-radius:16px;background:white;border:1px solid rgba(23,39,47,.12);text-decoration:none;color:#17272f}.book-chapter b{grid-row:span 2;color:#af5d2c;font-size:28px}.book-chapter span{font-size:24px;font-weight:900;color:#0d5261}.book-chapter em{font-style:normal;color:#5e6e75;font-size:18px}@media(max-width:760px){.hero h1{font-size:40px}.grid{grid-template-columns:1fr}}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[m]));
}
