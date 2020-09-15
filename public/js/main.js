$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.main-menu').addClass('fixed-top');
    } else {
        $('.main-menu').removeClass('fixed-top')
    }
})