# 路由传参_search

- 传参：`detail?key=value&key=value`，路径可以是相对路径也可以是绝对路径
- `detail`组件接收方式1：使用`useSearchParams`，调用后返回一个`Array`，第一个元素是`search`对象，调用对象的`get`方法获取`search`参数，第二个元素是方法，修改`search`参数
- `detail`组件接收方式2：使用`useLocation`，调用后会获取到字符串的`search`参数，可以借助`querystring`插件转为`search`对象

**目录结构**

```
.
├─ pages
│  ├─ about
│  │  └─ index.jsx
│  ├─ detail
│  │  └─ index.jsx
│  ├─ home
│  │  └─ index.jsx
│  ├─ message
│  │  └─ index.jsx
│  └─ news
│     └─ index.jsx
├─ route
│  └─ index.js
├─ App.jsx
└─ index.js
```

::: details 根组件

::: code-group

<<< @/react/react-router6/07_路由传参_search/App.jsx
<<< @/react/react-router6/07_路由传参_search/index.js

:::

::: details about路由组件

::: code-group

<<< @/react/react-router6/07_路由传参_search/pages/about/index.jsx

:::

::: details home路由组件

::: code-group

<<< @/react/react-router6/07_路由传参_search/pages/home/index.jsx

:::

**message路由组件**

给`detail`组件传参，`detail?key=value&key=value`，路径可以是相对路径也可以是绝对路径

::: details message路由组件

::: code-group

<<< @/react/react-router6/07_路由传参_search/pages/message/index.jsx

:::

**detail路由组件**

`detail`组件从`react-router-dom`引入`useSearchParams`或`useLocation`，

`useSearchParams`的方式是调用对象的`get`方法获取`search`参数

`useLocation`的方式是获取到字符串的`search`参数，在转为对象

::: details detail路由组件

::: code-group

<<< @/react/react-router6/07_路由传参_search/pages/detail/index.jsx

:::


::: details news路由组件

::: code-group

<<< @/react/react-router6/07_路由传参_search/pages/news/index.jsx

:::



::: details 路由表

::: code-group

<<< @/react/react-router6/07_路由传参_search/route/index.js

:::

![案例](/react/react-router6/2024-08-19%2014.15.46.gif)