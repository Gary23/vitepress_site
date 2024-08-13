# DOM的Diffing算法

## 1_验证Diffing算法

::: info 案例：定时器实时更新时间
1. `componentDidMount` 钩子中定时器每秒钟更新状态值
   
2. 此时Diffing就在起作用，因为每秒钟都在渲染，每秒钟都会比对render的元素，每次比对到span标签内的元素有变化，就只会重新渲染span标签，input不会有任何变化。但是如果span内部还有标签且没有改变，则不会重新渲染内部标签
:::

::: code-group

```js
class Time extends React.Component {
  state = {
    dateString: new Date().toTimeString()
  }
  componentDidMount() {
    console.log('componentDidMount')
    window.setInterval(() => {
      this.setState({
        dateString: new Date().toTimeString()
      })
    }, 1000)
  }
  render() {
    // input元素不刷新，只有span元素会刷新
    return (
      <div>
        <input type="text" />
        <span>{ this.state.dateString }</span>
      </div>
    )
  }
}

ReactDOM.render(<Time />, document.getElementById('test'))
```

```html
<div id="test"></div>
```
:::

## 2_key的作用

虚拟DOm中key的作用
- key是虚拟DOM对象的标识，再更新显示时key起着极其重要的作用
- 当状态中的数据发生变化时，react会根据"新数据"生成新的"虚拟dom"  随后react进行“新的虚拟dom”与“旧的虚拟dom”的diff比较，比较规则如下：
  1. 旧的虚拟dom中找到了与新的虚拟dom中相同的key
     - 若虚拟dom内容没有改变，直接使用之前的真实dom（也就是复用之前的）
     - 若虚拟dom中的内容变了，则生成新的真实dom，随后替换掉页面中之前的真实dom
  2. 旧的虚拟dom中没有找到与新的虚拟dom相同的key
     - 根据数据创建新的真是dom，随后渲染到页面

::: code-group

```js
class Person extends React.Component {
  state = {
    person: [
      {
        name: '小王',
        id: '1',
        age: 20
      },
      {
        name: '小张',
        id: '2',
        age: 30
      }
    ]
  }
  addPerson = () => {
    let { person } = this.state
    person.unshift({
      id: '3',
      name: '小明',
      age: 40
    })
    this.setState({
      person
    })
  }
  render() {
    // 用index当做key的性能问题
    // 初始的虚拟dom：<li key="0">小王-20</li>    <li key="1">小张-30</li>
    // addPerson 更新数据后的虚拟dom: <li key="0">小李-40</li>  <li key="1">小王-20</li>    <li key="2">小张-30</li>
    // 此时旧的虚拟dom要和新的虚拟dom找相同的key
    // 第一次对比key都是0，内容从小王变成了小李，转为真实dom放到页面   
    // 第二次对比key都是1，内容从小张变成了小王，转为真实dom放到页面   
    // 第三次对比旧的虚拟dom没有key=2，直接生成真实dom
    // 这样页面就进行了三次真实dom更新
    // ---------------------------
    // 而如果使用id作为索引
    // 初始的虚拟dom：<li key="1">小王-20</li>    <li key="2">小张-30</li>
    // addPerson 更新数据后的虚拟dom: <li key="3">小李-40</li>  <li key="1">小王-20</li>    <li key="2">小张-30</li>
    // 此时旧的虚拟dom要和新的虚拟dom找相同的key，
    // 第一次对比旧的虚拟dom没有key=3的，直接生成真实dom，
    // 第二次和第三次对比都能找到相同key且内容相同，不需要更新真实dom
    // 这样页面就进行了一次真实dom更新


    // 用index当做key的功能问题
    // addPerson 更新数据后，发现用索引作为key的输入框和列表的对应关系是错乱的
    // 用索引作为key
    // 第一次对比key都是0，内容从小王变成了小李，input输入框内容在虚拟dom中没有，所以对于diff算法来说旧虚拟dom的input框和新虚拟dom的input框是一样的，所以直接使用旧虚拟dom的input框，这就造成了新添加的小李的输入框实际上是之前小王的输入框
    // -----------------------------
    // 用id作为key
    // 第一次对比旧的虚拟dom没有key=3，直接用新的生成真实dom，第二次和第三次对比key和内容完全一样，所以还是直接用旧的dom不需要更新真实dom
    // 所以这里最大的问题就是，用户对于可交互的真实dom的值做了改变，不会更新到虚拟dom
    return (
      <div>
        <h2>用index当做key</h2>
        <ul>
          {
            this.state.person.map((item, index) => {
              return <li key={ index }>{ item.name }-{ item.age }<input type="text" /></li>
            })
          }
        </ul>
        <br/>
        <br/>
        <h2>用id当做key</h2>
        <ul>
          {
            this.state.person.map((item) => {
              return <li key={ item.id }>{ item.name }-{ item.age }<input type="text" /></li>
            })
          }
        </ul>
        <br/>
        <button onClick={ this.addPerson }>增加一个人员</button>
      </div>
    )
  }
}

ReactDOM.render(<Person />, document.getElementById('test'))
```
```html
<div id="test"></div>
```

:::

![示例1](/react/react基础/1722224164176.png)
![示例2](/react/react基础/1722224164177.png)

::: warning   综上所述
- 用index作为key可能产生的问题
  1. 若对数据进行逆序添加、逆序删除等破坏顺序的操作，会产生没有必要的真实dom操作，功能没问题就是效率有问题
  2. 如果结构中还包含交互类的dom(比如input)，会产生错误DOM更新，功能会有问题
  3. 注意：如果不存在对数据的逆序添加、逆序删除等破坏操作，仅用于渲染列表用于展示，用index作为key是没有问题的

- 开发中如何选择key?
  1. 最好使用每条数据的唯一标识作为key，
  2. 如果确定只是简单的展示数据，用index也可以
:::