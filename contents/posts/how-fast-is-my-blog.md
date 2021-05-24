---
title: 我的博客有多快？
date: 2019-06-08 21:37:56
tags:
---

如果你看过我之前的[文章](/google-analytics-loading-optimize/)，应该知道我使用自己写的程序 [ga-proxy](https://github.com/giuem/ga-proxy/releases/tag/v1.0.0) 在后端将统计信息通过 [Google Analytics Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1/) 传给 Google Analytics 服务器。当时写的功能比较简单，只有统计页面访问量的功能。后来看到 Sukka 在[博客](https://blog.skk.moe/post/performance_timing/)中提到了 Measurement Protocol 还支持统计网站加载速度，于是在今年二月我给 ga-proxy 加上了这个功能。几个月过去了，今天就来看看我博客实际的加载速度吧。 <!--more-->

## 博客的优化

开始之前，先谈谈博客的基本信息和一些优化。

- **DNS**：CloudXNS
- **CDN**
  - 主站：中国大陆为腾讯云上海机房单点部署，海外是 CloudFlare -> Netlify
  - 公共库：[jsDelivr](https://www.jsdelivr.com/)
  - 图床：自建，七牛 + CloudFlare
- **前端优化**
  - 使用 [critical](https://www.npmjs.com/package/critical) 提取内联关键 CSS
  - 使用 [tiny-cache](https://github.com/giuem/tiny-cache) 缓存 JS 资源，脚本本身内联
  - 使用 [Workbox](https://developers.google.com/web/tools/workbox/) 作为 Service Worker 解决方案，缓存各种请求
- **服务器优化**
  - HTTP/2
  - TLS1.3
  - ECC + RSA 双证书
  - Brotli 压缩算法

## 数据收集

再来看看我收集了哪些数据。

Google Analytics Measurement Protocol 支持发送的数据类型有：

- 网页加载时间
- DNS 时间
- 网页下载时间
- 重定向响应时间
- TCP 连接时间
- 服务器响应时间
- DOM 互动时间
- 内容加载时间

以上这些数据都可以通过 [Navigation Timing API](https://www.w3.org/TR/navigation-timing/) 获取，关于这些数据的的具体意义，可以看[这里](https://www.w3.org/TR/navigation-timing/)。

我比较关注的数据主要有：

- DNS 查询时间
- 内容加载时间，DOM 和 CSSOM 均准备就绪的时间。
- 网页加载时间，表示网页及其所有子资源都准备就绪的时间。

## 开始

统计时间范围从 *2019 年 3 月 1 日*到 _2019 年 6 月 1 日_。

### DNS 查询时间

![DNS 查询时间](https://img.giuem-lb.washingpatrick.cn/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-06-08%20%E4%B8%8B%E5%8D%8810.38.23.png)

平均查询时间为 0.13 秒，大部分落在 0 - 0.01 秒之间，这部分主要是由于 DNS 缓存。大于 1 秒仅占 2.81%。（CloudXNS 似乎可以一用？

### 内容加载时间

![内容加载时间](https://img.giuem-lb.washingpatrick.cn/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-06-08%20%E4%B8%8B%E5%8D%8810.46.08.png)

平均内容加载时间 1 秒，0 - 0.5 秒接近 50%，1 秒以下占比 73%。加载时间在 3 秒以内是一个合理的数值，如果 3 秒内页面的内容还没显示，就会造成用户的流失。

### 网页加载时间

![网页加载时间](https://img.giuem-lb.washingpatrick.cn/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-06-08%20%E4%B8%8B%E5%8D%8810.53.51.png)

这部分数据不太好看，平均加载时间达到 9.87 秒。

主要有两点原因：

- 没有使用 Lazy Loading 加载图片，最近几篇文章的图片较多；
- 评论使用 Disqus，部分地区访问会出现异常。

## 未来计划

下一步主要是针对**图片加载作优化**，除了 Lazy Loading 外，还会采用 Responsive images 对图片进行处理，根据分辨率加载合适大小的图片。

同时，需要注意的是加载时间并不代表用户实际的体验：

> A second example of a performance myth is that **performance is only a concern at load time**.
>
> […]
>
> Likewise, traditional performance metrics like [load](https://developer.mozilla.org/en-US/docs/Web/Events/load) time or [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) time are extremely unreliable since when they occur may or may not correspond to when the user thinks the app is loaded.

我会尝试使用 [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver) 监控**以用户为中心的性能**指标：首次绘制、首次内容绘制和首次有效绘制时间等。

## 参考

- [Assessing Loading Performance in Real Life with Navigation and Resource Timing](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/)
- [User-centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics)
