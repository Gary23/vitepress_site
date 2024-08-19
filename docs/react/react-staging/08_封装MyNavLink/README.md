# 封装MyNavLink

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


::: details 根组件

::: code-group 

<<< @/react/react-staging/08_封装MyNavLink/App.jsx
<<< @/react/react-staging/08_封装MyNavLink/index.js
<<< @/react/react-staging/08_封装MyNavLink/App.css

:::

**MyNavLink组件**

对`NavLink`标签二次封装，可以自定义`activeClassName`，接收`to`传参，这样就不用写很多`activeClassName`

父组件传入的文本节点在`props`中的属性名叫做`children`，所以可以直接写`children`属性代替文本节点

::: details MyNavLink组件

::: code-group

<<<  @/react/react-staging/08_封装MyNavLink/components/MyNavLink/index.jsx

:::


::: details about路由组件

::: code-group

<<<  @/react/react-staging/08_封装MyNavLink/pages/about/index.jsx

:::


::: details home路由组件

::: code-group

<<<  @/react/react-staging/08_封装MyNavLink/pages/home/index.jsx

:::

![案例](/react/react-staging/1722224164184.gif)





