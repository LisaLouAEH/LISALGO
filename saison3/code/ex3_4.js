function ex_3_4(){
    var user_nb = window.prompt("Saisir un nombre: ");
    console.log(user_nb);
    if(user_nb > 0 ){
        document.getElementById("result_3_4").innerHTML = "votre nombre est positif ";
    }else if(user_nb < 0){
        document.getElementById("result_3_4").innerHTML = "votre nombre est négatif ";
    }else if(user_nb == 0){
        document.getElementById("result_3_4").innerHTML = "votre nombre est null ";
    }else{
        document.getElementById("result_3_4").innerHTML = "Erreur de saisie. Votre maison s'auto-détruira dans 60jours !";
    }
}

function ex_3_4_jquery(){
    var user_nb = window.prompt("Saisir un nombre: ");
    if(user_nb > 0){
        $("#result_3_4_jquery").html("votre nombre est positif ");
    }else if(user_nb < 0){
        $("#result_3_4_jquery").html("votre nombre est negatif ");
    }else if(user_nb == 0){
        $("#result_3_4_jquery").html("votre nombre est null ");
    }else{
        $("#result_3_4_jquery").html("Erreur de saisie. Vous nous devez 35 000 euros!");
    }
}
