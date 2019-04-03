$(document).ready(function () {
    var carousel = $("#owl-3");

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
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            900:{
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

});
