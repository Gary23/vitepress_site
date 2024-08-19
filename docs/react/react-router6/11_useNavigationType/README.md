# useNavigationType

- 调用`useNavigationType`，返回一个字符串，分别为：`pop`、`push`、`replace`
- `push`和`replace`是通过路由跳转来的，`pop`是刷新了整个页面，或者通过前进后退等方式进入的页面

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

<<< @/react/react-router6/11_useNavigationType/App.jsx
<<< @/react/react-router6/11_useNavigationType/index.js

:::

::: details about路由组件

::: code-group

<<< @/react/react-router6/11_useNavigationType/pages/about/index.jsx

:::

::: details home路由组件

::: code-group

<<< @/react/react-router6/11_useNavigationType/pages/home/index.jsx

:::


::: details message路由组件

::: code-group

<<< @/react/react-router6/11_useNavigationType/pages/message/index.jsx

:::

**detail组件**

重新渲染`detail`组件时候，调用`useNavigationType`

`push`和`replace`是通过路由跳转来的，`pop`是刷新了整个页面，或者通过前进后退等方式进入的页面

::: details detail路由组件

::: code-group

<<< @/react/react-router6/11_useNavigationType/pages/detail/index.jsx

:::


::: details news路由组件

::: code-group

<<< @/react/react-router6/11_useNavigationType/pages/news/index.jsx

:::


::: details 路由表

::: code-group

<<< @/react/react-router6/11_useNavigationType/route/index.js

:::

![案例](/react/react-router6/2024-08-19%2014.43.12.gif)