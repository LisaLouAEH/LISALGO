<?php

    if(isset($_POST["saisie"])){
        $str = $_POST["saisie"];
        $tStr = explode(" ", $str);        
        $sMessage = "Votre saisie compte ".count($tStr)." mots.";
    }
    
include("ex_9_3.html"); 

?>