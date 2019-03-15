$(function() {
    $('textarea').bind('keydown keyup keypress change', function() {
        var thisValueLength = $(this).val().length;
        $('.count').html(thisValueLength);
    });
});

function submitText(){
    $(function() {
        let text = $('#user_input_text').val();
        if (text.length < 10){
            $('#error_message').text('テキストは１０文字以上入力してください');
            return;
        }
        window.sessionStorage.setItem(['myabu/user_text'],[text]);
        location.href = 'result.html';
    });
}
