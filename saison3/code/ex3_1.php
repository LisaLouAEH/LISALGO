<?php
    $user_nb= $_POST["user_nb"];
    error_log("user_nb = " . $user_nb);
    if ($user_nb < "0") {
        $sMessage= "Votre nombre est negatif !";
    } elseif ($user_nb > "0") {
        $sMessage= "Votre nombre est positif !";
    } else {
        $sMessage= "T'a rien compris, bonne nuit !";
    }   
?>

