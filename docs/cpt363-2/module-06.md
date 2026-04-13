# Chapter 6 船联网数据治理

本章对应教材第 6 章，解决“采集到的数据如何被解析、存储、融合、共享并维持一致性”的问题。重点不只是会写解析器，而是要理解时间语义、口径统一、证据链和断链补传这些工程要求。

## Textbook Mainline

- 数据类型分层与时间语义
- 数据字典与口径统一
- 解析流程、异常处理与真实样例
- 船端/岸端分层存储
- 多源数据融合、分析展示与共享治理
- 一致性来源、缓存补传、幂等和版本对账

## Core Teaching Pages

- [教材章节资源](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch06/index.html)
- [L11 船联网数据解析存储](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L11/index.html)
- [L12 数据融合分析方法](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L12/index.html)
- [章节测验](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/quizzes/index.html)

## Practice Mapping

- [Lab05 船舶轨迹可视化](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab05/index.html)
- [Lab07 多源数据融合实践](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab07/index.html)
- [AIS 解码样本](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ais-samples/ais_decoded_sample.csv)
- [轨迹数据样本](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ais-samples/vessel_tracks.csv)

## Extension Tasks

- 区分采集时间、到达时间、处理时间，说明混用会造成什么问题
- 设计一张最小数据字典表，给出字段名、单位、时间语义和版本号
- 对一组轨迹点做时间对齐与异常剔除，输出可追溯的清洗说明

## Why This Chapter Matters

没有数据治理，前面的感知与通信只能产生“很多数据”，无法稳定变成“可共享、可解释、可追溯的信息产品”。
