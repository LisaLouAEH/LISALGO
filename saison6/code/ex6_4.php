<?php
    $Nb = array(0);
    for($i = 0; $i < 5; $i++){
        array_push($Nb, $i*$i);
    }
    $sMessage = "Je me lance au chargement de la page, déso :-s tableau:".implode(",", $Nb);
?>