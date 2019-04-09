let path = require('path');

console.log(path.resolve());//返回当前模块的绝对地址(不包含模块名称) e:\git-test

console.log(path.resolve(__dirname, 'less/tt'));    //e:\git-test\path模块\less\tt

console.log(path.resolve(`${__dirname}/css`, `${__dirname}/less`)); //两个都是绝对路径，则已最后一个为主 //e:\git-test\path模块\less