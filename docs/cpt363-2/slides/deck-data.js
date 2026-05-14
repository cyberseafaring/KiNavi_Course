window.KINAVI_CPT3632_DECKS = {
  "chapter-01": {
    "title": "物联网技术基础",
    "subtitle": "从物理世界到数字服务的数据链",
    "chapter": "Chapter 1",
    "shortBook": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/",
    "visual": "assets/ch01.svg",
    "color": "#0b6f7a",
    "accent": "#df7a25",
    "references": [
      {
        "label": "教材第 1 章",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch01/index.html"
      },
      {
        "label": "L01 概念发展历程",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L01/index.html"
      },
      {
        "label": "L02 核心技术栈",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L02/index.html"
      },
      {
        "label": "Lab01 树莓派环境",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab01/index.html"
      },
      {
        "label": "Python 基础教程",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/tutorials/python-basics/index.html"
      },
      {
        "label": "树莓派教程",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/tutorials/raspberry-pi/index.html"
      }
    ],
    "slides": [
      {
        "type": "cover",
        "title": "物联网技术基础",
        "tag": "Chapter 1",
        "lead": "从物理世界到数字服务的数据链",
        "meta": [
          "物联网与传感网技术",
          "4 课时",
          "本科课程"
        ],
        "links": [
          {
            "label": "数字教材与章节资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          }
        ]
      },
      {
        "type": "cards",
        "title": "本章位置",
        "tag": "32 课时结构",
        "lead": "第 1 章对应 4 个课时，围绕“从物理世界到数字服务的数据链”展开。",
        "items": [
          [
            "第 1 课时",
            "物联网概念与系统要素"
          ],
          [
            "第 2 课时",
            "传感器网络与嵌入式基础"
          ],
          [
            "第 3 课时",
            "云计算、边缘计算与协同"
          ],
          [
            "第 4 课时",
            "通用 IoT 到船联网的迁移"
          ]
        ]
      },
      {
        "type": "process",
        "title": "四课时路径",
        "tag": "学习路线",
        "steps": [
          [
            "第 1 课时",
            "物联网概念与系统要素"
          ],
          [
            "第 2 课时",
            "传感器网络与嵌入式基础"
          ],
          [
            "第 3 课时",
            "云计算、边缘计算与协同"
          ],
          [
            "第 4 课时",
            "通用 IoT 到船联网的迁移"
          ]
        ]
      },
      {
        "type": "chips",
        "title": "术语坐标",
        "tag": "核心词",
        "lead": "本章先把术语放到系统位置中理解，再进入案例、样本和应用边界。",
        "chips": [
          "对象标识",
          "感知数据",
          "可靠传输",
          "边缘节点",
          "云端服务",
          "应用闭环"
        ]
      },
      {
        "type": "pipeline",
        "title": "系统链路",
        "tag": "从输入到服务",
        "steps": [
          "物理量",
          "传感器",
          "嵌入式节点",
          "网络传输",
          "云边处理",
          "应用服务"
        ]
      },
      {
        "type": "focus",
        "title": "01 概念起源",
        "tag": "教材主线",
        "figure": "1",
        "lead": "物联网把物理对象、传感器、网络、计算平台和应用服务连成持续运行的系统。",
        "points": [
          "在系统中的位置：物理量",
          "关联指标：采样频率",
          "后续连接：最小系统"
        ]
      },
      {
        "type": "focus",
        "title": "02 典型应用",
        "tag": "教材主线",
        "figure": "2",
        "lead": "智能交通、工业设备、港口设施、环境监测等场景共享同一条数据链。",
        "points": [
          "在系统中的位置：传感器",
          "关联指标：误差范围",
          "后续连接：误差控制"
        ]
      },
      {
        "type": "focus",
        "title": "03 传感器网络",
        "tag": "教材主线",
        "figure": "3",
        "lead": "采集对象、采样频率、误差来源和校准机制决定数据能否进入后续分析。",
        "points": [
          "在系统中的位置：嵌入式节点",
          "关联指标：时间戳",
          "后续连接：边缘处理"
        ]
      },
      {
        "type": "focus",
        "title": "04 嵌入式系统",
        "tag": "教材主线",
        "figure": "4",
        "lead": "微控制器、实时操作系统和本地驱动负责把物理量转换成可处理的数据。",
        "points": [
          "在系统中的位置：网络传输",
          "关联指标：功耗",
          "后续连接：云端汇聚"
        ]
      },
      {
        "type": "focus",
        "title": "05 云边协同",
        "tag": "教材主线",
        "figure": "5",
        "lead": "边缘侧处理低时延与断链可用，云端侧负责汇聚、存储、训练和跨域服务。",
        "points": [
          "在系统中的位置：云边处理",
          "关联指标：网络可用率",
          "后续连接：设备管理"
        ]
      },
      {
        "type": "focus",
        "title": "06 船联网衔接",
        "tag": "教材主线",
        "figure": "6",
        "lead": "船舶是移动、弱网、强安全约束的物联网对象，后续章节在此基础上展开。",
        "points": [
          "在系统中的位置：应用服务",
          "关联指标：数据完整率",
          "后续连接：船舶迁移"
        ]
      },
      {
        "type": "matrix",
        "title": "概念矩阵",
        "tag": "关系辨析",
        "cells": [
          "概念",
          "系统位置",
          "关键指标",
          "应用入口",
          "对象标识",
          "物理量",
          "采样频率",
          "最小系统",
          "感知数据",
          "传感器",
          "误差范围",
          "误差控制",
          "可靠传输",
          "嵌入式节点",
          "时间戳",
          "边缘处理"
        ]
      },
      {
        "type": "scenario",
        "title": "典型场景",
        "tag": "场景入口",
        "lead": "一艘训练船把温湿度、舱室状态和定位信息上传到岸端平台，形成最小物联网系统。",
        "points": [
          "关键对象：对象标识、感知数据、可靠传输",
          "关键链路：物理量 -> 传感器 -> 嵌入式节点 -> 网络传输",
          "关键指标：采样频率、误差范围、时间戳、功耗"
        ]
      },
      {
        "type": "cards",
        "title": "第一次课时块的结构沉淀",
        "tag": "结构整合",
        "lead": "前两个课时负责建立概念边界、系统位置和技术链路。",
        "items": [
          [
            "概念",
            "对象标识、感知数据、可靠传输"
          ],
          [
            "链路",
            "物理量 -> 传感器 -> 嵌入式节点 -> 网络传输"
          ],
          [
            "指标",
            "采样频率、误差范围、时间戳、功耗"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "教材与范例资源",
        "tag": "资源入口",
        "lead": "以下入口来自已整理的教材数字资源，保留八章主线内容。",
        "resources": [
          {
            "label": "教材第 1 章",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch01/index.html"
          },
          {
            "label": "L01 概念发展历程",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L01/index.html"
          },
          {
            "label": "L02 核心技术栈",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L02/index.html"
          },
          {
            "label": "Lab01 树莓派环境",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab01/index.html"
          }
        ]
      },
      {
        "type": "divider",
        "title": "从教材概念进入工程样本",
        "tag": "第二次课时块",
        "lead": "后两个课时把本章概念放入数据样本、实验入口、故障限制和工程取舍。"
      },
      {
        "type": "cards",
        "title": "01 最小系统",
        "tag": "应用展开",
        "lead": "传感器、采集程序、消息传输和展示页面构成最小可运行闭环。",
        "items": [
          [
            "输入",
            "物理量 产生的数据或状态。"
          ],
          [
            "处理",
            "传感器、采集程序、消息传输和展示页面构成最小可运行闭环。"
          ],
          [
            "输出",
            "采样频率 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "02 误差控制",
        "tag": "应用展开",
        "lead": "校准、滤波和异常值标注让数据进入后续章节的融合与治理。",
        "items": [
          [
            "输入",
            "传感器 产生的数据或状态。"
          ],
          [
            "处理",
            "校准、滤波和异常值标注让数据进入后续章节的融合与治理。"
          ],
          [
            "输出",
            "误差范围 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "03 边缘处理",
        "tag": "应用展开",
        "lead": "本地阈值判断、缓存和摘要上传降低带宽消耗。",
        "items": [
          [
            "输入",
            "嵌入式节点 产生的数据或状态。"
          ],
          [
            "处理",
            "本地阈值判断、缓存和摘要上传降低带宽消耗。"
          ],
          [
            "输出",
            "时间戳 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "04 云端汇聚",
        "tag": "应用展开",
        "lead": "跨设备、跨时间的历史数据支持趋势分析和服务开发。",
        "items": [
          [
            "输入",
            "网络传输 产生的数据或状态。"
          ],
          [
            "处理",
            "跨设备、跨时间的历史数据支持趋势分析和服务开发。"
          ],
          [
            "输出",
            "功耗 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "05 设备管理",
        "tag": "应用展开",
        "lead": "在线状态、版本、心跳和告警构成基础运维能力。",
        "items": [
          [
            "输入",
            "云边处理 产生的数据或状态。"
          ],
          [
            "处理",
            "在线状态、版本、心跳和告警构成基础运维能力。"
          ],
          [
            "输出",
            "网络可用率 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "06 船舶迁移",
        "tag": "应用展开",
        "lead": "船端设备需要面对供电、振动、盐雾、弱网和安全边界。",
        "items": [
          [
            "输入",
            "应用服务 产生的数据或状态。"
          ],
          [
            "处理",
            "船端设备需要面对供电、振动、盐雾、弱网和安全边界。"
          ],
          [
            "输出",
            "数据完整率 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "限制与风险",
        "tag": "工程边界",
        "lead": "真实系统的价值来自对限制条件的处理。",
        "items": [
          [
            "边界 1",
            "只记定义而忽略数据链"
          ],
          [
            "边界 2",
            "把云端当作唯一计算位置"
          ],
          [
            "边界 3",
            "忽视传感器误差与时间语义"
          ],
          [
            "边界 4",
            "把演示系统误认为工程系统"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "指标与字段",
        "tag": "数据表达",
        "lead": "指标让本章概念能够进入报文、日志、表格和服务接口。",
        "items": [
          [
            "指标 1",
            "采样频率"
          ],
          [
            "指标 2",
            "误差范围"
          ],
          [
            "指标 3",
            "时间戳"
          ],
          [
            "指标 4",
            "功耗"
          ],
          [
            "指标 5",
            "网络可用率"
          ],
          [
            "指标 6",
            "数据完整率"
          ]
        ]
      },
      {
        "type": "pipeline",
        "title": "案例链路",
        "tag": "从问题到服务",
        "steps": [
          "物理量",
          "传感器",
          "嵌入式节点",
          "网络传输",
          "云边处理",
          "应用服务"
        ]
      },
      {
        "type": "cards",
        "title": "对象、数据与服务",
        "tag": "三层对应",
        "lead": "同一个问题可以从物理对象、数据表达和服务输出三个层次理解。",
        "items": [
          [
            "对象层",
            "对象标识、感知数据 是本章首先识别的对象。"
          ],
          [
            "数据层",
            "采样频率、误差范围 让对象状态进入可计算表达。"
          ],
          [
            "服务层",
            "最小系统、误差控制 把数据转化为业务能力。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "运行条件与限制",
        "tag": "海上约束",
        "lead": "船联网系统需要在移动平台、弱网链路和安全边界下保持稳定表达。",
        "items": [
          [
            "移动平台",
            "船舶位置、姿态、环境和业务状态持续变化。"
          ],
          [
            "链路波动",
            "带宽、时延、费用和覆盖共同影响数据同步策略。"
          ],
          [
            "安全边界",
            "远程接入、数据共享和设备控制需要明确权限与审计。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "样本分析路径",
        "tag": "从文件到判断",
        "lead": "教材资源中的报文、日志、轨迹和图像样本都可以按统一路径分析。",
        "items": [
          [
            "读取",
            "确认文件来源、字段含义、编码格式和时间范围。"
          ],
          [
            "校核",
            "检查缺失、重复、异常值、单位和坐标口径。"
          ],
          [
            "解释",
            "把样本结果放回航行、运维、监管或能效场景。"
          ]
        ]
      },
      {
        "type": "matrix",
        "title": "整章结构表",
        "tag": "结构总览",
        "cells": [
          "层次",
          "问题",
          "表达",
          "输出",
          "概念层",
          "从物理世界到数字服务的数据链",
          "对象标识、感知数据、可靠传输",
          "画出最小 IoT 四层图",
          "系统层",
          "物理量 -> 传感器 -> 嵌入式节点",
          "采样频率、误差范围、时间戳",
          "解释边缘计算的必要性",
          "应用层",
          "最小系统、误差控制",
          "教材第 1 章、L01 概念发展历程",
          "说明物理量如何进入应用服务"
        ]
      },
      {
        "type": "resources",
        "title": "实验、数据与交互入口",
        "tag": "资源入口",
        "lead": "这些入口用于把章节知识落到可查看、可运行、可分析的对象。",
        "resources": [
          {
            "label": "Python 基础教程",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/tutorials/python-basics/index.html"
          },
          {
            "label": "树莓派教程",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/tutorials/raspberry-pi/index.html"
          }
        ]
      },
      {
        "type": "cards",
        "title": "章节输出",
        "tag": "学习成果",
        "lead": "本章完成后，应能把概念、链路和数据表达连成完整说明。",
        "items": [
          [
            "输出 1",
            "画出最小 IoT 四层图"
          ],
          [
            "输出 2",
            "解释边缘计算的必要性"
          ],
          [
            "输出 3",
            "说明物理量如何进入应用服务"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "与前后章节的连接",
        "tag": "全书骨架",
        "lead": "船联网教材的八章内容按“技术底座 -> 系统结构 -> 数据链路 -> 应用趋势”推进。",
        "items": [
          [
            "上一层基础",
            "通用物联网和工程系统思维"
          ],
          [
            "本章贡献",
            "从物理世界到数字服务的数据链"
          ],
          [
            "下一层去向",
            "第 2 章继续展开相关技术链条"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "四课时分配",
        "tag": "时间结构",
        "lead": "每章对应 4 个课时，建议按两次连续学习组织。",
        "items": [
          [
            "第 1 课时",
            "物联网概念与系统要素"
          ],
          [
            "第 2 课时",
            "传感器网络与嵌入式基础"
          ],
          [
            "第 3 课时",
            "云计算、边缘计算与协同"
          ],
          [
            "第 4 课时",
            "通用 IoT 到船联网的迁移"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "常见误解",
        "tag": "概念校准",
        "lead": "下面的表述会削弱对船联网工程系统的理解。",
        "items": [
          [
            "误解 1",
            "只记定义而忽略数据链"
          ],
          [
            "误解 2",
            "把云端当作唯一计算位置"
          ],
          [
            "误解 3",
            "忽视传感器误差与时间语义"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "数字教材与章节资源",
        "tag": "主入口",
        "lead": "数字教材与章节资源提供概念阅读、案例材料和实验入口。",
        "resources": [
          {
            "label": "《物联网与传感网技术》数字教材",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          },
          {
            "label": "第 1 章教材资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch01/index.html"
          }
        ]
      },
      {
        "type": "closing",
        "title": "本章结论",
        "tag": "Chapter 1",
        "lead": "画出最小 IoT 四层图；解释边缘计算的必要性；说明物理量如何进入应用服务",
        "points": [
          "核心链路：物理量 -> 传感器 -> 嵌入式节点 -> 网络传输 -> 云边处理 -> 应用服务",
          "关键指标：采样频率、误差范围、时间戳、功耗、网络可用率",
          "下一步：进入数字教材与章节资源继续查看章节资源"
        ]
      }
    ]
  },
  "chapter-02": {
    "title": "船联网技术演变",
    "subtitle": "从船舶数字化到船岸协同服务",
    "chapter": "Chapter 2",
    "shortBook": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/",
    "visual": "assets/ch02.svg",
    "color": "#144d8c",
    "accent": "#d59d2a",
    "references": [
      {
        "label": "教材第 2 章",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch02/index.html"
      },
      {
        "label": "L03 概念边界",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L03/index.html"
      },
      {
        "label": "L04 AIS 协同基础",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L04/index.html"
      },
      {
        "label": "AIS 报文解析",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab03/index.html"
      },
      {
        "label": "AIS NMEA 样本",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ais-samples/ais_nmea_sample.txt"
      },
      {
        "label": "AIS 解码表",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ais-samples/ais_decoded_sample.csv"
      }
    ],
    "slides": [
      {
        "type": "cover",
        "title": "船联网技术演变",
        "tag": "Chapter 2",
        "lead": "从船舶数字化到船岸协同服务",
        "meta": [
          "物联网与传感网技术",
          "4 课时",
          "本科课程"
        ],
        "links": [
          {
            "label": "数字教材与章节资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          }
        ]
      },
      {
        "type": "cards",
        "title": "本章位置",
        "tag": "32 课时结构",
        "lead": "第 2 章对应 4 个课时，围绕“从船舶数字化到船岸协同服务”展开。",
        "items": [
          [
            "第 1 课时",
            "船联网的对象范围"
          ],
          [
            "第 2 课时",
            "AIS 的基础作用与局限"
          ],
          [
            "第 3 课时",
            "e-Navigation 与服务化演进"
          ],
          [
            "第 4 课时",
            "航区差异与失效模式"
          ]
        ]
      },
      {
        "type": "process",
        "title": "四课时路径",
        "tag": "学习路线",
        "steps": [
          [
            "第 1 课时",
            "船联网的对象范围"
          ],
          [
            "第 2 课时",
            "AIS 的基础作用与局限"
          ],
          [
            "第 3 课时",
            "e-Navigation 与服务化演进"
          ],
          [
            "第 4 课时",
            "航区差异与失效模式"
          ]
        ]
      },
      {
        "type": "chips",
        "title": "术语坐标",
        "tag": "核心词",
        "lead": "本章先把术语放到系统位置中理解，再进入案例、样本和应用边界。",
        "chips": [
          "广义船联网",
          "狭义船联网",
          "AIS",
          "e-Navigation",
          "船岸协同",
          "航区差异"
        ]
      },
      {
        "type": "pipeline",
        "title": "系统链路",
        "tag": "从输入到服务",
        "steps": [
          "船端数字化",
          "身份与位置共享",
          "岸端汇聚",
          "服务化协同",
          "标准化接口",
          "智能应用"
        ]
      },
      {
        "type": "focus",
        "title": "01 概念边界",
        "tag": "教材主线",
        "figure": "1",
        "lead": "船联网覆盖船端设备、通信链路、岸端服务和业务协同，边界随应用目标变化。",
        "points": [
          "在系统中的位置：船端数字化",
          "关联指标：覆盖范围",
          "后续连接：港区协同"
        ]
      },
      {
        "type": "focus",
        "title": "02 对象范围",
        "tag": "教材主线",
        "figure": "2",
        "lead": "船舶、船员、岸基中心、港口、监管机构和服务商共同构成协同网络。",
        "points": [
          "在系统中的位置：身份与位置共享",
          "关联指标：更新周期",
          "后续连接：近岸监管"
        ]
      },
      {
        "type": "focus",
        "title": "03 AIS 基础",
        "tag": "教材主线",
        "figure": "3",
        "lead": "AIS 提供身份、位置、航向和速度等基础态势信息，是海上协同的重要底座。",
        "points": [
          "在系统中的位置：岸端汇聚",
          "关联指标：可见对象",
          "后续连接：远洋支持"
        ]
      },
      {
        "type": "focus",
        "title": "04 岸端服务",
        "tag": "教材主线",
        "figure": "4",
        "lead": "岸端系统把多船数据转化为监管、运维、航行支持和绿色航运服务。",
        "points": [
          "在系统中的位置：服务化协同",
          "关联指标：服务对象",
          "后续连接：AIS 解码"
        ]
      },
      {
        "type": "focus",
        "title": "05 e-Navigation",
        "tag": "教材主线",
        "figure": "5",
        "lead": "国际海事数字化共识推动信息标准化、服务化和跨主体共享。",
        "points": [
          "在系统中的位置：标准化接口",
          "关联指标：链路条件",
          "后续连接：服务目录"
        ]
      },
      {
        "type": "focus",
        "title": "06 发展趋势",
        "tag": "教材主线",
        "figure": "6",
        "lead": "智能航海、绿色航运和标准化演进把船联网推向更高层次应用。",
        "points": [
          "在系统中的位置：智能应用",
          "关联指标：失效后果",
          "后续连接：标准连接"
        ]
      },
      {
        "type": "matrix",
        "title": "概念矩阵",
        "tag": "关系辨析",
        "cells": [
          "概念",
          "系统位置",
          "关键指标",
          "应用入口",
          "广义船联网",
          "船端数字化",
          "覆盖范围",
          "港区协同",
          "狭义船联网",
          "身份与位置共享",
          "更新周期",
          "近岸监管",
          "AIS",
          "岸端汇聚",
          "可见对象",
          "远洋支持"
        ]
      },
      {
        "type": "scenario",
        "title": "典型场景",
        "tag": "场景入口",
        "lead": "同一艘船在港区、近岸和远洋三类航区内，信息协同对象、链路条件和服务需求明显不同。",
        "points": [
          "关键对象：广义船联网、狭义船联网、AIS",
          "关键链路：船端数字化 -> 身份与位置共享 -> 岸端汇聚 -> 服务化协同",
          "关键指标：覆盖范围、更新周期、可见对象、服务对象"
        ]
      },
      {
        "type": "cards",
        "title": "第一次课时块的结构沉淀",
        "tag": "结构整合",
        "lead": "前两个课时负责建立概念边界、系统位置和技术链路。",
        "items": [
          [
            "概念",
            "广义船联网、狭义船联网、AIS"
          ],
          [
            "链路",
            "船端数字化 -> 身份与位置共享 -> 岸端汇聚 -> 服务化协同"
          ],
          [
            "指标",
            "覆盖范围、更新周期、可见对象、服务对象"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "教材与范例资源",
        "tag": "资源入口",
        "lead": "以下入口来自已整理的教材数字资源，保留八章主线内容。",
        "resources": [
          {
            "label": "教材第 2 章",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch02/index.html"
          },
          {
            "label": "L03 概念边界",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L03/index.html"
          },
          {
            "label": "L04 AIS 协同基础",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L04/index.html"
          },
          {
            "label": "AIS 报文解析",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab03/index.html"
          }
        ]
      },
      {
        "type": "divider",
        "title": "从教材概念进入工程样本",
        "tag": "第二次课时块",
        "lead": "后两个课时把本章概念放入数据样本、实验入口、故障限制和工程取舍。"
      },
      {
        "type": "cards",
        "title": "01 港区协同",
        "tag": "应用展开",
        "lead": "靠离泊、引航、拖轮和港口调度依赖高频、低时延信息交换。",
        "items": [
          [
            "输入",
            "船端数字化 产生的数据或状态。"
          ],
          [
            "处理",
            "靠离泊、引航、拖轮和港口调度依赖高频、低时延信息交换。"
          ],
          [
            "输出",
            "覆盖范围 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "02 近岸监管",
        "tag": "应用展开",
        "lead": "交通组织、风险预警和应急响应需要多源态势融合。",
        "items": [
          [
            "输入",
            "身份与位置共享 产生的数据或状态。"
          ],
          [
            "处理",
            "交通组织、风险预警和应急响应需要多源态势融合。"
          ],
          [
            "输出",
            "更新周期 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "03 远洋支持",
        "tag": "应用展开",
        "lead": "卫星链路、摘要同步和远程运维成为关键能力。",
        "items": [
          [
            "输入",
            "岸端汇聚 产生的数据或状态。"
          ],
          [
            "处理",
            "卫星链路、摘要同步和远程运维成为关键能力。"
          ],
          [
            "输出",
            "可见对象 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "04 AIS 解码",
        "tag": "应用展开",
        "lead": "原始 NMEA 报文经解析后形成结构化位置与航行状态。",
        "items": [
          [
            "输入",
            "服务化协同 产生的数据或状态。"
          ],
          [
            "处理",
            "原始 NMEA 报文经解析后形成结构化位置与航行状态。"
          ],
          [
            "输出",
            "服务对象 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "05 服务目录",
        "tag": "应用展开",
        "lead": "航行警告、气象海况、交通建议和能效报告逐步服务化。",
        "items": [
          [
            "输入",
            "标准化接口 产生的数据或状态。"
          ],
          [
            "处理",
            "航行警告、气象海况、交通建议和能效报告逐步服务化。"
          ],
          [
            "输出",
            "链路条件 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "06 标准连接",
        "tag": "应用展开",
        "lead": "统一数据模型和服务描述降低跨机构协同成本。",
        "items": [
          [
            "输入",
            "智能应用 产生的数据或状态。"
          ],
          [
            "处理",
            "统一数据模型和服务描述降低跨机构协同成本。"
          ],
          [
            "输出",
            "失效后果 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "限制与风险",
        "tag": "工程边界",
        "lead": "真实系统的价值来自对限制条件的处理。",
        "items": [
          [
            "边界 1",
            "把 AIS 等同于完整船联网"
          ],
          [
            "边界 2",
            "忽略港区与远洋差异"
          ],
          [
            "边界 3",
            "只看技术不看协同主体"
          ],
          [
            "边界 4",
            "把历史演进讲成孤立名词"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "指标与字段",
        "tag": "数据表达",
        "lead": "指标让本章概念能够进入报文、日志、表格和服务接口。",
        "items": [
          [
            "指标 1",
            "覆盖范围"
          ],
          [
            "指标 2",
            "更新周期"
          ],
          [
            "指标 3",
            "可见对象"
          ],
          [
            "指标 4",
            "服务对象"
          ],
          [
            "指标 5",
            "链路条件"
          ],
          [
            "指标 6",
            "失效后果"
          ]
        ]
      },
      {
        "type": "pipeline",
        "title": "案例链路",
        "tag": "从问题到服务",
        "steps": [
          "船端数字化",
          "身份与位置共享",
          "岸端汇聚",
          "服务化协同",
          "标准化接口",
          "智能应用"
        ]
      },
      {
        "type": "cards",
        "title": "对象、数据与服务",
        "tag": "三层对应",
        "lead": "同一个问题可以从物理对象、数据表达和服务输出三个层次理解。",
        "items": [
          [
            "对象层",
            "广义船联网、狭义船联网 是本章首先识别的对象。"
          ],
          [
            "数据层",
            "覆盖范围、更新周期 让对象状态进入可计算表达。"
          ],
          [
            "服务层",
            "港区协同、近岸监管 把数据转化为业务能力。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "运行条件与限制",
        "tag": "海上约束",
        "lead": "船联网系统需要在移动平台、弱网链路和安全边界下保持稳定表达。",
        "items": [
          [
            "移动平台",
            "船舶位置、姿态、环境和业务状态持续变化。"
          ],
          [
            "链路波动",
            "带宽、时延、费用和覆盖共同影响数据同步策略。"
          ],
          [
            "安全边界",
            "远程接入、数据共享和设备控制需要明确权限与审计。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "样本分析路径",
        "tag": "从文件到判断",
        "lead": "教材资源中的报文、日志、轨迹和图像样本都可以按统一路径分析。",
        "items": [
          [
            "读取",
            "确认文件来源、字段含义、编码格式和时间范围。"
          ],
          [
            "校核",
            "检查缺失、重复、异常值、单位和坐标口径。"
          ],
          [
            "解释",
            "把样本结果放回航行、运维、监管或能效场景。"
          ]
        ]
      },
      {
        "type": "matrix",
        "title": "整章结构表",
        "tag": "结构总览",
        "cells": [
          "层次",
          "问题",
          "表达",
          "输出",
          "概念层",
          "从船舶数字化到船岸协同服务",
          "广义船联网、狭义船联网、AIS",
          "界定广义与狭义船联网",
          "系统层",
          "船端数字化 -> 身份与位置共享 -> 岸端汇聚",
          "覆盖范围、更新周期、可见对象",
          "说明 AIS 的基础作用与局限",
          "应用层",
          "港区协同、近岸监管",
          "教材第 2 章、L03 概念边界",
          "区分不同航区的信息需求"
        ]
      },
      {
        "type": "resources",
        "title": "实验、数据与交互入口",
        "tag": "资源入口",
        "lead": "这些入口用于把章节知识落到可查看、可运行、可分析的对象。",
        "resources": [
          {
            "label": "AIS NMEA 样本",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ais-samples/ais_nmea_sample.txt"
          },
          {
            "label": "AIS 解码表",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ais-samples/ais_decoded_sample.csv"
          }
        ]
      },
      {
        "type": "cards",
        "title": "章节输出",
        "tag": "学习成果",
        "lead": "本章完成后，应能把概念、链路和数据表达连成完整说明。",
        "items": [
          [
            "输出 1",
            "界定广义与狭义船联网"
          ],
          [
            "输出 2",
            "说明 AIS 的基础作用与局限"
          ],
          [
            "输出 3",
            "区分不同航区的信息需求"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "与前后章节的连接",
        "tag": "全书骨架",
        "lead": "船联网教材的八章内容按“技术底座 -> 系统结构 -> 数据链路 -> 应用趋势”推进。",
        "items": [
          [
            "上一层基础",
            "第 1 章提供前置边界与能力"
          ],
          [
            "本章贡献",
            "从船舶数字化到船岸协同服务"
          ],
          [
            "下一层去向",
            "第 3 章继续展开相关技术链条"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "四课时分配",
        "tag": "时间结构",
        "lead": "每章对应 4 个课时，建议按两次连续学习组织。",
        "items": [
          [
            "第 1 课时",
            "船联网的对象范围"
          ],
          [
            "第 2 课时",
            "AIS 的基础作用与局限"
          ],
          [
            "第 3 课时",
            "e-Navigation 与服务化演进"
          ],
          [
            "第 4 课时",
            "航区差异与失效模式"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "常见误解",
        "tag": "概念校准",
        "lead": "下面的表述会削弱对船联网工程系统的理解。",
        "items": [
          [
            "误解 1",
            "把 AIS 等同于完整船联网"
          ],
          [
            "误解 2",
            "忽略港区与远洋差异"
          ],
          [
            "误解 3",
            "只看技术不看协同主体"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "数字教材与章节资源",
        "tag": "主入口",
        "lead": "数字教材与章节资源提供概念阅读、案例材料和实验入口。",
        "resources": [
          {
            "label": "《物联网与传感网技术》数字教材",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          },
          {
            "label": "第 2 章教材资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch02/index.html"
          }
        ]
      },
      {
        "type": "closing",
        "title": "本章结论",
        "tag": "Chapter 2",
        "lead": "界定广义与狭义船联网；说明 AIS 的基础作用与局限；区分不同航区的信息需求",
        "points": [
          "核心链路：船端数字化 -> 身份与位置共享 -> 岸端汇聚 -> 服务化协同 -> 标准化接口 -> 智能应用",
          "关键指标：覆盖范围、更新周期、可见对象、服务对象、链路条件",
          "下一步：进入数字教材与章节资源继续查看章节资源"
        ]
      }
    ]
  },
  "chapter-03": {
    "title": "船联网体系架构",
    "subtitle": "船端、链路、岸端如何拼成系统",
    "chapter": "Chapter 3",
    "shortBook": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/",
    "visual": "assets/ch03.svg",
    "color": "#0f5a4c",
    "accent": "#cc5a43",
    "references": [
      {
        "label": "教材第 3 章",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch03/index.html"
      },
      {
        "label": "L05 分层架构",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L05/index.html"
      },
      {
        "label": "L06 船岸协同",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L06/index.html"
      },
      {
        "label": "分层架构交互图",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/diagrams/layered-architecture/index.html"
      },
      {
        "label": "交互内容总览",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/index.html"
      }
    ],
    "slides": [
      {
        "type": "cover",
        "title": "船联网体系架构",
        "tag": "Chapter 3",
        "lead": "船端、链路、岸端如何拼成系统",
        "meta": [
          "物联网与传感网技术",
          "4 课时",
          "本科课程"
        ],
        "links": [
          {
            "label": "数字教材与章节资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          }
        ]
      },
      {
        "type": "cards",
        "title": "本章位置",
        "tag": "32 课时结构",
        "lead": "第 3 章对应 4 个课时，围绕“船端、链路、岸端如何拼成系统”展开。",
        "items": [
          [
            "第 1 课时",
            "分层模型与职责边界"
          ],
          [
            "第 2 课时",
            "船端系统与边缘节点"
          ],
          [
            "第 3 课时",
            "岸端接入与服务门户"
          ],
          [
            "第 4 课时",
            "缓存补传、降级与追溯"
          ]
        ]
      },
      {
        "type": "process",
        "title": "四课时路径",
        "tag": "学习路线",
        "steps": [
          [
            "第 1 课时",
            "分层模型与职责边界"
          ],
          [
            "第 2 课时",
            "船端系统与边缘节点"
          ],
          [
            "第 3 课时",
            "岸端接入与服务门户"
          ],
          [
            "第 4 课时",
            "缓存补传、降级与追溯"
          ]
        ]
      },
      {
        "type": "chips",
        "title": "术语坐标",
        "tag": "核心词",
        "lead": "本章先把术语放到系统位置中理解，再进入案例、样本和应用边界。",
        "chips": [
          "感知层",
          "传输层",
          "计算层",
          "应用层",
          "船载网关",
          "岸端服务"
        ]
      },
      {
        "type": "pipeline",
        "title": "系统链路",
        "tag": "从输入到服务",
        "steps": [
          "设备接入",
          "船端网关",
          "链路调度",
          "岸端接入",
          "数据治理",
          "业务门户"
        ]
      },
      {
        "type": "focus",
        "title": "01 分层模型",
        "tag": "教材主线",
        "figure": "1",
        "lead": "分层用于划清感知、传输、计算和应用之间的职责，降低系统复杂度。",
        "points": [
          "在系统中的位置：设备接入",
          "关联指标：接口类型",
          "后续连接：架构分层"
        ]
      },
      {
        "type": "focus",
        "title": "02 协同关系",
        "tag": "教材主线",
        "figure": "2",
        "lead": "感知层提供数据，传输层保证可达，计算层完成处理，应用层形成业务价值。",
        "points": [
          "在系统中的位置：船端网关",
          "关联指标：消息格式",
          "后续连接：船端边缘"
        ]
      },
      {
        "type": "focus",
        "title": "03 船端系统",
        "tag": "教材主线",
        "figure": "3",
        "lead": "船载网关、边缘节点和设备接口负责船上数据汇聚与本地处理。",
        "points": [
          "在系统中的位置：链路调度",
          "关联指标：缓存队列",
          "后续连接：岸端汇聚"
        ]
      },
      {
        "type": "focus",
        "title": "04 岸端系统",
        "tag": "教材主线",
        "figure": "4",
        "lead": "接入、汇聚、治理、分析和门户服务构成岸端数字基础设施。",
        "points": [
          "在系统中的位置：岸端接入",
          "关联指标：重传次数",
          "后续连接：消息接口"
        ]
      },
      {
        "type": "focus",
        "title": "05 接口类型",
        "tag": "教材主线",
        "figure": "5",
        "lead": "设备接口、消息接口和服务接口分别解决接入、交换和业务调用问题。",
        "points": [
          "在系统中的位置：数据治理",
          "关联指标：服务可用率",
          "后续连接：降级运行"
        ]
      },
      {
        "type": "focus",
        "title": "06 运行策略",
        "tag": "教材主线",
        "figure": "6",
        "lead": "缓存补传、多链路调度、降级运行和日志追溯保证海上条件下仍可运行。",
        "points": [
          "在系统中的位置：业务门户",
          "关联指标：审计日志",
          "后续连接：运维追溯"
        ]
      },
      {
        "type": "matrix",
        "title": "概念矩阵",
        "tag": "关系辨析",
        "cells": [
          "概念",
          "系统位置",
          "关键指标",
          "应用入口",
          "感知层",
          "设备接入",
          "接口类型",
          "架构分层",
          "传输层",
          "船端网关",
          "消息格式",
          "船端边缘",
          "计算层",
          "链路调度",
          "缓存队列",
          "岸端汇聚"
        ]
      },
      {
        "type": "scenario",
        "title": "典型场景",
        "tag": "场景入口",
        "lead": "远洋航行中卫星链路不稳定，船端网关先本地缓存并生成摘要，链路恢复后补传完整数据。",
        "points": [
          "关键对象：感知层、传输层、计算层",
          "关键链路：设备接入 -> 船端网关 -> 链路调度 -> 岸端接入",
          "关键指标：接口类型、消息格式、缓存队列、重传次数"
        ]
      },
      {
        "type": "cards",
        "title": "第一次课时块的结构沉淀",
        "tag": "结构整合",
        "lead": "前两个课时负责建立概念边界、系统位置和技术链路。",
        "items": [
          [
            "概念",
            "感知层、传输层、计算层"
          ],
          [
            "链路",
            "设备接入 -> 船端网关 -> 链路调度 -> 岸端接入"
          ],
          [
            "指标",
            "接口类型、消息格式、缓存队列、重传次数"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "教材与范例资源",
        "tag": "资源入口",
        "lead": "以下入口来自已整理的教材数字资源，保留八章主线内容。",
        "resources": [
          {
            "label": "教材第 3 章",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch03/index.html"
          },
          {
            "label": "L05 分层架构",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L05/index.html"
          },
          {
            "label": "L06 船岸协同",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L06/index.html"
          },
          {
            "label": "分层架构交互图",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/diagrams/layered-architecture/index.html"
          }
        ]
      },
      {
        "type": "divider",
        "title": "从教材概念进入工程样本",
        "tag": "第二次课时块",
        "lead": "后两个课时把本章概念放入数据样本、实验入口、故障限制和工程取舍。"
      },
      {
        "type": "cards",
        "title": "01 架构分层",
        "tag": "应用展开",
        "lead": "每层只承担明确职责，跨层协同通过数据和服务边界完成。",
        "items": [
          [
            "输入",
            "设备接入 产生的数据或状态。"
          ],
          [
            "处理",
            "每层只承担明确职责，跨层协同通过数据和服务边界完成。"
          ],
          [
            "输出",
            "接口类型 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "02 船端边缘",
        "tag": "应用展开",
        "lead": "弱网条件下保留本地判断、临时存储和关键告警能力。",
        "items": [
          [
            "输入",
            "船端网关 产生的数据或状态。"
          ],
          [
            "处理",
            "弱网条件下保留本地判断、临时存储和关键告警能力。"
          ],
          [
            "输出",
            "消息格式 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "03 岸端汇聚",
        "tag": "应用展开",
        "lead": "多船数据进入统一治理流程，服务不同业务部门。",
        "items": [
          [
            "输入",
            "链路调度 产生的数据或状态。"
          ],
          [
            "处理",
            "多船数据进入统一治理流程，服务不同业务部门。"
          ],
          [
            "输出",
            "缓存队列 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "04 消息接口",
        "tag": "应用展开",
        "lead": "时间戳、来源、质量标注和版本号使数据可以追溯。",
        "items": [
          [
            "输入",
            "岸端接入 产生的数据或状态。"
          ],
          [
            "处理",
            "时间戳、来源、质量标注和版本号使数据可以追溯。"
          ],
          [
            "输出",
            "重传次数 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "05 降级运行",
        "tag": "应用展开",
        "lead": "关键功能保留、非关键功能延后，系统状态保持可解释。",
        "items": [
          [
            "输入",
            "数据治理 产生的数据或状态。"
          ],
          [
            "处理",
            "关键功能保留、非关键功能延后，系统状态保持可解释。"
          ],
          [
            "输出",
            "服务可用率 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "06 运维追溯",
        "tag": "应用展开",
        "lead": "日志、配置、版本和链路记录支持问题定位。",
        "items": [
          [
            "输入",
            "业务门户 产生的数据或状态。"
          ],
          [
            "处理",
            "日志、配置、版本和链路记录支持问题定位。"
          ],
          [
            "输出",
            "审计日志 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "限制与风险",
        "tag": "工程边界",
        "lead": "真实系统的价值来自对限制条件的处理。",
        "items": [
          [
            "边界 1",
            "把架构图画成设备清单"
          ],
          [
            "边界 2",
            "只讨论正常联网状态"
          ],
          [
            "边界 3",
            "接口字段缺少时间语义"
          ],
          [
            "边界 4",
            "忽视日志与版本追溯"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "指标与字段",
        "tag": "数据表达",
        "lead": "指标让本章概念能够进入报文、日志、表格和服务接口。",
        "items": [
          [
            "指标 1",
            "接口类型"
          ],
          [
            "指标 2",
            "消息格式"
          ],
          [
            "指标 3",
            "缓存队列"
          ],
          [
            "指标 4",
            "重传次数"
          ],
          [
            "指标 5",
            "服务可用率"
          ],
          [
            "指标 6",
            "审计日志"
          ]
        ]
      },
      {
        "type": "pipeline",
        "title": "案例链路",
        "tag": "从问题到服务",
        "steps": [
          "设备接入",
          "船端网关",
          "链路调度",
          "岸端接入",
          "数据治理",
          "业务门户"
        ]
      },
      {
        "type": "cards",
        "title": "对象、数据与服务",
        "tag": "三层对应",
        "lead": "同一个问题可以从物理对象、数据表达和服务输出三个层次理解。",
        "items": [
          [
            "对象层",
            "感知层、传输层 是本章首先识别的对象。"
          ],
          [
            "数据层",
            "接口类型、消息格式 让对象状态进入可计算表达。"
          ],
          [
            "服务层",
            "架构分层、船端边缘 把数据转化为业务能力。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "运行条件与限制",
        "tag": "海上约束",
        "lead": "船联网系统需要在移动平台、弱网链路和安全边界下保持稳定表达。",
        "items": [
          [
            "移动平台",
            "船舶位置、姿态、环境和业务状态持续变化。"
          ],
          [
            "链路波动",
            "带宽、时延、费用和覆盖共同影响数据同步策略。"
          ],
          [
            "安全边界",
            "远程接入、数据共享和设备控制需要明确权限与审计。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "样本分析路径",
        "tag": "从文件到判断",
        "lead": "教材资源中的报文、日志、轨迹和图像样本都可以按统一路径分析。",
        "items": [
          [
            "读取",
            "确认文件来源、字段含义、编码格式和时间范围。"
          ],
          [
            "校核",
            "检查缺失、重复、异常值、单位和坐标口径。"
          ],
          [
            "解释",
            "把样本结果放回航行、运维、监管或能效场景。"
          ]
        ]
      },
      {
        "type": "matrix",
        "title": "整章结构表",
        "tag": "结构总览",
        "cells": [
          "层次",
          "问题",
          "表达",
          "输出",
          "概念层",
          "船端、链路、岸端如何拼成系统",
          "感知层、传输层、计算层",
          "画出船端/链路/岸端结构",
          "系统层",
          "设备接入 -> 船端网关 -> 链路调度",
          "接口类型、消息格式、缓存队列",
          "说明三类接口的差异",
          "应用层",
          "架构分层、船端边缘",
          "教材第 3 章、L05 分层架构",
          "解释缓存补传为什么属于架构能力"
        ]
      },
      {
        "type": "resources",
        "title": "实验、数据与交互入口",
        "tag": "资源入口",
        "lead": "这些入口用于把章节知识落到可查看、可运行、可分析的对象。",
        "resources": [
          {
            "label": "交互内容总览",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/index.html"
          }
        ]
      },
      {
        "type": "cards",
        "title": "章节输出",
        "tag": "学习成果",
        "lead": "本章完成后，应能把概念、链路和数据表达连成完整说明。",
        "items": [
          [
            "输出 1",
            "画出船端/链路/岸端结构"
          ],
          [
            "输出 2",
            "说明三类接口的差异"
          ],
          [
            "输出 3",
            "解释缓存补传为什么属于架构能力"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "与前后章节的连接",
        "tag": "全书骨架",
        "lead": "船联网教材的八章内容按“技术底座 -> 系统结构 -> 数据链路 -> 应用趋势”推进。",
        "items": [
          [
            "上一层基础",
            "第 2 章提供前置边界与能力"
          ],
          [
            "本章贡献",
            "船端、链路、岸端如何拼成系统"
          ],
          [
            "下一层去向",
            "第 4 章继续展开相关技术链条"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "四课时分配",
        "tag": "时间结构",
        "lead": "每章对应 4 个课时，建议按两次连续学习组织。",
        "items": [
          [
            "第 1 课时",
            "分层模型与职责边界"
          ],
          [
            "第 2 课时",
            "船端系统与边缘节点"
          ],
          [
            "第 3 课时",
            "岸端接入与服务门户"
          ],
          [
            "第 4 课时",
            "缓存补传、降级与追溯"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "常见误解",
        "tag": "概念校准",
        "lead": "下面的表述会削弱对船联网工程系统的理解。",
        "items": [
          [
            "误解 1",
            "把架构图画成设备清单"
          ],
          [
            "误解 2",
            "只讨论正常联网状态"
          ],
          [
            "误解 3",
            "接口字段缺少时间语义"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "数字教材与章节资源",
        "tag": "主入口",
        "lead": "数字教材与章节资源提供概念阅读、案例材料和实验入口。",
        "resources": [
          {
            "label": "《物联网与传感网技术》数字教材",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          },
          {
            "label": "第 3 章教材资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch03/index.html"
          }
        ]
      },
      {
        "type": "closing",
        "title": "本章结论",
        "tag": "Chapter 3",
        "lead": "画出船端/链路/岸端结构；说明三类接口的差异；解释缓存补传为什么属于架构能力",
        "points": [
          "核心链路：设备接入 -> 船端网关 -> 链路调度 -> 岸端接入 -> 数据治理 -> 业务门户",
          "关键指标：接口类型、消息格式、缓存队列、重传次数、服务可用率",
          "下一步：进入数字教材与章节资源继续查看章节资源"
        ]
      }
    ]
  },
  "chapter-04": {
    "title": "船载感知信息采集",
    "subtitle": "船上数据从哪里来，为什么需要标注质量",
    "chapter": "Chapter 4",
    "shortBook": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/",
    "visual": "assets/ch04.svg",
    "color": "#7a3d12",
    "accent": "#147d7f",
    "references": [
      {
        "label": "教材第 4 章",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch04/index.html"
      },
      {
        "label": "L07 感知链条",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L07/index.html"
      },
      {
        "label": "L08 数据质量",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L08/index.html"
      },
      {
        "label": "Lab02 传感器采集",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab02/index.html"
      },
      {
        "label": "Lab06 视觉船舶检测",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab06/index.html"
      },
      {
        "label": "计算机视觉教程",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/tutorials/computer-vision/index.html"
      },
      {
        "label": "船舶图像样本",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ship-images/sample-ship-01.svg"
      }
    ],
    "slides": [
      {
        "type": "cover",
        "title": "船载感知信息采集",
        "tag": "Chapter 4",
        "lead": "船上数据从哪里来，为什么需要标注质量",
        "meta": [
          "物联网与传感网技术",
          "4 课时",
          "本科课程"
        ],
        "links": [
          {
            "label": "数字教材与章节资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          }
        ]
      },
      {
        "type": "cards",
        "title": "本章位置",
        "tag": "32 课时结构",
        "lead": "第 4 章对应 4 个课时，围绕“船上数据从哪里来，为什么需要标注质量”展开。",
        "items": [
          [
            "第 1 课时",
            "船舶自身状态感知"
          ],
          [
            "第 2 课时",
            "周边交通态势感知"
          ],
          [
            "第 3 课时",
            "运行状态与能耗采集"
          ],
          [
            "第 4 课时",
            "多源互补与质量标注"
          ]
        ]
      },
      {
        "type": "process",
        "title": "四课时路径",
        "tag": "学习路线",
        "steps": [
          [
            "第 1 课时",
            "船舶自身状态感知"
          ],
          [
            "第 2 课时",
            "周边交通态势感知"
          ],
          [
            "第 3 课时",
            "运行状态与能耗采集"
          ],
          [
            "第 4 课时",
            "多源互补与质量标注"
          ]
        ]
      },
      {
        "type": "chips",
        "title": "术语坐标",
        "tag": "核心词",
        "lead": "本章先把术语放到系统位置中理解，再进入案例、样本和应用边界。",
        "chips": [
          "GNSS",
          "AIS",
          "雷达",
          "视觉",
          "声呐",
          "质量标注"
        ]
      },
      {
        "type": "pipeline",
        "title": "系统链路",
        "tag": "从输入到服务",
        "steps": [
          "自身状态",
          "周边态势",
          "运行状态",
          "时间同步",
          "质量标注",
          "融合使用"
        ]
      },
      {
        "type": "focus",
        "title": "01 自身状态",
        "tag": "教材主线",
        "figure": "1",
        "lead": "定位、时间基准、航向姿态、速度和航程描述船舶自身运动状态。",
        "points": [
          "在系统中的位置：自身状态",
          "关联指标：时间精度",
          "后续连接：定位链条"
        ]
      },
      {
        "type": "focus",
        "title": "02 周边态势",
        "tag": "教材主线",
        "figure": "2",
        "lead": "AIS、雷达、视觉和声呐从不同角度刻画周边目标与环境。",
        "points": [
          "在系统中的位置：周边态势",
          "关联指标：空间误差",
          "后续连接：AIS 态势"
        ]
      },
      {
        "type": "focus",
        "title": "03 运行状态",
        "tag": "教材主线",
        "figure": "3",
        "lead": "主机、电力、机舱、能耗和舱室监测反映船舶运行健康状况。",
        "points": [
          "在系统中的位置：运行状态",
          "关联指标：目标置信度",
          "后续连接：雷达目标"
        ]
      },
      {
        "type": "focus",
        "title": "04 质量问题",
        "tag": "教材主线",
        "figure": "4",
        "lead": "缺失、漂移、延迟、重复和异常值都需要被识别与标注。",
        "points": [
          "在系统中的位置：时间同步",
          "关联指标：缺失率",
          "后续连接：视觉识别"
        ]
      },
      {
        "type": "focus",
        "title": "05 多源互补",
        "tag": "教材主线",
        "figure": "5",
        "lead": "不同传感器的优势互补依赖时间同步、空间对齐和目标关联。",
        "points": [
          "在系统中的位置：质量标注",
          "关联指标：漂移程度",
          "后续连接：设备监测"
        ]
      },
      {
        "type": "focus",
        "title": "06 感知闭环",
        "tag": "教材主线",
        "figure": "6",
        "lead": "弱网断链条件下，船端仍需完成本地采集、校核、缓存和告警。",
        "points": [
          "在系统中的位置：融合使用",
          "关联指标：同步偏差",
          "后续连接：质量字段"
        ]
      },
      {
        "type": "matrix",
        "title": "概念矩阵",
        "tag": "关系辨析",
        "cells": [
          "概念",
          "系统位置",
          "关键指标",
          "应用入口",
          "GNSS",
          "自身状态",
          "时间精度",
          "定位链条",
          "AIS",
          "周边态势",
          "空间误差",
          "AIS 态势",
          "雷达",
          "运行状态",
          "目标置信度",
          "雷达目标"
        ]
      },
      {
        "type": "scenario",
        "title": "典型场景",
        "tag": "场景入口",
        "lead": "同一目标在 AIS、雷达和视觉中出现时间差，融合前必须确认时间基准和目标关联关系。",
        "points": [
          "关键对象：GNSS、AIS、雷达",
          "关键链路：自身状态 -> 周边态势 -> 运行状态 -> 时间同步",
          "关键指标：时间精度、空间误差、目标置信度、缺失率"
        ]
      },
      {
        "type": "cards",
        "title": "第一次课时块的结构沉淀",
        "tag": "结构整合",
        "lead": "前两个课时负责建立概念边界、系统位置和技术链路。",
        "items": [
          [
            "概念",
            "GNSS、AIS、雷达"
          ],
          [
            "链路",
            "自身状态 -> 周边态势 -> 运行状态 -> 时间同步"
          ],
          [
            "指标",
            "时间精度、空间误差、目标置信度、缺失率"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "教材与范例资源",
        "tag": "资源入口",
        "lead": "以下入口来自已整理的教材数字资源，保留八章主线内容。",
        "resources": [
          {
            "label": "教材第 4 章",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch04/index.html"
          },
          {
            "label": "L07 感知链条",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L07/index.html"
          },
          {
            "label": "L08 数据质量",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L08/index.html"
          },
          {
            "label": "Lab02 传感器采集",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab02/index.html"
          }
        ]
      },
      {
        "type": "divider",
        "title": "从教材概念进入工程样本",
        "tag": "第二次课时块",
        "lead": "后两个课时把本章概念放入数据样本、实验入口、故障限制和工程取舍。"
      },
      {
        "type": "cards",
        "title": "01 定位链条",
        "tag": "应用展开",
        "lead": "GNSS 与惯性/姿态信息共同形成船舶自身状态基础。",
        "items": [
          [
            "输入",
            "自身状态 产生的数据或状态。"
          ],
          [
            "处理",
            "GNSS 与惯性/姿态信息共同形成船舶自身状态基础。"
          ],
          [
            "输出",
            "时间精度 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "02 AIS 态势",
        "tag": "应用展开",
        "lead": "身份与航行状态便于协同，但存在更新周期和报文质量限制。",
        "items": [
          [
            "输入",
            "周边态势 产生的数据或状态。"
          ],
          [
            "处理",
            "身份与航行状态便于协同，但存在更新周期和报文质量限制。"
          ],
          [
            "输出",
            "空间误差 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "03 雷达目标",
        "tag": "应用展开",
        "lead": "雷达对非合作目标有价值，需要目标检测与跟踪。",
        "items": [
          [
            "输入",
            "运行状态 产生的数据或状态。"
          ],
          [
            "处理",
            "雷达对非合作目标有价值，需要目标检测与跟踪。"
          ],
          [
            "输出",
            "目标置信度 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "04 视觉识别",
        "tag": "应用展开",
        "lead": "图像可用于船型、障碍物和环境识别，受光照与天气影响。",
        "items": [
          [
            "输入",
            "时间同步 产生的数据或状态。"
          ],
          [
            "处理",
            "图像可用于船型、障碍物和环境识别，受光照与天气影响。"
          ],
          [
            "输出",
            "缺失率 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "05 设备监测",
        "tag": "应用展开",
        "lead": "主机、电力和能耗数据支持运维与绿色航运。",
        "items": [
          [
            "输入",
            "质量标注 产生的数据或状态。"
          ],
          [
            "处理",
            "主机、电力和能耗数据支持运维与绿色航运。"
          ],
          [
            "输出",
            "漂移程度 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "06 质量字段",
        "tag": "应用展开",
        "lead": "confidence、quality、source 和 timestamp 让数据进入融合流程。",
        "items": [
          [
            "输入",
            "融合使用 产生的数据或状态。"
          ],
          [
            "处理",
            "confidence、quality、source 和 timestamp 让数据进入融合流程。"
          ],
          [
            "输出",
            "同步偏差 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "限制与风险",
        "tag": "工程边界",
        "lead": "真实系统的价值来自对限制条件的处理。",
        "items": [
          [
            "边界 1",
            "不同时间基准混用"
          ],
          [
            "边界 2",
            "把单一传感器结果当作真实态势"
          ],
          [
            "边界 3",
            "缺少质量字段"
          ],
          [
            "边界 4",
            "弱网下采集链条中断"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "指标与字段",
        "tag": "数据表达",
        "lead": "指标让本章概念能够进入报文、日志、表格和服务接口。",
        "items": [
          [
            "指标 1",
            "时间精度"
          ],
          [
            "指标 2",
            "空间误差"
          ],
          [
            "指标 3",
            "目标置信度"
          ],
          [
            "指标 4",
            "缺失率"
          ],
          [
            "指标 5",
            "漂移程度"
          ],
          [
            "指标 6",
            "同步偏差"
          ]
        ]
      },
      {
        "type": "pipeline",
        "title": "案例链路",
        "tag": "从问题到服务",
        "steps": [
          "自身状态",
          "周边态势",
          "运行状态",
          "时间同步",
          "质量标注",
          "融合使用"
        ]
      },
      {
        "type": "cards",
        "title": "对象、数据与服务",
        "tag": "三层对应",
        "lead": "同一个问题可以从物理对象、数据表达和服务输出三个层次理解。",
        "items": [
          [
            "对象层",
            "GNSS、AIS 是本章首先识别的对象。"
          ],
          [
            "数据层",
            "时间精度、空间误差 让对象状态进入可计算表达。"
          ],
          [
            "服务层",
            "定位链条、AIS 态势 把数据转化为业务能力。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "运行条件与限制",
        "tag": "海上约束",
        "lead": "船联网系统需要在移动平台、弱网链路和安全边界下保持稳定表达。",
        "items": [
          [
            "移动平台",
            "船舶位置、姿态、环境和业务状态持续变化。"
          ],
          [
            "链路波动",
            "带宽、时延、费用和覆盖共同影响数据同步策略。"
          ],
          [
            "安全边界",
            "远程接入、数据共享和设备控制需要明确权限与审计。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "样本分析路径",
        "tag": "从文件到判断",
        "lead": "教材资源中的报文、日志、轨迹和图像样本都可以按统一路径分析。",
        "items": [
          [
            "读取",
            "确认文件来源、字段含义、编码格式和时间范围。"
          ],
          [
            "校核",
            "检查缺失、重复、异常值、单位和坐标口径。"
          ],
          [
            "解释",
            "把样本结果放回航行、运维、监管或能效场景。"
          ]
        ]
      },
      {
        "type": "matrix",
        "title": "整章结构表",
        "tag": "结构总览",
        "cells": [
          "层次",
          "问题",
          "表达",
          "输出",
          "概念层",
          "船上数据从哪里来，为什么需要标注质量",
          "GNSS、AIS、雷达",
          "说明三类感知链条",
          "系统层",
          "自身状态 -> 周边态势 -> 运行状态",
          "时间精度、空间误差、目标置信度",
          "设计质量标注字段",
          "应用层",
          "定位链条、AIS 态势",
          "教材第 4 章、L07 感知链条",
          "举例解释多源同步失败的后果"
        ]
      },
      {
        "type": "resources",
        "title": "实验、数据与交互入口",
        "tag": "资源入口",
        "lead": "这些入口用于把章节知识落到可查看、可运行、可分析的对象。",
        "resources": [
          {
            "label": "Lab06 视觉船舶检测",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab06/index.html"
          },
          {
            "label": "计算机视觉教程",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/tutorials/computer-vision/index.html"
          },
          {
            "label": "船舶图像样本",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ship-images/sample-ship-01.svg"
          }
        ]
      },
      {
        "type": "cards",
        "title": "章节输出",
        "tag": "学习成果",
        "lead": "本章完成后，应能把概念、链路和数据表达连成完整说明。",
        "items": [
          [
            "输出 1",
            "说明三类感知链条"
          ],
          [
            "输出 2",
            "设计质量标注字段"
          ],
          [
            "输出 3",
            "举例解释多源同步失败的后果"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "与前后章节的连接",
        "tag": "全书骨架",
        "lead": "船联网教材的八章内容按“技术底座 -> 系统结构 -> 数据链路 -> 应用趋势”推进。",
        "items": [
          [
            "上一层基础",
            "第 3 章提供前置边界与能力"
          ],
          [
            "本章贡献",
            "船上数据从哪里来，为什么需要标注质量"
          ],
          [
            "下一层去向",
            "第 5 章继续展开相关技术链条"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "四课时分配",
        "tag": "时间结构",
        "lead": "每章对应 4 个课时，建议按两次连续学习组织。",
        "items": [
          [
            "第 1 课时",
            "船舶自身状态感知"
          ],
          [
            "第 2 课时",
            "周边交通态势感知"
          ],
          [
            "第 3 课时",
            "运行状态与能耗采集"
          ],
          [
            "第 4 课时",
            "多源互补与质量标注"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "常见误解",
        "tag": "概念校准",
        "lead": "下面的表述会削弱对船联网工程系统的理解。",
        "items": [
          [
            "误解 1",
            "不同时间基准混用"
          ],
          [
            "误解 2",
            "把单一传感器结果当作真实态势"
          ],
          [
            "误解 3",
            "缺少质量字段"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "数字教材与章节资源",
        "tag": "主入口",
        "lead": "数字教材与章节资源提供概念阅读、案例材料和实验入口。",
        "resources": [
          {
            "label": "《物联网与传感网技术》数字教材",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          },
          {
            "label": "第 4 章教材资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch04/index.html"
          }
        ]
      },
      {
        "type": "closing",
        "title": "本章结论",
        "tag": "Chapter 4",
        "lead": "说明三类感知链条；设计质量标注字段；举例解释多源同步失败的后果",
        "points": [
          "核心链路：自身状态 -> 周边态势 -> 运行状态 -> 时间同步 -> 质量标注 -> 融合使用",
          "关键指标：时间精度、空间误差、目标置信度、缺失率、漂移程度",
          "下一步：进入数字教材与章节资源继续查看章节资源"
        ]
      }
    ]
  },
  "chapter-05": {
    "title": "海上通信网络基础",
    "subtitle": "覆盖、时延、费用和可靠性的工程取舍",
    "chapter": "Chapter 5",
    "shortBook": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/",
    "visual": "assets/ch05.svg",
    "color": "#243f73",
    "accent": "#2e8a57",
    "references": [
      {
        "label": "教材第 5 章",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch05/index.html"
      },
      {
        "label": "L09 链路特性",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L09/index.html"
      },
      {
        "label": "L10 多链路降级",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L10/index.html"
      },
      {
        "label": "Lab04 NMEA 分析",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab04/index.html"
      },
      {
        "label": "NMEA 样本",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/nmea-logs/nmea_sample.txt"
      },
      {
        "label": "通信日志",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/comm-logs/comm_log_sample.csv"
      },
      {
        "label": "延迟样本",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/comm-logs/latency_data.csv"
      }
    ],
    "slides": [
      {
        "type": "cover",
        "title": "海上通信网络基础",
        "tag": "Chapter 5",
        "lead": "覆盖、时延、费用和可靠性的工程取舍",
        "meta": [
          "物联网与传感网技术",
          "4 课时",
          "本科课程"
        ],
        "links": [
          {
            "label": "数字教材与章节资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          }
        ]
      },
      {
        "type": "cards",
        "title": "本章位置",
        "tag": "32 课时结构",
        "lead": "第 5 章对应 4 个课时，围绕“覆盖、时延、费用和可靠性的工程取舍”展开。",
        "items": [
          [
            "第 1 课时",
            "通信链路的位置与指标"
          ],
          [
            "第 2 课时",
            "船内网络与本地汇聚"
          ],
          [
            "第 3 课时",
            "船船与船岸通信"
          ],
          [
            "第 4 课时",
            "多链路管理与降级"
          ]
        ]
      },
      {
        "type": "process",
        "title": "四课时路径",
        "tag": "学习路线",
        "steps": [
          [
            "第 1 课时",
            "通信链路的位置与指标"
          ],
          [
            "第 2 课时",
            "船内网络与本地汇聚"
          ],
          [
            "第 3 课时",
            "船船与船岸通信"
          ],
          [
            "第 4 课时",
            "多链路管理与降级"
          ]
        ]
      },
      {
        "type": "chips",
        "title": "术语坐标",
        "tag": "核心词",
        "lead": "本章先把术语放到系统位置中理解，再进入案例、样本和应用边界。",
        "chips": [
          "带宽",
          "时延",
          "抖动",
          "丢包",
          "缓存补传",
          "链路优先级"
        ]
      },
      {
        "type": "pipeline",
        "title": "系统链路",
        "tag": "从输入到服务",
        "steps": [
          "船内采集",
          "本地汇聚",
          "链路探测",
          "业务分级",
          "多链路选择",
          "补传对账"
        ]
      },
      {
        "type": "focus",
        "title": "01 链路位置",
        "tag": "教材主线",
        "figure": "1",
        "lead": "通信层连接船端感知与岸端服务，是船联网持续协同的关键通道。",
        "points": [
          "在系统中的位置：船内采集",
          "关联指标：带宽",
          "后续连接：船内分区"
        ]
      },
      {
        "type": "focus",
        "title": "02 船内网络",
        "tag": "教材主线",
        "figure": "2",
        "lead": "船内网络完成设备分区、本地汇聚和协议转换。",
        "points": [
          "在系统中的位置：本地汇聚",
          "关联指标：时延",
          "后续连接：AIS/VHF"
        ]
      },
      {
        "type": "focus",
        "title": "03 船船通信",
        "tag": "教材主线",
        "figure": "3",
        "lead": "AIS、VHF、VDES 等链路支持近距离协同和安全信息交换。",
        "points": [
          "在系统中的位置：链路探测",
          "关联指标：抖动",
          "后续连接：卫星通信"
        ]
      },
      {
        "type": "focus",
        "title": "04 船岸通信",
        "tag": "教材主线",
        "figure": "4",
        "lead": "蜂窝、卫星、北斗短报文和港区专网覆盖不同海区与业务。",
        "points": [
          "在系统中的位置：业务分级",
          "关联指标：费用",
          "后续连接：蜂窝网络"
        ]
      },
      {
        "type": "focus",
        "title": "05 多链路管理",
        "tag": "教材主线",
        "figure": "5",
        "lead": "业务分级、链路探测、缓存补传和安全接入共同保障关键业务。",
        "points": [
          "在系统中的位置：多链路选择",
          "关联指标：覆盖",
          "后续连接：北斗短报文"
        ]
      },
      {
        "type": "focus",
        "title": "06 性能边界",
        "tag": "教材主线",
        "figure": "6",
        "lead": "带宽、时延、抖动、费用、覆盖和稳定性决定链路选型。",
        "points": [
          "在系统中的位置：补传对账",
          "关联指标：安全接入",
          "后续连接：缓存补传"
        ]
      },
      {
        "type": "matrix",
        "title": "概念矩阵",
        "tag": "关系辨析",
        "cells": [
          "概念",
          "系统位置",
          "关键指标",
          "应用入口",
          "带宽",
          "船内采集",
          "带宽",
          "船内分区",
          "时延",
          "本地汇聚",
          "时延",
          "AIS/VHF",
          "抖动",
          "链路探测",
          "抖动",
          "卫星通信"
        ]
      },
      {
        "type": "scenario",
        "title": "典型场景",
        "tag": "场景入口",
        "lead": "船舶从港区驶向远洋，通信从港区专网切到蜂窝再到卫星，业务同步策略随链路条件变化。",
        "points": [
          "关键对象：带宽、时延、抖动",
          "关键链路：船内采集 -> 本地汇聚 -> 链路探测 -> 业务分级",
          "关键指标：带宽、时延、抖动、费用"
        ]
      },
      {
        "type": "cards",
        "title": "第一次课时块的结构沉淀",
        "tag": "结构整合",
        "lead": "前两个课时负责建立概念边界、系统位置和技术链路。",
        "items": [
          [
            "概念",
            "带宽、时延、抖动"
          ],
          [
            "链路",
            "船内采集 -> 本地汇聚 -> 链路探测 -> 业务分级"
          ],
          [
            "指标",
            "带宽、时延、抖动、费用"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "教材与范例资源",
        "tag": "资源入口",
        "lead": "以下入口来自已整理的教材数字资源，保留八章主线内容。",
        "resources": [
          {
            "label": "教材第 5 章",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch05/index.html"
          },
          {
            "label": "L09 链路特性",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L09/index.html"
          },
          {
            "label": "L10 多链路降级",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L10/index.html"
          },
          {
            "label": "Lab04 NMEA 分析",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab04/index.html"
          }
        ]
      },
      {
        "type": "divider",
        "title": "从教材概念进入工程样本",
        "tag": "第二次课时块",
        "lead": "后两个课时把本章概念放入数据样本、实验入口、故障限制和工程取舍。"
      },
      {
        "type": "cards",
        "title": "01 船内分区",
        "tag": "应用展开",
        "lead": "导航、机舱、生活与外部接入需要清晰分区，降低风险扩散。",
        "items": [
          [
            "输入",
            "船内采集 产生的数据或状态。"
          ],
          [
            "处理",
            "导航、机舱、生活与外部接入需要清晰分区，降低风险扩散。"
          ],
          [
            "输出",
            "带宽 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "02 AIS/VHF",
        "tag": "应用展开",
        "lead": "近距离安全协同强调可达性和规范报文。",
        "items": [
          [
            "输入",
            "本地汇聚 产生的数据或状态。"
          ],
          [
            "处理",
            "近距离安全协同强调可达性和规范报文。"
          ],
          [
            "输出",
            "时延 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "03 卫星通信",
        "tag": "应用展开",
        "lead": "远洋场景依赖卫星，成本和带宽约束要求摘要与批传。",
        "items": [
          [
            "输入",
            "链路探测 产生的数据或状态。"
          ],
          [
            "处理",
            "远洋场景依赖卫星，成本和带宽约束要求摘要与批传。"
          ],
          [
            "输出",
            "抖动 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "04 蜂窝网络",
        "tag": "应用展开",
        "lead": "近岸高带宽链路适合图像、日志和批量数据上传。",
        "items": [
          [
            "输入",
            "业务分级 产生的数据或状态。"
          ],
          [
            "处理",
            "近岸高带宽链路适合图像、日志和批量数据上传。"
          ],
          [
            "输出",
            "费用 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "05 北斗短报文",
        "tag": "应用展开",
        "lead": "短消息适合关键状态、位置和应急信息。",
        "items": [
          [
            "输入",
            "多链路选择 产生的数据或状态。"
          ],
          [
            "处理",
            "短消息适合关键状态、位置和应急信息。"
          ],
          [
            "输出",
            "覆盖 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "06 缓存补传",
        "tag": "应用展开",
        "lead": "队列长度、重试次数和幂等标识决定补传可靠性。",
        "items": [
          [
            "输入",
            "补传对账 产生的数据或状态。"
          ],
          [
            "处理",
            "队列长度、重试次数和幂等标识决定补传可靠性。"
          ],
          [
            "输出",
            "安全接入 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "限制与风险",
        "tag": "工程边界",
        "lead": "真实系统的价值来自对限制条件的处理。",
        "items": [
          [
            "边界 1",
            "只追求高带宽"
          ],
          [
            "边界 2",
            "忽略抖动对实时业务的影响"
          ],
          [
            "边界 3",
            "关键业务与批量同步混用同一策略"
          ],
          [
            "边界 4",
            "补传缺少幂等设计"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "指标与字段",
        "tag": "数据表达",
        "lead": "指标让本章概念能够进入报文、日志、表格和服务接口。",
        "items": [
          [
            "指标 1",
            "带宽"
          ],
          [
            "指标 2",
            "时延"
          ],
          [
            "指标 3",
            "抖动"
          ],
          [
            "指标 4",
            "费用"
          ],
          [
            "指标 5",
            "覆盖"
          ],
          [
            "指标 6",
            "安全接入"
          ]
        ]
      },
      {
        "type": "pipeline",
        "title": "案例链路",
        "tag": "从问题到服务",
        "steps": [
          "船内采集",
          "本地汇聚",
          "链路探测",
          "业务分级",
          "多链路选择",
          "补传对账"
        ]
      },
      {
        "type": "cards",
        "title": "对象、数据与服务",
        "tag": "三层对应",
        "lead": "同一个问题可以从物理对象、数据表达和服务输出三个层次理解。",
        "items": [
          [
            "对象层",
            "带宽、时延 是本章首先识别的对象。"
          ],
          [
            "数据层",
            "带宽、时延 让对象状态进入可计算表达。"
          ],
          [
            "服务层",
            "船内分区、AIS/VHF 把数据转化为业务能力。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "运行条件与限制",
        "tag": "海上约束",
        "lead": "船联网系统需要在移动平台、弱网链路和安全边界下保持稳定表达。",
        "items": [
          [
            "移动平台",
            "船舶位置、姿态、环境和业务状态持续变化。"
          ],
          [
            "链路波动",
            "带宽、时延、费用和覆盖共同影响数据同步策略。"
          ],
          [
            "安全边界",
            "远程接入、数据共享和设备控制需要明确权限与审计。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "样本分析路径",
        "tag": "从文件到判断",
        "lead": "教材资源中的报文、日志、轨迹和图像样本都可以按统一路径分析。",
        "items": [
          [
            "读取",
            "确认文件来源、字段含义、编码格式和时间范围。"
          ],
          [
            "校核",
            "检查缺失、重复、异常值、单位和坐标口径。"
          ],
          [
            "解释",
            "把样本结果放回航行、运维、监管或能效场景。"
          ]
        ]
      },
      {
        "type": "matrix",
        "title": "整章结构表",
        "tag": "结构总览",
        "cells": [
          "层次",
          "问题",
          "表达",
          "输出",
          "概念层",
          "覆盖、时延、费用和可靠性的工程取舍",
          "带宽、时延、抖动",
          "比较不同链路特征",
          "系统层",
          "船内采集 -> 本地汇聚 -> 链路探测",
          "带宽、时延、抖动",
          "设计三类业务优先级",
          "应用层",
          "船内分区、AIS/VHF",
          "教材第 5 章、L09 链路特性",
          "解释缓存补传需要哪些字段"
        ]
      },
      {
        "type": "resources",
        "title": "实验、数据与交互入口",
        "tag": "资源入口",
        "lead": "这些入口用于把章节知识落到可查看、可运行、可分析的对象。",
        "resources": [
          {
            "label": "NMEA 样本",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/nmea-logs/nmea_sample.txt"
          },
          {
            "label": "通信日志",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/comm-logs/comm_log_sample.csv"
          },
          {
            "label": "延迟样本",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/comm-logs/latency_data.csv"
          }
        ]
      },
      {
        "type": "cards",
        "title": "章节输出",
        "tag": "学习成果",
        "lead": "本章完成后，应能把概念、链路和数据表达连成完整说明。",
        "items": [
          [
            "输出 1",
            "比较不同链路特征"
          ],
          [
            "输出 2",
            "设计三类业务优先级"
          ],
          [
            "输出 3",
            "解释缓存补传需要哪些字段"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "与前后章节的连接",
        "tag": "全书骨架",
        "lead": "船联网教材的八章内容按“技术底座 -> 系统结构 -> 数据链路 -> 应用趋势”推进。",
        "items": [
          [
            "上一层基础",
            "第 4 章提供前置边界与能力"
          ],
          [
            "本章贡献",
            "覆盖、时延、费用和可靠性的工程取舍"
          ],
          [
            "下一层去向",
            "第 6 章继续展开相关技术链条"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "四课时分配",
        "tag": "时间结构",
        "lead": "每章对应 4 个课时，建议按两次连续学习组织。",
        "items": [
          [
            "第 1 课时",
            "通信链路的位置与指标"
          ],
          [
            "第 2 课时",
            "船内网络与本地汇聚"
          ],
          [
            "第 3 课时",
            "船船与船岸通信"
          ],
          [
            "第 4 课时",
            "多链路管理与降级"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "常见误解",
        "tag": "概念校准",
        "lead": "下面的表述会削弱对船联网工程系统的理解。",
        "items": [
          [
            "误解 1",
            "只追求高带宽"
          ],
          [
            "误解 2",
            "忽略抖动对实时业务的影响"
          ],
          [
            "误解 3",
            "关键业务与批量同步混用同一策略"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "数字教材与章节资源",
        "tag": "主入口",
        "lead": "数字教材与章节资源提供概念阅读、案例材料和实验入口。",
        "resources": [
          {
            "label": "《物联网与传感网技术》数字教材",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          },
          {
            "label": "第 5 章教材资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch05/index.html"
          }
        ]
      },
      {
        "type": "closing",
        "title": "本章结论",
        "tag": "Chapter 5",
        "lead": "比较不同链路特征；设计三类业务优先级；解释缓存补传需要哪些字段",
        "points": [
          "核心链路：船内采集 -> 本地汇聚 -> 链路探测 -> 业务分级 -> 多链路选择 -> 补传对账",
          "关键指标：带宽、时延、抖动、费用、覆盖",
          "下一步：进入数字教材与章节资源继续查看章节资源"
        ]
      }
    ]
  },
  "chapter-06": {
    "title": "船联网数据治理",
    "subtitle": "把原始数据变成可共享、可分析、可追溯的信息产品",
    "chapter": "Chapter 6",
    "shortBook": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/",
    "visual": "assets/ch06.svg",
    "color": "#4b587c",
    "accent": "#b64f3a",
    "references": [
      {
        "label": "教材第 6 章",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch06/index.html"
      },
      {
        "label": "L11 解析存储",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L11/index.html"
      },
      {
        "label": "L12 融合分析",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L12/index.html"
      },
      {
        "label": "Lab05 轨迹可视化",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab05/index.html"
      },
      {
        "label": "Lab07 多源融合",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab07/index.html"
      },
      {
        "label": "轨迹数据",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ais-samples/vessel_tracks.csv"
      },
      {
        "label": "治理批次样本",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/governance/ais_quality_batch.csv"
      },
      {
        "label": "版本审计样本",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/governance/version_audit_sample.csv"
      }
    ],
    "slides": [
      {
        "type": "cover",
        "title": "船联网数据治理",
        "tag": "Chapter 6",
        "lead": "把原始数据变成可共享、可分析、可追溯的信息产品",
        "meta": [
          "物联网与传感网技术",
          "4 课时",
          "本科课程"
        ],
        "links": [
          {
            "label": "数字教材与章节资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          }
        ]
      },
      {
        "type": "cards",
        "title": "本章位置",
        "tag": "32 课时结构",
        "lead": "第 6 章对应 4 个课时，围绕“把原始数据变成可共享、可分析、可追溯的信息产品”展开。",
        "items": [
          [
            "第 1 课时",
            "数据类型与时间语义"
          ],
          [
            "第 2 课时",
            "字典、解析与异常处理"
          ],
          [
            "第 3 课时",
            "分层存储与融合分析"
          ],
          [
            "第 4 课时",
            "一致性、补传和版本对账"
          ]
        ]
      },
      {
        "type": "process",
        "title": "四课时路径",
        "tag": "学习路线",
        "steps": [
          [
            "第 1 课时",
            "数据类型与时间语义"
          ],
          [
            "第 2 课时",
            "字典、解析与异常处理"
          ],
          [
            "第 3 课时",
            "分层存储与融合分析"
          ],
          [
            "第 4 课时",
            "一致性、补传和版本对账"
          ]
        ]
      },
      {
        "type": "chips",
        "title": "术语坐标",
        "tag": "核心词",
        "lead": "本章先把术语放到系统位置中理解，再进入案例、样本和应用边界。",
        "chips": [
          "原始层",
          "清洗层",
          "融合层",
          "产品层",
          "幂等",
          "版本对账"
        ]
      },
      {
        "type": "pipeline",
        "title": "系统链路",
        "tag": "从输入到服务",
        "steps": [
          "原始采集",
          "解析校验",
          "字典映射",
          "异常处理",
          "融合分析",
          "共享服务"
        ]
      },
      {
        "type": "focus",
        "title": "01 类型分层",
        "tag": "教材主线",
        "figure": "1",
        "lead": "原始报文、结构化记录、融合结果和业务产品具有不同治理要求。",
        "points": [
          "在系统中的位置：原始采集",
          "关联指标：字段单位",
          "后续连接：AIS 解析"
        ]
      },
      {
        "type": "focus",
        "title": "02 时间语义",
        "tag": "教材主线",
        "figure": "2",
        "lead": "采集时间、到达时间和处理时间要分清，避免轨迹和事件错位。",
        "points": [
          "在系统中的位置：解析校验",
          "关联指标：时间语义",
          "后续连接：轨迹清洗"
        ]
      },
      {
        "type": "focus",
        "title": "03 数据字典",
        "tag": "教材主线",
        "figure": "3",
        "lead": "字段名、单位、坐标、精度和版本统一是跨系统共享的基础。",
        "points": [
          "在系统中的位置：字典映射",
          "关联指标：缺失率",
          "后续连接：数据字典"
        ]
      },
      {
        "type": "focus",
        "title": "04 解析流程",
        "tag": "教材主线",
        "figure": "4",
        "lead": "真实样例需要处理异常、缺失、重复、非法值和来源差异。",
        "points": [
          "在系统中的位置：异常处理",
          "关联指标：重复率",
          "后续连接：融合对齐"
        ]
      },
      {
        "type": "focus",
        "title": "05 分层存储",
        "tag": "教材主线",
        "figure": "5",
        "lead": "船端侧重可用与补传，岸端侧重历史、检索、分析和共享。",
        "points": [
          "在系统中的位置：融合分析",
          "关联指标：版本号",
          "后续连接：分层存储"
        ]
      },
      {
        "type": "focus",
        "title": "06 一致性治理",
        "tag": "教材主线",
        "figure": "6",
        "lead": "缓存补传、幂等标识、版本对账和审计记录保证结果可信。",
        "points": [
          "在系统中的位置：共享服务",
          "关联指标：审计记录",
          "后续连接：版本对账"
        ]
      },
      {
        "type": "matrix",
        "title": "概念矩阵",
        "tag": "关系辨析",
        "cells": [
          "概念",
          "系统位置",
          "关键指标",
          "应用入口",
          "原始层",
          "原始采集",
          "字段单位",
          "AIS 解析",
          "清洗层",
          "解析校验",
          "时间语义",
          "轨迹清洗",
          "融合层",
          "字典映射",
          "缺失率",
          "数据字典"
        ]
      },
      {
        "type": "scenario",
        "title": "典型场景",
        "tag": "场景入口",
        "lead": "AIS 轨迹、机舱状态和通信日志在不同时间到达，岸端需要完成对齐、清洗、融合和共享。",
        "points": [
          "关键对象：原始层、清洗层、融合层",
          "关键链路：原始采集 -> 解析校验 -> 字典映射 -> 异常处理",
          "关键指标：字段单位、时间语义、缺失率、重复率"
        ]
      },
      {
        "type": "cards",
        "title": "第一次课时块的结构沉淀",
        "tag": "结构整合",
        "lead": "前两个课时负责建立概念边界、系统位置和技术链路。",
        "items": [
          [
            "概念",
            "原始层、清洗层、融合层"
          ],
          [
            "链路",
            "原始采集 -> 解析校验 -> 字典映射 -> 异常处理"
          ],
          [
            "指标",
            "字段单位、时间语义、缺失率、重复率"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "教材与范例资源",
        "tag": "资源入口",
        "lead": "以下入口来自已整理的教材数字资源，保留八章主线内容。",
        "resources": [
          {
            "label": "教材第 6 章",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch06/index.html"
          },
          {
            "label": "L11 解析存储",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L11/index.html"
          },
          {
            "label": "L12 融合分析",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L12/index.html"
          },
          {
            "label": "Lab05 轨迹可视化",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab05/index.html"
          }
        ]
      },
      {
        "type": "divider",
        "title": "从教材概念进入工程样本",
        "tag": "第二次课时块",
        "lead": "后两个课时把本章概念放入数据样本、实验入口、故障限制和工程取舍。"
      },
      {
        "type": "cards",
        "title": "01 AIS 解析",
        "tag": "应用展开",
        "lead": "原始 NMEA 报文转换为 MMSI、经纬度、航速和航向等字段。",
        "items": [
          [
            "输入",
            "原始采集 产生的数据或状态。"
          ],
          [
            "处理",
            "原始 NMEA 报文转换为 MMSI、经纬度、航速和航向等字段。"
          ],
          [
            "输出",
            "字段单位 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "02 轨迹清洗",
        "tag": "应用展开",
        "lead": "时间排序、异常跳点、速度阈值和重复点处理形成可用轨迹。",
        "items": [
          [
            "输入",
            "解析校验 产生的数据或状态。"
          ],
          [
            "处理",
            "时间排序、异常跳点、速度阈值和重复点处理形成可用轨迹。"
          ],
          [
            "输出",
            "时间语义 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "03 数据字典",
        "tag": "应用展开",
        "lead": "同一字段在不同系统内的名称、单位和精度需要统一。",
        "items": [
          [
            "输入",
            "字典映射 产生的数据或状态。"
          ],
          [
            "处理",
            "同一字段在不同系统内的名称、单位和精度需要统一。"
          ],
          [
            "输出",
            "缺失率 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "04 融合对齐",
        "tag": "应用展开",
        "lead": "不同来源数据按时间和对象进行对齐，形成综合态势。",
        "items": [
          [
            "输入",
            "异常处理 产生的数据或状态。"
          ],
          [
            "处理",
            "不同来源数据按时间和对象进行对齐，形成综合态势。"
          ],
          [
            "输出",
            "重复率 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "05 分层存储",
        "tag": "应用展开",
        "lead": "原始层保留追溯，产品层服务展示、告警和统计。",
        "items": [
          [
            "输入",
            "融合分析 产生的数据或状态。"
          ],
          [
            "处理",
            "原始层保留追溯，产品层服务展示、告警和统计。"
          ],
          [
            "输出",
            "版本号 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "06 版本对账",
        "tag": "应用展开",
        "lead": "补传数据进入系统后，需要确认是否重复、覆盖或新增。",
        "items": [
          [
            "输入",
            "共享服务 产生的数据或状态。"
          ],
          [
            "处理",
            "补传数据进入系统后，需要确认是否重复、覆盖或新增。"
          ],
          [
            "输出",
            "审计记录 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "限制与风险",
        "tag": "工程边界",
        "lead": "真实系统的价值来自对限制条件的处理。",
        "items": [
          [
            "边界 1",
            "混用三类时间"
          ],
          [
            "边界 2",
            "缺少字段单位"
          ],
          [
            "边界 3",
            "清洗过程不可追溯"
          ],
          [
            "边界 4",
            "补传数据造成重复统计"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "指标与字段",
        "tag": "数据表达",
        "lead": "指标让本章概念能够进入报文、日志、表格和服务接口。",
        "items": [
          [
            "指标 1",
            "字段单位"
          ],
          [
            "指标 2",
            "时间语义"
          ],
          [
            "指标 3",
            "缺失率"
          ],
          [
            "指标 4",
            "重复率"
          ],
          [
            "指标 5",
            "版本号"
          ],
          [
            "指标 6",
            "审计记录"
          ]
        ]
      },
      {
        "type": "pipeline",
        "title": "案例链路",
        "tag": "从问题到服务",
        "steps": [
          "原始采集",
          "解析校验",
          "字典映射",
          "异常处理",
          "融合分析",
          "共享服务"
        ]
      },
      {
        "type": "cards",
        "title": "对象、数据与服务",
        "tag": "三层对应",
        "lead": "同一个问题可以从物理对象、数据表达和服务输出三个层次理解。",
        "items": [
          [
            "对象层",
            "原始层、清洗层 是本章首先识别的对象。"
          ],
          [
            "数据层",
            "字段单位、时间语义 让对象状态进入可计算表达。"
          ],
          [
            "服务层",
            "AIS 解析、轨迹清洗 把数据转化为业务能力。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "运行条件与限制",
        "tag": "海上约束",
        "lead": "船联网系统需要在移动平台、弱网链路和安全边界下保持稳定表达。",
        "items": [
          [
            "移动平台",
            "船舶位置、姿态、环境和业务状态持续变化。"
          ],
          [
            "链路波动",
            "带宽、时延、费用和覆盖共同影响数据同步策略。"
          ],
          [
            "安全边界",
            "远程接入、数据共享和设备控制需要明确权限与审计。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "样本分析路径",
        "tag": "从文件到判断",
        "lead": "教材资源中的报文、日志、轨迹和图像样本都可以按统一路径分析。",
        "items": [
          [
            "读取",
            "确认文件来源、字段含义、编码格式和时间范围。"
          ],
          [
            "校核",
            "检查缺失、重复、异常值、单位和坐标口径。"
          ],
          [
            "解释",
            "把样本结果放回航行、运维、监管或能效场景。"
          ]
        ]
      },
      {
        "type": "matrix",
        "title": "整章结构表",
        "tag": "结构总览",
        "cells": [
          "层次",
          "问题",
          "表达",
          "输出",
          "概念层",
          "把原始数据变成可共享、可分析、可追溯的信息产品",
          "原始层、清洗层、融合层",
          "区分三类时间语义",
          "系统层",
          "原始采集 -> 解析校验 -> 字典映射",
          "字段单位、时间语义、缺失率",
          "设计最小数据字典",
          "应用层",
          "AIS 解析、轨迹清洗",
          "教材第 6 章、L11 解析存储",
          "说明轨迹清洗和版本对账流程"
        ]
      },
      {
        "type": "resources",
        "title": "实验、数据与交互入口",
        "tag": "资源入口",
        "lead": "这些入口用于把章节知识落到可查看、可运行、可分析的对象。",
        "resources": [
          {
            "label": "Lab07 多源融合",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab07/index.html"
          },
          {
            "label": "轨迹数据",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ais-samples/vessel_tracks.csv"
          },
          {
            "label": "治理批次样本",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/governance/ais_quality_batch.csv"
          },
          {
            "label": "版本审计样本",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/governance/version_audit_sample.csv"
          }
        ]
      },
      {
        "type": "cards",
        "title": "章节输出",
        "tag": "学习成果",
        "lead": "本章完成后，应能把概念、链路和数据表达连成完整说明。",
        "items": [
          [
            "输出 1",
            "区分三类时间语义"
          ],
          [
            "输出 2",
            "设计最小数据字典"
          ],
          [
            "输出 3",
            "说明轨迹清洗和版本对账流程"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "与前后章节的连接",
        "tag": "全书骨架",
        "lead": "船联网教材的八章内容按“技术底座 -> 系统结构 -> 数据链路 -> 应用趋势”推进。",
        "items": [
          [
            "上一层基础",
            "第 5 章提供前置边界与能力"
          ],
          [
            "本章贡献",
            "把原始数据变成可共享、可分析、可追溯的信息产品"
          ],
          [
            "下一层去向",
            "第 7 章继续展开相关技术链条"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "四课时分配",
        "tag": "时间结构",
        "lead": "每章对应 4 个课时，建议按两次连续学习组织。",
        "items": [
          [
            "第 1 课时",
            "数据类型与时间语义"
          ],
          [
            "第 2 课时",
            "字典、解析与异常处理"
          ],
          [
            "第 3 课时",
            "分层存储与融合分析"
          ],
          [
            "第 4 课时",
            "一致性、补传和版本对账"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "常见误解",
        "tag": "概念校准",
        "lead": "下面的表述会削弱对船联网工程系统的理解。",
        "items": [
          [
            "误解 1",
            "混用三类时间"
          ],
          [
            "误解 2",
            "缺少字段单位"
          ],
          [
            "误解 3",
            "清洗过程不可追溯"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "数字教材与章节资源",
        "tag": "主入口",
        "lead": "数字教材与章节资源提供概念阅读、案例材料和实验入口。",
        "resources": [
          {
            "label": "《物联网与传感网技术》数字教材",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          },
          {
            "label": "第 6 章教材资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch06/index.html"
          }
        ]
      },
      {
        "type": "closing",
        "title": "本章结论",
        "tag": "Chapter 6",
        "lead": "区分三类时间语义；设计最小数据字典；说明轨迹清洗和版本对账流程",
        "points": [
          "核心链路：原始采集 -> 解析校验 -> 字典映射 -> 异常处理 -> 融合分析 -> 共享服务",
          "关键指标：字段单位、时间语义、缺失率、重复率、版本号",
          "下一步：进入数字教材与章节资源继续查看章节资源"
        ]
      }
    ]
  },
  "chapter-07": {
    "title": "船联网安全机制",
    "subtitle": "在攻击、误操作和弱网条件下保持可信与可用",
    "chapter": "Chapter 7",
    "shortBook": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/",
    "visual": "assets/ch07.svg",
    "color": "#4f334f",
    "accent": "#c87b2f",
    "references": [
      {
        "label": "教材第 7 章",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch07/index.html"
      },
      {
        "label": "L13 威胁模型",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L13/index.html"
      },
      {
        "label": "L14 降级运行",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L14/index.html"
      },
      {
        "label": "Lab08 安全实验",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab08/index.html"
      },
      {
        "label": "安全日志",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/security/security_log_sample.csv"
      },
      {
        "label": "异常数据",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/security/anomaly_data.csv"
      }
    ],
    "slides": [
      {
        "type": "cover",
        "title": "船联网安全机制",
        "tag": "Chapter 7",
        "lead": "在攻击、误操作和弱网条件下保持可信与可用",
        "meta": [
          "物联网与传感网技术",
          "4 课时",
          "本科课程"
        ],
        "links": [
          {
            "label": "数字教材与章节资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          }
        ]
      },
      {
        "type": "cards",
        "title": "本章位置",
        "tag": "32 课时结构",
        "lead": "第 7 章对应 4 个课时，围绕“在攻击、误操作和弱网条件下保持可信与可用”展开。",
        "items": [
          [
            "第 1 课时",
            "安全目标与威胁模型"
          ],
          [
            "第 2 课时",
            "攻击面与风险分级"
          ],
          [
            "第 3 课时",
            "认证、加密、审计与分区"
          ],
          [
            "第 4 课时",
            "远程运维、补丁和降级"
          ]
        ]
      },
      {
        "type": "process",
        "title": "四课时路径",
        "tag": "学习路线",
        "steps": [
          [
            "第 1 课时",
            "安全目标与威胁模型"
          ],
          [
            "第 2 课时",
            "攻击面与风险分级"
          ],
          [
            "第 3 课时",
            "认证、加密、审计与分区"
          ],
          [
            "第 4 课时",
            "远程运维、补丁和降级"
          ]
        ]
      },
      {
        "type": "chips",
        "title": "术语坐标",
        "tag": "核心词",
        "lead": "本章先把术语放到系统位置中理解，再进入案例、样本和应用边界。",
        "chips": [
          "身份认证",
          "访问控制",
          "加密",
          "完整性",
          "审计日志",
          "降级运行"
        ]
      },
      {
        "type": "pipeline",
        "title": "系统链路",
        "tag": "从输入到服务",
        "steps": [
          "资产识别",
          "威胁建模",
          "分区隔离",
          "访问控制",
          "日志审计",
          "应急恢复"
        ]
      },
      {
        "type": "focus",
        "title": "01 安全目标",
        "tag": "教材主线",
        "figure": "1",
        "lead": "船联网安全同时关注机密性、完整性、可用性、可追溯和业务连续性。",
        "points": [
          "在系统中的位置：资产识别",
          "关联指标：资产等级",
          "后续连接：设备安全"
        ]
      },
      {
        "type": "focus",
        "title": "02 威胁模型",
        "tag": "教材主线",
        "figure": "2",
        "lead": "攻击者能力、入口、目标资产和可能后果共同构成风险分析框架。",
        "points": [
          "在系统中的位置：威胁建模",
          "关联指标：访问权限",
          "后续连接：网络分区"
        ]
      },
      {
        "type": "focus",
        "title": "03 攻击面",
        "tag": "教材主线",
        "figure": "3",
        "lead": "设备侧、网络侧、数据侧和人员流程侧都可能引入风险。",
        "points": [
          "在系统中的位置：分区隔离",
          "关联指标：加密状态",
          "后续连接：数据保护"
        ]
      },
      {
        "type": "focus",
        "title": "04 防护机制",
        "tag": "教材主线",
        "figure": "4",
        "lead": "身份认证、访问控制、加密、完整性校验和日志审计形成基础防线。",
        "points": [
          "在系统中的位置：访问控制",
          "关联指标：日志完整性",
          "后续连接：审计日志"
        ]
      },
      {
        "type": "focus",
        "title": "05 可用性协调",
        "tag": "教材主线",
        "figure": "5",
        "lead": "安全策略需要服务航行安全，关键业务进入可解释的降级状态。",
        "points": [
          "在系统中的位置：日志审计",
          "关联指标：告警级别",
          "后续连接：降级策略"
        ]
      },
      {
        "type": "focus",
        "title": "06 运维合规",
        "tag": "教材主线",
        "figure": "6",
        "lead": "远程运维、补丁、备份、恢复和合规记录支撑长期运行。",
        "points": [
          "在系统中的位置：应急恢复",
          "关联指标：恢复时间",
          "后续连接：备份恢复"
        ]
      },
      {
        "type": "matrix",
        "title": "概念矩阵",
        "tag": "关系辨析",
        "cells": [
          "概念",
          "系统位置",
          "关键指标",
          "应用入口",
          "身份认证",
          "资产识别",
          "资产等级",
          "设备安全",
          "访问控制",
          "威胁建模",
          "访问权限",
          "网络分区",
          "加密",
          "分区隔离",
          "加密状态",
          "数据保护"
        ]
      },
      {
        "type": "scenario",
        "title": "典型场景",
        "tag": "场景入口",
        "lead": "岸端远程维护船载网关时，系统需要身份校验、最小权限、操作记录和异常回退。",
        "points": [
          "关键对象：身份认证、访问控制、加密",
          "关键链路：资产识别 -> 威胁建模 -> 分区隔离 -> 访问控制",
          "关键指标：资产等级、访问权限、加密状态、日志完整性"
        ]
      },
      {
        "type": "cards",
        "title": "第一次课时块的结构沉淀",
        "tag": "结构整合",
        "lead": "前两个课时负责建立概念边界、系统位置和技术链路。",
        "items": [
          [
            "概念",
            "身份认证、访问控制、加密"
          ],
          [
            "链路",
            "资产识别 -> 威胁建模 -> 分区隔离 -> 访问控制"
          ],
          [
            "指标",
            "资产等级、访问权限、加密状态、日志完整性"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "教材与范例资源",
        "tag": "资源入口",
        "lead": "以下入口来自已整理的教材数字资源，保留八章主线内容。",
        "resources": [
          {
            "label": "教材第 7 章",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch07/index.html"
          },
          {
            "label": "L13 威胁模型",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L13/index.html"
          },
          {
            "label": "L14 降级运行",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L14/index.html"
          },
          {
            "label": "Lab08 安全实验",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab08/index.html"
          }
        ]
      },
      {
        "type": "divider",
        "title": "从教材概念进入工程样本",
        "tag": "第二次课时块",
        "lead": "后两个课时把本章概念放入数据样本、实验入口、故障限制和工程取舍。"
      },
      {
        "type": "cards",
        "title": "01 设备安全",
        "tag": "应用展开",
        "lead": "默认口令、固件版本和物理接入是船端设备常见风险点。",
        "items": [
          [
            "输入",
            "资产识别 产生的数据或状态。"
          ],
          [
            "处理",
            "默认口令、固件版本和物理接入是船端设备常见风险点。"
          ],
          [
            "输出",
            "资产等级 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "02 网络分区",
        "tag": "应用展开",
        "lead": "导航关键区、业务区和外部接入区需要明确边界。",
        "items": [
          [
            "输入",
            "威胁建模 产生的数据或状态。"
          ],
          [
            "处理",
            "导航关键区、业务区和外部接入区需要明确边界。"
          ],
          [
            "输出",
            "访问权限 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "03 数据保护",
        "tag": "应用展开",
        "lead": "加密、签名和校验保护传输与存储过程中的完整性。",
        "items": [
          [
            "输入",
            "分区隔离 产生的数据或状态。"
          ],
          [
            "处理",
            "加密、签名和校验保护传输与存储过程中的完整性。"
          ],
          [
            "输出",
            "加密状态 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "04 审计日志",
        "tag": "应用展开",
        "lead": "登录、配置变更、数据访问和远程命令都需要可追溯。",
        "items": [
          [
            "输入",
            "访问控制 产生的数据或状态。"
          ],
          [
            "处理",
            "登录、配置变更、数据访问和远程命令都需要可追溯。"
          ],
          [
            "输出",
            "日志完整性 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "05 降级策略",
        "tag": "应用展开",
        "lead": "弱网或攻击状态下保留关键安全信息，暂停低优先级服务。",
        "items": [
          [
            "输入",
            "日志审计 产生的数据或状态。"
          ],
          [
            "处理",
            "弱网或攻击状态下保留关键安全信息，暂停低优先级服务。"
          ],
          [
            "输出",
            "告警级别 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "06 备份恢复",
        "tag": "应用展开",
        "lead": "配置备份、版本管理和恢复流程决定事故后恢复速度。",
        "items": [
          [
            "输入",
            "应急恢复 产生的数据或状态。"
          ],
          [
            "处理",
            "配置备份、版本管理和恢复流程决定事故后恢复速度。"
          ],
          [
            "输出",
            "恢复时间 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "限制与风险",
        "tag": "工程边界",
        "lead": "真实系统的价值来自对限制条件的处理。",
        "items": [
          [
            "边界 1",
            "安全机制只停留在术语"
          ],
          [
            "边界 2",
            "远程运维权限过大"
          ],
          [
            "边界 3",
            "日志不可追溯"
          ],
          [
            "边界 4",
            "弱网时简单关闭安全控制"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "指标与字段",
        "tag": "数据表达",
        "lead": "指标让本章概念能够进入报文、日志、表格和服务接口。",
        "items": [
          [
            "指标 1",
            "资产等级"
          ],
          [
            "指标 2",
            "访问权限"
          ],
          [
            "指标 3",
            "加密状态"
          ],
          [
            "指标 4",
            "日志完整性"
          ],
          [
            "指标 5",
            "告警级别"
          ],
          [
            "指标 6",
            "恢复时间"
          ]
        ]
      },
      {
        "type": "pipeline",
        "title": "案例链路",
        "tag": "从问题到服务",
        "steps": [
          "资产识别",
          "威胁建模",
          "分区隔离",
          "访问控制",
          "日志审计",
          "应急恢复"
        ]
      },
      {
        "type": "cards",
        "title": "对象、数据与服务",
        "tag": "三层对应",
        "lead": "同一个问题可以从物理对象、数据表达和服务输出三个层次理解。",
        "items": [
          [
            "对象层",
            "身份认证、访问控制 是本章首先识别的对象。"
          ],
          [
            "数据层",
            "资产等级、访问权限 让对象状态进入可计算表达。"
          ],
          [
            "服务层",
            "设备安全、网络分区 把数据转化为业务能力。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "运行条件与限制",
        "tag": "海上约束",
        "lead": "船联网系统需要在移动平台、弱网链路和安全边界下保持稳定表达。",
        "items": [
          [
            "移动平台",
            "船舶位置、姿态、环境和业务状态持续变化。"
          ],
          [
            "链路波动",
            "带宽、时延、费用和覆盖共同影响数据同步策略。"
          ],
          [
            "安全边界",
            "远程接入、数据共享和设备控制需要明确权限与审计。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "样本分析路径",
        "tag": "从文件到判断",
        "lead": "教材资源中的报文、日志、轨迹和图像样本都可以按统一路径分析。",
        "items": [
          [
            "读取",
            "确认文件来源、字段含义、编码格式和时间范围。"
          ],
          [
            "校核",
            "检查缺失、重复、异常值、单位和坐标口径。"
          ],
          [
            "解释",
            "把样本结果放回航行、运维、监管或能效场景。"
          ]
        ]
      },
      {
        "type": "matrix",
        "title": "整章结构表",
        "tag": "结构总览",
        "cells": [
          "层次",
          "问题",
          "表达",
          "输出",
          "概念层",
          "在攻击、误操作和弱网条件下保持可信与可用",
          "身份认证、访问控制、加密",
          "画出最小安全分区",
          "系统层",
          "资产识别 -> 威胁建模 -> 分区隔离",
          "资产等级、访问权限、加密状态",
          "写出远程运维访问规则",
          "应用层",
          "设备安全、网络分区",
          "教材第 7 章、L13 威胁模型",
          "说明安全事件如何影响航行风险"
        ]
      },
      {
        "type": "resources",
        "title": "实验、数据与交互入口",
        "tag": "资源入口",
        "lead": "这些入口用于把章节知识落到可查看、可运行、可分析的对象。",
        "resources": [
          {
            "label": "安全日志",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/security/security_log_sample.csv"
          },
          {
            "label": "异常数据",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/security/anomaly_data.csv"
          }
        ]
      },
      {
        "type": "cards",
        "title": "章节输出",
        "tag": "学习成果",
        "lead": "本章完成后，应能把概念、链路和数据表达连成完整说明。",
        "items": [
          [
            "输出 1",
            "画出最小安全分区"
          ],
          [
            "输出 2",
            "写出远程运维访问规则"
          ],
          [
            "输出 3",
            "说明安全事件如何影响航行风险"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "与前后章节的连接",
        "tag": "全书骨架",
        "lead": "船联网教材的八章内容按“技术底座 -> 系统结构 -> 数据链路 -> 应用趋势”推进。",
        "items": [
          [
            "上一层基础",
            "第 6 章提供前置边界与能力"
          ],
          [
            "本章贡献",
            "在攻击、误操作和弱网条件下保持可信与可用"
          ],
          [
            "下一层去向",
            "第 8 章继续展开相关技术链条"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "四课时分配",
        "tag": "时间结构",
        "lead": "每章对应 4 个课时，建议按两次连续学习组织。",
        "items": [
          [
            "第 1 课时",
            "安全目标与威胁模型"
          ],
          [
            "第 2 课时",
            "攻击面与风险分级"
          ],
          [
            "第 3 课时",
            "认证、加密、审计与分区"
          ],
          [
            "第 4 课时",
            "远程运维、补丁和降级"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "常见误解",
        "tag": "概念校准",
        "lead": "下面的表述会削弱对船联网工程系统的理解。",
        "items": [
          [
            "误解 1",
            "安全机制只停留在术语"
          ],
          [
            "误解 2",
            "远程运维权限过大"
          ],
          [
            "误解 3",
            "日志不可追溯"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "数字教材与章节资源",
        "tag": "主入口",
        "lead": "数字教材与章节资源提供概念阅读、案例材料和实验入口。",
        "resources": [
          {
            "label": "《物联网与传感网技术》数字教材",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          },
          {
            "label": "第 7 章教材资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch07/index.html"
          }
        ]
      },
      {
        "type": "closing",
        "title": "本章结论",
        "tag": "Chapter 7",
        "lead": "画出最小安全分区；写出远程运维访问规则；说明安全事件如何影响航行风险",
        "points": [
          "核心链路：资产识别 -> 威胁建模 -> 分区隔离 -> 访问控制 -> 日志审计 -> 应急恢复",
          "关键指标：资产等级、访问权限、加密状态、日志完整性、告警级别",
          "下一步：进入数字教材与章节资源继续查看章节资源"
        ]
      }
    ]
  },
  "chapter-08": {
    "title": "典型应用发展趋势",
    "subtitle": "把前七章能力落到船岸协同、监管、运维和绿色航运",
    "chapter": "Chapter 8",
    "shortBook": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/",
    "visual": "assets/ch08.svg",
    "color": "#0d5261",
    "accent": "#af5d2c",
    "references": [
      {
        "label": "教材第 8 章",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch08/index.html"
      },
      {
        "label": "L15 船岸协同",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L15/index.html"
      },
      {
        "label": "L16 绿色航运",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L16/index.html"
      },
      {
        "label": "轨迹回放",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/simulations/trajectory-player/index.html"
      },
      {
        "label": "海事数据教程",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/tutorials/maritime-data/index.html"
      },
      {
        "label": "数据资源总览",
        "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/index.html"
      }
    ],
    "slides": [
      {
        "type": "cover",
        "title": "典型应用发展趋势",
        "tag": "Chapter 8",
        "lead": "把前七章能力落到船岸协同、监管、运维和绿色航运",
        "meta": [
          "物联网与传感网技术",
          "4 课时",
          "本科课程"
        ],
        "links": [
          {
            "label": "数字教材与章节资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          }
        ]
      },
      {
        "type": "cards",
        "title": "本章位置",
        "tag": "32 课时结构",
        "lead": "第 8 章对应 4 个课时，围绕“把前七章能力落到船岸协同、监管、运维和绿色航运”展开。",
        "items": [
          [
            "第 1 课时",
            "船岸协同航行支持"
          ],
          [
            "第 2 课时",
            "海事监管与应急取证"
          ],
          [
            "第 3 课时",
            "远程运维与状态监控"
          ],
          [
            "第 4 课时",
            "绿色航运与智能航海"
          ]
        ]
      },
      {
        "type": "process",
        "title": "四课时路径",
        "tag": "学习路线",
        "steps": [
          [
            "第 1 课时",
            "船岸协同航行支持"
          ],
          [
            "第 2 课时",
            "海事监管与应急取证"
          ],
          [
            "第 3 课时",
            "远程运维与状态监控"
          ],
          [
            "第 4 课时",
            "绿色航运与智能航海"
          ]
        ]
      },
      {
        "type": "chips",
        "title": "术语坐标",
        "tag": "核心词",
        "lead": "本章先把术语放到系统位置中理解，再进入案例、样本和应用边界。",
        "chips": [
          "航行支持",
          "监管服务",
          "远程运维",
          "能效指标",
          "人机协同",
          "测试评估"
        ]
      },
      {
        "type": "pipeline",
        "title": "系统链路",
        "tag": "从输入到服务",
        "steps": [
          "业务需求",
          "数据输入",
          "模型处理",
          "服务输出",
          "边界说明",
          "评估改进"
        ]
      },
      {
        "type": "focus",
        "title": "01 航行支持",
        "tag": "教材主线",
        "figure": "1",
        "lead": "船岸协同通过态势共享、风险识别和动态优化提升航行服务能力。",
        "points": [
          "在系统中的位置：业务需求",
          "关联指标：风险等级",
          "后续连接：船岸协同"
        ]
      },
      {
        "type": "focus",
        "title": "02 监管服务",
        "tag": "教材主线",
        "figure": "2",
        "lead": "海事监管和应急响应依赖可追溯数据、轨迹分析和事件记录。",
        "points": [
          "在系统中的位置：数据输入",
          "关联指标：响应时间",
          "后续连接：动态优化"
        ]
      },
      {
        "type": "focus",
        "title": "03 远程运维",
        "tag": "教材主线",
        "figure": "3",
        "lead": "设备状态、告警、版本和维修记录支撑岸端运维协同。",
        "points": [
          "在系统中的位置：模型处理",
          "关联指标：设备健康",
          "后续连接：海事监管"
        ]
      },
      {
        "type": "focus",
        "title": "04 绿色航运",
        "tag": "教材主线",
        "figure": "4",
        "lead": "能效指标、燃油消耗、航速优化和排放合规成为重要应用方向。",
        "points": [
          "在系统中的位置：服务输出",
          "关联指标：燃油消耗",
          "后续连接：远程运维"
        ]
      },
      {
        "type": "focus",
        "title": "05 智能航海",
        "tag": "教材主线",
        "figure": "5",
        "lead": "人机协同、责任边界和自主能力评估连接未来 MASS 与船联网。",
        "points": [
          "在系统中的位置：边界说明",
          "关联指标：排放指标",
          "后续连接：绿色航运"
        ]
      },
      {
        "type": "focus",
        "title": "06 测试评估",
        "tag": "教材主线",
        "figure": "6",
        "lead": "需求表达、标准约束、数据质量和场景验证决定应用能否落地。",
        "points": [
          "在系统中的位置：评估改进",
          "关联指标：服务可用率",
          "后续连接：智能航海"
        ]
      },
      {
        "type": "matrix",
        "title": "概念矩阵",
        "tag": "关系辨析",
        "cells": [
          "概念",
          "系统位置",
          "关键指标",
          "应用入口",
          "航行支持",
          "业务需求",
          "风险等级",
          "船岸协同",
          "监管服务",
          "数据输入",
          "响应时间",
          "动态优化",
          "远程运维",
          "模型处理",
          "设备健康",
          "海事监管"
        ]
      },
      {
        "type": "scenario",
        "title": "典型场景",
        "tag": "场景入口",
        "lead": "一条航线从港口出发进入远洋，船岸系统持续提供交通态势、设备状态、能效优化和风险记录。",
        "points": [
          "关键对象：航行支持、监管服务、远程运维",
          "关键链路：业务需求 -> 数据输入 -> 模型处理 -> 服务输出",
          "关键指标：风险等级、响应时间、设备健康、燃油消耗"
        ]
      },
      {
        "type": "cards",
        "title": "第一次课时块的结构沉淀",
        "tag": "结构整合",
        "lead": "前两个课时负责建立概念边界、系统位置和技术链路。",
        "items": [
          [
            "概念",
            "航行支持、监管服务、远程运维"
          ],
          [
            "链路",
            "业务需求 -> 数据输入 -> 模型处理 -> 服务输出"
          ],
          [
            "指标",
            "风险等级、响应时间、设备健康、燃油消耗"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "教材与范例资源",
        "tag": "资源入口",
        "lead": "以下入口来自已整理的教材数字资源，保留八章主线内容。",
        "resources": [
          {
            "label": "教材第 8 章",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch08/index.html"
          },
          {
            "label": "L15 船岸协同",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L15/index.html"
          },
          {
            "label": "L16 绿色航运",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L16/index.html"
          },
          {
            "label": "轨迹回放",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/simulations/trajectory-player/index.html"
          }
        ]
      },
      {
        "type": "divider",
        "title": "从教材概念进入工程样本",
        "tag": "第二次课时块",
        "lead": "后两个课时把本章概念放入数据样本、实验入口、故障限制和工程取舍。"
      },
      {
        "type": "cards",
        "title": "01 船岸协同",
        "tag": "应用展开",
        "lead": "岸端提供态势、气象、航线和交通建议，船端保留航行决策责任边界。",
        "items": [
          [
            "输入",
            "业务需求 产生的数据或状态。"
          ],
          [
            "处理",
            "岸端提供态势、气象、航线和交通建议，船端保留航行决策责任边界。"
          ],
          [
            "输出",
            "风险等级 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "02 动态优化",
        "tag": "应用展开",
        "lead": "速度、航线、天气和港口窗口共同影响能效与到港计划。",
        "items": [
          [
            "输入",
            "数据输入 产生的数据或状态。"
          ],
          [
            "处理",
            "速度、航线、天气和港口窗口共同影响能效与到港计划。"
          ],
          [
            "输出",
            "响应时间 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "03 海事监管",
        "tag": "应用展开",
        "lead": "轨迹、身份、事件和通信记录支持监管服务与应急处置。",
        "items": [
          [
            "输入",
            "模型处理 产生的数据或状态。"
          ],
          [
            "处理",
            "轨迹、身份、事件和通信记录支持监管服务与应急处置。"
          ],
          [
            "输出",
            "设备健康 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "04 远程运维",
        "tag": "应用展开",
        "lead": "状态监控、告警分级和备件计划减少故障影响。",
        "items": [
          [
            "输入",
            "服务输出 产生的数据或状态。"
          ],
          [
            "处理",
            "状态监控、告警分级和备件计划减少故障影响。"
          ],
          [
            "输出",
            "燃油消耗 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "05 绿色航运",
        "tag": "应用展开",
        "lead": "能效和排放数据需要来源、口径和计算过程可追溯。",
        "items": [
          [
            "输入",
            "边界说明 产生的数据或状态。"
          ],
          [
            "处理",
            "能效和排放数据需要来源、口径和计算过程可追溯。"
          ],
          [
            "输出",
            "排放指标 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "06 智能航海",
        "tag": "应用展开",
        "lead": "船联网为智能航海提供数据、链路、治理和安全基础。",
        "items": [
          [
            "输入",
            "评估改进 产生的数据或状态。"
          ],
          [
            "处理",
            "船联网为智能航海提供数据、链路、治理和安全基础。"
          ],
          [
            "输出",
            "服务可用率 被转化为可判断、可共享的信息。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "限制与风险",
        "tag": "工程边界",
        "lead": "真实系统的价值来自对限制条件的处理。",
        "items": [
          [
            "边界 1",
            "只展示炫酷应用而忽略输入数据"
          ],
          [
            "边界 2",
            "服务边界不清"
          ],
          [
            "边界 3",
            "能效指标缺少数据来源"
          ],
          [
            "边界 4",
            "应用验证缺少场景覆盖"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "指标与字段",
        "tag": "数据表达",
        "lead": "指标让本章概念能够进入报文、日志、表格和服务接口。",
        "items": [
          [
            "指标 1",
            "风险等级"
          ],
          [
            "指标 2",
            "响应时间"
          ],
          [
            "指标 3",
            "设备健康"
          ],
          [
            "指标 4",
            "燃油消耗"
          ],
          [
            "指标 5",
            "排放指标"
          ],
          [
            "指标 6",
            "服务可用率"
          ]
        ]
      },
      {
        "type": "pipeline",
        "title": "案例链路",
        "tag": "从问题到服务",
        "steps": [
          "业务需求",
          "数据输入",
          "模型处理",
          "服务输出",
          "边界说明",
          "评估改进"
        ]
      },
      {
        "type": "cards",
        "title": "对象、数据与服务",
        "tag": "三层对应",
        "lead": "同一个问题可以从物理对象、数据表达和服务输出三个层次理解。",
        "items": [
          [
            "对象层",
            "航行支持、监管服务 是本章首先识别的对象。"
          ],
          [
            "数据层",
            "风险等级、响应时间 让对象状态进入可计算表达。"
          ],
          [
            "服务层",
            "船岸协同、动态优化 把数据转化为业务能力。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "运行条件与限制",
        "tag": "海上约束",
        "lead": "船联网系统需要在移动平台、弱网链路和安全边界下保持稳定表达。",
        "items": [
          [
            "移动平台",
            "船舶位置、姿态、环境和业务状态持续变化。"
          ],
          [
            "链路波动",
            "带宽、时延、费用和覆盖共同影响数据同步策略。"
          ],
          [
            "安全边界",
            "远程接入、数据共享和设备控制需要明确权限与审计。"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "样本分析路径",
        "tag": "从文件到判断",
        "lead": "教材资源中的报文、日志、轨迹和图像样本都可以按统一路径分析。",
        "items": [
          [
            "读取",
            "确认文件来源、字段含义、编码格式和时间范围。"
          ],
          [
            "校核",
            "检查缺失、重复、异常值、单位和坐标口径。"
          ],
          [
            "解释",
            "把样本结果放回航行、运维、监管或能效场景。"
          ]
        ]
      },
      {
        "type": "matrix",
        "title": "整章结构表",
        "tag": "结构总览",
        "cells": [
          "层次",
          "问题",
          "表达",
          "输出",
          "概念层",
          "把前七章能力落到船岸协同、监管、运维和绿色航运",
          "航行支持、监管服务、远程运维",
          "描述一个应用的输入、处理和输出",
          "系统层",
          "业务需求 -> 数据输入 -> 模型处理",
          "风险等级、响应时间、设备健康",
          "说明船岸协同支持的边界",
          "应用层",
          "船岸协同、动态优化",
          "教材第 8 章、L15 船岸协同",
          "解释绿色航运指标的数据链"
        ]
      },
      {
        "type": "resources",
        "title": "实验、数据与交互入口",
        "tag": "资源入口",
        "lead": "这些入口用于把章节知识落到可查看、可运行、可分析的对象。",
        "resources": [
          {
            "label": "海事数据教程",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/tutorials/maritime-data/index.html"
          },
          {
            "label": "数据资源总览",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/index.html"
          }
        ]
      },
      {
        "type": "cards",
        "title": "章节输出",
        "tag": "学习成果",
        "lead": "本章完成后，应能把概念、链路和数据表达连成完整说明。",
        "items": [
          [
            "输出 1",
            "描述一个应用的输入、处理和输出"
          ],
          [
            "输出 2",
            "说明船岸协同支持的边界"
          ],
          [
            "输出 3",
            "解释绿色航运指标的数据链"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "与前后章节的连接",
        "tag": "全书骨架",
        "lead": "船联网教材的八章内容按“技术底座 -> 系统结构 -> 数据链路 -> 应用趋势”推进。",
        "items": [
          [
            "上一层基础",
            "第 7 章提供前置边界与能力"
          ],
          [
            "本章贡献",
            "把前七章能力落到船岸协同、监管、运维和绿色航运"
          ],
          [
            "下一层去向",
            "综合应用、项目设计和未来智能航海"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "四课时分配",
        "tag": "时间结构",
        "lead": "每章对应 4 个课时，建议按两次连续学习组织。",
        "items": [
          [
            "第 1 课时",
            "船岸协同航行支持"
          ],
          [
            "第 2 课时",
            "海事监管与应急取证"
          ],
          [
            "第 3 课时",
            "远程运维与状态监控"
          ],
          [
            "第 4 课时",
            "绿色航运与智能航海"
          ]
        ]
      },
      {
        "type": "cards",
        "title": "常见误解",
        "tag": "概念校准",
        "lead": "下面的表述会削弱对船联网工程系统的理解。",
        "items": [
          [
            "误解 1",
            "只展示炫酷应用而忽略输入数据"
          ],
          [
            "误解 2",
            "服务边界不清"
          ],
          [
            "误解 3",
            "能效指标缺少数据来源"
          ]
        ]
      },
      {
        "type": "resources",
        "title": "数字教材与章节资源",
        "tag": "主入口",
        "lead": "数字教材与章节资源提供概念阅读、案例材料和实验入口。",
        "resources": [
          {
            "label": "《物联网与传感网技术》数字教材",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"
          },
          {
            "label": "第 8 章教材资源",
            "url": "https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch08/index.html"
          }
        ]
      },
      {
        "type": "closing",
        "title": "本章结论",
        "tag": "Chapter 8",
        "lead": "描述一个应用的输入、处理和输出；说明船岸协同支持的边界；解释绿色航运指标的数据链",
        "points": [
          "核心链路：业务需求 -> 数据输入 -> 模型处理 -> 服务输出 -> 边界说明 -> 评估改进",
          "关键指标：风险等级、响应时间、设备健康、燃油消耗、排放指标",
          "下一步：进入数字教材与章节资源继续查看章节资源"
        ]
      }
    ]
  }
};
