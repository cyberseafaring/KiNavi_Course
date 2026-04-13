# Chapter 7 船联网安全机制

本章对应教材第 7 章，讨论船联网面对攻击面、误操作和弱网时如何保持“可信”和“可用”。本章不是单纯列安全术语，而是把安全目标落实到分区、鉴权、审计、降级与运维边界。

## Textbook Mainline

- 安全目标、威胁模型与风险分级
- 设备侧、网络侧、数据侧、人员流程侧攻击面
- 身份认证、访问控制、加密、完整性校验和日志审计
- 安全与可用性的优先级协调
- 远程运维、补丁更新、备份恢复与合规线索
- 从安全事件到航行风险的因果链

## Core Teaching Pages

- [教材章节资源](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/chapters/ch07/index.html)
- [L13 船联网安全目标威胁模型](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L13/index.html)
- [L14 安全机制降级运行](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/lectures/L14/index.html)
- [章节测验](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/interactive/quizzes/index.html)

## Practice Mapping

- [Lab08 安全威胁模拟防护](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/labs/lab08/index.html)
- [安全日志样本](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/security/security_log_sample.csv)
- [异常数据样本](https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/ios-textbook-resources/datasets/security/anomaly_data.csv)

## Extension Tasks

- 画出一个最小的船联网安全分区图，标出关键区、业务区和外部接入区
- 为“远程运维”写出一份最小访问控制规则
- 分析弱网条件下，哪些安全机制不能简单关闭，哪些业务应进入降级模式

## Why This Chapter Matters

船联网系统如果只有功能没有安全边界，最终会把风险转化为数据失真、错误态势和不可控的运维后果。
