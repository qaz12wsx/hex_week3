$(document).ready(function () {
    $('.menu-list').on('click', function (e) {
        e.preventDefault();
        $('.hd_container .mobile-menu-list').toggleClass('showdmenu');
    });
});
