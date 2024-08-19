# github搜索_axios

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

**根组件**

创建users集合

给search组件传函数，通用修改状态的函数

给list组件传所有state数据集合

::: details 根组件

::: code-group

<<< @/react/react-staging/03_github搜索_axios/App.jsx
<<< @/react/react-staging/03_github搜索_axios/index.js
<<< @/react/react-staging/03_github搜索_axios/App.css

:::

**List组件**

接收传参的标识，根据标识展示提示文字

接收users数组，遍历展示

::: details List组件

::: code-group

<<< @/react/react-staging/03_github搜索_axios/components/List/index.jsx

:::

**Search**

引入axios

input通过ref属性回调的方式获取搜索关键字

button点击事件：发送网络请求（走setupProxy的代理），请求成功后更新App组件的状态和users数组

::: details Search组件

::: code-group

<<< @/react/react-staging/03_github搜索_axios/components/Search/index.jsx

:::


::: info server目录

运行 `node server1.js` 命令启动服务，启动后在项目里才能通过setupProxy跨域请求接口

:::


![示例](/react/react-staging/1722224164182.gif)