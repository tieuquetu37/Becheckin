$(document).ready(function() {
    // $('#multiple_items').slick({
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     prevArrow: $('.prev'),
    //     nextArrow: $('.next'),
    // });
    new WOW().init();
    pos = $("#menu-navbar").position();
    // pos2 = $("#navbar-brand").position();
    $(window).scroll(function() {
        var posScroll = $(document).scrollTop();
        if (parseInt(posScroll) > parseInt(pos.top)) {
            $("#menu-navbar").addClass('sticky');

        } else {
            $("#menu-navbar").removeClass('sticky');

        }
        // if (parseInt(posScroll) > parseInt(pos2.top)) {
        //     $("#d-inline-block").addClass('sticky2');
        // } else {
        //     $("#d-inline-block").removeClass('sticky2');
        // }
    });
});