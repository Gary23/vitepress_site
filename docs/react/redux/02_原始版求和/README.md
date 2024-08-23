# 原始版求和

- 首先不使用redux来写一个求和按钮

- 页面要素：求和的值、下拉框可选择数字、加号按钮、减号按钮、和为奇数才触发加法的按钮、异步的加号按钮

- 四个按钮分别触发不同的事件计算求和的值，每次通过setState更新count的值

**目录结构**

```
.
├─ components
│  ├─ count
│  │  └─ index.jsx
├─ App.css
├─ App.jsx
└─ index.js
```

::: details 根组件

::: code-group

<<< @/react/redux/02_原始版求和/App.jsx
<<< @/react/redux/02_原始版求和/App.css
<<< @/react/redux/02_原始版求和/index.js

:::


::: details count组件

::: code-group

<<< @/react/redux/02_原始版求和/components/count/index.jsx

:::

![案例](/react/redux/2024-08-19%2016.51.30.gif)