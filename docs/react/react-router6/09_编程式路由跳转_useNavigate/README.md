# 编程式路由跳转_useNavigate

- 使用`useNavigate`可以模拟`Link`组件的路由跳转，使用：`const navigate = useNavigate()` 获取到`navigate`函数
- `navigate`函数第一个参数是路径，`string`类型，第二个参数是一个配置对象，可以配置`state`传参或者打开方式`replace`
- `navigate`函数可以传参-1或者1，表示后退或前进
- 使用`useNavigate`的组件处于路由的上下文，也就是需要被`BrowserRouter`嵌套

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

**根组件**

从`react-router-dom`引入`useNavigate`，控制路由的前进和后退

::: details 根组件

::: code-group

<<< @/react/react-router6/09_编程式路由跳转_useNavigate/App.jsx
<<< @/react/react-router6/09_编程式路由跳转_useNavigate/index.js

:::

::: details about路由组件

::: code-group

<<< @/react/react-router6/09_编程式路由跳转_useNavigate/pages/about/index.jsx

:::

::: details home路由组件

::: code-group

<<< @/react/react-router6/09_编程式路由跳转_useNavigate/pages/home/index.jsx

:::

**message路由组件**

使用`useNavigate`可以模拟`Link`组件的路由跳转，调用`useNavigate`获取到`navigate`函数

点击链接调用`navigate`函数，第一个参数是路径，第二个参数配置`state`传参

::: details message路由组件

::: code-group

<<< @/react/react-router6/09_编程式路由跳转_useNavigate/pages/message/index.jsx

:::

::: details detail路由组件

::: code-group

<<< @/react/react-router6/09_编程式路由跳转_useNavigate/pages/detail/index.jsx

:::


::: details news路由组件

::: code-group

<<< @/react/react-router6/09_编程式路由跳转_useNavigate/pages/news/index.jsx

:::


**路由表**

::: details 路由表

::: code-group

<<< @/react/react-router6/09_编程式路由跳转_useNavigate/route/index.js

:::

![案例](/react/react-router6/2024-08-19%2014.19.55.gif)