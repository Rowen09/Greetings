<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design Your Birthday Card</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Patrick+Hand&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <!-- <link rel="stylesheet" href="assets/css/editor.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

    <link rel="stylesheet" href="assets/css/editor.css">
    <link rel="stylesheet" href="assets/css/objects/sticker.css">
</head>


<body>

<div class="editor-page">

    <div class="top-bar">
        <a href="create-card.php" class="back-btn">‹ Back</a>

        <div class="top-actions">

        <button class="icon-btn">↶</button>

        <button class="icon-btn">↷</button>

        <button class="save-btn">
            💾 Save
        </button>

        <button type="button" id="previewBtn" class="preview-btn">
            👁 Preview
        </button>

        </div>
    </div>


    <div class="editor-layout">

        <aside class="tool-bar">
            <button class="tool active">📝<span>Note</span></button>
            <!-- <button class="tool">📸<span>Photo</span></button>
              -->
            <button class="tool" id="photoBtn">📸<span>Photo</span></button>
            <button class="tool" id="stickerBtn">🎀<span>Stickers</span></button>
            <button class="tool">🎵<span>Music</span></button>
            <button class="tool">⋯<span>More</span></button>
        </aside>

        <main class="canvas-wrap">

            <div class="birthday-canvas">
        
                    <div class="canvas-object sticky-note">

                    <div class="sticky-body" contenteditable="true" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-placeholder="Write your message..."></div>

                    <div class="resize-handle"></div>

                </div>

            </div>

                <!-- =========================================
            PANEL NG STICKERS

            Dito lalabas ang mga sticker na
            puwedeng idagdag ng user sa canvas.
        ========================================== -->

        <div class="sticker-panel" id="stickerPanel">

            <h3>Birthday Stickers</h3>

            <div class="sticker-grid">

                <button class="sticker-item" data-src="assets/stickers/bday_stickers/bday-cake3.png">
                    <img src="assets/stickers/bday_stickers/bday-cake3.png" alt="Birthday Cake">
                </button>

                <button class="sticker-item" data-src="assets/stickers/bday_stickers/bday-sign2.png">
                    <img src="assets/stickers/bday_stickers/bday-sign2.png" alt="Happy Birthday Sign">
                </button>

                <button class="sticker-item" data-src="assets/stickers/bday_stickers/balloon.png">
                    <img src="assets/stickers/bday_stickers/balloon.png" alt="Balloon">
                </button>

                <button class="sticker-item" data-src="assets/stickers/bday_stickers/bday-cake.png">
                    <img src="assets/stickers/bday_stickers/bday-cake.png" alt="Pink Birthday Cake">
                </button>

                 <button class="sticker-item" data-src="assets/stickers/bday_stickers/bday-cake2.png">
                    <img src="assets/stickers/bday_stickers/bday-cake2.png" alt="Birthday Cake">
                </button>

                <button class="sticker-item" data-src="assets/stickers/bday_stickers/bday-sign1.png">
                    <img src="assets/stickers/bday_stickers/bday-sign1.png" alt="Birthday Sign">
                </button>


                 <button class="sticker-item" data-src="assets/stickers/bday_stickers/balloon.png">
                    <img src="assets/stickers/bday_stickers/balloon.png" alt="Balloon">
                </button>

                <button class="sticker-item" data-src="assets/stickers/bday_stickers/bday-cake.png">
                    <img src="assets/stickers/bday_stickers/bday-cake.png" alt="Pink Birthday Cake">
                </button>

                 <button class="sticker-item" data-src="assets/stickers/bday_stickers/bday-cake2.png">
                    <img src="assets/stickers/bday_stickers/bday-cake2.png" alt="Birthday Cake">
                </button>

                <button class="sticker-item" data-src="assets/stickers/bday_stickers/bday-sign1.png">
                    <img src="assets/stickers/bday_stickers/bday-sign1.png" alt="Birthday Sign">
                </button>

            </div>

        </div>  
            <div class="bottom-tools">
    <button class="style-btn active" data-panel="paper">Paper Style</button>
    <button class="style-btn" data-panel="tape">Tape Style</button>
    <button class="style-btn" data-panel="floating">Floating Style</button>
    <button class="style-btn" data-panel="background">Background Style</button>
</div>

 <div class="style-panel" id="stylePanel">
    <div class="panel-group active" id="paper">
        <button class="paper-option pink">Pink Note</button>
        <button class="paper-option yellow">Yellow Note</button>
        <button class="paper-option blue">Blue Note</button>
        <button class="paper-option white">White Paper</button>
        <!-- font size -->
        <button id="fontSmallBtn">A-</button>
        <button id="fontBigBtn">A+</button>
        <!-- font color -->
        <button class="font-color" data-color="#222">Black</button>
        <button class="font-color" data-color="#ff4f8b">Pink</button>
        <button class="font-color" data-color="#4b8cff">Blue</button>
        <!-- fonts -->
        <button class="font-family" data-font="'Caveat', cursive">Cute</button>
        <button class="font-family" data-font="'Patrick Hand', cursive">Handwritten</button>
        <button class="font-family" data-font="'Nunito', sans-serif">Clean</button>
        <!-- delete -->
        <button id="deleteNoteBtn" class="danger-btn">Delete</button>
        <button id="duplicateBtn">Duplicate</button>
        <button id="rotateLeftBtn">↺ Rotate</button>
        <button id="rotateRightBtn">↻ Rotate</button>

        <button id="zoomInBtn">Zoom +</button>
        <button id="zoomOutBtn">Zoom -</button>
        <button id="flipXBtn">Flip X</button>
        <button id="flipYBtn">Flip Y</button>
        <button id="animateBtn">Animate</button>
    </div>


    <div class="panel-group" id="tape">
        <button>Pink Tape</button>
        <button>Yellow Tape</button>
        <button>Purple Tape</button>
    </div>

    <div class="panel-group" id="floating">
        <button>Hearts</button>
        <button>Sparkles</button>
        <button>Balloons</button>
    </div>

    <div class="panel-group" id="background">
        <button>Cream Grid</button>
        <button>Pink Grid</button>
        <button>Plain White</button>
    </div>
</div>

        </main>

        <aside class="pages-panel">
            <h3>Pages</h3>

            <div class="page-thumb active">
                <span>1</span>
            </div>

            <button class="add-page">+ Add Page</button>
        </aside>

    </div>

</div>

<input type="file" id="photoInput" accept="image/*" hidden>

<script src="assets/js/canvasModel.js"></script>
<script src="assets/js/utils.js"></script>
<script src="assets/js/editor.js"></script>
<script src="assets/js/selection.js"></script>
<script src="assets/js/sticker.js"></script>

<script src="assets/js/note.js"></script>
<script src="assets/js/photo.js"></script>
<script src="assets/js/text.js"></script>

<script src="assets/js/duplicate.js"></script>
<script src="assets/js/delete.js"></script>
<script src="assets/js/rotate.js"></script>

<script src="assets/js/save.js"></script>
<script src="assets/js/toolbar.js"></script>


<!-- <script src="assets/js/preview.js"></script> -->

</body>
</html>