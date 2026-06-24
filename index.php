<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Create Birthday Card</title>

<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
<link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

<div class="scene">

    <img src="assets/images/ballon.png" class="deco balloons" alt="">
    <img src="assets/images/tape.png" class="deco tape" alt="">
    <img src="assets/images/heart.png" class="deco heart-top" alt="">
    <img src="assets/images/envelopes.png" class="deco envelope" alt="">
    <img src="assets/images/cake2.png" class="deco cake-left" alt="">
    <img src="assets/images/gift.png" class="deco gift" alt="">

    <img src="assets/images/star.png" class="deco star star-1" alt="">
    <img src="assets/images/star2.png" class="deco star star-2" alt="">
    <img src="assets/images/small_heart.png" class="deco small-heart sh-1" alt="">
    <img src="assets/images/smallt_heart.png" class="deco small-heart sh-2" alt="">
    <img src="assets/images/theart.png" class="deco small-heart sh-3" alt="">

    <div class="confetti"></div>

    <main class="card">

        <div class="header-wrap">
            <img src="assets/images/header.png" class="header-img" alt="Birthday Header">
        </div>

        <form action="card.php" method="POST">

            <label class="field">
                <b>Recipient Name <span class="pink-text">♥</span></b>
                <div class="input-box recipient">
                    <span class="icon">👤</span>
                    <input type="text" name="recipient" placeholder="Enter recipient name..." required>
                </div>
            </label>

            <label class="field">
                <b>Your Name <span class="blue-text">♥</span></b>
                <div class="input-box sender">
                    <span class="icon">👤</span>
                    <input type="text" name="sender" placeholder="Enter your name..." required>
                </div>
            </label>

            <label class="field">
                <b>Birthday Message <span class="gold-text">♥</span></b>
                <div class="input-box message">
                    <img src="assets/images/pencil.png" class="pencil-icon" alt="">
                    <textarea name="message" placeholder="Write your birthday message here..." required></textarea>
                    <img src="assets/images/small_heart.png" class="message-heart" alt="">
                </div>
            </label> 

          <button type="submit">
                    <i class="fa-solid fa-paper-plane"></i>
                    Generate Card
                </button>

        </form>

    </main>

</div>

<script>
const confetti = document.querySelector('.confetti');
const colors = ['#ff78a5', '#ffc848', '#7dbdf7', '#d78df3', '#ffb1c9'];

for (let i = 0; i < 45; i++) {
    const piece = document.createElement('i');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.top = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    piece.style.width = Math.random() > .5 ? '13px' : '8px';
    piece.style.height = '6px';
    confetti.appendChild(piece);
}
</script>

</body>
</html>