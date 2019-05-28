function ex_3_2(){
    var user_nb = window.prompt("Saisir un nombre: ");
    console.log(user_nb);
    var user_nb_bis = window.prompt("Saisir un deuxieme nombre: ");
    console.log(user_nb_bis)
    if((user_nb > 0 && user_nb_bis > 0) || (user_nb < 0 && user_nb_bis < 0)){
        document.getElementById("result_3_2").innerHTML = "Irma prédit que le produit de vos deux nombres est positif ";
    }else if((user_nb > 0 && user_nb_bis < 0) || (user_nb < 0 && user_nb_bis > 0)){
        document.getElementById("result_3_2").innerHTML = "Irma prédit que le produit de vos deux nombres est négatif ";
    }else{
        document.getElementById("result_3_2").innerHTML = "Erreur de saisie. Votre maison s'auto-détruira dans 60jours !";
    }
}

function ex_3_2_jquery(){
    var user_nb = window.prompt("Saisir un nombre: ");
    var user_nb_bis = window.prompt("Saisir un deuxieme nombre: ");
    if((user_nb > 0 && user_nb_bis > 0) || (user_nb < 0 && user_nb_bis < 0)){
        $("#result_3_2_jquery").html("Irma prédit que le produit de vos deux nombres est positif ");
    }else if((user_nb > 0 && user_nb_bis < 0) || (user_nb < 0 && user_nb_bis > 0)){
        $("#result_3_2_jquery").html("Irma prédit que le produit de vos deux nombres est negatif ");
    }else{
        $("#result_3_2_jquery").html("Erreur de saisie. Vous nous devez 35 000 euros!");
    }
}
