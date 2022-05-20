'use strict';

function scrollToElement(element) {
    const offset = 130;

    // checkbox/radio has 0 offset, because it is not shown, scroll to next element instead (its' label)
    switch(element.attr('type')) {
    case 'checkbox':
    case 'radio':
        $('html, body').stop().animate({scrollTop: element.next().offset().top - 20 - offset}, 1000);
        break;
    default:
        $('html, body').stop().animate({scrollTop: element.offset().top - 20 - offset}, 1000);
    }
}