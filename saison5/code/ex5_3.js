function ex_5_3(){
    var nb = parseInt(window.prompt("saisir un nombre: "));
    const follow_nb = nb + 10;
    var tab=[];
    while(nb < follow_nb){
        nb++;
        tab.push(nb+"<br>");
    }
    document.getElementById("result_5_3").innerHTML=tab;
}

function ex_5_3_jquery(){
    var nb = parseInt(window.prompt("saisir un nombre: "));
    const follow_nb = nb + 10;
    var tab=[];
    while(nb < follow_nb){
        nb++;
        tab.push(nb+"<br>");
    }
    $("#result_5_3_jquery").html(tab);
          
}
