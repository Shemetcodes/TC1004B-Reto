<?php
    // Database credentials
    $servername = "den1.mysql3.gear.host";
    $username   = "tc1004bretov2";
    $password   = "	Yx2082~6B_TL";
    $dbname     = "tc1004bretov2";
    $tbname     = "sensor";

    // Create database connection
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
    
    // Check Connection
    if(!$conn){
        die('Could not Connect My Sql:' .mysql_error());
    }
    //echo "[MySQL] Connected successfully <br/>";
?>