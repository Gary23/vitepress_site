# react-redux容器及组件和UI组件连接

在`react-redux`中，组件分为**容器组件**（containers目录）和**ui组件**（components目录）

1. `containers/count`组件
   - 引入ui组件，用react-redux注入ui组件并抛出一个容器组件

2. `根组件`
   - 引入容器组件，传入store

3. `components/count`组件
   - 暂时删除所有和`store`相关的内容

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

**根组件**

引入`containers/count`容器组件

引入`redux/store`文件，传入`count`容器组件

::: details 根组件

::: code-group

<<< @/react/redux/06_react-redux容器及组件和UI组件连接/App.jsx
<<< @/react/redux/06_react-redux容器及组件和UI组件连接/index.js
<<< @/react/redux/06_react-redux容器及组件和UI组件连接/App.css

:::


::: details components/count组件

::: code-group

<<< @/react/redux/06_react-redux容器及组件和UI组件连接/components/count/index.jsx

:::


**containers/count组件**

- 引入ui组件 `components/count`
- 引入`react-redux`的`connect`方法
- 调用`connect`函数，获取到一个容器组件创建函数，再调用创建函数并传入ui组件（也就是调用两次`connect`），创建出一个容器组件并抛出

::: details containers/count组件

::: code-group

<<< @/react/redux/06_react-redux容器及组件和UI组件连接/containers/count/index.jsx

:::


::: details redux目录

::: code-group

<<< @/react/redux/06_react-redux容器及组件和UI组件连接/redux/store.js
<<< @/react/redux/06_react-redux容器及组件和UI组件连接/redux/count_action.js
<<< @/react/redux/06_react-redux容器及组件和UI组件连接/redux/count_reducers.js
<<< @/react/redux/06_react-redux容器及组件和UI组件连接/redux/constant.js

:::