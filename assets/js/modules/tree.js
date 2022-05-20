$(function () {
  let block_tree = '.block-worker-structure-tree';
  let block_tree_last_element = '.block-worker-structure-tree.last-element';
  let block_tree_element = '.block-tree-element';
  // For the line correction
  let block_parent_line = '.line.parent-line';
  let height_of_the_last_element = 0;
  let element_count = 0;
  $(block_tree_element).on('click', function () {
    element_count = parseInt($(block_tree_last_element).children('.expandable-content').children('.block-tree-element').length);
    height_of_the_last_element = (element_count * 46) + (element_count * 20) + 46 + 22;
    $($(this).parent()).children('.expandable-content').animate({
      height: 'toggle'
    })
    if ($($(this).parent()).hasClass('last-element')) {
      $(block_parent_line).css('height', 'calc(100% - ' + height_of_the_last_element + 'px)');
      $(block_parent_line, $(this).parent()).css({ height: 'calc(100% - ${h}px)' });
    }
  })
})