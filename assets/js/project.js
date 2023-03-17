$(document).ready(function () {
    if($(window).width()>992){
        var scenePj = $('#scene-pj').get(0);
        var parallaxInstancePj = new Parallax(scenePj);
    }

    $('.image-slide').slick({
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 990,
                setting: {
                    variableWidth: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
})
