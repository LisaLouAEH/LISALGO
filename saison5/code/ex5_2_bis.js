function ex_5_2_bis(){
    // initialiser le score et le nombre mystere    
        var score = 1;
    function random(min_nb, max_nb){
            return Math.floor(Math.random() * (max_nb - min_nb + 1)) + min_nb;
        }
        var mystery_nb = random(1, 100);
    // declaration fonction find_nb qui prendra la saisie utilisateur en parametre.
    function find_nb(nb){
        // verifier la validité du nombre saisi dans la fonction 
        // au cas ou en cours il saisisse une valeur non conforme.
        var nb_valid;
            if(nb >= 1 && nb <= 100){
                nb_valid = true;
            }else{
                nb_valid = false;
            }
            // Ne lancer la boucle récursive que si la saisie est valide.
            if(nb_valid == true){
                if(nb != mystery_nb){
                    score++;
                        if(nb > mystery_nb){
                            find_nb(parseInt(window.prompt("essaye plus petit: ")));
                        }else{
                            find_nb(parseInt(window.prompt("essaye plus grand: ")));
                        }// ferme if comparaison + ou -
                }else{
                    document.getElementById("result_5_2_bis").innerHTML="Bravo!\n"+
                    "C'était bien "+mystery_nb+" et vous avez trouvé en "+score+" coups";
                    return 0;
                }// ferme if different de..
            }// ferme if valid
        }// ferme fonction find_nb
    // appel initial
    find_nb(parseInt(window.prompt("saisir un nombre entre 1 et 100:")));
}

function ex_5_2_bis_jquery(){
    // initialiser le score et le nombre mystere    
    var score = 1;
    function random(min_nb, max_nb){
            return Math.floor(Math.random() * (max_nb - min_nb + 1)) + min_nb;
        }
    var mystery_nb = random(1, 100);
    // declaration fonction find_nb qui prendra la saisie utilisateur en parametre.
    function find_nb(nb){
        // verifier la validité du nombre saisi dans la fonction 
        // au cas ou en cours il saisisse une valeur non conforme.
        var nb_valid;
            if(nb >= 1 && nb <= 100){
                nb_valid = true;
            }else{
                nb_valid = false;
            }
            // Ne lancer la boucle récursive que si la saisie est valide.
            if(nb_valid == true){
                if(nb != mystery_nb){
                    score++;
                        if(nb > mystery_nb){
                            find_nb(parseInt(window.prompt("essaye plus petit: ")));
                        }else{
                            find_nb(parseInt(window.prompt("essaye plus grand: ")));
                        }// ferme if comparaison + ou -
                }else{
                    $("#result_5_2_bis_jquery").html("Bravo!\n"+
                     "C'était bien "+mystery_nb+" et vous avez trouvé en "+score+" coups");
                    return 0;
                }// ferme if different de..
            }// ferme if valid
        }// ferme fonction find_nb
    // appel initial
    find_nb(parseInt(window.prompt("saisir un nombre entre 1 et 100:")));       
}