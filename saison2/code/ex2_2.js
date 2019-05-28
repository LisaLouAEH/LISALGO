function ex_2_2(){
    let Number = window.prompt("Veuillez saisir un nombre: ");
    Number = Math.pow(Number, 2);
    document.getElementById("result_2_2").innerHTML = 'Votre nombre au carré = '+Number;
}

function ex_2_2_jquery(){
    let Number = window.prompt("Veuillez saisir un nombre: ");
    Number = Math.pow(Number, 2);
    $("#result_2_2_jquery").html('Votre nombre au carré = '+Number);
}