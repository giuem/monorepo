---
title: 在 Linux 上搭建一个求生之路 2 服务器
date: 2016-12-27 23:22:52
tags:
  # - linux
  # - l4d2
---

圣诞节 Steam 特惠，几个室友约着一起买了求生之路 2，13 元的价格还算便宜。但打了一把后发现官方服务器卡的不行，根本不能秀操作。然后因为我们是每人一台路由器，局域网联机不是特别方便，于是我自告奋勇搭了个服务器。当然，主要是我又想折腾那台学生机了。<!--more-->

我使用的是官方提供的 SteamCMD 搭建的，后来我发现竟然有个[工具](https://gameservermanagers.com/)，搭建起来方便多了。不过那时我已经搭好了，就没折腾这个工具。

## 服务器

- 基本配置：1 核 1GB 1Mbps
- 硬盘：20G
- 系统：Ubuntu Server 16.04.1 LTS 64 位

我这配置跑服务器 CPU 利用率大概在 20%，内存使用不超过 40%，占用带宽大约为 0.4 Mbps。但要注意的是，整个求生之路大约占 8G 硬盘空间，所以确保你的服务器有这么多的空间。以下操作都是基于 Ubuntu，其他系统可以看一下[官方文档](https://developer.valvesoftware.com/wiki/SteamCMD)。

## 安装 32 位运行库

如果你使用的是 64 位的系统，则需要安装 32 位的运行库。

```shell
sudo apt-get install lib32gcc1
```

## 下载 Left 4 Dead 2 Dedicated Server

```shell
mkdir ~/steamcmd
cd ~/steamcmd
wget https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz
tar -zxvf steamcmd_linux.tar.gz
./steamcmd.sh
```

完成后，匿名登陆服务器。（某些游戏不能匿名登陆下载，具体看这[https://developer.valvesoftware.com/wiki/Dedicated_Servers_List](https://developer.valvesoftware.com/wiki/Dedicated_Servers_List)）

```shell
Steam>login anonymous
```

指定下载目录

```shell
Steam>force_install_dir /home/ubuntu/l4d2
```

下载服务端，下载指令是 `app_update <app_id> [-beta <betaname>] [-betapassword <password>] [validate]` `app_id` 可以在上面的链接找到。

```shell
Steam>app_update 222860 validate
```

下载完成后会提示 `Success! App '222860' fully installed.`，这时候输入 `quit` 退出即可。

因为我的机器在国内，由于不可抗拒的因素，下载不稳定，所以下载前我还特意开了梯子。

## 配置 Left 4 Dead 2 Dedicated Server

新建配置文件

```shell
cd /home/ubuntu/l4d2/left4dead2/cfg/
vi server.cfg
```

配置文件内容如下：

```
hostname "servername"    //游戏服务器名
rcon_password "password" //远程管理密码
//sv_search_key yourkey  //搜索此服务器的关键词
//sv_region 255          //服务器地区，255表示全球
//sv_gametypes "coop,versus,survival,scavenge" //游戏模式
//map c5m1_waterfront    //游戏地图
//sv_voiceenable 1       //开启语音服务
//sv_lan 0				 //是否是局域网游戏
//sv_cheats "0"			 //是否允许作弊

//sv_steamgroup "01234"  //Steam组号
//sv_steamgroup_exclusive 1 //将服务器设为Steam组私有
```

事实上，我们只需要这几句就够了

```
hostname "xxx"     //游戏服务器名
sv_steamgroup "12345"     //Steam组号
sv_steamgroup_exclusive 1 //将服务器设为Steam组私有
```

然后创建一个组，把好友拉进去，这样就行。

## 运行服务器

```shell
cd /home/ubuntu/l4d2
./srcds_run -game left4dead2 +exec server.cfg
```

运行成功后，记得开放对应的端口，端口默认是 `27015` ，具体端口可在显示的信息中找到。

这时如果关了 SSH 窗口，服务器就关闭了，可以借助 `screen` 或 `nohup` 实现后台运行。

## 参考

1. [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD)
2. [Linux 环境搭建 Left 4 Dead 2/求生之路 2 专用服务器](http://xuchen.wang/2015/12/18/l4d2server/)
