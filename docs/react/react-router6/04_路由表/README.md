# 路由表

- 路由表的数据类型是`Array`，数组内元素是`Object`，需要配置`path`和`element`属性，值和`Route`组件一样
- 使用：在函数式组件中返回`useRoutes(路由表Array)`，替换根组件原`routes`组件，`routes`和`route`组件就不需要写了
- 路由表应该放到单独的文件中，抛出一个函数式组件，在其他组件直接引入这个函数式组件渲染

**目录结构**

```
.
├─ pages
│  ├─ about
│  │  └─ index.jsx
│  └─ home
│     └─ index.jsx
├─ route
│  └─ index.js
├─ App.jsx
└─ index.js
```

**根组件**

使用的时候，直接引入路由表，替换原`routes`和`route`组件

::: details 根组件

::: code-group

<<< @/react/react-router6/04_路由表/App.jsx
<<< @/react/react-router6/04_路由表/index.js

:::


::: details about路由组件

::: code-group

<<< @/react/react-router6/04_路由表/pages/about/index.jsx

:::


::: details home路由组件

::: code-group

<<< @/react/react-router6/04_路由表/pages/home/index.jsx

:::


**路由表**

路由表的数据类型是`Array`，数组内元素是`Object`，需要配置`path`和`element`属性，值和`Route`组件一样

单独的路由表文件，抛出一个函数式组件，组件内部调用从`react-router-dom`引入的`useRoutes`

::: details 路由表

::: code-group

<<< @/react/react-router6/04_路由表/route/index.js

:::
