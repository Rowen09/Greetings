/* =========================================
   TOOLBAR ENGINE

   Responsable sa:
   - Mga button sa top bar
   - Pag-connect ng mga button sa editor functions
========================================= */


/* =========================================
   PREVIEW BUTTON

   Kapag pinindot ang Preview,
   ise-save muna ang current design
   bago pumunta sa preview page.
========================================= */

const previewBtn=document.getElementById("previewBtn");

if(previewBtn){

    previewBtn.addEventListener("click", () => {

        saveCardJSON();

        window.location.href="preview.php";

    });

}