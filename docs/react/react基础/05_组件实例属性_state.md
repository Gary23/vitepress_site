# 组件实例属性_state

## state

1. 使用state需要写构造器，默认state是null
2. 更新state状态要使用`setState`方法，不能直接赋值，调用后会触发render

::: code-group
```js
// 1. 创建类式组件
class Demo extends React.Component {

  // 使用state需要写构造器，默认state是null
  constructor(props) {
    // 调用父类的构造器
    super(props);
    // 初始化状态
    this.state = {
      isOpen: true,
      applianceName: '电视机'
    }
    // 把changeOpenState从Demo的原型对象赋值到实例对象自身上，改变this指向
    this.changeOpenState = this.changeOpenState.bind(this)
  }
  render() {
    // 读取状态
    const {isOpen, applianceName} = this.state;
    return <h1 id="title" onClick={this.changeOpenState}>我{ isOpen ? '打开' : '关闭' }了{applianceName}的开关</h1>
  }
  changeOpenState() { 
    console.log(this);
    //  状态必须通过setState进行更新，并且更新是一种合并，不是直接替换state对象，调用后会触发render
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

// 2. 渲染组件
ReactDOM.render(<Demo/>, document.getElementById('test'));

```
```html
<div id="test"></div>
```
:::

::: tip 构造器调用几次？
1次-----只有在ReactDOM.render1次
:::

::: tip render调用几次？  
1+n次-----初始化是1次，setState是n次
:::

::: warning 关于changeOpenState方法的this指向

changeOpenState默认放在Demo的原型对象上，直接调用changeOpenState方法this指向undefined（类中的方法局部开启了严格模式）

通过Demo实例对象调用changeOpenState方法，this才是指向实例对象，

解决方法：
在构造器中绑定this：`this.changeOpenState = this.changeOpenState.bind(this)`。把changeOpenState从Demo的原型对象上拿下来，放到实例对象自身上，调用的就是实例自身上的changeOpenState方法，并不是原型上的方法
:::


## state简写方式

1. 不需要写构造器，修改了changeOpenState和state
2. 类中可以直接写赋值语句，直接赋值后的属性会天机到实例对象上

::: code-group
```js
// 1. 创建类式组件
class Demo extends React.Component {
  // 初始化状态
  // 类中可以直接写赋值语句，如下代码会给Demo的实例对象添加一个state属性
  state = {
    isOpen: true,
    applianceName: '电视机'
  }
  render() {
    // 读取状态 
    const {isOpen, applianceName} = this.state;
    return <h1 id="title" onClick={this.changeOpenState}>我{ isOpen ? '打开' : '关闭' }了{applianceName}的开关</h1>
  }
  // function改为箭头函数，改为赋值语句就把方法放在实例自身了，this就可以指向实例对象了，因为箭头函数的this指向定义时所在的对象
  changeOpenState = () => { 
    console.log(this);
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

// 2. 渲染组件
ReactDOM.render(<Demo/>, document.getElementById('test'));
```
```html
<div id="test"></div>
```
:::

::: warning 简写后的changeOpenState方法的this指向

changeOpenState改为箭头函数，并且改为赋值语句，就把方法放在实例自身了，this就可以指向实例对象了，因为箭头函数的this指向定义时所在的对象

:::