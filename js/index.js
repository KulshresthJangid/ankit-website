$(document).ready(function () {
    $('.openMenu').on('click', function () {
        $('.closeMenu').fadeIn();
        $('.openMenu').hide();
        $('.openMenu').fadeOut();
    })
    $('.closeMenu').on('click', function () {
        $('.openMenu').fadeIn()
        $('.closeMenu').hide();
        $('.closeMenu').fadeOut();
    })
})