function ex_4_3(){
    var heure = parseInt(window.prompt("Saisir une heure (ex: 12): "));
    var minute = parseInt(window.prompt("Saisir les minutes (ex: 36): "));
    var seconde = parseInt(window.prompt("Saisir les secondes (ex: 28): "));
    if(((heure < 23) && (minute < 59)) && (seconde < 59)){
        seconde ++;
    }else if(((heure < 23) && (minute < 59)) && (seconde == 59)){
        seconde = 0;
        minute++;
    }else if(((heure < 23) && (minute == 59)) && (seconde == 59)){
        seconde = 0;
        minute = 0;
        heure++;
    }else if(((heure == 23) && (minute == 59)) && (seconde == 59)){
        seconde = 0;
        minute = 0;
        heure = 0;
    }else{
        document.getElementById("result_4_2").innerHTML="erreur !";
    };
    if(heure < 10){
        heure = "0"+heure;
    };
    if(minute < 10){
        minute = "0"+minute;
    };
    if(seconde < 10){
        seconde = "0"+seconde;
    };
    document.getElementById("result_4_3").innerHTML="Dans une seconde, il sera " + heure + "heure(s), " + minute + "minute(s) et " + seconde + "seconde(s).";
}

function ex_4_3_jquery(){
    var heure = parseInt(window.prompt("Saisir une heure (ex: 12): "));
    var minute = parseInt(window.prompt("Saisir les minutes (ex: 36): "));
    var seconde = parseInt(window.prompt("Saisir les secondes (ex: 28): "));
    if(((heure < 23) && (minute < 59)) && (seconde < 59)){
        seconde ++;
    }else if(((heure < 23) && (minute < 59)) && (seconde = 59)){
        seconde = 0;
        minute++;
    }else if(((heure < 23) && (minute = 59)) && (seconde = 59)){
        seconde = 0;
        minute = 0;
        heure++;
    }else if(((heure = 23) && (minute = 59)) && (seconde = 59)){
        seconde = 0;
        minute = 0;
        heure = 0;
    }else{
        $("#result_4_2_jquery").html("erreur !");
    }
    if(heure < 10){
        heure = "0"+heure;
    };
    if(minute < 10){
        minute = "0"+minute;
    };
    if(seconde < 10){
        seconde = "0"+seconde;
    };
    $("#result_4_3_jquery").html("Dans une seconde, il sera " + heure + "heure(s), " + minute + "minute(s) et " + seconde + "seconde(s).");
}
