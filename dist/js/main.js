/*
* 文件名:main.js
* 功能:引入js文件
* 引用方式:
* author:lisusu
* Date: 2020-03-13
*/
console.log("加载成功");

//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "index": "index"
    },
    // shim: {
    //     //设置依赖关系
    // }
})
//2、引入模块，调用实现对应的功能
require(["index"],function(index){
    index.shopCartmove();
    index.bannerTab();
    index.bannerList();
})