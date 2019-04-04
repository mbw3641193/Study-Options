============================
LINUX基本命令

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

============================
git的常规流程

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

$ git reset --hard 版本号    把暂存区和工作区的内容全部都变为该版本

$ git log xxx  该文件的历史操作


