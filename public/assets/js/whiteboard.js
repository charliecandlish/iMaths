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
            width: 100%;
            height: 100%;
            cursor: crosshair;
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
        ctx.lineWidth = 3;
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
        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
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

    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }

    function handleTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }

    function startDrawing(e) {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        lastX = e.clientX - rect.left;
        lastY = e.clientY - rect.top;

        // Draw a dot at start
        ctx.beginPath();
        ctx.arc(lastX, lastY, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fill();
    }

    function draw(e) {
        if (!isDrawing) return;

        const rect = canvas.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;

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

        // Restore settings and drawing
        setupDrawingSettings();
        ctx.putImageData(imageData, 0, 0);
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
        }
    }

    function closeWhiteboard() {
        const overlay = document.getElementById('whiteboard-overlay');
        if (overlay) {
            overlay.style.display = 'none';
            isWhiteboardOpen = false;
            document.body.style.overflow = '';
        }
    }

    // Double-click/tap to open
    let lastTapTime = 0;
    function handleDoubleTap(e) {
        const currentTime = Date.now();
        const tapLength = currentTime - lastTapTime;

        // Ignore if clicking on interactive elements
        if (e.target.closest('button, input, a, select, textarea, canvas')) {
            return;
        }

        if (tapLength < 300 && tapLength > 0) {
            e.preventDefault();
            openWhiteboard();
            lastTapTime = 0;
        } else {
            lastTapTime = currentTime;
        }
    }

    // Initialize
    document.addEventListener('click', handleDoubleTap);
    document.addEventListener('touchend', handleDoubleTap);

    // Create whiteboard on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createWhiteboard);
    } else {
        createWhiteboard();
    }

    // Global access
    window.openWhiteboard = openWhiteboard;
    window.closeWhiteboard = closeWhiteboard;
})();
