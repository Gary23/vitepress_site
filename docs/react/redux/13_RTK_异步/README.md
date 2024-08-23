# RTK_异步

创建一个高阶函数，返回一个异步函数体，异步函数体内进行数据请求，最后通过dispatch更新数据，导出action时直接导出这个匿名函数

**目录结构**

```
.
├─ redux
│  ├─ modules
│  │  ├─ channelStore.js
│  │  └─ counterStore.js
│  └─ store.jsx
├─ App.jsx
└─ index.js
```

**App.jsx**

- 使用`useSelector`钩子，在`useEffect`钩子内获取异步数据，使用dispatch传入channelStore导出的高阶函数来更新数据

::: details 根组件

::: code-group 

<<< @/react/redux/13_RTK_异步/App.jsx
<<< @/react/redux/13_RTK_异步/index.js

:::


**channelStore.js**

- 需要声明一个高阶函数，返回一个异步函数体，函数体内进行数据请求，调用action函数将异步返回的数据传入进行dispatch
最后需要导出这个高阶函数，不需要再导出action函数了

::: details redux目录

::: code-group 

<<< @/react/redux/13_RTK_异步/redux/modules/channelStore.js
<<< @/react/redux/13_RTK_异步/redux/modules/counterStore.js
<<< @/react/redux/13_RTK_异步/redux/store.js

:::

![案例](/react/redux/2024-08-23%2010.50.06.gif)