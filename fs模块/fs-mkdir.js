let fs = require('fs');

fs.mkdir('./fs模块/less',err=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log('ok');
});
console.log(1);