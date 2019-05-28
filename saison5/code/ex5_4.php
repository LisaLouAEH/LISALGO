<?php
    $nb = $_POST["nb"];
    $follow_nb = $nb + 10;
    $tab = array("Les 10 prochains nombres aprés ".$nb.":<br>");
    for ($i = 1; $i <= 10; $i++){
        $nb++;
        $tab[] = $nb."<br>";
    }
    // converti le tableau en chaine de char
    $sMessage = implode("\n", $tab);
?>