function ex_5_6(){
    var nb = parseInt(window.prompt("saisir un nombre: "));
    var somme = 1;
    for (let i = 1; i < nb; i++){
        console.log("somme = "+somme)
        somme = somme + (i + 1);
        console.log("somme + ( i + 1) = "+somme)
    } 
    document.getElementById("result_5_6").innerHTML=somme;
}

function ex_5_6_jquery(){
    var nb = parseInt(window.prompt("saisir un nombre: "));
    var somme = 1;
    for (let i = 1; i < nb; i++){
        console.log("somme = "+somme)
        somme = somme + (i + 1);
        console.log("somme + ( i + 1) = "+somme)
    } 
    $("#result_5_6_jquery").html(somme);
          
}
