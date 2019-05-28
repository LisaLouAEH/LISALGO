// VARIABLE LIBRARY
    var iPanier = 0;
//**********************************************************        
// FUNCTIONS LIBRARY
        // genere un panier
        function remplir_panier(iPrix){
            iPanier = iPanier + iPrix;
            if(iPrix != 0){
                remplir_panier(parseInt(window.prompt("Entrez le prix d'un produit [taper '0' pour valider]: ")));
            }
            return iPanier;
        }
        // une fois panier validé, genere une facture
        function facturer(iPanier){
            var iReglement = parseInt(window.prompt("Vous nous devez "+iPanier+"Euros"+ "\n Veuillez saisir votre règlement sans decimales: "));
            console.log("return de la fonction facturer() = "+ iReglement);
            return iReglement;
        }
        // Calcul monnaie et return affichage
        function monnaie(iPanier, iReglement){
            var iRest = iReglement - iPanier 
            if (iRest >= 1){
                // Combien de billets de 10
                if(iRest%10 > 0){
                    var iNombreDix = (iRest - (iRest%10)) / 10
                    iRest = iRest%10
                }else{
                    var iNombreDix = iRest / 10
                    iRest = 0
                    console.log("iRest devrait etre 0 =>"+iRest);
                }
                // Combien de billets de 5 avec le reste
                if(iRest%5 > 0){
                    var iNombreCinq = (iRest - (iRest%5)) / 5
                    iRest = iRest%5
                }else{
                    var iNombreCinq = iRest / 5
                    iRest = 0
                }
                // Si il ya encore du reste ce sera des pieces 
                var iNombrePieces = iRest;
            }
            var affichage = "<p>Nous vous rendons: </p>";
                for(var i = 0; i < iNombreDix; i++){
                    affichage = affichage + "10 euros <br>";
                }
                for(var i = 0; i < iNombreCinq; i++){
                    affichage = affichage + "5 euros <br>";

                }
                for(var i = 0; i < iNombrePieces; i++){
                    affichage = affichage + "1 euros <br>";
                }
            return affichage;
        }
//*********************************************************
function ex_5_10(){
    var iPanier = remplir_panier(parseInt(window.prompt("Entrez le prix d'un produit: ")));
    var iReglement = facturer(iPanier);
    document.getElementById("result_5_10").innerHTML=monnaie(iPanier, iReglement);
}

function ex_5_10_jquery(){
    var iPanier = remplir_panier(parseInt(window.prompt("Entrez le prix d'un produit: ")));
    var iReglement = facturer(iPanier);    
    $("#result_5_10_jquery").html(monnaie(iPanier, iReglement));
}
