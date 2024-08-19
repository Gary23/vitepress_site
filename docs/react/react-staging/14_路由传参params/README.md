# 路由传参params

- 传参：`Link`组件直接在url路径后面拼接参数 `/${参数值1}/${参数值2}`
- 接收：`Route`组件在路径后用 `:参数名1/:参数名2`接收
- 获取：在路由组件中就可以用`props.match.params`来获取

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

<<< @/react/react-staging/14_路由传参params/App.jsx
<<< @/react/react-staging/14_路由传参params/index.js
<<< @/react/react-staging/14_路由传参params/App.css

:::


::: details MyNavLink组件

::: code-group

<<<  @/react/react-staging/14_路由传参params/components/MyNavLink/index.jsx

:::


::: details about路由组件

::: code-group

<<<  @/react/react-staging/14_路由传参params/pages/about/index.jsx

:::

**home路由组件**

增加三级路由组件，使用params传参，message组件的列表点击后展示detail详情组件并接收传参

::: details home路由组件

::: code-group

<<<  @/react/react-staging/14_路由传参params/pages/home/index.jsx
<<<  @/react/react-staging/14_路由传参params/pages/home/message/index.jsx [message/index.jsx]
<<<  @/react/react-staging/14_路由传参params/pages/home/message/detail/index.jsx [message/detail/index.jsx]
<<<  @/react/react-staging/14_路由传参params/pages/home/news/index.jsx [news/index.jsx]

:::

![案例](/react/react-staging/1722224164187.gif)
