function ex_2_4() {
    var monTableau = [' Belle marquise ', ' vos beau yeux ', ' me font mourir ', ' d\'amour '];
    var Temp;
    var monTableau_de_tab = [];
    taille = monTableau.length;
    for (var i = 0; i < taille; i++) {
        monTableau_de_tab.push(monTableau.join(','));
        Temp = monTableau[0];
        monTableau[0] = monTableau[1];
        monTableau[1] = monTableau[2];
        monTableau[2] = monTableau[3];
        monTableau[3] = Temp;
    }
    document.getElementById("result_marquise").innerHTML = monTableau_de_tab.join("<br>");
}

function ex_2_4_jquery(){
    var monTableau = [' Belle marquise ', ' vos beau yeux ', ' me font mourir ', ' d\'amour '];
    var Temp;
    var monTableau_de_tab = [];
    taille = monTableau.length;
    for (var i = 0; i < taille; i++) {
        monTableau_de_tab.push(monTableau.join(','));
        Temp = monTableau[0];
        monTableau[0] = monTableau[1];
        monTableau[1] = monTableau[2];
        monTableau[2] = monTableau[3];
        monTableau[3] = Temp;
    }
    $("#result_2_4_jquery").html(monTableau_de_tab.join("<br>"));
}

