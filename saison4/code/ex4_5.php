<?php
    $age=$_POST["age"];
    $genre=$_POST["genre"];
    if((($genre = "h") && ($age > 20)) || ($genre = "f") && (($age >= 18) && ($age <= 35))){
        $sMessage="Ce toon est imposable à Toon\'s city";
    }else{
        $sMessage="Ce toon n\'est  pas imposable à Toon\'s city";
    }
?>