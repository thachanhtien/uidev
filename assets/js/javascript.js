function resIn(des, res) {
    $(des).addClass("fade-out");
    $(des).removeClass("fade-in");
    $(res).addClass("fade-in");
    $(res).removeClass("fade-out");
}
function desIn(des, res) {
    $(des).addClass("fade-in");
    $(des).removeClass("fade-out");
    $(res).addClass("fade-out");
    $(res).removeClass("fade-in");
}

$(document).ready(function () {
    // window.addEventListener("wheel", event => {
    //     const delta = Math.sign(event.deltaY);
    //     console.info(delta);
    // });
    // $("html").easeScroll({
    //     keyboardSupport: true,
    //     touchpadSupport: true
    // });
    // if ($(window).width() > 992) {
    // AOS.init({
    //     mirror: true,
    // });
    // }
    if ($(window).width() > 768) {
        $(window).scroll(function () {
            var scroll = $(this).scrollTop();
            if (scroll > 50) {
                resIn('.menu-des', '.menu-icon-wrapper');
                $('.bot-base').addClass("fade-out");
                $('.bot-base').removeClass("fade-in");
            } else {
                desIn('.menu-des', '.menu-icon-wrapper');
                $('.bot-base').addClass("fade-in");
                $('.bot-base').removeClass("fade-out");
            }

        });
    } else {
        $(window).scroll(function () {
            var scroll = $(this).scrollTop();
            resIn('.menu-des', '.menu-icon-wrapper');
            if (scroll > 50) {
                $('.bot-base').addClass("fade-out");
                $('.bot-base').removeClass("fade-in");
            } else {
                $('.bot-base').addClass("fade-in");
                $('.bot-base').removeClass("fade-out");
            }

        });
    }

    $(".menu-icon-trigger").click(function () {
        $('.add-menu').toggleClass('show');
    })

    if ($('.add-body-class').length > 0) {
        var bodyClass = $('.add-body-class').data("bodyclass");
        $('body').addClass(bodyClass);
        // console.log(bodyClass)
    }


    //count up
    $('.count-up').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 1000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
    });
    var countUpWidth = $('.count-up').width();
    // console.log(countUpWidth);



    //for service
    // $('.list-skill .skill-item').mouseover(function () {
    //     var id = $(this).data('id');
    //     $('.skill-item').removeClass('show-skill');
    //     $('#' + id).addClass('show-skill');
    // });

    if ($(window).width() < 480) {
        $('.m-intro .row').addClass('slide-intro')
    }
    $('.slide-intro').slick({
        infinite: true,
        centerPadding: '130px',
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '145px',
                }
            },
            {
                breakpoint: 440,
                settings: {
                    centerPadding: '130px',
                }
            },
            {
                breakpoint: 400,
                settings: {
                    centerPadding: '0',
                }
            },

        ]

    });
    $('.next-slide-intro').click(function () {
        $('.slide-intro').slick('slickNext');
    });
    $('.prev-slide-intro').click(function () {
        $('.slide-intro').slick('slickPrev');
    });


    //brief us
    // $(".m-btn-brief").click(function () {
    //     $(".brief-us").addClass("fade-brief");
    // });
    // var card = $(".card-hover");

    // $(document).on("mousemove",function(e) {  
    // var ax = ($(window).innerWidth()/2- e.pageX)/150;
    // var ay = ($(window).innerHeight()/2- e.pageY)/75;
    // card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
    // });
    // var a = $('.section:not(.block-project-home)');
    // console.log(a);

    $('#pathB').css('stroke-dasharray', '550, 480, 90');
    $('#pathC').css('stroke-dasharray', '3496.56, 3576.56, 140');



    function initScroll() {
        new SmoothScroll(document, 60, 12);
    }

    function SmoothScroll(target, speed, smooth) {
        if (target === document)
            target = (document.scrollingElement
                || document.documentElement
                || document.body.parentNode
                || document.body) // cross browser support for document scrolling

        var moving = false
        var pos = target.scrollTop
        var frame = target === document.body
            && document.documentElement
            ? document.documentElement
            : target // safari is the new IE

        target.addEventListener('mousewheel', scrolled, { passive: false })
        target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

        function scrolled(e) {
            e.preventDefault(); // disable default scrolling

            var delta = normalizeWheelDelta(e)

            // $('body').css('transform','skew("+ns+"deg) translateY("+ns/2+"px) rotate("+ns/-7+"deg"');
            pos += -delta * speed
            pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight))
            // limit

            if (!moving) update()
        }

        function normalizeWheelDelta(e) {
            if (e.detail) {
                if (e.wheelDelta)
                    return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
                else
                    return -e.detail / 3 // Firefox
            } else
                return e.wheelDelta / 120 // IE,Safari,Chrome
        }

        function update() {
            moving = true

            var delta = (pos - target.scrollTop) / smooth * 0.7

            target.scrollTop += delta

            if (Math.abs(delta) > 0.5)
                requestFrame(update)
            else
                moving = false

        }

        var requestFrame = function () { // requestAnimationFrame cross browser
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (func) {
                    window.setTimeout(func, 1000 / 50);
                }
            );
        }()
    }
    initScroll();



    const section = $('.parallax-scale');
    let currentPos = window.pageYOffset;
    const updateScrollSkew = () => {
        const newPos = window.pageYOffset;
        const diff = newPos - currentPos;
        const speed = diff * 0.2;

        section.css({
            "transform": "skewY" + '(' + speed/2 + 'deg)',
            "-webkit-transform": "skewY" + '(' + speed/2 + 'deg)',
            "-moz-transform": "skewY" + '(' + speed/2 + 'deg)',
            "-o-transform": "skewY" + '(' + speed/2 + 'deg)',
        });

        currentPos = newPos;

        requestAnimationFrame(updateScrollSkew);
    }

    updateScrollSkew();
    setTimeout(function () {
        $('.loading-container').css('opacity', '0');
    }, 3000)
});

