# 路由的精准匹配和模糊匹配

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

在`Route`组件配置`exact`属性

1. 默认模糊匹配
   - a、to属性 `/home/a/b` 可以匹配到`path`的 `/home`
   - b、to属性的 `/home` 不能匹配到`path`的 `/home/a/b`
   - c、to属性的 `/a/b/home` 不能匹配到`path`的 `/home`
  
  在a过程中，`to`会解析为 `\home \a \b` 三个路径，而path按照顺序匹配到了`\home`，所以可以匹配上

2. 配置精准匹配：
  
  `to`属性的路径必须和path的路径完全一样


::: code-group 

<<< @/react/react-staging/11_路由的精准匹配和模糊匹配/App.jsx
<<< @/react/react-staging/11_路由的精准匹配和模糊匹配/index.js
<<< @/react/react-staging/11_路由的精准匹配和模糊匹配/App.css

:::


::: details MyNavLink组件

::: code-group

<<<  @/react/react-staging/11_路由的精准匹配和模糊匹配/components/MyNavLink/index.jsx

:::


::: details about组件

::: code-group

<<<  @/react/react-staging/11_路由的精准匹配和模糊匹配/pages/about/index.jsx

:::


::: details home组件

::: code-group

<<<  @/react/react-staging/11_路由的精准匹配和模糊匹配/pages/home/index.jsx

:::




![增加了exact属性](/react/react-staging/1722224164185.gif)




