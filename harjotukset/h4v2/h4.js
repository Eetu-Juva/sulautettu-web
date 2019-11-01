var a = 0;
var b = 0;
function hideshowa() {

    if (a === 0) {
        $("#content1").show(200);
        a = 1;
    } else {
        $("#content1").hide(200);
        a = 0;
    }

}

function hideshowb() {

    if (b === 0) {
        $("#content2").show(200);
        b = 1;
    } else {
        $("#content2").hide(200);
        b = 0;
    }

}