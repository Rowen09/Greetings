/* =========================================
   STICKER ENGINE

   Responsable sa:
   - Pagbukas ng sticker panel
   - Pag-click ng sticker
   - Pagdagdag ng sticker sa canvas
========================================= */


/* =========================================
   PAG-INITIALIZE NG STICKERS
========================================= */

const stickerBtn=document.getElementById("stickerBtn");
const stickerPanel=document.getElementById("stickerPanel");
const stickerItems=document.querySelectorAll(".sticker-item");
const birthdayCanvas=document.querySelector(".birthday-canvas");


/* =========================================
   PAGBUKAS AT PAGSARA NG STICKER PANEL
========================================= */

if(stickerBtn && stickerPanel){

    stickerBtn.addEventListener("click",()=>{

        stickerPanel.classList.toggle("active");

    });

}


/* =========================================
   PAGDAGDAG NG STICKER SA CANVAS
========================================= */

stickerItems.forEach(item=>{

    item.addEventListener("click",()=>{

        const src=item.dataset.src;

        addStickerToCanvas(src);

    });

});


/* =========================================
   PAGGAWA NG STICKER OBJECT
========================================= */

function addStickerToCanvas(src){

    const sticker=document.createElement("div");

    sticker.classList.add("canvas-object","sticker-object");

    sticker.style.position="absolute";
    sticker.style.left="180px";
    sticker.style.top="180px";
    sticker.style.width="160px";
    sticker.style.height="160px";

   sticker.innerHTML=`
    <img src="${src}" alt="Sticker" draggable="false">
    <div class="resize-handle"></div>`;
    
    birthdayCanvas.appendChild(sticker);

    selectObject(sticker);
    makeCanvasObjectEditable(sticker);

}