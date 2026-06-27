/* =========================================
   NOTE.JS

   Responsible for:
   - Add sticky note
   - Paper color
   - Font size
   - Font color
   - Font family
========================================= */


/* =========================================
   ADD NEW STICKY NOTE
========================================= */
const noteButton = document.querySelector('.tool.active');

noteButton.addEventListener('click', () => {
    const newNote = document.createElement('div');

    newNote.className = 'canvas-object sticky-note';

    newNote.style.left = '120px';
    newNote.style.top = '120px';
    newNote.style.width = '320px';
    newNote.style.height = '220px';
    newNote.style.background = '#fff1a8';

    newNote.innerHTML = `
        <div class="sticky-body" contenteditable="true" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-placeholder="Write your message..."></div>
        <div class="resize-handle"></div>
    `;

    canvas.appendChild(newNote);

    selectObject(newNote);
    makeCanvasObjectEditable(newNote);
});


/* =========================================
   PAPER STYLE COLORS
========================================= */
document.querySelector('.paper-option.pink').addEventListener('click', () => {
    if (selectedNote) selectedNote.style.background = '#ffd9df';
});

document.querySelector('.paper-option.yellow').addEventListener('click', () => {
    if (selectedNote) selectedNote.style.background = '#fff1a8';
});

document.querySelector('.paper-option.blue').addEventListener('click', () => {
    if (selectedNote) selectedNote.style.background = '#cfeaff';
});

document.querySelector('.paper-option.white').addEventListener('click', () => {
    if (selectedNote) selectedNote.style.background = '#ffffff';
});


/* =========================================
   FONT SIZE
========================================= */
document.getElementById('fontSmallBtn').addEventListener('click', () => {
    if (!selectedNote) return;

    const body = selectedNote.querySelector('.sticky-body');

    let currentSize = parseInt(window.getComputedStyle(body).fontSize);
    currentSize = Math.max(18, currentSize - 2);

    body.style.fontSize = currentSize + 'px';
});

document.getElementById('fontBigBtn').addEventListener('click', () => {
    if (!selectedNote) return;

    const body = selectedNote.querySelector('.sticky-body');

    let currentSize = parseInt(window.getComputedStyle(body).fontSize);
    currentSize = Math.min(50, currentSize + 2);

    body.style.fontSize = currentSize + 'px';
});


/* =========================================
   APPLY STYLE TO SELECTED TEXT
========================================= */
function applyToSelectedText(command, value = null) {
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0 || selection.toString() === '') {
        alert('Highlight muna ng text sa sticky note.');
        return;
    }

    document.execCommand(command, false, value);
}


/* =========================================
   FONT COLOR
   selected text lang ang papalitan
========================================= */
document.querySelectorAll('.font-color').forEach(button => {
    button.addEventListener('click', () => {
        applyToSelectedText('foreColor', button.dataset.color);
    });
});


/* =========================================
   FONT FAMILY
   selected text lang ang papalitan
========================================= */
document.querySelectorAll('.font-family').forEach(button => {
    button.addEventListener('click', () => {
        applyToSelectedText('fontName', button.dataset.font);
    });
});