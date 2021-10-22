# url2md

方便 markdwon 快速写作的小工具，复制 url 转成 markdown 格式的 chrome 插件。

## 如何安装

由于暂未考虑上 chrome 商店，所以您可以将本仓库克隆到本地。在 chrome `扩展程序` -> `开发者模式` -> `加载已解压的扩展程序`，选中项目的根目录，即可安装成功。

## 功能

操作简单到只有一个操作，那就是在 chrome 中使用鼠标右键菜单选择 `复制url转成markdown格式`

1.若是网页空白处进行的操作，将会提取本网页地址生成 markdown 格式的 url。

```text
[Chrome插件(扩展)开发全攻略 - 我是小茗同学 - 博客园](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)
```
 
2.若是在一张图片之上进行的操作，将会提取图片地址生成 markdown 格式的 url。

```text
![读完这个，你就清楚Google logo 的变迁史了| 爱范儿](https://s3.ifanr.com/wp-content/uploads/2015/09/Googlelogo2015.jpg)
```

3.在选中链接上的文字，然后右键操作，将会提取超链接和文字转成 markdown 格式的 url。

```text
[Google's New Logo](https://www.google.com/doodles/googles-new-logo)
```

## TODO

- 版本升级
- 快捷键
- 过滤title