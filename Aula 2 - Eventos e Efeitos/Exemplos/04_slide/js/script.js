$(document).ready(function() {

    $("#flip").click(function() {
        $("#painel").slideToggle("fast"); // up e down
    })

    $("button").click(function() {
        $(".div1").slideDown(6000)
        $(".div2").slideDown(3000)
        $(".div3").slideDown(4000)

    })


})