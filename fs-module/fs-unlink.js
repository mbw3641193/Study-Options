let fs = require('fs');


fs.unlink('./fs模块/less/1.less',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('ok');
});