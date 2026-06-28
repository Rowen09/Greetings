/* =========================================
   HISTORY.JS

   Undo / Redo Engine
========================================= */

let historyStack = [];

let redoStack = [];

const MAX_HISTORY = 50;


/* =========================================
   SAVE STATE
========================================= */

function saveState() {

    redoStack = [];

    historyStack.push(

        canvas.innerHTML

    );

    if (historyStack.length > MAX_HISTORY) {

        historyStack.shift();

    }

}


/* =========================================
   UNDO
========================================= */

function undo() {

    if (historyStack.length <= 1) return;

    redoStack.push(

        historyStack.pop()

    );

    canvas.innerHTML = historyStack[
        historyStack.length - 1
    ];

    initializeCanvasObjects();

}


/* =========================================
   REDO
========================================= */

function redo() {

    if (redoStack.length === 0) return;

    const state = redoStack.pop();

    historyStack.push(state);

    canvas.innerHTML = state;

    initializeCanvasObjects();

}