$(document).ready(function () {
    $('.menu-list').on('click', function (e) {
        e.preventDefault();
        $('.hd_container .mobile-menu-list').toggleClass('showdmenu');
    });
    $('#plus').click(function(e) {
        e.preventDefault();
        fieldName = 'quantity';
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentVal)) {
          $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
          $('input[name=' + fieldName + ']').val(0);
        }
      });
      $("#minus").click(function(e) {
        e.preventDefault();
        fieldName = 'quantity';
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentVal) && currentVal > 0) {
          $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
          $('input[name=' + fieldName + ']').val(0);
        }
      });
});
