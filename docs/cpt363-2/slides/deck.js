(function () {
  const COURSE_TITLE = "物联网与船联网技术";
  const id = window.KINAVI_CPT3632_DECK_ID;
  const deck = window.KINAVI_CPT3632_DECKS && window.KINAVI_CPT3632_DECKS[id];

  if (!deck) {
    document.body.innerHTML = "<p style='color:white;font:22px sans-serif;padding:40px'>Deck data not found.</p>";
    return;
  }

  document.documentElement.style.setProperty("--theme", deck.color);
  document.documentElement.style.setProperty("--accent", deck.accent);

  const root = document.getElementById("deck");
  const counter = document.getElementById("counter");
  const bar = document.getElementById("progress-bar");
  const overview = document.getElementById("overview");
  let index = readIndex();

  document.title = deck.title + " - " + COURSE_TITLE;
  root.innerHTML = deck.slides.map(renderSlide).join("");
  overview.innerHTML = deck.slides.map((slide, i) => {
    return "<button class='thumb' data-goto='" + i + "'><b>" + String(i + 1).padStart(2, "0") + "</b>" + esc(slide.title || deck.title) + "</button>";
  }).join("");

  const slides = [...root.querySelectorAll(".slide")];

  function renderSlide(slide, i) {
    const type = slide.type || "cards";
    return "<section class='slide type-" + type + "'>" +
      "<div class='slide-inner layout-" + type + "'>" + content(slide, i) + "</div>" +
      "<div class='page-number'>" + (i + 1) + " / " + deck.slides.length + "</div>" +
      "</section>";
  }

  function head(slide) {
    return "<div class='slide-header'><div><div class='eyebrow'>" + esc(deck.chapter) + " · " + COURSE_TITLE + "</div><h2>" + esc(slide.title || "") + "</h2></div><span class='tag'>" + esc(slide.tag || "") + "</span></div>" +
      (slide.lead ? "<p class='lead'>" + esc(slide.lead) + "</p>" : "");
  }

  function content(slide, i) {
    const type = slide.type || "cards";

    if (type === "cover") {
      return withNote(slide,
        "<div class='cover-grid'><div><div class='eyebrow'>" + esc(slide.tag) + " · " + COURSE_TITLE + "</div><h1>" + esc(slide.title) + "</h1><p class='lead'>" + esc(slide.lead) + "</p><div class='cover-meta'>" +
        (slide.meta || []).map(item => "<span class='tag'>" + esc(item) + "</span>").join("") +
        "</div><a class='short-link' href='" + attr(deck.shortBook) + "' target='_blank' rel='noopener'>" + esc(deck.shortBook) + "</a></div><img class='hero-img' src='" + attr(deck.visual) + "' alt='" + attr(deck.title) + "'></div>"
      );
    }

    if (type === "divider") {
      return withNote(slide, head(slide) + "<div class='divider-panel'><strong>" + esc(slide.title) + "</strong><p>" + esc(slide.lead || "") + "</p></div>");
    }

    if (type === "focus") {
      return withNote(slide, head(slide) + "<div class='focus'><div class='big-number'>" + esc(slide.figure) + "</div><div class='card major'><p>" + esc(slide.lead) + "</p><ul>" + (slide.points || []).map(item => "<li>" + esc(item) + "</li>").join("") + "</ul></div></div>");
    }

    if (type === "process") {
      return withNote(slide, head(slide) + "<div class='process'>" + (slide.steps || []).map((item, stepIndex) => "<div class='step'><b>" + (stepIndex + 1) + "</b><strong>" + esc(item[0]) + "</strong><p>" + esc(item[1]) + "</p></div>").join("") + "</div>");
    }

    if (type === "pipeline") {
      return withNote(slide, head(slide) + "<div class='pipe'>" + (slide.steps || []).map((item, stepIndex) => "<div><b>" + String(stepIndex + 1).padStart(2, "0") + "</b><span>" + esc(item) + "</span></div>").join("") + "</div>");
    }

    if (type === "chips") {
      return withNote(slide, head(slide) + "<div class='chips'>" + (slide.chips || []).map(item => "<span>" + esc(item) + "</span>").join("") + "</div><img class='inline-visual' src='" + attr(deck.visual) + "' alt='" + attr(deck.title) + "'>");
    }

    if (type === "matrix") {
      return withNote(slide, head(slide) + "<div class='matrix'>" + (slide.cells || []).map((item, cellIndex) => "<div class='" + (cellIndex < 4 || cellIndex % 4 === 0 ? "head" : "") + "'>" + esc(item) + "</div>").join("") + "</div>");
    }

    if (type === "scenario") {
      return withNote(slide, head(slide) + "<div class='scenario'><img src='" + attr(deck.visual) + "' alt='" + attr(deck.title) + "'><div><p>" + esc(slide.lead) + "</p><ul>" + (slide.points || []).map(item => "<li>" + esc(item) + "</li>").join("") + "</ul></div></div>");
    }

    if (type === "resources") {
      return withNote(slide, head(slide) + "<div class='resource-list'>" + (slide.resources || []).map(resource => "<a href='" + attr(resource.url) + "' target='_blank' rel='noopener'><span>" + esc(resource.label) + "</span><small>" + esc(shorten(resource.url)) + "</small></a>").join("") + "</div>");
    }

    if (type === "closing") {
      return withNote(slide, head(slide) + "<div class='closing'><p>" + esc(slide.lead) + "</p><ul>" + (slide.points || []).map(item => "<li>" + esc(item) + "</li>").join("") + "</ul></div>");
    }

    return withNote(slide, head(slide) + "<div class='" + ((slide.items || []).length > 3 ? "grid four" : "grid") + "'>" + (slide.items || []).map(item => "<article class='card'><strong>" + esc(item[0]) + "</strong><p>" + esc(item[1]) + "</p></article>").join("") + "</div>");
  }

  function withNote(slide, html) {
    return html + "<div class='teaching-note'><strong>课堂展开</strong><span>" + esc(teachingCue(slide)) + "</span></div>";
  }

  function teachingCue(slide) {
    if (slide.note) return slide.note;
    if (slide.type === "cover") return "先说明本章在课程中的位置，再交代本章会连接到的教材、课件和数据资源。";
    if (slide.type === "process" && slide.steps && slide.steps.length) return "按顺序追问每一步的输入、输出和失效条件，最后让学生复述完整链路。";
    if (slide.type === "pipeline" && slide.steps && slide.steps.length) return "把每个环节映射到真实船岸场景，要求学生指出断链、延迟或质量问题会出现在哪里。";
    if (slide.type === "matrix") return "用矩阵比较概念、指标和应用入口，避免只记术语而缺少系统位置。";
    if (slide.type === "scenario") return "围绕场景拆解对象、链路、指标和风险，形成课堂讨论或小练习。";
    if (slide.type === "resources") return "引导学生从教材章节进入实验、数据样本和测验，形成课前预习与课后复盘闭环。";
    if (slide.items && slide.items.length) return "逐项说明概念边界、工程作用和与后续章节的连接点。";
    return "补充一个现场例子或数据样本，让抽象概念落到可观察的系统行为。";
  }

  function go(nextIndex) {
    index = Math.max(0, Math.min(deck.slides.length - 1, nextIndex));
    slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === index));
    counter.textContent = (index + 1) + " / " + deck.slides.length;
    bar.style.width = ((index + 1) / deck.slides.length * 100) + "%";
    location.hash = String(index + 1);
  }

  function readIndex() {
    const n = Number(location.hash.replace("#", ""));
    return Number.isFinite(n) && n > 0 ? n - 1 : 0;
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, match => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    }[match]));
  }

  function attr(value) {
    return esc(value).replace(/\n/g, " ");
  }

  function shorten(url) {
    return String(url).replace("https://cyberseafaring.github.io/KiNavi_Course/", "/");
  }

  document.getElementById("prev").addEventListener("click", () => go(index - 1));
  document.getElementById("next").addEventListener("click", () => go(index + 1));
  document.getElementById("overview-toggle").addEventListener("click", () => overview.classList.toggle("is-open"));
  overview.addEventListener("click", event => {
    const button = event.target.closest("[data-goto]");
    if (button) {
      overview.classList.remove("is-open");
      go(Number(button.dataset.goto));
    }
  });
  window.addEventListener("keydown", event => {
    if (["ArrowRight", " ", "PageDown"].includes(event.key)) go(index + 1);
    if (["ArrowLeft", "PageUp"].includes(event.key)) go(index - 1);
    if (event.key === "Home") go(0);
    if (event.key === "End") go(deck.slides.length - 1);
    if (event.key.toLowerCase() === "o") overview.classList.toggle("is-open");
    if (event.key.toLowerCase() === "f" && document.fullscreenEnabled) document.documentElement.requestFullscreen();
    if (event.key === "Escape") overview.classList.remove("is-open");
  });

  go(index);
})();
