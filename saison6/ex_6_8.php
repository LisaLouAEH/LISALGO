<?php
// appellé si c'est le premier chargement de page pour initialiser le Nombre de case
$input= '<input type="text" name="iNombreCase" id="iNombreCase" placeholder= "saisir Le nombre de case">';
// verouille iNombreCase
if(isset($_POST["iNombreCase"])){
    $iNombreCase=$_POST["iNombreCase"];
}


//si une valeur est envoyée
if(isset($_POST["sValeur"])){
    // recupere les compteurs de positif, negatif, et null
    $iPositif = $_POST["iPositif"];
    $iNegatif = $_POST["iNegatif"];
    $iNull = $_POST["iNull"];
    //----------------------------------------------------
        //je stock la valeur
        $sValeur = $_POST["sValeur"];
        //--------------------------

        // traitement somme Negatif et positif
        if($sValeur > 0){
            $iPositif++;
        }else if($sValeur == 0){
            $iNull++;
        }else{
            $iNegatif++;
        }
        //------------------------------------

        // je créer un tableau vide a chaque tour de boucle
        $valeurTotale = array();
        // je recup l'iterateur
        $i=$_POST["i"];
        // tant que iterateur ne vaut pas inombre de case
        if($i < $iNombreCase){
            var_dump("proutt");
            // si une string est envoyée dans valeur totale
            if(isset($valeurTotale)){
                // je la transforme en tableau avant de la restocker dans valeurTotale
                $valeurTotale = explode(" ",$_POST["valeurTotale"]);
            }
            // j'ajoute la nouvelle valeur
            $valeurTotale[$i] = $sValeur;
            
            $i++;
            // $valeurTotale va partir sous forme de tableau
            $sMessage = $valeurTotale;
        }else{
            $sMessage2="C'est bong !!";
        }
        //--------------------------------------------------
}
    require "ex_6_8.html";
?>