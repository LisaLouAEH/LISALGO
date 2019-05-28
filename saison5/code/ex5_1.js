function ex_5_1(){
    var nb; 
    var mystery_nb = 2;
    var score = 0;
    function boucle_if(){
        nb = parseInt(window.prompt("saisir un nombre entre 1 et 3: "));
        if(nb == mystery_nb){
            document.getElementById("result_5_1").innerHTML="Bravo vous avez gagné !";
        }else{
            score++;
            boucle_if();
        }
    }
    boucle_if();
    
}

function ex_5_1_jquery(){
    var nb;
    var mystery_nb = 2;
    var score = 0;
    function boucle_if(){
        nb = parseInt(prompt("saisir un nombre entre 1 et 3: "))
        if(nb == mystery_nb){
            $("#result_5_1_jquery").html("Bravo vous avez gagné ! \n votre score est de "+score+" points!");
        }else{
            score++;
            boucle_if();
        }
    } 
    boucle_if();       
}
