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

    //首页nav划过
    function axonBlade(){
        /*
        $(".nav>li").mouseover(function(){
            var index = $(this).index();
            $(".nav>li").eq(index).children("div").css("display","block");
        });
        $(".nav").mouseout(function(){
            var index = $(this).index();
            $(".nav>li").children("div").css("display","none");
        })
        */
       $(".nav>li").mouseover(function(){
            var index = $(this).index();
            // $(".nav>li").eq(index).children("div").css("display","block");
            $(".nav>li").eq(index).children("div").show();
        });
        $(".nav>li").mouseout(function(){
            // var index = $(this).index();
            // $(".nav>li").children("div").css("display","none");
            $(".nav>li").children("div").hide();
        })

    }
    

    //首页logonav部分图片移动效果
    function navpicMove(){
        $("#navli-Axon .nav-Alist .navlist-Axon .nav-Aul .nav-lis").mouseover(function(){
            $(this).stop(true).animate({"top": -5},"linear");
        }).mouseout(function(){
            $(this).stop(true).animate({"top": 0},"linear");
        });
    }
    function navpic02Move(){
        $("#navli-Blade .nav-Aconceal .list-Aconceal .list-Anav .nav-lis").mouseover(function(){
            $(this).stop(true).animate({"top": -5},"linear");
        }).mouseout(function(){
            $(this).stop(true).animate({"top": 0},"linear");
        });
    }
    





    //logonavsearch部分a划过颜色改变
    function hovernav(){
        $(".logoNavSearch .lNS .nav .nav-li a").hover(function(){
            $(this).css("color","#0186d1");
        },function(){
            $(this).css("color","#333");
        })
    }

    //footer导航关注我们a划过颜色改变
    function hoverfootercenter(){
        $(".footer-center .fc-lul .fc-llist ul li a").hover(function(){
            $(this).css("color","#fc6628");
        },function(){
            $(this).css("color","#999");
        })
    }

    //footer底部a划过颜色改变
    function hoverfooterbottom(){
        $(".footer-bottom .fb-ul li a").hover(function(){
            $(this).css("color","#000");
        },function(){
            $(this).css("color","#5a5453");
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
                    var node = $(`<li class = "item active" id = "${arr[i].id}"><a href="index.html"><img src="${arr[i].img}" alt=""></a><li>`);
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
   
    //首页banner侧边列表页
    function bannerList(){
        $(".main-list>li").mouseover(function(){
            var index = $(this).index();
            $(".main-list>li").eq(index).css("backgroundColor","#fff").children("div").css("display","block");
        });
        $(".main-list>li").mouseout(function(){
            var index = $(this).index();
            $(".main-list>li").css("backgroundColor","").children("div").css("display","none");
        });

    }
    


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
       $(".p-list .p-bannerqh").mouseover(function(){
            var index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(this).css("borderBottomColor","#fc6628");
            $(this).css("color","#fc6628")
            $(".content").eq(index).show().siblings().hide();
        });
        $(".p-list .p-bannerqh").mouseout(function(){
            var index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(this).css("borderBottomColor","transparent");
            $(this).css("color","#767676");
            $(".content").eq(index).hide().siblings().show();
        })
        */
            var accessoriesTab = function(target_this,par_sec,index){
                par_sec.find('.p-bannerqh').removeClass('active');
                target_this.addClass('active');
                par_sec.find('.content').css("display","none");
                par_sec.find('#content' + index).css("display","block");
            }
            $('.p-bannerqh').on("mouseover",function(){
                var target_this = $(this);
                var index = this.id.replace('tab','');
                var par_sec = target_this.parents('.main');
                accessoriesTab(target_this,par_sec,index);
            });
    }


    return {
        shopCartmove:shopCartmove,
        hoverheader:hoverheader,
        axonBlade:axonBlade,
        navpicMove:navpicMove,
        navpic02Move:navpic02Move,
        hovernav:hovernav,
        hoverfootercenter:hoverfootercenter,
        hoverfooterbottom:hoverfooterbottom,
        // download:download,
        bannerTab:bannerTab,
        bannerList:bannerList,
        picMove:picMove,
        phoneTab:phoneTab,
    }
})
//debugger;