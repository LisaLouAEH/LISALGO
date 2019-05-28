<?php 
$bCorrespondance = false;
$tDico = array("Abricot", "banane", "carotte", "datte", "endive", "feve", "fraise", "haricot", "peche", "kiwi");
if(isset($_POST["saisie"])){
    $saisie = $_POST["saisie"];
    for($i = 0; $i < count($tDico); $i++){
        if($tDico[$i] == $saisie){
            $bCorrespondance = true;
            $sMessage = "Nous avons trouvé une correspondance en position ".$i." = ".$tDico[$i];
        }
    }
    if($bCorrespondance == false){
        $sMessage = "Votre saisie ".$saisie." ne correspond a rien dans notre tableau. deso!"; 
    }
}
include("ex_7_5.html"); 
?>