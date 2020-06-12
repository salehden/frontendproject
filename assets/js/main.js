$(document).ready(function () {

    $('.dropdown').hover(function () {
        $(this).addClass("show");
        $(this).find(".dropdown-menu").addClass("show");

    }, function () {
        $(this).removeClass("show");
        $(this).find(".dropdown-menu").removeClass("show");
    });
    $(window).scroll(function () {
        if ($('html').scrollTop() > 70) {
            $('.navbar').addClass('is-sticky')
        } else {
            $('.navbar').removeClass('is-sticky')
        }
    });
    $('#logo-carousel').owlCarousel({
        rtl: true,
        dots: false,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $('#person-carousel').owlCarousel({
        ltr: true,
        dots: true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $('.counter .value').counterUp({
        delay: 10,
        time: 1000
    });
})