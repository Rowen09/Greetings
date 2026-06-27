/* =========================================
   TEXT.JS

   Responsible for:
   - Font Family
   - Font Size
   - Font Color
   - Future:
       Bold
       Italic
       Underline
       Highlight
========================================= */


/* =========================================
   GET CURRENT TEXT SELECTION
========================================= */
function getSelectedTextRange() {

    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0)
        return null;

    if (selection.toString().trim() === "")
        return null;

    return selection.getRangeAt(0);

}


/* =========================================
   APPLY STYLE TO SELECTED TEXT

   Generic function.

   Example:

   applyTextStyle({
        color:"#ff5b93"
   });

========================================= */
function applyTextStyle(styles) {

    const range = getSelectedTextRange();

    if (!range) {
        alert("Highlight muna ang text.");
        return;
    }

    const span = document.createElement("span");

    Object.assign(span.style, styles);

    span.appendChild(range.extractContents());

    range.insertNode(span);

    const selection = window.getSelection();
    selection.removeAllRanges();

}