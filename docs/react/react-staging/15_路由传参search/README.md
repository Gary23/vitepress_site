# 路由传参search

- 传参：`Link`组件直接在url路径后面拼接参数`/?属性名1=${参数值1}&属性名2=${参数值2}`
- 接收：无需接收
- 获取：在路由组件中就可以用`props.location.search`获取，获取的是urlencoded字符串，需要转为对象使用（querystring）


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

<<< @/react/react-staging/15_路由传参search/App.jsx
<<< @/react/react-staging/15_路由传参search/index.js
<<< @/react/react-staging/15_路由传参search/App.css

:::


::: details MyNavLink组件

::: code-group

<<<  @/react/react-staging/15_路由传参search/components/MyNavLink/index.jsx

:::


::: details about路由组件

::: code-group

<<<  @/react/react-staging/15_路由传参search/pages/about/index.jsx

:::

**home路由组件**

增加三级路由组件，使用search传参，message组件的列表点击后展示detail详情组件并接收传参

::: details home路由组件

::: code-group

<<<  @/react/react-staging/15_路由传参search/pages/home/index.jsx
<<<  @/react/react-staging/15_路由传参search/pages/home/message/index.jsx [message/index.jsx]
<<<  @/react/react-staging/15_路由传参search/pages/home/message/detail/index.jsx [message/detail/index.jsx]
<<<  @/react/react-staging/15_路由传参search/pages/home/news/index.jsx [news/index.jsx]

:::

![案例](/react/react-staging/1722224164188.gif)
