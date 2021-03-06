/*
* 文件名:index.main.js
* 功能:首页js
* 引用方式:require["index.main"]
* author:lisusu
* Date: 2020-03-13
*/
console.log("加载成功");

//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        // "jquery-cookie": "jquery.cookie",
        // "parabola": "parabola",//抛物线方程不支持AMD规范
        "index": "index"
    },
    /*
    shim: {
        // 设置依赖关系
        "jquery-cookie": ["jquery"],
        // 某一模块，不遵从AMD
        "parabola": {
            exports: "_"
        }
    }
    */
})
//2、引入模块，调用实现对应的功能
require(["index"],function(index){
    
    index.shopCartmove();
    index.hoverheader();
    index.axonBlade();
    index.navpicMove();
    index.navpic02Move();
    index.hovernav();
    index.hoverfootercenter();
    index.hoverfooterbottom();
    // index.download();
    index.bannerTab();
    index.bannerList();
    index.picMove();
    index.phoneTab();

    
    // nodeIntegration: true; // 是否集成 Nodejs,把之前预加载的js去了，发现也可以运行
      
})
// debugger;