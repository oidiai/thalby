$(document).ready(function(){

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

    $( function() {
        $( "#accordion" ).accordion();
    } );
});