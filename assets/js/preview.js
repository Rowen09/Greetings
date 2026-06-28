/* =========================================
   PREVIEW ENGINE

   Responsable sa:
   - Pagbasa ng na-save na JSON
   - Pagbuo muli ng lahat ng object
   - Pagpapakita ng read-only preview
========================================= */


/* =========================================
   PAG-INITIALIZE NG PREVIEW

   Awtomatikong tinatawag kapag
   natapos nang mag-load ang page.
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadPreview();

});


/* =========================================
   PAG-LOAD NG PREVIEW

   Binabasa ang na-save na JSON mula sa
   localStorage at muling binubuo ang lahat
   ng object sa loob ng preview canvas.
========================================= */

function loadPreview(){

    const canvas=document.getElementById("previewCanvas");

    const savedJSON=localStorage.getItem("savedCardJSON");

    // Walang na-save na data
    if(!savedJSON){

        canvas.innerHTML="<p style='padding:20px;'>No saved card found.</p>";

        return;

    }

    let data;

    // Suriin kung valid ang JSON
    try{

        data=JSON.parse(savedJSON);

    }catch(error){

        canvas.innerHTML="<p style='padding:20px;'>Invalid card data.</p>";

        return;

    }

    // Walang object na nakita sa JSON
    if(!data.objects || !Array.isArray(data.objects)){

        canvas.innerHTML="<p style='padding:20px;'>No objects found.</p>";

        return;

    }

    canvas.innerHTML="";

    /* =========================================
   PAGBALIK NG BACKGROUND NG CANVAS

   Ibinabalik ang background ng editor
   kasama ang grid pattern kung meron.
    ========================================= */

    if(data.canvas){

        canvas.style.background=data.canvas.background || "";

        canvas.style.backgroundColor=data.canvas.backgroundColor || "";

        canvas.style.backgroundImage=data.canvas.backgroundImage || "";

        canvas.style.backgroundSize=data.canvas.backgroundSize || "";

        canvas.style.backgroundPosition=data.canvas.backgroundPosition || "";

    }

    /* =========================================
    IBALIK ANG BACKGROUND NG CANVAS
    ========================================= */

    if(data.canvas.background){

        canvas.style.background = data.canvas.background;

    }

    // Muling buuin ang bawat object
    data.objects.forEach(obj=>{

        createPreviewObject(obj,canvas);

    });

}


/* =========================================
   PAGBUO NG PREVIEW OBJECT

   Gumagawa ng isang object mula sa JSON
   at inilalagay ito sa preview canvas.
========================================= */

function createPreviewObject(obj,canvas){

    const item=document.createElement("div");

    item.classList.add("preview-object");

    if(obj.style){

    item.style.background=obj.style.background;
    item.style.borderRadius=obj.style.borderRadius;
    item.style.boxShadow=obj.style.boxShadow;
    item.style.padding=obj.style.padding;
    item.style.opacity=obj.style.opacity;

    }

    if(obj.className){

        obj.className.split(" ").forEach(classItem=>{

            if(classItem){

                item.classList.add(classItem);

            }

        });

    }

    if(obj.background){

    item.style.background=obj.background;

    }

    item.style.left=obj.left+"px";
    item.style.top=obj.top+"px";

    item.style.width=obj.width+"px";
    item.style.height=obj.height+"px";

    if(obj.style && obj.style.transform && obj.style.transform !== "none"){

    item.style.transform=obj.style.transform;

    }else{

        item.style.transform=`rotate(${obj.rotate || 0}deg)`;

    }

    // Kung image ang object
    if(obj.type==="image"){

        createPreviewImage(item,obj);

    }

    // Kung text ang object
    if(obj.type==="text"){

        createPreviewText(item,obj);

    }

    canvas.appendChild(item);

}


/* =========================================
   PAGBUO NG IMAGE

   Ibinabalik ang image object batay
   sa na-save na impormasyon.
========================================= */

function createPreviewImage(container,obj){

    const img=document.createElement("img");

    img.src=obj.src;

    container.appendChild(img);

}


/* =========================================
   PAGBUO NG TEXT

   Ibinabalik ang text object kasama ang
   lahat ng na-save nitong style.
========================================= */

/* =========================================
   PAGBUO NG TEXT

   Ibinabalik ang text object kasama ang
   lahat ng na-save nitong style.
========================================= */

function createPreviewText(container,obj){

    container.classList.add("preview-text");

    container.innerHTML=obj.text || "";

    container.style.fontSize=obj.fontSize || "24px";

    container.style.fontFamily=obj.fontFamily || "'Caveat', cursive";

    container.style.color=obj.color || "#000";

    container.style.fontWeight=obj.fontWeight || "normal";

    container.style.fontStyle=obj.fontStyle || "normal";

    container.style.textAlign=obj.textAlign || "left";

    container.style.lineHeight=obj.lineHeight || "1.2";

    container.style.padding=obj.padding || "35px";

    container.style.boxSizing="border-box";

}