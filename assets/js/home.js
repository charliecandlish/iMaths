(() => {
    // --- State ---
    let progress = {};

    // --- Load Course Data ---
    function loadCourseData() {
        if (!window.Course || !window.Course.modules) {
            console.error('Course.js not loaded!');
            return;
        }

        // Load progress from localStorage
        progress = JSON.parse(localStorage.getItem('ratioCourseData')) || {};

        // Determine Next Up
        const allModules = [
            ...Course.modules.number,
            ...Course.modules.ratio,
            ...Course.modules.algebra,
            ...Course.modules.geometry,
            ...Course.modules.stats
        ];
        const nextUpModule = allModules.find(m => !progress[m.key]);
        const nextUpKey = nextUpModule ? nextUpModule.key : null;

        // Render Grids
        renderGrid('number-grid', Course.modules.number, nextUpKey);
        renderGrid('ratio-prop-grid', Course.modules.ratio, nextUpKey);
        renderGrid('alg-grid', Course.modules.algebra, nextUpKey);
        renderGrid('geo-grid', Course.modules.geometry, nextUpKey);
        renderGrid('stats-grid', Course.modules.stats, nextUpKey);

        updateProgress();
    }

    function saveProgress() {
        localStorage.setItem('ratioCourseData', JSON.stringify(progress));
    }

    // --- UI Rendering ---
    function createRow(module, href, index, isNextUp, isFreePreview = false) {
        const isComplete = progress[module.key];
        const score = isComplete && module.isQuiz ? progress[module.key + '_score'] : null;
        const isQuiz = module.isQuiz;
        const lessonNumber = index + 1;

        const colorMap = {
            blue: 'bg-blue-100 text-blue-600',
            pink: 'bg-pink-100 text-pink-600',
            indigo: 'bg-indigo-100 text-indigo-600',
            purple: 'bg-purple-100 text-purple-600',
            orange: 'bg-orange-100 text-orange-600',
            emerald: 'bg-emerald-100 text-emerald-600',
            sky: 'bg-sky-100 text-sky-600',
            rose: 'bg-rose-100 text-rose-600',
            slate: 'bg-slate-100 text-slate-600',
            violet: 'bg-violet-100 text-violet-600',
            cyan: 'bg-cyan-100 text-cyan-600',
            fuchsia: 'bg-fuchsia-100 text-fuchsia-600',
            amber: 'bg-amber-100 text-amber-600',
            lime: 'bg-lime-100 text-lime-600',
            red: 'bg-red-100 text-red-600',
            yellow: 'bg-yellow-100 text-yellow-600',
            green: 'bg-green-100 text-green-600',
            teal: 'bg-teal-100 text-teal-600'
        };

        const iconStyle = colorMap[module.color] || 'bg-slate-100 text-slate-600';
        const iconClass = module.fa || 'fa-circle';

        const nextUpClasses = isNextUp ? "border-2 border-indigo-500 shadow-lg transform scale-[1.02] z-10 ring-4 ring-indigo-50" : "border border-transparent hover:border-slate-200 hover:shadow-sm";
        const nextBadge = isNextUp ? `<div class="absolute -top-3 -right-3 bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md animate-bounce">NEXT UP</div>` : '';

        return `
            <a href="${href}" class="course-row group no-underline block rounded-xl bg-white px-3 py-3 mb-2 transition-all relative ${nextUpClasses}">
                ${nextBadge}
                <div class="flex items-center gap-4">
                    <div class="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-black shrink-0 border border-slate-200">
                        ${lessonNumber}
                    </div>
                    <div class="w-10 h-10 rounded-lg ${iconStyle} flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                        <i class="fa-solid ${iconClass}"></i>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center gap-2">
                            <h3 class="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">${module.title}</h3>
                            ${isComplete ? '<i class="fa-solid fa-check-circle text-emerald-500 text-xs"></i>' : ''}
                        </div>
                        <p class="text-xs text-slate-500 font-medium">${module.desc}</p>
                    </div>
                    <div class="text-xs font-bold text-slate-400 group-hover:text-indigo-600 transition-colors flex items-center">
                       ${isQuiz ? (score ? `<span class="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">${score}%</span>` : 'Quiz') : 'Play'} 
                       <i class="fa-solid fa-chevron-right ml-2 text-[10px]"></i>
                    </div>
                </div>
            </a>
        `;
    }

    function renderGrid(gridId, modules, nextUpKey) {
        const grid = document.getElementById(gridId);
        if (!grid) return;

        grid.innerHTML = modules.map((module, index) => {
            const href = module.href ? `lessons/${module.href}` : '#';
            return createRow(module, href, index, module.key === nextUpKey);
        }).join('');
    }

    function updateProgress() {
        if (!window.Course || !window.Course.modules) return;

        const countComplete = (mods) => mods.filter(m => progress[m.key]).length;

        const numberCount = countComplete(Course.modules.number);
        const rpCount = countComplete(Course.modules.ratio);
        const algCount = countComplete(Course.modules.algebra);
        const geoCount = countComplete(Course.modules.geometry);
        const statsCount = countComplete(Course.modules.stats);

        const total = Course.modules.number.length + Course.modules.ratio.length + Course.modules.algebra.length + Course.modules.geometry.length + Course.modules.stats.length;
        const done = numberCount + rpCount + algCount + geoCount + statsCount;
        const pct = total === 0 ? 0 : Math.round((done / total) * 100);

        const numberDisplay = document.getElementById('number-progress');
        if (numberDisplay) numberDisplay.textContent = `${numberCount}/${Course.modules.number.length} Complete`;

        const rpDisplay = document.getElementById('ratio-prop-progress');
        if (rpDisplay) rpDisplay.textContent = `${rpCount}/${Course.modules.ratio.length} Complete`;

        const algDisplay = document.getElementById('alg-progress');
        if (algDisplay) algDisplay.textContent = `${algCount}/${Course.modules.algebra.length} Complete`;

        const geoDisplay = document.getElementById('geo-progress');
        if (geoDisplay) geoDisplay.textContent = `${geoCount}/${Course.modules.geometry.length} Complete`;

        const statsDisplay = document.getElementById('stats-progress');
        if (statsDisplay) statsDisplay.textContent = `${statsCount}/${Course.modules.stats.length} Complete`;

        if (document.getElementById('total-progress-text')) {
            document.getElementById('total-progress-text').textContent = `${pct}%`;
            const progressBar = document.getElementById('total-progress-bar');
            if (progressBar) progressBar.style.width = `${pct}%`;
        }
    }

    function toggleSection(contentId, chevronId) {
        const content = document.getElementById(contentId);
        const chevron = document.getElementById(chevronId);
        if (!content || !chevron) return;

        const isCollapsed = content.classList.contains('collapsed');

        // Close all other sections first (accordion behavior)
        const allSections = ['number-content', 'ratio-prop-content', 'alg-content', 'geo-content', 'stats-content'];
        const allChevrons = ['number-chevron', 'ratio-prop-chevron', 'alg-chevron', 'geo-chevron', 'stats-chevron'];

        allSections.forEach((sectionId, index) => {
            if (sectionId !== contentId) {
                const otherContent = document.getElementById(sectionId);
                const otherChevron = document.getElementById(allChevrons[index]);
                if (otherContent && otherChevron) {
                    otherContent.classList.add('collapsed');
                    otherChevron.classList.remove('fa-minus');
                    otherChevron.classList.add('fa-plus');
                }
            }
        });

        // Toggle the clicked section
        if (isCollapsed) {
            content.classList.remove('collapsed');
            chevron.classList.remove('fa-plus');
            chevron.classList.add('fa-minus');
        } else {
            content.classList.add('collapsed');
            chevron.classList.remove('fa-minus');
            chevron.classList.add('fa-plus');
        }
    }

    // --- Theme & Cursor Logic ---
    const themeClasses = ['bg-ocean', 'bg-sunrise', 'bg-football', 'bg-boxing', 'bg-car', 'bg-forest', 'bg-pink'];
    const cursorClasses = ['cursor-classic', 'cursor-astro', 'cursor-robot', 'cursor-star', 'cursor-heart'];

    function toggleThemeModal() {
        const modal = document.getElementById('theme-modal');
        const isOpening = modal.classList.contains('hidden');
        modal.classList.toggle('hidden');

        if (isOpening) {
            const currentTheme = localStorage.getItem('mathMaster_theme') || '';
            document.querySelectorAll('.theme-btn').forEach(btn => {
                const value = btn.dataset.theme ?? '';
                btn.classList.toggle('selected', value === currentTheme);
            });

            const currentCursor = localStorage.getItem('mathMaster_cursor') || 'cursor-classic';
            document.querySelectorAll('.cursor-btn').forEach(btn => {
                const value = btn.dataset.cursor ?? 'cursor-classic';
                btn.classList.toggle('selected', value === currentCursor);
            });
        }
    }

    function setTheme(themeClass) {
        const normalizedTheme = themeClass || '';
        document.body.classList.remove(...themeClasses);

        if (normalizedTheme) {
            document.body.classList.add(normalizedTheme);
        }

        localStorage.setItem('mathMaster_theme', normalizedTheme);

        document.querySelectorAll('.theme-btn').forEach(btn => {
            const value = btn.dataset.theme ?? '';
            btn.classList.toggle('selected', value === normalizedTheme);
        });
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('mathMaster_theme') || '';
        setTheme(savedTheme);
    }

    function setCursorType(cursorClass) {
        const targetClass = cursorClasses.includes(cursorClass) ? cursorClass : 'cursor-classic';
        document.body.classList.remove(...cursorClasses);
        document.body.classList.add(targetClass);

        localStorage.setItem('mathMaster_cursor', targetClass);

        document.querySelectorAll('.cursor-btn').forEach(btn => {
            const value = btn.dataset.cursor ?? 'cursor-classic';
            btn.classList.toggle('selected', value === targetClass);
        });
    }

    function loadCursor() {
        const savedCursor = localStorage.getItem('mathMaster_cursor') || 'cursor-classic';
        setCursorType(savedCursor);
    }

    // --- Global Exports ---
    window.toggleSection = toggleSection;
    window.toggleThemeModal = toggleThemeModal;
    window.setTheme = setTheme;
    window.setCursorType = setCursorType;

    // --- Lifecycle ---
    function init() {
        if (!window.Course || !window.Course.modules) {
            setTimeout(init, 50);
            return;
        }
        loadCourseData();
        loadTheme();
        loadCursor();
        setInterval(saveProgress, 5000);
        window.addEventListener('beforeunload', saveProgress);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();