<?php

    function find_nb($mystery_nb, $score, $nb) {
        // verifier la validité du nombre saisi dans la fonction 
        // au cas ou en cours il saisisse une valeur non conforme.
        if($nb >= 1 && $nb <= 100){
            $nb_valid = true;
        }else{
            $nb_valid = false;
        }
        // verifie que le nombre saisi est conforme avant de lancer le traitement
        if($nb_valid){
            if($nb == $mystery_nb){
                $result = "Bravo ! Vous avez trouvé en ".$score." tentatives!";
                session_unset();
                return $result;
            }else{
                if($nb > $mystery_nb){
                    return "plus petit !";
                }else{
                    return "Plus grand !";
                }
            }
        }
        
    }//ferme fonction
// ouvre une session 
session_start();
// recupere la précédente pour évite la réinit du random si il y a deja un random de sorti
if(empty($_SESSION['mystery_nb'])){
        $_SESSION['mystery_nb'] = mt_rand(1, 100);
}
// si pas de valeur a score en session init a 1 car 1 click = 1 tentative, 
// sinon incrémente puisque la victoire vide la session
if(empty($_SESSION['score'])){
    $_SESSION['score'] = 1;
}else{
    $_SESSION['score']++;
}

$sMessage = find_nb($_SESSION['mystery_nb'], $_SESSION['score'], $_POST['nb']);
?>