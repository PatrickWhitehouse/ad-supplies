$('document').ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        animateOut: 'fadeOut'
    });

    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('nav ul').slideToggle('slow');
    });
});