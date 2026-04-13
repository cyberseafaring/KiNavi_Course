/**
 * Tutorial Viewer - 渲染教程 Markdown 并生成左侧目录
 */

(function () {
    'use strict';

    function getQueryParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    function setQueryParam(name, value) {
        const url = new URL(window.location.href);
        url.searchParams.set(name, value);
        window.history.replaceState({}, '', url.toString());
    }

    function escapeHtml(text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function renderList(items, listEl, activeFile, onSelect) {
        listEl.innerHTML = '';
        const ul = document.createElement('ul');
        ul.className = 'side-nav';

        items.forEach(function (item) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '?doc=' + encodeURIComponent(item.file);
            a.innerHTML = escapeHtml(item.title);
            if (item.file === activeFile) a.classList.add('active');
            a.addEventListener('click', function (e) {
                e.preventDefault();
                onSelect(item.file);
            });
            li.appendChild(a);
            ul.appendChild(li);
        });

        listEl.appendChild(ul);
    }

    window.initTutorialViewer = function (options) {
        const manifestUrl = options.manifestUrl;
        const listSelector = options.listSelector || '#tutorial-list';
        const contentSelector = options.contentSelector || '#tutorial-content';
        const tocSelector = options.tocSelector || '#toc';

        const listEl = document.querySelector(listSelector);
        const contentEl = document.querySelector(contentSelector);
        const tocEl = document.querySelector(tocSelector);

        if (!listEl || !contentEl || !tocEl) {
            console.error('Tutorial viewer containers not found');
            return;
        }

        if (window.initMarkdownRenderer) window.initMarkdownRenderer();

        fetch(manifestUrl)
            .then(function (r) {
                if (!r.ok) throw new Error('Failed to load manifest: ' + r.status);
                return r.json();
            })
            .then(function (items) {
                const initial = getQueryParam('doc') || (items[0] && items[0].file);
                if (!initial) {
                    contentEl.innerHTML = '<p class="error">未找到教程内容</p>';
                    tocEl.style.display = 'none';
                    return;
                }

                function load(file) {
                    setQueryParam('doc', file);
                    renderList(items, listEl, file, load);
                    window.loadAndRenderMarkdown(file, contentEl).then(function () {
                        window.generateTOC(contentEl, tocEl);
                    });
                }

                load(initial);
            })
            .catch(function (err) {
                contentEl.innerHTML = '<p class="error">加载失败：' + escapeHtml(err.message) + '</p>';
                console.error(err);
            });
    };
})();

