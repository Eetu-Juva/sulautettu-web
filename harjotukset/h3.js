function init() {
    $("#lar").click(animatefun);

}

function imghide() {
    $("img").animate(
        { opacity: 0.0 }
    );
}

function imgshow() {
    $("img").animate(
        { opacity: 0.5 }
    );
}

function animatefun() {

    $(".box").animate({ width: "300px" });
    $(".box").animate({ height: "300px" });
    $(".box").animate({ marginLeft: "150px" });
    $(".box").animate({ borderWidth: "10px" });
    $(".box").animate({ opacity: 0.5 });
    $("img").mouseenter(imghide);
    $("img").mouseleave(imgshow);
}

$(document).ready(init);
