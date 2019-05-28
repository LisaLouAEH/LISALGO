<?php
$score= $_POST["score"];
$nb=$_POST["nb"]; 
    function boucle($mystery_nb, $nb){// ouvre fonction
        global $score;
        if($nb == $mystery_nb){
            $result = "Bravo ! Vous avez trouvé en ".$score." tentatives!";
            return $result;
        }else{
            if($nb > 20){
                $score++;
                return "plus petit !";
            }else if($nb < 10){
                $score++;
                return "Plus grand !";
            }else{
                $score++;
                return "Presque essaye encore";
            }
        }
        
    }//ferme fonction
$sMessage = boucle(11, $nb);
?>