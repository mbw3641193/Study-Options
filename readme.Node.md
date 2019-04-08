# NODE
node 是基于v8引擎 渲染js的工具或者环境

#### 之所以把node作为后台编程语言：
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

#### 安装在本地与全局的区别

[安装在全局的特点]
1. 所有项目都可以使用这么模块，但是容易造成版本冲突，而且不能基于CommonJS模块规范调取使用
`npm root -g` 查看全局目录

为什么全局安装能使用命令：
会产生一个xxx.cmd文件，有这个文件，就可以执行xxx命令

[安装在本地的特点]
1. 只能在当前项目使用这个模块，但是不能直接的使用命令操作

配置package.json中的scripts，就可以使用命令：
`npm run xxx` 或 `yarn xxx` 执行命令

# 初始化项目

1. `npm init -y`              生成package.json  不添加-y 会默认手动输入选项
2. `npm install xxx --save`   生产依赖 –save，   开发依赖 –save-dev。

#NODE基础
NODE本身是基于CommonJS模块规范设计的，所以模块是NODE的组成

- 内置模块：NODE天生提供给JS调取使用的
- 第三方模块：别人写好的，我们可以基于NPM安装使用
- 自定义模块：自己创建的模块

#### CommonJS模块化设计的思想
1. 每一个JS都是一个单独的模块，模块里面的值和变量、函数都是私有的

2. 允许模块之间互相调用
```
-- 导出
module:             代表当前这个模块对象
module.exports:     模块的这个 属性 用来导出模块的属性和方法 ,一个模块内只能有一个，如果有两个后面会覆盖前面的
// dep.js
module.exports = function () {}
// app.js
let dep = require('dep');
dep();

exports:            是内置变量，也是用来导出当前模块的属性和方法   exports.fn = fn;
// dep.js
exports.A = function() {}
// app.js
let dep = require('dep');
dep.A();



module.exports == exports ，并且值都是对象



-- 导入
require:            内置变量，用来导入模块。require会把导入的模块代码全部执行完成，才可以获取值，然后继续执行本模块里面的代码，所以require是一个同步操作

```






