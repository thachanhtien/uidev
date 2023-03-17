$(document).ready(function () {
    var weatherVN = 'http://api.apixu.com/v1/current.json?key=7c64a6c6e27d4e5991640512191904&q=Ho%20Chi%20Minh';
    var weatherNW = 'http://api.apixu.com/v1/current.json?key=7c64a6c6e27d4e5991640512191904&q=oslo';

    function getData(url, callback) {
        $.getJSON(url, function (data) {
            var temp = data.current.temp_c;
            var condition = data.current.condition.code;
            callback(temp, condition)
        })
    }

    // getData(weatherVN, function (temp, condition) {
    //     console.log("data viet nam")
    //     console.log(temp, condition)
    // })


    // getData(weatherNW, function (temp, condition) {
    //     console.log("data NW")
    //     console.log(temp, condition)
    // })



    // bg scroll

    // $(window).scroll(function () {
    //     var scrollTop = $(this).scrollTop();
    //     var $elements = $('.sec');
    //     var lengthElement = $elements.length;
    //     var bodyHeight = $("body").height();
    //     const $secForBG = $(".secForBG");
    //     $elements.each(function (index) {
    //         var elementHeight = $($secForBG[lengthElement - index - 1]).height();
    //         var bannerHeight = $($secForBG[lengthElement - index - 1]).offset().top + elementHeight;
    //         var opacityNumb = (bannerHeight - scrollTop) / elementHeight;
    //         $(this).css({
    //             opacity: function () {
    //                 return opacityNumb;
    //             }
    //         });
    //     });
    // });


    if ($(window).width() > 992) {
        // var scene1 = $('#scene1').get(0);
        // var parallaxInstance = new Parallax(scene1);
        // var scene2 = $('#scene2').get(0);
        // var parallaxInstance2 = new Parallax(scene2);
        // var scene3 = $('#scene3').get(0);
        // var parallaxInstance3 = new Parallax(scene3);
        // var scene4 = $('#scene4').get(0);
        // var parallaxInstance4 = new Parallax(scene4);

        // parallaxInstance.friction(0.05, 0.05);
        $(".sec-project").each(function () {
            var id = $(this).attr('id');
            var scene = $('#' + id).get(0);
            if (scene != null) {
                var parallaxInstance = new Parallax(scene);
                parallaxInstance.friction(0.05, 0.05);
            }
        });
    }
    // .content-aos

    // console.log($(this).find("aos-animate"));
    // var block = $(this) + ' ' + 'abc';
    // $(window).scroll(function () {
    //     $('.aos-animate').closest('.block-content-project').css('z-index', '1');
    // });

    // $('.dot').removeClass('active');
    // var arr = [];

    // $('.sec-load').each(function () {  
    //     arr.push($(this).offset().top);

    //     // var id = $(this).data('id');

    // });
    // arr.reverse();
    $(window).scroll(function () {
        var $elements = $('.sec');
        var lengthElement = $elements.length;
        var bodyHeight = $("body").height();
        const $secForBG = $(".secForBG");
        var scrollTop = $(window).scrollTop();
        var projectHeight = $('.block-project-home').outerHeight();
        var windowHeight = $(window).height();
        var topProject = $('.block-project-home').offset().top;
        $('.aos-animate').closest('.block-content-project').css('z-index', '1');
        if ($(this).scrollTop() < topProject - windowHeight / 2 || $(this).scrollTop() > (topProject + projectHeight)) {
            $('.menu-left-project').css('opacity', '0');
            $('.menu-right-project').css('opacity', '0');
            $('.block-project-home').css('pointer-events', 'none');
            $('.m-bg-scroll').css({
                'opacity': '0',
                'transition': 'opacity 0.5s',
            })
        } else {
            $('.menu-left-project').css('opacity', '1');
            $('.menu-right-project').css('opacity', '1');
            $('.block-project-home').css('pointer-events', 'unset');
            setTimeout(function () {
                $('.m-bg-scroll').css('transition', 'unset');
            }, 500)

            $elements.each(function (index) {
                var elementHeight = $($secForBG[lengthElement - index - 1]).height();
                var bannerHeight = $($secForBG[lengthElement - index - 1]).offset().top + elementHeight;
                var opacityNumb = (bannerHeight - scrollTop) / elementHeight;
                $(this).css({
                    opacity: function () {
                        return opacityNumb;
                    }
                });
            });
        }





        $('.sec-load').each(function (index) {
            var id = $(this).data('id');

            if ($('.block-aos-' + (++index)).hasClass('aos-animate')) {
                $('.dot').removeClass('active')
                $("#" + id).addClass('active');
            }
        });


        // $('.dot').removeClass('active');
        // arr.forEach((v,i,data) => {
        //     console.log(data);
        //     if(parseInt(scrollTop > parseInt(v))){

        //         $("#dot"+(i+1)).addClass('active');

        //     }else{
        //         $('.dot').removeClass('active');
        //         // console.log($("#dot"+(i+1)))
        //     }
        // });

    });
    var heightLeft = -$('.menu-left-project .rotate-90').parent().outerWidth() / 2 + 'px';
    $('.menu-left-project .rotate-90').css({
        "transform": "translateX" + '(' + heightLeft + ')' + "rotate(-90deg)",
        "-webkit-transform": "translateX" + '(' + heightLeft + ')' + "rotate(-90deg)",
        "-moz-transform": "translateX" + '(' + heightLeft + ')' + "rotate(-90deg)",
        "-o-transform": "translateX" + '(' + heightLeft + ')' + "rotate(-90deg)",
    })
    var heightRight = $('.menu-right-project .rotate-90').parent().width() / 2 + 'px';
    $('.menu-right-project .rotate-90').css({
        "transform": "translateX" + '(' + heightRight + ')' + "rotate(90deg)",
        "-webkit-transform": "translateX" + '(' + heightRight + ')' + "rotate(90deg)",
        "-moz-transform": "translateX" + '(' + heightRight + ')' + "rotate(90deg)",
        "-o-transform": "translateX" + '(' + heightRight + ')' + "rotate(90deg)",
    });
});