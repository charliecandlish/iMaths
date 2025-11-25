const Course = {
    modules: {
        number: [
            { key: 'num_place', title: "Place Value Studio", desc: "Digits & magnitude", isQuiz: false, fa: "fa-cubes-stacked", color: "amber", href: 'PlaceValueStudio.html' },
            { key: 'num_bidmas', title: "BIDMAS Boss", desc: "Order of Operations", isQuiz: false, fa: "fa-list-ol", color: "violet", href: 'BIDMASBoss.html' },
            { key: 'num_integer', title: "Integer Quest", desc: "Number Line Missions", isQuiz: false, fa: "fa-road", color: "blue", href: 'IntegerQuest.html' },
            { key: 'num_decimal', title: "Decimal Dojo", desc: "Decimal Operations", isQuiz: false, fa: "fa-calculator", color: "cyan", href: 'DecimalDojo.html' },
            { key: 'num_longops', title: "Long Operations", desc: "Long × and ÷", isQuiz: false, fa: "fa-grip-lines", color: "green", href: 'LongOps.html' },
            { key: 'num_factor', title: "Factor Forge", desc: "Primes, HCF & LCM", isQuiz: false, fa: "fa-hammer", color: "orange", href: 'FactorForge.html' },
            { key: 'num_frac_ops', title: "Fractions Ops", desc: "Add & Subtract Fractions", isQuiz: false, fa: "fa-circle-half-stroke", color: "pink", href: 'FractionsOps.html' },
            { key: 'num_percent', title: "Percent Pulse", desc: "% ↔ Decimal ↔ Fraction", isQuiz: false, fa: "fa-percent", color: "lime", href: 'PercentPulse.html' },
            { key: 'num_round', title: "Rounding Lab", desc: "Rounding Numbers", isQuiz: false, fa: "fa-bullseye", color: "indigo", href: 'RoundingLab.html' },
            { key: 'num_order', title: "Ordering Numbers", desc: "Compare & Order", isQuiz: false, fa: "fa-arrow-down-short-wide", color: "pink", href: 'OrderingNumbers.html' },
            { key: 'num_recurring', title: "Recurring Lab", desc: "Recurring → Fractions", isQuiz: false, fa: "fa-repeat", color: "amber", href: 'RecurringLab.html' },
            { key: 'num_estimate', title: "Estimation Station", desc: "Quick Estimates", isQuiz: false, fa: "fa-gauge", color: "violet", href: 'EstimationStation.html' },
            { key: 'num_error', title: "Error Bounds", desc: "Error Intervals", isQuiz: false, fa: "fa-ruler", color: "sky", href: 'ErrorBounds.html' },
            { key: 'num_power', title: "Power Play", desc: "Powers & Roots", isQuiz: false, fa: "fa-bolt", color: "red", href: 'PowerPlay.html' },
            { key: 'num_standard', title: "Standard Form Station", desc: "Astronomy Scale", isQuiz: false, fa: "fa-rocket", color: "purple", href: 'StandardFormStation.html' },
            { key: 'num_quiz', title: "Number Checkpoint", desc: "Topic Quiz", isQuiz: true, fa: "fa-flag-checkered", color: "amber", href: 'QuizNumber.html' }
        ],
        ratio: [
            { key: 'rp_basics', title: "Ratio Gateway", desc: "Simplify & Units", isQuiz: false, fa: "fa-door-open", color: "blue", href: 'ratios1.html' },
            { key: 'rp_simplify', title: "The Simplifier", desc: "1:n Form & Reduce", isQuiz: false, fa: "fa-compress", color: "pink", href: 'TheSimplifier.html' },
            { key: 'rp_fractions', title: "Fraction Connector", desc: "Ratios as Fractions", isQuiz: false, fa: "fa-chart-pie", color: "violet", href: 'FractionsFoundry.html' },
            { key: 'rp_share', title: "Sharing Station", desc: "Total Sharing", isQuiz: false, fa: "fa-share-nodes", color: "purple", href: 'TheRatioSplitter.html' },
            { key: 'rp_scale', title: "Scaling Studio", desc: "Given One Part", isQuiz: false, fa: "fa-maximize", color: "emerald", href: 'ScaleCity.html' },
            { key: 'rp_diff', title: "Difference Detective", desc: "Finding the Gap", isQuiz: false, fa: "fa-magnifying-glass", color: "orange", href: 'WordProblemLab.html' },
            { key: 'rp_recipe', title: "Recipe Room", desc: "Scaling Ingredients", isQuiz: false, fa: "fa-utensils", color: "rose", href: 'TactileRatio.html' },
            { key: 'rp_buy', title: "Bargain Hunter", desc: "Best Buys", isQuiz: false, fa: "fa-tags", color: "green", href: 'BestBuys.html' },
            { key: 'rp_unitary', title: "Unitary Method", desc: "Find value of 1", isQuiz: false, fa: "fa-1", color: "sky", href: 'UnitaryMethod.html' },
            { key: 'rp_fdp', title: "FDP Lab", desc: "Conversions", isQuiz: false, fa: "fa-repeat", color: "lime", href: 'FDP.html' },
            { key: 'rp_percent', title: "Percentage Power", desc: "Amount & Inc/Dec", isQuiz: false, fa: "fa-arrow-trend-up", color: "amber", href: 'PercentagePower.html' },
            { key: 'rp_interest', title: "Interest Vault", desc: "Simple & Compound", isQuiz: false, fa: "fa-piggy-bank", color: "yellow", href: 'InterestVault.html' },
            { key: 'rp_reverse', title: "Reverse Rewind", desc: "Original Amount", isQuiz: false, fa: "fa-clock-rotate-left", color: "fuchsia", href: 'ReverseRewind.html' },
            { key: 'rp_compound', title: "Compound Lab", desc: "Speed, Density, Pressure", isQuiz: false, fa: "fa-gauge-high", color: "cyan", href: 'CompoundMeasures.html' },
            { key: 'rp_geo', title: "Map Room", desc: "Scales & Similarity", isQuiz: false, fa: "fa-map-location-dot", color: "indigo", href: 'MapRoom.html' },
            { key: 'rp_quiz', title: "Proportion Checkpoint", desc: "Topic Quiz", isQuiz: true, fa: "fa-flag-checkered", color: "blue", href: 'QuizRatioProp.html' }
        ],
        algebra: [
            { key: 'alg_notation', title: "Notation Station", desc: "Language of Algebra", isQuiz: false, fa: "fa-pen-nib", color: "red", href: 'AlgebraNotation.html' },
            { key: 'alg_sub', title: "Substitution Lab", desc: "Replacing Letters", isQuiz: false, fa: "fa-right-left", color: "yellow", href: 'Substitution.html' },
            { key: 'alg_like', title: "Like Terms", desc: "Collecting & Simplifying", isQuiz: false, fa: "fa-object-group", color: "orange", href: 'LikeTerms.html' },
            { key: 'alg_indices', title: "Index Law Court", desc: "Powers of Algebra", isQuiz: false, fa: "fa-gavel", color: "purple", href: 'IndexLawCourt.html' },
            { key: 'alg_expand', title: "Bracket Buster", desc: "Single & Double", isQuiz: false, fa: "fa-expand", color: "blue", href: 'Expansion.html' },
            { key: 'alg_factor', title: "Factor Factory", desc: "HCF & Quadratics", isQuiz: false, fa: "fa-minimize", color: "pink", href: 'FactorFactory.html' },
            { key: 'alg_solve', title: "Equation Solver", desc: "Linear & Both Sides", isQuiz: false, fa: "fa-scale-balanced", color: "green", href: 'SolvingEq.html' },
            { key: 'alg_form', title: "Formula Forge", desc: "Forming Equations", isQuiz: false, fa: "fa-puzzle-piece", color: "amber", href: 'FormulaForge.html' },
            { key: 'alg_ineq', title: "Inequality Island", desc: "Number Lines & Solving", isQuiz: false, fa: "fa-less-than-equal", color: "teal", href: 'InequalityIsland.html' },
            { key: 'alg_subject', title: "Subject Shifter", desc: "Rearranging Formulae", isQuiz: false, fa: "fa-rotate", color: "cyan", href: 'SubjectShifter.html' },
            { key: 'alg_coords', title: "Coordinate Grid", desc: "Plotting Points", isQuiz: false, fa: "fa-crosshairs", color: "indigo", href: 'CoordinateGrid.html' },
            { key: 'alg_line', title: "Linear Lines", desc: "y = mx + c", isQuiz: false, fa: "fa-chart-line", color: "rose", href: 'LinearLines.html' },
            { key: 'alg_curves', title: "Curvy Graphs", desc: "Quadratics & Real-life", isQuiz: false, fa: "fa-bezier-curve", color: "violet", href: 'CurvyGraphs.html' },
            { key: 'alg_seq', title: "Sequence Studio", desc: "Nth Term & Patterns", isQuiz: false, fa: "fa-list-ol", color: "emerald", href: 'SequenceStudio.html' },
            { key: 'alg_simul', title: "Simultaneous HQ", desc: "Elimination Method", isQuiz: false, fa: "fa-timeline", color: "slate", href: 'SimultaneousHQ.html' },
            { key: 'alg_quiz', title: "Algebra Checkpoint", desc: "Topic Quiz", isQuiz: true, fa: "fa-flag-checkered", color: "red", href: 'QuizAlgebra.html' }
        ],
        geometry: [
            { key: 'geo_angles', title: "Angle Academy", desc: "Lines, Triangles, Polygons", isQuiz: false, fa: "fa-ruler-combined", color: "indigo", href: 'AngleAcademy.html' },
            { key: 'geo_area', title: "Area Arena", desc: "Perimeter & Area", isQuiz: false, fa: "fa-vector-square", color: "emerald", href: 'AreaArena.html' },
            { key: 'geo_volume', title: "Volume Vault", desc: "3D Forms & Nets", isQuiz: false, fa: "fa-cube", color: "cyan", href: 'VolumeVault.html' },
            { key: 'geo_trans', title: "Transformation Station", desc: "Reflect, Rotate, Resize", isQuiz: false, fa: "fa-rotate", color: "violet", href: 'TransformationStation.html' },
            { key: 'geo_pythag', title: "Pythagoras Peak", desc: "Right-Angled Triangles", isQuiz: false, fa: "fa-mountain", color: "rose", href: 'PythagorasPeak.html' },
            { key: 'geo_vector', title: "Vector Valley", desc: "Movement & Magnitude", isQuiz: false, fa: "fa-arrow-right-long", color: "sky", href: 'VectorValley.html' },
            { key: 'geo_const', title: "Construction Site", desc: "Loci & Bisectors", isQuiz: false, fa: "fa-compass-drafting", color: "amber", href: 'ConstructionSite.html' },
            { key: 'geo_quiz', title: "Geometry Checkpoint", desc: "Topic Quiz", isQuiz: true, fa: "fa-flag-checkered", color: "indigo", href: 'QuizGeometry.html' }
        ],
        stats: [
            { key: 'stats_types', title: "Data Types", desc: "Qualitative vs Quantitative", isQuiz: false, fa: "fa-filter", color: "teal", href: 'DataTypes.html' },
            { key: 'stats_collect', title: "Collection Lab", desc: "Sampling & Tallying", isQuiz: false, fa: "fa-clipboard-list", color: "cyan", href: 'CollectionLab.html' },
            { key: 'stats_mmm', title: "The MMM Machine", desc: "Mean, Median, Mode", isQuiz: false, fa: "fa-divide", color: "emerald", href: 'TheMMMMachine.html' },
            { key: 'stats_tables', title: "Table Tactics", desc: "Averages from Frequency", isQuiz: false, fa: "fa-table", color: "indigo", href: 'TableTactics.html' },
            { key: 'stats_charts', title: "Chart Champion", desc: "Bar, Line & Pictograms", isQuiz: false, fa: "fa-chart-column", color: "blue", href: 'ChartChampion.html' },
            { key: 'stats_stem', title: "Stem & Leaf", desc: "Ordering Data", isQuiz: false, fa: "fa-leaf", color: "green", href: 'StemAndLeaf.html' },
            { key: 'stats_pie', title: "Pie Chart Bakery", desc: "Angles & Slices", isQuiz: false, fa: "fa-chart-pie", color: "rose", href: 'PieChartBakery.html' },
            { key: 'stats_scatter', title: "Scatter Scout", desc: "Correlation & Best Fit", isQuiz: false, fa: "fa-project-diagram", color: "violet", href: 'ScatterScout.html' },
            { key: 'stats_prob_basic', title: "Probability Scale", desc: "Chance & Fractions", isQuiz: false, fa: "fa-dice", color: "orange", href: 'ProbabilityScale.html' },
            { key: 'stats_prob_exp', title: "Experimental Lab", desc: "Relative Frequency", isQuiz: false, fa: "fa-flask", color: "amber", href: 'ExperimentalLab.html' },
            { key: 'stats_venn', title: "Venn Vault", desc: "Sets & Logic", isQuiz: false, fa: "fa-layer-group", color: "purple", href: 'VennVault.html' },
            { key: 'stats_trees', title: "Tree Climber", desc: "Frequency & Probability", isQuiz: false, fa: "fa-sitemap", color: "pink", href: 'TreeClimber.html' },
            { key: 'stats_quiz', title: "Stats Checkpoint", desc: "Topic Quiz", isQuiz: true, fa: "fa-flag-checkered", color: "teal", href: 'QuizStats.html' }
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