<?php 
    if(isset($_POST["note1"])){
        
        // stoquer les valeurs dans un tableau
        $tab_note = array("table de note");
        for($i = 1; $i <= 9; $i++){
            array_push($tab_note, $_POST["note".$i]);
        }
        $sMessage = implode(",", $tab_note);

        // Stocker la somme des valeurs dans une variable
        for($i = 1; $i <= 9; $i++){
            //verifie que les valeurs son numerique:
            if(is_numeric($tab_note[$i])){
                $sommeNote = $sommeNote + $tab_note[$i];
                 // Diviser la somme par la taille du tableau
                $moyenne = "La moyenne de la classe est : ".($sommeNote / 9)." sur 20";
            }else{
                $moyenne = "Les données saisies sont incorrects.";
            }
        }
    }
    require "ex_6_7.html"; 
?>