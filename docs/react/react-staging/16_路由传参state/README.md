# 路由传参state


- 传参：`to`参数需要传一个对象 `{ pathname: '路径', state: { key:value, key:value } }`
- 接收：无需接收
- 获取：在路由组件中可以用`props.location.state`获取
- state的方式虽然url上没有体现参数，但是刷新后也不会清理state数据，会保存在history对象中，但是清理浏览器缓存后，就获取不到了，所以用state要判断获取不到数据的场景，state如果不传默认的值是undefined


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

<<< @/react/react-staging/16_路由传参state/App.jsx
<<< @/react/react-staging/16_路由传参state/index.js
<<< @/react/react-staging/16_路由传参state/App.css

:::


::: details MyNavLink组件

::: code-group

<<<  @/react/react-staging/16_路由传参state/components/MyNavLink/index.jsx

:::


::: details about路由组件

::: code-group

<<<  @/react/react-staging/16_路由传参state/pages/about/index.jsx

:::

**home路由组件**

增加三级路由组件，使用state传参，message组件的列表点击后展示detail详情组件并接收传参

::: details home路由组件

::: code-group

<<<  @/react/react-staging/16_路由传参state/pages/home/index.jsx
<<<  @/react/react-staging/16_路由传参state/pages/home/message/index.jsx [message/index.jsx]
<<<  @/react/react-staging/16_路由传参state/pages/home/message/detail/index.jsx [message/detail/index.jsx]
<<<  @/react/react-staging/16_路由传参state/pages/home/news/index.jsx [news/index.jsx]

:::

![案例](/react/react-staging/1722224164189.gif)