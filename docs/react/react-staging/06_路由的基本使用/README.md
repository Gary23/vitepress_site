# 路由的基本使用

安装：`react-router-dom@5`

Router分两种，`BrowserRouter`和`HashRouter`

1. 底层原理不一样：
   - BR使用的是H5的history API不兼容IE9及以下版本
   - HR使用的是URL的哈希值
2. url的表现形式不一样
   - BR的路径中没有#
   - HR的路径中有#
3. 刷新后路由对state参数的影像
   - BR没有任何影响，因为state保存在history对象中
   - HR不使用history，所以没法保存state数据

**目录结构**

```
.
├─ pages
│  ├─ about
│  │  └─ index.jsx
│  └─ home
│     └─ index.jsx
├─ App.css
├─ App.jsx
└─ index.js
```



::: details 根组件

这里使用`BrowserRouter`标签，用`BrowserRouter`嵌套整个页面，也可以在index.js文件中嵌套整个App组件

路由链接使用`Link`标签，`to`属性是路由路径，`path`是路由地址

路由视图使用`Route`标签，根据路径匹配，`component`是引入的组件

::: code-group 

<<< @/react/react-staging/06_路由的基本使用/App.jsx
<<< @/react/react-staging/06_路由的基本使用/index.js
<<< @/react/react-staging/06_路由的基本使用/App.css

:::


::: details about组件

::: code-group

<<<  @/react/react-staging/06_路由的基本使用/pages/about/index.jsx

:::


::: details home组件

::: code-group

<<<  @/react/react-staging/06_路由的基本使用/pages/home/index.jsx

:::

![案例](/react/react-staging/1722224164183.gif)


::: tip 路由组件与一般组件
1. 存放目录不同
   - 路由组件按照标准应该放在pages目录
   - 而一般组件应该放到components目录下
2. 写法不同
   - 一般组件：`<Header />`
   - 路由组件：`<Route path="/home" component={Home} />`
3. 接收参数不同
   - 一般组件：传递什么就能收到什么
   - 路由组件：参数靠路由传入，接收三个固定属性`history: { go, goBack, goForward, push, replace }`、`match: { match, path, url }`、`location: { pathname, search, state }`
:::

::: tip `BrowserRouter`与`HashRouter`的区别
1. 底层原理不一样：
   - BR使用的是H5的history API 不兼容IE9及以下版本
   - HR使用的是URL的哈希值
2. url的表现形式不一样
   - BR的路径中没有#
   - HR的路径中有#
3. 刷新后路由对state参数的影像（一种路由的传参方式）
   - BR没有任何影响，因为state保存在history对象中
   - HR不使用history，所以没法保存state数据
:::