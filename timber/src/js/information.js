$(function(){
    // Calling the plugin
    //选项卡插件
    // $('.tab-group').tabify();
    $(".tab-nav li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $(".tab-group section").eq($(".tab-nav li").index(this)).addClass("active").siblings().removeClass("active")
    })
    //控制选项卡标题的变化
    $(".tab-nav li").click(function(){
    $(".need-nav").html($(this).text())
    }) 
  })