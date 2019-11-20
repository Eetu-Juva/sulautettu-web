
var draw_buf = {
    "x_lable": [],
    "y_lable": [],
    "dataarr": [],
    "datalable": [],
    "dataarrcolor": [],
    "options": null
}
//lablexy = [x,y]

//datalable = {"name": 
//             "lables":[]}

//dataarr = "name":
//          "data":[x,y]

function generatedata(arr, spase, name) {
    var pushd = [];
    for (var i = 0; i < arr.length; i++) {
        pushd.push({ "name": name, "data": [arr[i], i * spase] });
    }
    draw_buf.dataarr.push(pushd);
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
    for (var i = 0; i < draw_buf.dataarr[0].length; i++) {
        if (draw_buf.dataarr[0][i].name == dataname) {
            draw_buf.dataarr[0].splice(i, 1);
            i--;
        }
    }

}

function addlable(dataname, lables = 0) {
    var pushd = { "name": dataname, "labels": [] }
    for(var i = 0; i < draw_buf.dataarr.length; i++) {
        if (draw_buf.dataarr[i][0].name == dataname) {
            for (let j = 0; j < draw_buf.dataarr[i].length; j++) {

                if(lables === 0) {
                    pushd.labels.push([draw_buf.dataarr[i][j].data[0], draw_buf.dataarr[i][j].data[1]]);
                }
                else {

                }
                
            }//for(let j = 0; j < draw_buf.dataarr[i].length; j++)
        }//if(draw_buf.dataarr[i].name == dataname)
    }//for(var i = 0;i<draw_buf.dataarr.length;i++)

    draw_buf.datalable.push(pushd);
}

function draw(dataname) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();

    ctx.strokeStyle = "#ff00ff";
    for (let j = 0; j < draw_buf.dataarr.length; j++) {
        if (draw_buf.dataarr[j].name === dataname) {

            for (let i = 0; i < draw_buf.dataarr[j].length; i++) {

                ctx.fillText(draw_buf.datalable[0].labels[i], draw_buf.dataarr[j][i].data[1], draw_buf.dataarr[j][i].data[0]);
                if (i == 0) {
                    ctx.moveTo(draw_buf.dataarr[j][i].data[1], draw_buf.dataarr[j][i].data[0]);
                }
                else {
                    ctx.lineTo(draw_buf.dataarr[j][i].data[1], draw_buf.dataarr[j][i].data[0]);
                }

            }//for (let i = 0; i < draw_buf.dataarr[j].length; i++)

            ctx.stroke();

        }//if (draw_buf.dataarr === dataname)
    }//for (let j = 0; j < draw_buf.datalable[j].length; j++)
}

function diagrammiFunktio(item_arr = [45, 43, 74, 78, 85, 65, 85, 63, 25]) {
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
}

function clearc() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //console.log(ctx.height);
    ctx.clearRect(0, 0, 700, 500);
}
