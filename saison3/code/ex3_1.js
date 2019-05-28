function ex_3_1(){
    var user_nb = window.prompt("Saisir un nombre: ");
    if(user_nb > 0){
        document.getElementById("result_3_1").innerHTML = "votre nombre est positif!";
    }else if(user_nb < 0){
        document.getElementById("result_3_1").innerHTML = "votre nombre est negatif!";
    }else{
        document.getElementById("result_3_1").innerHTML = "Erreur de saisie. Votre maison s'auto-détruira dans 60jours !"
    }
}

function ex_3_1_jquery(){
    var user_nb = window.prompt("Saisir un nombre: ");
    if(user_nb > 0){
        $("#result_3_1_jquery").html("votre nombre est positif!");
    }else if(user_nb < 0){
        $("#result_3_1_jquery").html("votre nombre est negatif!");
    }else{
        $("#result_3_1_jquery").html("Erreur de saisie. Vous nous devez 35 000 euros!");
    }
}
