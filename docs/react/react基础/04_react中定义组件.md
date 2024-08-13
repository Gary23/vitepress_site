# react中定义组件

## 函数式组件

::: code-group
```js
// 1. 创建函数式组件
function Demo() {
  console.log(this);    
  // 此处的this是undefined，因为babel默认开启严格模式，严格模式中function的this不能指向window
  return <h1>这是函数式组件，适用于【简单组件】</h1>
}
// 2. 渲染组件
ReactDOM.render(<Demo/>, document.getElementById('test'));

```
```html
<div id="test"></div>
```
:::

执行了`ReactDom.render(<Demo/>......)`之后发生了
1. React解析组件标签，找到了Demo组件
2. 发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后渲染到页面


## 类式组件

::: code-group
```js
// 1. 创建类式组件
class Demo extends React.Component {
  // render必须写，必须有返回值（dom元素）
  // render是放在Demo的原型对象上，供实例使用
  // render的this指向Demo组件实例对象
  render() {
    console.log('render的this', this);
    return <h1>这是类式组件，适用于【复杂组件】</h1>
  }
}
// 2. 渲染组件
ReactDOM.render(<Demo/>, document.getElementById('test'));

```
```html
<div id="test"></div>
```
:::

执行了`ReactDom.render(<Demo/>......)`之后发生了
1. React解析组件标签，找到了Demo组件
2. 发现组件是使用类定义的，随后new该类的实例，并通过该实例调用到原型上的render方法，将render返回的虚拟DOM转为真实DOM，随后渲染到页面