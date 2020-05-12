$(document).ready(function() {

    $("#botaoAbrir").click(function() {
        $('#botaoAbrir').click(function() {
            $('#menulateral').css('display', 'inline');
            $(".div-botao").css("margin-left", "250px") //pra mexer o resto do site pro lado e nao ficar atrás do menu
        })
        $('#botaoFechar').click(function() {
            $('#menulateral').css('display', 'none');
            $(".div-botao").css("margin-left", "auto")
        })
    })

})


// resolvendo com toggle:

// $("#botaoAbrir").click(function(){
//     $("#menulateral").toggle() ///pode ser show()
//     $(".div-botao").css("margin-left", "250px")
// })

// $("#botaoFechar").click(function(){
//     $("#menulateral").hide()
//     $(".div-botao").css("margin-left", "0px")
// })