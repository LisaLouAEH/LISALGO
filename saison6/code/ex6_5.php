<?php 
    $N = array(1);
    for($i = 3; $i < 12; $i += 2){
        $N[$i] = $i;
    }
    $sMessage = implode("<br>", $N);
?>