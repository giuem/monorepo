---
title: 如何删除 Wormhole 后门
date: 2015-11-08 15:02:38
# tags:
#   - wormhole
#   - android
---

上文我们提到了 `Wormhole` 的相关危害，既然百度目前没有删除这个后门的打算，那么我就应该采取一些手段主动删除这个后门。<!--more-->

## 漏洞自检

使用**终端模拟器**

```bash
$ netstat
```

查看 `40310/6259` 是否被监听

![终端模拟器](https://img.giuem-lb.washingpatrick.cn/Screenshot_2015-11-08-15-15-16.png)

从上图可以看到，我手机上的 40310 端口被监听了

## 删除漏洞

### 未 Root

对于未 Root 用户，最好的方法就是卸载所有百度的 APP

### 已 Root

如果你的手机已经 Root ,那么我们可以使用神器 **My Android Tools** 禁用相关服务。

首先，选择 `服务` ，找到百度系的 APP （如：百度地图）进入。
然后禁用 `MoPlusService`。

![My Android Tools-百度地图](https://img.giuem-lb.washingpatrick.cn/Screenshot_2015-11-08-15-29-14.png)

一般禁用了这个，后门就关闭了。如果不放心，可以选择 `广播接收器` 禁用以 `MoPlus` 开头的组件，如：`MoPlusReceiver` 之类的。

最后别忘了检查一下对应的端口是否关闭，如果没有关闭，那说明还有其他 APP 存在这个后门。
