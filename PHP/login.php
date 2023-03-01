<?php
session_start();

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the username from the form
  $username = $_POST["Username"];
  
  // Store the username in a session variable
  $_SESSION["username"] = $username;
  
  // Redirect the user to home.html
  header("Location: HTML/home.html");
  exit;
}
?>