//导入工具包 require('node_modules里对应模块')
let gulp = require('gulp');
let less = require('gulp-less');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let pump = require('pump');
let postcss = require('gulp-postcss');
let pxtoviewport = require('postcss-px-to-viewport');

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});

gulp.task('minify-css', () => {
  return gulp.src('src/css/index.css')
         .pipe(cleanCSS({compatibility: 'ie8'}))
         .pipe(gulp.dest('src/mincss'))
});

gulp.task('compress', function( cb ){
  pump([
    gulp.src('src/js/index.js'),
    uglify(),
    gulp.dest('src/minjs')
  ],
  cb
  );
});

gulp.task('css', function () {
  var processors = [
    pxtoviewport({
      viewportWidth: 720,
      viewportUnit: 'vw'
    })
  ];

  return gulp.src('src/css/post.css')
         .pipe(postcss(processors))
         .pipe(gulp.dest('src/postcss'))
});

gulp.task('getsvg', function () {
  return gulp.src('src/css/testa.css').pipe(
    postcss([
      require('postcss-write-svg')({ /* options */ })
    ])
  ).pipe(
    gulp.dest('src/testa')
  );
});



gulp.task('default',['testLess', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径