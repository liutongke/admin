// 苹果浏览器不支持hover使用js完成
$(function(){
    $('.side').mouseover(function(){
        $(".side-hide").css("display","block");
    })

    $('.side').mouseout(function(){
        $(".side-hide").css("display","none");
    })
})