$(document).ready(function(){
   
    $(window).scroll(function(){
        
        if ($(window).scrollTop() > 970) {
            $('.navbar').addClass('fixed-top');
        }
        if ($(window).scrollTop() < 971) {
            $('.navbar').removeClass('fixed-top');
        }
        
    });  
});



$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeInUp');
}, {
    offset: '50%'
});


$('#cover').localScroll();
$('#navbar').localScroll();
$('#parallax').localScroll();
$('.footer').localScroll(); 
$('#main-nav').localScroll();