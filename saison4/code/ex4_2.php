<?php
    $heure=$_POST["heure"];
    $minute=$_POST["minute"];
    if(($heure < 23) && ($minute < 59)){
        $minute ++;
    }elseif(($heure < 23) && ($minute == 59)){
        $minute = 0;
        $heure++;
    }elseif(($heure == 23) && ($minute == 59)){
        $heure = 0;
        $minute = 0;
    }else{
        $sMessage= " Erreur !";
    }
    if($heure < 10){
        $heure = "0".$heure;
    }
    if($minute < 10){
        $minute = "0".$minute;
    }
    $sMessage="Dans une minute, il sera {$heure} : {$minute} H";
    // Il ya deux syntaxe possible pour concatener en php :  
    /*
        Soit :  $sMessage="Dans une minute, il sera {$heure} : {$minute}";
        soit :  $sMessage="Dans une minute, il sera".$heure.":".$minute;
    */
?>