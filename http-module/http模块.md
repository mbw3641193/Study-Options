# NODE中的内置模块

## http内置模块
`let http = require('http');`

### http.createServer([options][, requestlistener])

`let server = http.createServer()`      创建一个服务
`server.listen()`                       监听一个端口

*基于node创建后台程序，一般都要创建一个server模块。在模块中实现创建web服务，和对于请求的处理(并且一般会把server模块放到当前项目的根目录下)*


#### 服务器端的任务

1. 创建服务(指定端口的web服务)

2. 接收客户端的请求信息，并且进行解析处理，把需要的内容获取到，并且响应给客户端


