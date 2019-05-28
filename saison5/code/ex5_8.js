function ex_5_8(){
    var tab = [];
    // saisie des nombres utilisateur et stockages dans un tableau
    for (i = 0; i < 20; i++){
       var nb = parseInt(window.prompt("Entrez le nombre numéro"+i+": "));
       tab.push(nb);
       console.log("les valeurs du tableau en sont la: "+ tab);
    }
    // copie le premier tableau dans un second tableau pour ranger
    // ses valeurs par ordre croissant
    var tab_sort = [];
    for (i = 0; i < tab.length; i++){
        console.log("tab[i] = "+tab[i]);
        tab_sort.push(tab[i]);
        console.log("tab_sort[i] = "+tab_sort[i]);
        console.log("tab_sort en entier jusque la: "+ tab_sort);
    }
    // classement du tab_sort par ordre alphanum croissant
    // servira a afficher le plus grand par son index
    tab_sort.sort(function(a, b){return b-a});
    console.log("aprés classement"+tab_sort);

    // Le plus grand est en position [0] de tab_sort[]
    //retrouver la position de ce nombre en cherchant son index  dans tab depuis la valeur de tab_sort[0]
    var pos= tab.indexOf(tab_sort[0]);
    document.getElementById("result_5_8").innerHTML="Le plus grand des 20 nombres est: "+tab_sort[0]+". <br> et il se trouve en position"+pos;
}

function ex_5_8_jquery(){
    var tab = [];
    for (i = 0; i < 20; i++){
       var nb = parseInt(window.prompt("Entrez le nombre numéro"+i+": "));
       tab.push(nb);
       console.log("les valeurs du tableau en sont la: "+ tab);
    }
    var tab_sort = [];
    for (i = 0; i < tab.length; i++){
        console.log("tab[i] = "+tab[i]);
        tab_sort.push(tab[i]);
        console.log("tab_sort[i] = "+tab_sort[i]);
        console.log("tab_sort en entier jusque la: "+ tab_sort);
    }
    tab_sort.sort(function(a, b){return b-a});
    console.log("aprés classement"+tab_sort);
    var pos= tab.indexOf(tab_sort[0]);
    $("#result_5_8_jquery").html("Le plus grand des 20 nombres est :"+tab_sort[0]+". <br> et il se trouve en position"+pos);
}
