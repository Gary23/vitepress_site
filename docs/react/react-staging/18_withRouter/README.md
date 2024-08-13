# withRouter

- 在非路由组件中也可以控制路由跳转

- `withRouter`调用时传入一个普通组件，可以给普通组件加上路由组件特有的的api

**目录结构**

```
.
├─ components
│  ├─ Header
│  │  └─ index.jsx
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

<<< @/react/react-staging/18_withRouter/App.jsx
<<< @/react/react-staging/18_withRouter/index.js
<<< @/react/react-staging/18_withRouter/App.css

:::


::: details Header组件

普通组件最后的抛出组件的使用调用`withRouter`，返回的组件挂载上了路由组件的api

::: code-group

<<<  @/react/react-staging/18_withRouter/components/Header/index.jsx

:::


::: details MyNavLink组件

::: code-group

<<<  @/react/react-staging/18_withRouter/components/MyNavLink/index.jsx

:::


::: details about组件

::: code-group

<<<  @/react/react-staging/18_withRouter/pages/about/index.jsx

:::


::: details home组件

::: code-group

<<<  @/react/react-staging/18_withRouter/pages/home/index.jsx
<<<  @/react/react-staging/18_withRouter/pages/home/message/index.jsx [message/index.jsx]
<<<  @/react/react-staging/18_withRouter/pages/home/message/detail/index.jsx [message/detail/index.jsx]
<<<  @/react/react-staging/18_withRouter/pages/home/news/index.jsx [news/index.jsx]

:::

![案例](/react/react-staging/1722224164191.gif)