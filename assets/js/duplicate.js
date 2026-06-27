/* =========================================
   DUPLICATE.JS

   Responsible for:
   - Duplicate selected canvas object
   Works for:
   - sticky note
   - photo
   - future stickers
========================================= */

const duplicateBtn = document.getElementById('duplicateBtn');

duplicateBtn.addEventListener('click', () => {
    if (!selectedItem) return;

    const clone = selectedItem.cloneNode(true);

    clone.style.left = (parseInt(selectedItem.style.left) + 25) + 'px';
    clone.style.top = (parseInt(selectedItem.style.top) + 25) + 'px';

    highestZIndex++;
    clone.style.zIndex = highestZIndex;

    canvas.appendChild(clone);

    selectCanvasObject(clone);
    makeCanvasObjectEditable(clone);
});