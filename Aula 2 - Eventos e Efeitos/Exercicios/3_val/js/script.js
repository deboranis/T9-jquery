$(document).ready(function() {
    // const fulana = $('#campo-nome').val();
    // if (fulana == undefined || fulana == '') {
    //     alert('por favor, preencha o campo, desgraça');
    //     $('input').val('');
    //     return false;
    // } else {

    $('#botao-replicar').click(function() {
        const fulana = $('#campo-nome').val();
        $('h2').text('A desenvolvedora mais incrível desse ano será a... ' + fulana);
        $('input').val('');
    })
})