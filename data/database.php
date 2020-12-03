<?php
    // Database credentials
    $servername = "den1.mysql6.gear.host";
    $username   = "dbreto";
    $password   = "Me431VR~key-";
    $dbname     = "dbreto";
    $tbname     = "sensor";

    // Create database connection
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
    
    // Check Connection
    if(!$conn){
        die('Could not Connect My Sql:' .mysql_error());
    }
    //echo "[MySQL] Connected successfully <br/>";
?>