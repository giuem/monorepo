---
title: 新的开始：好好写博客
date: 2018-08-30 17:08:34
tags:
---

这几年我博客基本是废了，没有好好的写过一篇完整详细的文章，都是随便糊弄一下，没有深度。博客的主题也快 3 年没有换了，看着都有点审美疲劳了。也是借着这个暑假的时间，对博客进行了一番大改版。<!--more-->

## 主题

> 原来的主题实在是看腻了，这次也是重新写了一个。

这几年我对博客主题的审美逐渐趋于简洁。所以这次主题，我采用了单栏风格，原来的友链移至[内页](https://www.giuem.com/links/)。首页为了不显得那么单调，加了一个头图，这个设计主要参考了 tcdw 的 [egoist](https://github.com/tcdw/egoist)。

同时，还做了很多没什么卵用的优化：内联样式、缓存脚本文件、使用 System fonts、还有各种 prefetch 等等。一套下来，整个站点的单页请求缩减到只有几个（不包括启用 Disqus 的页面），速度还是非常快的。[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=zh-cn&url=https%3A%2F%2Fwww.giuem.com%2F&tab=mobile) 的得分为 100。

主题现在仍处在开发中，等开发完成，会开源并做一个详细的介绍。

## 内容

> 一个字：删！

博客建立初期，我的文章基本都是和**百度贴吧**相关的。这些文章大多都时效性，现在来看，基本都已经失效；加上我现在已经不再玩贴吧了，这些内容等于是不再维护了（包括曾经写的[贴吧机器人](https://github.com/giuem/TieBaRobot)）。所以索性就把这些内容都给删除了，还有一些很水很水的文章，也被我砍掉了。

以后更新的文章，可能会更加硬核（暗示咕咕咕）。

## 架构

> 博客的架构也进行了一次大改版。

之前我博客的部署流程是比较麻烦的，使用 Travis CI, GitHub Webhook（见[《使用 Travis CI 自动部署 HEXO 博客》](/deploy-via-travis-ci/)）。这次也是简化了流程，直接在云主机上搭了一个 [Minio](https://www.minio.io/) 私有云存储，然后在 CI 构建的时候直接把静态文件 push 过去。之前因为 GitHub 在国内访问速度不佳，导致主动拉取的速度很慢很慢，有时候还会 timeout。这次改版后，构建发布的时间基本**不超过一分半**。

博客的 CDN 也做了修改，国内仍然是使用腾讯云主机。国外之前的使用 Firebase Hosting，速度是还可以，但是配置不太灵活，这次换成了 CloudFlare 回源 Netlify 的方式。CloudFlare 是 Pro Plan（由[云锤](https://cloudhammer.org/cloudflare-pro/)提供），可以直接 CNAME 接入，方便 GeoDNS；还有 30 条 Page Rules。
