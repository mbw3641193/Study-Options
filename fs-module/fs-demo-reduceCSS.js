let fs = require('fs');
let {readFile} = require('./utils/fs-promise.js');

//合并并且压缩CSS
readFile('fs-module/less/1.less').then((result)=>{
    console.log(result);
});