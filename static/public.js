// 苹果浏览器不支持hover使用js完成
$(function () {
    $('.side').mouseover(function () {
        $(".side-hide").css("display", "block");
    });

    $('.side').mouseout(function () {
        $(".side-hide").css("display", "none");
    });
});

// 快速返回顶部
$(function(){
    $('.back-top').mouseover(function () {
        $(".back-top").css("background", "#337ab7");
        $(".back-top").css("text-decoration", "none");
    });
    $('.back-top').mouseout(function () {
        $(".back-top").css("background", "#169FE6");
    });
});

$(function () {
    //返回顶部===>出现与消失
    //当屏幕滚动，触生 scroll 事件
    $(window).scroll(function () {
        var top1 = $(this).scrollTop();     //获取相对滚动条顶部的偏移
        if (top1 > 200) {      //当偏移大于200px时让图标淡入（css设置为隐藏）
            $(".back-top").stop().fadeIn();
        } else {
            //当偏移小于200px时让图标淡出
            $(".back-top").stop().fadeOut();
        }
    });
    //去往顶部
    $(".back-top").click(function () {
        $("body , html").animate({scrollTop: 0}, 300);   //300是所用时间
    });
});