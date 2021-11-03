jQuery(function ($) {
    'use strict';
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });
    $(".others-option-for-responsive .dot-menu").on("click", function () {
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });
    $(function () {
        $('.default-btn').on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        }).on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        });
    });
    // $('.home-slider').owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     nav: true,
    //     mouseDrag: true,
    //     items: 1,
    //     autoHeight: true,
    //     dots: false,
    //     dotData: true,
    //     autoplay: false,
    //     smartSpeed: 500,
    //     autoplayHoverPause: true,
    //     navText: ["<i class='flaticon-curve-arrow'></i>", "<i class='flaticon-curve-arrow-1'></i>", ],
    // });
    // $(".home-slider").on("translate.owl.carousel", function () {
    //     $(".slider-content img, .slider-content span, .slider-content h1, .slider-content .list, .slider-content .typewrite").removeClass("animated fadeInLeft").css("opacity", "0");
    //     $(".slider-content p").removeClass("animated fadeInLeft").css("opacity", "0");
    //     $(".slider-content a").removeClass("animated fadeInLeft").css("opacity", "0");
    //     $(".slider-image, .shape").removeClass("animated slideInUp").css("opacity", "0");
    // });
    // $(".home-slider").on("translated.owl.carousel", function () {
    //     $(".slider-content img, .slider-content span, .slider-content h1, .slider-content .list, .slider-content .typewrite").addClass("animated fadeInLeft").css("opacity", "1");
    //     $(".slider-content p").addClass("animated fadeInLeft").css("opacity", "1");
    //     $(".slider-content a").addClass("animated fadeInLeft").css("opacity", "1");
    //     $(".slider-image, .shape").addClass("animated slideInUp").css("opacity", "1");
    // });
    // $('.burger-shop-slider').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     smartSpeed: 2000,
    //     margin: 30,
    //     autoplayHoverPause: true,
    //     autoplay: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         576: {
    //             items: 1
    //         },
    //         768: {
    //             items: 2
    //         },
    //         1024: {
    //             items: 3
    //         },
    //         1200: {
    //             items: 4
    //         }
    //     }
    // });
    // $('select').niceSelect();
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    (function ($) {
        // $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        // $('.tab ul.tabs li a').on('click', function (g) {
        //     var tab = $(this).closest('.tab'),
        //         index = $(this).closest('li').index();
        //     tab.find('ul.tabs > li').removeClass('current');
        //     $(this).closest('li').addClass('current');
        //     tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        //     tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        //     g.preventDefault();
        // });
    })(jQuery);
    $('.gallery-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        mouseDrag: true,
        items: 1,
        autoHeight: true,
        dots: true,
        dotData: true,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
    });
    $(function () {
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        $('.go-top').on('click', function () {
            $("html, body").animate({
                scrollTop: "0"
            }, 500);
        });
    });
    $('.feedback-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        mouseDrag: true,
        items: 1,
        autoHeight: true,
        dots: true,
        dotData: true,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
    });
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            event.preventDefault();
        }
    });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }

    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }

    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }

    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
        callback: callbackFunction
    });
    $('.list-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: false,
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>", ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            320: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    $('.vegan-shop-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $('.team-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $('.input-counter').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');
        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    $(function () {
        $('.accordion').find('.accordion-title').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle('fast');
            $('.accordion-content').not($(this).next()).slideUp('fast');
            $('.accordion-title').not($(this)).removeClass('active');
        });
    });
    $(window).on('load', function () {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 20,
                mobile: true,
                live: true,
            });
            wow.init();
        }
    });
    jQuery(window).on('load', function () {
        $('.preloader').fadeOut();
    });
}(jQuery));