# 路由传参_params

- 传参：`detail/参数1/参数2`，路径可以是相对路径也可以是绝对路径
- 路由表：path属性`detail/:参数1/:参数2`
- detail组件接收：从`react-router-dom`引入`useParams`，调用后返回一个`Object`，内部为传参的数据

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

<<< @/react/react-router6/06_路由传参_params/App.jsx
<<< @/react/react-router6/06_路由传参_params/index.js

:::

::: details about路由组件

::: code-group

<<< @/react/react-router6/06_路由传参_params/pages/about/index.jsx

:::

::: details home路由组件

::: code-group

<<< @/react/react-router6/06_路由传参_params/pages/home/index.jsx

:::

**message路由组件**

给`detail`组件传参，`detail/参数1/参数2`

::: details message路由组件

::: code-group

<<< @/react/react-router6/06_路由传参_params/pages/message/index.jsx

:::

**detail路由组件**

`detail`组件从`react-router-dom`引入`useParams`，调用后返回一个`Object`，内部为传参的数据

::: details detail路由组件

::: code-group

<<< @/react/react-router6/06_路由传参_params/pages/detail/index.jsx

:::


::: details news路由组件

::: code-group

<<< @/react/react-router6/06_路由传参_params/pages/news/index.jsx

:::


**路由表**

`message`增加子路由`detail`组件

接收params参数：`detail/:参数1/:参数2`

::: details 路由表

::: code-group

<<< @/react/react-router6/06_路由传参_params/route/index.js

:::

![案例](/react/react-router6/2024-08-14%2017.43.30.gif)