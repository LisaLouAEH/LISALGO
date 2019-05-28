<?php
    $nb=$_POST["nb"];
    if ($nb < 10){
        $total = $nb * 0.10;
    }elseif(($nb > 10) && ($nb <= 30)){
        $nb_promo = $nb - 10;
        $total = 1 + ($nb_promo * 0.09);
    }else{
        $nb_audela = ($nb - 10) - 20;
        $total = 2.8 + ($nb_audela * 0.08);
    }
    $sMessage="Votre facture s'élève à {$total}euros pour {$nb} copies.";
?>