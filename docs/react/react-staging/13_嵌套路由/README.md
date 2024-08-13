# 嵌套路由

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

<<< @/react/react-staging/13_嵌套路由/App.jsx
<<< @/react/react-staging/13_嵌套路由/index.js
<<< @/react/react-staging/13_嵌套路由/App.css

:::


::: details MyNavLink组件

::: code-group

<<<  @/react/react-staging/13_嵌套路由/components/MyNavLink/index.jsx

:::


::: details about组件

::: code-group

<<<  @/react/react-staging/13_嵌套路由/pages/about/index.jsx

:::


::: details home组件

二级路由

Home目录下，新建`News`组件和`Message`组件

二级路由的`to`属性，要携带一级路由的路径，比如这里要在`/home`的基础上写：`/home/news`、`/home/message`

::: code-group

<<<  @/react/react-staging/13_嵌套路由/pages/home/index.jsx
<<<  @/react/react-staging/13_嵌套路由/pages/home/message/index.jsx [message/index.jsx]
<<<  @/react/react-staging/13_嵌套路由/pages/home/news/index.jsx [news/index.jsx]

:::

![案例](/react/react-staging/1722224164186.gif)