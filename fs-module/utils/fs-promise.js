let fs = require('fs');
let path = require('path');

let readFile = (pathName) => {
    //一般都会把传递的pathName进行处理；只需要传递相对路径，程序自动生成绝对目录地址
    //__dirname是创建模块的路径，path.resolve()是使用模块的路径
    // console.log('__dirname'+__dirname);
    // console.log(path.resolve());

    path = path.resolve(path.resolve(),pathName);

    return new Promise((resolve,reject)=>{
        fs.readFile(path,'UTF-8',(err,result)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(result);
        })
    })
}

module.exports = {
    readFile,
}