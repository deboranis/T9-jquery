/*

1. Crie uma funcionalidade que armazena o valor do input e apresenta esse valor na tela, preenchendo
o elemento <h2> do texto.

1.2. O texto replicado inicial é: "A desenvolvedora mais incrível desse ano será a...", e o valor
do input deve completar a frase.

2. Não esqueça de validar o input de forma a não replicar valores vazios


*/


$(document).ready(function() {

    $('#botao-replicar').click(function() {
        let fulana = $('#campo-nome').val();
        let inputValido = fulana.trim();

        if (inputValido != '') {
            $('h2').text('A desenvolvedora mais incrível desse ano será a... ' + fulana);
            $('input').val('');
        } else {
            alert('preenche o campo, desgraçaaa');
        }
    })
})