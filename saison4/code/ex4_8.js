function ex_4_8(){
    var jj = parseInt(window.prompt("saisir un n° de jour: "));
    var mm = parseInt(window.prompt("saisir un n° de mois: "));
    var aa = parseInt(window.prompt("saisir une année: "));
    var jj_valid = false;
    var mm_valid = false;
    var aa_valid = false;
    //traitement des mois
    if(mm >= 1 && mm <= 31){
        mm_valid = true;
    }
    // traitement des années
    if(aa >= 1 && aa <= 2019){
        aa_valid = true;
    }
    //traitement des jours 
    if(jj >= 1 && jj <= 31){
        //cas particulier de fevrier en année bisextile
        if((mm == 2) && (aa % 4 == 0) && (aa % 100 != 0)){
            if(jj >= 1 && jj <= 29){
                jj_valid = true;
            }else if(jj >= 1 && jj <= 28){
                jj_valid = false;
            }
        }
        jj_valid = true;
    }
    if((jj_valid == true) && (mm_valid == true) && (aa_valid == true)){
        document.getElementById("result_4_8").innerHTML="La date "+ jj + "/" + mm + "/" + aa + "Est correct.";
    }else{
        document.getElementById("result_4_8").innerHTML="La date que vous avez saisie est incorrect.";
    }
    
}

function ex_4_8_jquery(){
    var jj = parseInt(window.prompt("saisir un n° de jour: "));
    var mm = parseInt(window.prompt("saisir un n° de mois: "));
    var aa = parseInt(window.prompt("saisir une année: "));
    var jj_valid = false;
    var mm_valid = false;
    var aa_valid = false;
    //traitement des mois
    if(mm >= 1 && mm <= 31){
        mm_valid = true;
    }
    // traitement des années
    if(aa >= 1 && aa <= 2019){
        aa_valid = true;
    }
    //traitement des jours 
    if(jj >= 1 && jj <= 31){
        //cas particulier de fevrier en année bisextile
        if((mm == 2) && (aa % 4 == 0) && (aa % 100 != 0)){
            if(jj >= 1 && jj <= 29){
                jj_valid = true;
            }else if(jj >= 1 && jj <= 28){
                jj_valid = false;
            }
        }
        jj_valid = true;
    }
    if((jj_valid == true) && (mm_valid == true) && (aa_valid == true)){
        $("#result_4_8_jquery").html("La date "+ jj + "/" + mm + "/" + aa + "Est correct.");
    }else{
        $("#result_4_8_jquery").html("La date que vous avez saisie est incorrect.");
    }            
}
