# react中的事件处理

1. 通过`onXxx`属性指定事件处理函数，注意大小写
     - React使用的是自定义（合成）事件，而不是使用的原生DOM事件（原生是`onclick`  自定义的才是`onClick`）
     - React中的事件是通过事件委托方式处理的（委托给组件最外层的元素），比如代码中的`onBlur`和`onClick`都是委托给最外层div的

2. 通过`event.target`得到发生事件的DOM元素对象，`ref`可以省略，直接用事件对象`event`

::: code-group

```js
// 1. 创建类式组件
class Demo extends React.Component {
  // 创建ref容器
  demoRef = React.createRef();
  // 多个ref必须调用多次React.createRef，否则后面的会覆盖前面的
  demoRef2 = React.createRef();

  render() {
    return (
      <div>
        <input ref={ this.demoRef } type="text" />
        <button onClick={ this.showTip }>提示</button>
        <br />
        <input ref={ this.demoRef2 } type="text" onBlur={ showTip2 } />
        <span>失去焦点触发</span>
      </div>
    )
  }
  showTip = () => {
    const {current} = this.demoRef;
    alert(current.value);
  }
  showTip2 = () => {
    const {current} = this.demoRef2;
    alert(current.value);
  }
}

// 2. 渲染组件
ReactDOM.render(<Demo />, document.getElementById('test'));

```

```html
<div id="test"></div>
```

:::

