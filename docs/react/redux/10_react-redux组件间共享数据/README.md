# react-redux组件间共享数据

- 组件之间可以共享redux保存的数据，在容器组件中，`connect`的`mapStateTpProps`中的参数`state`对象就是redux中所有的数据，可以从`state`中获取对应的数据传给ui组件即可

::: tip

reducers的return值  如果和上次一样就不会更新了，特别要注意对象和数组

:::

**目录结构**

```
.
├─ containers
│  ├─ count
│  │  └─ index.jsx
│  └─ person
│     └─ index.jsx
├─ redux
│  ├─ actions
│  │  ├─ count.js
│  │  └─ person.js
│  ├─ reducers
│  │  ├─ count.js
│  │  └─ person.js
│  ├─ constant.js
│  └─ store.jsx
├─ App.css
├─ App.jsx
└─ index.js
```

::: details 根组件

::: code-group

<<< @/react/redux/10_react-redux组件间共享数据/App.jsx
<<< @/react/redux/10_react-redux组件间共享数据/index.js
<<< @/react/redux/10_react-redux组件间共享数据/App.css

:::

**count组件和person组件**

count容器传入person的数据给ui组件，person容器传入count的数据给ui组件

::: details count组件

::: code-group

<<< @/react/redux/10_react-redux组件间共享数据/containers/count/index.jsx

:::

::: details person组件

::: code-group

<<< @/react/redux/10_react-redux组件间共享数据/containers/person/index.jsx

:::


::: details redux目录

::: code-group

<<< @/react/redux/10_react-redux组件间共享数据/redux/actions/count.js [actions/count]
<<< @/react/redux/10_react-redux组件间共享数据/redux/actions/person.js [actions/person]
<<< @/react/redux/10_react-redux组件间共享数据/redux/reducers/count.js [reducers/count]
<<< @/react/redux/10_react-redux组件间共享数据/redux/reducers/person.js [reducers/person]
<<< @/react/redux/10_react-redux组件间共享数据/redux/store.js
<<< @/react/redux/10_react-redux组件间共享数据/redux/constant.js

:::

![案例](/react/redux/2024-08-22%2015.29.01.gif)