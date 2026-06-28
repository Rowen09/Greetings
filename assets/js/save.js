/* =========================================
   SAVE ENGINE

   Responsable sa:
   - Pagkuha ng CanvasModel data
   - Pag-save ng JSON sa localStorage
========================================= */


/* =========================================
   PAG-SAVE NG CARD

   Kinukuha ang lahat ng data mula sa
   CanvasModel at sine-save ito bilang JSON.
========================================= */

function saveCardJSON(){

    const data=CanvasModel.getData();

    localStorage.setItem("savedCardJSON",JSON.stringify(data));

    console.log(data);

}


/* =========================================
   SAVE BUTTON

   Kapag pinindot ang Save button,
   ise-save ang kasalukuyang design.
========================================= */

const saveBtn=document.querySelector(".save-btn");

if(saveBtn){

    saveBtn.addEventListener("click",()=>{

        saveCardJSON();

        alert("Matagumpay na na-save ang card.");

    });

}