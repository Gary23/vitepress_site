# 添加购物车实现

- RTK增加cartList和cartFlag状态的管理，增加setCartList的action函数
- Cart组件增加统计区域功能

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

<<< @/react/redux-美团/04_添加购物车实现/App.js
<<< @/react/redux-美团/04_添加购物车实现/App.scss
<<< @/react/redux-美团/04_添加购物车实现/index.js

:::

**Cart组件**

- 获取cartList和cartFlag
- 用cartList的length更新购物车数量
- 用cartList遍历计算总价
- 用cartFlag判断类名展示高亮效果

::: details Cart组件

::: code-group 

<<< @/react/redux-美团/04_添加购物车实现/components/Cart/index.js
<<< @/react/redux-美团/04_添加购物车实现/components/Cart/index.scss

:::




::: details Count组件

::: code-group 

<<< @/react/redux-美团/04_添加购物车实现/components/Count/index.js
<<< @/react/redux-美团/04_添加购物车实现/components/Count/index.scss

:::



::: details FoodsCategory组件

::: code-group 

<<< @/react/redux-美团/04_添加购物车实现/components/FoodsCategory/index.js
<<< @/react/redux-美团/04_添加购物车实现/components/FoodsCategory/index.scss
<<< @/react/redux-美团/04_添加购物车实现/components/FoodsCategory/FoodItem/index.js [FoodItem/index.js]
<<< @/react/redux-美团/04_添加购物车实现/components/FoodsCategory/FoodItem/index.scss [FoodItem/index.scss]

:::



::: details Menu组件

::: code-group 

<<< @/react/redux-美团/04_添加购物车实现/components/Menu/index.js
<<< @/react/redux-美团/04_添加购物车实现/components/Menu/index.scss

:::



::: details NavBar组件

::: code-group 

<<< @/react/redux-美团/04_添加购物车实现/components/NavBar/index.js
<<< @/react/redux-美团/04_添加购物车实现/components/NavBar/index.scss

:::

**foodsStore.js**

- RTK增加cartList和cartFlag状态的管理，增加setCartList的action函数
- setCartList的功能1：cartFlag默认为false，只要添加购物车，cartFlag状态就为true
- setCartList的功能2：判断setCartList是否包含当前添加项，已包含只更新count，未包含追加

::: details redux目录

::: code-group 

<<< @/react/redux-美团/04_添加购物车实现/store/modules/foodsStore.js
<<< @/react/redux-美团/04_添加购物车实现/store/index.js

:::

![案例](/react/redux-meituan/2024-08-23%2016.26.57.gif)