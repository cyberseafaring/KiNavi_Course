/**
 * Quiz Engine - 简单选择题测验
 */

(function () {
    'use strict';

    function escapeHtml(text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function $(id) {
        return document.getElementById(id);
    }

    function renderQuiz(container, questions, quizId) {
        container.innerHTML = '';

        questions.forEach(function (q, idx) {
            const qEl = document.createElement('div');
            qEl.className = 'quiz-question';
            qEl.dataset.index = String(idx);

            const title = document.createElement('h3');
            title.innerHTML = (idx + 1) + '. ' + escapeHtml(q.question);
            qEl.appendChild(title);

            const options = document.createElement('div');
            options.className = 'quiz-options';

            q.options.forEach(function (opt, optIdx) {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = quizId + '-q' + idx;
                input.value = String(optIdx);
                input.style.marginRight = '0.5rem';
                label.appendChild(input);
                label.insertAdjacentHTML('beforeend', escapeHtml(opt));
                options.appendChild(label);
            });

            qEl.appendChild(options);

            const explain = document.createElement('div');
            explain.className = 'quiz-explain';
            explain.style.display = 'none';
            explain.innerHTML = '';
            qEl.appendChild(explain);

            container.appendChild(qEl);
        });
    }

    function scoreQuiz(container, questions, quizId) {
        let correct = 0;
        let answered = 0;

        const qEls = container.querySelectorAll('.quiz-question');
        qEls.forEach(function (qEl) {
            const idx = Number(qEl.dataset.index);
            const q = questions[idx];
            const chosen = qEl.querySelector('input[type="radio"]:checked');
            const explain = qEl.querySelector('.quiz-explain');

            if (!chosen) {
                explain.style.display = 'block';
                explain.innerHTML = '未作答。正确答案是：' + escapeHtml(q.options[q.answerIndex]) + '。';
                return;
            }

            answered += 1;
            const chosenIdx = Number(chosen.value);
            const isCorrect = chosenIdx === q.answerIndex;

            if (isCorrect) correct += 1;

            explain.style.display = 'block';
            explain.innerHTML =
                (isCorrect ? '<span class="tag tag-success">正确</span>' : '<span class="tag tag-warning">错误</span>') +
                ' <span style="margin-left: 0.5rem;">正确答案：' + escapeHtml(q.options[q.answerIndex]) + '</span>' +
                (q.explanation ? '<div style="margin-top: 0.5rem;">' + escapeHtml(q.explanation) + '</div>' : '');
        });

        const total = questions.length;
        return { correct: correct, total: total, answered: answered };
    }

    window.IoSQuiz = {
        init: function (opts) {
            const select = $(opts.selectId);
            const loadBtn = $(opts.loadBtnId);
            const submitBtn = $(opts.submitBtnId);
            const container = $(opts.containerId);
            const result = $(opts.resultId);
            const baseUrl = opts.baseUrl || '';

            if (!select || !loadBtn || !submitBtn || !container || !result) {
                console.error('Quiz controls missing');
                return;
            }

            const quizId = 'quiz-' + Math.random().toString(16).slice(2);
            let currentQuestions = [];

            function load() {
                const key = select.value;
                result.style.display = 'none';
                result.textContent = '';
                container.innerHTML = '<p class="loading">加载中...</p>';

                fetch(baseUrl + key + '.json')
                    .then(function (r) {
                        if (!r.ok) throw new Error('Failed to load: ' + r.status);
                        return r.json();
                    })
                    .then(function (data) {
                        currentQuestions = data.questions || [];
                        renderQuiz(container, currentQuestions, quizId);
                    })
                    .catch(function (err) {
                        container.innerHTML = '<p class="error">加载失败：' + escapeHtml(err.message) + '</p>';
                        console.error(err);
                    });
            }

            loadBtn.addEventListener('click', load);
            submitBtn.addEventListener('click', function () {
                if (!currentQuestions.length) return;
                const s = scoreQuiz(container, currentQuestions, quizId);
                result.style.display = 'block';
                result.textContent = '得分：' + s.correct + ' / ' + s.total + '（已作答 ' + s.answered + ' 题）';
            });

            load();
        }
    };
})();

