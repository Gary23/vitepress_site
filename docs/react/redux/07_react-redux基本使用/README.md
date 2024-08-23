# react-redux基本使用

1. `containers/count`组件
   - 引入所有`action`的方法并传入ui组件

2. `components/count`组件
   - 所有aciton方法都从`props`调用和获取，`react-redux`的主要逻辑都在容器组件

**目录结构**

```
.
├─ components
│  ├─ count
│  │  └─ index.jsx
├─ containers
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

<<< @/react/redux/07_react-redux基本使用/App.jsx
<<< @/react/redux/07_react-redux基本使用/index.js
<<< @/react/redux/07_react-redux基本使用/App.css

:::

**components/count组件**

将删除的从`store`调用的方法和获取的状态，改为从`props`调用和获取

::: details components/count组件

::: code-group

<<< @/react/redux/07_react-redux基本使用/components/count/index.jsx

:::

**containers/count组件**

- 引入所有`redux/count_action.js`的方法，第一次调用`connect`时，把所有`action`方法传入ui组件`components/count`，ui组件通过props接收
- `connect`调用传入两个参数，类型是`Function`
- 第一个函数是`state`的映射`mapStateTpProps`，接收`state`参数，就是`store.getStore()`的返回值
- 第二个函数是`dispatch`的映射`mapDispatchToProps`，接收`dispatch`参数，就是`store`的`dispatch`方法
- `mapStateTpProps`和`mapDispatchToProps`函数的返回值是`Object`类型，返回的`Object`会传给ui组件

::: details containers/count组件

::: code-group

<<< @/react/redux/07_react-redux基本使用/containers/count/index.jsx

:::


::: details redux目录

::: code-group

<<< @/react/redux/07_react-redux基本使用/redux/store.js
<<< @/react/redux/07_react-redux基本使用/redux/count_action.js
<<< @/react/redux/07_react-redux基本使用/redux/count_reducers.js
<<< @/react/redux/07_react-redux基本使用/redux/constant.js

:::