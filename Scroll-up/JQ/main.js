$(document).ready(function () {
    $(".scroll").css("display", "none");
})
$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $(".scroll").fadeIn();
    }
    else{
        $(".scroll").fadeOut("fast");
    }
})
$(document).ready(function(){
    $(".scroll").click(function(){
        $("body,html").animate({
            scrollTop:0
        })
    })
})


