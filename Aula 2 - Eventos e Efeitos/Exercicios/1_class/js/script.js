$(document).ready(function() {

    let nick = 'Debs';
    let favs = 'Relatos Selvagens, Marriage Story';
    let city = 'São Paulo';
    let favDoMomento = " Parasita, Bacurau";

    $('*').css('font-family', 'Arial, Helvetica, sans-serif')

    $('#nickname').text(nick)
    $('#favoritos').text([favs, favDoMomento]) // aqui estamos gerando uma array do que vai aparecer
    $('#cidade').text(city)

    $('h1').addClass('titulo').text('Sobre mim:')
    $('ul').addClass('list')
    $('ul').css('flex-direction', 'column') // bonus
    $('span').addClass('item-list') // tá no span pra não afetar o resto do texto
    $('li').removeClass('wrongClass')
})

// tambem da pra organizar assim:
// $('h1')
// .addClass('titulo')
// .text('Sobre mim:')

//obs:
//$("li").eq(0).removeClass("wrongClass")
// removeria apenas do primeiro elemento da UL