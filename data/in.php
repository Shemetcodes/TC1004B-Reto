<?php
    // For database connections
    include_once 'database.php';

    // tc1004b-reto.gearhostpreview.com/data/in.php?var1=95.23&var2=13.4

    // Verifying data
    echo " [GET] var1: " . $_GET['var1'] . " [GET] var2: " . $_GET['var2'] . "<br/>";

    // Parsing data
    $var1 = $_GET['var1'];
    $var2 = $_GET['var2'];
    $var1 = $_GET['var3'];
    $var2 = $_GET['var4'];
    $var1 = $_GET['var5'];
    $var2 = $_GET['var6'];

    // Only insert, if variables are not empty
    if(isset($var1) || isset($var2)){
        // MySQL injection query
        $sql = "INSERT INTO sensor (sensor1Value, sensor2Value)
        VALUES ('$var1','$var2')";
        
        // Insert into database
        if (mysqli_query($conn, $sql)) {
            echo "[MySQL] New record created successfully ! <br/>";
        } else {
            echo "[MySQL] Error: " . $sql . " " . mysqli_error($conn) . "<br/>";
        }
        // Close connection to database
        mysqli_close($conn);
        echo "[MySQL] Connection Closed <br/>";
    }
    if(isset($var3) || isset($var4)){
        // MySQL injection query
        $sql = "INSERT INTO sensor (sensor3Value, sensor4Value)
        VALUES ('$var3','$var4)";
        
        // Insert into database
        if (mysqli_query($conn, $sql)) {
            echo "[MySQL] New record created successfully ! <br/>";
        } else {
            echo "[MySQL] Error: " . $sql . " " . mysqli_error($conn) . "<br/>";
        }
        // Close connection to database
        mysqli_close($conn);
        echo "[MySQL] Connection Closed <br/>";
    }
    if(isset($var5) || isset($var6)){
        // MySQL injection query
        $sql = "INSERT INTO sensor (sensor5Value, sensor6Value)
        VALUES ('$var5','$var6')";
        
        // Insert into database
        if (mysqli_query($conn, $sql)) {
            echo "[MySQL] New record created successfully ! <br/>";
        } else {
            echo "[MySQL] Error: " . $sql . " " . mysqli_error($conn) . "<br/>";
        }
        // Close connection to database
        mysqli_close($conn);
        echo "[MySQL] Connection Closed <br/>";
    }
    
?>