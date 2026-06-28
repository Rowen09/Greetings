/* =========================================
   CANVASMODEL.JS

   Single Source of Truth ng buong editor.

   Dito manggagaling ang data para sa:
   - Save
   - Load
   - Preview
   - Share
   - Undo / Redo
========================================= */

const CanvasModel = {

    version: 1,

    canvas: {
        width: 620,
        height: 760,
        background: "#fff1e4"
    },

    objects: [],


    /* =========================================
       PAGGAWA NG UNIQUE ID

       Gumagawa ng sariling id para sa
       bawat object sa canvas.
    ========================================= */

    generateId() {

        return "obj_" + Date.now() + "_" + Math.floor(Math.random() * 10000);

    },


    /* =========================================
       PAGDAGDAG NG OBJECT

       Naglalagay ng bagong object sa model.
    ========================================= */

    addObject(objectData) {

        this.objects.push(objectData);

        return objectData;

    },


    /* =========================================
       PAGHANAP NG OBJECT

       Hinahanap ang object gamit ang id.
    ========================================= */

    findObject(id) {

        return this.objects.find(obj => obj.id === id);

    },


    /* =========================================
       PAG-UPDATE NG OBJECT

       Ina-update ang object gamit ang id.
    ========================================= */

    updateObject(id, newData) {

        const object = this.findObject(id);

        if (!object) return null;

        Object.assign(object, newData);

        return object;

    },


    /* =========================================
       PAGTANGGAL NG OBJECT

       Tinatanggal ang object gamit ang id.
    ========================================= */

    removeObject(id) {

        this.objects = this.objects.filter(obj => obj.id !== id);

    },


    /* =========================================
       PAGKUHA NG BUONG DESIGN DATA

       Kinukuha ang canvas info at lahat ng
       kasalukuyang object sa birthday canvas.
    ========================================= */

    getData() {

        this.syncFromDOM();

        return {
            version: this.version,
            canvas: this.canvas,
            objects: this.objects
        };

    },


    /* =========================================
       PAG-SYNC MULA SA DOM

       Binabasa ang aktwal na laman ng canvas
       para masigurong kasama sa JSON ang notes,
       photos, position, size, rotation, at styles.
    ========================================= */

    syncFromDOM() {
       
        
        const canvas = document.querySelector(".birthday-canvas");

        // const canvasStyle = window.getComputedStyle(canvas);
        // this.canvas.background = canvasStyle.background;
        const canvasStyle=window.getComputedStyle(canvas);

        this.canvas.background=canvasStyle.background;
        this.canvas.backgroundColor=canvasStyle.backgroundColor;
        this.canvas.backgroundImage=canvasStyle.backgroundImage;
        this.canvas.backgroundSize=canvasStyle.backgroundSize;
        this.canvas.backgroundPosition=canvasStyle.backgroundPosition;



        if (!canvas) return;

        const canvasRect = canvas.getBoundingClientRect();

        this.canvas.width = canvas.offsetWidth;
        this.canvas.height = canvas.offsetHeight;

        this.objects = [];

        const canvasObjects = canvas.querySelectorAll(".canvas-object");

        canvasObjects.forEach(item => {

            const rect = item.getBoundingClientRect();

            const itemStyle=window.getComputedStyle(item);

            const objectData = {
                id: item.dataset.id || this.generateId(),
                type: this.getObjectType(item),
                left: rect.left - canvasRect.left,
                top: rect.top - canvasRect.top,
                width: item.offsetWidth,
                height: item.offsetHeight,
                rotate: this.getRotation(item),
                className: item.className,

               style: {
                background: itemStyle.backgroundColor,
                borderRadius: itemStyle.borderRadius,
                boxShadow: itemStyle.boxShadow,
                padding: itemStyle.padding,
                opacity: itemStyle.opacity,
                transform: itemStyle.transform
            }
            };

            item.dataset.id = objectData.id;

            if (item.classList.contains("sticky-note")) {

                Object.assign(objectData, this.getStickyNoteData(item));

            }

            if(objectData.type==="image"){

                Object.assign(objectData,this.getPhotoData(item));

            }

            this.objects.push(objectData);

        });

    },


    /* =========================================
       PAGKUHA NG URI NG OBJECT

       Tinutukoy kung note, photo, text,
       o generic object ang isang item.
    ========================================= */

    getObjectType(item) {

        if(item.classList.contains("sticky-note")) return "text";

        if(item.classList.contains("photo-card")) return "image";

        if(item.querySelector("img")) return "image";

        return "object";

    },


    /* =========================================
       PAGKUHA NG DATA NG STICKY NOTE

       Kinukuha ang text at style ng note.
    ========================================= */

    getStickyNoteData(item) {

        const body = item.querySelector(".sticky-body");

        const style = window.getComputedStyle(body || item);

      return {
        text: body ? body.innerHTML : item.innerHTML,
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
        color: style.color,
        fontWeight: style.fontWeight,
        fontStyle: style.fontStyle,
        textAlign: style.textAlign,
        lineHeight: style.lineHeight,
        padding: window.getComputedStyle(item).padding,
        background: window.getComputedStyle(item).backgroundColor
    };

    },


    /* =========================================
       PAGKUHA NG DATA NG PHOTO

       Kinukuha ang image source ng photo object.
    ========================================= */

    getPhotoData(item) {

        const img = item.querySelector("img");

        return {
            src: img ? img.src : ""
        };

    },


    /* =========================================
       PAGKUHA NG ROTATION

       Binabasa ang rotate value mula sa
       transform ng object.
    ========================================= */

    getRotation(item) {

        const transform = window.getComputedStyle(item).transform;

        if (!transform || transform === "none") return 0;

        const values = transform.split("(")[1].split(")")[0].split(",");

        const a = values[0];
        const b = values[1];

        const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

        return angle;

    },


    /* =========================================
       PAGPALIT NG BUONG MODEL DATA

       Ginagamit kapag maglo-load tayo
       ng saved design pabalik sa editor.
    ========================================= */

    loadData(data) {

        this.version = data.version || 1;
        this.canvas = data.canvas || this.canvas;
        this.objects = data.objects || [];

    },


    /* =========================================
       DEBUG HELPER

       Ipinapakita sa console ang current
       data ng buong canvas.
    ========================================= */

    log() {

        console.log(JSON.stringify(this.getData(), null, 2));

    }

};