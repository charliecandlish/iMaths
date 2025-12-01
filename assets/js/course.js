const Course = {
    modules: {
        number: [
            { key: 'num_place', title: "Place Value Basics", desc: "Digits & magnitude", isQuiz: false, fa: "fa-cubes-stacked", color: "amber", href: 'PlaceValueStudio.html' },
            { key: 'num_bidmas', title: "Order of Operations", desc: "Order of Operations", isQuiz: false, fa: "fa-list-ol", color: "violet", href: 'BIDMASBoss.html' },
            { key: 'num_integer', title: "Integers on Number Lines", desc: "Number Line Missions", isQuiz: false, fa: "fa-road", color: "blue", href: 'IntegerQuest.html' },
            { key: 'num_decimal', title: "Decimal Calculations", desc: "Decimal Operations", isQuiz: false, fa: "fa-calculator", color: "cyan", href: 'DecimalDojo.html' },
            { key: 'num_longops', title: "Long Multiplication and Division", desc: "Long × and ÷", isQuiz: false, fa: "fa-grip-lines", color: "green", href: 'LongOps.html' },
            { key: 'num_factor', title: "Prime Factors, HCF and LCM", desc: "Primes, HCF & LCM", isQuiz: false, fa: "fa-hammer", color: "orange", href: 'FactorForge.html' },
            { key: 'num_frac_ops', title: "Adding and Subtracting Fractions", desc: "Add & Subtract Fractions", isQuiz: false, fa: "fa-circle-half-stroke", color: "pink", href: 'FractionsOps.html' },
            { key: 'num_equiv', title: "Equivalent Fractions", desc: "Scale fractions up/down", isQuiz: false, fa: "fa-equals", color: "rose", href: 'EquivalentFractions.html' },
            { key: 'num_percent', title: "Percent-Decimal-Fraction Conversions", desc: "% ↔ Decimal ↔ Fraction", isQuiz: false, fa: "fa-percent", color: "lime", href: 'PercentPulse.html' },
            { key: 'num_round', title: "Rounding Numbers Practice", desc: "Rounding Numbers", isQuiz: false, fa: "fa-bullseye", color: "indigo", href: 'RoundingLab.html' },
            { key: 'num_order', title: "Ordering Integers and Decimals", desc: "Compare & Order", isQuiz: false, fa: "fa-arrow-down-short-wide", color: "pink", href: 'OrderingNumbers.html' },
            { key: 'num_recurring', title: "Recurring Decimals to Fractions", desc: "Recurring → Fractions", isQuiz: false, fa: "fa-repeat", color: "amber", href: 'RecurringLab.html' },
            { key: 'num_estimate', title: "Estimation Strategies", desc: "Quick Estimates", isQuiz: false, fa: "fa-gauge", color: "violet", href: 'EstimationStation.html' },
            { key: 'num_error', title: "Error Intervals", desc: "Error Intervals", isQuiz: false, fa: "fa-ruler", color: "sky", href: 'ErrorBounds.html' },
            { key: 'num_power', title: "Powers and Roots", desc: "Powers & Roots", isQuiz: false, fa: "fa-bolt", color: "red", href: 'PowerPlay.html' },
            { key: 'num_standard', title: "Standard Form Problems", desc: "Astronomy Scale", isQuiz: false, fa: "fa-rocket", color: "purple", href: 'StandardFormStation.html' },
            { key: 'num_quiz', title: "Number Topic Quiz", desc: "Topic Quiz", isQuiz: true, fa: "fa-flag-checkered", color: "amber", href: 'QuizNumber.html' }
        ],
        ratio: [
            { key: 'rp_basics', title: "Introduction to Ratios", desc: "Simplify & Units", isQuiz: false, fa: "fa-door-open", color: "blue", href: 'ratios1.html' },
            { key: 'rp_simplify', title: "Simplifying Ratios", desc: "1:n Form & Reduce", isQuiz: false, fa: "fa-compress", color: "pink", href: 'TheSimplifier.html' },
            { key: 'rp_fractions', title: "Writing Ratios as Fractions", desc: "Ratios as Fractions", isQuiz: false, fa: "fa-chart-pie", color: "violet", href: 'FractionsFoundry.html' },
            { key: 'rp_share', title: "Sharing in a Given Ratio", desc: "Total Sharing", isQuiz: false, fa: "fa-share-nodes", color: "purple", href: 'TheRatioSplitter.html' },
            { key: 'rp_scale', title: "Scaling Ratios from One Part", desc: "Given One Part", isQuiz: false, fa: "fa-maximize", color: "emerald", href: 'ScaleCity.html' },
            { key: 'rp_diff', title: "Comparing Ratio Differences", desc: "Finding the Gap", isQuiz: false, fa: "fa-magnifying-glass", color: "orange", href: 'WordProblemLab.html' },
            { key: 'rp_recipe', title: "Scaling Recipes", desc: "Scaling Ingredients", isQuiz: false, fa: "fa-utensils", color: "rose", href: 'TactileRatio.html' },
            { key: 'rp_buy', title: "Best Value Problems", desc: "Best Buys", isQuiz: false, fa: "fa-tags", color: "green", href: 'BestBuys.html' },
            { key: 'rp_unitary', title: "Unitary Method", desc: "Find value of 1", isQuiz: false, fa: "fa-1", color: "sky", href: 'UnitaryMethod.html' },
            { key: 'rp_fdp', title: "Fractions Decimals Percents Review", desc: "Conversions", isQuiz: false, fa: "fa-repeat", color: "lime", href: 'FDP.html' },
            { key: 'rp_percent', title: "Percentage Change Problems", desc: "Amount & Inc/Dec", isQuiz: false, fa: "fa-arrow-trend-up", color: "amber", href: 'PercentagePower.html' },
            { key: 'rp_interest', title: "Simple and Compound Interest", desc: "Simple & Compound", isQuiz: false, fa: "fa-piggy-bank", color: "yellow", href: 'InterestVault.html' },
            { key: 'rp_reverse', title: "Reverse Percentage Problems", desc: "Original Amount", isQuiz: false, fa: "fa-clock-rotate-left", color: "fuchsia", href: 'ReverseRewind.html' },
            { key: 'rp_compound', title: "Compound Measures", desc: "Speed, Density, Pressure", isQuiz: false, fa: "fa-gauge-high", color: "cyan", href: 'CompoundMeasures.html' },
            { key: 'rp_geo', title: "Map Scales and Similar Shapes", desc: "Scales & Similarity", isQuiz: false, fa: "fa-map-location-dot", color: "indigo", href: 'MapRoom.html' },
            { key: 'rp_quiz', title: "Ratio and Proportion Quiz", desc: "Topic Quiz", isQuiz: true, fa: "fa-flag-checkered", color: "blue", href: 'QuizRatioProp.html' }
        ],
        algebra: [
            { key: 'alg_notation', title: "Algebraic Notation", desc: "Language of Algebra", isQuiz: false, fa: "fa-pen-nib", color: "red", href: 'AlgebraNotation.html' },
            { key: 'alg_sub', title: "Substitution Practice", desc: "Replacing Letters", isQuiz: false, fa: "fa-right-left", color: "yellow", href: 'Substitution.html' },
            { key: 'alg_like', title: "Collecting Like Terms", desc: "Collecting & Simplifying", isQuiz: false, fa: "fa-object-group", color: "orange", href: 'LikeTerms.html' },
            { key: 'alg_indices', title: "Laws of Indices", desc: "Powers of Algebra", isQuiz: false, fa: "fa-gavel", color: "purple", href: 'IndexLawCourt.html' },
            { key: 'alg_expand', title: "Expanding Brackets", desc: "Single & Double", isQuiz: false, fa: "fa-expand", color: "blue", href: 'Expansion.html' },
            { key: 'alg_factor', title: "Factorising Expressions", desc: "HCF & Quadratics", isQuiz: false, fa: "fa-minimize", color: "pink", href: 'FactorFactory.html' },
            { key: 'alg_solve', title: "Solving Linear Equations", desc: "Linear & Both Sides", isQuiz: false, fa: "fa-scale-balanced", color: "green", href: 'SolvingEq.html' },
            { key: 'alg_form', title: "Forming and Solving Equations", desc: "Forming Equations", isQuiz: false, fa: "fa-puzzle-piece", color: "amber", href: 'FormulaForge.html' },
            { key: 'alg_ineq', title: "Inequalities on Number Lines", desc: "Number Lines & Solving", isQuiz: false, fa: "fa-less-than-equal", color: "teal", href: 'InequalityIsland.html' },
            { key: 'alg_subject', title: "Rearranging Formulae", desc: "Rearranging Formulae", isQuiz: false, fa: "fa-rotate", color: "cyan", href: 'SubjectShifter.html' },
            { key: 'alg_coords', title: "Plotting Coordinates", desc: "Plotting Points", isQuiz: false, fa: "fa-crosshairs", color: "indigo", href: 'CoordinateGrid.html' },
            { key: 'alg_line', title: "Straight Line Graphs", desc: "y = mx + c", isQuiz: false, fa: "fa-chart-line", color: "rose", href: 'LinearLines.html' },
            { key: 'alg_curves', title: "Quadratic Graphs", desc: "Quadratics & Real-life", isQuiz: false, fa: "fa-bezier-curve", color: "violet", href: 'CurvyGraphs.html' },
            { key: 'alg_seq', title: "Sequences and Nth Terms", desc: "Nth Term & Patterns", isQuiz: false, fa: "fa-list-ol", color: "emerald", href: 'SequenceStudio.html' },
            { key: 'alg_simul', title: "Simultaneous Equations", desc: "Elimination Method", isQuiz: false, fa: "fa-timeline", color: "slate", href: 'SimultaneousHQ.html' },
            { key: 'alg_quiz', title: "Algebra Topic Quiz", desc: "Topic Quiz", isQuiz: true, fa: "fa-flag-checkered", color: "red", href: 'QuizAlgebra.html' }
        ],
        geometry: [
            { key: 'geo_angles', title: "Angles in Lines and Shapes", desc: "Lines, Triangles, Polygons", isQuiz: false, fa: "fa-ruler-combined", color: "indigo", href: 'AngleAcademy.html' },
            { key: 'geo_area', title: "Perimeter and Area", desc: "Perimeter & Area", isQuiz: false, fa: "fa-vector-square", color: "emerald", href: 'AreaArena.html' },
            { key: 'geo_volume', title: "Volume and Surface Area", desc: "3D Forms & Nets", isQuiz: false, fa: "fa-cube", color: "cyan", href: 'VolumeVault.html' },
            { key: 'geo_trans', title: "Transformations", desc: "Reflect, Rotate, Resize", isQuiz: false, fa: "fa-rotate", color: "violet", href: 'TransformationStation.html' },
            { key: 'geo_pythag', title: "Pythagoras' Theorem", desc: "Right-Angled Triangles", isQuiz: false, fa: "fa-mountain", color: "rose", href: 'PythagorasPeak.html' },
            { key: 'geo_vector', title: "Vectors", desc: "Movement & Magnitude", isQuiz: false, fa: "fa-arrow-right-long", color: "sky", href: 'VectorValley.html' },
            { key: 'geo_const', title: "Constructions and Loci", desc: "Loci & Bisectors", isQuiz: false, fa: "fa-compass-drafting", color: "amber", href: 'ConstructionSite.html' },
            { key: 'geo_quiz', title: "Geometry Topic Quiz", desc: "Topic Quiz", isQuiz: true, fa: "fa-flag-checkered", color: "indigo", href: 'QuizGeometry.html' }
        ],
        stats: [
            { key: 'stats_types', title: "Types of Data", desc: "Qualitative vs Quantitative", isQuiz: false, fa: "fa-filter", color: "teal", href: 'DataTypes.html' },
            { key: 'stats_collect', title: "Collecting and Sampling Data", desc: "Sampling & Tallying", isQuiz: false, fa: "fa-clipboard-list", color: "cyan", href: 'CollectionLab.html' },
            { key: 'stats_mmm', title: "Mean Median Mode", desc: "Mean, Median, Mode", isQuiz: false, fa: "fa-divide", color: "emerald", href: 'TheMMMMachine.html' },
            { key: 'stats_tables', title: "Averages from Frequency Tables", desc: "Averages from Frequency", isQuiz: false, fa: "fa-table", color: "indigo", href: 'TableTactics.html' },
            { key: 'stats_charts', title: "Charts and Graphs", desc: "Bar, Line & Pictograms", isQuiz: false, fa: "fa-chart-column", color: "blue", href: 'ChartChampion.html' },
            { key: 'stats_stem', title: "Stem and Leaf Diagrams", desc: "Ordering Data", isQuiz: false, fa: "fa-leaf", color: "green", href: 'StemAndLeaf.html' },
            { key: 'stats_pie', title: "Pie Charts", desc: "Angles & Slices", isQuiz: false, fa: "fa-chart-pie", color: "rose", href: 'PieChartBakery.html' },
            { key: 'stats_scatter', title: "Scatter Graphs", desc: "Correlation & Best Fit", isQuiz: false, fa: "fa-project-diagram", color: "violet", href: 'ScatterScout.html' },
            { key: 'stats_prob_basic', title: "Basic Probability", desc: "Chance & Fractions", isQuiz: false, fa: "fa-dice", color: "orange", href: 'ProbabilityScale.html' },
            { key: 'stats_prob_exp', title: "Experimental Probability", desc: "Relative Frequency", isQuiz: false, fa: "fa-flask", color: "amber", href: 'ExperimentalLab.html' },
            { key: 'stats_venn', title: "Venn Diagrams", desc: "Sets & Logic", isQuiz: false, fa: "fa-layer-group", color: "purple", href: 'VennVault.html' },
            { key: 'stats_trees', title: "Probability Trees", desc: "Frequency & Probability", isQuiz: false, fa: "fa-sitemap", color: "pink", href: 'TreeClimber.html' },
            { key: 'stats_quiz', title: "Statistics Topic Quiz", desc: "Topic Quiz", isQuiz: true, fa: "fa-flag-checkered", color: "teal", href: 'QuizStats.html' }
        ]
    },

    completeLesson: (key) => {
        const progress = JSON.parse(localStorage.getItem('ratioCourseData')) || {};
        progress[key] = true;

        // Sync with user data if logged in
        const currentUser = localStorage.getItem('mathMaster_currentUser');
        if (currentUser) {
            const db = JSON.parse(localStorage.getItem('mathMaster_users')) || {};
            if (db[currentUser]) {
                db[currentUser].data = { ...db[currentUser].data, [key]: true };
                localStorage.setItem('mathMaster_users', JSON.stringify(db));
            }
        }

        localStorage.setItem('ratioCourseData', JSON.stringify(progress));

        // Auto-advance logic
        const nextLesson = Course.getNextLesson(key);
        if (nextLesson) {
            // Construct correct path
            const basePath = window.location.protocol === 'file:' ? '' : '';
            // Lesson files are in public/lessons/, so relative path is just the filename if we are in a lesson
            // But if we are in index.html it's lessons/filename
            // Course.js is included in lessons, so window.location.href is relative to current page

            window.location.href = nextLesson.href;
        } else {
            window.location.href = '../index.html';
        }
    },

    saveScore: (key, score) => {
        const progress = JSON.parse(localStorage.getItem('ratioCourseData')) || {};
        if (!progress[key + '_score'] || score > progress[key + '_score']) {
            progress[key + '_score'] = score;
        }
        progress[key] = true;

        const currentUser = localStorage.getItem('mathMaster_currentUser');
        if (currentUser) {
            const db = JSON.parse(localStorage.getItem('mathMaster_users')) || {};
            if (db[currentUser]) {
                db[currentUser].data = { ...db[currentUser].data, ...progress };
                localStorage.setItem('mathMaster_users', JSON.stringify(db));
            }
        }

        localStorage.setItem('ratioCourseData', JSON.stringify(progress));
        window.location.href = '../index.html';
    },

    getNextLesson: (currentKey) => {
        const allModules = [
            ...Course.modules.number,
            ...Course.modules.ratio,
            ...Course.modules.algebra,
            ...Course.modules.geometry,
            ...Course.modules.stats
        ];

        const idx = allModules.findIndex(m => m.key === currentKey);
        if (idx !== -1 && idx < allModules.length - 1) {
            return allModules[idx + 1];
        }
        return null;
    }
};
window.Course = Course;

// --- Global Theme & Cursor Helpers (site-wide) ---
(function () {
    const themeClasses = ['bg-ocean', 'bg-sunrise', 'bg-football', 'bg-boxing', 'bg-car', 'bg-forest', 'bg-pink'];
    const cursorClasses = ['cursor-classic', 'cursor-astro', 'cursor-robot', 'cursor-star', 'cursor-heart'];

    function applyThemeFromStorage() {
        const body = document.body;
        if (!body) return;
        const saved = localStorage.getItem('mathMaster_theme') || '';
        body.classList.remove(...themeClasses);
        if (saved) {
            body.classList.add(saved);
        }
    }

    function applyCursorFromStorage() {
        const body = document.body;
        if (!body) return;
        const saved = localStorage.getItem('mathMaster_cursor') || 'cursor-classic';
        const targetClass = cursorClasses.includes(saved) ? saved : 'cursor-classic';
        body.classList.remove(...cursorClasses);
        body.classList.add(targetClass);
    }

    // Expose helpers for the home page theme modal
    window.setTheme = function setTheme(themeClass) {
        const normalizedTheme = themeClass || '';
        localStorage.setItem('mathMaster_theme', normalizedTheme);
        applyThemeFromStorage();

        // Sync selection state if buttons exist on this page
        document.querySelectorAll('.theme-btn').forEach(btn => {
            const value = btn.dataset.theme ?? '';
            btn.classList.toggle('selected', value === normalizedTheme);
        });
    };

    window.setCursorType = function setCursorType(cursorClass) {
        const targetClass = cursorClasses.includes(cursorClass) ? cursorClass : 'cursor-classic';
        localStorage.setItem('mathMaster_cursor', targetClass);
        applyCursorFromStorage();

        // Sync selection state if buttons exist on this page
        document.querySelectorAll('.cursor-btn').forEach(btn => {
            const value = btn.dataset.cursor ?? 'cursor-classic';
            btn.classList.toggle('selected', value === targetClass);
        });
    };

    window.toggleThemeModal = function toggleThemeModal() {
        const modal = document.getElementById('theme-modal');
        if (!modal) return;
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
    };

    // Apply stored theme & cursor on every page that includes course.js
    function initThemeAndCursor() {
        applyThemeFromStorage();
        applyCursorFromStorage();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeAndCursor);
    } else {
        initThemeAndCursor();
    }
})();

// Auto-load calculator on ALL pages that include course.js
(function () {
    // Check if calculator script is already loaded or being loaded
    if (document.getElementById('math-toolbar') ||
        document.querySelector('script[src*="calculator.js"]')) {
        return;
    }

    // Detect correct path based on current page location
    const isLessonPage = window.location.pathname.includes('/lessons/');
    const scriptPath = isLessonPage ? '../assets/js/calculator.js' : 'assets/js/calculator.js';

    const script = document.createElement('script');
    script.src = scriptPath;
    script.async = false; // Load synchronously to ensure initialization

    // Load immediately if DOM is ready, otherwise wait
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (!document.querySelector(`script[src="${scriptPath}"]`)) {
                document.head.appendChild(script);
            }
        });
    } else {
        document.head.appendChild(script);
    }
})();

// Auto-load whiteboard on ALL pages that include course.js
(function () {
    // Check if whiteboard script is already loaded or being loaded
    if (document.getElementById('whiteboard-overlay') ||
        document.querySelector('script[src*="whiteboard.js"]')) {
        return;
    }

    const isLessonPage = window.location.pathname.includes('/lessons/');
    const scriptPath = isLessonPage ? '../assets/js/whiteboard.js' : 'assets/js/whiteboard.js';

    const script = document.createElement('script');
    script.src = scriptPath;
    script.async = false; // Load synchronously to ensure initialization

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (!document.querySelector(`script[src="${scriptPath}"]`)) {
                document.head.appendChild(script);
            }
        });
    } else {
        document.head.appendChild(script);
    }
})();