<?php
if(isset($_POST["bouton"])){
    $iGrandNombre = 0;
    // pour l'affichage
    $iPostionLigne = 0;
    $iPositionColone = 0;
    // ----------------
    $grille = array();
    for($ligne = 0; $ligne < 12; $ligne++){
        $grille[$ligne] = array();
        for($colone = 0; $colone < 8; $colone++){
            $grille[$ligne][$colone] = rand(-50, 200);
            // pour regler le cas des negatifs
            if($ligne == 0 && $colone == 0){
                $iGrandNombre = $grille[$ligne][$colone];
            }
            if($iGrandNombre < $grille[$ligne][$colone]){
                $iGrandNombre = $grille[$ligne][$colone];
                $iPostionLigne = $ligne;
                $iPositionColone = $colone;
            }
        }
    }
    $sMessage= "Grille 6/13 <br>";
    for($i = 0; $i < 12; $i++){
        $sMessage = $sMessage.implode(" | ", $grille[$i])."<br>";
    }
    $sMessage = $sMessage."<br> Le plus grand Nombre est : ".$iGrandNombre." en position grille[".$iPostionLigne."][".$iPositionColone."]";
} 
include("ex_8_6.html");
?>