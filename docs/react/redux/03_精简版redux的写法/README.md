# 精简版redux的写法

基于[02_原始版求和](../02_原始版求和/README.md)，精简版先不写`action`，只写必要的`store`和`reducer`

1. `store`
   - 创建`store`对象并抛出

2. `count_reducers.js`
   - 该文件是用于创建一个`count`组件的`reducer`，本质是一个函数

3. `count`组件使用redux
   - 引入`store.js`，把`count`状态交给`redux`处理
   - 更新数据后需要`subscribe`进行监听，在监听的回调中重新render组件
   - `subscribe`可以在每个组件中自己定义调用`setState`强制render，也可以放到最外层的`index.js`重新`render`整个应用


**目录结构**

```
.
├─ components
│  ├─ count
│  │  └─ index.jsx
├─ redux
│  ├─ count_reducer.js
│  └─ store.jsx
├─ App.css
├─ App.jsx
└─ index.js
```

**根组件**

这里把`store.subscribe`放到最外层的`index.js`重新`render`整个应用，因为整个应用就是求和这一个功能

::: details 根组件

::: code-group

<<< @/react/redux/03_精简版redux的写法/App.jsx
<<< @/react/redux/03_精简版redux的写法/index.js
<<< @/react/redux/03_精简版redux的写法/App.css

:::

**count组件**

引入`store.js`

把`count`状态交给redux处理

获取状态使用`store.getState()`，设置状态使用`store.dispatch({ type, data })`

`dispatch`只会更新状态，不会进行render，render交给最外层的`index.js`处理

::: details count组件

::: code-group

<<< @/react/redux/03_精简版redux的写法/components/count/index.jsx

:::


**redux目录**

创建`redux`目录  创建`store.js`、`count_reducers.js`

`store.js`
   - 从redux引入`creatStore`方法
   - 调用`creatStore`并传入`count_reducers`，创建`store`对象并抛出

`count_reducers.js`
   - 创建一个`count`组件的`reducer`，接收两个参数`preState`、`action`，
   - 参数`preState`是更新前的状态值；
   - 参数`action`是一个对象，包含`type`和`data`
   - `type`在这个案例里有加和减，判断这两种场景，用`preState`和`data`做计算
   - 在这个案例中默认值`default`赋值为0

::: details redux目录

::: code-group

<<< @/react/redux/03_精简版redux的写法/redux/store.js
<<< @/react/redux/03_精简版redux的写法/redux/count_reducer.js

:::

![案例](/react/redux/2024-08-19%2016.51.30.gif)
