(function () {
  const courseTitle = "船舶导航雷达 · Marine Navigation Radar";
  const id = window.KINAVI_RADAR_DECK_ID;
  const deck = window.KINAVI_RADAR_DECKS && window.KINAVI_RADAR_DECKS[id];

  if (!deck) {
    document.body.innerHTML = "<p style='color:white;font:22px sans-serif;padding:40px'>Deck data not found.</p>";
    return;
  }

  const root = document.getElementById("deck");
  const counter = document.getElementById("counter");
  const bar = document.getElementById("progress-bar");
  const overview = document.getElementById("overview");
  let index = readIndex();

  document.title = deck.title + " - " + courseTitle;
  root.innerHTML = deck.slides.map(renderSlide).join("");
  overview.innerHTML = deck.slides.map((slide, i) => {
    return "<button class='thumb' data-goto='" + i + "'><b>" + String(i + 1).padStart(2, "0") + "</b><span>" + esc(slide.title || deck.title) + "</span></button>";
  }).join("");

  const slides = [...root.querySelectorAll(".slide")];

  function renderSlide(slide, i) {
    const type = slide.type || "cards";
    return "<section class='slide type-" + type + "'>" +
      "<div class='slide-inner'>" + content(slide) + "</div>" +
      "<div class='page-number'>" + (i + 1) + " / " + deck.slides.length + "</div>" +
      "</section>";
  }

  function header(slide) {
    return "<div class='slide-header'><div><p class='eyebrow'>" + esc(deck.unit) + " · " + courseTitle + "</p><h2>" + esc(slide.title || "") + "</h2></div><span class='tag'>" + esc(slide.tag || "") + "</span></div>" +
      (slide.lead ? "<p class='lead'>" + esc(slide.lead) + "</p>" : "") +
      (slide.en ? "<p class='lead-en'>" + esc(slide.en) + "</p>" : "");
  }

  function content(slide) {
    const type = slide.type || "cards";
    if (type === "cover") {
      return "<div class='cover-grid'><div class='cover-copy'><p class='deck-kicker'>" + esc(deck.unit) + "</p><h1>" + esc(slide.title) + "<br><span>" + esc(slide.subtitle) + "</span></h1><p class='lead'>" + esc(slide.lead) + "</p><p class='lead-en'>" + esc(slide.en) + "</p><div class='cover-meta'>" + (slide.meta || []).map(item => "<span class='pill'>" + esc(item) + "</span>").join("") + "</div></div>" + scopeHtml() + "</div>";
    }
    if (type === "signal") {
      return header(slide) + "<div class='signal-flow'>" + (slide.steps || []).map(item => "<span>" + esc(item[0]) + "<em>" + esc(item[1]) + "</em></span>").join("") + "</div>";
    }
    if (type === "process") {
      return header(slide) + "<div class='process'>" + (slide.steps || []).map((item, i) => "<article class='step'><b>" + (i + 1) + "</b><strong>" + esc(item[0]) + "</strong><p>" + esc(item[1]) + "</p><small>" + esc(item[2]) + "</small></article>").join("") + "</div>";
    }
    if (type === "matrix") {
      return header(slide) + "<div class='matrix'>" + (slide.cells || []).map((item, i) => "<div class='" + (i < 4 || i % 4 === 0 ? "head" : "") + "'>" + esc(item) + "</div>").join("") + "</div>";
    }
    if (type === "case") {
      return header(slide) + "<div class='split'>" + scopeHtml() + "<article class='case-panel'><p>" + esc(slide.caseText || "") + "</p><ul>" + (slide.points || []).map(item => "<li>" + esc(item) + "</li>").join("") + "</ul></article></div>";
    }
    if (type === "closing") {
      return header(slide) + "<article class='closing'><p>" + esc(slide.summary || "") + "</p><ul>" + (slide.points || []).map(item => "<li>" + esc(item) + "</li>").join("") + "</ul></article>";
    }
    const gridClass = (slide.items || []).length <= 2 ? "grid two" : "grid";
    return header(slide) + "<div class='" + gridClass + "'>" + (slide.items || []).map(item => "<article class='card'><strong>" + esc(item[0]) + "</strong><p>" + esc(item[1]) + "</p><small>" + esc(item[2] || "") + "</small></article>").join("") + "</div>";
  }

  function scopeHtml() {
    return "<div class='scope-card' aria-label='radar display'><span class='sweep'></span><i class='blip b1'></i><i class='blip b2'></i><i class='blip b3'></i><em>RADAR</em></div>";
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
