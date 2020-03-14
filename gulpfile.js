/*
* 文件名:gulpfile.js
* 功能:解决编译sass时语法出错导致的gulp监听停止问题
* 引用方式:
* author:lisusu
* Date: 2020-03-12
*/

//引入gulp插件
const gulp = require("gulp");
//解决编译sass语法出现错误导致的gulp监听停止问题
const handleErrors = require("./js/handleErrors");

//打包所有html文件
gulp.task("copyhtml",function(){
    return gulp.src("web/*.html")
    .pipe(gulp.dest("dist/web"))
    .pipe(connect.reload());
})
//打包所有图片,任意格式
gulp.task("images",function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
//打包数据源.json
gulp.task("data",function(){
    return gulp.src(["data/*","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
//引入编译sass插件
const scss = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("scssAll",function(){
    return gulp.src("scss/*.{sass,scss}")
    // .pipe(scss())
    .pipe(scss({outputStyle: 'compact'}).on('error',handleErrors))//用我们自己写的handleErrors代替处理错误
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss1",function(){
    return gulp.src("scss/style.scss")
    .pipe(scss({outputStyle: 'compact'}).on('error',handleErrors))//用我们自己写的handleErrors代替处理错误
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss2",function(){
    return gulp.src("scss/login.scss")
    .pipe(scss({outputStyle: 'compact'}).on('error',handleErrors))//用我们自己写的handleErrors代替处理错误
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("login.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
//打包压缩合并文件
// const concat = require("gulp-concat");
// const uglify = require("gulp-uglify");

gulp.task("scripts",function(){
    return gulp.src(["js/*.js","!gulpfile.js"])
    // .pipe(concat("index.js"))//合并成功后新文件的名字
    .pipe(gulp.dest("dist/js"))
    // .pipe(uglify())
    // .pipe(rename("index.min.js"))
    // .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
//一次执行多个任务
gulp.task("build",["copyhtml","images","data","scssAll","scss1","scss2","scripts"],function(){
    console.log("项目建立成功");
})


//启动监听
gulp.task("watch",function(){
    gulp.watch("web/*.html",["copyhtml"]);
    gulp.watch("images/**/*",["images"]);
    gulp.watch(["data/*","!package.json"],["data"]);
    gulp.watch("scss/*.{sass,scss}",["scssAll"]);
    gulp.watch("scss/style.scss",["scss1"]);
    gulp.watch("scss/login.scss",["scss2"]);
    gulp.watch(["js/*.js","!gulpfile.js"],["scripts"]);
    
})

//本地启动一个服务器
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root: "dist",
        port: 8888,
        livereload: true  //启动实时刷新
        // fallback: 'login.html' //默认启动文件
    })
})

//同时执行watch和server两个任务，设置默认任务，执行gulp
gulp.task("default",["server","watch"])