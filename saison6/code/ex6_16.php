<?php
    if(isset($_POST["tRandom"])){
        $tRandom = array();
        $tResultat = array();
        for($i = 0; $i < 100; $i++){
            array_push($tRandom, rand(0, 10));
            if($tRandom[$i-1] + 1 == $tRandom[$i]){
                array_push($tResultat, "True");
            }else{
                array_push($tResultat, "False");
            }
        }
        $tRandom = implode(" || ", $tRandom);
        $tResultat = implode(" || -->", $tResultat);
        $sMessage = "Le tableau random: <br>".$tRandom."<br>Le tableau bool: <br>".$tResultat;
    }
?>
