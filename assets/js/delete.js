/* =========================================
   DELETE.JS
========================================= */

const deleteBtn = document.getElementById('deleteNoteBtn');

deleteBtn.addEventListener('click', () => {
    if (!selectedItem) return;

    selectedItem.remove();

    selectedItem = null;
    selectedNote = document.querySelector('.sticky-note');
});