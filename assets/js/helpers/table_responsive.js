const BLOCK_TABLE_SCROLLABLE = '.block-table.scrollable';

$(function(){
  tableCheckWidth();
  $(window).on('resize', function(){
    tableCheckWidth();
  })
})

function tableCheckWidth(){
  if ($('.block-table.responsive').width() <= 1100) {
    $('.block-table.responsive').addClass('active');
    $('.button-scroll-left', '.block-table.responsive').removeClass('inactive');
  }
  else{
    $('.block-table.responsive').removeClass('active');
    $('.button-scroll-left', '.block-table.responsive').addClass('inactive');
  }
}