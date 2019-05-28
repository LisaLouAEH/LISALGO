function ex_5_4(){
    var nb = parseInt(window.prompt("saisir un nombre: "));
    const follow_nb = nb + 10;
    var tab=[];
    for (let i = 0; i < 10; i++){
        nb++;
        tab.push(nb+"<br>");
    } 
    document.getElementById("result_5_4").innerHTML=tab;
}

function ex_5_4_jquery(){
    var nb = parseInt(window.prompt("saisir un nombre: "));
    const follow_nb = nb + 10;
    var tab=[];
    for (let i = 0; i < 10; i++){
        nb++;
        tab.push(nb+"<br>");
    } 
    $("#result_5_4_jquery").html(tab);
          
}
