<!DOCTYPE html>
<html>
<head>
    <title>Create Birthday Card</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="page">

    <div class="card">

        <div class="decor">🎈 🎈 🎈</div>
        <div class="cake">🎂</div>

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
</html>