$(document).ready(function(){
    $(".job").click(function(){
        $(this).before("<label for=text>سابقه شغلی</label><input type=text><br>");
    })
})