// VARIABLE LIBRARY
        // first tab
        var tab = [];
        // second tab, supposed to get sorted 
        var tab_sort = [];
        var pos;
//**********************************************************        
// FUNCTIONS LIBRARY
        // store users numbers in a tab until the user wants
        function saisi(nb){
            if(nb != 0){
                tab.push(nb);
                console.log("les valeurs du tableau en sont la: "+ tab);
                saisi(parseInt(window.prompt("Entrez un autre nombre [taper '0' pour arreter]: ")));
            }else{
                return 0;
            }
        }
        // copy the tab's content in another tab
        // var tab_sort = [];
        function copy_tab(tab){
            for (i = 0; i <= tab.length; i++){
                console.log("tab[i] = "+tab[i]);
                tab_sort.push(tab[i]);
                console.log("tab_sort[i] = "+tab_sort[i]);
                console.log("tab_sort en entier jusque la: "+ tab_sort);
            }
        }
//*********************************************************
function ex_5_9(){
    //call saisi function to get a tab full of numbers
    saisi(parseInt(window.prompt("Entrez un nombre: ")));
    // fill the tab_sort
    copy_tab(tab);

    // sort its values in alphanumeric order
    tab_sort.sort(function(a, b){return b-a});
    console.log("aprés classement"+tab_sort);

    // the greatest number will be the first element of the second tab (TAB_SORT[0])
    // use the first value of TAB_SORT to find the right index in the first TAB 
    pos= tab.indexOf(tab_sort[0]) + 1;
    document.getElementById("result_5_9").innerHTML="Le plus grand nombre saisi est: "+tab_sort[0]+". <br> il correspond a votre saisie n° "+pos;
}

function ex_5_9_jquery(){
    saisi(parseInt(window.prompt("Entrez un nombre: ")));
    copy_tab(tab);
    tab_sort.sort(function(a, b){return b-a});
    pos= tab.indexOf(tab_sort[0]) + 1;
    $("#result_5_9_jquery").html("Le plus grand nombre saisi est :"+tab_sort[0]+". <br> il correspond a votre saisie n° "+pos);
}
