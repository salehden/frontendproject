$(document).ready(function () {
    // index.html start
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
    // toggle main menu for mobile and tablet screen
    $(".toggle-elem").click(function(){
        $(this).parent().parent().next().toggleClass('d-none');
        $(this).parent().parent().next().children().children().children().children().click(function(e){
            e.preventDefault();
            $(this).parent().next().toggleClass('d-none');
        });
    })
    // header js end

    // logo carousel js
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
    $('#logo-4-carousel').owlCarousel({
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
                items: 4
            }
        }
    });
    // person carousel js
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
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    // counter section js
    $('.counter .value').counterUp({
        delay: 10,
        time: 1000
    });
    // index.html end
    // 
    // faq.html start
})

let i = document.querySelectorAll('.show-faq-area a');

i.forEach(icon => {
    icon.addEventListener('click', function(e){
        if(icon.lastElementChild.classList.contains('fa-plus')){
            icon.lastElementChild.classList.remove('fa-plus');
            icon.lastElementChild.classList.add('fa-minus');
        }else{
            icon.lastElementChild.classList.add('fa-plus');
        }
        e.preventDefault();
        icon.parentNode.nextElementSibling.classList.toggle('d-none');        
        
    })
})
