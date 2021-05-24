---
title: 流体排版简介
date: 2019-05-02 17:27:49
tags:
---

在传统网页排版中，字体大小一般是固定不变的，例如 16px 在桌面端和移动端都能有不错的显示效果。但是，随着显示器分辨率越来越多样，从 4k 到 5k 甚至 8k，固定字号似乎行不通了。不可能存在一个完美的字体大小覆盖所有的分辨率！好在我们可以采用媒体查询（Media queries）设置断点，然后根据不同的可视宽度设置不同字号。但这种方法并不完美，当处于断点之间时，整个页面会发生突变!

幸好，这一切可以通过流体排版解决。<!--more-->

## 什么是流体排版

事先声明，流体排版这个词是我自己瞎翻的，英文单词为 Fluid Typography。所以如果你发现搜索「流体排版」好像查不到什么，不妨试试搜索 “Fluid Typography”。

[维基百科](https://zh.wikipedia.org/zh-hans/流体)是这样定义流体的：

> 流体（英语：Fluid）就是在承受剪应力时将会发生连续变形的物体，包括气体和液体。流体没有一定形状，几乎可以任意改变形态，或者分裂。

那么流体排版也有流体二字，那么肯定和流体有关咯~

是的，流体排版指的是根据浏览器的视口（viewport）大小，响应式地改变字体大小。这和开头说的通过媒体查询方式实现的“伪”响应式不同，它的变化是连续的，不会出现突变。

在网页开发中，我们可以利用视口单位（Viewport units）实现流体排版：

- `vw`：视口宽度的 1/100
- `vh`：视口高度的 1/100
- `vmin`：视口宽度和高度较小者的 1/100
- `vmax`：视口宽度和高度较大者的 1/100

通过使用视口单位，我们可以很容易实现流体排版，

```css
html {
  font-size: 1.5vw;
}
```

但是单纯使用视口单位实现流体排版其实并不完美：我们无法限制最大最小字体大小。

## 更好的方式

单纯使用视口单位不能限制最大最小字体大小，但结合前面提到的媒体查询，分别在最小和最大视口宽度处设置断点就可以了。

这个问题可以变为已知坐标轴（x 轴为视口宽度；y 轴为字体大小）上两点，给定任意一个 x，求经过这两点构成直线上的 y 值。

比如我们的字体大小变化访问为 16px - 24px，对应视口宽度为 320px - 2560px，那么，

- font-size 初始为 16px；
- 当 `min-witdh = 240px` 时，font-size 为 `(16 + (24 - 16) * ([当前视口宽度] - 320) / (2560 - 320))px`，其中涉及计算，需要使用 `calc()`。翻译成 CSS 就是 `calc(16px + 8 * (100vw - 320px) / 2240)`；
- 当 `min-witdh = 2560px` 时，font-size 为 24px。

最终的 CSS 长这样，

```css
html {
  font-size: 16px;
}

@media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 8 * (100vw - 320px) / 2240);
  }
}

@media screen and (min-width: 2560px) {
  html {
    font-size: 24px;
  }
}
```

以上设定和代码来自本博客，你可以尝试更改浏览器窗口大小来体验字体大小的变化。

同时，为了更好的阅读体验，我们希望在桌面设备上不同标题字体尽可能区分，而在移动端不同标题的差距应该缩小，对于 h1 - h6 也要设置不同的缩放比例。

这种方式在现在浏览器上能完美工作，如果要兼容 IE 等其他过气浏览器，我推荐使用 [Textblock](https://github.com/glyphic-co/textblock)。

## 扩展阅读

- [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/)
- [What is Fluid Typography and should I be using it?](https://medium.com/beamly/what-is-fluid-typography-and-should-i-be-using-it-44a1b7125205)
