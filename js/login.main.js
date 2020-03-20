/*
* 文件名:login.main.js
* 功能:登录功能
* 引用方式:require["login.main"]
* author:lisusu
* Date: 2020-03-16
*/
console.log("加载成功");

//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "login": "login",
        "ajax": "ajax"
    }
})


//2、引入模块，调用实现对应的功能
require(["login"],function(login){
    //初始化
    login.init();
    login.tab();
    login.getCode();
      
})
