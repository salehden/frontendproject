$(document).ready(function () {
    // header js start
    $('.dropdown').hover(function () {
        $(this).addClass("show");
        $(this).find(".dropdown-menu").addClass("show");

    }, function () {
        $(this).removeClass("show");
        $(this).find(".dropdown-menu").removeClass("show");
    });
    // add sticky class navbar
    $(window).scroll(function () {
        if ($('html').scrollTop() > 70) {
            $('.navbar').addClass('is-sticky')
        } else {
            $('.navbar').removeClass('is-sticky')
        }
    });
    // let mainMenu = document.querySelector('.main-menu');
    $(".toggle-elem").click(function(){
        $(this).parent().next().toggleClass('d-none');
        console.log();
        
        $(this).parent().next().children().children().children().children().click(function(e){
            e.preventDefault();
            console.log( $(this).parent().next());
            $(this).parent().next().toggleClass('d-none');
            
        });
        


        
        
        
    })
    // header js end
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