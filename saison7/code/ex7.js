
/* *************[ 7.1 ]**************** */
function ex_7_1(){
    var saisie = parseInt(window.prompt("Saisir un nombre a ranger dans le tableau ou 'v' pour arreter la saisie"));
    var tableau = [];
    var tBool = [];
    var bConsecutif;
    var i = 0;
    while(saisie != "v"){
        // ***ranger le tableau***
        if(i == 0){
            tableau[0] = saisie;
        // si saisie < la dernière valeure saisie
        }else if(saisie < tableau[i - 1]){
            // tableau[j] prends la valeur la plus petite et décalle le reste
            for(var j = 0; j < tableau.length; j++){
                console.log("ici commence le retour en arriere j= "+j);
                // tableau[j] prends la valeur la plus petite et décalle le reste
                if(saisie <= tableau[j]){
                    tableau.splice(j, 0, saisie);
                    break;
                }
            } 
            console.log("aprés tableau.splice(j, 0, saisie) tableau = [ "+tableau+"]<br>");
        }else{
            tableau.push(saisie);
            console.log("------> tableau aprés ajout = "+tableau);
        }
        // ***verifier la consécutivité***
        if(i > 0){
            if(tableau[i-1] + 1 == tableau[i]){
                tBool.push(true);
                bConsecutif = "oui";
            }else{
                tBool.push(false);
                bConsecutif = "non";
            }
            console.log("tableau de bool = "+tBool)
        }
        i++;
        saisie = window.prompt("Saisir un nombre a ranger dans le tableau ou 'v' pour arreter la saisie");
    }
    console.log("on est sortie du while principal");
    document.getElementById("result_7_1").innerHTML=" | "+tableau+" | est consécutif ? reponse = "+bConsecutif;
}

function ex_7_1_jquery(){
var saisie = parseInt(window.prompt("Saisir un nombre a ranger dans le tableau ou 'v' pour arreter la saisie"));
var tableau = [];
var tBool = [];
var bConsecutif;
var i = 0;
    while(saisie != "v"){
        // ***ranger le tableau***
        if(i == 0){
            tableau[0] = saisie;
        // si saisie < la dernière valeure saisie
        }else if(saisie < tableau[i - 1]){
            // tableau[j] prends la valeur la plus petite et décalle le reste
            for(var j = 0; j < tableau.length; j++){
                console.log("ici commence le retour en arriere j= "+j);
                // tableau[j] prends la valeur la plus petite et décalle le reste
                if(saisie <= tableau[j]){
                    tableau.splice(j, 0, saisie);
                    break;
                }
            } 
            console.log("aprés tableau.splice(j, 0, saisie) tableau = [ "+tableau+"]<br>");
        }else{
            tableau.push(saisie);
            console.log("------> tableau aprés ajout = "+tableau);
        }
        // ***verifier la consécutivité***
        if(i > 0){
            if(tableau[i-1] + 1 == tableau[i]){
                tBool.push(true);
                bConsecutif = "oui";
            }else{
                tBool.push(false);
                bConsecutif = "non";
            }
            console.log("tableau de bool = "+tBool)
        }
        i++;
        saisie = window.prompt("Saisir un nombre a ranger dans le tableau ou 'v' pour arreter la saisie");
    }
    $("#result_7_1_jquery").html(" | "+tableau+" | est consécutif ? reponse = "+bConsecutif);
}
/* *********************************** */
/* *************[ 7.4 ]**************** */
function ex_7_4(){
    var valeur = window.prompt("saisir une valeur pour remplir le tableau ou taper 'v' pour arreter.");
    var tableau = [];
    while(valeur != "v"){
        tableau.push(valeur);
        valeur = window.prompt("autres valeur ou 'v' pour arreter.");
    }
    console.log("si le tableau est complet il ressemble a ca: "+tableau);
    var index = parseInt(window.prompt("Veuillez saisir l'index de la valeur a effacer"));
    if(index >= 0 && index <= tableau.length){
        tableau.splice(index, 1);
    }
    document.getElementById("result_7_4").innerHTML="votre tableau sans "+index+" : "+tableau;
}

function ex_7_4_jquery(){
    var valeur = window.prompt("saisir une valeur pour remplir le tableau ou taper 'v' pour arreter.");
    var tableau = [];
    while(valeur != "v"){
        tableau.push(valeur);
        valeur = window.prompt("autres valeur ou 'v' pour arreter.");
    }
    var index = parseInt(window.prompt("Veuillez saisir l'index de la valeur a effacer"));
    if(index >= 0 && index <= tableau.length){
        tableau.splice(index, 1);
    }
    $("#result_7_4_jquery").html("votre tableau sans "+index+" : "+tableau);
}
/* *********************************** */
/* *************[ 7.5 ]**************** */
function ex_7_5(){
    var dico = ["Abricot", "aubergine", "banane", "carotte", "datte", "endive", "feves", "fraise", "poireau", "kiwi"];
    console.log(dico);
    var saisie = window.prompt("chercher un mot dans le dico nature : ").toLowerCase();
    console.log(saisie);
    var bCorrespondance = false;
    for(var i = 0; i <= dico.length; i++){
        console.log(dico[i]);
        if(dico[i] == saisie){
            document.getElementById("result_7_5").innerHTML="une correspondance en position n°"+i+" pour << "+dico[i]+" >>";
            bCorrespondance = true;
        }
    }
    if(bCorrespondance == false){
        document.getElementById("result_7_5").innerHTML="aucune correspondance pour << "+saisie+" >>";
    }
}

function ex_7_5_jquery(){
    var dico = ["Abricot", "banane", "carotte", "datte", "endive", "feves"];
    console.log(dico);
    var saisie = window.prompt("chercher un mot dans le dico nature : ").toLowerCase();
    console.log(saisie);
    var bCorrespondance = false;
    for(var i = 0; i <= dico.length; i++){
        console.log(dico[i]);
        if(dico[i] == saisie){
            $("#result_7_5_jquery").html("une correspondance en position n°"+i+" pour << "+dico[i]+" >>");
            bCorrespondance = true;
        }
    }
    if(bCorrespondance == false){
        $("#result_7_5_jquery").html("aucune correspondance pour << "+saisie+" >>");
    }
}
/* *********************************** */
/* *************[ 7.7 ]**************** */
function ex_7_7(){
    var tableau1 = [1, 3, 5];
    var tableau2 = [2, 4, 6, 7];
    var tFusion = [];
    
    if(tableau1.length < tableau2.length){
        for(var i = 0; i < tableau1.length; i++){
            if(tableau1[i] <= tableau2[i]){
                tFusion.push(tableau1[i], tableau2[i]);
            }else {
                tFusion.push(tableau2[i], tableau1[i]);
            }
        }
        for(i = tableau1.length; i < tableau2.length; i++){
            tFusion.push(tableau2[i]);
        }
    }else if(tableau1.length > tableau2.length){
        for(var i = 0; i < tableau2.length; i++){
            if(tableau1[i] <= tableau2[i]){
                tFusion.push(tableau1[i], tableau2[i]);
            }else {
                tFusion.push(tableau2[i], tableau1[i]);
            }
        }
        for(i = tableau2.length; i < tableau1.length; i++){
            tFusion.push(tableau1[i]);
        }
    }else{
        for(var i = 0; i < tableau2.length; i++){
            if(tableau1[i] <= tableau2[i]){
                tFusion.push(tableau1[i], tableau2[i]);
            }else {
                tFusion.push(tableau2[i], tableau1[i]);
            }
        }
    }
    document.getElementById("result_7_7").innerHTML="tFusion = [ "+tFusion+" ]";
}

function ex_7_7_jquery(){
    var tableau1 = [1, 3, 5];
    var tableau2 = [2, 4, 6, 8, 9];
    var tFusion = [];
    if(tableau1.length < tableau2.length){
        for(var i = 0; i < tableau1.length; i++){
            if(tableau1[i] <= tableau2[i]){
                tFusion.push(tableau1[i], tableau2[i]);
            }else {
                tFusion.push(tableau2[i], tableau1[i]);
            }
        }
        for(i = tableau1.length; i < tableau2.length; i++){
            tFusion.push(tableau2[i]);
        }
    }else if(tableau1.length > tableau2.length){
        for(var i = 0; i < tableau2.length; i++){
            if(tableau1[i] <= tableau2[i]){
                tFusion.push(tableau1[i], tableau2[i]);
            }else {
                tFusion.push(tableau2[i], tableau1[i]);
            }
        }
        for(i = tableau2.length; i < tableau1.length; i++){
            tFusion.push(tableau1[i]);
        }
    }else{
        for(var i = 0; i < tableau2.length; i++){
            if(tableau1[i] <= tableau2[i]){
                tFusion.push(tableau1[i], tableau2[i]);
            }else {
                tFusion.push(tableau2[i], tableau1[i]);
            }
        }
    }
    $("#result_7_7_jquery").html("tFusion = [ "+tFusion+" ]");
    
}
/* *********************************** */