// Load Font Awesome for icons (if not already loaded)
(function () {
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        faLink.rel = 'stylesheet';
        document.head.appendChild(faLink);
    }
})();

(() => {
    const queue = [];
    let isReady = false;
    let elements = {};

    const defaultOptions = {
        accent: '#6366f1',
        badge: 'Coach Tip'
    };

    function apply({ message, options }) {
        if (!isReady) {
            queue.push({ message, options });
            return;
        }

        const opts = Object.assign({}, defaultOptions, options || {});
        elements.shell.style.setProperty('--coach-accent', opts.accent);
        elements.badge.textContent = opts.badge;
        elements.text.textContent = message || 'Follow the onscreen prompt carefully.';

        if (opts.emoji) {
            elements.avatar.textContent = opts.emoji;
        } else {
            elements.avatar.textContent = '★';
        }

        if (elements.card.classList.contains('hidden')) {
            elements.card.classList.remove('hidden');
            elements.fab.classList.remove('visible');
        }
    }

    function init() {
        if (isReady) return;

        const shell = document.createElement('div');
        shell.className = 'lesson-coach-shell';

        const card = document.createElement('div');
        card.className = 'lesson-coach-card';

        card.innerHTML = `
            <div class="lesson-coach-avatar" aria-hidden="true">★</div>
            <div class="lesson-coach-content">
                <p class="lesson-coach-label">Coach Tip</p>
                <p class="lesson-coach-text" id="lesson-coach-text">Welcome back! Let me guide you as you work.</p>
                <div class="lesson-coach-actions">
                    <span id="lesson-coach-status">Stay curious.</span>
                    <button class="lesson-coach-dismiss" type="button">Hide</button>
                </div>
            </div>
        `;

        const fab = document.createElement('button');
        fab.className = 'lesson-coach-fab';
        fab.type = 'button';
        fab.title = 'Open Coach';
        fab.innerHTML = '!';

        shell.appendChild(card);
        shell.appendChild(fab);
        document.body.appendChild(shell);

        const avatar = card.querySelector('.lesson-coach-avatar');
        const badge = card.querySelector('.lesson-coach-label');
        const text = card.querySelector('.lesson-coach-text');
        const dismiss = card.querySelector('.lesson-coach-dismiss');
        const status = card.querySelector('#lesson-coach-status');

        dismiss.addEventListener('click', () => {
            card.classList.add('hidden');
            fab.classList.add('visible');
        });

        fab.addEventListener('click', () => {
            card.classList.remove('hidden');
            fab.classList.remove('visible');
        });

        elements = { shell, card, fab, avatar, badge, text, status };
        isReady = true;

        while (queue.length) {
            const item = queue.shift();
            apply(item);
        }
    }

    document.addEventListener('DOMContentLoaded', init);

    window.LessonCoach = {
        set(message, options) {
            apply({ message, options });
        },
        hide() {
            if (!isReady) return;
            elements.card.classList.add('hidden');
            elements.fab.classList.add('visible');
        },
        show() {
            if (!isReady) return;
            elements.card.classList.remove('hidden');
            elements.fab.classList.remove('visible');
        }
    };
})();

// Load calculator and whiteboard on all pages
(function () {
    'use strict';

    // Detect correct path based on current page location
    const isLessonPage = window.location.pathname.includes('/lessons/');
    const basePath = isLessonPage ? '../assets/js/' : 'assets/js/';

    // Load calculator
    function loadCalculator() {
        // Check if already loaded by looking for the actual element
        if (document.getElementById('math-calculator-root')) {
            return;
        }

        const calcScript = document.createElement('script');
        calcScript.src = basePath + 'calculator.js';
        calcScript.async = false; // Load synchronously to ensure proper order
        document.head.appendChild(calcScript);
    }

    // Load whiteboard
    function loadWhiteboard() {
        // Check if already loaded by looking for the actual element or existing script
        if (document.getElementById('whiteboard-overlay')) {
            return;
        }

        // Check if script is already in the DOM
        const scriptPath = basePath + 'whiteboard.js';
        if (document.querySelector(`script[src="${scriptPath}"]`)) {
            return;
        }

        const wbScript = document.createElement('script');
        wbScript.src = scriptPath;
        wbScript.async = false; // Load synchronously to ensure proper order
        document.head.appendChild(wbScript);
    }

    // Load immediately if DOM is ready, otherwise wait
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            loadCalculator();
            loadWhiteboard();
        });
    } else {
        loadCalculator();
        loadWhiteboard();
    }
})();
