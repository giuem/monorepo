---
title: Google Analytics 加载优化
date: 2017-07-17 18:54:48
# tags:
#   - javascript
---

最近给网站加上了 Google Analytics（大概两年前，我刚换到 Hexo 的时候，我就把统计撤了，看到 LWL 的群里在晒统计结果，心里痒痒又加上了）。但是直接使用 Google Analytics 有一点弊端：一是会被各种广告屏蔽软件屏蔽，导致统计结果不准确；二是在国内加载不稳定。<!--more-->

因此，我给 Google Analytics 加了一层代理，优化加载速度同时防止被屏蔽。

[GitHub Repo](https://github.com/giuem/ga-proxy) （求 Star🌚

## 序

目前关于 Google Analytics 大致有两种方案，一种是本文使用介绍的，另一种是利用 Nginx 的 post_action。

前者需要多一次 HTTP 请求，后者有点麻烦，还要过滤搜索引擎 UA，不适用于使用 CDN 的网站。

本文所采用的方案是基于 [Google Analytics 异步请求（服务端请求）](https://stneng.com/google-analytics-%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82%EF%BC%88%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%AF%B7%E6%B1%82%EF%BC%89/) 提供的代码修改的 Go 版本。

## 使用方法

### 1. 使用我提供的服务

将下面的代码加到你的网站的任意位置，同时修改 `"UA-xxxx-x"` 为你自己的跟踪代码。

```javascript
!(function (a, b, c, d, e) {
  var f = c.screen,
    g = encodeURIComponent,
    h = [
      "ga=" + a,
      "dt=" + g(d.title),
      "dr=" + g(d.referrer),
      "ul=" + (e.language || e.browserLanguage || e.userLanguage),
      "sd=" + f.colorDepth + "-bit",
      "sr=" + f.width + "x" + f.height,
      "vp=" +
        Math.max(d.documentElement.clientWidth, c.innerWidth || 0) +
        "x" +
        Math.max(d.documentElement.clientHeight, c.innerHeight || 0),
      "z=" + +new Date(),
    ];
  (c.__ga_img = new Image()), (c.__ga_img.src = b + "?" + h.join("&"));
})("UA-xxxx-x", "https://ga.giuem.com", window, document, navigator, location);
```

**目前已经部署海外线路（由 CloudFlare 提供），国内为腾讯云上海机房**

### 2. 自己部署服务

1. 安装

   你可以选择自己 [编译](https://github.com/giuem/ga-proxy#build) 或者从 [release](https://github.com/giuem/ga-proxy/releases/latest) 下载我编译好的二进制文件。

2. 运行

   ```bash
   ./ga_proxy [arguments]
   ```

   参数：

   ```
   -d, -debug 输出调试信息
   -s, -skip_ssl 跳过 SSL 验证
   -l, -listen 监听地址
   ```

   要使用后台运行，你可以借助 `nohup` 或 `screen` 或 `Docker`。

3. 添加 JavaScript 代码

   把上面的那段代码里的 `"https://ga.giuem.com"` 改成你自己的地址就行了。

## 使用效果

![ga-proxy](https://img.giuem-lb.washingpatrick.cn/20170721141531.png)

![raw ga](https://img.giuem-lb.washingpatrick.cn/20170721142234.png)

整个请求花费 33 ms, 156 B 流量可以说是非常快了。服务器的 Ping 值在 29 ms 左右，中间 4 ms 的损失主要花在 SSL 上了，速度还是挺不错的。

相比之下，原生的请求先加载了一个 12.3 KB 大小的 JS 文件，然后才发送统计，总耗时 300 ms，emmmmm 我就不作过多评价了。
