<?php

$servername = "localhost";
$username = "sammartini";
$password = "bB37#2rr#S0t";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
        http_response_code(503);
        die("Connection failed: " . $conn->connect_error);
        exit;
}
http_response_code(200);
echo "Connected successfully";

?>

