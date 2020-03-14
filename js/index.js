/*
* 文件名:index.js
* 功能:编写index.html页面的js
* 引用方式:
* author:lisusu
* Date: 2020-03-13
*/


define(["jquery"],function($){
    function shopCartmove(){//首页购物车滑入效果
        $('.shopcart').hover(function(){
            $('.shopcart-null').show();
            $('.shopcart-logo a').css("color","#000");
        },function(){
            $('.shopcart-null').hide();
            $('.shopcart-logo a').css("color","#787878");
        })
    }

    /*
    function bannerTab(){//首页轮播图效果
        var aBtns = $("#banner").find(".carousel-inner li");
        var oUl = $("#banner").find(".carousel-banner");
        var timer = null;
        var iNow = 0;//显示当前图片的下标

        aBtns.click(function(){//点击按钮的时候实现图片的切换
            iNow = $(this).index() + 1;
            teb();
        })
        //自动轮播
        timer = setInterval(function(){
            iNow++;
            teb();
        },2000);
        //当已知图片下标的时候
        function teb(){
            aBtns.removeClass("active").eq(iNow - 1).addClass("active");
            if(iNow > 5){
                aBtns.eq(0).addClass("active");
            }

            oUl.animate({left: -iNow * 1920},2000,function(){
                if(iNow > 5){
                    oUl.css("left", -1920);
                    iNow = 1;
                }
                if(iNow < 1){
                    oUl.css("left",5 * -1920);
                    iNow = 5;
                }
            });
        }
        //移入移出
        $("#banner").mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                teb();
            },2000)
        })
    }
    */

    //首页轮播图效果
    function bannerTab(){
        $.ajax({
            type: "get",
            url: "../data/banner.json",
            success: function(result){
                var bannerArr = result.banner;
                for(var i =0; i < bannerArr.length; i++){
                    $(`<a href="index.html"><img src="images/home page/banner01.jpg" alt=""></a>
                    </li>`).appendTo(".mBanner-picture .item");
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }


    //首页banner侧边列表页
    function bannerList(){
        $('.nav-list').on("mouseenter",".l-hover",function(){
            $(this).addClass(".p-goods");
        })
        $('.nav-list').on("mouseleave",".l-hover",function(){
            $(this).removeClass(".p-goods");
        })
    }
    return {
        shopCartmove:shopCartmove,
        bannerTab:bannerTab,
        bannerList:bannerList
    }
})
//debugger;