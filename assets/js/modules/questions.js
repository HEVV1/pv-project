const objQuestion       = $('.wrapper-question');
const objSubAnswer      = '.block-sub-answer';
const objContent        = '.block-hidden-content';
const objTextarea       = '.block-textarea';
const objSubTextarea    = '.block-sub-textarea';
var areCommentsOpened = new Array();
var doReply = new Array();
var doSubReply = new Array();

//Fills the array of the boolean variables
$(function() {
    for (let i = 0; i < objQuestion.length; i++) {
        areCommentsOpened[i] = false;
        doReply[i] = false;        
    }    
    for (let i = 0; i < objQuestion.length; i++) {
        doSubReply[i] = new Array();
        for (let j = 0; j < objQuestion.eq(i).find('.sub-answer').length; j++) {
            doSubReply[i][j] = false;
        }  
    }    
})
$(function(){
    let comments = $('.check-comment', objQuestion);
    comments.on('click', function(){        
        let currentContent = $(objContent, $(this).parents()[3]);
        let currentTextarea = $(objTextarea, $(this).parents()[3]);
        let currentSubtextarea = $(objSubTextarea, $(this).parents()[6]);
        let currentQuestionIndex = objQuestion.index($(this).parents()[3]);
        if (!areCommentsOpened[currentQuestionIndex]) {
            currentContent.addClass('active');
            $($(this).parents()[3]).addClass('active');
            areCommentsOpened[currentQuestionIndex] = true;
        }
        else{
            currentContent.removeClass('active');
            currentTextarea.removeClass('active');
            currentSubtextarea.removeClass('active');
            $($(this).parents()[3]).removeClass('active');
            areCommentsOpened[currentQuestionIndex] = false;
            doReply[currentQuestionIndex] = false;
            for (let i = 0; i < $(objSubAnswer, $(this).parents()[3], $(this).parents()[6]).length; i++) {
                doSubReply[currentQuestionIndex][i] = false;
            }
        }
    })
})
$(function(){
    let reply = $('.reply-comment', objQuestion);
    reply.on('click', function(){
        let currentContent = $(objContent, $(this).parents()[3]);
        let currentTextarea = $(objTextarea, $(this).parents()[3]);
        let currentSubtextarea = $(objSubTextarea, $(this).parents()[6]);
        let currentQuestionIndex = objQuestion.index($(this).parents()[3]);
        if (areCommentsOpened[currentQuestionIndex] == false && doReply[currentQuestionIndex] == false) {
            currentContent.addClass('active');
            currentTextarea.addClass('active');
            $($(this).parents()[3]).addClass('active');
            areCommentsOpened[currentQuestionIndex] = true;
            doReply[currentQuestionIndex] = true;
        }
        else if(areCommentsOpened[currentQuestionIndex] == true && doReply[currentQuestionIndex] == false){
            currentTextarea.addClass('active');
            doReply[currentQuestionIndex] = true;
        }
        else if(areCommentsOpened[currentQuestionIndex] == true && doReply[currentQuestionIndex] == true){
            currentContent.removeClass('active');
            currentTextarea.removeClass('active');
            currentSubtextarea.removeClass('active');
            $($(this).parents()[3]).removeClass('active');
            areCommentsOpened[currentQuestionIndex] = false;
            doReply[currentQuestionIndex] = false;
            for (let i = 0; i < $(objSubAnswer, $(this).parents()[3], $(this).parents()[6]).length; i++) {
                doSubReply[currentQuestionIndex][i] = false;
            }
        }
    })
})
$(function(){
    let subReply = $('.sub-reply', objQuestion);
    subReply.on('click', function(){        
        let currentSubtextarea = $(objSubTextarea, $(this).parents()[2], $(this).parents()[3], $(this).parents()[6]);
        let currentQuestionIndex = objQuestion.index($(this).parents()[6]);
        let currentSubAnswerIndex = $(objSubAnswer, $(this).parents()[3], $(this).parents()[6]).index($(this).parents()[2]);
        if (!doSubReply[currentQuestionIndex][currentSubAnswerIndex]) {
            currentSubtextarea.addClass('active');
            doSubReply[currentQuestionIndex][currentSubAnswerIndex] = true;
        }
        else{
            currentSubtextarea.removeClass('active');
            doSubReply[currentQuestionIndex][currentSubAnswerIndex] = false;
        }
    })
})