var link = $('.wrapper-link', '.block-menu');
var isLinkActive = new Array;

$(function(){    
    for (let i = 0; i < link.length; i++) {
        isLinkActive[i] = false;
    }    
})

$(function(){
    let dropdown = $('.wrapper-dropdown-link');
    dropdown.on('click', function(){
        if (!isLinkActive[dropdown.index($(this)) + 1]) {
            $('.block-hidden-content', $(this).parents()[1]).animate({
                height: 'toggle'
            })
            extendDropdownLink($(this));
            isLinkActive[dropdown.index($(this)) + 1] = true;
        }
        else{
            $('.block-hidden-content', $(this).parents()[1]).animate({
                height: 'toggle'
            })
            removeDropDownLink($(this));
            isLinkActive[dropdown.index($(this)) + 1] = false;
        }
    })
})

function extendDropdownLink(objThis){
    $('i', objThis).addClass('active');
    $(objThis.parents()[1]).addClass('active');
}
function removeDropDownLink(objThis){
    $('i', objThis).removeClass('active');
    $(objThis.parents()[1]).removeClass('active');
}

$(function(){
    for (let i = 0; i < link.length; i++) {
        if (link.eq(i).hasClass('superActive')) {
            isLinkActive[i] = true;
            $(link.eq(i)).addClass('active');
            $('i', link.eq(i)).addClass('active');
            $('.block-hidden-content', link.eq(i)).addClass('active');
        }
    }
})