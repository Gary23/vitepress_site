# 一级路由切换

- 安装react-router-dom
- 与router5不同的是，`Route`组件的`component`属性改为`element`属性，传入组件`<Route path="/home" element={ <Home /> }/>`
- 在router6用`Routes`组件替换`Switch`组件，嵌套所有`Route`组件，`Routes`组件内部不会重复匹配，只会显示第一个匹配到的`path`


**目录结构**

```
.
├─ pages
│  ├─ about
│  │  └─ index.jsx
│  └─ home
│     └─ index.jsx
├─ App.jsx
└─ index.js
```

**根组件**

从react-router-dom引入`BrowserRouter`组件、`NavLink`组件、`Route`组件、`Routes`组件

router6中`Route`组件的`element`属性，需要传入组件，替代原来的`component`属性

用`Routes`组件嵌套所有`Route`组件，`Routes`组件内部不会重复匹配，只会显示第一个匹配到的`path`

::: details 根组件

::: code-group

<<< @/react/react-router6/01_一级路由切换/App.jsx
<<< @/react/react-router6/01_一级路由切换/index.js

:::


::: details about路由组件

::: code-group

<<< @/react/react-router6/01_一级路由切换/pages/about/index.jsx

:::


::: details home路由组件

::: code-group

<<< @/react/react-router6/01_一级路由切换/pages/home/index.jsx

:::