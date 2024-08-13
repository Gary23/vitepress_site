# jsx语法规则

1. 定义虚拟dom，不要写引号（不要写成字符串模板）
2. 标签中混入js表达式，要用花括号
3. 样式的类名指定，class要写为className，因为class是es6的关键字
4. 行内样式要用{ key: value }键值对的方式写
5. 虚拟DOM必须只有一个根标签
6. 标签必须闭合
7. 标签首字母
   - （1）小写字母开头，将标签转为html元素，若html中无法改标签对应名称，报错
   - （2）如果大写字母开头，就去渲染对应的组件，如果没有定义，报错

::: code-group
```js
const myId = 'TITLE';
const myData = 'HELLO, react';
// 1. 创建虚拟DOM
const VDOM = (
  <div>
    <h2 id={ myId.toLowerCase() } className="title">
      <span style={{ color: 'white', fontSize: '20px' }}>{ myData.toLowerCase() }</span>  
    </h2>
    <input type="text" />
  </div>
)
// 2. 渲染虚拟DOM
ReactDOM.render(VDOM, document.getElementById('test'));
```

```css
.title {
  background: orange;
  width: 200px;
}
```

```html
<div id="test"></div>
```
:::

::: tip  语句和表达式的区别
1. 表达式：一个表达式会产生一个值，可以放在任何需要值得地方，比如：`a+b`、`demo()`、`arr.map()`、`function test() {}`
2. 语句：也就是代码，比如：`if(){}`、`for(){}`、`switch(){case}`
:::

::: code-group
```js
const data = [
  'Angular', 'React', 'Vue'
]
// 1. 创建虚拟DOM
const VDOM = (
  <div>
    <h1>框架列表</h1>
    <ul>
      {
        data.map((item, index) => {
          return <li key={ index }>{ item }</li>
        })
      }
    </ul>
  </div>
)
// 2. 渲染虚拟DOM
ReactDOM.render(VDOM, document.getElementById('test'));
```
```html
<div id="test"></div>
```
:::

![运行结果](/react/react基础/1722223713461.jpg)