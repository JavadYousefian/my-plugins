$(document).ready(function () {
    $(".head").click(function () {
        if($(this).next().css("display")=="none"){
            $(this).siblings(".body").slideUp();
            $(this).children("span.material-icons").text("arrow_circle_up");
            $(this).siblings().children("span.material-icons").text("arrow_circle_down");
            $(this).next().slideDown();
        }
        else{
            $(this).next().slideUp();
            $(this).children("span.material-icons").text("arrow_circle_down");
        }

    })
})