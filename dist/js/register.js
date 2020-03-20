/*
* 文件名:register.js
* 功能:注册功能
* 引用方式:requeire["register"]
* author:lisusu
* Date: 2020-03-16
*/

define(["ajax"],function($){
    var oBtn = document.querySelector(".btn");
    var vcodeimg = document.querySelector("#vcode-img");
    var userphone = document.querySelector("#userphone");
    var password = document.querySelector("#password");
    var respassword = document.querySelector("#respassword");
    var useryam = document.querySelector("#useryam");
    var noteyzm = document.querySelector("#noteyzm");
    var agreement = document.querySelector("#agreement");
    var oMsginfo = document.querySelector(".msginfo");
    
    //初始化
    function init(){
        vcodeimg.src = "https://www.myzte.com/vcode-index-passport.html?" + new Date().getTime();
        refreshCode(oBtn);
    }

    //刷新验证码
    function refreshCode(){
        oBtn.addEventListener("click",function(){
            //使用中兴商城的生成验证码,暂时用假的
            vcodeimg.src = "https://www.myzte.com/vcode-index-passport.html?" + new Date().getTime();
        },false);
    }

    //获取验证码
    function getCode(){
        var oGetMcode = document.querySelector("#getmcode");
        oGetMcode.onclick = function(){
            var num = 120;
            if(checkRegister(false)){
                sTimer = setInterval(() => {
                    num--;
                    this.innerHTML = "短信已发送，" + num + "秒后可重试";
                    if(num == 0){
                        clearInterval(sTimer);
                        this.innerHTML = "获取短信验证码";
                        this.parentNode.style.width = "124px";
                        this.style.color = "#000";
                    }
                },1000);
                this.innerHTML = "短信已发送，" + num + "秒后可重试";
                this.parentNode.style.width = "170px";
                this.style.color = "#999";
            }
        }
    }

    //检验数据
    function checkRegister(ischeck){
        var registerReminder = document.querySelector(".register-reminder");
        var regPhone = /^1(3|4|5|6|7|8|9)\d{9}$/;
        var regmVcode = /^[a-zA-Z0-9]/;

        if(userphone.value.length == 0){
            registerReminder.style.display = "block";
            registerReminder.style.top = "102px";
            userphone.className = "onfocus-input";
            TipsClearInput(registerReminder);
            return false;
        }

        if(password.value.length == 0){
            registerReminder.style.display = "block";
            registerReminder.style.top = "154px";
            password.className = "onfocus-input";
            TipsClearInput(registerReminder);
            return false;
        }

        if(respassword.value.length == 0){
            registerReminder.style.display = "block";
            registerReminder.style.top = "206px";
            respassword.className = "onfocus-input";
            TipsClearInput(registerReminder);
            return false;
        }

        if(ischeck){
            if(noteyzm.value.length == 0){
                registerReminder.style.display = "block";
                registerReminder.style.top = "258px";
                noteyzm.className = "onfocus-input";
                TipsClearInput(registerReminder);
                return false;
            }
        }

        if(!regPhone.test(userphone.value)){
            oMsginfo.style.display = "block";
            oMsginfo.innerText = "手机号码格式不正确";
            TipsClearMsg(oMsginfo);
            return false;
        }

        if(password.value != respassword.value){
            oMsginfo.style.display = "block";
            oMsginfo.innerText = "两次输入密码不一致";
            TipsClearMsg(oMsginfo);
            return false;
        }

        if(regmVcode.test(respassword.value)){
            oMsginfo.style.display = "block";
            oMsginfo.innerText = "图形验证码格式不正确";
            TipsClearMsg(oMsginfo);
            return false;
        }

        if(regmVcode.test(noteyzm.value)){
            oMsginfo.style.display = "block";
            TipsClearMsg(oMsginfo);
            return false;
        }
        return true;
    }

    function register(){
        var submiregister = document.querySelector("#submiregister");
        submiregister.addEventListener("click",function(){
            if(checkRegister(true)){
                var agreement = document.querySelector("#agreement");
                if(!agreement.checked){
                    oMsginfo.style.display = "block";
                    oMsginfo.innerText = "同意服务协议后方可注册";
                    TipsClearMsg(oMsginfo);
                    return false;
                }else{
                    var phone = userphone
                    .value;
                    var pwd = password.value;
                    var respwd = respassword.value;
                    var noteyzm = noteyzm.value;

                    var data = {
                        phone: phone,
                        pwd: pwd,
                        respwd: respwd,
                        noteyzm: noteyzm
                    };
                    alert(JSON.stringify(data));
                }
            }
        })
    }

    //定时器清除文本框为空得提示按钮
    function TipsClearInput(registerReminder){
        iTimer = setTimeout(function(){
            registerReminder.style.display = "none";
        },3000);
    }

    //定时器清除错误信息提示
    function TipsClearMsg(oMsginfo){
        mTimer = setTimeout(function(){
            oMsginfo.style.display = "none";
        },3000)
    }


    return {
        init:init,
        refreshCode:refreshCode,
        getCode:getCode,
        register:register,
    }
})