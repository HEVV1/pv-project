$(function(){
  $('.wrapper-button-filter').on('click', function(){
    $('.wrapper-checkboxes-rows', '.block-filter-checkboxes').animate({
      height: 'toggle'
    }, 150)
    $('.wrapper-filter-parameters').animate({
      height: 'toggle'
    }, 150)
  })
})
$(function(){
  $('.button-filter.worker-structure').on('click', function(){
    $('.block-workers-structure').animate({
      height: 'toggle'
    })
  })
})