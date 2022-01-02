---
title: 66云（66.To）磁盘扩展小记
date: 2018-02-14 21:05:54
tags:
---

最近在 66 云买了一台服务器，他家的面板采用的是 Azure Pack。看起来很高大上，但是因为文档太太太简略了，对像我种垃圾来说很不友好。<!--more-->

## 过程记录

66 云上创建的虚拟服务器默认是只有 40G 的磁盘大小，套餐是 80G，需要手动扩展或挂载一个新的磁盘。为了方便，我直接扩展原磁盘。

首先去面板里把服务器关机，把磁盘扩展到 80G，在开机就行了。

你以为就这么简单？才不是呢！重启服务器后查看磁盘大小还是 40G。。。
通过 `fdisk` 查看分区发现模板创建的系统使用的是 `Linux LVM`，然后扩展是加了一个 40G 的`Extended` 分区，可以说是非常睿智了。

```bash
$ fdisk -u /dev/sda

Command (m for help): p
Disk /dev/sda: 80 GiB, 85899345920 bytes, 167772160 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: dos
Disk identifier: 0x32a7a126

Device     Boot   Start      End  Sectors  Size Id Type
/dev/sda1  *       2048   999423   997376  487M 83 Linux
/dev/sda2       1001470 83884031 82882562 39.5G  5 Extended
/dev/sda5       1001472 83884031 82882560 39.5G 8e Linux LVM

Partition 2 does not start on physical sector boundary.
```

所以接下来要重建分区，这里要记下 LVM 分区的开始扇区位置 `1001472`

先删除 Extended 分区 (/dev/sda2)。

```bash
Command (m for help): d
Partition number (1,2,5, default 5): 2

Partition 2 has been deleted.
```

然后创建新分区，并写入。

```bash
Command (m for help): n
Partition type
   p   primary (1 primary, 0 extended, 3 free)
   e   extended (container for logical partitions)
Select (default p): p
Partition number (2-4, default 2): 2
First sector (999424-167772159, default 999424): 1001472
Last sector, +sectors or +size{K,M,G,T,P} (1001472-167772159, default 167772159): [ENTER]

Created a new partition 2 of type 'Linux' and of size 79.5 GiB.

Command (m for help): t
Partition number (1,2, default 2): 2
Partition type (type L to list all types): 8e

Changed type of partition 'Linux' to 'Linux LVM'.

Command (m for help): w
```

然后 `reboot` 重启服务器。

接下来重置 LVM 的大小。

首先重置 PV（物理卷）。

```bash
$ pvresize /dev/sda2
```

再重置 LV（逻辑卷）。
通过 `pvdisplay` 查看 `Free PE` 的大小，不出意外的话应该是 40G。
通过 `lvdisplay` 查看需要扩展的逻辑卷，这里是 `/dev/ubuntu-vg/root`。

```bash
$ lvresize -L+40G /dev/ubuntu-vg/root
```

最后再更新一下文件系统就行了。通过 `df -T` 得知 `/dev/mapper/ubuntu--vg-root` 文件系统类型是 `ext4`。

```bash
$ resize2fs /dev/mapper/ubuntu--vg-root
```

## 参考资料

- [LVM](https://wiki.archlinux.org/index.php/LVM)
- [Grow LVM in extended partition.](https://www.linuxquestions.org/questions/linux-virtualization-and-cloud-90/grow-lvm-in-extended-partition-857896/)
