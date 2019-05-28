<?php 
    if(isset($_POST["bouton"])){
        $grille = array();
        for($ligne = 0; $ligne < 6; $ligne++){
            $grille[$ligne] = array();
            for($colone = 0; $colone < 13; $colone++){
                if($colone == 12){
                    $grille[$ligne][$colone] = "o <br>";
                }else{
                    $grille[$ligne][$colone] = "o";
                }
            }
        }
        $sMessage= "Grille 6/13 <br>";
        for($i = 0; $i < 6; $i++){
            $sMessage = $sMessage.implode(" ", $grille[$i]);
        }
    }
    include("ex_8_1.html"); 
?>