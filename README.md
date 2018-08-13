## 使用

```shell
npm install #安装依赖
gatsby develop #开发环境
gatsby build #打包资源
```

## 架构

使用 gatsby 开发，并二次开发了fullpage，使其达到项目的满屏滚动需求。

## 存在的问题

### 小问题

- PROTOCOL 架构，此处的icon最好能一样高，可以使文字和icon对其。
- PROTOCOL 架构，Other exchange 文字有点多，小框框装不下，暂时只留下了 Other

### 响应式

因为满屏滚动的特性，手机端的所有内容需要在一屏内展示完毕，所以会导致一些问题。

- PROTOCOL生态：空间有限，无法展示 dexlize 图片，暂时隐藏。
- Token通证：空间有限，无法展示figure图片，暂时隐藏。
- 团队介绍：因条目过多，不能展示全部内容，暂时隐藏掉了每个人的title
