/* =========================================
   TRANSFORM ENGINE

   Supports:
   - Rotate
   - Scale / Zoom
   - Flip
   - Animate
========================================= */

function updateTransform(item) {
    const rotation = item.dataset.rotation || 0;
    const scale = item.dataset.scale || 1;
    const flipX = item.dataset.flipX || 1;
    const flipY = item.dataset.flipY || 1;

    item.style.transform = `
        rotate(${rotation}deg)
        scale(${scale})
        scaleX(${flipX})
        scaleY(${flipY})
    `;
}

/* ROTATE */
document.getElementById('rotateLeftBtn').addEventListener('click', () => {
    if (!selectedItem) return;

    selectedItem.dataset.rotation = parseInt(selectedItem.dataset.rotation || 0) - 5;
    updateTransform(selectedItem);
});

document.getElementById('rotateRightBtn').addEventListener('click', () => {
    if (!selectedItem) return;

    selectedItem.dataset.rotation = parseInt(selectedItem.dataset.rotation || 0) + 5;
    updateTransform(selectedItem);
});

/* ZOOM / SCALE */
document.getElementById('zoomInBtn').addEventListener('click', () => {
    if (!selectedItem) return;

    selectedItem.dataset.scale = Math.min(parseFloat(selectedItem.dataset.scale || 1) + 0.1, 2);
    updateTransform(selectedItem);
});

document.getElementById('zoomOutBtn').addEventListener('click', () => {
    if (!selectedItem) return;

    selectedItem.dataset.scale = Math.max(parseFloat(selectedItem.dataset.scale || 1) - 0.1, 0.5);
    updateTransform(selectedItem);
});

/* FLIP */
document.getElementById('flipXBtn').addEventListener('click', () => {
    if (!selectedItem) return;

    selectedItem.dataset.flipX = (selectedItem.dataset.flipX || 1) == 1 ? -1 : 1;
    updateTransform(selectedItem);
});

document.getElementById('flipYBtn').addEventListener('click', () => {
    if (!selectedItem) return;

    selectedItem.dataset.flipY = (selectedItem.dataset.flipY || 1) == 1 ? -1 : 1;
    updateTransform(selectedItem);
});

/* ANIMATE */
document.getElementById('animateBtn').addEventListener('click', () => {
    if (!selectedItem) return;

    selectedItem.classList.toggle('float-animate');
});