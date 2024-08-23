# RTK_同步

**RTK：redux toolkit**，官方推荐的工具集合简化redux的写法，安装：`npm i @reduxjs/toolkit`。

整体流程：创建具体模块的store对象，从store对象导出reducer函数，在汇总的store对象汇总所有模块的reducer。

**目录结构**

```
.
├─ redux
│  ├─ modules
│  │  └─ counterStore.js
│  └─ store.jsx
├─ App.jsx
└─ index.js
```

**index.js**

index.js
   - 引入store
   - 根目录的index文件，用react-redux的Provider标签嵌套App，注入store属性

**App.jsx**

`App`组件使用redux数据
   - 从react-redux引入`useSelector`
   - 以获取`count`状态字段为例，调用`useSelector`：`const { count } = useSelector(state => state.counter.count)`

`App`组件修改redux数据
   - 从react-redux引入`useDispatch`
   - 获取dispatch函数：`const dispatch = useDispatch()`
   - 引入`counterStore`导出的action方法并传参给dispatch：`dispatch(actionName())`

::: details 根组件

::: code-group 

<<< @/react/redux/12_RTK_同步/App.jsx
<<< @/react/redux/12_RTK_同步/index.js

:::

**counterStore.js**

- 创建store对象，最后从store对象导出所有action和reducer函数
- 引入 **@reduxjs/toolkit** 的`createSlice`方法，调用创建一个store对象`counterStore`
- `createSlice`调用需要传入一个`Object`：
  - `name`: reducer的名称
  - `initialState`：初始化state对象
  - `reducers`：reducer作用是更新state的状态，可以接收state参数，更新state内的数据。使用`action.payLoad`接收参数
- `counterStore.actions`获取action对象，也就是createSlice中的reducers，用按需引入的方式导出action对象`incement`和`decrement`
- 导出创建的store对象的reducer函数，在`store.js`中使用

**store.js**

- 引入counterStore的reducer
- 引入 **@reduxjs/toolkit** 的`configureStore`方法，调用返回一个store对象，用于汇总所有store对象并导出
- `configureStore`配置传入一个`Object`
  - `reducer`: 传入各store对象导出的reducer函数

::: details redux目录

::: code-group 

<<< @/react/redux/12_RTK_同步/redux/modules/counterStore.js
<<< @/react/redux/12_RTK_同步/redux/store.js

:::

![案例](/react/redux/2024-08-23%2009.44.00.gif)