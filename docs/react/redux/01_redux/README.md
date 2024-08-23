# redux

## 使用场景

专门用于状态管理的JS库，不是react的插件，仅仅是名字和react有点像
可以用在react vue angular  但是基本是与react配合使用，因为vue有vuex
作用：集中式管理react应用中多个组件共享的状态

场景：
1. 某个组件的状态，需要让其他组件随时可以获取到（共享）
2. 一个组件需要改变另一个组件的状态（通信）

## 三个核心概念

1. `action`
   - 一个动作对象，用来描述想怎么改数据，在某些场景也可以是一个函数类型
   - 包含两个属性
    `type` 标识属性，值为字符串
    `data` 数据属性 值是任意类型

2. `reducer`
   - 一个函数，用于初始化状态，加工状态，根据`action`对象的描述生成一个新的状态数据
   - 加工时，根据旧的`state`和`action`，产生新的`state`的纯函数

3. `store`
   - 一个对象，将`state` `action` `reducer`联系在一起的对象
   - 使用`createStore`函数传入`reducer`函数，创建一个`store`
   - `store`的`subscribe`方法订阅数据变化
   - `store`的`dispatch`提交`action`对象触发`reducer`状态数据变化
   - `store`的`getState`方法获取状态数据更新到视图