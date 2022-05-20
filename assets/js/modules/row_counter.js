const ROW_SELECTOR = '.block-row-counter';

$(function(){
  var value = $(ROW_SELECTOR).find(':selected').text();
  for (let i = 0; i < value; i++) {
    $(BLOCK_TABLE_GRAPHIC+' table tbody tr').eq(i).addClass('active');    
  }
  $(ROW_SELECTOR).on('change', function(){
    $(BLOCK_TABLE_GRAPHIC+' table tbody tr').removeClass('active');
    value = $(ROW_SELECTOR).find(':selected').text();
    for (let i = 0; i < value; i++) {
      $(BLOCK_TABLE_GRAPHIC+' table tbody tr').eq(i).addClass('active')
    }
  })
})