//1. Faça com que os elementos dentro do menu aparecem quando o mouse passar por eles.
//2. Os elementos devem desaparecer quando o mouse não estiver passando por eles


$(document).ready(function() {

    $(".menu1").mouseenter(function() {

        $(".menu2").show("slow");
    })

    $(".menu1").mouseleave(function() {

        $(".menu2").hide("slow");

    })

})

// tentar resolver com eq!


$(document).ready(function() {
    $('li').hover(function() {
        $(this).find('.menu2').slideToggle();
    })
    $("li").hover(function() {
            $(this).find(".menu2").slideDown(2000);
        },
        function() {
            $(this).find(".menu2").slideUp("fast");
        })
})