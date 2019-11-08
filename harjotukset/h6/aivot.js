function laatikkoFunktio(bx){
    //alert("Nyt vaihdetaan laatikko"+ bx + ":n sisältöä!");
    vaihda(); 

    if (bx == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (bx == 2){
        document.getElementById("latiko2").innerHTML = " <table><tr><th>a</th><th>a</th><th>a</th></tr><tr><td>a</td><td>a</td><td>a</td></tr></table> ";
    }
    else if (bx == 3){
        document.getElementById("latikko3").innerHTML = '<img src="smiley1.png" ></img>';
    }
    else{
        console.log("error invalid argument to 'laatikkoFunktio':" + bx + "\n");
    }
    
}

function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    
    var text = "";
    var i;
    for (i = x.length - 1; i >= 0; i--) {
      text += x.elements[i].name + ": " + x.elements[i].value + "<br>";
      //console.log(i);
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
}

var state = 0;
function vaihda(){
    if(state == 0){
        document.getElementById("img").setAttribute("src","smiley2.png");
        state = 1;
    }
    else if(state == 1){
        document.getElementById("img").setAttribute("src","smiley1.png");
        state = 0;
    }



}

function diagrammiFunktio(item_arr=[45,43,74,78,85,65,85,63,25]){
    // etsitään harjoitus2.html sivulta elementti, jonka id=myCanvas
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    //var item=[45,43,74,78,85,65,85,63,25];
    var j = 0;
    
    // diagrammiin voidaan kirjoittaa numeroita haluttuihin kohtiin.
    
    for (let i = 0; i <= c.width; i += 20) {
        ctx.fillText(i, i, c.height);
        if(j < item_arr.length){
            if(i==0){
                ctx.moveTo(0,item_arr[j]);
            }
            else{
                ctx.lineTo(i, item_arr[j]);
            }
            j++;
        }
        
    }//for

    ctx.stroke();
    

} 
