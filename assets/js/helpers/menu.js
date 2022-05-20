var isItMenuOpened = true;
$(function () {
  $('.cancel', '.block-menu').on('click', function () {
    if (isItMenuOpened) {
      $('.block-menu').addClass('inactive');
      $('.wrapper-page-header-and-content').addClass('inactive');
      $('.wrapper-image', '.layout-header').addClass('removeMargins');
      isItMenuOpened = false;
    }
  })
  $('.block-button-menu').on('click', function () {
    if (!isItMenuOpened) {
      $('.block-menu').removeClass('inactive');
      $('.wrapper-page-header-and-content').removeClass('inactive');
      $('.wrapper-image', '.layout-header').removeClass('removeMargins');
      isItMenuOpened = true
    }
  })
})