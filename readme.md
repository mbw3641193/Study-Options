# <LINUX基本命令>

clear 清空

ls -a/-l: 查看当前目录结构 (-a看所有包括隐藏)

cd xxx[路径地址]：进入到指定的文件夹中
cd / : 根目录
cd ./ : 当前目录
cd ../ : 上级目录

mkdir : 创建文件夹
touch : 创建空文件

vi xxx : 向文件中插入或者管理内容
    i > 进入到插入模式
    ESC + :wq 保存内容，退出

echo : 'hello world' > xxx.txt 向指定的文件中输入hello world，如果没有文件就会自动创建

cat : 查看内容

cp : 拷贝

rm : 删除
    -r 递归删除    -f 强制删除(无法还原)

# <git的常规流程>

####
modify 工作区
staged或cached 暂存区

####
每一个git仓库都有3个区
1)工作区:
    写代码
2)暂存区:
    临时存放每一次修改的代码，但是并没有生成历史版本
3)历史区:
    存放所有历史版本的地方(提交的版本)

$ git init 创建git仓库

$ git add -A 全部提交到暂存区

$ git commit xxx -m'[备注]'  把暂存区中的xxx文件提交到历史区，生成一个历史版本

$ git status 查看当前修改的文件处于哪一个区域 
红色：工作区
绿色：暂存区
看不见：已经提交(历史区)

$ git rm --cached xxx -f 删除暂存区的某个文件<xxx>

$ git checkout xxx 从暂存区撤回到工作区，并且不会删除暂存区的文件

$git diff  工作区与暂存区对比
$git diff master 工作区与历史区对比


代码回滚：

$ git checkout xxx 从暂存区撤回到工作区，并且不会删除暂存区的文件

$ git reset HEAD --xxx 拉取最近一次提交到版本库的文件到暂存区  改操作不影响工作区   为了checkout回工作区

###### <常用>
$ git reset --hard 版本号    把暂存区和工作区的内容全部都变为该版本（版本号前几位就可以）

$ git log xxx  该文件的历史操作


# <团队协作模式>

$ git push origin master  把本地历史区中的信息推送到中央服务器上 (存在代码冲突)

$ git pull origin master  把中央服务器上的信息拉取到本地  (存在代码冲突)

***
***
***
***
#### <新电脑需要先配钥匙>
（钥匙的作用是把你电脑上面的git和github连接）
ssh-keygen -t rsa -C "your_email@youremail.com"
配钥匙的过程中不管你看到什么一路enter就好。然后你会在C:\Users\Administrator\.ssh目录下面看到三个东西，其中一个是.pub格式的，用记事本打开它，复制。然后来到你的github，在setting里面找到ssh keys把你刚才复制的钥匙给粘贴了，title随便写一个。

2.建仓库
$ git init
打完这个命令行敲回车，你会发现你的这个文件夹下面多了一个.git文件夹，没有的在查看里面把隐藏的文件给显示出来就好了。

3.设置用户名和邮箱。
1 $ git config --global user.name "your name"
2 $ git config --global user.email "your_email@youremail.com"

4.添加远程地址
$ git remote add origin git@github.com/你的github用户名/仓库名.git
#### <本项目上传方式>
#### <$ git remote add origin git@github.com:mbw3641193/Git-Study-Options.git 通过SSH链接本地仓库与github远程仓库>
#### <$ git push -u origin master 上传到github远程仓库>

***
***
***
***

# <github readme美化>
Markdown 语法速查表


1 标题与文字格式
标题
# 这是 H1 <一级标题>
## 这是 H2 <二级标题>
###### 这是 H6 <六级标题>
文字格式
**这是文字粗体格式**
*这是文字斜体格式*
~~在文字上添加删除线~~
2 列表
无序列表
* 项目1
* 项目2
* 项目3
有序列表
1. 项目1
2. 项目2
3. 项目3
   * 项目1
   * 项目2
3 其它
图片
![图片名称](http://upload-images.jianshu.io/upload_images/1097226-6a6fbea43e82e7ac.png)
链接
[链接名称](http://gitcafe.com)
引用
> 第一行引用文字
> 第二行引用文字
水平线
***
代码
`<hello world>`
代码块高亮
```ruby
  def add(a, b)
    return a + b
  end