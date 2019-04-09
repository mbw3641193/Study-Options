let fs = require('fs');


fs.writeFile('./fs模块/less/1.less','body{background-color:#fff;}','utf8',(err)=>{
    //不设置utf8格式，就会得到BUFFER格式的数据
    if(err){
        console.log(err);
        return;
    }
    console.log('ok');
});