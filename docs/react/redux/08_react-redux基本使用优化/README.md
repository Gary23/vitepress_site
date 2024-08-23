# react-redux基本使用优化

1. `containers/count`组件组件优化
   - ui组件写成类组件也放到容器组件中
   - 都改为匿名函数且使用箭头函数的写法

2. `index.js`
   - 不再需要store的subscribe监听，render组件是react-redux的能力之一，通过connect实现的
   - 管理store，引入store、从react-redux引入Provider标签，嵌套App组件，并把store传入Provider标签，这样就相当于全局引入就不需要在后面的组件引入了

3. 根组件
   - `App`组件中删除store，改为在`index.js`全局引入传参

4. 文件层面优化
   - 删除components目录下的count组件，把这个ui组件的内容放到容器组件中，最终只抛出一个容器组件就可以


**目录结构**

```
.
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

- `index.js`不再需要store的`subscribe`监听，`render`组件是react-redux的能力之一，通过connect实现的

- 全局引入store：引入store、从react-redux引入`Provider`组件，嵌套`App`组件，并把`store`传入`Provider`组件

::: details 根组件

::: code-group

<<< @/react/redux/08_react-redux基本使用优化/App.jsx
<<< @/react/redux/08_react-redux基本使用优化/index.js
<<< @/react/redux/08_react-redux基本使用优化/App.css

:::


**containers/count组件**

- 新增一个CountUI的类组件，删除原来的ui组件`components/count`
- `connect`改变传参，第二个参数`mapDispatchToProps`直接写Object，value就是action函数体，react-redux内部会去执行了`dispatch`操作

::: details containers/count组件

::: code-group

<<< @/react/redux/08_react-redux基本使用优化/containers/count/index.jsx

:::


::: details redux目录

::: code-group

<<< @/react/redux/08_react-redux基本使用优化/redux/store.js
<<< @/react/redux/08_react-redux基本使用优化/redux/count_action.js
<<< @/react/redux/08_react-redux基本使用优化/redux/count_reducers.js
<<< @/react/redux/08_react-redux基本使用优化/redux/constant.js

:::