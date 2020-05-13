/*
  1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"

  2. Preencha os spans do html utilizando JQuery, adicionando informações suas. 
  ATENÇÃO! As informações devem estar estar guardadas em variáveis!

  3. Imagine que você muda com frequencia de opinião sobre um dos seus filmes favoritos. 
  Sendo assim, crie uma variável "favDoMomento" com esse filme

  3. selecione o h1 e altere seu texto para "sobre mim". Acrescente também a classe 'titulo' para que ele 
  fique bacanudo

  4. Adicione as classes 'list' e 'item-list' na lista e nos itens de lista, utilizando JQuery
  
  5. Adicionei uma classe errada! Suma com a classe 'wrongClass', utilizando JQuery
*/

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