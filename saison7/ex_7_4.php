<?php 
// affiche les messages d'erreurs quand le reste ne s'exécute pas
ini_set('display_errors', 'on');
//--------------------------------------------------------------

    $input_saisie = "<input type=text name='val' placeholder='Saisir la première valeur'>";
    $input_val_suivante = '<input type="text" name="input_val_suivante" placeholder="Saisir une autre valeur ou v pour valider">';
    $input_indice = '<input type="text"name="input_indice" placeholder="Saisir le numero de case que vous voulez supprimer:">';
    $bEdit = false;

    if(isset($_POST["sTableau"])){

        // NB --> quand tval vient du HTML c'est au format string !!!
        $tTableau=explode(" ", $_POST["sTableau"]);

        // complete tableau
        if(isset($_POST["input_val_suivante"])){
            if($_POST["input_val_suivante"] != 'v'){
                array_push($tTableau, $_POST["input_val_suivante"]);
            }else{
                var_dump("Le tableau est complet");
                $bEdit = true;   
            }
        }

        // ecraser la case correspondante
        if(isset($_POST["input_indice"])){
            $iIndice = $_POST["input_indice"];
            array_splice($tTableau, $iIndice, 1);
        }

        // reformate le tableau en string pour le renvoyer vers HTML
        $sTableau=implode(" ", $tTableau);
        
        $sMessage = "Votre tableau ressemble à ca maintenant = [".$sTableau."]";

    }
    if(isset($_POST["val"])){
        // verifie qu'on ne veux pas cesser la saisie
        if($_POST["val"] != 'v'){
            // Conserve la premiere valeur au format string 
            // puisqu'elle va etre directement renvoyée au HTML
            $sTableau = $_POST["val"];
        } 
    } 



include("ex_7_4.html"); 
?>