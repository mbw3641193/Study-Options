let fs = require('fs');


fs.readFile('./fs模块/less/1.less','utf8',(err,result)=>{
    //不设置utf8格式，就会得到BUFFER格式的数据
    if(err){
        console.log(err);
        return;
    }
    console.log(result); //得到文件内容
});