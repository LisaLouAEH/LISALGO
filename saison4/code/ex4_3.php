<?php
    $heure=$_POST["heure"];
    $minute=$_POST["minute"];
    $seconde=$_POST["seconde"];
    if((($heure < 23) && ($minute < 59)) && ($seconde < 59)){
        $seconde ++;
    }elseif((($heure < 23) && ($minute < 59)) && ($seconde == 59)){
        $seconde = 0;
        $minute++;
    }elseif((($heure < 23) && ($minute == 59)) && ($seconde == 59)){
        $seconde = 0;
        $minute = 0;
        $heure++;
    }elseif((($heure == 23) && ($minute == 59)) && ($seconde == 59)){
        $seconde = 0;
        $minute = 0;
        $heure = 0;
    }else{
        $sMessage= " Erreur !";
    }
    if($heure < 10){
        $heure = "0".$heure;
    }
    if($minute < 10){
        $minute = "0".$minute;
    }
    if($seconde < 10){
        $seconde = "0".$seconde;
    }
    $sMessage="Dans une seconde, il sera {$heure} heure(s), {$minute} minute(s) et {$seconde} seconde(s).";
?>