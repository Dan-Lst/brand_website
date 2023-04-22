/*
-------------------------------------------------------------------------
* Template Name    : Rivani - Responsive One Page Multipurpose Template * 
* Author           : ThemesBoss                                         *
* Version          : 1.0.0                                              *
* Created          : Octomber 2020                                      *
* File Description : Main JS file of the template                       *
*------------------------------------------------------------------------
*/
! function(t) {
    "use strict";
    var e, o;
    t(window).on("scroll", function() {
            t(window).scrollTop() >= 50 ? t(".sticky").addClass("stickyadd") : t(".sticky").removeClass("stickyadd")
        }), e = window.pageYOffset, window.onscroll = function() {
            var t = window.pageYOffset;
            document.getElementById("navbar").style.top = e > t ? "0" : "-480px", e = t
        }, t(".nav-item a").on("click", function(e) {
            var o = t(this);
            t("html, body").stop().animate({
                scrollTop: t(o.attr("href")).offset().top - 50
            }, 1500, "easeInOutExpo"), e.preventDefault()
        }), t(document).on("click", ".navbar-collapse.show", function(e) {
            t(e.target).is("a") && t(this).collapse("hide")
        }), t("#navbarCollapse").scrollspy({
            offset: 70
        }), t(".img-zoom").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            mainClass: "mfp-fade",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            }
        }), t("#ht-wavify_white").length && t("#ht-wavify_white").wavify({
            height: 100,
            bones: 3,
            amplitude: 50,
            color: "#f8f9fa",
            speed: .25
        }), t(window).on("scroll", function() {
            t(this).scrollTop() > 100 ? t(".back_top").fadeIn() : t(".back_top").fadeOut()
        }), t(".back_top").on("click", function() {
            return t("html, body").animate({
                scrollTop: 0
            }, 1e3), !1
        }), t("#owl-demo").owlCarousel({
            autoPlay: 15e3,
            stopOnHover: !0,
            navigation: !1,
            paginationSpeed: 1e3,
            goToFirstSpeed: 2e3,
            singleItem: !0,
            autoHeight: !0
        }), o = 0, t(window).on("scroll", function() {
            var e = t("#counter,#counter2").offset().top - window.innerHeight;
            0 == o && t(window).scrollTop() > e && (t(".case_counter, .web_count").each(function() {
                var e = t(this),
                    o = e.attr("data-count");
                t({
                    countNum: e.text()
                }).animate({
                    countNum: o
                }, {
                    duration: 2e3,
                    easing: "swing",
                    step: function() {
                        e.text(Math.floor(this.countNum))
                    },
                    complete: function() {
                        e.text(this.countNum)
                    }
                })
            }), o = 1)
        }), t(".video_home").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }),
        function() {
            var e = t(".loader"),
                o = t(window).height(),
                a = t(window).width(),
                n = 0;
            e.css({
                top: o / 2 - 2.5,
                left: a / 2 - 200
            });
            do {
                e.animate({
                    width: n
                }, 10), n += 3
            } while (n <= 400);
            402 === n && (e.animate({
                left: 0,
                width: "100%"
            }), e.animate({
                top: "0",
                height: "100vh"
            })), setTimeout(function() {
                t(".loader-wrapper").fadeOut("fast"), e.fadeOut("fast")
            }, 3500)
        }(), t(".text-typed").each(function() {
            var e = t(this);
            e.typed({
                strings: e.attr("data-elements").split(","),
                typeSpeed: 100,
                backDelay: 3e3
            })
        }), t(".simple-text-rotate").textrotator({
            animation: "fade",
            speed: 3500
        })
}(jQuery);