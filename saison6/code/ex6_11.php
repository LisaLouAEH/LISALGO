<?php
var_dump("ex6_11.php est bien appellé"); 

    $tableau1 = array(2, 2, 2, 2);
    $tableau2 = array(1, 3, 5);
    for($i = 0; $i < count($tableau2); $i++){
        for($j = 0; $j < count($tableau2); $j++){
            $Toon = $Toon + $tableau1[$i] * $tableau2[$j];
        }
    }
    $sMessage = "Toon vaut: ".$Toon;



?>