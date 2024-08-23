# 渲染商品列表

- 创建整套foodsStore的redux流程，使用@reduxjs/toolkit

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

**index.js**

- 在src/index.js根目录注入store

**App.js**

- 引入fetchFoodList的action函数，使用useSelector, useDispatch钩子获取和展示数据，

::: details 根组件

::: code-group 

<<< @/react/redux-美团/01_渲染商品列表/App.js
<<< @/react/redux-美团/01_渲染商品列表/App.scss
<<< @/react/redux-美团/01_渲染商品列表/index.js

:::



::: details Cart组件

::: code-group 

<<< @/react/redux-美团/01_渲染商品列表/components/Cart/index.js
<<< @/react/redux-美团/01_渲染商品列表/components/Cart/index.scss

:::




::: details Count组件

::: code-group 

<<< @/react/redux-美团/01_渲染商品列表/components/Count/index.js
<<< @/react/redux-美团/01_渲染商品列表/components/Count/index.scss

:::



::: details FoodsCategory组件

::: code-group 

<<< @/react/redux-美团/01_渲染商品列表/components/FoodsCategory/index.js
<<< @/react/redux-美团/01_渲染商品列表/components/FoodsCategory/index.scss
<<< @/react/redux-美团/01_渲染商品列表/components/FoodsCategory/FoodItem/index.js [FoodItem/index.js]
<<< @/react/redux-美团/01_渲染商品列表/components/FoodsCategory/FoodItem/index.scss [FoodItem/index.scss]

:::




::: details Menu组件

::: code-group 

<<< @/react/redux-美团/01_渲染商品列表/components/Menu/index.js
<<< @/react/redux-美团/01_渲染商品列表/components/Menu/index.scss

:::



::: details NavBar组件

::: code-group 

<<< @/react/redux-美团/01_渲染商品列表/components/NavBar/index.js
<<< @/react/redux-美团/01_渲染商品列表/components/NavBar/index.scss

:::

**store**

- 创建modules/foodsStore.js，创建foods的Store对象并导出reducer和异步函数
- 创建store/index.js，组合foodsStore并导出一个store对象

::: details store目录

::: code-group 

<<< @/react/redux-美团/01_渲染商品列表/store/modules/foodsStore.js
<<< @/react/redux-美团/01_渲染商品列表/store/index.js

:::

![案例](/react/redux-meituan/20240823151945.png)