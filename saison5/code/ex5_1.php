<?php
$mystery_nb = 2;   
$nb=$_POST["nb"];
if($nb == $mystery_nb){
    $sMessage= "Bravo !";
}else{
    $sMessage="Perdu ! Essaye encore";
}
?>