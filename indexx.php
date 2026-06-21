<!-- <!DOCTYPE html>
<html>
<head>
    <title>Create Birthday Card</title>
     <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">

<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="page">

    <div class="card">

        <div class="cake">
            <img src="assets/images/cake.png" alt="Birthday Cake">
        </div>

        <h1>Create <span>Birthday</span> Card</h1>
        <p>Make someone's day extra special</p>

        <form action="card.php" method="POST">
            <input type="text" name="recipient" placeholder="Enter recipient name...">
            <input type="text" name="sender" placeholder="Enter your name...">
            <textarea name="message" placeholder="Write your birthday message here..."></textarea>
            <button type="submit">Generate Card</button>
        </form>

    </div>

</div>

</body>
</html> -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Birthday Card</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

    <!-- Confetti layer -->
    <div class="confetti-layer" id="confetti"></div>

    <!-- Deco illustrations using open CDN images -->
    <!-- Balloons -->
    <img class="deco deco-balloons" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f388.svg" alt="" style="opacity:0;width:0">
    <!-- We'll draw deco with CSS + SVG inline instead for reliability -->

    <!-- Tape top-left -->
    <svg class="deco deco-tape-tl" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="8" width="130" height="20" rx="4" fill="#ffb8cc" opacity="0.7"/>
        <line x1="0" y1="12" x2="130" y2="12" stroke="#ff9ab5" stroke-width="0.8" opacity="0.5"/>
        <line x1="0" y1="24" x2="130" y2="24" stroke="#ff9ab5" stroke-width="0.8" opacity="0.5"/>
        <!-- tiny hearts pattern -->
        <text x="10"  y="23" font-size="9" fill="#ff6fa5" opacity="0.6" font-family="sans-serif">♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡</text>
    </svg>

    <!-- Heart top-right -->
    <svg class="deco deco-heart-tr" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45 75 C45 75 10 52 10 30 C10 18 20 10 32 14 C38 16 42 20 45 24 C48 20 52 16 58 14 C70 10 80 18 80 30 C80 52 45 75 45 75Z" fill="#ff6fa5" opacity="0.18" stroke="#ff6fa5" stroke-width="2.5"/>
        <!-- dashed inner heart lines -->
        <path d="M45 65 C45 65 18 47 18 30 C18 21 26 16 34 19 C39 21 43 25 45 28 C47 25 51 21 56 19 C64 16 72 21 72 30 C72 47 45 65 45 65Z" fill="none" stroke="#ff6fa5" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.55"/>
    </svg>

    <!-- Envelope right -->
    <svg class="deco deco-envelope" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- envelope body -->
        <rect x="10" y="30" width="130" height="90" rx="10" fill="#ffb8cc"/>
        <!-- flap open -->
        <path d="M10 30 L75 75 L140 30Z" fill="#ff9ab5"/>
        <!-- heart on flap -->
        <path d="M75 55 C75 55 62 46 62 38 C62 33 66 30 70 32 C72 33 74 35 75 37 C76 35 78 33 80 32 C84 30 88 33 88 38 C88 46 75 55 75 55Z" fill="#fff" opacity="0.85"/>
    </svg>

    <!-- Balloons left -->
    <svg class="deco deco-balloons" viewBox="0 0 190 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- strings -->
        <path d="M60 200 Q58 240 70 270" stroke="#aaa" stroke-width="1.2" fill="none"/>
        <path d="M95 210 Q95 245 70 270" stroke="#aaa" stroke-width="1.2" fill="none"/>
        <path d="M130 200 Q132 240 70 270" stroke="#aaa" stroke-width="1.2" fill="none"/>
        <!-- ribbon bow -->
        <path d="M55 268 Q70 260 85 268 Q70 276 55 268Z" fill="#ff6fa5" opacity="0.7"/>
        <!-- pink balloon -->
        <ellipse cx="60" cy="105" rx="46" ry="52" fill="#ffb8cc"/>
        <ellipse cx="48" cy="88" rx="10" ry="7" fill="#fff" opacity="0.35" transform="rotate(-20 48 88)"/>
        <path d="M60 157 Q62 165 60 168" stroke="#ffb8cc" stroke-width="2" fill="none"/>
        <!-- purple balloon -->
        <ellipse cx="130" cy="115" rx="42" ry="48" fill="#d4a8f0"/>
        <ellipse cx="120" cy="100" rx="9" ry="6" fill="#fff" opacity="0.3" transform="rotate(-20 120 100)"/>
        <path d="M130 163 Q132 170 130 173" stroke="#d4a8f0" stroke-width="2" fill="none"/>
        <!-- yellow balloon -->
        <ellipse cx="95" cy="95" rx="44" ry="50" fill="#ffe08a"/>
        <ellipse cx="83" cy="79" rx="10" ry="7" fill="#fff" opacity="0.35" transform="rotate(-20 83 79)"/>
        <path d="M95 145 Q97 153 95 156" stroke="#ffe08a" stroke-width="2" fill="none"/>
    </svg>

    <!-- Cake bottom-left -->
    <svg class="deco deco-cake-bl" viewBox="0 0 170 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- candle -->
        <rect x="78" y="10" width="14" height="34" rx="5" fill="#ff9ab5"/>
        <ellipse cx="85" cy="8" rx="5" ry="7" fill="#f5c842" opacity="0.9"/>
        <!-- top layer -->
        <ellipse cx="85" cy="68" rx="60" ry="14" fill="#ffe4ec"/>
        <rect x="25" y="60" width="120" height="36" rx="0" fill="#ffb8cc"/>
        <ellipse cx="85" cy="60" rx="60" ry="14" fill="#ffd6e4"/>
        <!-- drips -->
        <path d="M30 74 Q35 90 32 96 Q28 90 30 74Z" fill="#fff" opacity="0.6"/>
        <path d="M55 74 Q60 94 57 100 Q53 94 55 74Z" fill="#fff" opacity="0.6"/>
        <path d="M80 74 Q85 96 82 102 Q78 96 80 74Z" fill="#fff" opacity="0.6"/>
        <path d="M110 74 Q115 92 112 98 Q108 92 110 74Z" fill="#fff" opacity="0.6"/>
        <path d="M135 74 Q140 88 137 94 Q133 88 135 74Z" fill="#fff" opacity="0.6"/>
        <!-- bottom layer -->
        <ellipse cx="85" cy="100" rx="70" ry="16" fill="#fff0f5"/>
        <rect x="15" y="96" width="140" height="46" rx="0" fill="#ffe4ec"/>
        <ellipse cx="85" cy="96" rx="70" ry="16" fill="#ffd0e0"/>
        <!-- plate -->
        <ellipse cx="85" cy="148" rx="80" ry="16" fill="#ffc8d8"/>
        <ellipse cx="85" cy="144" rx="80" ry="12" fill="#ffe0ec"/>
        <!-- sprinkles -->
        <rect x="40" y="108" width="8" height="3" rx="2" fill="#a0d8f0" transform="rotate(30 40 108)"/>
        <rect x="65" y="114" width="8" height="3" rx="2" fill="#f5c842" transform="rotate(-20 65 114)"/>
        <rect x="95" y="110" width="8" height="3" rx="2" fill="#c8a0f0" transform="rotate(15 95 110)"/>
        <rect x="120" y="116" width="8" height="3" rx="2" fill="#90e0b0" transform="rotate(-30 120 116)"/>
    </svg>

    <!-- Gift bottom-right -->
    <svg class="deco deco-gift" viewBox="0 0 160 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- ribbon vertical -->
        <rect x="70" y="50" width="20" height="115" fill="#f0c040"/>
        <!-- box body -->
        <rect x="10" y="80" width="140" height="90" rx="8" fill="#ff9ab5"/>
        <!-- lid -->
        <rect x="5"  y="60" width="150" height="30" rx="6" fill="#ff6fa5"/>
        <!-- ribbon horizontal on lid -->
        <rect x="5"  y="70" width="150" height="10" fill="#f0c040"/>
        <!-- bow left loop -->
        <path d="M80 62 Q50 20 30 38 Q20 54 60 62Z" fill="#f0c040"/>
        <!-- bow right loop -->
        <path d="M80 62 Q110 20 130 38 Q140 54 100 62Z" fill="#f0c040"/>
        <!-- bow knot -->
        <ellipse cx="80" cy="62" rx="12" ry="10" fill="#e0a820"/>
        <!-- dots on box -->
        <circle cx="35" cy="115" r="7" fill="#fff" opacity="0.35"/>
        <circle cx="60" cy="140" r="7" fill="#fff" opacity="0.35"/>
        <circle cx="110" cy="110" r="7" fill="#fff" opacity="0.35"/>
        <circle cx="130" cy="138" r="7" fill="#fff" opacity="0.35"/>
    </svg>

    <!-- Main page -->
    <div class="page">
        <div class="card">

            <!-- Card sparkles & hearts -->
            <i class="sp sp1">✦</i>
            <i class="sp sp2">✦</i>
            <i class="sp sp3">✦</i>
            <i class="sp sp4">✦</i>
            <i class="dh dh1">♡</i>
            <i class="dh dh2">♡</i>
            <i class="dh dh3">♡</i>

            <!-- Cake icon top of card -->
            <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:72px;margin-bottom:6px;">
                <!-- candle -->
                <rect x="45" y="4" width="10" height="22" rx="4" fill="#ff9ab5"/>
                <ellipse cx="50" cy="3" rx="4" ry="6" fill="#f5c842" opacity="0.9"/>
                <!-- hearts beside candle -->
                <text x="20" y="22" font-size="10" fill="#ff6fa5" opacity="0.7">♡</text>
                <text x="72" y="22" font-size="10" fill="#ff6fa5" opacity="0.7">♡</text>
                <!-- sparkles -->
                <text x="12" y="16" font-size="9" fill="#f5c842">✦</text>
                <text x="80" y="14" font-size="9" fill="#f5c842">✦</text>
                <!-- cake top layer -->
                <ellipse cx="50" cy="46" rx="38" ry="9" fill="#ffd6e4"/>
                <rect x="12" y="40" width="76" height="22" fill="#ffb8cc"/>
                <ellipse cx="50" cy="40" rx="38" ry="9" fill="#ffc8d8"/>
                <!-- drips -->
                <path d="M18 48 Q21 57 19 61 Q16 57 18 48Z" fill="#fff" opacity="0.6"/>
                <path d="M35 48 Q38 59 36 63 Q33 59 35 48Z" fill="#fff" opacity="0.6"/>
                <path d="M55 48 Q58 60 56 64 Q53 60 55 48Z" fill="#fff" opacity="0.6"/>
                <path d="M72 48 Q75 57 73 61 Q70 57 72 48Z" fill="#fff" opacity="0.6"/>
                <!-- bottom layer -->
                <ellipse cx="50" cy="62" rx="44" ry="10" fill="#fff0f5"/>
                <rect x="6"  y="58" width="88" height="22" fill="#ffe0ec"/>
                <ellipse cx="50" cy="58" rx="44" ry="10" fill="#ffd0e0"/>
                <!-- sprinkles -->
                <rect x="22" y="68" width="6" height="2.5" rx="1.5" fill="#a0d8f0" transform="rotate(30 22 68)"/>
                <rect x="45" y="72" width="6" height="2.5" rx="1.5" fill="#f5c842" transform="rotate(-20 45 72)"/>
                <rect x="65" y="66" width="6" height="2.5" rx="1.5" fill="#c8a0f0" transform="rotate(15 65 66)"/>
            </svg>

            <!-- Title -->
            <div class="h1-wrap">
                <div class="dash">
                    <span style="width:20px"></span>
                    <span style="width:14px;margin-left:5px"></span>
                </div>
                <h1>Create <span class="pink">Birthday</span> Card</h1>
                <div class="dash right">
                    <span style="width:20px"></span>
                    <span style="width:14px;margin-left:5px"></span>
                </div>
            </div>

            <p class="subtitle">Make someone's day extra special <span class="heart">♡</span></p>

            <!-- Form -->
            <form action="card.php" method="POST">

                <!-- Recipient -->
                <div class="field">
                    <div class="field-label">
                        Recipient Name
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#ff6fa5" xmlns="http://www.w3.org/2000/svg"><path d="M8 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-5 5.5a5 5 0 0 1 10 0H3Z"/></svg>
                    </div>
                    <div class="input-wrap">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="#f5b0cc" xmlns="http://www.w3.org/2000/svg" style="top:50%;transform:translateY(-50%)"><path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6 8a6 6 0 0 1 12 0H4Z"/></svg>
                        <input id="recipient" type="text" name="recipient" placeholder="Enter recipient name..." autocomplete="off">
                    </div>
                </div>

                <!-- Sender -->
                <div class="field">
                    <div class="field-label">
                        Your Name
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#7ab8f5" xmlns="http://www.w3.org/2000/svg"><path d="M8 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-5 5.5a5 5 0 0 1 10 0H3Z"/></svg>
                    </div>
                    <div class="input-wrap">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="#a8cbf0" xmlns="http://www.w3.org/2000/svg" style="top:50%;transform:translateY(-50%)"><path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6 8a6 6 0 0 1 12 0H4Z"/></svg>
                        <input id="sender" type="text" name="sender" placeholder="Enter your name..." autocomplete="off">
                    </div>
                </div>

                <!-- Message -->
                <div class="field">
                    <div class="field-label">
                        Birthday Message
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5c842" xmlns="http://www.w3.org/2000/svg"><path d="M8 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-5 5.5a5 5 0 0 1 10 0H3Z"/></svg>
                    </div>
                    <div class="input-wrap ta">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#e8c840" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 2.5a2.1 2.1 0 0 1 3 3L6 16l-4 1 1-4 10.5-10.5Z"/></svg>
                        <textarea name="message" placeholder="Write your birthday message here..."></textarea>
                    </div>
                </div>

                <!-- Submit -->
                <button type="submit" class="btn">
                    <!-- Paper plane icon -->
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Generate Card ✨
                </button>

            </form>
        </div>
    </div>

    <script>
        // Scattered confetti
        const layer = document.getElementById('confetti');
        const pieces = [
            {color:'#ff9ab5', shape:'rect'},
            {color:'#7ab8f5', shape:'circle'},
            {color:'#f5c842', shape:'rect'},
            {color:'#c8a0f0', shape:'circle'},
            {color:'#90e0b0', shape:'rect'},
            {color:'#f59a60', shape:'circle'},
            {color:'#ff6fa5', shape:'rect'},
            {color:'#a0d8f0', shape:'circle'},
        ];
        for (let i = 0; i < 45; i++) {
            const p = pieces[Math.floor(Math.random() * pieces.length)];
            const d = document.createElement('div');
            d.className = 'conf-piece';
            const size = Math.random() * 7 + 4;
            d.style.cssText = [
                `background:${p.color}`,
                `width:${p.shape === 'circle' ? size : size * (Math.random() < 0.5 ? 1 : 2.5)}px`,
                `height:${size}px`,
                `left:${Math.random() * 100}%`,
                `top:${Math.random() * 100}%`,
                `transform:rotate(${Math.random() * 360}deg)`,
                `border-radius:${p.shape === 'circle' ? '50%' : '2px'}`,
                `opacity:${Math.random() * 0.4 + 0.5}`
            ].join(';');
            layer.appendChild(d);
        }
    </script>
</body>
</html>