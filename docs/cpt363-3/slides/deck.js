(function () {
  const deckId = window.KINAVI_DECK_ID;
  const deck = window.KINAVI_DECKS && window.KINAVI_DECKS[deckId];
  if (!deck) {
    document.body.innerHTML = "<p style='color:white;font:20px sans-serif;padding:40px'>Deck data not found.</p>";
    return;
  }

  const root = document.getElementById("deck");
  const counter = document.getElementById("counter");
  const bar = document.getElementById("progress-bar");
  const overview = document.getElementById("overview");
  let index = readIndex();

  document.title = deck.title + " - 智能航海";
  deck.slides = enrichDeck(deck);
  root.innerHTML = deck.slides.map(renderSlide).join("");
  overview.innerHTML = deck.slides
    .map((slide, i) => `<button class="thumb" data-goto="${i}"><b>${String(i + 1).padStart(2, "0")}</b>${escapeHtml(slide.title || slide.kicker || deck.title)}</button>`)
    .join("");

  const slideEls = Array.from(root.querySelectorAll(".slide"));

  function renderSlide(slide, i) {
    const cls = ["slide", `type-${slide.type || "cards"}`].join(" ");
    return `<section class="${cls}">
      <div class="slide-inner layout-${slide.type || "cards"}">
        ${renderContent(slide, i)}
        ${studentContext(slide, i)}
      </div>
    </section>`;
  }

  function header(slide) {
    return `<div class="slide-header">
      <div>
        <div class="eyebrow">${escapeHtml(deck.eyebrow || "KiNavi Intelligent Navigation")}</div>
        <h2>${escapeHtml(slide.title || "")}</h2>
      </div>
      <span class="tag">${escapeHtml(slide.tag || deck.code || "")}</span>
    </div>`;
  }

  function renderContent(slide, i) {
    if (slide.type === "cover") {
      return `<div class="hero-line"></div>
        <div>
          <div class="eyebrow">${escapeHtml(deck.eyebrow)}</div>
          <h1>${escapeHtml(deck.title)}</h1>
          <p class="lead" style="margin-top:24px">${escapeHtml(deck.subtitle)}</p>
        </div>
        <div class="cover-meta">${(deck.meta || []).map(x => `<span class="tag">${escapeHtml(x)}</span>`).join("")}</div>`;
    }
    if (slide.type === "quote") {
      return `${header(slide)}<div class="quote-panel"><p>${escapeHtml(slide.quote || "")}</p></div>`;
    }
    if (slide.type === "route") {
      return `${header(slide)}<div class="route-panel">
        <p class="lead">${escapeHtml(slide.lead || "")}</p>
        <div class="route-line" style="--stops:${slide.stops.length}">${slide.stops.map(stop => `<div class="stop">${escapeHtml(stop)}</div>`).join("")}</div>
      </div>`;
    }
    if (slide.type === "split") {
      return `${header(slide)}<div class="split">
        <div class="big-number"><span>${escapeHtml(slide.figure || String(i + 1))}</span></div>
        <div class="card"><ul class="bullets">${(slide.points || []).map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul></div>
      </div>`;
    }
    if (slide.type === "matrix") {
      return `${header(slide)}<div class="matrix">${(slide.cells || []).map((c, idx) => `<div class="${idx % 4 === 0 && idx > 3 ? "row-head" : ""}">${escapeHtml(c)}</div>`).join("")}</div>`;
    }
    if (slide.type === "process") {
      return `${header(slide)}<div class="process" style="--steps:${slide.steps.length}">${slide.steps.map((s, idx) => `<div class="step"><b>${idx + 1}</b><strong>${escapeHtml(s[0])}</strong><p>${escapeHtml(s[1])}</p></div>`).join("")}</div>`;
    }
    if (slide.type === "activity") {
      return `${header(slide)}<div class="activity-panel"><div class="label">${escapeHtml(slide.label || "课堂")}</div><div><p class="lead">${escapeHtml(slide.lead || "")}</p><ul class="bullets" style="margin-top:22px">${(slide.points || []).map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul></div></div>`;
    }
    return `${header(slide)}<div class="${(slide.items || []).length > 3 ? "grid-4" : "grid-3"}">${(slide.items || []).map(item => `<div class="card"><strong>${escapeHtml(item[0])}</strong><p>${escapeHtml(item[1])}</p></div>`).join("")}</div>`;
  }

  function enrichDeck(source) {
    const slides = [...source.slides];
    if (!source.enrichment) return slides;
    const final = slides.pop();
    const extra = [
      {
        type: "cards",
        title: source.enrichment.conceptsTitle || "概念深化：把术语讲成问题",
        tag: "概念拓展",
        items: source.enrichment.concepts || []
      },
      {
        type: "matrix",
        title: source.enrichment.comparisonTitle || "课堂辨析：三种情境对比",
        tag: "课堂辨析",
        cells: source.enrichment.comparison || []
      },
      {
        type: "process",
        title: source.enrichment.blackboardTitle || "板书推演：从现象到方案",
        tag: "板书推演",
        steps: source.enrichment.blackboard || []
      },
      {
        type: "activity",
        title: source.enrichment.discussionTitle || "延伸讨论：把案例讲深",
        tag: "延伸讨论",
        label: source.enrichment.discussionLabel || "8分钟",
        lead: source.enrichment.discussionLead || "用本节课的框架重新解释一个真实项目。",
        points: source.enrichment.discussionPoints || []
      }
    ];
    slides.push(...extra);
    if (final) slides.push(final);
    return slides;
  }

  function studentContext(slide, i) {
    if (slide.type === "cover") return "";
    const visual = slide.visual || deck.visual || {};
    const points = slide.context || rotatingItems(deck.viewpoints, i, 3);
    const links = slide.links || rotatingItems(deck.references, i, 2);
    if (!points.length && !links.length && !visual.src) return "";
    const image = visual.src
      ? `<img src="${escapeAttr(visual.src)}" alt="${escapeAttr(visual.alt || deck.title)}">`
      : `<div class="context-fallback">${escapeHtml(deck.code || "KiNavi")}</div>`;
    return `<div class="student-context">
      <div class="context-visual">${image}</div>
      <div class="context-points">
        <b>学生观察</b>
        <ul>${points.map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
      </div>
      <div class="context-links">
        <b>参考链接</b>
        ${links.map(link => `<a href="${escapeAttr(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`).join("")}
      </div>
    </div>`;
  }

  function rotatingItems(items, i, count) {
    if (!Array.isArray(items) || !items.length) return [];
    return Array.from({ length: Math.min(count, items.length) }, (_, offset) => items[(i + offset) % items.length]);
  }

  function go(next) {
    index = Math.max(0, Math.min(deck.slides.length - 1, next));
    slideEls.forEach((el, i) => el.classList.toggle("is-active", i === index));
    counter.textContent = `${index + 1} / ${deck.slides.length}`;
    bar.style.width = `${((index + 1) / deck.slides.length) * 100}%`;
    location.hash = String(index + 1);
  }

  function readIndex() {
    const n = Number(location.hash.replace("#", ""));
    return Number.isFinite(n) && n > 0 ? n - 1 : 0;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[m]));
  }

  document.getElementById("prev").addEventListener("click", () => go(index - 1));
  document.getElementById("next").addEventListener("click", () => go(index + 1));
  document.getElementById("overview-toggle").addEventListener("click", () => overview.classList.toggle("is-open"));
  overview.addEventListener("click", event => {
    const btn = event.target.closest("[data-goto]");
    if (!btn) return;
    overview.classList.remove("is-open");
    go(Number(btn.dataset.goto));
  });
  window.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") go(index + 1);
    if (event.key === "ArrowLeft" || event.key === "PageUp") go(index - 1);
    if (event.key === "Home") go(0);
    if (event.key === "End") go(deck.slides.length - 1);
    if (event.key.toLowerCase() === "o") overview.classList.toggle("is-open");
    if (event.key.toLowerCase() === "f" && document.fullscreenEnabled) document.documentElement.requestFullscreen();
    if (event.key === "Escape") overview.classList.remove("is-open");
  });

  go(index);

  function escapeAttr(value) {
    return escapeHtml(value).replace(/\n/g, " ");
  }
})();
