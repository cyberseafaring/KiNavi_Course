/**
 * Navigation Module - 船联网技术基础配套资源平台
 * 导航组件与面包屑
 */

(function() {
    'use strict';

    /**
     * 章节数据
     */
    const CHAPTERS = [
        { id: 'ch01', number: 1, title: '物联网技术基础', subtitle: '概念、特征、技术链条' },
        { id: 'ch02', number: 2, title: '船联网技术演变', subtitle: '概念边界、演进脉络、AIS基础' },
        { id: 'ch03', number: 3, title: '船联网体系架构', subtitle: '分层模型、接口边界、协同机制' },
        { id: 'ch04', number: 4, title: '船载感知信息采集', subtitle: '定位姿态、态势感知、质量标注' },
        { id: 'ch05', number: 5, title: '海上通信网络基础', subtitle: '链路特性、多链路组织、降级策略' },
        { id: 'ch06', number: 6, title: '船联网数据治理', subtitle: '解析存储、时间语义、融合共享' },
        { id: 'ch07', number: 7, title: '船联网安全机制', subtitle: '安全目标、威胁模型、降级运行' },
        { id: 'ch08', number: 8, title: '典型应用发展趋势', subtitle: '智能航海、绿色航运、未来展望' }
    ];

    /**
     * 课程数据
     */
    const LECTURES = [
        { id: 'L01', number: 1, title: '物联网概念发展历程', chapter: 1 },
        { id: 'L02', number: 2, title: '物联网核心技术栈', chapter: 1 },
        { id: 'L03', number: 3, title: '船联网概念边界演进脉络', chapter: 2 },
        { id: 'L04', number: 4, title: 'AIS系统海上信息协同基础', chapter: 2 },
        { id: 'L05', number: 5, title: '船联网分层架构详解', chapter: 3 },
        { id: 'L06', number: 6, title: '船端岸端协同机制', chapter: 3 },
        { id: 'L07', number: 7, title: '船舶定位姿态感知', chapter: 4 },
        { id: 'L08', number: 8, title: '多源感知数据质量标注', chapter: 4 },
        { id: 'L09', number: 9, title: '海上通信链路特性分析', chapter: 5 },
        { id: 'L10', number: 10, title: '多链路组织降级策略', chapter: 5 },
        { id: 'L11', number: 11, title: '船联网数据解析存储', chapter: 6 },
        { id: 'L12', number: 12, title: '数据融合分析方法', chapter: 6 },
        { id: 'L13', number: 13, title: '船联网安全目标威胁模型', chapter: 7 },
        { id: 'L14', number: 14, title: '安全机制降级运行', chapter: 7 },
        { id: 'L15', number: 15, title: '船岸协同智能航海应用', chapter: 8 },
        { id: 'L16', number: 16, title: '绿色航运未来展望', chapter: 8 }
    ];

    /**
     * 实验数据
     */
    const LABS = [
        { id: 'lab01', number: 1, title: '树莓派开发环境搭建', description: '树莓派系统安装与开发工具配置' },
        { id: 'lab02', number: 2, title: '传感器数据采集传输', description: '传感器接入、数据采集与上传' },
        { id: 'lab03', number: 3, title: 'AIS报文解析实验', description: 'NMEA AIS 报文解析与字段校验' },
        { id: 'lab04', number: 4, title: 'NMEA-0183协议分析', description: '典型语句结构、校验、解析实践' },
        { id: 'lab05', number: 5, title: '船舶轨迹可视化', description: '轨迹绘制、回放与指标计算' },
        { id: 'lab06', number: 6, title: '视觉船舶检测', description: '公开数据集上完成目标检测流程' },
        { id: 'lab07', number: 7, title: '多源数据融合实践', description: '时间对齐、目标关联与态势生成' },
        { id: 'lab08', number: 8, title: '安全威胁模拟防护', description: '威胁复现、日志分析与防护策略' }
    ];

    /**
     * 生成面包屑导航
     * @param {Array} items - 面包屑项目数组 [{label, href}]
     */
    window.generateBreadcrumb = function(items) {
        const nav = document.createElement('nav');
        nav.className = 'breadcrumb';
        nav.setAttribute('aria-label', '面包屑导航');

        const ol = document.createElement('ol');
        ol.className = 'breadcrumb-list';

        items.forEach(function(item, index) {
            const li = document.createElement('li');
            li.className = 'breadcrumb-item';

            if (index === items.length - 1) {
                // 最后一项，当前页面
                li.innerHTML = '<span class="breadcrumb-current">' + item.label + '</span>';
                li.setAttribute('aria-current', 'page');
            } else {
                li.innerHTML = '<a href="' + item.href + '" class="breadcrumb-link">' + item.label + '</a>';
            }

            ol.appendChild(li);
        });

        nav.appendChild(ol);
        return nav;
    };

    /**
     * 获取章节信息
     */
    window.getChapterInfo = function(chapterId) {
        return CHAPTERS.find(function(ch) {
            return ch.id === chapterId;
        });
    };

    /**
     * 获取课程信息
     */
    window.getLectureInfo = function(lectureId) {
        return LECTURES.find(function(lec) {
            return lec.id === lectureId;
        });
    };

    /**
     * 获取实验信息
     */
    window.getLabInfo = function(labId) {
        return LABS.find(function(lab) {
            return lab.id === labId;
        });
    };

    /**
     * 获取所有章节
     */
    window.getAllChapters = function() {
        return CHAPTERS;
    };

    /**
     * 获取所有课程
     */
    window.getAllLectures = function() {
        return LECTURES;
    };

    /**
     * 获取所有实验
     */
    window.getAllLabs = function() {
        return LABS;
    };

    /**
     * 获取指定章节的课程
     */
    window.getLecturesByChapter = function(chapterNumber) {
        return LECTURES.filter(function(lec) {
            return lec.chapter === chapterNumber;
        });
    };

})();
