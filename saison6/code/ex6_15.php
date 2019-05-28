<?php
var_dump("heu... si tu me vois c'est que tu me cherche et si tu me cherche c'est que le reste du code marche pas. c'est balo !");
$iCompteTiTi = array(1000);
    if(isset($_POST["iAgeTiti"])){
        $iAgeTiti = $_POST["iAgeTiti"];
        for($i = 0; $i < 20; $i++){
            array_push($iCompteTiTi, ($iCompteTiTi[$i] + ($iCompteTiTi[$i] * 0.0275)));
        }
        $sMessage = "A ".$iAgeTiti." ans, Titi aura ".$iCompteTiTi[$iAgeTiti]." euros sur son compte. Merci Mamie [coeur]";
    }
?>