let fs = require('fs');


fs.copyFile('./fs模块/less/1.less','./fs模块/less/2.less',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('ok');
});