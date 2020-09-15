if ($(window).width() > 992) {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.main-menu').addClass('fixed-top');
        } else {
            $('.main-menu').removeClass('fixed-top')
        }
    })
}