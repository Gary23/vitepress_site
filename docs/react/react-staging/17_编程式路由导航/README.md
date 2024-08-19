# 编程式路由导航

通过路由组件props上下文中的history对象进行路由跳转

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
│     ├─ message
│     │  ├─ detail
│     │  │   └─ index.jsx
│     │  └─ index.jsx
│     ├─ news
│     │  └─ index.jsx
│     └─ index.jsx
├─ App.css
├─ App.jsx
└─ index.js
```

::: details 根组件

::: code-group 

<<< @/react/react-staging/17_编程式路由导航/App.jsx
<<< @/react/react-staging/17_编程式路由导航/index.js
<<< @/react/react-staging/17_编程式路由导航/App.css

:::


::: details MyNavLink组件

::: code-group

<<<  @/react/react-staging/17_编程式路由导航/components/MyNavLink/index.jsx

:::


::: details about路由组件

::: code-group

<<<  @/react/react-staging/17_编程式路由导航/pages/about/index.jsx

:::

**home路由组件**

`message`组件不使用`MyNavLink`组件跳转，通过点击事件跳转调用`history.push`跳转

::: details home路由组件

::: code-group

<<<  @/react/react-staging/17_编程式路由导航/pages/home/index.jsx
<<<  @/react/react-staging/17_编程式路由导航/pages/home/message/index.jsx [message/index.jsx]
<<<  @/react/react-staging/17_编程式路由导航/pages/home/message/detail/index.jsx [message/detail/index.jsx]
<<<  @/react/react-staging/17_编程式路由导航/pages/home/news/index.jsx [news/index.jsx]

:::

![案例](/react/react-staging/1722224164190.gif)
