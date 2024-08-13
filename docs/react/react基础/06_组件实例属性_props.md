# 组件实例属性_props

## props基本使用

1. 通过实例的props接收渲染组件时的传参

::: code-group

```js
// 1. 创建类式组件
class Demo extends React.Component {
  render() {
    // 从组件外部传入数据，通过props接收
    const { name, age, gender } = this.props;
    return (
      <div>
        <ul>
          <li>姓名：{ name }</li>  
          <li>性别：{ gender }</li>  
          <li>年龄：{ age }</li>  
        </ul>
      </div>
    )
  }
}

// 2. 渲染组件，传输标签属性
ReactDOM.render(<Demo name="green" age={22} gender="男" />, document.getElementById('test'));
ReactDOM.render(<Demo name="jack" age={18} gender="男" />, document.getElementById('test2'));

const p = { name: 'tim', age: 18, gender: '女' }
// {...p} 是上面那种写法的语法糖
ReactDOM.render(<Demo {...p} />, document.getElementById('test3'));
```

```html
<div id="test"></div>
<div id="test2"></div>
<div id="test3"></div>
```

:::

![示例图片](/react/react基础/1722224164165.jpg)

## 对props进行限制

1. 需要引入 [prop-types.js](./js/prop-types.js) ，js抛出全局对象`PropTypes`
2. 配置类的`propTypes`属性对props参数进行限制，配置类的`defaultProps`属性设置props的默认值

::: code-group

```js
// 1. 创建类式组件
class Demo extends React.Component {
  render() {
    const { name, age, gender } = this.props;
    // props是只读的，不能修改
    return (
      <div>
        <ul>
          <li>姓名：{ name }</li>  
          <li>年龄：{ age }</li>  
          <li>性别：{ gender }</li>  
        </ul>
      </div>
    )
  }
}
// 对props属性进行传参数据类型的限制
Demo.propTypes = {
  name: PropTypes.string.isRequired, // name必传，且必须是字符串
  gender: PropTypes.string, // gender不是必传，但是必须是字符串
  age: PropTypes.number, // age不是必传，但是必须是数值
  speak: PropTypes.func // speak不是必传，但是必须是函数( 注意是func 不是function )
}
// // 设置props参数的默认值
Demo.defaultProps = {
  gender: '男',   // 默认值男
  age: 18,      // 默认值18
}
// 2. 渲染组件
ReactDOM.render(<Demo name="green" age={22} gender="" />, document.getElementById('test'));
ReactDOM.render(<Demo name="jack" age={18} gender="男" speak={speak} />, document.getElementById('test2'));
const p = { name: 'tim', age: 18, gender: '女' }
ReactDOM.render(<Demo {...p} />, document.getElementById('test3'));

function speak() {}
```

```html
<div id="test"></div>
<div id="test2"></div>
<div id="test3"></div>
```

:::



## props简写方式

1. 增加`constructor`构造器接收props传参
2. 用`static`关键字定义限制props的`propTypes`对象和`defaultProps`对象，`static`关键字可以赋值到类的原型上，而不是类自身

::: code-group

```js
// 1. 创建类式组件
class Demo extends React.Component {
  constructor(props) {
    // 如果写了构造器，必须写super(props)，不然this.props是undefined
    // 构造器是否接收props，是否传递给super,取决于：是否希望构造器中通过this访问props，但是这种场景几乎用不到
    super(props);
    console.log(this.props);
  }
  // 使用static关键字可以赋值到Demo的原型上，而不是Demo对象自身 
  static propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    age: PropTypes.number,
    speak: PropTypes.func
  }
  static defaultProps = {
    gender: '男',
    age: 18,
  }
  render() {
    // 从组件外部传入数据，通过props接收
    const { name, age, gender } = this.props;
    return (
      <div>
        <ul>
          <li>姓名：{ name }</li>  
          <li>性别：{ age + 1 }</li>  
          <li>年龄：{ gender }</li>  
        </ul>
      </div>
    )
  }
}

// 2. 渲染组件
ReactDOM.render(<Demo name="green" age={22} gender="" />, document.getElementById('test'));
ReactDOM.render(<Demo name="jack" age={18} gender="男" speak={speak} />, document.getElementById('test2'));
const p = { name: 'tim', age: 18, gender: '女' }
ReactDOM.render(<Demo {...p} />, document.getElementById('test3'));
function speak() {}

```

```html
<div id="test"></div>
<div id="test2"></div>
<div id="test3"></div>
```

:::


## 函数式组件使用props

::: code-group

```js
function Demo(props) {
  const { name, age, gender } = props;
  // 所有传递的标签属性，都收集在函数式组件的参数上
  return (
    <div>
      <h1>姓名：{name}</h1>
      <h1>年龄：{age}</h1>
      <h1>性别：{gender}</h1>
    </div>
  )
}

Demo.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string,
  age: PropTypes.number,
}

Demo.defaultProps = {
  gender: '男',
  age: 18, 
}

// 2. 渲染组件
ReactDOM.render(<Demo name="green" age={22} gender="男" />, document.getElementById('test'));

```

```html
<div id="test"></div>
```

:::