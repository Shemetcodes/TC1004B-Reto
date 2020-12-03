<?php
    // For database connections
    include_once 'database.php';

    // tc1004b-reto.gearhostpreview.com/data/in.php?var1=95.23&var2=13.4

    // Verifying data
    echo " [GET] var3: " . $_GET['var3'] . " [GET] var4: " . $_GET['var4'] . "<br/>";

    // Parsing data
    $var3 = $_GET['var3'];
    $var4 = $_GET['var4'];

    // Only insert, if variables are not empty
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
    
?>