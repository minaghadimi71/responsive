$(document).ready(function () {
    var carousel = $("#owl-4");

    carousel.owlCarousel({
        margin: 30,
        slideSpeed : 500,
        navigation: true,
        items:1,
        autoplay: true,
        loop: true,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
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
