# useOutlet

- `useOutlet`呈现当前组件中的嵌套路由组件
- 如果嵌套的路由组件还没挂载就是null

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

<<< @/react/react-router6/12_useOutlet/App.jsx
<<< @/react/react-router6/12_useOutlet/index.js

:::

::: details about路由组件

::: code-group

<<< @/react/react-router6/12_useOutlet/pages/about/index.jsx

:::

**home组件**

从`react-router-dom`引入`useOutlet`，渲染调用后的返回值

::: details home路由组件

::: code-group

<<< @/react/react-router6/12_useOutlet/pages/home/index.jsx

:::


::: details message路由组件

::: code-group

<<< @/react/react-router6/12_useOutlet/pages/message/index.jsx

:::


::: details detail路由组件

::: code-group

<<< @/react/react-router6/12_useOutlet/pages/detail/index.jsx

:::


::: details news路由组件

::: code-group

<<< @/react/react-router6/12_useOutlet/pages/news/index.jsx

:::


::: details 路由表

::: code-group

<<< @/react/react-router6/12_useOutlet/route/index.js

:::

![案例](/react/react-router6/2024-08-19%2015.22.02.gif)