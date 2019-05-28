function ex_3_5(){
    var user_nb = window.prompt("Saisir un nombre: ");
    console.log(user_nb);
    var user_nb_bis = window.prompt("Saisir un deuxieme nombre: ");
    console.log(user_nb_bis)
    if((user_nb > 0 && user_nb_bis > 0) || (user_nb < 0 && user_nb_bis < 0)){
        document.getElementById("result_3_5").innerHTML = "Irma prédit que le produit de vos deux nombres est positif ";
    }else if((user_nb > 0 && user_nb_bis < 0) || (user_nb < 0 && user_nb_bis > 0)){
        document.getElementById("result_3_5").innerHTML = "Irma prédit que le produit de vos deux nombres est négatif ";
    }else if((user_nb == 0) || (user_nb_bis == 0)){
        document.getElementById("result_3_5").innerHTML = "Irma prédit que le produit de vos deux nombres est null ";
    }else{
        document.getElementById("result_3_5").innerHTML = "Erreur de saisie. Votre maison s'auto-détruira dans 60jours !";
    }
} 

function ex_3_5_jquery(){
    var user_nb = window.prompt("Saisir un nombre: ");
    var user_nb_bis = window.prompt("Saisir un deuxieme nombre: ");
    if((user_nb > 0 && user_nb_bis > 0) || (user_nb < 0 && user_nb_bis < 0)){
        $("#result_3_5_jquery").html("Irma prédit que le produit de vos deux nombres est positif ");
    }else if((user_nb > 0 && user_nb_bis < 0) || (user_nb < 0 && user_nb_bis > 0)){
        $("#result_3_5_jquery").html("Irma prédit que le produit de vos deux nombres est negatif ");
    }else if((user_nb == 0) || (user_nb_bis == 0)){
        $("#result_3_5_jquery").html("Irma prédit que le produit de vos deux nombres est null ");
    }else{
        $("#result_3_5_jquery").html("Erreur de saisie. Vous nous devez 35 000 euros!");
    }
}
