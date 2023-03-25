// $('p').css({'display':'none'});

// $('.show-btn').click(function(){
//     $('p').css({'display':'block'});
// });

// $('.hide-btn').click(function(){
//     $('p').css({'display':'none'});
// });

$('.show-btn').click(function(){
    $('.box1').show()
})

$('.hide-btn').click(function(){
    $('.box1').hide()
})

$('.btn').mouseenter(function(){
    $('.box2').show()
})
$('.btn').mouseleave(function(){
    $('.box2').hide()
})