/*
* 文件名:main02.js
* 功能:引入register.js文件
* 引用方式:
* author:lisusu
* Date: 2020-03-16
*/
console.log("加载成功");

//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "register": "register"
    }
})


//2、引入模块，调用实现对应的功能
require(["register"],function(register){
    register.init();
    register.refreshCode();
    register.getCode();
    register.register();
    
      
})
