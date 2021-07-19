$(document).ready(function () {
    $('.header .container .menu-list').on('click', function (e) {
        e.preventDefault();
        $('.header .container .mobile-menu-list').toggleClass('showdmenu');
    });
});
