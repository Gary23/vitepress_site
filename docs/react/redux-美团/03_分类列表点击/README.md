# 分类列表点击

- Menu组件增加点击高亮

- 增加点击切换商品列表功能


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

**App.js**

判断activeIndex与foodsList的index，渲染列表

::: details 根组件

::: code-group 

<<< @/react/redux-美团/03_分类列表点击/App.js
<<< @/react/redux-美团/03_分类列表点击/App.scss
<<< @/react/redux-美团/03_分类列表点击/index.js

:::



::: details Cart组件

::: code-group 

<<< @/react/redux-美团/03_分类列表点击/components/Cart/index.js
<<< @/react/redux-美团/03_分类列表点击/components/Cart/index.scss

:::




::: details Count组件

::: code-group 

<<< @/react/redux-美团/03_分类列表点击/components/Count/index.js
<<< @/react/redux-美团/03_分类列表点击/components/Count/index.scss

:::



::: details FoodsCategory组件

::: code-group 

<<< @/react/redux-美团/03_分类列表点击/components/FoodsCategory/index.js
<<< @/react/redux-美团/03_分类列表点击/components/FoodsCategory/index.scss
<<< @/react/redux-美团/03_分类列表点击/components/FoodsCategory/FoodItem/index.js [FoodItem/index.js]
<<< @/react/redux-美团/03_分类列表点击/components/FoodsCategory/FoodItem/index.scss [FoodItem/index.scss]

:::

**Menu组件**

- 将点击状态存入store中
- 在Menu组件判断activeIndex和当前index，修改class的值

::: details Menu组件

::: code-group 

<<< @/react/redux-美团/03_分类列表点击/components/Menu/index.js
<<< @/react/redux-美团/03_分类列表点击/components/Menu/index.scss

:::



::: details NavBar组件

::: code-group 

<<< @/react/redux-美团/03_分类列表点击/components/NavBar/index.js
<<< @/react/redux-美团/03_分类列表点击/components/NavBar/index.scss

:::


**foodsStore.js**

- 在foodsStore中记录点击状态activeIndex

::: details redux目录

::: code-group 

<<< @/react/redux-美团/03_分类列表点击/store/modules/foodsStore.js
<<< @/react/redux-美团/03_分类列表点击/store/index.js

:::

![案例](/react/redux-meituan/2024-08-23%2015.37.38.gif)