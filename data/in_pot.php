<?php
    // For database connections
    include_once 'database_pot.php';

    // tc1004b-reto.gearhostpreview.com/data/in.php?var1=95.23&var2=13.4

    // Verifying data
    echo " [GET] var1: " . $_GET['var1'] . " [GET] var2: " . $_GET['var2'] . . " [GET] var3: " . $_GET['var3'] ."<br/>";

    // Parsing data
    $var1 = $_GET['var1'];
    $var2 = $_GET['var2'];
    $var2 = $_GET['var3'];

    // Only insert, if variables are not empty
    if(isset($var1) || isset($var2) || isset($var3)){
        // MySQL injection query
        $sql = "INSERT INTO tbpot (pot1Value, pot2Value, pot3Value)
        VALUES ('$var1','$var2','$var3')";
        
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