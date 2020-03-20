/*
* 文件名:detail_page.main.js
* 功能:注册功能
* 引用方式:require["detail_page.main"]
* author:lisusu
* Date: 2020-03-17
*/
console.log("加载成功");

//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        // "jquery":"jquery-1.10.1.min",
        "detail_page": "detail_page",
        // "jquery-zoom": "https://cdn.bootcss.com/jquery-zoom/1.7.21/jquery.zoom",//使用需在js页面加入"jquery-zoom"
    }
})


//2、引入模块，调用实现对应的功能
require(["detail_page"],function(detail_page){
    detail_page.hovernav();
    detail_page.axonBlade();
    detail_page.tab();
    detail_page.show_time();
    detail_page.fdj();
    // detail_page.fdj2();
    // detail_page.range();      
})