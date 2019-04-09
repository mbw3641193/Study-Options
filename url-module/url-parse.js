let url = require('url');

let urlString1 =  url.parse('http://www.haojiyoujijin.com/funddetails?fundcode=006903.OF&fundtype=1');
console.log(urlString1);
//打印结果：
// Url {
//     protocol: 'http:',                               =>协议
//     slashes: true,                                   =>是否有双斜线    
//     auth: null,                                      =>作者    
//     host: 'www.haojiyoujijin.com',                   =>域名+端口   
//     port: null,                                      =>端口   
//     hostname: 'www.haojiyoujijin.com',               =>域名   
//     hash: null,                                      =>哈希值   
//     search: '?fundcode=006903.OF&fundtype=1',        =>问号传递的参数   
//     query: 'fundcode=006903.OF&fundtype=1',          =>问号传递的参数 (不包含问号)  
//     pathname: '/funddetails',                        =>请求资源的路径名称
//     path: '/funddetails?fundcode=006903.OF&fundtype=1',  
//     href:'http://www.haojiyoujijin.com/funddetails?fundcode=006903.OF&fundtype=1' 
//     }

let urlString2 =  url.parse('http://www.haojiyoujijin.com/funddetails?fundcode=006903.OF&fundtype=1',true);
//第二个参数默认是false，设置为true可以把问号传参的部分也解析成为对象键值对的方式，所以true为常用方式
console.log(urlString2);

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.haojiyoujijin.com',
//     port: null,
//     hostname: 'www.haojiyoujijin.com',
//     hash: null,
//     search: '?fundcode=006903.OF&fundtype=1',
//     query: { fundcode: '006903.OF', fundtype: '1' },     //区别只有query
//     pathname: '/funddetails',
//     path: '/funddetails?fundcode=006903.OF&fundtype=1',
//     href:'http://www.haojiyoujijin.com/funddetails?fundcode=006903.OF&fundtype=1' 
//     }