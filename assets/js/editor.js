/* =========================================
   EDITOR.JS

   Main setup ng scrapbook editor.
   Dito nakalagay ang shared variables.
========================================= */

const canvas = document.querySelector('.birthday-canvas');

let selectedItem = null;
let selectedNote = document.querySelector('.sticky-note');
let highestZIndex = 10;

/* =========================================
   DEFAULT SELECTED ITEM
========================================= */

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


/* =========================================
   SAVE INITIAL STATE

   Ito ang unang state ng canvas.
========================================= */

// saveState();


/* =========================================
   REINITIALIZE OBJECTS

   Ginagamit pagkatapos ng:
   - Undo
   - Redo

   Para gumana ulit ang:
   - Drag
   - Resize
   - Rotate
   - Delete
   - Duplicate
========================================= */

function initializeCanvasObjects() {

    document.querySelectorAll(".canvas-object").forEach(item => {

        makeCanvasObjectEditable(item);

    });

}