let fs = require('fs');


fs.appendFile('./fs模块/less/1.less','body{background-color:#000;}','utf8',(err)=>{
    //不设置utf8格式，就会得到BUFFER格式的数据
    if(err){
        console.log(err);
        return;
    }
    console.log('ok');
});