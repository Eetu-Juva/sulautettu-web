var isimagehiden=0;


//canges the bacround color
function change(){
    var color = document.getElementById("colorcage").value; 
    document.getElementById("page").style.backgroundColor=color;
}

//hide/sow profile picture
function fadeimg(){
    if (isimagehiden) {
        $("#image").show(1000);
        isimagehiden=0;  
    }
    else{
        $("#image").hide(1000);
        isimagehiden=1;
    }    
}