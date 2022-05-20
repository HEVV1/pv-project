const BLOCK_TABLE_GRAPHIC = '.block-table.scrollable';
var counter = 0;
$(function () {
  $(BLOCK_TABLE_GRAPHIC).on('mousewheel scroll', function (event, delta) {
    let scrollOffset = $(this)[0].scrollWidth - $(this)[0].clientWidth;
    if (event.deltaY == -1 && $(BLOCK_TABLE_GRAPHIC).scrollLeft() < scrollOffset) {
      counter = $(BLOCK_TABLE_GRAPHIC).scrollLeft() + 200;
    }
    else if (event.deltaY == 1 && $(BLOCK_TABLE_GRAPHIC).scrollLeft() > 0) {
      counter = $(BLOCK_TABLE_GRAPHIC).scrollLeft() - 200;
    }
    if ($(BLOCK_TABLE_GRAPHIC).scrollLeft() >= scrollOffset - 50) {
      $('.button-scroll-left', BLOCK_TABLE_GRAPHIC).addClass('inactive');
    }
    else {
      $('.button-scroll-left', BLOCK_TABLE_GRAPHIC).removeClass('inactive');
    }
  });
  $('.button-scroll-left', BLOCK_TABLE_GRAPHIC).on('click', function () {
    let scrollOffset = $(BLOCK_TABLE_GRAPHIC)[0].scrollWidth - $(BLOCK_TABLE_GRAPHIC)[0].clientWidth;
    if ($(BLOCK_TABLE_GRAPHIC).scrollLeft() < scrollOffset) {
      counter = $(BLOCK_TABLE_GRAPHIC).scrollLeft() + 200;
      $(BLOCK_TABLE_GRAPHIC).animate({
        scrollLeft: counter
      }, 0)
    }
  })
})