var isItOpened = false;
const SUPPORT_MENU = '.block-support-menu';
const BUTTON_SUPPORT_MENU_NAVIGATION = '.block-button-support-navigation';
$(function(){
    $(BUTTON_SUPPORT_MENU_NAVIGATION).on('click', function(){
        if (!isItOpened) {
            $(SUPPORT_MENU).addClass('active');
            isItOpened = true;
        }
        else{
            $(SUPPORT_MENU).removeClass('active');
            isItOpened = false
        }      
    })
})
$(function(){
    let link = $('a', '.block-support-navigation');
    link.on('click', function(){ 
        link.removeClass('active');
        $(this).toggleClass('active');
        $(SUPPORT_MENU).removeClass('active');
        isItOpened = false
    })   
})