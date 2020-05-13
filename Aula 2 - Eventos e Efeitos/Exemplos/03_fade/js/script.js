$(document).ready(function() {

    $("button").click(function() {
        $("#div1").fadeIn("slow");
        $("#div2").fadeOut("slow");
        $("#div2").fadeToggle("2000");
    })
})