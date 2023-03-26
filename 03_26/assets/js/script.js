// ㅡshow/hide효과ㅡ
// $('.show-btn').click(function(){
//     $('.container div').show()
// })
// $('.hide-btn').click(function(){
//     $('.container div').hide()
// })
// $('.toggle-btn').click(function(){
//     $('.container div').toggle()
// })

// ㅡslide효과ㅡ
// $('.show-btn').click(function(){
//     $('.container div').slideDown()
// })
// $('.hide-btn').click(function(){
//     $('.container div').slideUp()
// })
// $('.toggle-btn').click(function(){
//     $('.container div').slideToggle()
// })

// ㅡfade효과ㅡ
$('.show-btn').click(function(){
    $('.container div').fadeIn()
})
$('.hide-btn').click(function(){
    $('.container div').fadeOut()
})
$('.toggle-btn').click(function(){
    $('.container div').fadeToggle()
})

// ㅡclass 넣고 빼기ㅡ
// $('.add-btn').click(function(){
//     $('.container div').addClass('active')
// })
// $('.remove-btn').click(function(){
//     $('.container div').removeClass('active')
// })
// $('.toggle-btn').click(function(){
//     $('.container div').toggleClass('active')
// })

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 요소 탐색 메서드(children)
// $('.menu li').mouseenter(function(){
//     $(this).children('.sub-menu').stop().slideDown();
// })
// $('.menu li').mouseout(function(){
//     $(this).children('.sub-menu').stop().slideUp();
// })

// 요소 탐색 메서드(siblings)

// $('.btn span').click(function(){
//     $(this).addClass('active')
//     $(this).siblings().removeClass('active')
// })