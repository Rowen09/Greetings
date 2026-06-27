/* =========================================
   PREVIEW.JS

   Device Preview Engine
========================================= */

const editorPage = document.querySelector(".editor-page");

const desktopBtn = document.getElementById("desktopView");
const tabletBtn = document.getElementById("tabletView");
const mobileBtn = document.getElementById("mobileView");

function setPreview(mode){

    editorPage.classList.remove(
        "desktop-preview",
        "tablet-preview",
        "mobile-preview"
    );

    editorPage.classList.add(mode+"-preview");

    document
    .querySelectorAll(".device-btn")
    .forEach(btn=>btn.classList.remove("active"));

    if(mode==="desktop")
        desktopBtn.classList.add("active");

    if(mode==="tablet")
        tabletBtn.classList.add("active");

    if(mode==="mobile")
        mobileBtn.classList.add("active");

}

desktopBtn.onclick=()=>setPreview("desktop");
tabletBtn.onclick=()=>setPreview("tablet");
mobileBtn.onclick=()=>setPreview("mobile");