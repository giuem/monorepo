---
title: PHP判断一个字符串是否是有效的邮箱地址
date: 2015-04-04 14:19:23
tags:
#   - php
---

清明放假回家刚好有一点时间，于是开始写评论系统了。而我本身非常注重程序的安全性，所以自然是要对所有的输入进行检查。做到邮箱检查时，本来想使用正则来判断，但感到非常不优雅，就上 Google 查了些资料。<!--more-->

## filter_var

不得不说，这个函数其实我也是今天才见到。在 PHP 5.2 以上版本才有，不过现在至少都 5.4 了吧。

```php
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // invalid emailaddress
}
```

这个代码只能检测邮箱地址是否有效，如果我想检测是否存在这个邮箱呢？

办法是有的。

## checkdnsrr

用 `checkdnsrr` 函数可以检测主机的 DNS，只要我们检测一下邮箱对应的域名是否有 MX 记录，就能知道这个邮箱是否真实存在了。

其中 domain 还需你自己从邮箱中取出来。

```php
if (!checkdnsrr($domain, 'MX')) {
    // domain is not valid
}
```

## 参考

- [How to validate an email address in PHP](https://stackoverflow.com/questions/12026842/how-to-validate-an-email-address-in-php)

- [PHP: filter_var - Manual](http://php.net/manual/en/function.filter-var.php)

- [PHP: checkdnsrr - Manual](http://php.net/manual/en/function.checkdnsrr.php)
