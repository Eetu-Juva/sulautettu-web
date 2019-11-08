
function diagrammiFunktio(item_arr=[45,43,74,78,85,65,85,63,25]){
    // etsitään harjoitus2.html sivulta elementti, jonka id=myCanvas
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    //var item=[45,43,74,78,85,65,85,63,25];
    var j = 0;
    ctx.strokeStyle = "#ff00ff";
    
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
            ctx.fillText(i +","+ item_arr[j].toString(), i, item_arr[j]);
            j++;
        }
        
    }//for

    ctx.stroke();
    

} 

function clear(){
    
}
