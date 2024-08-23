# 购物车列表

- 控制列表渲染，RTK增加showCartVisible状态和setShowCartVisible action函数

- 购物车增减逻辑实现，RTK，新增addCount、reduceCount、clearCartList三个action函数


**目录结构**

```
.
├─ components
│  ├─ Cart
│  │  ├─ index.js
│  │  └─ index.scss
│  ├─ Count
│  │  ├─ index.js
│  │  └─ index.scss
│  ├─ FoodsCategory
│  │  ├─ FoodItem
│  │  │  ├─ index.js
│  │  │  └─ index.scss
│  │  ├─ index.js
│  │  └─ index.scss
│  ├─ Menu
│  │  ├─ index.js
│  │  └─ index.scss
│  ├─ NavBar
│  │  ├─ index.js
│  │  └─ index.scss
├─ store
│  ├─ modules
│  │  ├─ foodsStore.js
│  └─ index.js
├─ App.jsx
├─ App.scss
└─ index.js
```


::: details 根组件

::: code-group 

<<< @/react/redux-美团/05_购物车列表/App.js
<<< @/react/redux-美团/05_购物车列表/App.scss
<<< @/react/redux-美团/05_购物车列表/index.js

:::

**Cart组件**

- 在需要展示和隐藏的地方调用setShowCartVisible
- 购物车列表和遮罩层根据showCartVisible判断，修改类名展示和隐藏元素
- 用cartList渲染购物车列表
- 调用addCount、reduceCount、clearCartList
- 调用addCount给购物车的项目累加count
- 所有清空和减项，需要考虑修改cartFalg和showCartVisible的状态

::: details Cart组件

::: code-group 

<<< @/react/redux-美团/05_购物车列表/components/Cart/index.js
<<< @/react/redux-美团/05_购物车列表/components/Cart/index.scss

:::




::: details Count组件

::: code-group 

<<< @/react/redux-美团/05_购物车列表/components/Count/index.js
<<< @/react/redux-美团/05_购物车列表/components/Count/index.scss

:::



::: details FoodsCategory组件

::: code-group 

<<< @/react/redux-美团/05_购物车列表/components/FoodsCategory/index.js
<<< @/react/redux-美团/05_购物车列表/components/FoodsCategory/index.scss
<<< @/react/redux-美团/05_购物车列表/components/FoodsCategory/FoodItem/index.js [FoodItem/index.js]
<<< @/react/redux-美团/05_购物车列表/components/FoodsCategory/FoodItem/index.scss [FoodItem/index.scss]

:::



::: details Menu组件

::: code-group 

<<< @/react/redux-美团/05_购物车列表/components/Menu/index.js
<<< @/react/redux-美团/05_购物车列表/components/Menu/index.scss

:::



::: details NavBar组件

::: code-group 

<<< @/react/redux-美团/05_购物车列表/components/NavBar/index.js
<<< @/react/redux-美团/05_购物车列表/components/NavBar/index.scss

:::

**foodsStore.js**

- 增加showCartVisible状态和setShowCartVisible action函数
- 新增addCount、reduceCount、clearCartList三个action函数
- reduceCount如果项目的count大于1累减，如果等于1从数组中删除该项

::: details redux目录

::: code-group 

<<< @/react/redux-美团/05_购物车列表/store/modules/foodsStore.js
<<< @/react/redux-美团/05_购物车列表/store/index.js

:::

![案例](/react/redux-meituan/2024-08-23%2017.01.22.gif)