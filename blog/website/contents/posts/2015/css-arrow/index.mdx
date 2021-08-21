---
title: 纯 CSS 实现小三角形
date: 2015-06-22 21:32:05
# tags:
#   - css
---

最近写 CSS 时正好需要一个小三角形来修饰 tooltip。尝试几种写法都不太满意，因为我的需要的三角形是没有颜色但有边框的，后来果断选择使用 `border` 实现。<!--more-->

先上效果图：

![图1.效果图](https://img.giuem-lb.washingpatrick.cn/20150622213904.png)

没错，这就是我那个写了很久的评论系统（其实是因为偷懒）。

## 问题思考

开头已经说过，我使用的是 `border`，但 `border` 不能设置边框（就是周围那一圈），有什么办法解决呢？

刚开始时，我想不出办法，于是想用特殊符号 `▼` 结合 `text-shadow` 实现，但这个三角形太丑了，而且和字体有关，所以这个方案被我舍去了。

后来仔细一想：我可以用两个 `border` 实现啊，第一个和第二个上下间距为 `1px`，上面覆盖下面，下面那个颜色为边框颜色，不就可以了。尝试之，果然可以！

## 代码

因为我有洁癖，就是尽可能少写 HTML，所以三角形功能用的是 CSS 伪类 `::before` 和 `::after`。这样代码会多出几行，其实你们可以将伪类改为元素。

### HTML

```html
<div class="tooltip">This is a tooltip.</div>
```

### CSS

```css
.tooltip {
  background-color: #fff;
  border: 1px solid #eee;
  position: relative;
  max-width: 300px;
  padding: 10px;
}
.tooltip::before {
  position: absolute;
  color: #eee;
  width: 0;
  height: 0;
  content: "";
  border-width: 5px 4px 0;
  border-style: solid;
  border-left-color: transparent;
  border-right-color: transparent;
  bottom: -5px;
  left: 10px;
}
.tooltip::after {
  position: absolute;
  color: #fff;
  width: 0;
  height: 0;
  content: "";
  border-width: 5px 4px 0;
  border-style: solid;
  border-left-color: transparent;
  border-right-color: transparent;
  bottom: -4px;
  left: 10px;
}
```

为了方便显示，这里的 tooltip 的 `position` 是 `relative`，我在实际使用中是 `absolute` + JavaScript 计算地址修改 `top` 和 `left`。
