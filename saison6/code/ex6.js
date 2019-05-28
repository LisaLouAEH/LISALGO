/* *************[ 6.1 ]**************** */
function ex_6_1(){
    var tab=[];
    for(i=0; i< 7; i++){
        tab.push(0);
    }
    document.getElementById("result_6_1").innerHTML=tab;
}

function ex_6_1_jquery(){
    var tab=[];
    for(i=0; i< 7; i++){
        tab.push(0);
    }
    $("#result_6_1_jquery").html(tab);
          
}

/* *********************************** */
/* *************[ 6.2 ]**************** */
function ex_6_2(){
    var a = "a ou A <br>", e = "e ou E <br>", i = "i ou I <br>", o = "o ou O <br>", u = "u ou U <br>", y = "y ou Y <br>";
    var tab = [a, e, i, o, u, y];
    document.getElementById("result_6_2").innerHTML=tab;
}
function ex_6_2_jquery(){
    var a = "a ou A <br>", e = "e ou E <br>", i = "i ou I <br>", o = "o ou O <br>", u = "u ou U <br>", y = "y ou Y <br>";
    var tab = [a, e, i, o, u, y];
    document.getElementById("result_6_2").innerHTML=tab;
    $("#result_6_2_jquery").html(tab);
}

/* *********************************** */
/* *************[ 6.3 ]**************** */
function ex_6_3(){
    var i = 0;
    var tab=[];
    while(i < 9){
        tab.push(window.prompt("saisir une note: ") + "<br>");
        i++;
    }
    document.getElementById("result_6_3").innerHTML=tab;
}
function ex_6_3_jquery(){
    var i = 0;
    var tab=[];
    while(i < 9){
        tab.push(window.prompt("saisir une note: ") + "<br>");
        i++;
    }
    $("#result_6_3_jquery").html(tab);
}

/* *********************************** */
/* *************[ 6.4 ]**************** */
function ex_6_4(){ 
    var Nb = [];
    for(var i = 0; i <= 5; i++){
        Nb.push(i*i+"<br>");
    }
    document.getElementById("result_6_4").innerHTML=Nb;
}
function ex_6_4_jquery(){
    var Nb = [];
    for(var i = 0; i <= 5; i++){
        Nb.push(i*i+"<br>");
    }
    $("#result_6_4_jquery").html(Nb);
}
/* *********************************** */
/* *************[ 6.5 ]**************** */
function ex_6_5(){ 
    console.log("tu ma trouvé");
    var N = [], i, k;
    N[0] = 1;
    for(var k = 1; k < 6; k++){
        N[k] = N[k-1] + 2 ;
        console.log("dans ce tour de boucle N[k] vaut: "+N[k]);
    }
    document.getElementById("result_6_5").innerHTML=N;
}
function ex_6_5_jquery(){
    var N = [];
    N[0] = 1 + "<br>";
    for(var i = 3; i <= 12; i+= 2){
        N[i] = i + "<br>" ;
        console.log(N);
    }
    $("#result_6_5_jquery").html(N);
}
/* *********************************** */
/* *************[ 6.6 ]**************** */
function ex_6_6(){ 
    var Suite = [];
    Suite[0] = 1;
    Suite[1] = 1;
    for(var i = 2; i < 7; i++){
        Suite[i] = Suite[i - 1] + Suite[i - 2] ;
        console.log("dans ce tour de boucle Suite[i] vaut: "+Suite[i]);
    }
    document.getElementById("result_6_6").innerHTML=Suite;
}
function ex_6_6_jquery(){
    var Suite = [];
    Suite[0] = 1;
    Suite[1] = 1;
    for(var i = 2; i < 7; i++){
        Suite[i] = Suite[i - 1] + Suite[i - 2] ;
        console.log("dans ce tour de boucle Suite[i] vaut: "+Suite[i]);
    }
    $("#result_6_6_jquery").html(Suite);
}
/* *********************************** */
/* *************[ 6.7 ]**************** */
function ex_6_7(){
    // stoquer les valeurs dans un tableau
    var i = 0;
    var tab=[];
    while(i < 9){
        tab.push(parseInt(window.prompt("saisir une note: ")));
        i++;
    }
    // Stocker la somme des valeurs dans une variable
    var somme = 0;
    for(i = 0; i < 9; i++){
        //verifie que les valeurs son numerique:
        if(!isNaN(tab[i])){
            somme = somme + tab[i];
        }else{
            somme = somme + 0;
        }
    }
    // Diviser la somme par la taille du tableau
    var moyenne = somme / 9;
    document.getElementById("result_6_7").innerHTML="la moyenne de <br>"+tab+" <br>est de <br>"+moyenne;
}
function ex_6_7_jquery(){
    // stoquer les valeurs dans un tableau
    var i = 0;
    var tab=[];
    while(i < 9){
        tab.push(parseInt(window.prompt("saisir une note: ")));
        i++;
    }
    // Stocker la somme des valeurs dans une variable
    var somme = 0;
    for(i = 0; i < 9; i++){
        somme = somme + tab[i];
        console.log("tab de i = "+tab[i]);
        console.log("somme = "+somme);
    }
    // Diviser la somme par la taille du tableau
    var moyenne = somme / 9;
    $("#result_6_7_jquery").html("la moyenne de <br>"+tab+" <br>est de <br>"+moyenne);
}
/* *********************************** */
/* *************[ 6.8 ]**************** */
function ex_6_8(){ 
    var tUser = [];
    const iNombreCase = parseInt(window.prompt("Veuillez saisir un nombre de case: "));
    for(var i = 0; i < iNombreCase; i++){
        tUser.push(window.prompt("saisir une valeur: ")+"<br>");
        console.log(tUser);
    }
    document.getElementById("result_6_8").innerHTML="Votre tableau compte "+iNombreCase+"valeurs: <br>"+tUser;
}
function ex_6_8_jquery(){
    var tUser = [];
    const iNombreCase = parseInt(window.prompt("Veuillez saisir un nombre de case: "));
    for(var i = 0; i < iNombreCase; i++){
        tUser.push(window.prompt("saisir une valeur: ")+"<br>");
        console.log(tUser);
    }
    $("#result_6_8_jquery").html("Votre tableau compte "+iNombreCase+"valeurs: <br>"+tUser);
}