# Chapter 5 海上通信网络基础

本章对应教材第 5 章，讨论船内网络、船船通信、船岸通信和多链路管理。核心问题不是“有没有网络”，而是“在覆盖、时延、费用和弱网条件下，关键业务如何保持可用”。

## Textbook Mainline

- 通信链路在船联网中的位置与关键指标
- 船内网络分区、接口线索与本地汇聚
- 船船通信：AIS、VHF、VDES 等链路
- 船岸通信：蜂窝、卫星、北斗短报文、港区专网
- 多链路管理、业务分级、缓存补传和安全接入
- 链路选型与性能边界

## Core Teaching Pages

- [教材章节资源](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch05/index.html)
- [L09 海上通信链路特性分析](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L09/index.html)
- [L10 多链路组织降级策略](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L10/index.html)
- [章节测验](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/quizzes/index.html)

## Practice Mapping

- [Lab04 NMEA-0183 协议分析](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab04/index.html)
- [通信网络教程](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/tutorials/raspberry-pi/index.html)
- [NMEA 样本数据](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/nmea-logs/nmea_sample.txt)
- [通信日志数据](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/comm-logs/comm_log_sample.csv)

## Extension Tasks

- 比较“高带宽”和“低抖动”对航行支持业务的不同意义
- 设计一条简单的多链路优先级规则，例如关键告警、摘要同步、离线批传三类业务
- 说明为什么缓存补传需要记录重试次数和队列长度

## Why This Chapter Matters

船联网最大的现实约束之一就是通信条件不稳定。第 5 章决定系统能否在海上真正跑起来，而不是只能在实验室里运行。
