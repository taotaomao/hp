
// 导航栏二级菜单js
  $(function(){

  	$(".nav-bar>ul>li").hover(function(){
       
        $(this).children("ul").slideDown("fast");
    },function(){
     
        $(this).children("ul").slideUp("fast");
    });

  })
  //aboutus tab切换js

$(function () {
    $(".menu li").each(function(index) {
        $(this).click(function() {
            $(this).addClass("menu active").siblings().removeClass("active");
                    $(".focus li:eq("+index+")").show().siblings().hide();
        })
    })
})