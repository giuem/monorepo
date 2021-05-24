---
title: 通过JS获取真实的外网IP和内网IP
date: 2015-02-13 21:35:22
tags:
#   - javascript
#   - ip
---

通过 JS 获取你真实的外网 IP 和内网 IP，就算开代理也没有，想想真是太可怕了，还能不能愉快的装逼了！<!--more-->

## Demo

Demo：[https://diafygi.github.io/webrtc-ips/](https://diafygi.github.io/webrtc-ips/)

![demo](https://img.giuem-lb.washingpatrick.cn/20150213214159.png)

## 代码

```javascript
//get the IP addresses associated with an account
function getIPs(callback) {
  var ip_dups = {};

  //compatibility for firefox and chrome
  var RTCPeerConnection =
    window.RTCPeerConnection ||
    window.mozRTCPeerConnection ||
    window.webkitRTCPeerConnection;

  //bypass naive webrtc blocking
  if (!RTCPeerConnection) {
    var iframe = document.createElement("iframe");
    //invalidate content script
    iframe.sandbox = "allow-same-origin";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    var win = iframe.contentWindow;
    window.RTCPeerConnection = win.RTCPeerConnection;
    window.mozRTCPeerConnection = win.mozRTCPeerConnection;
    window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;
    RTCPeerConnection =
      window.RTCPeerConnection ||
      window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection;
  }

  //minimal requirements for data connection
  var mediaConstraints = {
    optional: [{ RtpDataChannels: true }],
  };

  //firefox already has a default stun server in about:config
  //    media.peerconnection.default_iceservers =
  //    [{"url": "stun:stun.services.mozilla.com"}]
  var servers = undefined;

  //add same stun server for chrome
  if (window.webkitRTCPeerConnection)
    servers = { iceServers: [{ urls: "stun:stun.services.mozilla.com" }] };

  //construct a new RTCPeerConnection
  var pc = new RTCPeerConnection(servers, mediaConstraints);

  //listen for candidate events
  pc.onicecandidate = function (ice) {
    //skip non-candidate events
    if (ice.candidate) {
      //match just the IP address
      var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
      var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];

      //remove duplicates
      if (ip_dups[ip_addr] === undefined) callback(ip_addr);

      ip_dups[ip_addr] = true;
    }
  };

  //create a bogus data channel
  pc.createDataChannel("");

  //create an offer sdp
  pc.createOffer(
    function (result) {
      //trigger the stun server request
      pc.setLocalDescription(
        result,
        function () {},
        function () {}
      );
    },
    function () {}
  );
}

//Test: Print the IP addresses into the console
getIPs(function (ip) {
  console.log(ip);
});
```

因为`Firefox`和`Chrome`支持`WebRTC`，可以向 STUN 服务器请求，返回内外网 IP，不同于 XMLHttpRequest 请求，STUN 请求开发者工具当中看不到网络请求的。

## 解决办法

那我们有没有办法继续装逼呢？答案是肯定的。我们可以关闭`WebRTC`。

### Chrome

安装插件 [https://chrome.google.com/webstore/detail/webrtc-block/nphkkbaidamjmhfanlpblblcadhfbkdm?hl=en](https://chrome.google.com/webstore/detail/webrtc-block/nphkkbaidamjmhfanlpblblcadhfbkdm?hl=en)

无法下载的一定是你上网姿势不科学。

### Firefox

用 media.peerconnection.enabled 禁用。BTW，方法网上看到了，电脑没装 Firefox，所以你们自己摸索吧。

## 参考资料

- [https://github.com/diafygi/webrtc-ips](https://github.com/diafygi/webrtc-ips)
- [http://www.v2ex.com/t/167243](http://www.v2ex.com/t/167243)
