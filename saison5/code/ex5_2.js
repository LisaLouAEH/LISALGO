function ex_5_2(){
    var message = "saisir un nombre entre 10 et 20: " 
    var nb; 
    var mystery_nb = 11;
    var score = 0;
    function boucle_if(){
        nb = parseInt(window.prompt(message));
        if(nb == mystery_nb){
            document.getElementById("result_5_2").innerHTML="Bravo vous avez gagné ! En "+score+"tentatives";
        }else{
            score++;
            if(nb > 20){
                message ="Plus petit voyons!!";
            }else if(nb < 10){
                message ="Plus grand voyons";
            }else{
                message ="Essaye encore";
            }
            boucle_if();
        }
    }
    boucle_if();  
}

function ex_5_2_jquery(){
    var message = "saisir un nombre entre 10 et 20: "
    var nb; 
    var mystery_nb = 11;
    var score = 0;
    function boucle_if(){
        nb = parseInt(window.prompt(message));
        if(nb == mystery_nb){
            $("#result_5_2_jquery").html("Bravo vous avez gagné ! En "+score+"tentatives");
        }else{
            score++;
            if(nb > 20){
                message = "Plus petit voyons!!";
            }else if(nb < 10){
                message = "Plus grand voyons";
            }else{
                message = "Essaye encore";
            }
            boucle_if();
        }
    }
    boucle_if();       
}