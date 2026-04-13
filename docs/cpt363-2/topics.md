# Textbook Map

本页把 `cpt363-2` 的课程结构与教材 `main.tex` 主体内容对齐，确保每章都能找到对应的课时、资源和实践入口。

## Chapter Structure

| 教材章节 | 课程模块 | 对应课时 | 资源重点 |
|---|---|---|---|
| 第1章 物联网技术基础 | [module-01](cpt363-2/module-01) | L01-L02 | 概念、传感器网络、嵌入式、云边协同 |
| 第2章 船联网技术演变 | [module-02](cpt363-2/module-02) | L03-L04 | 概念边界、AIS 基础作用、演进脉络 |
| 第3章 船联网体系架构 | [module-03](cpt363-2/module-03) | L05-L06 | 分层架构、船端/岸端系统、接口与运行策略 |
| 第4章 船载感知信息采集 | [module-04](cpt363-2/module-04) | L07-L08 | 定位姿态、AIS、设备状态、多源感知与标注 |
| 第5章 海上通信网络基础 | [module-05](cpt363-2/module-05) | L09-L10 | 船内网、船船、船岸、多链路与降级 |
| 第6章 船联网数据治理 | [module-06](cpt363-2/module-06) | L11-L12 | 解析、存储、融合、共享、一致性与补传 |
| 第7章 船联网安全机制 | [module-07](cpt363-2/module-07) | L13-L14 | 威胁模型、防护、审计、降级与运维合规 |
| 第8章 典型应用发展趋势 | [module-08](cpt363-2/module-08) | L15-L16 | 船岸协同、监管、运维、绿色航运、智能航海 |

## Knowledge Chain

1. 第1章建立物联网通用技术底座。
2. 第2章把物联网迁移到航运场景，明确船联网的对象范围与演进主线。
3. 第3章给出船联网系统如何分层、如何协同、如何在波动链路下运行。
4. 第4-5章分别解决“数据从哪里来”和“数据如何可靠传出去”。
5. 第6章解决“数据如何变成可共享、可分析、可追溯的信息产品”。
6. 第7章回答“系统在风险、攻击和弱网下如何保持可信与可用”。
7. 第8章把前面所有能力落到典型应用系统。

## Direct Resource Entrances

- [章节资源总览](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/index.html)
- [范例课程总览](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/index.html)
- [实验项目总览](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/index.html)
- [交互测验总览](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/quizzes/index.html)

## Suggested Use

- 讲授时先以本页确定章节位置。
- 再进入对应 `module-*` 页面查看该章的“教材主线 + 课时 + 实验 + 数据 + 延展任务”。
- 需要看完整配套页面时，直接打开静态资源 URL，不要使用 docsify 的 hash 路由。
