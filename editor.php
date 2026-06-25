<!DOCTYPE html>
<html>
<head>
    <title>Design Your Birthday Card</title>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Patrick+Hand&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/editor.css">
</head>
<body>

<div class="editor-page">

    <div class="top-bar">
        <a href="create-card.php" class="back-btn">‹ Back</a>

        <div class="top-actions">
            <button class="icon-btn">↶</button>
            <button class="icon-btn">↷</button>
            <button class="save-btn">Save</button>
            <button class="preview-btn">Preview</button>
        </div>
    </div>

    <div class="editor-layout">

        <aside class="tool-bar">
            <button class="tool active">📝<span>Note</span></button>
            <button class="tool">📸<span>Photo</span></button>
            <button class="tool">🎀<span>Stickers</span></button>
            <button class="tool">🎵<span>Music</span></button>
            <button class="tool">⋯<span>More</span></button>
        </aside>

        <main class="canvas-wrap">

            <div class="birthday-canvas">

                <div class="photo-card">
                    <div class="photo-placeholder">📸</div>
                    <p>Add Photo</p>
                </div>

                <div class="small-note">
                    Happy Day! ♡
                </div>

        
                 <div class="sticky-note">

                    <div class="sticky-body" contenteditable="true" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-placeholder="Write your message..."></div>

                    <div class="resize-handle"></div>

                </div>


            </div>

            <!-- <div class="bottom-tools">
                <button>Paper Style</button>
                <button>Tape Style</button>
                <button>Floating Style</button>
                <button>Background Style</button>
            </div> -->
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
        <button id="deleteNoteBtn" class="danger-btn">
            Delete Note
        </button>
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

</body>

<script src="assets/js/editor.js"></script>
</html>