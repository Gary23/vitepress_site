# NavLink的使用

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

`NavLink`主要是可以自定义class类名

用`NavLink`，会自动给当前选中的`Link`标签增加一个`active`class类名，也可以自定义`activeClassName="active"`

::: details 根组件

::: code-group 

<<< @/react/react-staging/07_NavLink的使用/App.jsx
<<< @/react/react-staging/07_NavLink的使用/index.js
<<< @/react/react-staging/07_NavLink的使用/App.css

:::

::: details about路由组件

::: code-group

<<<  @/react/react-staging/07_NavLink的使用/pages/about/index.jsx

:::


::: details home路由组件

::: code-group

<<<  @/react/react-staging/07_NavLink的使用/pages/home/index.jsx

:::

![案例](/react/react-staging/1722224164184.gif)

