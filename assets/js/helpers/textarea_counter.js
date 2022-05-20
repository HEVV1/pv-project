$(function(){
    let textarea = 'textarea';
    let textAreaCounter = $('.textarea-counter');
    let totalArray = new Array();
    for (let i = 0; i < textAreaCounter.length; i++) {        
        if ($(textarea, textAreaCounter.eq(i).parents()[0]).attr('maxlength') !== undefined) {
            totalArray[i] = parseInt($(textarea, textAreaCounter.eq(i).parents()[0]).attr('maxlength'));            
        }
        $('.textarea-counter').eq(i).text(totalArray[i]);
    }
    $(textarea).on('init input', function(){        
        let counter = $(this).val().length;
        let textAreaIndex = $(textarea).index($(this));
        totalArray[textAreaIndex] = 1200;
        totalArray[textAreaIndex] -= counter;
        $('.textarea-counter', $(this).parents()[1]).text(totalArray[textAreaIndex]);
    })   
})