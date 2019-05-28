<?php 

if(isset($_POST["bouton"])){
    $iPosition=$_POST["iPosition"];
    $iIndex=$_POST["iIndex"];
    $iNombre=$_POST["iNombre"];
    $iGrandNombre=$_POST["iGrandNombre"];
    if($iNombre == 0){
        $sMessage = "Le plus grand nombre est ".$iGrandNombre." en position n°".$iIndex;
    }
    if($iNombre > $iGrandNombre){
        $iGrandNombre = $iNombre;
        $iIndex = $iPosition;
    }
    $iPosition++;
}
    include("ex_5_9.html");

    
    
?>