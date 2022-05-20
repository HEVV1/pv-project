$(function () {  
  $('.form-check-label', '.layout-form').on('click', function () {
    if (!$('.form-check-input').is(':checked')) {
      $('.column-user-data', '.layout-form').css('display', 'none');
      $('.column-not-user-data', '.layout-form').removeClass('col-lg-12');
      $('.column-not-user-data', '.layout-form').addClass('col-lg-24');
    }
    else{
      $('.column-user-data', '.layout-form').css('display', 'block');
      $('.column-not-user-data', '.layout-form').addClass('col-lg-12');
      $('.column-not-user-data', '.layout-form').removeClass('col-lg-24');
    }
  })
})