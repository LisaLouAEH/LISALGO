<?php

// // 0. definir la valeur max de la taille du tableau
// $iTailleTab = 9;
// // 1. verifier que $tab_note n'existe pas sinon le creer
// if(isset($_POST["tab_note"])){
//     $tab_note = $_POST["tab_note"];
//     $tab_note = explode(" ", $tab_note);
//     // $tab_note = explode(" ", 0);
// }else{
//     $tab_note = array("table de note");
// }
// //2. récuperer et ajouter la valeur de $sNote au tableau existant
// if(isset($_POST["note"])){
//     $sNote=$_POST["note"];
//     if(count($tab_note) < 9){
//         array_push($tab_note, $sNote);
//     }else{
//         $sMessage = implode(",", $tab_note);
//     }
// }
// if(isset($_POST["note"])){
//     $sNote=$_POST["note"];
//     array_push($tab_note, $sNote);
//     $sMessage = implode(" ", $tab_note); 
// }
if(isset($_POST["note1"])){
    $tab_note = array("table de note");
    for($i = 1; $i <= 9; $i++){
        array_push($tab_note, $_POST["note".$i]);
    }
    $sMessage = implode(",", $tab_note);
}
    require "ex_6_3.html"; 
?>