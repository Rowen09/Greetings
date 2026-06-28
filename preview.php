<!DOCTYPE html>
<html lang="en">

<head>

    <!-- =========================================
         IMPORMASYON NG PAGE
    ========================================== -->

    <meta charset="UTF-8">

    <title>Card Preview</title>


    <!-- =========================================
         CSS NG PREVIEW PAGE
    ========================================== -->

    <link rel="stylesheet" href="assets/css/preview.css">

</head>

<body>


<!-- =========================================
     BUONG LALAGYAN NG PREVIEW PAGE
========================================== -->

<div class="preview-page">


    <!-- =========================================
         HEADER NG PAGE
    ========================================== -->

    <div class="preview-header">

        <h2>Card Preview</h2>

        <!-- Button pabalik sa editor -->

        <button onclick="window.history.back()">

            Bumalik sa Editor

        </button>

    </div>


    <!-- =========================================
         CANVAS NG PREVIEW

         Dito ilalagay ng JavaScript ang lahat
         ng mga object na galing sa saved JSON.
    ========================================== -->

    <div
        id="previewCanvas"
        class="preview-canvas birthday-canvas">
    </div>

</div>


<!-- =========================================
     JAVASCRIPT NG PREVIEW
========================================== -->

<script src="assets/js/preview.js"></script>

</body>

</html>