
var draw_buf = {
    "x_lable":[],
    "y_lable":[],
    "dataarr":[],
    "datalable":{},
    "dataarrcolor":[],
    "options":null
}
//lablexy = [x,y]

//datalable = "name":
//             "lables":[]

//dataarr = "name":
//          "data":[x,y]

function generatedata(arr,spase,name){
    for(var i=0;i<arr.length;i++){
        draw_buf.dataarr.push({"name":name ,"data":[arr[i],i*spase]});
    }
}

function generatexy(xval,yval,xspase=20,yspase=20){
    for(var i=0;i<xval.length;i++){
        draw_buf.x_lable.push([xval[i],i*xspase]);
    }
    for(var i=0;i<yval.length;i++){
        draw_buf.y_lable.push([yval[i],i*yspase]);
    }
}

function deletedata(dataname){
    for(var i = 0;i<draw_buf.dataarr.length;i++){
        if(draw_buf.dataarr[i].name == dataname){
            draw_buf.dataarr[i].splice(i,1);
        }
    }
    
}

function addlable(dataname,lables=0){

}

function draw(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    //console.log(draw_buf.dataarr[0]);
    ctx.strokeStyle = "#ff00ff";
    for (let i = 0; i < draw_buf.dataarr.length; i++) {
        if(i==0){
            ctx.moveTo(draw_buf.dataarr[i].data[1],draw_buf.dataarr[i].data[0]);
        }
        else{
            ctx.lineTo(draw_buf.dataarr[i].data[1], draw_buf.dataarr[i].data[0]);
        }
        
    }

    ctx.stroke();

}

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
