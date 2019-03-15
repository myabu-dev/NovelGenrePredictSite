$(function() {
    $('textarea').bind('keydown keyup keypress change', function() {
        var thisValueLength = $(this).val().length;
        $('.count').html(thisValueLength);
    });
});

