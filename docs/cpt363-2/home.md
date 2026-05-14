<section class="course-home">
  <div class="course-hero" style="--hero-image: url('../../cpt363-2/images/dave-hoefler-vl2uAIdBWJ8-unsplash.jpg');">
    <div class="course-hero__content">
      <p class="course-kicker">CPT363-2 · KiNavi Course</p>
      <h1>物联网与传感网技术</h1>
      <p class="course-hero__lead">课程从物联网系统、传感器网络、嵌入式节点和云边协同出发，进入船端感知、海上通信、数据治理、安全机制与典型应用，形成从数据采集到智能服务的完整技术链。</p>
      <div class="course-actions">
        <a class="course-button course-button--primary" href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/">数字教材</a>
        <a class="course-button" href="#/cpt363-2/home?id=course-chapters">章节资源</a>
        <a class="course-button" href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/slides/">HTML 课件</a>
      </div>
    </div>
  </div>

  <div class="course-statbar" aria-label="course structure">
    <div><strong>8</strong><span>教材章节</span></div>
    <div><strong>16</strong><span>范例课程</span></div>
    <div><strong>288</strong><span>课件页面</span></div>
    <div><strong>8</strong><span>实验项目</span></div>
  </div>

  <section class="course-section course-section--split">
    <div>
      <p class="course-kicker">Course Logic</p>
      <h2>从感知节点到联网服务</h2>
      <p>核心内容围绕物理对象、传感器节点、通信网络、边缘计算、云端平台和应用服务展开。船舶场景提供移动平台、弱网链路、高可靠和安全边界等典型约束，使物联网与传感网技术能够落到可分析的工程系统中。</p>
    </div>
    <div class="course-path">
      <span>对象识别</span>
      <span>感知采集</span>
      <span>网络传输</span>
      <span>数据治理</span>
      <span>应用服务</span>
    </div>
  </section>

  <section class="course-section" id="course-chapters">
    <div class="section-heading section-heading--wide">
      <p class="course-kicker">Eight Chapters</p>
      <h2>八章课程内容</h2>
      <p>八章内容按“物联网基础 -> 船联网演进 -> 体系架构 -> 感知采集 -> 海上通信 -> 数据治理 -> 安全机制 -> 应用趋势”推进，逐步形成对象、节点、链路、数据与服务之间的系统关系。</p>
    </div>
    <div class="chapter-resource-grid">
      <article class="chapter-resource-card">
        <div class="chapter-resource-head"><span>01</span><h3>物联网技术基础</h3></div>
        <p>IoT 概念、传感器网络、嵌入式平台、云边协同。</p>
        <ul>
          <li>物理量、传感器、嵌入式节点、网络传输、云边处理和应用服务。</li>
          <li>对象标识、感知数据、可靠传输、边缘节点和应用闭环。</li>
        </ul>
        <div class="chapter-resource-links">
          <a href="cpt363-2/ios-textbook-resources/chapters/ch01/index.html">章节页</a>
          <a href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/slides/chapter-01.html">HTML 课件</a>
          <a href="cpt363-2/ios-textbook-resources/lectures/L01/index.html">L01-L02</a>
          <a href="cpt363-2/ios-textbook-resources/labs/lab01/index.html">Lab01</a>
        </div>
      </article>
      <article class="chapter-resource-card">
        <div class="chapter-resource-head"><span>02</span><h3>船联网技术演变</h3></div>
        <p>概念边界、演进脉络、AIS、e-Navigation、典型形态。</p>
        <ul>
          <li>广义船联网、狭义船联网、AIS、e-Navigation 与船岸协同。</li>
          <li>港区、近岸和远洋场景下的信息共享对象与链路差异。</li>
        </ul>
        <div class="chapter-resource-links">
          <a href="cpt363-2/ios-textbook-resources/chapters/ch02/index.html">章节页</a>
          <a href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/slides/chapter-02.html">HTML 课件</a>
          <a href="cpt363-2/ios-textbook-resources/lectures/L03/index.html">L03-L04</a>
          <a href="cpt363-2/ios-textbook-resources/datasets/index.html">AIS 数据</a>
        </div>
      </article>
      <article class="chapter-resource-card">
        <div class="chapter-resource-head"><span>03</span><h3>船联网体系架构</h3></div>
        <p>分层模型、船端 / 岸端、接口类型、运行策略。</p>
        <ul>
          <li>感知层、传输层、计算层、应用层及其职责边界。</li>
          <li>设备接口、消息接口、服务接口与缓存补传、降级运行、日志追溯。</li>
        </ul>
        <div class="chapter-resource-links">
          <a href="cpt363-2/ios-textbook-resources/chapters/ch03/index.html">章节页</a>
          <a href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/slides/chapter-03.html">HTML 课件</a>
          <a href="cpt363-2/ios-textbook-resources/lectures/L05/index.html">L05-L06</a>
          <a href="cpt363-2/ios-textbook-resources/interactive/diagrams/index.html">架构图</a>
        </div>
      </article>
      <article class="chapter-resource-card">
        <div class="chapter-resource-head"><span>04</span><h3>船载感知信息采集</h3></div>
        <p>定位、姿态、AIS、雷达、视觉、质量标注。</p>
        <ul>
          <li>GNSS、AIS、雷达、视觉、声呐与设备监测构成多源感知链。</li>
          <li>时间精度、空间误差、目标置信度、缺失率和同步偏差。</li>
        </ul>
        <div class="chapter-resource-links">
          <a href="cpt363-2/ios-textbook-resources/chapters/ch04/index.html">章节页</a>
          <a href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/slides/chapter-04.html">HTML 课件</a>
          <a href="cpt363-2/ios-textbook-resources/lectures/L07/index.html">L07-L08</a>
          <a href="cpt363-2/ios-textbook-resources/labs/index.html">Lab02/Lab06</a>
        </div>
      </article>
      <article class="chapter-resource-card">
        <div class="chapter-resource-head"><span>05</span><h3>海上通信网络基础</h3></div>
        <p>通信基础补课、海上链路、多链路与选型方法。</p>
        <ul>
          <li>船内网络、船船通信、船岸通信、多链路管理与降级策略。</li>
          <li>带宽、时延、抖动、费用、覆盖和安全接入共同决定链路选型。</li>
        </ul>
        <div class="chapter-resource-links">
          <a href="cpt363-2/ios-textbook-resources/chapters/ch05/index.html">章节页</a>
          <a href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/slides/chapter-05.html">HTML 课件</a>
          <a href="cpt363-2/ios-textbook-resources/lectures/L09/index.html">L09-L10</a>
          <a href="cpt363-2/ios-textbook-resources/datasets/index.html">通信日志</a>
        </div>
      </article>
      <article class="chapter-resource-card">
        <div class="chapter-resource-head"><span>06</span><h3>船联网数据治理</h3></div>
        <p>解析、存储、融合、共享、一致性与样本分析。</p>
        <ul>
          <li>原始层、清洗层、融合层、产品层之间的处理关系。</li>
          <li>时间语义、数据字典、异常处理、幂等标识和版本对账。</li>
        </ul>
        <div class="chapter-resource-links">
          <a href="cpt363-2/ios-textbook-resources/chapters/ch06/index.html">章节页</a>
          <a href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/slides/chapter-06.html">HTML 课件</a>
          <a href="cpt363-2/ios-textbook-resources/lectures/L11/index.html">L11-L12</a>
          <a href="cpt363-2/ios-textbook-resources/datasets/index.html">治理样本</a>
        </div>
      </article>
      <article class="chapter-resource-card">
        <div class="chapter-resource-head"><span>07</span><h3>船联网安全机制</h3></div>
        <p>安全目标、攻击面、纵深防御、降级与应急。</p>
        <ul>
          <li>身份认证、访问控制、加密、完整性校验、审计日志和分区隔离。</li>
          <li>远程运维、补丁管理、备份恢复和关键业务降级运行。</li>
        </ul>
        <div class="chapter-resource-links">
          <a href="cpt363-2/ios-textbook-resources/chapters/ch07/index.html">章节页</a>
          <a href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/slides/chapter-07.html">HTML 课件</a>
          <a href="cpt363-2/ios-textbook-resources/lectures/L13/index.html">L13-L14</a>
          <a href="cpt363-2/ios-textbook-resources/datasets/index.html">安全日志</a>
        </div>
      </article>
      <article class="chapter-resource-card">
        <div class="chapter-resource-head"><span>08</span><h3>典型应用发展趋势</h3></div>
        <p>船岸协同、监管、运维、绿色航运、智能航海。</p>
        <ul>
          <li>航行支持、海事监管、远程运维、能效优化和智能航海。</li>
          <li>业务需求、数据输入、模型处理、服务输出、边界说明和评估改进。</li>
        </ul>
        <div class="chapter-resource-links">
          <a href="cpt363-2/ios-textbook-resources/chapters/ch08/index.html">章节页</a>
          <a href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/slides/chapter-08.html">HTML 课件</a>
          <a href="cpt363-2/ios-textbook-resources/lectures/L15/index.html">L15-L16</a>
          <a href="cpt363-2/ios-textbook-resources/tutorials/maritime-data/index.html">案例入口</a>
        </div>
      </article>
    </div>
  </section>

  <section class="course-section course-section--resources">
    <div class="resource-panel">
      <p class="course-kicker">Knowledge Chain</p>
      <h2>课程能力链</h2>
      <div class="course-mini-chain">
        <span>传感器与节点</span>
        <span>通信与链路</span>
        <span>解析与治理</span>
        <span>安全与运维</span>
        <span>应用与评估</span>
      </div>
    </div>
    <div class="resource-panel">
      <p class="course-kicker">Practical Work</p>
      <h2>实验与数据对象</h2>
      <p>AIS 报文、NMEA 日志、船舶轨迹、通信延迟、治理批次、安全日志和船舶图像样本共同构成课程实践对象。</p>
      <a class="course-link-card" href="cpt363-2/ios-textbook-resources/datasets/index.html">数据资源</a>
    </div>
  </section>

  <section class="course-section course-section--compact">
    <div class="section-heading section-heading--wide">
      <p class="course-kicker">Course Resources</p>
      <h2>常用资源快速入口</h2>
    </div>
    <div class="quick-resource-grid">
      <a href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/book/"><strong>数字教材</strong><span>完整教材阅读入口</span></a>
      <a href="https://cyberseafaring.github.io/KiNavi_Course/cpt363-2/slides/"><strong>HTML 课件</strong><span>8 章在线 slide</span></a>
      <a href="cpt363-2/ios-textbook-resources/lectures/index.html"><strong>范例课程</strong><span>16 节课堂页面</span></a>
      <a href="cpt363-2/ios-textbook-resources/labs/index.html"><strong>实验项目</strong><span>8 个动手实验</span></a>
      <a href="cpt363-2/ios-textbook-resources/datasets/index.html"><strong>数据资源</strong><span>AIS、NMEA、轨迹和日志样本</span></a>
      <a href="cpt363-2/ios-textbook-resources/interactive/index.html"><strong>交互内容</strong><span>图示、测验和模拟</span></a>
      <a href="cpt363-2/ios-textbook-resources/tutorials/index.html"><strong>扩展教程</strong><span>Python、树莓派、视觉和海事数据</span></a>
      <a href="#/cpt363-2/topics"><strong>章节地图</strong><span>按教学主题回到 Docsify 模块</span></a>
    </div>
  </section>
</section>
