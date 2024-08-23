# 增加action的写法

基于 [03_精简版redux的写法](../03_精简版redux的写法/README.md)，增加`action`的写法

[03_精简版redux的写法](../03_精简版redux的写法/README.md) 中是在`count`组件中写的`{ type, data }`，这其实就是一个`action`对象，现在把它交给`count_action.js`来处理

1. 新增 `redux/count_action.js`
   - 该文件专门为`count`组件生成`action`对象`type`和`data`
   - 抛出加法和减法的函数，函数`return`一个`action`对象

2. `count`组件
   - 引入`action`抛出的加法和减法函数，`store.dispatch`函数的传参由对象改为`action`函数的调用

3. 新增 `redux/constant.js`
   - 该文件用于定义`action`对象中`type`对象的常量值
   - 在`reduxcers`和`action`引入，这两个文件中的常量都在这里声明

**目录结构**

```
.
├─ components
│  ├─ count
│  │  └─ index.jsx
├─ redux
│  ├─ constant.js
│  ├─ count_action.js
│  ├─ count_reducer.js
│  └─ store.jsx
├─ App.css
├─ App.jsx
└─ index.js
```

::: details 根组件

::: code-group

<<< @/react/redux/04_增加action的写法/App.jsx
<<< @/react/redux/04_增加action的写法/index.js
<<< @/react/redux/04_增加action的写法/App.css

:::

**count组件**

引入`action`抛出的加法和减法函数，`store.dispatch`函数的传参改为`action`函数的调用

::: details count组件

::: code-group

<<< @/react/redux/04_增加action的写法/components/count/index.jsx

:::

**redux目录**

新增 `redux/count_action.js`，抛出加法和减法的函数，函数`return`一个`action`对象，`action`对象的`type`在这个文件里定义，`value`在`count`组件中传入

新增 `redux/constant.js`，定义`action`对象中`type`对象的常量值


::: details redux目录

::: code-group

<<< @/react/redux/04_增加action的写法/redux/store.js
<<< @/react/redux/04_增加action的写法/redux/count_action.js
<<< @/react/redux/04_增加action的写法/redux/count_reducers.js
<<< @/react/redux/04_增加action的写法/redux/constant.js

:::

![案例](/react/redux/2024-08-19%2016.51.30.gif)
