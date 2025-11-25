(() => {
    const TEMPLATE = `
        <section class="quiz-hero">
            <div class="quiz-hero__copy">
                <p class="quiz-pill" id="quiz-subtitle"></p>
                <h1 id="quiz-title"></h1>
                <p id="quiz-description"></p>
                <div class="quiz-pill-group">
                    <span class="quiz-pill" id="quiz-progress-pill"></span>
                    <span class="quiz-pill" id="quiz-skill-pill"></span>
                </div>
            </div>
            <div class="quiz-score">
                <small>Current Score</small>
                <strong id="quiz-score">0%</strong>
            </div>
        </section>
        <section class="quiz-panel">
            <div class="quiz-panel__header">
                <span id="quiz-question-label">Question</span>
                <div>
                    <button class="quiz-btn ghost" id="quiz-hint-toggle" type="button">Need a hint?</button>
                </div>
            </div>
            <h2 class="quiz-panel__headline" id="quiz-question">Loading...</h2>
            <div class="quiz-hint" id="quiz-hint"></div>
            <div class="quiz-options" id="quiz-options"></div>
            <div class="quiz-feedback" id="quiz-feedback"></div>
            <div class="quiz-actions">
                <span id="quiz-progress-text"></span>
                <button class="quiz-btn accent" id="quiz-next" type="button" disabled>Check in with the next one →</button>
            </div>
        </section>
        <section class="quiz-results" id="quiz-results">
            <div class="quiz-score-ring" id="quiz-final-score">0%</div>
            <div>
                <h2 id="quiz-results-title">Great work!</h2>
                <p id="quiz-results-copy">You’ve reached the end of this checkpoint.</p>
            </div>
            <div class="quiz-actions" style="justify-content:center;">
                <button class="quiz-btn ghost" id="quiz-retry">Try Again</button>
                <button class="quiz-btn accent" id="quiz-save">Save to Dashboard</button>
            </div>
        </section>
    `;

    function formatPercent(score, total) {
        if (!total) return '0%';
        return `${Math.round((score / total) * 100)}%`;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const config = window.quizConfig;
        if (!config || !config.questions || !config.questions.length) {
            console.warn('quizConfig missing or invalid');
            return;
        }

        if (config.theme) {
            document.body.dataset.quizTheme = config.theme;
        }

        const root = document.getElementById('quiz-app');
        if (!root) return;
        root.innerHTML = TEMPLATE;

        const state = {
            index: 0,
            score: 0,
            answered: false
        };

        const els = {
            subtitle: document.getElementById('quiz-subtitle'),
            title: document.getElementById('quiz-title'),
            description: document.getElementById('quiz-description'),
            progressPill: document.getElementById('quiz-progress-pill'),
            skillPill: document.getElementById('quiz-skill-pill'),
            score: document.getElementById('quiz-score'),
            label: document.getElementById('quiz-question-label'),
            question: document.getElementById('quiz-question'),
            options: document.getElementById('quiz-options'),
            feedback: document.getElementById('quiz-feedback'),
            next: document.getElementById('quiz-next'),
            progressText: document.getElementById('quiz-progress-text'),
            hintToggle: document.getElementById('quiz-hint-toggle'),
            hint: document.getElementById('quiz-hint'),
            results: document.getElementById('quiz-results'),
            resultsTitle: document.getElementById('quiz-results-title'),
            resultsCopy: document.getElementById('quiz-results-copy'),
            finalScore: document.getElementById('quiz-final-score'),
            retry: document.getElementById('quiz-retry'),
            save: document.getElementById('quiz-save')
        };

        els.subtitle.textContent = config.subtitle || 'Checkpoint';
        els.title.textContent = config.title || 'Skills Review';
        els.description.textContent = config.description || 'Answer each scenario to prove mastery.';
        els.skillPill.textContent = config.skillsLabel || 'Skill Focus';

        els.hintToggle.addEventListener('click', () => {
            els.hint.classList.toggle('visible');
            els.hintToggle.textContent = els.hint.classList.contains('visible') ? 'Hide hint' : 'Need a hint?';
        });

        els.next.addEventListener('click', () => {
            if (!state.answered) return;
            state.index += 1;
            if (state.index >= config.questions.length) {
                showResults();
            } else {
                renderQuestion();
            }
        });

        els.retry.addEventListener('click', () => {
            state.index = 0;
            state.score = 0;
            els.results.classList.remove('visible');
            els.next.disabled = true;
            renderQuestion();
        });

        els.save.addEventListener('click', () => {
            if (window.Course && typeof Course.saveScore === 'function') {
                const pct = Math.round((state.score / config.questions.length) * 100);
                Course.saveScore(config.key || 'quiz', pct);
            } else {
                window.location.href = '../index.html';
            }
        });

        function renderQuestion() {
            state.answered = false;
            els.feedback.classList.remove('visible');
            els.feedback.textContent = '';
            els.next.disabled = true;

            const question = config.questions[state.index];
            els.progressPill.textContent = `Question ${state.index + 1} / ${config.questions.length}`;
            els.progressText.textContent = question.skill ? `Skill: ${question.skill}` : '';
            els.label.textContent = question.tag || 'Understand';
            els.question.innerHTML = question.prompt;

            els.hint.textContent = question.hint || 'Try to sketch or model the situation if you feel stuck.';
            els.hint.classList.remove('visible');
            els.hintToggle.textContent = 'Need a hint?';

            els.options.innerHTML = '';
            question.options.forEach((option, idx) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'quiz-option';
                btn.innerHTML = option;
                btn.addEventListener('click', () => handleAnswer(idx, btn));
                els.options.appendChild(btn);
            });

            els.score.textContent = formatPercent(state.score, config.questions.length);
        }

        function handleAnswer(idx, btn) {
            if (state.answered) return;
            state.answered = true;
            const question = config.questions[state.index];
            const correct = idx === question.answer;

            const buttons = Array.from(els.options.children);
            buttons.forEach((button, index) => {
                button.disabled = true;
                if (index === question.answer) {
                    button.classList.add('correct');
                }
            });

            if (!correct) {
                btn.classList.add('wrong');
            } else {
                state.score += 1;
            }

            els.feedback.textContent = question.detail || '';
            els.feedback.classList.add('visible');
            els.next.disabled = false;
            els.score.textContent = formatPercent(state.score, config.questions.length);
        }

        function showResults() {
            const pct = Math.round((state.score / config.questions.length) * 100);
            els.finalScore.textContent = `${pct}%`;
            els.resultsTitle.textContent = pct >= 80 ? 'Elite work!' : pct >= 50 ? 'Solid progress' : 'Keep training';
            els.resultsCopy.textContent = config.resultsCopy || 'Review any flagged skills and try again when ready.';
            els.results.classList.add('visible');
        }

        renderQuestion();
    });
})();

