<?php
    $name_1= $_POST["name_1"];
    error_log("name_1 = " . $name_1);
    $name_2= $_POST["name_2"];
    error_log("name_2 = " . $name_2);
    $name_3= $_POST["name_3"];
    error_log("name_3 = " . $name_3);
    if (($name_1 < $name_2)&&($name_2 < $name_3)) {
        $sMessage= "Bravo ! Tout est en ordre Alpha";
    }else {
        $sMessage= "Wow ! Il faudrait ranger tout cela !";
    }   
?>