function ex_4_4(){
    var nb = parseInt(window.prompt("saisir un nombre de copie pour votre document:"));
    var nb_promo;  
    var nb_audela; 
    var total;
    if (nb < 10){
        total = nb * 0.10;
    }else if((nb > 10) && (nb <= 30)){
        nb_promo = nb - 10;
        total = 1 + (nb_promo * 0.09);
    }else{
        nb_audela = (nb - 10) - 20;
        total = 2.8 + (nb_audela * 0.08);
    }
    document.getElementById("result_4_4").innerHTML="Votre facture s'élève à " + total + " euros pour " + nb + "copies.";
}

function ex_4_4_jquery(){
    var nb = parseInt(window.prompt("saisir un nombre de copie pour votre document:"));
    var nb_promo;  
    var nb_audela; 
    var total;
    if (nb < 10){
        total = nb * 0.10;
    }else if((nb > 10) && (nb <= 30)){
        nb_promo = nb - 10;
        total = 1 + (nb_promo * 0.09);
    }else{
        nb_audela = (nb - 10) - 20;
        total = 2.8 + (nb_audela * 0.08);
    }
    $("#result_4_4_jquery").html("Votre facture s'élève à " + total + " euros pour " + nb + "copies.");
}
