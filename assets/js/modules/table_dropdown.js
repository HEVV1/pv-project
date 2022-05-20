const TABLE_HEADER = '.block-table-header-expandable';
const TABLE_EXPANDABLE = '.block-table.table-expandable';

$(function(){ 
  $(TABLE_HEADER).on('click', function(){
    $($(this)).toggleClass('active')
    $(TABLE_EXPANDABLE, $(this).parent()).animate({
      height: 'toggle'
    })
  })
})