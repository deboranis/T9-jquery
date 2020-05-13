$(document).ready(function() {

    $('#animate').click(function() {
        $('#content').animate({
                "width": "60%",
                "padding-top": "50px",
                "opacity": "0.5",
                "left": "30px"
            },
            2000,
            function() {
                alert('Animação terminou!')
            });
    })

})

//SCROLL TOP 
//problema - eu quero ir pro topo 

$(document).ready(function() {

    $("#buttonTop").click(function() {
        $("html, body").animate({
            scrollTop: "0"
        }, 3000)
    })
});


// EXEMPLO OFFSET()
$(document).ready(function() {
    console.log($("#button").offset(), 'quem é o offset')

    $("#button").click(function() {
        alert("Left:" + $(this).offset().left)
    })
})