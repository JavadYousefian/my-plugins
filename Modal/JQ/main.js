$(document).ready(function(){
    $(".btn").click(function(){
        $(".background").fadeIn();
        $(".modal").fadeIn("fast");
    })
    $(".background").click(function(){
        $(this).fadeOut();
        $(".modal").fadeOut("fast");
    })
})