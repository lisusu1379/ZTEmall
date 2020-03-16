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
        },function(){
            $('.shopcart-null').hide();
        })
    }

    //header部分a划过颜色改变
    function hoverheader(){
        $(".header .h-left li a").hover(function(){
            $(this).css("color","#000");
        },function(){
            $(this).css("color","#787878");
        })
        $(".header .h-right li a").hover(function(){
            $(this).css("color","#000");
        },function(){
            $(this).css("color","#787878");
        })
    }

    //logonavsearch部分a划过颜色改变
    function hovernav(){
        $(".logoNavSearch .lNS .nav .nav-li a").hover(function(){
            $(this).css("color","#0186d1");
        },function(){
            $(this).css("color","#333");
        })
    }
    

    //首页轮播图效果
    /*
    function download(){
        $.ajax({
            type: "get",
            url: "../data/banner.json",
            success: function(arr){
                // alert(arr);
                for(var i =0; i < arr.length; i++){
                    var node = $(`<li class = "item" id = "${arr[i].id}"><a href="index.html"><img src="${arr[i].img}" alt=""></a><li>`);
                    node.appendTo($(".main-banner .mBanner-picture"));
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }
    */
    function bannerTab(){//首页轮播图效果
        var aBtns = $("#banner").find(".mBanner-inner li");//获取所有原点的li
        var len = aBtns.length - 1;
        var _index = 0;//li的索引
        var img = $("#banner").find(".mBanner-picture  li");

        var timer = null;
        
        aBtns.hover(function(){
            $(this).addClass(".active");//指向li添加样式
        },function(){
            $(this).removeClass(".active");//指向li删除样式
        })

        //点击事件
        aBtns.click(function(){
            _index = $(this).index();
            teb();
        })

        //自动轮播
        function auto(){
            timer = setInterval(function(){
                _index++;
                if(_index > len){
                    _index = 0;
                }
                teb();
            },2000);
        }
        auto();
        //封装函数
        function teb(){
            //获取li的下标，改变样式
            // aBtns.eq(_index).addClass(".active").siblings().removeClass(".active");
            aBtns.removeClass("active").eq(_index).addClass("active");
            //获取图片的下标，实现淡入淡出
            img.eq(_index).fadeIn().siblings().fadeOut();
        }

        //淡入淡出
        $(".main-banner").hover(function(){
            clearInterval(timer);
        },function(){
            auto();
        })
    }
   /*
    //首页banner侧边列表页
    function bannerList(){
        var lis = $(".main-list").find(".m-hover");
        var num = 0;
        var listimg = $(".p-goods").find(".p-list .p-open");
        $('li').on("mouseenter",".l-hover",function(){
            lis.eq("num").css("backgroundColor","#fff")
        })
        $('li').on("mouseleave",".l-hover",function(){
            lis.eq("num").css("backgroundColor","rgba(248, 247, 247, 0.8)")
        })
    }
    */
   //页面图片移动
   function picMove(){
    $(".main .main-goods .main-goodsul .p-pleft").mouseover(function(){
        $(this).stop(true).animate({"top": -5},"linear");
    }).mouseout(function(){
        $(this).stop(true).animate({"top": 0},"linear");
    });
}


    //首页配件专区tab切换
    function phoneTab(){
        /*
        var aLis = $(".p-banner").find(".p-list .p-bannerqh");
        var oUl = $(".main-goods").find(".content");
        var showIndex = 0;
        for(var i = 0, len = aLis.length;i < len; i++){
            aLis[i].index = i;
            aLis.mouseover(function(){
                aLis[showIndex].addClass = "";
                aLis[this.index].addClass = "active";
                showIndex = this.index;
                oUl.innerHTML = "";

            })
        }
        */
        /*
        var aLis = this.find(".p-banner .p-list .p-bannerqh a");
        var oUl = this.find(".main-goods .content");
        aLis.click(function(){
            $(this).addClass("active").siblings("aLis").removeClass("active");
            oUl.hide().eq($(this).index()).show();
        })
        return this;
        */
       $(".p-bannerqh a").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(this).parent().siblings().children().eq(index).addClass("active").siblings().removeClass("active");
        })
        // $(".p-bannerqh").mouseover(function(){
        //     $(".content").addClass("hide").siblings().removeClass("hide");
        //     // var num = $(this).index();
        //     // $(this).parent().siblings().children().eq(num).addClass("hide").siblings().removeClass("hide");
        // })
  /*
       $(".p-banner .p-list .p-bannerqh a").eq(0).css("color","#fc6628").css("border-bottom-color","#fc6628");
       $(".p-banner .p-list .p-bannerqh").mouseover(function(){
           var index = $(this).index();
           var h  = $(".main-tab #content").height();
        var change = $(".main-goods .content");
           $(".main-tab").stop().animate({
               "marginLeft": -h * index
        })
        $(this).css("color","#fc6628").css("border-bottom-color","#fc6628").siblings().css("color","#767676").css("border-bottom-color","none");

       })
       */
    }


    return {
        shopCartmove:shopCartmove,
        hoverheader:hoverheader,
        hovernav:hovernav,
        // download:download,
        bannerTab:bannerTab,
        // bannerList:bannerList
        picMove:picMove,
        phoneTab:phoneTab,
    }
})
//debugger;