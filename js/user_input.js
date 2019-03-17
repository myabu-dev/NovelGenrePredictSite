$(function() {
    $('textarea').bind('keydown keyup keypress change', function() {
        var thisValueLength = $(this).val().length;
        $('.count').html(thisValueLength);
    });
});

$(document).ready(function() {
    let getDevice = (function(){
        let ua = navigator.userAgent;
        if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
            return 'sp';
        }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
            return 'tab';
        }else{
            return 'other';
        }
    })();

    if( getDevice == 'sp' ){
        //スマホ
        $('.content').css('display','none');
        $('#message').text('スマートフォンではメモリが足りないため実行できません<br>PCでの閲覧をお願いします');
    }else if( getDevice == 'tab' ){
        //タブレット
        $('#message').text('メモリが不足し結果が表示できない可能性があります<br>PCでの閲覧をお願いします');
    }else if( getDevice == 'other' ){
        //その他
    }
});


function submitText(){
    $(function() {
        window.sessionStorage.clear();
        let text = $('#user_input_text').val();
        if (text.length < 10){
            $('#error_message').text('テキストは１０文字以上入力してください');
            return;
        }
        window.sessionStorage.setItem(['myabu/user_text'],[text]);
        location.href = 'result.html';
    });
}
