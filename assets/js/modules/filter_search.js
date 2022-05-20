const BLOCK_DROPDOWN = '.block-filter-dropdown';
const BLOCK_WRAPPER_DROPDOWN = '.wrapper-filter-dropdown';
const BLOCK_SEARCH_FILTER = '.wrapper-filter';
const BLOCK_FILTER_TOP = '.block-filter-top';
const PARAMETERS = '.wrapper-text';
const INPUT_SEARCH = 'input[name=\'search_filter\']';
const CANCEL_PARAMETER = '.wrapper-icon';
var keysArray = new Array();



// Fill Array with parameters id on start
$(function(){  
  console.log();
  $(PARAMETERS, BLOCK_WRAPPER_DROPDOWN).each(function (index, element) {    
    if (keysArray.indexOf($(element).attr('id')) == -1) {
      keysArray[$(element).attr('id').toLowerCase()] = $(element).children().text().toLowerCase();
    }
  });
});

$(function(){
  $(document).on('click', function(e){
    if (!$(e.target).is('i')) {
      if (!$(INPUT_SEARCH).is(':focus')) {
        $(BLOCK_DROPDOWN).removeClass('active');
      }
    }
  })
})
// Click and search
$(function(){
  $(BLOCK_SEARCH_FILTER).on('click', function(e){
    if (!$(e.target).is('i')) {
      $(INPUT_SEARCH).focus();
      if ($(INPUT_SEARCH).is(':focus')) {
        $(BLOCK_DROPDOWN).addClass('active');
        search();
      }
    }
  })
})
// Add the parameter
$(function(){
  $(PARAMETERS, BLOCK_WRAPPER_DROPDOWN).on('click', function(e){       
    for (let key in keysArray) {
      if (key == $(this).attr('id')) {
         // Hide selected parameter from sugestion list
        $('#'+$(this).attr('id'), BLOCK_WRAPPER_DROPDOWN).addClass('innactive');
        // Add selected parameters in top block
        $(BLOCK_FILTER_TOP).prepend(addChooseParameter($(this).attr('id'), keysArray[$(this).attr('id')]));
        $('#input_'+$(this).attr('id')).prop('checked', true);
        delete keysArray[$(this).attr('id')];
        cancel();
      }
    }    
  })
})

//Separate functions
function search(){
  $(INPUT_SEARCH).on('input', function(){
    for (const key in keysArray) {
      if (keysArray[key].indexOf($(INPUT_SEARCH).val().toLowerCase()) != -1) {        
        $('#'+key, BLOCK_WRAPPER_DROPDOWN).removeClass('innactive');
      }
      else{
        $('#'+key, BLOCK_WRAPPER_DROPDOWN).addClass('innactive');
      }  
    }
  })
}

function cancel(){
  $(CANCEL_PARAMETER, '.wrapper-choosed-parameters').on('click', function(){    
    for (const key in keysArray) {      
      if (keysArray[key].indexOf($(this).attr('data-cancel')+'"]'.toLowerCase()) == -1) {
        keysArray[$(this).attr('data-cancel')] = $('span', $(this).parent()).text().toLowerCase();
      }
    }
    $('[data-chparameters="'+$(this).attr('data-cancel')+'"]').remove(); 
    $('#input_'+$(this).attr('data-cancel')).prop('checked', false);
    $('#'+$(this).attr('data-cancel'), BLOCK_WRAPPER_DROPDOWN).removeClass('innactive');       
  })
}

function addChooseParameter(data, text){
  var parameter = '<div class="wrapper-choosed-parameters" data-chparameters="'+data+'">'+
                    '<div class="wrapper-icon" data-cancel="'+data+'">'+
                      '<i class="fal fa-plus"></i>'+
                    '</div>'+
                    '<div class="wrapper-text">'+
                      '<span class="styled-as-p4">'+text+'</span>'+
                    '</div>'+
                  '</div>';
  return parameter;
}