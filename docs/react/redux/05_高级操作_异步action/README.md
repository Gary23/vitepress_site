# 高级操作_异步action

`action`除了是`Object`类型，还可以是`Function`类型，其中`dispatch`处理`Object`类型只能同步执行，如果需要异步执行，需要将异步操作包装在一个函数中，所以`Function`类型通常用做异步执行

1. `redux/count_action.js`
   - 新建一个`action`高阶函数，`return`一个函数体，函数体内实现异步操作
   - `dispatch`接收函数需要用`redux-thunk`转换，通过在`store.js`中添加中间件实现

2. `redux/store.js`
   - 从`store`中引入`applyMiddleware`添加中间件工具，再引入`redux-thunk`这个中间件。


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

<<< @/react/redux/05_高级操作_异步action/App.jsx
<<< @/react/redux/05_高级操作_异步action/index.js
<<< @/react/redux/05_高级操作_异步action/App.css

:::

**count组件**

从`action`引入`addAsyncAction`函数，在异步加的时候调用并传入`store.dispatch`

::: details count组件

::: code-group

<<< @/react/redux/05_高级操作_异步action/components/count/index.jsx

:::

**redux目录**

`count_action.js`
   - 通过高阶函数`return`一个函数体，函数体接收`dispatch`函数作为参数，异步结束后调用`dispatch`函数来设置状态

`store.js`
   - 添加中间件：`createStore`增加第二个参数，调用`applyMiddleware`，并给`applyMiddleware`传参`redux-thunk`，也就是传入`redux-thunk`这个中间件


::: tip redux-thunk
`dispatch`只能接收`redux-thunk`转换后的`Function`类型，`redux-thunk`是一个中间件，它的作用是把一个异步操作包装在一个函数中，并在适当的时候调用
:::

::: details redux目录

::: code-group

<<< @/react/redux/05_高级操作_异步action/redux/store.js
<<< @/react/redux/05_高级操作_异步action/redux/count_action.js
<<< @/react/redux/05_高级操作_异步action/redux/count_reducers.js
<<< @/react/redux/05_高级操作_异步action/redux/constant.js

:::

![案例](/react/redux/2024-08-19%2016.51.30.gif)