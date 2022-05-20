$(function () {
    let today = new Date();

    // import translation setting files
    initDatepickerLanguageOptionLV();

    $('.datepicker').each(function(){
        let datepickerInput = $('input[type=\'text\']', this);

        datepickerInput.attr('readonly', 'true');
        
        datepickerInput.datepicker({
            'dateFormat': 'dd.mm.yy',
            'minDate': today,
            'firstDay': 1,
            'changeMonth': true,
            'changeYear': true
        });
    });
});