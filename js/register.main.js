/*
* 文件名:register.main.js
* 功能:注册功能
* 引用方式:require["register.main"]
* author:lisusu
* Date: 2020-03-16
*/
console.log("加载成功");

//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "register": "register",
        "ajax": "ajax"
    }
})


//2、引入模块，调用实现对应的功能
require(["register"],function(register){
    //初始化
    register.init();
    //刷新验证码
    register.refreshCode();
    //获取验证码
    register.getCode();
    //点击注册
    register.register();
    
      
})
