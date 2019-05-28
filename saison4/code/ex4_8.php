<?php
    $jj=$_POST["jj"];
    $mm=$_POST["mm"];
    $aa=$_POST["aa"];
    $jj_valid = false;
    $mm_valid = false;
    $aa_valid = false;
    //traitement des mois
    if($mm >= 1 && $mm <= 31){
        $mm_valid = true;
    }
    // traitement des années
    if($aa >= 1 && $aa <= 2019){
        $aa_valid = true;
    }
    //traitement des jours 
    if($jj >= 1 && $jj <= 31){
        //cas particulier de fevrier en année bisextile
        if(($mm == 2) && ($aa % 4 == 0) && ($aa % 100 != 0)){
            if($jj >= 1 && $jj <= 29){
                $jj_valid = true;
            }else if($jj >= 1 && $jj <= 28){
                $jj_valid = false;
            }
        }
        $jj_valid = true;
    }
    if(($jj_valid == true) && ($mm_valid == true) && ($aa_valid == true)){
        $sMessage="La date ".$jj."/".$mm."/".$aa."Est correct.";
    }else{
        $sMessage="La date que vous avez saisie est incorrect.";
    }
?>