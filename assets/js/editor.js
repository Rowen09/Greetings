/* =========================================
   BASIC SELECTORS
========================================= */
const styleButtons = document.querySelectorAll('.style-btn');
const panelGroups = document.querySelectorAll('.panel-group');
const canvas = document.querySelector('.birthday-canvas');

/* =========================================
   SELECTED NOTE Ito ang currently selected note.
   Dito ilalapat ang:- paper color - font size - font style - delete
========================================= */
let selectedNote = document.querySelector('.sticky-note');

/* =========================================
   Z-INDEX MANAGER
   Para kapag nag-click ng note, automatic siyang aangat sa ibabaw ng ibang notes.
========================================= */
let highestZIndex = 10;


/* =========================================
   STYLE TAB SWITCHER

   Paper Style
   Tape Style
   Floating Style
   Background Style
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
   - draggable
   - resizable
   - selectable
========================================= */
function makeNoteEditable(note) {
    let isDragging = false;
    let isResizing = false;
    let offsetX = 0;
    let offsetY = 0;

    const resizeHandle = note.querySelector('.resize-handle');

    /* =========================================
       NOTE SELECTED
       Kapag click ang sticky note:
      - magiging selected note - aakyat sa ibabaw  - pwede nang sulatan
        ========================================= */
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

/* =========================================
   LIMIT TEXT INSIDE NOTE

   Kapag hindi na kasya ang text,
   hindi na papayagan mag-type pa.
========================================= */
note.addEventListener('input', () => {
    if (note.scrollHeight > note.clientHeight || note.scrollWidth > note.clientWidth) {
        document.execCommand('undo');
        alert('Message is too long. Please make the note bigger or reduce font size.');
    }
});


}


/* =========================================
   APPLY DRAG/RESIZE TO EXISTING NOTES
========================================= */
document.querySelectorAll('.sticky-note').forEach(note => {
    makeNoteEditable(note);
});


/* =========================================
   PAPER STYLE COLORS

   Nagpapalit ng kulay ng selected note
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

   Kapag pinindot ang Note button:
   - gagawa ng bagong note
   - ilalagay sa canvas
   - gagawing draggable/resizable
========================================= */
const noteButton = document.querySelector('.tool.active');

noteButton.addEventListener('click', () => {
    const newNote = document.createElement('div');

    newNote.className = 'sticky-note';
    newNote.contentEditable = true;

    newNote.style.left = '120px';
    newNote.style.top = '120px';
    newNote.style.width = '320px';
    newNote.style.height = '220px';
    newNote.style.background = '#fff1a8';

    /* =========================================
    NEW NOTE ALWAYS STARTS ON TOP
    ========================================= */
    highestZIndex++;
    newNote.style.zIndex = highestZIndex;

    newNote.innerHTML = `
        <h2>New Note</h2>
        <p>Write something...</p>
        <div class="resize-handle"></div>
    `;

    canvas.appendChild(newNote);

    selectedNote = newNote;
    makeNoteEditable(newNote);
});


/* =========================================
   TODO NEXT FEATURES

   - delete selected note
   - duplicate selected note
   - add stickers
   - upload photo
   - save design to database
========================================= */


/* =========================================
   DELETE SELECTED NOTE
   Kapag may selected note, buburahin ito sa canvas.
========================================= */
const deleteNoteBtn = document.getElementById('deleteNoteBtn');

deleteNoteBtn.addEventListener('click', () => {
    if (!selectedNote) return;

    selectedNote.remove();
    selectedNote = document.querySelector('.sticky-note');
});


/* =========================================
   FONT SIZE

   Pinapalaki / pinapaliit ang font
   ng selected sticky note.
========================================= */
document.getElementById('fontSmallBtn').addEventListener('click', () => {
    if (!selectedNote) return;

    let currentSize = parseInt(window.getComputedStyle(selectedNote).fontSize);
    currentSize = Math.max(18, currentSize - 2);

    selectedNote.style.fontSize = currentSize + 'px';
});

document.getElementById('fontBigBtn').addEventListener('click', () => {
    if (!selectedNote) return;

    let currentSize = parseInt(window.getComputedStyle(selectedNote).fontSize);
    currentSize = Math.min(50, currentSize + 2);

    selectedNote.style.fontSize = currentSize + 'px';
});


/* =========================================
   FONT COLOR

   Pinapalitan ang text color
   ng selected sticky note.
========================================= */
document.querySelectorAll('.font-color').forEach(button => {
    button.addEventListener('click', () => {
        if (!selectedNote) return;

        selectedNote.style.color = button.dataset.color;
    });
});


