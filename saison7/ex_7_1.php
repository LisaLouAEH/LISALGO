<?php
$tBool = array();
$bConsecutif = "Oui"; 
// genere un input text pour la premiere valeur
$input_saisie = "<input type=text name='val' placeholder='Saisir la première valeur'>";
// pour saisir la valeur suivante, REMPLACE $input_saisie
$input_val_suivante = '<input type="text" name="input_val_suivante" placeholder="Saisir une autre valeur ou --> v pour arreter.">';
    if(isset($_POST["sTableau"])){
        // NB --> quand tval vient du HTML c'est au format string !!!
        $tTableau=explode(" ", $_POST["sTableau"]);
        // complete tableau
        if(isset($_POST["input_val_suivante"])){
            if($_POST["input_val_suivante"] != 'v'){
                array_push($tTableau, $_POST["input_val_suivante"]);
            }else{
                var_dump("Le tableau est complet");
                // La saisie est terminée on a notre tableau de valeur
                // POUR i <-- 0 à tTableau
                for($i = 0; $i < count($tTableau); $i++){
                    var_dump("je complete le tableau de booleens");
                    // SI(tTableau[i-1] + 1 == tTableau[i])
                    if($tTableau[$i-1] + 1 == $tTableau[$i]){
                        array_push($tBool, "true");
                        var_dump($tBool);
                    }else{
                        array_push($tBool, "false");
                        $bConsecutif = "non";
                        var_dump($tBool);
                    }
                }
            }
        }

        // reformate le tableau en string pour le renvoyer vers HTML
        $sTableau=implode(" ", $tTableau);
        $sBool = implode(" | ", $tBool );
        $sMessage = $sTableau."<br> tableau bool = [".$sBool."]"."<br> Consécutif ? --> ".$bConsecutif;
    }
    if(isset($_POST["val"])){
        // verifie qu'on ne veux pas cesser la saisie
        if($_POST["val"] != 'v'){
            // Conserve la premiere valeur au format string 
            // puisqu'elle va etre directement renvoyée au HTML
            $sTableau = $_POST["val"];
        } 
    } 
include("ex_7_1.html"); 
?>