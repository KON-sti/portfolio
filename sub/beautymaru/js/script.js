$(function () {
    // section1 tap
    $(".sec1_tap>li>p").click(function () {
        $(this).parent().addClass("on").siblings().removeClass("on");
    });

    // section4 img
    $("[id^=button]").mouseenter(function () {
        let index = $(this).attr("id").replace("button", "");
        $(".img" + index).stop().fadeIn(600).siblings().fadeOut();
    });
    $("[id^=button]").mouseleave(function () {
        let index = $(this).attr("id").replace("button", "");
        $(".sec4_img_main").stop().fadeIn(0).siblings().fadeOut(0);
    });
});

// submenu
$(function () {
    $(".submenu").hide();
    $(".gnb li").mouseenter(function () {
        $(".submenu").stop().slideDown();
    });
    $("#gnb_wrap").mouseleave(function () {
        $(".submenu").stop().slideUp();
    });
});

// top button
$("#top_btn").click(function () {
    $("body, html").animate({
        scrollTop: 0
    }, 500);
});

$("#top_btn").hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $("#top_btn").fadeIn(250)
    } else {
        $("#top_btn").fadeOut(250)
    }
});