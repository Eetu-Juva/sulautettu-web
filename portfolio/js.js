//canges the bacround color
function change(){
    var color = document.getElementById("colorcage").value; 
    document.getElementById("page").style.backgroundColor=color;
}

//hide/sow profile picture
function fadeimg(){
    $("#image").toggle(1000); 
}