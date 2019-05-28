<?php 
    $iRest = 0;
    $iNombreDix = 0;
    $iNombreCinq = 0;
    $iNombrePiece = 0;
    // composition du panier a chaque input
    if(isset($_POST["bouton"])){
        $iPrix=$_POST["iPrix"];
        $iPanier=$_POST["iPanier"];
        // si la saisie est 'v' on sort l'affichage
        if($iPrix == 'v'){
            $sFacture = "Vous nous devez ".$iPanier." euros. <br>";
        // sinon on remplit le panier
        }else{
            $iPanier = $_POST["iPanier"] + $iPrix;
        }
    }
    // traitement de la monaie
    if(isset($_POST["valider"])){
        $iReglement=$_POST["iReglement"];
        $iPanier=$_POST["iPanier"];
        $iRest = $iReglement - $iPanier;
        echo ($iRest);
        //calcul la monaie uniquement si il y a une différence a rendre
        if($iRest >= 1){
            if($iRest%10 > 0){
                $iNombreDix = ($iRest - $iRest%10) / 10;
                $iRest= $iRest%10;
            }else{
                $iNombreDix = $iRest / 10;
                $iRest = 0;
            }
            if(($iRest % 5) > 0){
                $iNombreCinq = ($iRest - $iRest%5) / 5;
                $iRest = $iRest % 5;
            }else{
                $iNombreCinq = $iRest / 5;
                $iRest = 0;
            }
            $iNombrePiece = $iRest;
        }
        $sMonnaie = "nous vous devons ".$iNombreDix
        ." billets de 10 euros, ".$iNombreCinq
        ." billets de 5 euros et ".$iNombrePiece
        ." pieces de 1 euros";
    }
    include("ex_5_10.html");  
?>