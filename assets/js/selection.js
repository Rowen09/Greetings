/* =========================================
   SELECTION ENGINE

   Responsible for:
   - Selected Object
   - Bring To Front
   - Deselect
========================================= */

function selectObject(item){

    document.querySelectorAll(".canvas-object")
    .forEach(obj=>{

        obj.classList.remove("selected");

    });

    selectedItem=item;

    if(item.classList.contains("sticky-note")){

        selectedNote=item;

    }else{

        selectedNote=null;

    }

    highestZIndex++;

    item.style.zIndex=highestZIndex;

    item.classList.add("selected");

}



/* =========================================
CLICK EMPTY CANVAS

Remove selection
========================================= */

canvas.addEventListener("mousedown",(e)=>{

    if(e.target!==canvas)return;

    document.querySelectorAll(".canvas-object")
    .forEach(obj=>{

        obj.classList.remove("selected");

    });

    selectedItem=null;

    selectedNote=null;

});