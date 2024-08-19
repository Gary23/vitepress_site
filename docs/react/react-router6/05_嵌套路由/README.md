# 嵌套路由

- 在`home`组件增加`news`和`message`组件的导航链接，6版本的子路由导航链接可以写相对路径，不需要写父级路径
- `home`组件引入`Outlet`组件占位，子路由的视图会渲染到这个组件的位置
- 在路由表的`home`组件里增加`children`属性，`Array`类型，配置`message`和`news`组件的路由信息

**目录结构**

```
.
├─ pages
│  ├─ about
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

<<< @/react/react-router6/05_嵌套路由/App.jsx
<<< @/react/react-router6/05_嵌套路由/index.js

:::


::: details about路由组件

::: code-group

<<< @/react/react-router6/05_嵌套路由/pages/about/index.jsx

:::

**home路由组件**

增加`news`和`message`组件的导航链接

引入`Outlet`组件占位，子路由的视图会渲染到这个组件的位置

`Link`组件的`to`属性可以写相对路径

::: details home路由组件

::: code-group

<<< @/react/react-router6/05_嵌套路由/pages/home/index.jsx

:::


::: details message路由组件

::: code-group

<<< @/react/react-router6/05_嵌套路由/pages/message/index.jsx

:::


::: details news路由组件

::: code-group

<<< @/react/react-router6/05_嵌套路由/pages/news/index.jsx

:::

**路由表**

增加嵌套路由的配置，在路由表的`home`组件里增加`children`属性，`Array`类型，配置`message`和`news`组件的路由信息

::: details 路由表

::: code-group

<<< @/react/react-router6/05_嵌套路由/route/index.js

:::

![案例](/react/react-router6/2024-08-14%2017.37.59.gif)