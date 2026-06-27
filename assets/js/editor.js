/* =========================================
   EDITOR.JS

   Main setup ng scrapbook editor.
   Dito nakalagay ang shared variables.
========================================= */

const canvas = document.querySelector('.birthday-canvas');

let selectedItem = null;
let selectedNote = document.querySelector('.sticky-note');
let highestZIndex = 10;

if (selectedNote) {
    selectedItem = selectedNote;
}

/* =========================================
   INITIALIZE EXISTING OBJECTS

   Lahat ng existing canvas object
   ay gagawing draggable/resizable.
========================================= */

document.querySelectorAll('.canvas-object').forEach(item => {
    makeCanvasObjectEditable(item);
});