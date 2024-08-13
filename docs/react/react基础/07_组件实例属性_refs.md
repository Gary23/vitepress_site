# 组件实例属性_refs.md

## 字符串形式的refs

1. refs收集的不是虚拟dom，是虚拟dom转换后的真实dom
2. 字符串形式的ref，已经不被官方推荐，只能收集到真实dom，不能收集到虚拟dom

::: code-group

```js
// 1. 创建类式组件
class Demo extends React.Component {
  render() {
    return (
      <div>
        <input ref="input1" type="text" />
        <button onClick={ this.showTip }>点击提示</button>
        <br />
        <input ref="input2" type="text" onBlur={ this.showTip2 }/>
        <span>失去焦点提示</span>
      </div>
    )
  }
  showTip = () => {
    // refs收集的不是虚拟dom，是虚拟dom转换后的真实dom
    // 字符串形式的ref，已经不被官方推荐，因为字符串形式的ref，只能收集一个元素，而且只能收集到真实dom，不能收集到虚拟dom
    const {input1} = this.refs;
    alert(input1.value);
  }
  showTip2 = () => {
    const {input2} = this.refs;
    alert(input2.value);
  }
}

// 2. 渲染组件
ReactDOM.render(<Demo />, document.getElementById('test'));
```

```html
<div id="test"></div>
```

![input1【点击提示】按钮](/react/react基础/1722224164167.png)
![input2 失去焦点](/react/react基础/1722224164166.png)

:::


## 回调函数形式的refs

1. 回调函数的参数就是就是元素本身

::: code-group

```js
// 1. 创建类式组件
class Demo extends React.Component {
  render() {
    return (
      <div>
        {/* node就是input元素本身 */}
        <input ref={(node) => { this.input1 = node }} type="text" />
        <button onClick={ this.showTip }>点击提示</button>
        <br />
        <input ref={(node) => { this.input1 = node }} type="text" onBlur={ this.showTip2 } />
        <span>失去焦点提示</span>
      </div>
    )
  }
  showTip = () => {
    const {input1} = this;
    alert(input1.value);
  }
  showTip2 = () => {
    const {input2} = this;
    alert(input2.value);
  }
}

// 2. 渲染组件
ReactDOM.render(<Demo />, document.getElementById('test'));

```

```html
<div id="test"></div>
```

:::

## 回调refs中回调执行次数的问题

1. 内联函数的ref写法，每次触发render渲染，都会触发ref中回调函数的执行，并且是两次
2. 因为每次渲染时会创建一个新的函数实例，所以React清空旧的ref并且设置新的ref，这样就会触发两次回调函数（第一次参数是null，第二次传入真实dom）
3. 把回调函数定义成class的绑定函数的方式可以避免这个问题，不过其实无关紧要


::: code-group

```js
// 1. 创建类式组件
class Demo extends React.Component {
  state = { isOpen: true }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <h2>当前状态是{ isOpen ? '打开' : '关闭' }</h2>
        <button onClick={ this.changeOpenState }>改变当前状态</button>
        <br />
        {/*<input ref={(node) => { this.input1 = node }} type="text" />*/}
        <input ref={ this.saveInput1 } type="text" />
        <button onClick={ this.showTip }>提示</button>
      </div>
    )
  }
  changeOpenState = () => {
    this.setState({ isOpen: !this.state.isOpen }) 
  }
  saveInput1 = (node) => {
    // class的绑定函数的方式
    this.input1 = node;
  }
  showTip = () => {
    const {input1} = this;
    alert(input1.value);
  }
}

// 2. 渲染组件
ReactDOM.render(<Demo />, document.getElementById('test'));
```

```html
<div id="test"></div>
```
:::


## createRef

1. `React.createRef`调用后可以返回一个容器，容器可以存储被ref标识的元素
2. 多个ref必须调用多次`React.createRef`，否则后面的会覆盖前面的

::: code-group

```js
// 1. 创建类式组件
class Demo extends React.Component {
  // 该容器是专人专用的
  demoRef = React.createRef();
  // 多个ref必须调用多次React.createRef
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