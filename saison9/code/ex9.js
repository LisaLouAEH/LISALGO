/* *************[ 9.2 ]**************** */
function ex_9_2(){
    var saisie_string = window.prompt("Veuillez saisir quelquechose : ");
    var tab_str= saisie_string.split('');

    document.getElementById("result_9_2").innerHTML="votre saisie compte "+tab_str.length+" caractères.";
}

function ex_9_2_jquery(){
    var saisie_string = window.prompt("Veuillez saisir quelquechose : ");
    var tab_str= saisie_string.split('');

    $("#result_9_2_jquery").html("votre saisie compte "+tab_str.length+" caractères.");
}
/* *********************************** */
/* *************[ 9.3 ]**************** */
function ex_9_3(){
    var saisie_string = window.prompt("Veuillez saisir quelquechose : ");
    var tab_str= saisie_string.split(' ');

    document.getElementById("result_9_3").innerHTML="votre saisie compte "+tab_str.length+" mots.";
}

function ex_9_3_jquery(){
    var saisie_string = window.prompt("Veuillez saisir quelquechose : ");
    var tab_str= saisie_string.split(' ');
    $("#result_9_3_jquery").html("votre saisie compte "+tab_str.length+" mots.");
}
/* *********************************** */
/* *************[ 9.5 ]**************** */
function ex_9_5(){
    var saisie_string = window.prompt("Veuillez saisir une phrase svp: ");
    var tStr = saisie_string.split('');
    var index = window.prompt("choisir un numero d'index compris entre 0 et "+ tStr.length);

        for(var i = 0; i < tStr.length; i++){
            if(i == index){
                tStr.splice(index, 1);
            }
        };
    document.getElementById("result_9_5").innerHTML="votre saisie corrigée : <br>"+tStr.join('');
}

function ex_9_5_jquery(){
    var saisie_string = window.prompt("Veuillez saisir une phrase svp: ");
    var tStr = saisie_string.split('');
    var index = window.prompt("choisir un numero d'index compris entre 0 et "+ tStr.length);

        for(var i = 0; i < tStr.length; i++){
            if(i == index){
                tStr.splice(index, 1);
            }
        }
    $("#result_9_5_jquery").html("votre saisie corrigée : <br>"+tStr.join(''));
}
/* *********************************** */
/* *************[ 9.6 ]**************** */
function ex_9_6(){
    var saisie = window.prompt("Veuillez saisir une phrase a crypter: ");
    // la string devient tableau de char
    var tStr = saisie.split("");
    var message_crypte = "";
        for(var i = 0; i < saisie.length; i++){
            console.log(saisie.charAt(i)+" = "+ saisie.charCodeAt(i));
            // a chaque tour de boucle on stock la valeur ascii du char 
            // dans le tableau de char pour effctuer l'operation +1
            tStr[i] = saisie.charCodeAt(i) + 1;
            // puis dans nouvelle variable on place l'equivalence char 
            message_crypte += String.fromCharCode(tStr[i]);
        }
    document.getElementById("result_9_6").innerHTML="votre saisie d'origine : <br>"+saisie+" <br> une fois crypté : <br>"+message_crypte;
}

function ex_9_6_jquery(){
    var saisie = window.prompt("Veuillez saisir une phrase a crypter: ");
    var tStr = saisie.split("");
    var message_crypte = "";
        for(var i = 0; i < saisie.length; i++){
            console.log(saisie.charAt(i)+" = "+ saisie.charCodeAt(i));
            tStr[i] = saisie.charCodeAt(i) + 1;
            message_crypte += String.fromCharCode(tStr[i]);
        };
    $("#result_9_6_jquery").html("votre saisie d'origine : <br>"+saisie+" <br> une fois crypté : <br>"+message_crypte);
}
/* *********************************** */
/* *************[ 9.7 ]**************** */
function ex_9_7(){
    var saisie = parseInt(window.prompt("Veuillez saisir un entier pour savoir si il est pair: "));
    if(saisie % 2 == 0){
        document.getElementById("result_9_7").innerHTML="Ce nombre est pair";
    }else{
        document.getElementById("result_9_7").innerHTML="ce nombre est impair";
    }
}

function ex_9_7_jquery(){
    var saisie = parseInt(window.prompt("Veuillez saisir un entier pour savoir si il est pair: "));
    if(saisie % 2 == 0){
        $("#result_9_7_jquery").html("Ce nombre est pair");
    }else{
        $("#result_9_7_jquery").html("ce nombre est impair");
    }
}
/* *********************************** */
/* *************[ 9.8 ]**************** */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function getRandomFloatInclusive(min, max){
    return (Math.random() * (max - min) + min).toFixed(2);
}
function ex_9_8(){
    var mode = getRandomIntInclusive(1, 6);
    console.log("mode = "+mode);
    switch(mode){
        case 1:
            var Glup = getRandomIntInclusive(0, 2);
            break;
        case 2:
            var Glup = getRandomIntInclusive(-1, 1);
            break;
        case 3:
            var Glup = getRandomFloatInclusive(1.35, 1.65);
            break;
        case 4:
            var Glup = getRandomIntInclusive(1, 6);
            break;
        case 5:
            var Glup = getRandomFloatInclusive(-10.5, 6.5);
            break;
        case 6: 
            var Glup = getRandomIntInclusive(2, 12);
            break;
        default: 
            console.log("une erreur punaise");
    }
    console.log("glup = "+Glup);
    document.getElementById("result_9_8").innerHTML="la valeur de votre glup = "+Glup;
}

function ex_9_8_jquery(){
    var mode = getRandomIntInclusive(1, 6);
    console.log("mode = "+mode);
    switch(mode){
        case 1:
            var Glup = getRandomIntInclusive(0, 2);
            break;
        case 2:
            var Glup = getRandomIntInclusive(-1, 1);
            break;
        case 3:
            var Glup = getRandomFloatInclusive(1.35, 1.65);
            break;
        case 4:
            var Glup = getRandomIntInclusive(1, 6);
            break;
        case 5:
            var Glup = getRandomFloatInclusive(-10.5, 6.5);
            break;
        case 6: 
            var Glup = getRandomIntInclusive(2, 12);
            break;
        default: 
            console.log("une erreur punaise");
    }
    console.log("glup = "+Glup);
    $("#result_9_8_jquery").html("la valeur de votre glup = "+Glup);
}
/* *********************************** */