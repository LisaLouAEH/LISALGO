function ex_4_1(){
    var TOTO = 1;
    var TATA = "pok"; //pour tester la condition "&&" changer la valeur de TATA 
    var TUTU = parseInt(window.prompt("Saisir un nombre: "));
    if((TUTU <= TOTO + 4)&&(TATA != "ok")){
        TUTU = TUTU - 1
        document.getElementById("result_4_1").innerHTML = TUTU;
    }else{
        TUTU = TUTU + 1;
        document.getElementById("result_4_1").innerHTML = TUTU;
    }
}

function ex_4_1_jquery(){
    var TOTO = 1;
    var TATA = "ok"; //pour tester la condition "&&" changer la valeur de TATA
    var TUTU = parseInt(window.prompt("Saisir un nombre: "));
    if((TUTU <= TOTO + 4)&&(TATA != "ok")){
        TUTU = TUTU - 1;
        $("#result_4_1_jquery").html(TUTU);
    }else{
        TUTU = TUTU + 1;
        $("#result_4_1_jquery").html(TUTU);
    }
}
