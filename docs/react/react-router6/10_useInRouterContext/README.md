# useInRouterContext

- 调用`useInRouterContext`，返回一个布尔值，用于判断是否处于路由的上下文（`BrowserRouter`嵌套），只要被`BrowswrRouter`类型的组件嵌套，就处于上下文

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

从`react-router-dom`引入`useInRouterContext`，每次路由改变重新渲染就会打印`true`

::: details 根组件

::: code-group

<<< @/react/react-router6/10_useInRouterContext/App.jsx
<<< @/react/react-router6/10_useInRouterContext/index.js

:::

::: details about路由组件

::: code-group

<<< @/react/react-router6/10_useInRouterContext/pages/about/index.jsx

:::

::: details home路由组件

::: code-group

<<< @/react/react-router6/10_useInRouterContext/pages/home/index.jsx

:::


::: details message路由组件

::: code-group

<<< @/react/react-router6/10_useInRouterContext/pages/message/index.jsx

:::

::: details detail路由组件

::: code-group

<<< @/react/react-router6/10_useInRouterContext/pages/detail/index.jsx

:::


::: details news路由组件

::: code-group

<<< @/react/react-router6/10_useInRouterContext/pages/news/index.jsx

:::


::: details 路由表

::: code-group

<<< @/react/react-router6/10_useInRouterContext/route/index.js

:::