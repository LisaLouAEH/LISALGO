<?php 
    $user_nb= $_POST["user_nb"];
    error_log("user_nb = " . $user_nb);
    if ($user_nb > 0 ) {
        $sMessage= "votre nombre est positif ";
    }else if ($user_nb < 0 ) {
        $sMessage = "votre nombre est negatif ";
    }else if ($user_nb == 0 ) {
        $sMessage = "votre nombre est null ";
    }else{
        $sMessage= "Erreur de saisie. Votre maison s'auto-détruira dans 60jours !";
    }
?>