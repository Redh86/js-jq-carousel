$(document).ready(function () {

    $(".next").click(function() {
        var firstActive = $("img.active");
        var blueBtn = $("i.active");

        firstActive.removeClass("active");
        blueBtn.removeClass("active");

        if (firstActive.hasClass("last") && blueBtn.hasClass("last")) {
            $("img.first").addClass("active");
            $("i.first").addClass("active");
            } else {
                firstActive.next("img").addClass("active");
                blueBtn.next("i").addClass("active");
            }      
    });  

    $(".prev").click(function() {
        var firstActive = $("img.active");
        var blueBtn = $("i.active");

        firstActive.removeClass("active");
        blueBtn.removeClass("active");

        if (firstActive.hasClass("first") && blueBtn.hasClass("first")) {
            $("img.last").addClass("active");
            $("i.last").addClass("active");
            } else {
                firstActive.prev("img").addClass("active");
                blueBtn.prev("i").addClass("active");
            }      
    });  
});