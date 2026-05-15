# 教材知识地图 · Textbook Knowledge Map

本页依据刘彤著《航海仪器（下册：船舶导航雷达）》第三版整理，用于把教材章节、课程八章、HTML 课件和课堂训练连接起来。页面采用中英双语关键词，便于双语课讲授、复习和课堂展示。

## 教材章节到课程模块

| 教材章节 | 教材重点 | 课程模块 | HTML 课件 |
| --- | --- | --- | --- |
| 第1章 引言 | 雷达发展、课程价值、标准背景 | [Chapter 1](cpt363-1/module-01.md) | [雷达工作原理](cpt363-1/slides/principles.html) |
| 第2章 雷达目标探测与显示基本原理 | 距离、方位、显示方式 | [Chapter 1](cpt363-1/module-01.md)、[Chapter 3](cpt363-1/module-03.md) | [雷达工作原理](cpt363-1/slides/principles.html) |
| 第3章 雷达设备工作原理 | 系统配置、发射机、双工器、天线、接收机、信息处理、性能监视器 | [Chapter 2](cpt363-1/module-02.md)、[Chapter 3](cpt363-1/module-03.md) | [雷达组成](cpt363-1/slides/system.html) |
| 第4章 雷达操作 | 主要控制、基本操作、显示调节 | [Chapter 4](cpt363-1/module-04.md) | [雷达操作](cpt363-1/slides/operation.html) |
| 第5章 雷达观测 | 观测性能、目标特性、影响因素 | [Chapter 3](cpt363-1/module-03.md)、[Chapter 4](cpt363-1/module-04.md) | [雷达目标观测](cpt363-1/slides/observation.html) |
| 第6章 雷达定位、导航与搜救 | 雷达定位、平行线导航、搜救协助 | [Chapter 5](cpt363-1/module-05.md)、[Workshop 2](cpt363-1/module-10.md) | [雷达操作](cpt363-1/slides/operation.html) |
| 第7章 雷达标绘 | 标绘基础、相对运动作图、避碰效果分析 | [Chapter 6](cpt363-1/module-06.md)、[Workshop 1](cpt363-1/module-09.md) | [雷达避碰](cpt363-1/slides/collision-avoidance.html) |
| 第8章 雷达避碰 | 目标跟踪、ARPA、AIS 关联、会遇判断、试操船、可靠性、典型案例 | [Chapter 6](cpt363-1/module-06.md)、[Workshop 3](cpt363-1/module-11.md) | [雷达避碰](cpt363-1/slides/collision-avoidance.html) |
| 第9章 雷达安装验收与维护管理 | 安装验收、维护保养、误差校正、交接班、故障检测 | [Chapter 7](cpt363-1/module-07.md)、[Workshop 4](cpt363-1/module-12.md) | [雷达组成](cpt363-1/slides/system.html) |
| 第10章 新体制固态航海雷达 | 固态雷达发展、技术特点和应用 | [Chapter 8](cpt363-1/module-08.md)、[Workshop 5](cpt363-1/module-13.md) | [雷达工作原理](cpt363-1/slides/principles.html) |

## 五条核心知识链

### 1. 雷达工作原理 · Working Principles

雷达工作原理的教学重点是让学生理解“回波从哪里来、读数如何形成、图像为什么有限制”。课堂中应把公式、物理过程和驾驶台判断连接起来。

| 知识点 | 中文解释 | English Keywords | 可训练能力 |
| --- | --- | --- | --- |
| 距离测量 | 依据电磁波往返传播时间换算目标距离 | range measurement, time of flight | 判断量程、脉冲宽度和读数精度 |
| 方位测量 | 依据天线指向和艏线基准确定目标方位 | bearing measurement, heading reference | 检查艏线误差和方位稳定性 |
| 显示方式 | Head-Up、North-Up、Course-Up 等显示方式改变参考基准 | display mode, reference frame | 选择适合航行任务的显示模式 |
| 传播限制 | 雷达地平、异常传播、遮挡和阴影区影响可探测性 | radar horizon, abnormal propagation, shadow sector | 解释弱回波、漏检和异常远距离探测 |

### 2. 雷达组成 · System Architecture

雷达组成的教学重点是把“硬件部件”转化为“信息链”。学生需要知道每个信息从哪里来，哪些部件或输入异常会改变显示和计算结果。

| 部件 / 输入 | 作用 | English Keywords | 风险提示 |
| --- | --- | --- | --- |
| 天线与微波传输 | 扫描空间、发射和接收微波能量 | antenna, waveguide, scanner | 遮挡、旁瓣、方位分辨力受安装影响 |
| 发射机与双工器 | 产生脉冲并保护接收机 | transmitter, duplexer | 发射异常会造成无回波或探测距离下降 |
| 接收机 | 放大、选择和处理微弱回波 | receiver, sensitivity | 接收异常会带来噪声、弱显或失真 |
| 信息处理与显示 | 将回波转化为图像、读数和目标信息 | processor, display, ARPA | 处理和传感器输入错误会影响矢量和告警 |
| 航向 / 航速 / 位置输入 | 支持真方位、真运动和电子海图叠加 | heading, speed, GNSS, ECDIS | 输入错误会造成真矢量、叠加和 CPA / TCPA 偏差 |

### 3. 雷达操作 · Operation

雷达操作的教学重点是建立稳定流程。学生应能说明每个控钮改善了什么，也能说明过度调节可能隐藏什么。

| 操作环节 | 主要动作 | English Keywords | 课堂检查点 |
| --- | --- | --- | --- |
| 开机与安全 | 电源、待机、发射、天线安全检查 | power-up, standby, transmit safety | 发射前确认天线附近安全 |
| 量程选择 | 远、中、近量程配合使用 | range scale | 先看总体态势，再进入任务量程 |
| 图像调节 | 亮度、增益、调谐、海杂波、雨杂波 | gain, tuning, sea clutter, rain clutter | 避免把小目标调没 |
| 测量工具 | 使用 VRM、EBL、光标和平行线 | VRM, EBL, cursor, parallel index | 复核距离、方位、通过距离和目标趋势 |
| 显示选择 | 选择 Head-Up、North-Up、Course-Up、相对运动或真运动 | head-up, north-up, true motion | 说明选择理由和使用限制 |

### 4. 雷达目标观测 · Target Observation

目标观测的教学重点是从“屏幕上有亮点”转向“这个亮点是否可靠”。学生需要从目标、环境、设备和操作四个方向解释图像。

| 观测对象 | 需要判断什么 | English Keywords | 常见误区 |
| --- | --- | --- | --- |
| 目标回波 | 目标是否真实、稳定、可量测 | target echo, persistence | 只凭单次亮点判断目标 |
| 岸线与固定物标 | 是否适合定位和监控通过距离 | coastline, fixed target | 把不准确岸线当作精确定位点 |
| 海杂波与雨杂波 | 是否遮蔽近距离目标或雨区目标 | sea clutter, rain clutter | 过度抑制导致漏检 |
| 假回波 | 是否为多次反射、旁瓣或二次扫描 | false echo, side lobe, second trace | 将假回波纳入避碰判断 |
| 误差来源 | 距离、方位、显示和输入误差如何影响判断 | range error, bearing error | 忽略误差对定位和 CPA 的放大效应 |

### 5. 雷达避碰 · Collision Avoidance

雷达避碰的教学重点是让学生从连续观测进入运动判断，再进入避碰规则和行动复核。ARPA 和 AIS 是辅助工具，最终仍要形成可解释的驾驶台判断。

| 决策环节 | 中文解释 | English Keywords | 输出 |
| --- | --- | --- | --- |
| 连续观测 | 记录目标多个时刻的位置变化 | continuous observation | 相对运动趋势 |
| 标绘分析 | 用相对运动线推断 CPA、TCPA 和行动效果 | plotting, relative motion, CPA, TCPA | 风险判断 |
| ARPA 辅助 | 自动获取、跟踪、显示矢量和告警 | ARPA, vector, acquisition | 计算结果和告警 |
| AIS 关联 | 对照身份、航向、航速和目标关联状态 | AIS report, association | 信息一致性检查 |
| 规则判断 | 结合会遇局面和 COLREGs 选择行动 | COLREGs, crossing, head-on, overtaking | 避让方案 |
| 行动复核 | 行动后检查新 CPA、目标矢量和通过距离 | trial manoeuvre, post-action check | 行动有效性结论 |

## 课堂任务库

| 任务 | 适用章节 | 学生输出 | 评价重点 |
| --- | --- | --- | --- |
| 雷达回波来源解释卡 | 第1-3章 | 一页图文说明 | 能否把发射、传播、反射、接收和显示连成闭环 |
| 系统组成图 | 第2章 | 船载雷达系统框图 | 是否标出外部传感器输入和失效影响 |
| 图像调节检查单 | 第4章 | 操作流程表 | 是否说明过度调节风险 |
| 目标观测判读卡 | 第5章 | 目标、杂波、假回波对照表 | 是否有复核方法 |
| 受限水域雷达监控方案 | 第6章 | 平行线和通过距离图 | 是否能说明固定目标选择依据 |
| 会遇标绘与避碰分析 | 第7-8章 | CPA / TCPA 与行动复核表 | 是否把数据、规则和行动连接起来 |
| 故障诊断报告 | 第9章 | 现象、原因、检查、限制、记录 | 是否体现航行安全管理 |
| 新型雷达应用讨论 | 第10章 | 智能航海应用分析 | 是否同时说明价值和限制 |

## 复习路线

1. 先用 [HTML 课件总览](cpt363-1/slides/index.html) 复习五个核心知识簇。
2. 再用 [内容架构](cpt363-1/contents.md) 把五个知识簇放回八章课程。
3. 最后用 [课程专题](cpt363-1/topics.md) 和 [复习与项目展示](cpt363-1/module-13.md) 完成案例化复习。
