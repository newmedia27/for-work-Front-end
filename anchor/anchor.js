$(document).ready(function () {
    $('a[href*="#"]').click(function () {


        var obj = $(this).attr('href').replace('#', '');

        $('html, body').animate({
            scrollTop : $('div[id="'+obj+'"]').offset().top
        }, 1500);
    });



    /*btn UP*/
    var up = $('.btn_up');
    var top_scroll = 500;
    var i = 0;
    $(window).scroll(function () {
        if ($(window).scrollTop() > top_scroll){
            up.css('display', 'flex')
        }
        else {
            up.css('display', 'none')
        }
    });
    up.click(function () {
        $('html, body').animate({
            scrollTop: 0
        },500);

    });
    return false
});
