<?php

    if(isset($_POST["saisie"]) && isset($_POST["index"])){
        $index= $_POST["index"];
        $tStr = str_split($_POST["saisie"]);
            for($i = 0; $i < count($tStr); $i++){
                var_dump("je suis dans la boucle");
                if($i == $index){
                    array_splice($tStr, $i, 1);
                }
            }        
        $sMessage = join("", $tStr);
        // join accepte de ne pas avoir d'arguments
    }
include("ex_9_5.html"); 

?>