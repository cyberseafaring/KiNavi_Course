# Chapter 4 船载感知信息采集

本章对应教材第 4 章，围绕“船上有哪些关键感知链条，以及这些数据为什么不总是可信”展开。重点包括定位、姿态、AIS、设备状态、多源感知和质量标注。

## Textbook Mainline

- 船舶自身状态感知：定位、时间基准、航向姿态、速度航程
- 周边交通态势感知：AIS、报文字段、雷达、视觉、声呐
- 船舶运行状态感知：主机、电力、机舱、能耗、舱室监测
- 数据质量问题形态、质量标注与在线校核
- 多源感知互补、时间同步和目标关联
- 弱网断链条件下的感知闭环

## Core Teaching Pages

- [教材章节资源](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch04/index.html)
- [L07 船载感知链条与多源采集](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L07/index.html)
- [L08 多源感知数据质量标注](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L08/index.html)
- [章节测验](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/quizzes/index.html)

## Practice Mapping

- [Lab02 传感器数据采集传输](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab02/index.html)
- [Lab06 视觉船舶检测](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab06/index.html)
- [计算机视觉扩展教程](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/tutorials/computer-vision/index.html)
- [船舶图像样本](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/ship-images/sample-ship-01.svg)

## Extension Tasks

- 解释 GNSS、AIS、雷达、视觉为什么必须互补而不能相互替代
- 为一条感知数据增加 `quality` 或 `confidence` 字段并给出使用规则
- 举一个“时间不同步导致融合出错”的例子

## Why This Chapter Matters

如果感知链本身没有被理解和标注，后续的数据融合、告警和协同决策都会建立在不透明的数据基础上。
