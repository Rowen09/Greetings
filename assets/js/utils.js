/* =========================================
   UTILS.JS

   Canvas Engine
   Works for:
   - Mouse
   - Touch / Mobile
========================================= */


/* =========================================
   GET POINTER POSITION

   Ginagamit para gumana pareho sa:
   - mouse
   - touch
========================================= */
function getPointerPosition(e) {
    if (e.touches && e.touches.length > 0) {
        return {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    }

    return {
        x: e.clientX,
        y: e.clientY
    };
}


/* =========================================
   MAKE CANVAS OBJECT EDITABLE

   Features:
   - select
   - drag
   - resize
   - mouse support
   - touch support
========================================= */
function makeCanvasObjectEditable(item) {
    let isDragging = false;
    let isResizing = false;
    let offsetX = 0;
    let offsetY = 0;

    const resizeHandle = item.querySelector('.resize-handle');

    function startDrag(e) {
        if (e.target.classList.contains('resize-handle')) return;

        e.preventDefault();

        selectObject(item);

        isDragging = true;

        const pointer = getPointerPosition(e);
        const rect = item.getBoundingClientRect();

        offsetX = pointer.x - rect.left;
        offsetY = pointer.y - rect.top;

        item.style.cursor = 'grabbing';
    }

    function startResize(e) {
        e.preventDefault();
        e.stopPropagation();

        selectObject(item);

        isResizing = true;
    }

    function moveItem(e) {
        if (!isDragging && !isResizing) return;

        e.preventDefault();

        const pointer = getPointerPosition(e);
        const canvasRect = canvas.getBoundingClientRect();

        if (isDragging) {
            let x = pointer.x - canvasRect.left - offsetX;
            let y = pointer.y - canvasRect.top - offsetY;

            item.style.left = x + 'px';
            item.style.top = y + 'px';
        }

        if (isResizing) {
            const itemRect = item.getBoundingClientRect();

            let width = pointer.x - itemRect.left;
            let height = pointer.y - itemRect.top;

            width = Math.max(120, Math.min(width, 520));
            height = Math.max(120, Math.min(height, 520));

            item.style.width = width + 'px';
            item.style.height = height + 'px';
        }
    }

    function stopAction() {
        isDragging = false;
        isResizing = false;
        item.style.cursor = 'grab';
    }

    item.addEventListener('mousedown', startDrag);
    item.addEventListener('touchstart', startDrag, { passive: false });

    if (resizeHandle) {
        resizeHandle.addEventListener('mousedown', startResize);
        resizeHandle.addEventListener('touchstart', startResize, { passive: false });
    }

    document.addEventListener('mousemove', moveItem);
    document.addEventListener('touchmove', moveItem, { passive: false });

    document.addEventListener('mouseup', stopAction);
    document.addEventListener('touchend', stopAction);
}