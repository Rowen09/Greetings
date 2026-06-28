/* =========================================
   DUPLICATE.JS
========================================= */

const duplicateBtn = document.getElementById('duplicateBtn');

duplicateBtn.addEventListener('click', () => {
    if (!selectedItem) return;

    const clone = selectedItem.cloneNode(true);

    clone.style.left = (parseInt(selectedItem.style.left || 0) + 25) + 'px';
    clone.style.top = (parseInt(selectedItem.style.top || 0) + 25) + 'px';

    highestZIndex++;
    clone.style.zIndex = highestZIndex;

    clone.classList.remove('selected');

    canvas.appendChild(clone);

    makeCanvasObjectEditable(clone);
    selectObject(clone);
});