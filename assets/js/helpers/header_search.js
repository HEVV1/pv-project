const BLOCK_HEADER_SEARCH = '.block-search-header';
const BLOCK_ICON = '.block-icon-text';
const BLOCK_ICON_SEARCH = '.block-icon-text.search';
const REGEX = /^\s*$/; //FREE SPACE DETECTOR
var isItOpened = false;
var isWindowTableSized = false;

$(function(){   
  conditions($(window).width())
  $(window).on('resize', function(){        
    conditions($(window).width())
    if (isItOpened) {
      if (!isWindowTableSized) {    
        removeAllFunctions();    
        showSearch('active');        
      }
      else if(isWindowTableSized){        
        addAllFunctions();        
      } 
    }
  })  
})

$(function(){
  $(BLOCK_ICON_SEARCH).on('click', function(e){
    if (!isItOpened && !isWindowTableSized) {
      e.preventDefault();
      showSearch('active');
      isItOpened = true;
    }
    else if(!isItOpened && isWindowTableSized){
      e.preventDefault();
      addAllFunctions();
      isItOpened = true;
    } 
    else if(isItOpened && !REGEX.test($('input[name="search_header"]').val())){}
    else{
      e.preventDefault();
      removeAllFunctions();
      isItOpened = false;
    }
  })
})

// Encapsulation
function conditions(width){
  if (width < 992) {   
    isWindowTableSized = true;      
  }  
  else{
    isWindowTableSized = false;   
  }
}

function addAllFunctions(){
  showSearch('active');
  manageIconsAddClass('search', 'move-search-992');
  manageIconsAddClass('login', 'inactive');
  manageIconsAddClass('my-profile', 'inactive');
  manageIconsAddClass('notification', 'inactive');     
  $('.wrapper-image', '.layout-header').addClass('inactive');
  $('.block-button-menu').addClass('inactive');
}
function removeAllFunctions(){
  hideSearch('active');
  manageIconsRemoveClass('search', 'move-search-992');
  manageIconsRemoveClass('login', 'inactive');
  manageIconsRemoveClass('my-profile', 'inactive');
  manageIconsRemoveClass('notification', 'inactive');     
  $('.wrapper-image', '.layout-header').removeClass('inactive');
  $('.block-button-menu').removeClass('inactive');
}



function showSearch(objClass) {
  $(BLOCK_HEADER_SEARCH).addClass(objClass);
}
function hideSearch(objClass) {
  $(BLOCK_HEADER_SEARCH).removeClass(objClass);
}
function manageIconsAddClass(objType, objClass) {
  $(BLOCK_ICON+'.'+objType).addClass(objClass);
}
function manageIconsRemoveClass(objType, objClass) {
  $(BLOCK_ICON+'.'+objType).removeClass(objClass);
}