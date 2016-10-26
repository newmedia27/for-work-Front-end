(function ($) {
$('.resume').click(function (event) {
    event.preventDefault();
    $('.black_wrapper').fadeIn(400,function () {
        $('.resume_info').css('display', 'block').animate({
            'opacity': 1,
            'top': '20%'
        },400)
    })
});

    $('.black_wrapper, .close').click(function () {
        $('.resume_info').animate({
            'opacity': 0,
            'top': '30%'
        }, 400, function () {
            $(this).css('display', 'none');
            $('.black_wrapper').fadeOut(400);
        });
    });
})(jQuery);
