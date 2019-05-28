<?php
    $mode = rand(1, 6);
    var_dump("mode = ".$mode);
    switch ($mode) {
        case 1:
            $Glup = rand(0, 2);
            break;
        case 2:
            $Glup = rand(-1, 1);
            break;
        case 3:
            $Glup = "1.".rand(35, 65);
            break;
        case 4:
            $Glup = rand(1, 6);
            break;
        case 5:
            $entier = rand(-10, 6);
            $decimal = rand(50, 100);
            $Glup = $entier;
            if($Glup == -10 || $Glup == 6){
                $Glup += ".".rand(0, 50);
            }else{
                $Glup += ".".rand(0, 100);
            }
            break;
        case 6:
            $Glup = rand(2, 12);
            break;
        default:
            var_dump("heu ...quelquechose c'est pas trés bien passé");
            break;
    }
    $sMessage = "Votre glup = ".$Glup;
include("ex_9_8.html"); 
?>