function ex_3_6(){
    var age = window.prompt("Saisir l'age de votre enfant: ");
    if(age >= 6 && age <= 7){
        document.getElementById("result_3_6").innerHTML = "il sera categorie 'poussin'";
    }else if(age >= 8 && age <= 9){
        document.getElementById("result_3_6").innerHTML = "Il sera categorie 'pupille' ";
    }else if(age >= 10 && age <= 11){
        document.getElementById("result_3_6").innerHTML = "Il sera categorie 'minime' ";
    }else if(age >= 12){
        document.getElementById("result_3_6").innerHTML = "Il sera categorie 'cadet' ";
    }else{
        document.getElementById("result_3_6").innerHTML = "Votre enfant n'a pas l'age réglementaire pour notre centre";
    }
}  

function ex_3_6_jquery(){
    var age = window.prompt("Saisir l'age de votre enfant: ");
    if(age >= 6 && age <= 7){
        $("#result_3_6_jquery").html("il sera categorie 'poussin' ");
    }else if(age >= 8 && age <= 9){
        $("#result_3_6_jquery").html("Il sera categorie 'pupille'");
    }else if(age >= 10 && age <= 11){
        $("#result_3_6_jquery").html("Il sera categorie 'minime' ");
    }else if(age >= 12){
        $("#result_3_6_jquery").html("Il sera categorie 'cadet' ");
    }else{
        $("#result_3_6_jquery").html("Votre enfant n'a pas l'age réglementaire pour notre centre");
    }
}

