<?php 

if(isset($_POST["saisie"])){
    // recup string
    $saisie = $_POST["saisie"];
    // la string devient tableau de char
    $tStr = str_split($saisie);
        for($i = 0; $i < count($tStr); $i++){
            // change 1 char en 1 code ascii
            $tStr[$i] = ord($tStr[$i]) + 1;
            // change 1 code ascii en char
            $tStr[$i] = chr($tStr[$i]);
        }        
    $sMessage = implode(" ", $tStr);
}

include("ex_9_6.html"); 
?>