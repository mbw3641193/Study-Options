# NODE
node 是基于v8引擎 渲染js的工具或者环境

####之所以把node作为后台编程语言：
1. 可以把node安装在服务器上
2. 可以把编写的js代码放到服务器上，通过node执行

#### node做后台的优势和特点

~~传统后台语言：JAVA/Python/PHP/C#/Go...~~

1. 单线程 
2. 基于v8引擎渲染 (快)
3. 异步无阻塞I/O操作 (IO : Input/Ouput  对文件的读写)
4. event-driven事件驱动 (类似于回调函数)

# NPM应用
目前工程化开发都是基于node环境，基于npm安装管理安装模块，基于webpack实现模块之间的依赖打包、部署上线等。

```
npm install xxx 把模块安装在当前目录下

npm install xxx@xxx 安装指定版本号

npm install -g xxx 把模块安装在全局目录下

```

#### npm的一些其他源

```
1
npm install cnpm -g       使用cnpm (不常用，安装经常有问题)

2
npm install yarn -g       使用yarn (只能把模块安装在当前目录下，不能安装到全局。基于yarn安装会默认生成package.json)

yarn add xxx
yarn remove xxx 

3
npm install bower -g      使用bower 也是类似于npm的包管理器，从github下载，不常用

```

# 初始化项目

1. `npm init -y`              生成package.json  不添加-y 会默认手动输入选项
2. `npm install xxx --save`   运行时需要用到的包使用–save，否则使用–save-dev。




