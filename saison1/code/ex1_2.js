function ex_1_2(){
    let a = 51;
    let b = 34;
    let c = a + b;
    a = 21;
    c = b - a;
    document.getElementById("result_1_2").innerHTML = 'a vaut '+a + '<br>' + 'b vaut '+b+'<br>'+'c vaut '+c;
}

function ex_1_2_jquery(){
    let a = 51;
    let b = 34;
    let c = a + b;
    a = 21;
    c = b - a;
    $("#result_1_2_jquery").html('a vaut '+a + '<br>' + ' et b vaut '+b+'<br>'+' et c vaut '+c);
}

