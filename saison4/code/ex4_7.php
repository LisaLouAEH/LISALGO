<?php
    $age=$_POST["age"];
    $permis=$_POST["permis"];
    $accidents=$_POST["accidents"];
    $fidelite=$_POST["fidelite"];
    $level= 0;
    if($permis > 2){
        $level++;
    }
    if($permis >= 2){
        $level++;
    }
    if($accidents == 0){
        $level++;
    }
    if($fidelite >= 5){
        $level++;
    }
    if(($age < 25 && $accidents > 0) || (($age > 25 && $permis < 2) && ($accidents > 0)) || $accidents > 2){
        $level = 'no';
    }

    switch ($level) {
        case 'no':
            $sMessage="vous n'êtes éligible à aucune offre";
            break;
        case 0:
        case 1:
            $sMessage="Nous vous proposons la formule rouge! \n On va vous plumer!";
            break;
        case 2:
            $sMessage="Nous vous proposons la formule orange! \n Ca va vous couter cher mais pas trop..";
            break;
        case 3:
            $sMessage="Félicitation! \n vous allez faire des économies avec la formule verte!";
            break;
        case 4:
            $sMessage="Félicitation! Formule bleu!\n L'assurance gratuite !";
            break;
        default:
            echo 'something went wrong'; 
    }
?>