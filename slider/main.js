'use strict';

$(document).ready(function () {


    function backgrounds() {
        var arr = $('.pic');
        for (var i = 0; i < arr.length; i++) {

            arr.eq(i).css({
                'background-image': 'url(img/' + (i + 1) + '.png)',
                'background-size': '100% 100%'
            });
        }
    }

    backgrounds();
    


    var arr = $('.slide');

    function SlideImg() {

        for (var i = 0; i < arr.length; i++) {
            arr.eq(i).css({
                'background-image': 'url(img/' + (i + 1) + '.png)',
                'background-size': '100% 100%'
            });
        }
    }

    SlideImg();

    var next = $('.slider_r_btn');
    var prev = $('.slider_l_btn');
    var i = 0;
    prev.css('visibility', 'hidden'); // изначально скрываем кновку влево, так как стартует с первой картинки

    next.click(function () {
        i++;
        if (i > 0) {         // если картинка не первая в слайдере, то отображаем кнопку влево
            prev.css('visibility', 'visible');
        }
        if (i == arr.length - 1) {
            arr.eq(0).css({   // выполняется один раз при условии, с последующим скрыванием кнопки
                'margin-left': (-100 * i) + '%',
                'transitionDuration': '1s'
            });
            next.css('visibility', 'hidden'); // а вот и скрывание кнопки
        } else {
            arr.eq(0).css({  // выполняется постоянно, без скрывания кнопки
                'margin-left': (-100 * i) + '%',
                'transitionDuration': '1s'
            });
        }
        // console.log(i);
    });

    prev.click(function () {

        i--;
        if (i < arr.length - 1) { // если текущая картинка последняя, при нажатии влево, отобразится кнопка вправо
            next.css('visibility', 'visible');
        }
        if (i == 0) {
            arr.eq(0).css({ //выполняется один раз при условии, с последующим скрыванием кнопки
                'margin-left': (-100 * i) + '%',
                'transitionDuration': '1s'
            });
            prev.css('visibility', 'hidden');
        } else {
            arr.eq(0).css({  // выполняется постоянно, без скрывания кнопки
                'margin-left': (-100 * i) + '%',
                'transitionDuration': '1s'
            });
        }
        // console.log(i);

    });

});


//partials/app/js