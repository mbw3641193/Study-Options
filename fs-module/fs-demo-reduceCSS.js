//合并并且压缩CSS
let fs = require('fs');
let {readdir,readFile,writeFile} = require('./utils/fs-promise.js');


readdir('fs-module/less').then((result)=>{  // 1.读取所有的css
    // console.log(result);
    return result.filter(item=>/\.less/i.test(item));
}).then((result)=>{  //得到less结尾的结果
    console.log(result);
    let arg = [];
    result.forEach(item=>{
        arg.push(readFile(`fs-module/less/${item}`));  //返回一个包含promise对象的数组
    });
    return Promise.all(arg); //返回一个数组
}).then(result=>{
    result = result.join('');
    return result = result.replace(/ /g, ''); //压缩所有的空格
    // console.log(result);
}).then(result=>{
    writeFile('fs-module/less/build.min.css',result) //返回一个promise
}).then(()=>{
    console.log('创建成功');
});