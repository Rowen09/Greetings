/* =========================================
   BASIC SELECTORS
========================================= */
const styleButtons = document.querySelectorAll('.style-btn');
const panelGroups = document.querySelectorAll('.panel-group');
const canvas = document.querySelector('.birthday-canvas');


/* =========================================
   SELECTED NOTE

   Ito ang currently selected sticky note.
   Dito ilalapat ang:
   - paper color
   - font size
   - font color
   - delete
========================================= */
let selectedNote = document.querySelector('.sticky-note');


/* =========================================
   Z-INDEX MANAGER

   Kapag nag-click ng sticky note,
   aangat siya sa ibabaw ng ibang notes.
========================================= */
let highestZIndex = 10;


/* =========================================
   STYLE TAB SWITCHER
========================================= */
styleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const panelId = button.dataset.panel;

        styleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        panelGroups.forEach(group => group.classList.remove('active'));

        document.getElementById(panelId).classList.add('active');
    });
});


/* =========================================
   MAKE NOTE EDITABLE

   Ginagawa nitong:
   - selectable
   - draggable
   - resizable
   - text-limited
========================================= */
function makeNoteEditable(note) {
    let isDragging = false;
    let isResizing = false;
    let offsetX = 0;
    let offsetY = 0;

    const resizeHandle = note.querySelector('.resize-handle');
    const stickyBody = note.querySelector('.sticky-body');

    /* =========================================
   CHARACTER LIMIT

   Hindi alert.
   Pipigilan lang mag-type kapag puno na.
========================================= */
    const MAX_CHARS = 250;

    stickyBody.addEventListener('beforeinput', (e) => {
        if (
            e.inputType === 'deleteContentBackward' ||
            e.inputType === 'deleteContentForward' ||
            e.inputType === 'historyUndo' ||
            e.inputType === 'historyRedo'
        ) {
            return;
        }

        const currentText = stickyBody.innerText.trim();
        const selection = window.getSelection();
        const selectedText = selection ? selection.toString() : '';

        const newTextLength = currentText.length - selectedText.length + 1;

        if (newTextLength > MAX_CHARS) {
            e.preventDefault();
            stickyBody.classList.add('text-limit');
        } else {
            stickyBody.classList.remove('text-limit');
        }
    });

    /* SELECT NOTE / BRING TO FRONT */
    note.addEventListener('mousedown', (e) => {
        selectedNote = note;

        highestZIndex++;
        note.style.zIndex = highestZIndex;

        if (e.target.classList.contains('resize-handle')) return;

        isDragging = true;

        const rect = note.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        note.style.cursor = 'grabbing';
    });

    /* START RESIZE */
    resizeHandle.addEventListener('mousedown', (e) => {
        e.stopPropagation();

        selectedNote = note;

        highestZIndex++;
        note.style.zIndex = highestZIndex;

        isResizing = true;
    });

    /* DRAG / RESIZE MOVEMENT */
    document.addEventListener('mousemove', (e) => {
        const canvasRect = canvas.getBoundingClientRect();

        if (isDragging) {
            let x = e.clientX - canvasRect.left - offsetX;
            let y = e.clientY - canvasRect.top - offsetY;

            note.style.left = x + 'px';
            note.style.top = y + 'px';
        }

        if (isResizing) {
            const noteRect = note.getBoundingClientRect();

            let width = e.clientX - noteRect.left;
            let height = e.clientY - noteRect.top;

            width = Math.max(280, Math.min(width, 520));
            height = Math.max(220, Math.min(height, 520));

            note.style.width = width + 'px';
            note.style.height = height + 'px';
        }
    });

    /* STOP DRAG / RESIZE */
    document.addEventListener('mouseup', () => {
        isDragging = false;
        isResizing = false;
        note.style.cursor = 'grab';
    });

    /* LIMIT TEXT INSIDE STICKY BODY */
    // stickyBody.addEventListener('input', () => {
    //     if (
    //         stickyBody.scrollHeight > stickyBody.clientHeight ||
    //         stickyBody.scrollWidth > stickyBody.clientWidth
    //     ) {
    //         document.execCommand('undo');
    //         alert('Message is too long. Please make the note bigger or reduce font size.');
    //     }
    // });

}


/* =========================================
   APPLY DRAG/RESIZE TO EXISTING NOTES
========================================= */
document.querySelectorAll('.sticky-note').forEach(note => {
    makeNoteEditable(note);
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
   ADD NEW STICKY NOTE
========================================= */
const noteButton = document.querySelector('.tool.active');

noteButton.addEventListener('click', () => {
    const newNote = document.createElement('div');

    newNote.className = 'sticky-note';

    newNote.style.left = '120px';
    newNote.style.top = '120px';
    newNote.style.width = '320px';
    newNote.style.height = '220px';
    newNote.style.background = '#fff1a8';

    highestZIndex++;
    newNote.style.zIndex = highestZIndex;
  newNote.innerHTML = `
    <div class="sticky-body" contenteditable="true" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-placeholder="Write your message..."></div>
    <div class="resize-handle"></div>
`;

    canvas.appendChild(newNote);

    selectedNote = newNote;
    makeNoteEditable(newNote);
});


/* =========================================
   DELETE SELECTED NOTE
========================================= */
const deleteNoteBtn = document.getElementById('deleteNoteBtn');

deleteNoteBtn.addEventListener('click', () => {
    if (!selectedNote) return;

    selectedNote.remove();
    selectedNote = document.querySelector('.sticky-note');
});


/* =========================================
   FONT SIZE

   Font size ay ilalapat sa sticky body lang.
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
   FONT COLOR

   Text color ay ilalapat sa sticky body lang.
========================================= */
document.querySelectorAll('.font-color').forEach(button => {
    button.addEventListener('click', () => {
        if (!selectedNote) return;

        const body = selectedNote.querySelector('.sticky-body');
        body.style.color = button.dataset.color;
    });
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
   FONT FAMILY
   selected text lang ang papalitan
========================================= */
document.querySelectorAll('.font-family').forEach(button => {
    button.addEventListener('click', () => {
        applyToSelectedText('fontName', button.dataset.font);
    });
});