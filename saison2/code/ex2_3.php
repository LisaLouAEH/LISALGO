<?php
    $product_ht= $_POST["product_ht_php"];
    error_log("product_ht_php = " . $product_ht);
    $product_nb= $_POST["product_nb_php"];
    error_log("product_nb_php = " . $product_nb);
    $tva_percent= $_POST["tva_percent_php"];
    error_log("tva_percent_php = " . $tva_percent);
    $tva_percent= $tva_percent/100;
    $TOTAL = $product_nb * $product_ht * (1+$tva_percent);
    $sMessage= "Le total de votre facture s'élève à ".$TOTAL."euros, pour ".$product_nb." articles.";
      
?>
