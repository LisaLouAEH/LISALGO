<?php
if(isset($_POST["li_init"]) && isset($_POST["col_init"])){
    if(isset($_POST["choix"])){
    // recuperer la position initial
        $li_init = $_POST["li_init"];
        $col_init = $_POST["col_init"];
        $choix = $_POST["choix"];

    // verifier la validité de la positon initiale
        if(($li_init >= 0 && $li_init <= 9) && ($col_init >= 0 && $col_init <= 9)){
            $sMessageChoix = "votre position est validée <br> <hr class='my-4'> Votre position initiale: <br>";
        }else{
            $sMessageChoix = "Echec critique, la position choisie est impossible";
        }

    // Creer grille si choix valide
        $grille = array();
        if($choix >= 0 && $choix <= 3){
            for($i = 0; $i < 10; $i++){
                $grille[$i] = array();
                for($j = 0; $j < 10; $j++){
                    if($i == $li_init && $j == $col_init){
                        $grille[$i][$j] = "<span style='color: #94FF4B'> [X] </span>";
                    }else{
                        $grille[$i][$j] = " [O] ";
                    }
                }
            }
        }

    // afficher grille initiale
        $sMessageGrilleInitiale = $sMessageChoix;
        for($i = 0; $i < count($grille); $i++){
            $sMessageGrilleInitiale = $sMessageGrilleInitiale.implode("   ", $grille[$i])."<br>";
        }

    // réinitialisation position initiale
        $grille[$li_init][$col_init] = "<span style='color: red'> [O] </span>";

    // traitzement du deplacement dans la creation d'une nouvelle grille
        $sMessageNouvelleGrille = "<hr class='my-4'> votre position aprés déplacement <br><br>";
        switch($choix){
            case 0:
                if($li_init == 0 || $col_init == 0){
                    $sMessageNouvelleGrille = "<hr class='my-4'>Le déplacement demandé est impossible: [".$li_init."][".$col_init."] pour déplacement n° ".$choix;
                }else{
                    $grille[$li_init -1][$col_init -1] = "<span style='color: #94FF4B'> [X] </span>";
                    for($i = 0; $i < count($grille); $i++){
                        $sMessageNouvelleGrille = $sMessageNouvelleGrille.implode("   ", $grille[$i])."<br>";
                    }
                }
                break;
            case 1:
                if($li_init == 0 || $col_init == 9){
                    $sMessageNouvelleGrille = "<hr class='my-4'>Le déplacement demandé est impossible: [".$li_init."][".$col_init."] pour déplacement n° ".$choix;
                }else{
                    $grille[$li_init -1][$col_init +1] = "<span style='color: #94FF4B'> [X] </span>";
                    for($i = 0; $i < count($grille); $i++){
                        $sMessageNouvelleGrille = $sMessageNouvelleGrille.implode("   ", $grille[$i])."<br>";
                    }
                }
                break;
            case 2:
                if($li_init == 9 || $col_init == 0){
                    $sMessageNouvelleGrille = "<hr class='my-4'>Le déplacement demandé est impossible: [".$li_init."][".$col_init."] pour déplacement n° ".$choix;
                }else{
                    $grille[$li_init +1][$col_init -1] = "<span style='color: #94FF4B'> [X] </span>";
                    for($i = 0; $i < count($grille); $i++){
                        $sMessageNouvelleGrille = $sMessageNouvelleGrille.implode("   ", $grille[$i])."<br>";
                    }
                }
                break;
            case 3:
                if($li_init == 9 || $col_init == 9){
                    $sMessageNouvelleGrille = "<hr class='my-4'>Le déplacement demandé est impossible: [".$li_init."][".$col_init."] pour déplacement n° ".$choix;
                }else{
                    $grille[$li_init +1][$col_init +1] = "<span style='color: #94FF4B'> [X] </span>";
                    for($i = 0; $i < count($grille); $i++){
                        $sMessageNouvelleGrille = $sMessageNouvelleGrille.implode("   ", $grille[$i])."<br>";
                    }
                }
                break;
        }
    }
}
include("ex_8_7.html");
?>