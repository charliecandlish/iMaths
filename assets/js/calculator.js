(() => {
    // Prevent duplicate loading
    if (document.getElementById('math-calculator-root')) return;

    // Inject Styles
    const style = document.createElement('style');
    style.textContent = `
        #math-calculator-root {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 100001;
            font-family: 'Inter', sans-serif;
            pointer-events: none; /* Let clicks pass through container area */
        }

        #calc-toggle-btn {
            pointer-events: auto;
            width: 60px;
            height: 60px;
            border-radius: 20px;
            background: linear-gradient(135deg, #4f46e5, #3b82f6);
            color: white;
            border: 4px solid white;
            box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.4), 0 8px 10px -6px rgba(79, 70, 229, 0.1);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        #calc-toggle-btn:hover {
            transform: scale(1.1) rotate(-5deg);
            box-shadow: 0 20px 30px -5px rgba(79, 70, 229, 0.5);
        }

        #calc-toggle-btn:active {
            transform: scale(0.95);
        }

        #calc-main {
            pointer-events: auto;
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 320px;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            padding: 20px;
            transform-origin: bottom right;
            transform: scale(0.9) translateY(20px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        #calc-main.active {
            transform: scale(1) translateY(0);
            opacity: 1;
            visibility: visible;
        }

        .calc-display {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 16px;
            text-align: right;
            margin-bottom: 4px;
        }

        .calc-prev {
            color: #94a3b8;
            font-size: 14px;
            min-height: 20px;
            margin-bottom: 4px;
        }

        .calc-current {
            color: white;
            font-size: 32px;
            font-weight: 700;
            overflow-x: auto;
            white-space: nowrap;
            scrollbar-width: none;
        }

        .calc-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .calc-btn {
            aspect-ratio: 1;
            border-radius: 12px;
            border: none;
            background: rgba(255, 255, 255, 0.05);
            color: white;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.1s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .calc-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
        }

        .calc-btn:active {
            transform: translateY(0);
        }

        .calc-btn.op {
            background: rgba(99, 102, 241, 0.2);
            color: #818cf8;
        }

        .calc-btn.op:hover {
            background: rgba(99, 102, 241, 0.3);
        }

        .calc-btn.eq {
            background: #4f46e5;
            grid-column: span 2;
            aspect-ratio: auto;
        }

        .calc-btn.eq:hover {
            background: #4338ca;
        }

        .calc-btn.clear {
            color: #ef4444;
            background: rgba(239, 68, 68, 0.1);
        }
        
        .calc-btn.clear:hover {
            background: rgba(239, 68, 68, 0.2);
        }

        /* Draggable Handle */
        .calc-handle {
            position: absolute;
            top: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 6px;
            background: rgba(255,255,255,0.2);
            border-radius: 10px;
            cursor: grab;
        }
        
        .calc-handle:active {
            cursor: grabbing;
        }
    `;
    document.head.appendChild(style);

    // Create Elements
    const root = document.createElement('div');
    root.id = 'math-calculator-root';

    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'calc-toggle-btn';
    toggleBtn.innerHTML = '<i class="fa-solid fa-calculator"></i>';
    toggleBtn.title = "Open Calculator";

    const calcMain = document.createElement('div');
    calcMain.id = 'calc-main';

    // Calculator HTML
    calcMain.innerHTML = `
        <div class="calc-handle"></div>
        <div class="calc-display">
            <div class="calc-prev" id="calc-prev"></div>
            <div class="calc-current" id="calc-current">0</div>
        </div>
        <div class="calc-grid">
            <button class="calc-btn clear" data-action="clear">AC</button>
            <button class="calc-btn clear" data-action="delete">⌫</button>
            <button class="calc-btn op" data-action="op" data-val="%">%</button>
            <button class="calc-btn op" data-action="op" data-val="/">÷</button>
            
            <button class="calc-btn" data-action="num" data-val="7">7</button>
            <button class="calc-btn" data-action="num" data-val="8">8</button>
            <button class="calc-btn" data-action="num" data-val="9">9</button>
            <button class="calc-btn op" data-action="op" data-val="*">×</button>
            
            <button class="calc-btn" data-action="num" data-val="4">4</button>
            <button class="calc-btn" data-action="num" data-val="5">5</button>
            <button class="calc-btn" data-action="num" data-val="6">6</button>
            <button class="calc-btn op" data-action="op" data-val="-">-</button>
            
            <button class="calc-btn" data-action="num" data-val="1">1</button>
            <button class="calc-btn" data-action="num" data-val="2">2</button>
            <button class="calc-btn" data-action="num" data-val="3">3</button>
            <button class="calc-btn op" data-action="op" data-val="+">+</button>
            
            <button class="calc-btn" data-action="num" data-val="0">0</button>
            <button class="calc-btn" data-action="num" data-val=".">.</button>
            <button class="calc-btn eq" data-action="eq">=</button>
        </div>
    `;

    root.appendChild(calcMain);
    root.appendChild(toggleBtn);
    document.body.appendChild(root);

    // Logic
    let currentOperand = '0';
    let previousOperand = '';
    let operation = undefined;

    const currentEl = document.getElementById('calc-current');
    const prevEl = document.getElementById('calc-prev');

    function updateDisplay() {
        currentEl.innerText = currentOperand;
        if (operation != null) {
            prevEl.innerText = `${previousOperand} ${operation}`;
        } else {
            prevEl.innerText = '';
        }
    }

    function appendNumber(number) {
        if (number === '.' && currentOperand.includes('.')) return;
        if (currentOperand === '0' && number !== '.') {
            currentOperand = number.toString();
        } else {
            currentOperand = currentOperand.toString() + number.toString();
        }
    }

    function chooseOperation(op) {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    function compute() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (operation) {
            case '+': computation = prev + current; break;
            case '-': computation = prev - current; break;
            case '*': computation = prev * current; break;
            case '/': computation = prev / current; break;
            case '%': computation = prev % current; break;
            default: return;
        }

        currentOperand = computation;
        operation = undefined;
        previousOperand = '';
    }

    function deleteNumber() {
        currentOperand = currentOperand.toString().slice(0, -1);
        if (currentOperand === '') currentOperand = '0';
    }

    function clear() {
        currentOperand = '0';
        previousOperand = '';
        operation = undefined;
    }

    // Event Listeners
    toggleBtn.addEventListener('click', () => {
        calcMain.classList.toggle('active');
        const icon = toggleBtn.querySelector('i');
        if (calcMain.classList.contains('active')) {
            icon.classList.remove('fa-calculator');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-calculator');
        }
    });

    calcMain.addEventListener('click', (e) => {
        const btn = e.target.closest('.calc-btn');
        if (!btn) return;

        const action = btn.dataset.action;
        const val = btn.dataset.val;

        if (action === 'num') {
            appendNumber(val);
            updateDisplay();
        } else if (action === 'op') {
            chooseOperation(val);
            updateDisplay();
        } else if (action === 'eq') {
            compute();
            updateDisplay();
        } else if (action === 'clear') {
            clear();
            updateDisplay();
        } else if (action === 'delete') {
            deleteNumber();
            updateDisplay();
        }
    });

    // Make Draggable (Basic implementation)
    // Note: Since it's fixed position bottom-right, dragging might need to adjust offsets.
    // For simplicity in this version, we'll keep it fixed but allow toggle.
    // If user wants true drag, we can add it, but 'Calculator button that can be activated from anywhere' usually implies a fixed toggle.

})();
