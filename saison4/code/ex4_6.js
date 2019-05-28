function ex_4_6(){
    var c1 = parseInt(window.prompt("saisir le score(%) du candidat n°1 : "));
    var c2 = parseInt(window.prompt("saisir le score(%) du candidat n°2 : "));
    var c3 = parseInt(window.prompt("saisir le score(%) du candidat n°3 : "));
    var c4 = parseInt(window.prompt("saisir le score(%) du candidat n°4 : "));
    var other = c2 + c3 + c4;
    if((c1 + other) == 100){
        if(c1 > 50){
            document.getElementById("result_4_6").innerHTML="le toon c1 à gagné au premier tour";
        }else if(c1 > (other/2)){
            document.getElementById("result_4_6").innerHTML="le toon c1 est en position favorable pour le second tour";
        }else if( c1 < 12.5 || c2 > 50 || c3 > 50 || c4 > 50 ){
            document.getElementById("result_4_6").innerHTML="Le toon c1 a perdu";
        }else{
            document.getElementById("result_4_6").innerHTML="Le toon c1 est en position neutre ou défavorable pour le second tour";
        }
    }else{
        document.getElementById("result_4_6").innerHTML="les scores que vous avez saisie sont impossibles";
    }  
    
}

function ex_4_6_jquery(){
    var c1 = parseInt(window.prompt("saisir le score(%) du candidat n°1 : "));
    var c2 = parseInt(window.prompt("saisir le score(%) du candidat n°2 : "));
    var c3 = parseInt(window.prompt("saisir le score(%) du candidat n°3 : "));
    var c4 = parseInt(window.prompt("saisir le score(%) du candidat n°4 : "));
    var other = c2 + c3 + c4;
    if((c1 + other) == 100){
        if(c1 > 50){
            $("#result_4_6_jquery").html("le toon c1 à gagné au premier tour");
        }else if(c1 >= (other/2)){
            $("#result_4_6_jquery").html("le toon c1 est en position favorable pour le second tour");
        }else if( c1 < 12.5 || c2 > 50 || c3 > 50 || c4 > 50 ){
            $("#result_4_6_jquery").html("Le toon c1 a perdu");
        }else{
            $("#result_4_6_jquery").html("Le toon c1 est en position neutre ou défavorable pour le second tour");
        }
    }else{
        $("#result_4_6_jquery").html("les scores que vous avez saisie sont impossibles");
    }  
}
