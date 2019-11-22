
var draw_buf = {
    "x_lable": [],
    "y_lable": [],
    "dataarr": [],
    "datalable": [],
    "dataarrcolor": [],
    "options": null
}


var dataarr = [] ;
//[{name:"",[data,..]}]
//data = [dat,cord]
var lable = [];

function generatedata(arr, name, spase=20) {
    var pushd = [];
    for (var i = 0; i < arr.length; i++) {
        //alert(arr[i]);
        pushd.push( [parseFloat(arr[i]), i * spase]);
    }
    dataarr.push({"name":name ,"data":pushd});
}

function generatexy(xval, yval, xspase = 20, yspase = 20) {
    for (var i = 0; i < xval.length; i++) {
        draw_buf.x_lable.push([xval[i], i * xspase]);
    }
    for (var i = 0; i < yval.length; i++) {
        draw_buf.y_lable.push([yval[i], i * yspase]);
    }
}

function deletedata(dataname) {
    //loop all elements from each eleme
    for (var i = 0; i < dataarr.length; i++) {
        if (dataarr[i].name == dataname) {
            dataarr.splice(i, 1);
            i--;
        }
    }

}

//todoo
function addlable(dataname) {
    var pushd = [];
        for (let i = 0; i < dataarr.length; i++) {
            if (dataarr[i].name === dataname) {
                for (let j = 0; j < dataarr[i].data.length; j++) {
                    
                     pushd.push(dataarr[i].data[j][0]);
                }
               
            }
            
        }

    lable.push({"name":name ,"lable":pushd});
}

function draw(dataname) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
   // alert(dataname);

    ctx.strokeStyle = "#ff00ff";
    for (let j = 0; j < dataarr.length; j++) {
        if (dataarr[j].name == dataname) {
            for (let i = 0; i < dataarr[j].data.length; i++) {
                ctx.fillText(lable[j].lable[i], dataarr[j].data[i][1], dataarr[j].data[i][0])
                if (i == 0) {
                    ctx.moveTo(dataarr[j].data[i][1] , dataarr[j].data[i][0]);
                }
                else {
                    ctx.lineTo(dataarr[j].data[i][1] , dataarr[j].data[i][0]);
                }
            }
            ctx.stroke();
        }
    }
}

/*function diagrammiFunktio(item_arr = [45, 43, 74, 78, 85, 65, 85, 63, 25]) {
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
        if (j < item_arr.length) {
            if (i == 0) {
                ctx.moveTo(0, item_arr[j]);
            }
            else {
                ctx.lineTo(i, item_arr[j]);
            }
            ctx.fillText(i + "," + item_arr[j].toString(), i, item_arr[j]);
            j++;
        }

    }//for
    ctx.stroke();
}*/

function clearc() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //console.log(ctx.height);
    ctx.clearRect(0, 0, 700, 500);
}

function haeTiedostosta(name) {
            
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/arvo",

        cache: false,
        success: function (data) {
            generatedata(parser(data),name);
            addlable(name);
           // alert(data);                
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("error");
        }
    });
}

function parser(data){


    return data.split(":");
}
