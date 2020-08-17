网站根目录下的公用文件夹

public
    font      字体文件, 其中字体图标在iconfont中统一维护
    lib       公用库, 如jQuery, Bootstrap, Vue, React等
    images    图片文件
        logo  logo图片
    css       公用样式
    js        公用JavaScript


## iconfont字体图标

[项目地址](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2004274)

### symbol方式,可使用多色图标(推荐):

1. 引入文件

```html
<script src="/public/font/iconfont.js"></script>
<style>
  .iconfont-symbol {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
```

2. 使用图标

```xml
<svg class="iconfont-symbol" aria-hidden="true">
    <!-- iconcode 替换成任何图标名 -->
    <use xlink:href="#iconcode"></use>
</svg>
```

### class引用,通过class名称使用不同图标,但只能使用单色图标:

1. 引入css文件

```html
<link rel="stylesheet" href="/public/font/iconfont.css">
```

2. 通过类名使用图标

```html
<!-- iconcode 替换成任何图标名 -->
<i class="iconfont iconcode"></i>
```