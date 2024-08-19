# Switch的使用

**目录结构**

```
.
├─ components
│  └─ MyNavLink
│     └─ index.jsx
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

如果`Route`标签的同一个路径写了两个不同的`component`，会同时展示出两个组件

用Switch组件可以解决这个问题，把所有`Route`组件嵌套，这样如果写了多个路径，只会使用第一个匹配的组件

::: details 根组件

::: code-group 

<<< @/react/react-staging/09_Switch的使用/App.jsx
<<< @/react/react-staging/09_Switch的使用/index.js
<<< @/react/react-staging/09_Switch的使用/App.css

:::


::: details MyNavLink组件

::: code-group

<<<  @/react/react-staging/09_Switch的使用/components/MyNavLink/index.jsx

:::


::: details about路由组件

::: code-group

<<<  @/react/react-staging/09_Switch的使用/pages/about/index.jsx

:::


::: details home路由组件

::: code-group

<<<  @/react/react-staging/09_Switch的使用/pages/home/index.jsx

:::

![案例](/react/react-staging/1722224164184.gif)

