define(["jquery"],function($){
    
    //用户名 仅支持手机号：最长11位数字，不支持字母，符号
    function register(){
        
        // var userphone = $("#userphone").val();
        // var reguser = /^1[3456789]{1}[0-9]{9}$/;
        
        $(".registerYzm").on("tap",function(){
                    var code = "";//接收验证码
                    var count = 60;
                    var userphone = $("#userphone").val();//手机号码 
                    var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
                    if(!reg.exec(userphone) || userphone == null || userphone == ''){
                        mui.toast('手机号输入错误',{duration:'short',type:'div'});
                        return false;
                    }
                    $(".description").attr('disabled','disabled');
                    $(".description").html("倒计时" + count + "秒");
                    var timer = setInterval(function(){
                        count--;
                        $(".description").attr('disabled','disabled');
                        $(".description").html("倒计时" + count + "秒");
                        if(count == 0){
                            clearInterval(timer);
                            $(".description").attr("disabled",false);
                            $(".yanzdescriptionhengma").html("重新发送");
                            code = "";
                        }
                    },1000);
                });
                
                $(".Btn").on("tap",function(){
                    var userphone = $("#userphone").val();//手机号码 
                    var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
                    var pswd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
                    if(!reg.exec(userphone) || phouserphonene == null || userphone == ''){
                        mui.toast('手机号输入错误',{duration:'short',type:'div'});
                        return false;
                    }else if(!pswd.exec($("#password").val()) || $("#password").val() == null || $("#password").val() == ''){
                        mui.toast('密码格式输入错误',{duration:'short',type:'div'});
                        return false;
                    }else{
                        getSrceenWH();
                        $('#dialogBg').fadeIn(300);
                        $('#dialog').fadeIn();
                    }
                })
    }
    
    /*
    * 会员注册脚本
    */
   /*
    function register(){
    void function(signup_form){

        var alert_timer = 0;
        var _alert_error = function(msg){
            signup_form.find('.alert-error').remove();
            signup_form.append($('<div class="alert alert-danger">'+msg+'</div>'));
            alert_timer = setTimeout(function(){
                clearTimeout(alert_timer);
                signup_form.find('.alert-danger').fadeOut('fast',function(){
                    $(this).remove();
                });
            },3000);
        }

        $('#userphone').on('blur',function(e){
            var ipt = $(this);
            $.post(
                // '/passport-check_login_name.html',
                {'username':ipt.val()},function(re){
                if(re.error){
                    ipt.popover({content:re.error,placement:'right',trigger:'click',container:'body'});
                    ipt.popover('show');
                    ipt.closest('.registeript').removeClass('has-success').addClass('has-error');
                }else if(re.success){
                    ipt.closest('.registeript').removeClass('has-error').addClass('has-success');
                }

            },'json');
        });
        $('#userphone').on('focus',function(e){
            $(this).popover('destroy');
        });


        signup_form.on('submit',function(e){
            e.stopPropagation();
            if(!$('#agreement').prop('checked')){
                _alert_error('同意服务协议后方可注册');
                return false;
            }
            signup_form.find('button[type=submit]').button('loading');
            
            //注册数据加密
            var encrypt = new JSEncrypt();
            encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----\
            MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEApd9N5S7dQm8Cd4e91V/F\
            WV5/Jf3P0ASJnkgIXlsfD5F/mN4rZtiqxmHD1NvVGn/j+lmu3xqL8YDQOR4xsOK6\
            Lgsau7veS3aFLIf/IDyT/W3FeeI3T+ps0bpIsLxl1wHYtdkDlHb5JZ45wzoFMYkV\
            9PR1/ZDJX5UWIsiiXWi1vXx/xfGsaO3GRTPFBfV6KGbHGtbbRi/0XPhEwrSMGsSc\
            eNrrw504JtIt/cBZSsGekfyhRdjcrmVapli4JH/mw9rRQNWTrpGu+WZKf+gnJo04\
            9P09uVizEita3oDgSlL84upZdI1bbnD6Zp5AWBaYAz17UJrW/LT18955NUXAbKqc\
            AwnV+hmMPpAh9FIhVm5UaGGtAsSEoT+u5s8o1C34ZQ+g3QUWFOfQ/OVT4frEiEvx\
            YsnulwU+XIsYEDctqhlO1BH6eptoKd/N9tkh/LEAFRKSc9+aAAD8j236ucXX096U\
            nTdaqbw78uNkiahZ7W08UhRjx1a2V8BIcY/6lvIbGNrm0uQ8xM9Tb4iqrGarGBpz\
            ANw/xEd0U57Rk+c+/ZMMbBuSAJlp9VC9Bi++j3NCJrAWt9CnrroFXHAGQplFLwc/\
            73AOclbQ5tQPeXK9jWR6XDxbLGPVf6llZ6XeEPo3tVmjVoRRvCDac57UOgPLTTGu\
            lBteYBsIe36tkd+fhjXCV3cCAwEAAQ==\
            -----END PUBLIC KEY-----');
            
            var data = encrypt.encrypt(signup_form.serialize());
            $.post(signup_form.prop('action'),{data:data},function(re){
                if(re.error){
                    //注册失败更新验证码
                    $('#vcode-img').prop('src',"/vcode-index-passport.html"+'?'+new Date().getTime());
                    _alert_error(re.error);
                }
                if(re.success){
                    location = re.redirect;
                }
                signup_form.find('button[type=submit]').button('reset');
            },'json');
            return false;
        });

        //获得短信验证码
        var _cutdown_sms = function(btn){
            btn.addClass('disabled');
            var cutdown = 120,btn_o_text = btn.text(),timer =
            setInterval((function(){
                btn.text('短信已发送,'+(cutdown--)+'秒后可重试');
                if(cutdown<1){
                    clearInterval(timer);
                    btn.text(btn_o_text).removeClass('disabled');
                }
                return arguments.callee;
            })(),1000);
        };
        signup_form.find('.mobile-vcode button').on('click',function(e){
            if(!$('#input_login_name').val() || !$('#input_vcode').val()){
                return false;
            }
            if($.trim($('#input_vcode').val()).length != 4){
                _alert_error(图形验证码不正确);
                return;
            }
            if(!(/^1[3456789]{1}[0-9]{9}$/.test($('#input_login_name').val()))){
                _alert_error(手机号码不正确);
                return;
            }
            var btn = $(this);
            if(btn.hasClass('disabled'))return;
            btn.addClass('disabled');
            var $params_str = 'mobile='+$('#input_login_name').val()+'&vcode='+$('#input_vcode').val()+'&ihash='+"4c04eba28cd8f36e4d112fcf43d79adb";
            var p_encrypt = new JSEncrypt();
            p_encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----\
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEApd9N5S7dQm8Cd4e91V/F\
WV5/Jf3P0ASJnkgIXlsfD5F/mN4rZtiqxmHD1NvVGn/j+lmu3xqL8YDQOR4xsOK6\
Lgsau7veS3aFLIf/IDyT/W3FeeI3T+ps0bpIsLxl1wHYtdkDlHb5JZ45wzoFMYkV\
9PR1/ZDJX5UWIsiiXWi1vXx/xfGsaO3GRTPFBfV6KGbHGtbbRi/0XPhEwrSMGsSc\
eNrrw504JtIt/cBZSsGekfyhRdjcrmVapli4JH/mw9rRQNWTrpGu+WZKf+gnJo04\
9P09uVizEita3oDgSlL84upZdI1bbnD6Zp5AWBaYAz17UJrW/LT18955NUXAbKqc\
AwnV+hmMPpAh9FIhVm5UaGGtAsSEoT+u5s8o1C34ZQ+g3QUWFOfQ/OVT4frEiEvx\
YsnulwU+XIsYEDctqhlO1BH6eptoKd/N9tkh/LEAFRKSc9+aAAD8j236ucXX096U\
nTdaqbw78uNkiahZ7W08UhRjx1a2V8BIcY/6lvIbGNrm0uQ8xM9Tb4iqrGarGBpz\
ANw/xEd0U57Rk+c+/ZMMbBuSAJlp9VC9Bi++j3NCJrAWt9CnrroFXHAGQplFLwc/\
73AOclbQ5tQPeXK9jWR6XDxbLGPVf6llZ6XeEPo3tVmjVoRRvCDac57UOgPLTTGu\
lBteYBsIe36tkd+fhjXCV3cCAwEAAQ==\
-----END PUBLIC KEY-----');
            var p_data = p_encrypt.encrypt($params_str);
            $.post('/passport-send_vcode_sms.html',{data:p_data},function(re){
                if(re && re.error){
                    btn.removeClass('disabled');
                    //短信发送失败更新验证码
                    $('#vcode-image').prop('src',"/vcode-index-passport.html"+'?'+new Date().getTime());
                    _alert_error(re.error);
                }
                if(re && re.success){
                    _cutdown_sms(btn);
                }
            },'json');


        });

    }($('#member_signup_form'));

    }

    */

    return {
        register:register,
    }
})