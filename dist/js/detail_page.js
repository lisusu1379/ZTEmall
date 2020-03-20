/*
* 文件名:detail_page.js
* 功能:详情页功能
* 引用方式:require["detail_page"]
* author:lisusu
* Date: 2020-03-17
*/
define(["jquery"],function($){

    //logonavsearch部分a划过颜色改变
    function hovernav(){
        $(".logoNavSearch .lNS .nav .nav-li a").hover(function(){
            $(this).css("color","#0186d1");
        },function(){
            $(this).css("color","#333");
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

    //详情页放大镜部分
    //左右切换
    function tab(){
            var num_li = $('.main-centerpic .main-imgs li').length;
            if(num_li >= 5){
                $('.main-righttag').on("click",function(){
                    $('.main-imgs').animate({"margin-left":"-74px"},200,function(){
                        $(this).css({"margin-left":"0px"}).find("li:first-child").appendTo(this);
                    });
                });
                $('.main-lefttag').on("click",function(){
                    $('.main-imgs').find("li:last-child").prependTo('.main-imgs').css({"margin-left":"-74px"}).animate({"margin-left":"0px"},200,function(){
                    });
                });
            }else{
                return;
            }
    }
    
    //倒计时结束
    function show_time() {
        //获取当前时间
        var date = new Date();
        var now = date.getTime();
        //设置截止时间
        var endDate = new Date("2020-03-25 00:33:00");
        var end = endDate.getTime();
        //时间差
        var leftTime = end-now;
        //定义变量 d,h,m,s保存倒计时的时间
        var d,h,m,s;
        if (leftTime >= 0) {
            d = Math.floor(leftTime/1000/60/60/24);
            h = Math.floor(leftTime/1000/60/60%24);
            m = Math.floor(leftTime/1000/60%60);
            s = Math.floor(leftTime/1000%60);                   
        }
        if(d < 10){ 
            d = "0" + d; 
            } 
        if(h < 10){ 
        h = "0" + h; 
        } 
        if(m < 10){ 
        m = "0" + m; 
        } 
        if(s < 10){ 
        s = "0" + s; 
        } 
        //将倒计时赋值到span中
        document.getElementById("day-show").innerHTML = d;
        document.getElementById("hour-show").innerHTML = h;
        document.getElementById("minute-show").innerHTML = m;
        document.getElementById("second-show").innerHTML = s;
        //递归每秒调用show_time方法，显示动态时间效果
        setTimeout(show_time,1000);

    }
    //图片切换
    /*
    //有所bug切换放大有问题
    function fdj2(){
        var enter_timer = 0;
        $('.main-imgs a').on('mouseenter',function(e,tout){
            var oli = $(this).closest('li'),middle_src = $(this).attr('data-middlesrc'),big_src=$(this).prop('href');
            if(!middle_src)return;
            clearTimeout(enter_timer);
            enter_timer = setTimeout(function(){
                $('.main-tltop img').prop('src',middle_src);
                $('.main-tltop a').prop('href',big_src).parent().zoom({url:big_src});
                $('.main-imgs li').removeClass('current');
                oli.addClass('current');
            },tout||500);
        });
        $('.main-imgs a').on('click',function(e){
            clearTimeout(enter_timer);
            $(this).trigger('mouseenter',[1]);
            return false;
        });
        $('.main-tltop a').parent().zoom({url:$('.main-tltop a').prop('href')});
    }
    */
   function fdj(){
        //hover过小图片的切换
        $('#imgs li img').hover(function () {
            $('#small img').attr('src',this.src);
            $('#bigimg img').attr('src',$('#small img')[0].src);
        });

        $('#imgs li img').hover(function(ev){
            var e = ev || window.event;
            var target = e.target || window.event.srcElement;
            if(target.tarName == "img"){
                for(var i = 0; i < childs.length; i++){
                    childs[i].className = "";
                }
                target.parentNode.className = "hover";
                _this.imgs.firstElementChild.li.a.src = target.src;
                _this.bigimg.src = target.src;
            }
        });
        //放大效果
       $("#small").mouseenter(function(){
           $("#bigimg,#mark").show();
       }).mouseleave(function(){
           $("#bigimg,#mark").hide();
       }).mousemove(function(ev){
            var l = ev.pageX - $("#small").offset().left - 50;
            var t = ev.pageY - $("#small").offset().top - 50;
            //限制出界
            l = range(l, 0, 300);
            t = range(t, 0 ,300);

            $("#mark").css({
                left: l,
                top: t
            });
            //放大图片
            $("#bigimg img").css({
                left: -2 * l,
                top: -2 * t
            })
        })



        function range(iCur, iMin, iMax){
            if(iCur < iMin){
                return iMin;
            }else if(iCur > iMax){
                return iMax;
            }else{
                return iCur;
            }
        }
        return this;
   }

             


    return {
        hovernav:hovernav,
        axonBlade:axonBlade,
        tab:tab,
        show_time:show_time,
        fdj:fdj,
        // fdj2:fdj2,
        // range:range,
    }
})
