/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
    'use strict';

    
    var addCommentsInputBox2 = function (user,add) {
        var $newComment;

        if (user !== ' ') {
            $newComment = $('<p class='+add+'>').text(user);
            $newComment.hide();
            $('.comments').append($newComment);
            $newComment.fadeIn();   
        }
    };

    $('.comment-inputuser1 button').on('click', function () {
        addCommentsInputBox2($('.comment-inputuser1 input').val(),'user1');
        $('.comment-inputuser1 input').val('');   
    });

    $('.comment-inputuser1 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            addCommentsInputBox2($('.comment-inputuser1 input').val(),'user1');
            $('.comment-inputuser1 input').val('');        
        }
    });

    $('.comment-inputuser2 button').on('click', function () {
        addCommentsInputBox2($('.comment-inputuser2 input').val(),'user2');
        $('.comment-inputuser2 input').val('');   
    });

    $('.comment-inputuser2 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            addCommentsInputBox2($('.comment-inputuser2 input').val(),'user2');
            $('.comment-inputuser2 input').val('');   
        }
    });
};

$(document).ready(main);