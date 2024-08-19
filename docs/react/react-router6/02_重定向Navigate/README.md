# 重定向Navigate

- router6不再使用`Redirect`组件重定向，改为使用`Navigate`组件
- `Navigate`组件只要被渲染，就会触发视图的切换（home组件）
- `Navigate`跳转可以用`to`属性追加模式，也可以用`replace`替换模式

**目录结构**

```
.
├─ pages
│  ├─ about
│  │  └─ index.jsx
│  └─ home
│     └─ index.jsx
├─ App.jsx
└─ index.js
```

**根组件**

`Route`组件的`path`属性写`/`匹配到根路径并重定向到`home`组件

::: details 根组件

::: code-group

<<< @/react/react-router6/02_重定向Navigate/App.jsx
<<< @/react/react-router6/02_重定向Navigate/index.js

:::


::: details about路由组件

::: code-group

<<< @/react/react-router6/02_重定向Navigate/pages/about/index.jsx

:::

**home路由组件**

`Navigate`组件的渲染触发了视图切换

::: details home路由组件

::: code-group

<<< @/react/react-router6/02_重定向Navigate/pages/home/index.jsx

:::

![案例](/react/react-router6/2024-08-14%2015.30.42.gif)