/**
 * Main JavaScript - 船联网技术基础配套资源平台
 * 核心交互逻辑
 */

(function() {
    'use strict';

    // DOM Ready
    document.addEventListener('DOMContentLoaded', function() {
        initNavigation();
        initSmoothScroll();
        initActiveNavHighlight();
        initTOCSpy();
    });

    /**
     * 移动端导航菜单
     */
    function initNavigation() {
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('.nav');

        if (!menuToggle || !nav) return;

        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('active');

            // 切换汉堡菜单动画
            menuToggle.classList.toggle('active');
        });

        // 点击导航链接后关闭菜单
        nav.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.classList.remove('active');
                }
            });
        });

        // 点击页面其他区域关闭菜单
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 &&
                !nav.contains(e.target) &&
                !menuToggle.contains(e.target) &&
                nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
            }
        });
    }

    /**
     * 平滑滚动
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * 高亮当前页面导航
     */
    function initActiveNavHighlight() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(function(link) {
            const href = link.getAttribute('href');

            // 移除所有 active 类
            link.classList.remove('active');

            // 判断当前页面
            if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
                // 首页
                if (href === 'index.html' || href === './') {
                    link.classList.add('active');
                }
            } else if (currentPath.includes('/chapters/')) {
                if (href.includes('chapters')) {
                    link.classList.add('active');
                }
            } else if (currentPath.includes('/lectures/')) {
                if (href.includes('lectures')) {
                    link.classList.add('active');
                }
            } else if (currentPath.includes('/labs/')) {
                if (href.includes('labs')) {
                    link.classList.add('active');
                }
            } else if (currentPath.includes('/tutorials/')) {
                if (href.includes('tutorials')) {
                    link.classList.add('active');
                }
            } else if (currentPath.includes('/datasets/')) {
                if (href.includes('datasets')) {
                    link.classList.add('active');
                }
            } else if (currentPath.includes('/interactive/')) {
                if (href.includes('interactive')) {
                    link.classList.add('active');
                }
            }
        });
    }

    /**
     * 章节目录滚动高亮
     */
    function initTOCSpy() {
        const tocLinks = Array.from(document.querySelectorAll('.toc-link[href^="#"]'));
        if (!tocLinks.length) return;

        const targets = tocLinks
            .map(function(link) {
                const selector = link.getAttribute('href');
                return document.querySelector(selector);
            })
            .filter(Boolean);

        if (!targets.length) return;

        const tocContainer = document.querySelector('.sidebar-sticky');

        function setActiveLink(id) {
            tocLinks.forEach(function(link) {
                const isActive = link.getAttribute('href') === '#' + id;
                link.classList.toggle('active', isActive);

                if (isActive && tocContainer) {
                    const top = link.offsetTop - tocContainer.clientHeight / 2;
                    tocContainer.scrollTo({
                        top: Math.max(0, top),
                        behavior: 'smooth'
                    });
                }
            });
        }

        const observer = new IntersectionObserver(function(entries) {
            const visible = entries
                .filter(function(entry) {
                    return entry.isIntersecting;
                })
                .sort(function(a, b) {
                    return a.boundingClientRect.top - b.boundingClientRect.top;
                });

            if (visible.length) {
                setActiveLink(visible[0].target.id);
            }
        }, {
            rootMargin: '-100px 0px -65% 0px',
            threshold: [0, 0.1, 0.25, 0.5]
        });

        targets.forEach(function(target) {
            observer.observe(target);
        });

        const initial = targets.find(function(target) {
            return target.getBoundingClientRect().top >= 0;
        }) || targets[0];
        setActiveLink(initial.id);
    }

    /**
     * 工具函数：获取相对路径前缀
     */
    window.getBasePath = function() {
        const depth = (window.location.pathname.match(/\//g) || []).length - 1;
        return '../'.repeat(Math.max(0, depth));
    };

})();
