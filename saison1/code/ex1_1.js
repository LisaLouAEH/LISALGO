function ex_1_1(){
    let a = 17;
    let b = a + 2;
    a = 19;
    document.getElementById("result_1_1").innerHTML = 'a vaut '+a + '<br>' + ' et b vaut '+b;
}

function ex_1_1_jquery(){
    let a = 17;
    let b = a + 2;
    a = 19;
    $("#result_1_1_jquery").html('a vaut '+a + '<br>' + ' et b vaut '+b);
}
