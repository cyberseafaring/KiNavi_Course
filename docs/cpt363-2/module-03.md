# Chapter 3 船联网体系架构

本章对应教材第 3 章，重点是把船联网分层结构、船端系统、岸端系统、接口和运行策略讲清楚。它回答的是“系统怎么拼起来”和“波动链路下怎么维持协同”。

## Textbook Mainline

- 分层模型的目的与边界
- 感知层、传输层、计算层、应用层之间的协同
- 船端系统结构、网关定位与边缘计算节点
- 岸端接入、汇聚、治理与服务门户
- 设备接口、消息接口、服务接口
- 缓存补传、多链路调度、降级运行与可追溯运维

## Core Teaching Pages

- [教材章节资源](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch03/index.html)
- [L05 船联网分层架构详解](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L05/index.html)
- [L06 船端岸端协同机制](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L06/index.html)
- [分层架构交互图](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/diagrams/layered-architecture/index.html)

## Practice Mapping

- [章节资源总览](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/index.html)
- [交互内容总览](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/index.html)

## Extension Tasks

- 以“船端/岸端/链路”三部分重新画一张自己的体系结构图
- 为一个消息接口补充“时间语义、来源标识、质量标注”三个字段
- 解释为什么缓存补传和降级运行属于架构问题，而不只是通信问题

## Why This Chapter Matters

第 3 章是全书的结构中轴。感知、通信、数据治理和安全都要落在这里定义的分层与接口边界上。
