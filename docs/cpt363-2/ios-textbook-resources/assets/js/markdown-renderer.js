/**
 * Markdown Renderer Module - 船联网技术基础配套资源平台
 * 基于 marked.js 的 Markdown 渲染
 */

(function() {
    'use strict';

    /**
     * 初始化 Markdown 渲染器
     */
    window.initMarkdownRenderer = function() {
        if (typeof marked === 'undefined') {
            console.warn('marked.js not loaded');
            return;
        }

        // 配置 marked
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });

        // 自定义渲染器
        const renderer = new marked.Renderer();

        // 代码块渲染（集成 Prism）
        renderer.code = function(code, language) {
            const validLanguage = language && Prism.languages[language] ? language : 'plaintext';
            const highlighted = Prism.languages[validLanguage]
                ? Prism.highlight(code, Prism.languages[validLanguage], validLanguage)
                : code;
            return '<pre class="language-' + validLanguage + '"><code class="language-' + validLanguage + '">' + highlighted + '</code></pre>';
        };

        // 链接渲染（外部链接新窗口打开）
        renderer.link = function(href, title, text) {
            const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
            const titleAttr = title ? ' title="' + title + '"' : '';
            const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
            return '<a href="' + href + '"' + titleAttr + targetAttr + '>' + text + '</a>';
        };

        // 表格渲染（添加响应式容器）
        renderer.table = function(header, body) {
            return '<div class="table-responsive"><table><thead>' + header + '</thead><tbody>' + body + '</tbody></table></div>';
        };

        marked.use({ renderer: renderer });
    };

    /**
     * 渲染 Markdown 内容到指定元素
     * @param {string} markdown - Markdown 文本
     * @param {HTMLElement|string} target - 目标元素或选择器
     */
    window.renderMarkdown = function(markdown, target) {
        const container = typeof target === 'string'
            ? document.querySelector(target)
            : target;

        if (!container) {
            console.error('Target container not found');
            return;
        }

        if (typeof marked === 'undefined') {
            container.innerHTML = '<p class="error">Markdown 渲染器未加载</p>';
            return;
        }

        container.innerHTML = marked.parse(markdown);

        // 代码高亮（如果 Prism 已加载）
        if (typeof Prism !== 'undefined') {
            Prism.highlightAllUnder(container);
        }
    };

    /**
     * 从文件加载并渲染 Markdown
     * @param {string} url - Markdown 文件 URL
     * @param {HTMLElement|string} target - 目标元素或选择器
     */
    window.loadAndRenderMarkdown = function(url, target) {
        const container = typeof target === 'string'
            ? document.querySelector(target)
            : target;

        if (!container) {
            console.error('Target container not found');
            return Promise.reject(new Error('Target container not found'));
        }

        container.innerHTML = '<p class="loading">加载中...</p>';

        return fetch(url)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Failed to load: ' + response.status);
                }
                return response.text();
            })
            .then(function(markdown) {
                renderMarkdown(markdown, container);
            })
            .catch(function(error) {
                container.innerHTML = '<p class="error">加载失败: ' + error.message + '</p>';
                console.error('Markdown load error:', error);
            });
    };

    /**
     * 生成目录（TOC）
     * @param {HTMLElement|string} contentContainer - 内容容器
     * @param {HTMLElement|string} tocContainer - TOC 容器
     */
    window.generateTOC = function(contentContainer, tocContainer) {
        const content = typeof contentContainer === 'string'
            ? document.querySelector(contentContainer)
            : contentContainer;
        const toc = typeof tocContainer === 'string'
            ? document.querySelector(tocContainer)
            : tocContainer;

        if (!content || !toc) return;

        const headings = content.querySelectorAll('h2, h3');
        if (headings.length === 0) {
            toc.style.display = 'none';
            return;
        }

        const ul = document.createElement('ul');
        ul.className = 'toc-list';

        headings.forEach(function(heading, index) {
            // 确保标题有 ID
            if (!heading.id) {
                heading.id = 'section-' + index;
            }

            const li = document.createElement('li');
            li.className = 'toc-item toc-' + heading.tagName.toLowerCase();

            const a = document.createElement('a');
            a.href = '#' + heading.id;
            a.textContent = heading.textContent;
            a.className = 'toc-link';

            li.appendChild(a);
            ul.appendChild(li);
        });

        toc.innerHTML = '<h4 class="toc-title">目录</h4>';
        toc.appendChild(ul);
    };

})();
