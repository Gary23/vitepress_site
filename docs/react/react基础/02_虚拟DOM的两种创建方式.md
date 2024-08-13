# 02_虚拟DOM的两种创建方式

引入 **react_development.js、react-dom.development.js、babel.min.js**

## 1_js创建虚拟dom

`React.createElement(标签名, 标签属性, 标签内容)`

::: code-group
```js
const VDOM_JS = React.createElement('h1', {id: "title"}, React.createElement('span', {}, 'Hello,React'));
// 最终 1_jsx创建虚拟dom 的
// XML：早起用于存储和传输数据
ReactDOM.render(VDOM_JS, document.getElementById('test'))

```

```html
<div id="test"></div>
```
:::

## 2_jsx创建虚拟dom

::: code-group
```js
// 1. 创建虚拟dom
const VDOM = (
  <h1 id="title">
    <span>Hello, React</span>  
  </h1>
)
// 2. 渲染虚拟dom到页面 
ReactDOM.render(VDOM, document.getElementById('test'))

```

```html
<div id="test"></div>
```
:::

jsx写法也会被babel编译为上面js的写法，所以jsx也可以额看做是js的一个语法糖,也扩展了一些js语法

jsx的优势：js创建虚拟dom太繁琐，jsx更贴近html的写法 


## 3_虚拟dom与真实dom

1. 本质是Object类型的对象
2. 虚拟dom比较“轻”，真实dom比较“重”，因为虚拟dom是react内部在用，不需要真实dom身上那么毒属性
3. 虚拟dom最终会被react转为真实dom，呈现在页面上

::: code-group
```js
// 1. 创建虚拟dom
const VDOM = (
  <h1 id="title">
    <span>Hello, React</span>  
  </h1>
)
const tDOM = document.getElementById('demo')

// 2. 渲染虚拟dom到页面
ReactDOM.render(VDOM, document.getElementById('test'))

console.log('虚拟DOM', VDOM);   // 输出一个对象
console.log('真实DOM', tDOM);   
debugger
// console.log(VDOM instanceof Object);   // true

```

```html
<div id="test"></div>
<div id="demo"></div>
```
:::