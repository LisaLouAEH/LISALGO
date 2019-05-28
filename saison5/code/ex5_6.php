<?php
    $nb = $_POST["nb"];
    $somme = 1;
    for ($i = 1; $i < $nb; $i++){
        $somme = $somme + ($i + 1);
    }
    $sMessage = $somme;
?>