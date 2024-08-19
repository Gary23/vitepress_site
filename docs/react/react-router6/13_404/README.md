# 404

- 增加`notFound`组件
- 增加全局的404页面兜底，把现有`App.jsx`放到`pages/index`目录下，`App.jsx`负责渲染整个项目的路由展示
- 在`route/index`路由表中，将原来整个路由表放到`index`组件的`children`内，外部增加404的跳转

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
│  ├─ index
│  │  └─ index.jsx
│  ├─ message
│  │  └─ index.jsx
│  ├─ news
│  │  └─ index.jsx
│  └─ notFound
│     └─ index.jsx
├─ route
│  └─ index.js
├─ App.jsx
└─ index.js
```

::: details 根组件

::: code-group

<<< @/react/react-router6/13_404/App.jsx
<<< @/react/react-router6/13_404/index.js

:::

::: details about路由组件

::: code-group

<<< @/react/react-router6/13_404/pages/about/index.jsx

:::



::: details home路由组件

::: code-group

<<< @/react/react-router6/13_404/pages/home/index.jsx

:::

**index组件**

原来`App.jsx`根组件的内容

::: details index路由组件

::: code-group

<<< @/react/react-router6/13_404/pages/index/index.jsx

:::


::: details message路由组件

::: code-group

<<< @/react/react-router6/13_404/pages/message/index.jsx

:::


::: details detail路由组件

::: code-group

<<< @/react/react-router6/13_404/pages/detail/index.jsx

:::


::: details news路由组件

::: code-group

<<< @/react/react-router6/13_404/pages/news/index.jsx

:::


::: details notFound路由组件

::: code-group

<<< @/react/react-router6/13_404/pages/notFound/index.jsx

:::

**路由表**

增加全局的404页面兜底

将原来整个路由表放到`index`组件的`children`内，外部增加404的跳转

::: details 路由表

::: code-group

<<< @/react/react-router6/13_404/route/index.js

:::