// Simple, robust whiteboard implementation
(function () {
    'use strict';

    let isWhiteboardOpen = false;
    let isDrawing = false;
    let canvas = null;
    let ctx = null;
    let lastX = 0;
    let lastY = 0;

    // Create the whiteboard overlay
    function createWhiteboard() {
        // Remove existing if any
        const existing = document.getElementById('whiteboard-overlay');
        if (existing) existing.remove();

        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'whiteboard-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 99999;
            background: rgba(0, 0, 0, 0.05);
            display: none;
        `;

        // Create canvas
        canvas = document.createElement('canvas');
        canvas.id = 'whiteboard-canvas';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            height: ${window.innerHeight}px;
            cursor: crosshair;
            touch-action: none;
        `;

        // Create controls
        const controls = document.createElement('div');
        controls.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 100000;
            display: flex;
            gap: 10px;
        `;

        const clearBtn = document.createElement('button');
        clearBtn.innerHTML = '<i class="fa-solid fa-eraser"></i> Clear';
        clearBtn.style.cssText = `
            padding: 12px 20px;
            background: white;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        `;
        clearBtn.onclick = clearCanvas;

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i> Close';
        closeBtn.style.cssText = `
            padding: 12px 20px;
            background: white;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        `;
        closeBtn.onclick = closeWhiteboard;

        controls.appendChild(clearBtn);
        controls.appendChild(closeBtn);

        overlay.appendChild(canvas);
        overlay.appendChild(controls);
        document.body.appendChild(overlay);

        // Setup canvas context
        ctx = canvas.getContext('2d');
        setupDrawingSettings();

        // Add event listeners
        setupEventListeners();
    }

    function setupDrawingSettings() {
        if (!ctx) return;

        // Detect dark theme
        const isDark = document.body.classList.contains('bg-ocean') ||
            document.body.classList.contains('bg-boxing') ||
            document.body.classList.contains('bg-car') ||
            document.body.classList.contains('bg-forest') ||
            document.body.classList.contains('bg-football');

        const color = isDark ? '#ffffff' : '#000000';

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 5; // Increased for better quality
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }

    function setupEventListeners() {
        // Mouse events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);

        // Touch events
        canvas.addEventListener('touchstart', startDrawing, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);

        // Resize
        window.addEventListener('resize', handleResize);

        // Escape to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isWhiteboardOpen) {
                closeWhiteboard();
            }
        });
    }

    function getCoordinates(e) {
        // For touch events, use the touch point
        if (e.touches && e.touches.length > 0) {
            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            // Use page coordinates and subtract canvas position for accuracy
            return {
                x: touch.pageX - rect.left - window.pageXOffset,
                y: touch.pageY - rect.top - window.pageYOffset
            };
        }

        // For mouse events, try offsetX/offsetY first (most accurate)
        if (e.offsetX !== undefined && e.offsetY !== undefined) {
            return {
                x: e.offsetX,
                y: e.offsetY
            };
        }

        // Fallback to clientX/clientY with getBoundingClientRect
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    function startDrawing(e) {
        if (e.type === 'touchstart') e.preventDefault();

        isDrawing = true;
        const coords = getCoordinates(e);
        lastX = coords.x;
        lastY = coords.y;

        // Draw a dot at start
        ctx.beginPath();
        ctx.arc(lastX, lastY, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fill();
    }

    function draw(e) {
        if (!isDrawing) return;
        if (e.type === 'touchmove') e.preventDefault();

        const coords = getCoordinates(e);
        const currentX = coords.x;
        const currentY = coords.y;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        lastX = currentX;
        lastY = currentY;
    }

    function stopDrawing() {
        isDrawing = false;
    }

    function clearCanvas() {
        if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    function handleResize() {
        if (!canvas) return;
        // Save current drawing
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Resize canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';

        // Restore settings and drawing
        setupDrawingSettings();
        ctx.putImageData(imageData, 0, 0);
    }

    // Create Toggle Button
    function createToggleButton() {
        if (document.getElementById('whiteboard-toggle-btn')) return;

        const btn = document.createElement('button');
        btn.id = 'whiteboard-toggle-btn';
        btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        btn.title = "Open Whiteboard";

        btn.style.cssText = `
            position: fixed;
            bottom: 90px; /* Above calculator */
            right: 20px;
            width: 60px;
            height: 60px;
            border-radius: 20px;
            background: white;
            color: #475569;
            border: 4px solid #e2e8f0;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            z-index: 100000;
        `;

        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1) rotate(5deg)';
            btn.style.borderColor = '#cbd5e1';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            btn.style.borderColor = '#e2e8f0';
        });

        btn.addEventListener('click', () => {
            if (isWhiteboardOpen) {
                closeWhiteboard();
            } else {
                openWhiteboard();
            }
        });

        document.body.appendChild(btn);
    }

    function openWhiteboard() {
        if (!canvas) createWhiteboard();

        const overlay = document.getElementById('whiteboard-overlay');
        if (overlay) {
            overlay.style.display = 'block';
            isWhiteboardOpen = true;
            document.body.style.overflow = 'hidden';
            setupDrawingSettings(); // Refresh color based on current theme
            clearCanvas(); // Start fresh

            // Update button state
            const btn = document.getElementById('whiteboard-toggle-btn');
            if (btn) {
                btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
                btn.style.background = '#ef4444';
                btn.style.color = 'white';
                btn.style.borderColor = '#fca5a5';
            }
        }
    }

    function closeWhiteboard() {
        const overlay = document.getElementById('whiteboard-overlay');
        if (overlay) {
            overlay.style.display = 'none';
            isWhiteboardOpen = false;
            document.body.style.overflow = '';

            // Update button state
            const btn = document.getElementById('whiteboard-toggle-btn');
            if (btn) {
                btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
                btn.style.background = 'white';
                btn.style.color = '#475569';
                btn.style.borderColor = '#e2e8f0';
            }
        }
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            createWhiteboard();
            createToggleButton();
        });
    } else {
        createWhiteboard();
        createToggleButton();
    }

    // Global access
    window.openWhiteboard = openWhiteboard;
    window.closeWhiteboard = closeWhiteboard;
})();
