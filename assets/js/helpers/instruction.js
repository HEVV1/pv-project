const INSTRUCTION = '.wrapper-instruction';
$(function(){
  $(INSTRUCTION).on('click', function(){
    $('.block-hidden-content', $(this).parent()).animate({
      height: 'toggle'
    }, 150)
    $(this).toggleClass('active');
  })
})  