# 多个组件使用react-redux

1. person组件
   - 新建containers/person组件
   - 输入框输入内容，添加到数据在列表展示

2. person结合react-redux
   - 新建actions和reducers目录，分别存放count和person组件的action和reducer文件

3. constant.js
   - 增加addPerson常量

4. store.js
   - 使用`combineReducers`组合多个reducer

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

<<< @/react/redux/09_多个组件使用react-redux/App.jsx
<<< @/react/redux/09_多个组件使用react-redux/index.js
<<< @/react/redux/09_多个组件使用react-redux/App.css

:::

**count组件**

- 多个组件使用redux之后，`store.getState`方法就会返回一个对象而不是原来的count，`count`组件中`connect`的传参修改为`state.count`

::: details count组件

::: code-group

<<< @/react/redux/09_多个组件使用react-redux/containers/count/index.jsx

:::

::: details person组件

::: code-group

<<< @/react/redux/09_多个组件使用react-redux/containers/person/index.jsx

:::

**person的redux**

- `actions/person.js`文件，新增`addPersonAction`方法返回action对象
- `reducers/person.js`文件，新增`personReducer`方法返回加工后的personList

**store.js**

- store中引入`reducers/person.js`，
- 现在有多个reducer，需要先组合reducer数据。引入react-redux的`combineReducers`函数，调用`combineReducers`传入count和person的reducer，返回一个组合后的reducer传入`createStore`

::: details redux目录

::: code-group

<<< @/react/redux/09_多个组件使用react-redux/redux/actions/count.js [actions/count]
<<< @/react/redux/09_多个组件使用react-redux/redux/actions/person.js [actions/person]
<<< @/react/redux/09_多个组件使用react-redux/redux/reducers/count.js [reducers/count]
<<< @/react/redux/09_多个组件使用react-redux/redux/reducers/person.js [reducers/person]
<<< @/react/redux/09_多个组件使用react-redux/redux/store.js
<<< @/react/redux/09_多个组件使用react-redux/redux/constant.js

:::

![案例](/react/redux/2024-08-22%2015.22.27.gif)