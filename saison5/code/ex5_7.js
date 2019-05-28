function ex_5_7(){
    var nb = parseInt(window.prompt("saisir un nombre: "));
    var product = 1;
    for (let i = 2; i <= nb; i++){
        console.log("product = "+product)
        product = product * i ;
        console.log("product * i  = "+product)
    } 
    document.getElementById("result_5_7").innerHTML=product;
}

function ex_5_7_jquery(){
    var nb = parseInt(window.prompt("saisir un nombre: "));
    var product = 1;
    for (let i = 2; i <= nb; i++){
        console.log("product = "+product)
        product = product * i ;
        console.log("product * i  = "+product)
    } 
    $("#result_5_7_jquery").html(product);
          
}
