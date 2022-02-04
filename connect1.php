<?php
    $username = $_POST['username'];
    $email = $_POST['email'];
    $bio = $_POST['bio'];

    // Database Connection
    $conn = new mysqli('localhost', 'root', '', 'boka');
    if($conn->connect_error){
        die('Connection Failed  : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(username, email, bio)
        values(?, ?, ?)");
        $stmt->bind_param("sss",$username, $email, $bio);
        $stmt->execute();
        echo "Din förfrågan har skickats in! Du kan stänga ner detta fönster.";
        $stmt->close();
        $conn->close();
    }
?>