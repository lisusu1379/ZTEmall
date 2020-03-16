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

    
    function bannerTab(){//首页轮播图效果
        var $aBtns = $("#banner").find(".mBanner-inner li");//获取所有原点的li
        var len = $aBtns.length - 1;
        var _index = 0;//li的索引
        var $img = $("#banner").find(".mBanner-picture  li");

        var timer = null;
        
        $aBtns.hover(function(){
            $(this).addClass("active");//指向li添加样式
        },function(){
            $(this).removeClass("active");//指向里删除样式
        })



        //点击事件
        $aBtns.click(function(){
            _index = $(this).index();
            teb();
        })

        //自动轮播
        function auto(){
            timer = setInterval(function(){
                _index++;
                if(inex > len){
                    _index = 0;
                }
                teb();
            },2000);
        }
        auto();
        //封装函数
        function teb(){
            //获取li的下标，改变样式
            $aBtns.eq(_index).addClass("active").siblings().removeClass("active");
            //获取图片的下标，实现淡入淡出
            $img.eq(_index).fadeIn().siblings().dadeOut();
        }



        //淡入淡出
        $(".main-banner").hover(function(){
            clearInterval(timer);
        },function(){
            auto();
        })
    }
    
    /*
    //首页轮播图效果
    function bannerTab(){
        $.ajax({
            type: "get",
            url: "../data/banner.json",
            success: function(arr){
                alert(arr);
                // for(var i =0; i < arr.length; i++){
                //     var node = $(`<a href="#${i}"><img src="${arr[i].img}" alt=""></a>`);
                //     node.appendTo($(".mBanner-picture .item"));
                // }
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }
    */

    /*
    //首页banner侧边列表页
    function bannerList(){
        $('.nav-list').on("mouseenter",".l-hover",function(){
            $(this).addClass(".p-goods");
        })
        $('.nav-list').on("mouseleave",".l-hover",function(){
            $(this).removeClass(".p-goods");
        })
    }
    */
    return {
        shopCartmove:shopCartmove,
        bannerTab:bannerTab,
        // bannerList:bannerList
    }
})
//debugger;