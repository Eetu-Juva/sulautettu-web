
var draw_buf = {
    "x_lable": [],
    "y_lable": [],
    "dataarr": [],
    "datalable": [],
    "dataarrcolor": [],
    "options": null
}

var datasrc = null;
var dataarr = [];
//[{name:"",[data,..]}]
//data = [dat,cord]
var lable = [];
var xylab = {"x":[] ,"y":[]}

var mid;
var vsacale = 5;

function setserver(){
    datasrc = document.getElementById("serveraddr").value;
    
}

function generatedata(arr, name, spase = 20) {
    mid = document.getElementById("myCanvas").height/2;
    var pushd = [];
    //alert(arr);
    //alert(spase);

    for (var i = 0; i < arr.length; i++) {
        //alert(arr[i]);
        //alert(i * spase);
        pushd.push([parseFloat(arr[i])*vsacale +mid, i * spase]);
        //alert(parseFloat(arr[i]) + mid);
    }
    dataarr.push({ "name": name, "data": pushd });
}

function generatey() {
    
    var hei = document.getElementById("myCanvas").height;
    //alert([0,100*vsacale-hei/2]);

    for (let i = 0; i<= hei; i+=vsacale*10) {
        xylab.y.push([i - hei/2,(i - hei/2)/5]);
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

                pushd.push(dataarr[i].data[j][0] -mid );
            }

        }

    }

    lable.push({ "name": name, "lable": pushd });
}

function draw(dataname) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    var mult = -1;
    var ofset = c.height;
    //alert(ofset);
    // alert(dataname);
    var a = 20;

    ctx.strokeStyle = "#ff00ff";
    for (let j = 0; j < dataarr.length; j++) {
        if (dataarr[j].name == dataname) {
            for (let i = 0; i < dataarr[j].data.length; i++) {
                ctx.fillText(lable[j].lable[i] /vsacale, (dataarr[j].data[i][1])+a, dataarr[j].data[i][0]*mult + ofset);
                if (i == 0) {
                    ctx.moveTo((dataarr[j].data[i][1])+a, dataarr[j].data[i][0]*mult +ofset);
                    //alert(dataarr[j].data[i][0]*mult +ofset);
                }
                else {
                    ctx.lineTo((dataarr[j].data[i][1])+a, dataarr[j].data[i][0]*mult +ofset);
                }
            }
            ctx.stroke();
        }

    }//for (let j = 0; j < dataarr.length; j++)

    generatey();
    for (let i = 0; i < xylab.y.length; i++) {
        ctx.fillText(xylab.y[i][1],0,(xylab.y[i][0]*-1)+mid);
        
    }

    /*var ctx2 = c.getContext("2d");
    ctx2.strokeStyle = "#00ff00";
    ctx2.moveTo(0,mid);
    ctx2.lineTo(700,mid);
    ctx2.stroke();
    ctx2.moveTo(0,mid-100);
    ctx2.lineTo(700,mid-100);
    ctx2.stroke();*/


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
//192.168.1.29:3000/e --eiliitytähän tiedoatoon
    $.ajax({
        type: "GET",
        url: datasrc,

        cache: false,
        success: function (data) {
            var pr = parser(data);
            generatedata(pr, name , document.getElementById("myCanvas").width / pr.length );
            addlable(name);
            // alert(data);                
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("error");
        }
    });
}

function parser(data) {
    data = data.split(":");
    //alert(data);
    return data
    
}
