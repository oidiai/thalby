$(document).ready(function(){
    // carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        navText: [ '', ' ' ],
        autoplay:true,
        autoplayTimeout:2500,
        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });

    //burger menu open
    $('.menu').on("click", function () {
        $('header nav ul li').css('display','inherit').css('margin-bottom', '7px');
        $('.menu').css('display','none');
        $('.logo').css('top','15px');
        $('.action_bar').css('align-self','flex-start');
    });
    //burger menu close
    $('.close').on("click", function () {
        $('header nav ul li').css('display','none');
        $('.menu').css('display','inherit');
        $('.logo').css('top','inherit');
        $('.action_bar').css('align-self','inherit');
    });


    // button scroll to top
    let btn = $('#to-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(toTop) {
        toTop.preventDefault();
        $('html, body').animate({scrollTop:0}, '800');
    });
});


