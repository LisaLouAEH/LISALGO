<?php 
    $user_nb= $_POST["user_nb"];
    error_log("user_nb = " . $user_nb);
    $user_nb_bis= $_POST["user_nb_bis"];
    error_log("user_nb_bis = " . $user_nb_bis);
    if (($user_nb > 0 && $user_nb_bis > 0) || ($user_nb < 0 && $user_nb_bis < 0)) {
        $sMessage= "Irma prédit que le produit de vos deux nombres est positif ";
    }else if (($user_nb > 0 && $user_nb_bis < 0) || ($user_nb < 0 && $user_nb_bis > 0)) {
        $sMessage = "Irma prédit que le produit de vos deux nombres est positif ";
    }else{
        $sMessage= "Erreur de saisie. Votre maison s'auto-détruira dans 60jours !";
    }
?>