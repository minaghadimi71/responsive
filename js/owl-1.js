$(document).ready(function () {
    var carousel = $("#owl-1");

    carousel.owlCarousel({
        margin: 30,
        slideSpeed : 500,
        navigation: true,
        items:1,
        autoplay: true,
        loop: true,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="fa fa-arrow-left left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right right" aria-hidden="true"></i>'],

    });

    $(".one").click(function(e){
        e.preventDefault();
        carousel.trigger("to.owl.carousel", [0, 500, true]);
    });

    $(".two").click(function(e){
        e.preventDefault();
        carousel.trigger("to.owl.carousel", [1, 500, true]);
    });
});
