# 《船联网技术基础》配套数字资源平台

本项目为《船联网技术基础》本科教材的配套数字资源平台，提供章节学习资源、范例课程、实验项目及扩展教程。

## 项目结构

```
ios-textbook-resources/
├── index.html                    # 主页
├── assets/
│   ├── css/                      # 样式文件
│   ├── js/                       # JavaScript 模块
│   ├── images/                   # 图片资源
│   └── vendor/                   # 第三方库
├── chapters/                     # 章节资源（8章）
├── lectures/                     # 范例课程（16节）
├── labs/                         # 实验项目（8个）
├── tutorials/                    # 扩展教程
│   ├── raspberry-pi/            # 树莓派开发
│   ├── computer-vision/         # 计算机视觉
│   ├── python-basics/           # Python基础
│   └── maritime-data/           # 海事数据
├── datasets/                     # 数据资源
└── interactive/                  # 交互内容（测验/图示/仿真）
```

## 本地开发

使用 Python 内置服务器启动本地预览：

```bash
cd ios-textbook-resources
python -m http.server 8000
```

访问 http://localhost:8000 查看效果。

## 技术栈

- 纯静态 HTML/CSS/JavaScript
- [Marked.js](https://marked.js.org/) - Markdown 渲染
- 代码块样式由平台 CSS 提供

## 配色方案

平台配色与教材 LaTeX TikZ 插图保持一致：

| 颜色名称 | RGB 值 | 用途 |
|---------|--------|------|
| 钢蓝色 | (70, 130, 180) | 主要强调色 |
| 深蓝色 | (47, 82, 143) | 标题、重要元素 |
| 浅蓝色 | (176, 206, 230) | 背景填充 |
| 草绿色 | (92, 160, 120) | 成功状态 |
| 琥珀色 | (220, 150, 86) | 警示、重点 |
| 青色 | (72, 145, 150) | 网络、通信 |

## 部署

本项目设计为可直接部署到 GitHub Pages：

1. 将代码推送到 GitHub 仓库
2. 在仓库 Settings → Pages 中启用 GitHub Pages
3. 选择 main 分支作为源

## 许可

本项目为大连海事大学教学资源，仅供教学使用。

---

大连海事大学 · 《船联网技术基础》课程组
