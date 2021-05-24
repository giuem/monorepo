---
title: PHP中“==”的一些坑
date: 2015-05-09 21:14:35
tags:
  # - php
---

PHP 是弱类型的语言，会自动进行数据类型转换，这无疑给我们的开发带来了极大的方便。可事实真是如此吗？今天我们就从`==`说起。<!--more-->

## 栗子

首先，看一下这段代码。猜猜看结果会是什么

```php
<?php
var_dump(md5('240610708') == md5('QNKCDZO'));
var_dump(md5('aabg7XSs') == md5('aabC9RqS'));
var_dump(sha1('aaroZmOk') == sha1('aaK1STfY'));
var_dump(sha1('aaO8zKZF') == sha1('aa3OFF9m'));
var_dump('0010e2' == '1e3');
var_dump('0x1234Ab' == '1193131');
var_dump('0xABCdef' == ' 0xABCdef');

var_dump(0 == 'abcdefg');
var_dump(1 == '1abcdef');
?>
```

一眼看过，很明显肯定都是`false`吧，但运行代码后发现全是`true`！

**WTF!**

## 为什么会这样

开头我已经说过了，PHP 是弱类型的语言。使用`==`对比两个变量时，当有一个变量为整数，另外一个变量也会转换为整数。这也就解释了，为什么`0 == 'abcdefg'`和`1 == '1abcdef'`会成立。

但是，其他的代码呢？字符串难道还会转换？

PHP 手册上为我们提供了解释说明。

> If you compare a number with a string or the comparison involves numerical strings, then each string is converted to a number and the comparison performed numerically.

也就是说，如果你比较的两个字符串涉及到数字（如：`"0"`），那么每个字符串都会转换成数字。

在这里，我不得不说：PHP 是最好的语言！

## 危害

当我们的网站是直接`MD5`或`Sha1`加密而没有加盐，碰巧某用户密码加密涉及到数字，那么就有可能被碰撞破解！

## 解决

1. 在开发过程中尽可能避免使用`==`判断两个变量的值
2. 密码加密最好使用`password_hash()`或者加盐`md5($pwd.$salt)`

## 参考 && 拓展阅读

- [PHP 探测任意网站密码明文/加密手段办法： md5('240610708') == md5('QNKCDZO')](https://www.v2ex.com/t/188364)
- [PHP: md5('240610708') == md5('QNKCDZO') | Hacker News](https://news.ycombinator.com/item?id=9484757)
- [WordPress 3.8.2 cookie 伪造漏洞再分析](http://drops.wooyun.org/papers/1409)
- [PHP: Comparison Operators - Manual](https://php.net/manual/en/language.operators.comparison.php)
