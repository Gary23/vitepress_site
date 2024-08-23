# redux开发者工具

- 可以安装浏览器扩展**Redux DevTools**，查看redux的数据

- 项目代码里也需要安装引入,安装**redux-devtools-extension**


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

<<< @/react/redux/11_redux开发者工具/App.jsx
<<< @/react/redux/11_redux开发者工具/index.js
<<< @/react/redux/11_redux开发者工具/App.css

:::

**count组件和person组件**

count容器传入person的数据给ui组件，person容器传入count的数据给ui组件

::: details count组件

::: code-group

<<< @/react/redux/11_redux开发者工具/containers/count/index.jsx

:::

::: details person组件

::: code-group

<<< @/react/redux/11_redux开发者工具/containers/person/index.jsx

:::

**store.js**

- 在store中引用redux-devtools-extension的`composeWithDevTools`方法，将返回值传入`createStore`的第二个参数

::: tip 
如果`createStoee`没有第二个参数，可以直接调用，如果写了第二个参数，那需要把原来的第二个参数传参给`composeWithDevTools`方法
:::

::: details redux目录

::: code-group

<<< @/react/redux/11_redux开发者工具/redux/actions/count.js [actions/count]
<<< @/react/redux/11_redux开发者工具/redux/actions/person.js [actions/person]
<<< @/react/redux/11_redux开发者工具/redux/reducers/count.js [reducers/count]
<<< @/react/redux/11_redux开发者工具/redux/reducers/person.js [reducers/person]
<<< @/react/redux/11_redux开发者工具/redux/store.js
<<< @/react/redux/11_redux开发者工具/redux/constant.js

:::