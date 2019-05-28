// Library functions
// -----------------------------------------(8_6)

function randomInt(low, high) {
    console.log("c'est pas l'appel de fonction qui pose probleme");
    return Math.floor(Math.random() * (high - low) + low);
}
// -----------------------------------------(DAME)
function saisie_position_ligne(saisie){
    if(saisie >= 1 && saisie <= 10){
        ligne = saisie;
    }else{
        ligne = false;
    }
    return ligne;
}
function saisie_position_colone(saisie){
    if(saisie >= 1 && saisie <= 10){
        colone = saisie;
    }else{
        colone = false;
    }
    return colone;
}
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

/* *************[ 8.1 ]**************** */
function ex_8_1(){
    var grille = [];
    for(var ligne = 0; ligne < 6; ligne++){
        grille[ligne] = [];
        for(var colone = 0; colone < 13; colone++){
            grille[ligne][colone] = 0;
        }
        document.getElementById("result_8_1").innerHTML += grille[ligne]+"<br>";
    }
}

function ex_8_1_jquery(){
    var grille = [];
    for(var ligne = 0; ligne < 6; ligne++){
        grille[ligne] = [];
        for(var colone = 0; colone < 13; colone++){
            grille[ligne][colone] = 0;
        }
        // .append() --> permet de concatener les valeurs dans une meme chaines de char pour l'affichage
        $("#result_8_1_jquery").append(grille[ligne]+"<br>");
    }
}
/* *********************************** */
/* *************[ 8.6 ]**************** */
function ex_8_6(){
    var iGrandNombre = 0;
    // pour l'affichage
    var innerHTML = "";
    var iPostionLigne = 0;
    var iPositionColone = 0;
    // ----------------
    var grille = [];
    for(var ligne = 0; ligne < 12; ligne++){
        grille[ligne] = [0];
        for(var colone = 0; colone < 8; colone++){
            grille[ligne][colone] = randomInt(1, 10);
            if(iGrandNombre < grille[ligne][colone]){
                iGrandNombre = grille[ligne][colone];
                iPostionLigne = ligne;
                iPositionColone = colone;
            }
        }
        document.getElementById("result_8_6").innerHTML += grille[ligne]+"<br>";
    }
    document.getElementById("grandNombre").innerHTML = "<br> Le plus grand Nombre est : "+iGrandNombre+" en position grille["+iPostionLigne+"]["+iPositionColone+"]";
}

function ex_8_6_jquery(){
    var iGrandNombre = 0;
    // pour l'affichage
    var iPostionLigne = 0;
    var iPositionColone = 0;
    // ----------------
    var grille = [];
    for(var ligne = 0; ligne < 12; ligne++){
        grille[ligne] = [];
        for(var colone = 0; colone < 8; colone++){
            grille[ligne][colone] = randomInt(1, 10);
            if(iGrandNombre < grille[ligne][colone]){
                iGrandNombre = grille[ligne][colone];
                iPostionLigne = ligne;
                iPositionColone = colone;
            }
        }
        console.log(grille)
        $("#result_8_1_jquery").append(grille[ligne]+"<br>"); 
    }
    $("#grandNombre_jquery").html("<br> Le plus grand Nombre est : "+iGrandNombre+" en position grille["+iPostionLigne+"]["+iPositionColone+"]");
    
}
/* *********************************** */
/* *************[ DAMES 8_7 ]**************** */
function ex_8_7(){
    var innerHTML = "";
    var grille = [];
    // recuperer la position initial
    var li_init = parseInt(window.prompt("veuillez saisir le numero de ligne initial(entre 0 et 9): "));
    var col_init = parseInt(window.prompt("veuillez saisir le numero de colone initial(entre 0 et 9): "));
    var choix;
    // verifier la validité de la positon initiale
    if((li_init >= 0 && li_init <= 9) && (col_init >= 0 && col_init <= 9)){
        choix = parseInt(window.prompt("votre position est validée, veuillez choisir votre déplacement(0 a 3): "));
    }else{
        document.getElementById("result_8_7").innerHTML = "Echec critique, la position choisie est impossible";
    }
    // Creer grille si choix valide
    if(choix >= 0 && choix <= 3){
        for(var i = 0; i < 10; i++){
            grille[i] = [];
            for(var j = 0; j < 10; j++){
                if(i == li_init && j == col_init){
                    grille[i][j] = " [X] ";
                }else{
                    grille[i][j] = " [O] ";
                }
            }
        }
    }
    document.getElementById("grille_initiale").innerHTML = "<hr class='my-4'>Votre position initiale <br>";
    // Affichage position initiale
    for(var i = 0; i < grille.length; i++){
        document.getElementById("result_8_7").innerHTML += grille[i]+"<br>";
    }
    document.getElementById("deplacement").innerHTML = "<hr class='my-4'> votre nouvelle position <br><br>";
    // réinitialisation position initiale
    grille[li_init][col_init] = " [O] ";
    // traitzement du deplacement dans la creation d'une nouvelle grille
    switch(choix){
        case 0:
            if(li_init == 0 || col_init == 0){
                document.getElementById("deplacement").innerHTML = "<hr class='my-4'>Le déplacement demandé est impossible: ["+li_init+"]["+col_init+"] pour déplacement n° "+choix;
            }else{
                grille[li_init -1][col_init -1] = " [X] ";
                for(var i = 0; i < grille.length; i++){
                    document.getElementById("deplacement").innerHTML += grille[i]+"<br>";
                }
            }
            break;
        case 1:
            if(li_init == 0 || col_init == 9){
                document.getElementById("deplacement").innerHTML = "<hr class='my-4'>Le déplacement demandé est impossible: ["+li_init+"]["+col_init+"] pour déplacement n° "+choix;
            }else{
                grille[li_init -1][col_init +1] = " [X] ";
                for(var i = 0; i < grille.length; i++){
                    document.getElementById("deplacement").innerHTML += grille[i]+"<br>";
                }
            }
            break;
        case 2:
            if(li_init == 9 || col_init == 0){
                document.getElementById("deplacement").innerHTML = "<hr class='my-4'>Le déplacement demandé est impossible: ["+li_init+"]["+col_init+"] pour déplacement n° "+choix;
            }else{
                grille[li_init +1][col_init -1] = " [X] ";
                for(var i = 0; i < grille.length; i++){
                    document.getElementById("deplacement").innerHTML += grille[i]+"<br>";
                }
            }
            break;
        case 3:
            if(li_init == 9 || col_init == 9){
                document.getElementById("deplacement").innerHTML = "<hr class='my-4'>Le déplacement demandé est impossible: ["+li_init+"]["+col_init+"] pour déplacement n° "+choix;
            }else{
                grille[li_init +1][col_init +1] = " [X] ";
                for(var i = 0; i < grille.length; i++){
                    document.getElementById("deplacement").innerHTML += grille[i]+"<br>";
                }
            }
            break;
        default:
                document.getElementById("deplacement").innerHTML = "<hr class='my-4'>Le déplacement demandé est impossible: ["+li_init+"]["+col_init+"] pour déplacement n° "+choix;
    }
}

function ex_8_7_jquery(){
    var innerHTML = "";
    var grille = [];
    // recuperer la position initial
    var li_init = parseInt(window.prompt("veuillez saisir le numero de ligne initial(entre 0 et 9): "));
    var col_init = parseInt(window.prompt("veuillez saisir le numero de colone initial(entre 0 et 9): "));
    var choix;
    // verifier la validité de la positon initiale
    if((li_init >= 0 && li_init <= 9) && (col_init >= 0 && col_init <= 9)){
        choix = parseInt(window.prompt("votre position est validée, veuillez choisir votre déplacement(0 a 3): "));
    }else{
        $("#result_8_7_jquery").html( "Echec critique, la position choisie est impossible");
    }
    console.log("choix = "+choix);
    // Creer grille si choix valide
    if(choix >= 0 && choix <= 3){
        for(var i = 0; i < 10; i++){
            grille[i] = [];
            for(var j = 0; j < 10; j++){
                if(i == li_init && j == col_init){
                    grille[i][j] = " [X] ";
                }else{
                    grille[i][j] = " [O] ";
                }
            }
        }
    }
    console.log("aprés créa grille initiale"+grille);
    $("#grille_initiale_jquery").html("<hr class='my-4'>Votre position initiale <br>");

    // Affichage position initiale
    for(var i = 0; i < grille.length; i++){
        $("#result_8_7_jquery").append(grille[i]+"<br>");
    }
    console.log("on a passé la boucle d'affichage");
    $("#deplacement_jquery").html("<hr class='my-4'> votre nouvelle position <br><br>");

    // réinitialisation position initiale
    grille[li_init][col_init] = " [O] ";
    console.log("aprés réinitialisation de grille[li_init][col_init] = "+grille[li_init][col_init]);

    // traitzement du deplacement dans la creation d'une nouvelle grille
    switch(choix){
        case 0:
            console.log("cas n° 0");
            if(li_init == 0 || col_init == 0){
                $("#nouvelle_grille").html("<hr class='my-4'>Le déplacement demandé est impossible: ["+li_init+"]["+col_init+"] pour déplacement n° "+choix);
            }else{
                grille[li_init -1][col_init -1] = " [X] ";
                for(var i = 0; i < grille.length; i++){
                    $("#nouvelle_grille").append(grille[i]+"<br>");
                }
            }
            break;
        case 1:
            console.log("cas n° 1");
            if(li_init == 0 || col_init == 9){
                $("#nouvelle_grille").html("<hr class='my-4'>Le déplacement demandé est impossible: ["+li_init+"]["+col_init+"] pour déplacement n° "+choix);
            }else{
                grille[li_init -1][col_init +1] = " [X] ";
                for(var i = 0; i < grille.length; i++){
                    $("#nouvelle_grille").append(grille[i]+"<br>");
                }
            }
            break;
        case 2:
            console.log("cas n° 2");
            if(li_init == 9 || col_init == 0){
                $("#nouvelle_grille").html("<hr class='my-4'>Le déplacement demandé est impossible: ["+li_init+"]["+col_init+"] pour déplacement n° "+choix);            }else{
                grille[li_init +1][col_init -1] = " [X] ";
                for(var i = 0; i < grille.length; i++){
                    $("#nouvelle_grille").append(grille[i]+"<br>");
                }
            }
            break;
        case 3:
            console.log("cas n°3");
            if(li_init == 9 || col_init == 9){
                $("#nouvelle_grille").html("<hr class='my-4'>Le déplacement demandé est impossible: ["+li_init+"]["+col_init+"] pour déplacement n° "+choix);            }else{
                grille[li_init +1][col_init +1] = " [X] ";
                for(var i = 0; i < grille.length; i++){
                    $("#nouvelle_grille").append(grille[i]+"<br>");
                }
            }
            break;
        default:
            console.log("cas default");
                $("#nouvelle_grille").html("<hr class='my-4'>Le déplacement demandé est impossible: ["+li_init+"]["+col_init+"] pour déplacement n° "+choix);    
    }
      
}
/* *********************************** */