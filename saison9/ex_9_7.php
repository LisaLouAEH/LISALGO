<?php 

if(isset($_POST["saisie"])){
    if($_POST["saisie"] % 2 == 0){
        $sMessage = "ce nombre est pair";
    }else{
        $sMessage = "ce nombre est impair"; 
    }       
}

include("ex_9_7.html"); 
?>