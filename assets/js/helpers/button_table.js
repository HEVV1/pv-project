CONST_TABLE_BUTTON = '.block-button-tables';
$(function () {
  $(CONST_TABLE_BUTTON).on('click', function () {   
    $(this).toggleClass('active');
    $('.block-menu-table-expandable', $($(this).parents()[2]).find('.wrapper-group-of-tables-expandable')).toggleClass('active');
    $('.block-menu-table').toggleClass('active');
  })
})