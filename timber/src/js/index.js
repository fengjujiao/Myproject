$(function() {
    let mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        autoplay:true, 
        loop: true, // 循环模式选项
        // 分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    }) 
    // 商品选项卡效果
    $(".clacify li").click(function(){
        $(this).addClass("select").siblings().removeClass("select");
        $(".shop-ul ul").eq($(this).index()).addClass("show").siblings().removeClass("show");
    });
    // 处理侧边栏
    let offset=0;
    $(window).on("scroll",function() {
        offset=this.document.documentElement.scrollTop||this.document.body.scrollTop;
        if(offset>0){
            $(".sidebar").show();
        }else{
            $(".sidebar").hide();
        }
    })
    // 点击返回顶部
    $(".top").on("click",function(){
        let speed=300;
        $("html").animate({scrollTop:0},speed)
    });
    // 数据封装
    var hot=$(".hot");
    var shopul=$(".shop-ul");
    var brandShop=$(".brand-shop");
    var newer=$(".new");
    var footer=$("footer")
    $.ajax({
        url:"./json/main.json",
        success:function(res){
            sales(res.sales,hot);
            sellers(res.sellers,shopul);
            brand(res.brand,brandShop);
            newPerson(res.new,newer);
            foot(res.footer,footer)
        }
    })
    // 跳转最新供需
    $(".new-need").click(function(){
        location.href="./pages/information.html"
    })
})