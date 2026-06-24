<?php

$conn = new mysqli("localhost", "root", "", "greetings_db");

if ($conn->connect_error) {
    die("Connection Failed: " . $conn-> connect_error);
}

echo "Database Connected Successfully!";