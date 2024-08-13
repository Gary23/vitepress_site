# react中收集表单数据

## 1_非受控组件

1. 页面中输入类的dom，是现用现取就是非受控类组件，（不用state来控制，直接用ref来获取dom元素的值）

::: code-group

```js
// 1. 创建类式组件
class Demo extends React.Component {
  render() {
    return (
      <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
        用户名：<input ref={c => this.username = c} type="text" name="username" />
        密码：<input ref={c => this.password = c} type="password" name="password" />  
        <button>登陆</button>
      </form>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();   // 阻止默认事件（表单提交）
    const { username, password } = this;
    alert(`用户名：${username.value} 密码：${password.value}`);
  }
}

// 2. 渲染组件
ReactDOM.render(<Demo />, document.getElementById('test'));
```

```html
<div id="test"></div>
```

:::

## 2_受控组件

1. 页面中输入类的dom，随着输入把值先存到状态里，需要用的时候直接从状态里取值，就是受控组件
2. 因为react官网写过请勿过度使用ref  所以更推荐受控组件的写法

::: code-group

```js
// 1. 创建类式组件
class Demo extends React.Component {
  // 初始化状态
  state = {
    username: '',
    password: '',
  }
  render() {
    return (
      <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
        用户名：<input onChange={ this.saveUsername } type="text" name="username" />
        密码：<input onChange={ this.savePassword } type="password" name="password" />  
        <button>登陆</button>
      </form>
    )
  }
  saveUsername = (event) => {
    // 存在状态里
    this.setState({
      username: event.target.value
    })
  }

  savePassword = (event) => {
    // 存在状态里
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();   // 阻止默认事件（表单提交）
    const { username, password } = this.state;
    alert(`用户名：${username} 密码：${password}`);
  }
}

// 2. 渲染组件
ReactDOM.render(<Demo />, document.getElementById('test'));
```

```html
<div id="test"></div>
```

:::