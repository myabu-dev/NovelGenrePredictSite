$(function() {
    $('textarea').bind('keydown keyup keypress change', function() {
        var thisValueLength = $(this).val().length;
        $('.count').html(thisValueLength);
    });
});

function submitText(){
    $(function() {
        let text = $('#user_input_text').val();
        window.sessionStorage.setItem(['user_text'],[text]);
        location.href = 'result.hetml';
    });
}
