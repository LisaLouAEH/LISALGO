<?php
if(isset($_POST["bouton"])){
    $mon_fichier = fopen('exemple.txt', 'r+');
    $tab_fichier = explode("/", fgets($mon_fichier));
    $i = 0;
    while(!feof($mon_fichier)){
        $tab_fichier[$i] = fgets($mon_fichier);
        $i++;
    }
    $sMessage = implode(" ", $tab_fichier);
    fclose($mon_fichier);
} 

include("ex_10_2.html");
?>