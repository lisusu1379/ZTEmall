/*
* 文件名:login.js
* 功能:登录功能
* 引用方式:require["login"]
* author:lisusu
* Date: 2020-03-16
*/
define(['ajax'], function($) {
    //短信登录
    var userphone = document.querySelector("#userphone");//1
    var dloginyzm = document.querySelector("#dloginyzm");//1
    var dloginimg = document.querySelector("#dloginimg");//1
    var loginnote = document.querySelector("#loginnote");//1

    //账号登录                    
    var username = document.querySelector("#username");//2
    var zpassword = document.querySelector("#zpassword");//2
    var zloginyzm = document.querySelector("#zloginyzm");//2
    var zloginimg = document.querySelector("#zloginimg");//2

    //员工登录
    var idcard = document.querySelector("#idcard");//3
    var ypassword = document.querySelector("#ypassword");//3
    var activecode = document.querySelector("#activecode");//3



    var loginsubmit = document.querySelector("#loginsubmit");
    var logintype = document.querySelector(".login-type");

    function init(){
        //初始时加载验证码
        dloginimg.src = "https://www.myzte.com/vcode-index-passport.html?" + new Date().getTime();

        //刷新验证码
        refreshCode(dloginimg);

        //登录按钮
        login(loginsubmit);
    }

    //tab切换登录类型
    function tab(){
        var oAs = document.querySelectorAll(".login-type .li-type a");
        var oTabs = document.querySelectorAll(".l-tab");
        for(var i = 0; i < oAs.length; i++){
            oAs[i].index = i;
            oAs[i].onclick = function(){
                //重置所有样式
                for(var j = 0; j < oAs.length; j++){
                    oAs[j].className = "";
                    oTabs[j].style.display = "none";
                }
                this.className = "active";

                //点击当前选项卡对应的登录方式显示
                oTabs[this.index].style.display = "block";

                if(this.index == 0){
                    //使用中兴商城的生成验证码
                    dloginimg.src = "https://www.myzte.com/vcode-index-passport.html?" + new Date().getTime();
                    logintype.setAttribute("lType","d");
                    //刷新验证码
                    refreshCode(dloginimg);
                }else if(this.index == 1){
                    //使用中兴商城的生成验证码
                    zloginimg.src = "https://www.myzte.com/vcode-index-passport.html?" + new Date().getTime();
                    logintype.setAttribute("lType","z")
                    //刷新验证码
                    refreshCode(zloginimg);
                }else{
                    logintype.setAttribute("lType","y")
                }
            }
        }
    }

    //刷新验证码
    function refreshCode(loginimg){
        loginimg.addEventListener("click", function(){
            //使用中兴商城的生成验证码
            this.src = "https://www.myzte.com/vcode-index-passport.html?" + new Date().getTime();
        },false);
    }


    //登录
    function login(loginsubmit){
        loginsubmit.addEventListener("click", function(){
            if(checkLogin(true)){
                var type = logintype.getAttribute("lType");
                switch(type){
                    case "d":
                        //先验证数据
                        var userphone = userphone.value;
                        var dloginyzm = dloginyzm.value;
                        var loginnote  = loginnote.value;
                        var data = {
                            userphone: userphone,
                            dloginyzm: dloginyzm,
                            loginnote: loginnote
                        };
                        alert(JSON.stringify(data));
                        break;

                    case "z":
                        //先验证数据
                        var username = username.value;
                        var zpassword = zpassword.value;
                        var zloginyzm  = zloginyzm.value;
                        var data = {
                            username: username,
                            zpassword: zpassword,
                            zloginyzm: zloginyzm
                        };
                        alert(JSON.stringify(data));
                        break;

                        case "y":
                            //先验证数据
                            var idcard = idcard.value;
                            var ypassword = ypassword.value;
                            var activecode  = activecode.value;
                            var data = {
                                idcard: idcard,
                                ypassword: ypassword,
                                activecode: activecode
                            };
                            alert(JSON.stringify(data));
                            break;
                }
            }
        },false);
    }
    
    //检验数据
    function checkLogin(ischeck){
        var type = logintype.getAttribute("lType");
        var loginReminder = document.querySelector(`.${type}-login-reminder`);
        var oMsginfo = document.querySelector(".msginfo");
        var regPhone = /^1(3|4|5|6|7|8|9)|\d{9}$/;
        var regVode = /^[a-zA-Z0-9]/;

        if(type == "d"){
            if(userphone.value.length == 0){
                loginReminder.style.display = "block";
                loginReminder.style.top = "48px";
                userphone.className = "onfocus-input";
                TipsClearInput(loginReminder);
                return false;
            }

            if(dloginyzm.value.length == 0){
                loginReminder.style.display = "block";
                loginReminder.style.top = "100px";
                dloginyzm.className = "onfocus-input";
                TipsClearInput(loginReminder);
                return false;
            }

            if(ischeck){
                if(loginnote.value.length == 0){
                    loginReminder.style.display = "block";
                    loginReminder.style.top = "152px";
                    loginnote.className = "onfocus-input";
                    TipsClearInput(loginReminder);
                    return false;
                }
            }

            if(!regPhone.test(userphone.value)){
                oMsginfo.style.display = "block";
                oMsginfo.innerText = "手机号码格式不正确";
                TipsClearMsg(oMsginfo);
                return false;
            }
        
            if(regVode.test(dloginyzm.value)){
                oMsginfo.style.display = "block";
                oMsginfo.innerText = "图形验证码格式不正确";
                TipsClearMsg(oMsginfo);
                return false;
            }

            if(regVode.test(loginnote.value)){
                oMsginfo.style.display = "block";
                oMsginfo.innerText = "短信验证码格式不正确";
                TipsClearMsg(oMsginfo);
                return false;
            }
        }
        else if(type == "z"){
            if(username.value.length == 0){
                loginReminder.style.display = "block";
                loginReminder.style.top = "48px";
                username.className = "onfocus-input";
                TipsClearInput(loginReminder);
                return false;
            }
            if(zpassword.value.length == 0){
                loginReminder.style.display = "block";
                loginReminder.style.top = "100px";
                zpassword.className = "onfocus-input";
                TipsClearInput(loginReminder);
                return false;
            }

            if(zloginyzm.value.length == 0){
                loginReminder.style.display = "block";
                loginReminder.style.top = "152px";
                zloginyzm.className = "onfocus-input";
                TipsClearInput(loginReminder);
                return false;
            }

            if(!regPhone.test(username.value)){
                oMsginfo.style.display = "block";
                oMsginfo.innerText = "手机号码格式不正确";
                TipsClearMsg(oMsginfo);
                return false;
            }
        
            if(regVode.test(zloginyzm.value)){
                oMsginfo.style.display = "block";
                oMsginfo.innerText = "图形验证码格式不正确";
                TipsClearMsg(oMsginfo);
                return false;
            }
        }else if(type == "y"){
            if(idcard.value.length == 0){
                loginReminder.style.display = "block";
                loginReminder.style.top = "48px";
                idcard.className = "onfocus-input";
                TipsClearInput(loginReminder);
                return false;
            }
            if(ypassword.value.length == 0){
                loginReminder.style.display = "block";
                loginReminder.style.top = "100px";
                ypassword.className = "onfocus-input";
                TipsClearInput(loginReminder);
                return false;
            }

            if(activecode.value.length == 0){
                loginReminder.style.display = "block";
                loginReminder.style.top = "152px";
                activecode.className = "onfocus-input";
                TipsClearInput(loginReminder);
                return false;
            }
        }
        return true;
    }

    //获取验证码
    function getCode(){
        var loginbtn = document.querySelector("#loginbtn");
        loginbtn.onclick = function(){
            var unm = 120;
            if(checkLogin(false)){
                sTimer = setInterval(() => {
                    num--;
                    this.innerHTML = "短信已发送," + num + "秒后可重试";
                    if(num == 0){
                        clearInterval(sTimer);
                        this.innerHTML = "获取短信验证码";
                        this.parentNode.style.width = "124px";
                        this.style.color = "#000";
                    }
                },1000);
            }
            this.innerHTML = "短信已发送," + num + "秒后可重复";
            this.parentNode.style.width = "170px";
            this.style.color = "#999";
        }
    }

    //定时器清楚文本框为空的提示样式
    function TipsClearInput(loginReminder){
        iTimer = setTimeout(function(){
            loginReminder.style.display = "none";
        },3000);
    }

    //定时器清楚错误信息提示
    function TipsClearMsg(oMsginfo){
        mTimer = setInterval(function(){
            oMsginfo.style.display = "none";
        },2000);
    }

    return {
        init:init,
        tab:tab,
        getCode:getCode,
    }
})