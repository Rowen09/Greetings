<?php

$recipient = $_POST['recipient'] ?? '';
$sender = $_POST['sender'] ?? '';
$message = $_POST['message'] ?? '';

?>

<h1>Happy Birthday!</h1>

<h2><?php echo htmlspecialchars($recipient); ?></h2>

<p><?php echo nl2br(htmlspecialchars($message)); ?></p>

<p>From: <?php echo htmlspecialchars($sender); ?></p>