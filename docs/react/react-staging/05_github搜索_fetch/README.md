# github搜索_fetch

::: tip promise链
第一个`.then`中 第一个回调是`resolve`，第二个回调是`reject`   

第二个`.then`中 可以拿到第一个`then`的`return`，如果没有`return`，则第二个`then`获取到的是`undefined`
:::

::: tip 中断promise链
用`catch`兜底，用`catch`兜底的话，就不需要在`then`里写`reject`的回调了，有错误，就会进入到兜底的`catch`

如果不想兜底，可以在`.then`的`reject`回调中`return new Promise(() => {})`就不会继续执行后面的`.then`了
:::

**目录结构**

```
.
├─ server
│  ├─ package.json
│  ├─ server.js
│  └─ yarn.lock
├─ components
│  ├─ List
│  │  └─ index.jsx
│  └─ Search
│     └─ index.jsx
├─ App.css
├─ App.jsx
├─ index.js
└─ setupProxy.js
```

::: details 根组件

根组件不需要有自己的状态了

::: code-group

<<< @/react/react-staging/05_github搜索_fetch/App.jsx
<<< @/react/react-staging/05_github搜索_fetch/index.js
<<< @/react/react-staging/05_github搜索_fetch/App.css

:::


::: details List组件

把原来根组件的状态都给List组件

引入pubsub.js

初始化钩子中订阅消息，在回调中更新状态

销毁钩子中取消订阅

::: code-group

<<< @/react/react-staging/05_github搜索_fetch/components/List/index.jsx

:::



::: details Search组件

由更新App状态，改为通过消息发布来更新List组件中的状态

::: code-group

<<< @/react/react-staging/05_github搜索_fetch/components/Search/index.jsx

:::


::: details server目录

运行 `node server1.js` 命令启动服务，启动后在项目里才能通过setupProxy跨域请求接口

:::


![示例](/react/react-staging/1722224164182.gif)