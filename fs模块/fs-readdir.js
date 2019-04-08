let fs = require('fs');

// let result = fs.readdirSync('./fs模块'); //同步
// console.log(1)

fs.readdir('./fs模块',(err,result)=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log(result);
});
console.log(1);