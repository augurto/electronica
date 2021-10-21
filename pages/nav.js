// Navbar ===========================================================================
function navbar() {
    var active = $('.nav-two li'),
        ctrlMenu = $('.logo-nav > .fa');
    active.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('*:not(.logo-nav > .fa, .logo-nav .nav-two, .nav-two li)').click(function () {
        if (ctrlMenu.hasClass('fa-close')) {
            ctrlMenu.click();
        }
    });
    ctrlMenu.on('click', function () {
        $(this).toggleClass('fa-bars fa-close').next('ul').slideToggle();
    });
    $('.logo-nav > .fa, .logo-nav .nav-two, .nav-two li').click(function (event) {
        event.stopPropagation();
    });
    $(window).on('resize', function () {
        if ($(window).innerWidth() >= 1000) {
            $('.nav-two').css('display', 'block');
        } else {
            $('.nav-two').css('display', 'none');
            ctrlMenu.addClass('fa-bars').removeClass('fa-close');
        }
    });
}
navbar();