# learn-glup

glup自学笔记

## gulp是什么？

> 官网：**用自动化构建工具增强你的工作流程**
> 
> 个人：gulp是前端开发过程中对代码进行构建的工具，可以帮助开发者对html、css、js、图片等文件进行压缩、合并、混淆、检查、监听等相关操作。可以帮助开发者自动化地完成开发过程中的复杂任务，提高工作效率和代码质量。
> 
> gulp和grunt非常类似，但相比于grunt的频繁IO操作，gulp的流操作，能更快更便捷地完成构建工作。
> 
> 简单点说gulp就是帮助前端开发者摆脱“刀耕火种”的时代，自动化地完成前端构建任务。
>
> gulp常用地址：
> * gulp官网地址：[http://gulpjs.com](http://gulpjs.com)
> * gulp插件地址：[https://gulpjs.com/plugins/](https://gulpjs.com/plugins/)
> * gulp中文API：[http://www.gulpjs.com.cn/docs/api/](http://www.gulpjs.com.cn/docs/api/)

## 1、安装前的准备工作

学习之前先了解使用gulp的步骤：
> 1. 安装nodejs
> 2. 安装全局gulp
> 3. 项目安装gulp以及gulp插件
> 4. 配置gulpfile.js
> 5. 运行任务

### 1.1、安装nodejs

> **说明**： gulp是基于nodejs，理所当然需要安装nodejs
>
> **安装**：打开[nodejs官网](https://nodejs.org/)，看到大大的绿色下载按钮，它会根据系统版本信息选择对应版本（.msi文件）。然后就像安装其他.exe安装包一样一步步安装就可以了，安装路径随意。
 
### 1.2、使用命令行（如果你熟悉命令行，可以直接跳到下一步）

> **说明**：什么是命令行？命令行在osx是终端（Terminal），在windows是命令提示符（Command Prompt）；
> 
> **注：**下面的内容都是在windows系统下
> 
> 简单介绍gulp在使用过程中的常用命令，打开命令提示符执行下列命令（打开方式：window+r 输入cmd回车）：
>> node -v 查看安装的nodejs版本，出现版本号，说明刚刚已经正确安装nodejs。（未出现版本号，请尝试注销电脑重试）
>>
>> npm -v 查看npm的版本号，npm是在安装nodejs时益通安装的nodejs包管理器。
>>
>> cd 定位到目录，用法：cd+路径
>>
>> dir 列出文件列表
>>
>> cls清空命令提示符窗口内容

![提示符界面截图](http://oqpmmru7y.bkt.clouddn.com/QQ%E5%9B%BE%E7%89%8720171020192719.png)

### 1.3、npm介绍

1.说明： npm（node package manger）nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）；
2.使用npm安装插件：命令提示符执行`npm install <name> [-g] [--save-dev]`;
> <name>: node插件名称。例：`npm install glup-less --save-dev`
> 
> -g： 全局安装。将会安装在C:\Users\Administrator\AppData\Roaming\npm，并写入系统环境变量；非全局安装：将会安装在当前定位目录；全局安装可以通过命令行在任何地方调用它，本地安装将安装在定位目录的node_modules文件夹下，通过require()调用；
> 
> --save： 将保存配置信息到package.json（package.json时nodejs项目配置文件）
> 
> -dev： 保存到package.json的devDependencies节点，不指定-dev将保存至dependencies节点；一般保存在dependencies的像这些express/ejs/bode-parser等等
> 
> 为什么要保存至package.json？因为node插件包相对来说非常庞大，所以不加入版本管理，将配置信息写入package.json并将其加入版本管理，其他开发者对应下载即可（命令提示符`npm install`，会根据package.json下载所有需要的包，`npm install --production` 只下载dependencies节点的包）

3.使用npm卸载插件：`npm uninstall <name> [-g] [--save-dev]`（不要直接删除本地插件包）
> 删除全部插件：`npm uninstall gulp-less gulp-unlify gulp-concat...` 太麻烦！！！
> 
> 借助rimraf：`npm install rimraf -g`用法：`rimraf node_modules`

4.使用npm更新插件： `npm update <name> [-g] [--save-dev]`
> 更新全部插件： `npm update [--save-dev]`

5.查看npm帮助：`npm help`

6.查看当前目录已安装插件： `npm list`

**npm安装插件过程：从http://registry.npmjs.org 下载对应的插件包（该网站服务器位于国外，所以经常下载缓慢或出现异常），解决方法看下一小结↓↓↓↓↓↓**

### 1.4、选装cnpm

1.说明：因为cnpm安装插件是从国外服务器下载，受网络影响大，可能出现异常，所以我们可以采取淘宝镜像来完成这个任务。来自官网：“**这是一个完整npmjs.org镜像，你可以用此代替官方版本（只读），同步频率目前为10分钟一次以保证尽量与官方服务同步。**”

2.官方地址：[http://npm.taobao.org/](http://npm.taobao.org/)

3.安装：命令提示符执行`npm install cnpm -g --registry=https://registry.npm.taobao.org`;注意，安装完成后最好查看器版本号：`cnpm -v`或关闭命令提示符重新打开，安装完成直接使用有可能会出现错误；

**注：cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm（一下操作将以cnpm代替npm）**

## 2、全局安装gulp

1. 说明：全局安装gulp目的是为了通过它执行gulp任务
2. 安装： 命令提示符执行`cnpm install gulp -g`
3. 查看是否正确安装：命令提示符`gulp -v`，出现版本号则安装正确

## 3.新建package.json文件

1.说明：package.json是基于nodejs项目必不可少的配置文件，它是存放在项目根目录的普通json文件；
2.它是这样的一个json文件（<font style="color:red;">注意json文件内是不能写注释的，赋值下列内容请删除注释</font>）

```

{
  "name": "test",   //项目名称（必须）
  "version": "1.0.0",   //项目版本（必须）
  "description": "This is for study gulp project !",   //项目描述（必须）
  "homepage": "",   //项目主页
  "repository": {    //项目资源库
    "type": "git",
    "url": "https://git.oschina.net/xxxx"
  },
  "author": {    //项目作者信息
    "name": "surging",
    "email": "surging2@qq.com"
  },
  "license": "ISC",    //项目许可协议
  "devDependencies": {    //项目依赖的插件
    "gulp": "^3.8.11",
    "gulp-less": "^3.0.0"
  }
}

```

3.当然我们可以手动新建这个配置文件，更效率的方法：命令提示符执行`npm init`

![原谅我盗图了](http://static.ydcss.com/uploads/2015/03/gulp-3.png)

## 4.本地安装gulp插件

1.安装：定位目录命令后提示符执行`cnpm install --save-dev`

2.本示例以gulp-less为例（编译less文件），命令提示符执行`cnpm install gulp-less --save-dev`;
![原谅我盗图了](http://static.ydcss.com/uploads/2015/02/gulp-less-2.png)
3.将会安装node_modules的gulp-less目录下，改目录下gulp-less的使用帮助文档README.md

4.为了能正常使用，我们还要在本地安装gulp：`cnpm install gulp --save-dev`

**细心的你可能发现了，我们全局安装了gulp，项目也安装了gulp，全局安装gulp是为了执行gulp任务，本地安装则是为了调用gulp插件功能**

## 5.新建gulpfile.js文件（重要）

1.说明：gulpfile.js是gulp项目的配置文件，是位于项目根目录的普通js文件（其实gulpfile.js放入其他文件夹下也可以）

2.它大概是这样一个js文件（耕读插件配置请[查看这里](http://www.ydcss.com/archives/tag/gulp)）

```

//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
 
//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});
 
gulp.task('default',['testLess', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
 
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径

```

## 6.运行gulp

1. 说明：命令提示符执行`gulp 任务名称`
2. 编译less：命令提示符执行`gulp testLess`
3. 当执行`gulp default`或`gulp`将会调用default任务里面的所有任务['testLess', 'elseTask']

## 7.使用wenstrom运行gulp任务

1.说明：使用webstrom可视化运行gulp任务

2.使用法法：将项目导入wenstrom，右键gulpfile.js选择“Show Gulp Tasks”打开Gulp窗口，若出现“Not task found”，选择右键“Reload tasks”，双击运行即可。
![原谅我盗图了](http://static.ydcss.com/uploads/2015/03/webstorm.png)

## 7.所有步骤汇总

1. 安装nodejs；
2. 新建package.json文件；
3. 全局和本地安装gulp；
4. 安装gulp插件；
5. 新建gulpfile.js文件；
6. 通过命令提示符运行gulp任务




## 参考文章

* http://www.ydcss.com/archives/18
* http://www.gulpjs.com.cn/docs/getting-started/
* https://segmentfault.com/a/1190000003003847
* http://www.jianshu.com/p/7062894cb47d
* https://segmentfault.com/a/1190000010289128
* https://segmentfault.com/a/1190000003409507


