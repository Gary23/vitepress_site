# 路由链接的高亮

- 5版本是NavLink给加的active类名，可以直接用activeClassName属性修改自定义的类名
- 6版本className可以写一个回调函数，回调内接收一个对象，根据对象的isActive属性判断当前导航是否被选中

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

**根组件**

className属性值是一个回调函数，回调函数接收isActive参数选中状态，根据选中状态返回class类名

::: details 根组件

::: code-group

<<< @/react/react-router6/03_路由链接的高亮/App.jsx
<<< @/react/react-router6/03_路由链接的高亮/index.js

:::


::: details about路由组件

::: code-group

<<< @/react/react-router6/03_路由链接的高亮/pages/about/index.jsx

:::


::: details home路由组件

::: code-group

<<< @/react/react-router6/03_路由链接的高亮/pages/home/index.jsx

:::

![案例](/react/react-router6/2024-08-14%2016.04.08.gif)