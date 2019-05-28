<?php 

if(isset($_POST["bouton"])){
    $iPosition=$_POST["iPosition"];
    $iIndex=$_POST["iIndex"];
    $iNombre=$_POST["iNombre"];
    $iGrandNombre=$_POST["iGrandNombre"];
    if($iPosition == 1){
        $iGrandNombre = $iNombre;
    }
    if($iNombre > $iGrandNombre){
        $iGrandNombre = $iNombre;
        $iIndex = $iPosition;
    }
    if($iPosition == 5){
        $sMessage = "Le plus grand nombre est ".$iGrandNombre." en position n°".$iIndex;
    }
    $iPosition++;
}
    include("ex_5_8.html");

    
    
?>