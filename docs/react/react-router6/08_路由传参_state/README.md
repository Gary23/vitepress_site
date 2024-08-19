# 路由传参_state

- 传参：`to`属性只传路径，新增一个`state`属性传参数，类型是`Object`
- `detail`组件接收：使用`useLocation`，调用后会获取到`state`对象，就是传递的参数

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

<<< @/react/react-router6/08_路由传参_state/App.jsx
<<< @/react/react-router6/08_路由传参_state/index.js

:::

::: details about路由组件

::: code-group

<<< @/react/react-router6/08_路由传参_state/pages/about/index.jsx

:::

::: details home路由组件

::: code-group

<<< @/react/react-router6/08_路由传参_state/pages/home/index.jsx

:::

**message路由组件**

给`detail`组件传参，`to`属性只传路径，新增一个`state`属性传参数，类型是`Object`

::: details message路由组件

::: code-group

<<< @/react/react-router6/08_路由传参_state/pages/message/index.jsx

:::

**detail路由组件**

`detail`组件从`react-router-dom`引入`useLocation`，调用后会获取到`state`对象，就是传递的参数

::: details detail路由组件

::: code-group

<<< @/react/react-router6/08_路由传参_state/pages/detail/index.jsx

:::


::: details news路由组件

::: code-group

<<< @/react/react-router6/08_路由传参_state/pages/news/index.jsx

:::



::: details 路由表

::: code-group

<<< @/react/react-router6/08_路由传参_state/route/index.js

:::

![案例](/react/react-router6/2024-08-19%2014.18.16.gif)