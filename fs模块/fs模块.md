# NODE中的内置模块

## fs内置模块 :实现I/O操作
`let fs = require('fs');`

### fs.mkdir / fs.mkdirSync     创建文件夹  (有sync的是同步)

`fs.mkdir(path[, options], callback);`
`err=>`

### fs.readdir / fs.readdirSync    读取文件目录中的内容

`fs.readdir(path[, options], callback);`
`(err,result)=>`


### fs.rmdir / fs.rmdirSync    删除目录，如果目录中有文件，则不能删除

`fs.rmdir(path, callback)`
`err=>`

### fs.unlink / fs.unlinkSync  删除文件

`fs.unlink(path, callback)`
`err=>`

### fs.readFile / fs.readFileSync    读取文件中的内容

`fs.readFile(path[, options], callback)`
`(err,data)=>`

### fs.writeFile / fs.writeFileSync    覆盖向文件中写入内容

```
const data = new Uint8Array(Buffer.from('Node.js中文网'));
fs.writeFile('文件.txt', data, (err) => {
  if (err) throw err;
  console.log('文件已被保存');
});
```

### fs.appendFile / fs.appendFileSync    追加向文件中写入内容

```
fs.appendFile('message.txt', '追加的数据', (err) => {
  if (err) throw err;
  console.log('数据已追加到文件');
});
```

### fs.copyFile / fs.copyFileSync    拷贝文件到新的目录下

```
// 默认情况下将创建或覆盖目标文件。
fs.copyFile('源文件.txt', '目标文件.txt', (err) => {
  if (err) throw err;
  console.log('源文件已拷贝到目标文件');
});
```