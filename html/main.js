// $('.nav_box a').mouseover(function(){
//     $(this).css({
//         backgroundColor:'rgb(255, 173, 185)',
//     })
// })
// .mouseout(function(){
//     $(this).css({
//         backgroundColor:'rgb(255, 235, 238)',
//     })
// });

$('.nav .fa-bars').click(function(){
    $('.nav_box').toggle(500);
});

$('.nav_box a').click(function(){
    $('.nav_box').hide(500);
});