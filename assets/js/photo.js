/* =========================================
   PHOTO.JS

   Responsible for:
   - Upload Photo
   - Add Photo
   - Make Photo Editable
========================================= */


/* =========================================
   PHOTO UPLOAD
========================================= */
const photoBtn = document.getElementById('photoBtn');
const photoInput = document.getElementById('photoInput');

photoBtn.addEventListener('click', () => {
    photoInput.click();
});


/* =========================================
   ADD PHOTO TO CANVAS
========================================= */
photoInput.addEventListener('change', () => {

    const file = photoInput.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    const photo = document.createElement('div');

    photo.className = "canvas-object photo-item";

    photo.style.left = "120px";
    photo.style.top = "120px";
    photo.style.width = "220px";
    photo.style.height = "220px";

    photo.innerHTML = `
        <img src="${imageUrl}" draggable="false">

        <div class="photo-resize-handle resize-handle"></div>
    `;

    canvas.appendChild(photo);

    selectObject(photo);
    makeCanvasObjectEditable(photo);

    photoInput.value = "";

});