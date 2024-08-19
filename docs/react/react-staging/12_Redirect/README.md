# Redirect

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

`Redirect`重定向组件，主要用于进入首页后重定向到一个路径

`Redirect`组件可以给所有`Route`组件兜底，所有`path`都没有匹配上，最后会展示`Redirect`组件（`to`属性指定一个兜底路径）

::: details 根组件

::: code-group 

<<< @/react/react-staging/12_Redirect/App.jsx
<<< @/react/react-staging/12_Redirect/index.js
<<< @/react/react-staging/12_Redirect/App.css

:::


::: details MyNavLink组件

::: code-group

<<<  @/react/react-staging/12_Redirect/components/MyNavLink/index.jsx

:::


::: details about路由组件

::: code-group

<<<  @/react/react-staging/12_Redirect/pages/about/index.jsx

:::


::: details home路由组件

::: code-group

<<<  @/react/react-staging/12_Redirect/pages/home/index.jsx

:::