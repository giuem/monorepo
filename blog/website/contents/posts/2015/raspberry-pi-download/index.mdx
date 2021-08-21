---
title: 把树莓派变成一个下载机
date: 2015-04-04 15:45:01
# tags:
#   - raspberry pi
---

树莓派入手一段时间了，一直就当成贴吧云签到。最近买了块 1T 移动硬盘，加上家里的 20M 光纤，正好拿来做 NAS。<!--more-->

## 准备工作

树莓派的电源是带不动移动硬盘的，所以需要一个带有独立电源的 USB HUB。然后我上淘宝买了个绿联的 4 口 USB HUB，18 元包邮。（一条 5 毛，发贴记得删除括号里内容！）

## 挂载硬盘

### 格式支持。

```
sudo apt-get install ntfs-3g
sudo apt-get install exfat-nofuse
```

### 挂载

输入 `fdisk -l` 查看是否挂载成功。如果成功，你会看到类似下图的信息。
![图1.挂载硬盘](https://img.giuem-lb.washingpatrick.cn/20150404160320.png)

然后新建一个目录作为挂载点

```
mkdir /mnt/nas
nano /etc/fstab
# 在最后一行加入
/dev/sda1 /mnt/nas ntfs-3g defaults,noexec,umask=0000 0 0
```

然后重启。

## aria2

我打算使用 aria2 作为下载工具（迅雷渣渣）

## 安装

```
sudo apt-get install aria2 apache2
sudo visudo
# 在底部增加这一行
www-data ALL=(ALL) NOPASSWD: ALL
```

```
mkdir ~/.aria2
touch ~/.aria2/aria2.session
nano ~/.aria2/aria2.conf
```

在 `aria2.conf` 写这些

```
# 下载默认的目录
dir=/mnt/nas
disable-ipv6=true
enable-rpc=true
rpc-allow-origin-all=true
rpc-listen-all=true
#rpc-listen-port=6800
continue=true
#刚才touch命令的那个文件，路径要绝对路径
input-file=/root/.aria2/aria2.session
#同上，这个文件的作用是保存你的下载列表，不保存的话重启后所有下载都木有了
save-session=/root/.aria2/aria2.session
max-concurrent-downloads=3
```

之后运行 `aria2c –conf-path=/root/.aria2/aria2.conf` ，没有错误就可以退出了。

把 aria2 做成系统的服务： `sudo nano /etc/init.d/aria2c`

```
#!/bin/sh
### BEGIN INIT INFO
# Provides:          aria2
# Required-Start:    $remote_fs $network
# Required-Stop:     $remote_fs $network
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Aria2 Downloader
### END INIT INFO

case "$1" in
start)

echo -n "Starting aria2c"
sudo -u root aria2c --conf-path=/root/.aria2/aria2.conf -D
#sudo -u后面的是你正在使用的用户名
;;
stop)

echo -n "Shutting down aria2c "
killall aria2c
;;
restart)

killall aria2c
sudo -u root aria2c --conf-path=/root/.aria2/aria2.conf -D
#同上面的一样，根据自己的用户名改。
;;
esac
exit
```

然后设置这个文件的权限：

```
sudo chmod 755 /etc/init.d/aria2c
```

测试服务是否可以启动：

```
sudo service aria2c start
```

如果只显示 Starting aria2c，没有其他错误提示的话就成功了。

添加 aria2c 服务自动运行：

```
sudo update-rc.d aria2c defaults
```

Aria2 相关的好了，下面开始网页控制 aria2 下载。

```
cd /var/www
git clone https://github.com/binux/yaaw
```

这个是别人汉化好的，不过在 GitHub 下载速度可能有点慢。

然后访问 ip/yaaw，如我的是 `192.168.0.137/yaaw`。就可以开始下载了。

### 文件下载测试

![图2.文件下载测试](https://img.giuem-lb.washingpatrick.cn/20150404164825.png)
