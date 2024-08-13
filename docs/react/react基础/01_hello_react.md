# 01_hello_react

引入 [react_development.js](./js/react.development.js)、[react-dom.development.js](./js/react-dom.development.js)、[babel.min.js](./js/babel.min.js)

渲染：`ReachDOM.render(虚拟DOm, 容器)`

script标签的type要写为`text/babel`

::: code-group

```html
<div id="test"></div>
```

```js
// 1. 创建虚拟dom
// 此处不是字符串是虚拟dom  所以直接写标签
const VDOM = <h1>Hello, React</h1>
// 2. 渲染虚拟dom到页面   ReachDOM.render(虚拟DOm, 容器)
ReactDOM.render(VDOM, document.getElementById('test'))
```

:::

