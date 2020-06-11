$(document).ready(function () {

    $('.dropdown').hover(function () {
        $(this).addClass("show");
        $(this).find(".dropdown-menu").addClass("show");
        
    }, function () {
        $(this).removeClass("show");
        $(this).find(".dropdown-menu").removeClass("show");
    })
    $(window).scroll(function(){
        if($('html').scrollTop() > 150){
            $('.navbar').addClass('is-sticky')
        }else{
            $('.navbar').removeClass('is-sticky')
        }
    })
})