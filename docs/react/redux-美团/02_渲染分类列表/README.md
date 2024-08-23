# 渲染分类列表

- Menu组件通过useSelector钩子获取分类数据并渲染

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

<<< @/react/redux-美团/02_渲染分类列表/App.js
<<< @/react/redux-美团/02_渲染分类列表/App.scss
<<< @/react/redux-美团/02_渲染分类列表/index.js

:::



::: details Cart组件

::: code-group 

<<< @/react/redux-美团/02_渲染分类列表/components/Cart/index.js
<<< @/react/redux-美团/02_渲染分类列表/components/Cart/index.scss

:::




::: details Count组件

::: code-group 

<<< @/react/redux-美团/02_渲染分类列表/components/Count/index.js
<<< @/react/redux-美团/02_渲染分类列表/components/Count/index.scss

:::



::: details FoodsCategory组件

::: code-group 

<<< @/react/redux-美团/02_渲染分类列表/components/FoodsCategory/index.js
<<< @/react/redux-美团/02_渲染分类列表/components/FoodsCategory/index.scss
<<< @/react/redux-美团/02_渲染分类列表/components/FoodsCategory/FoodItem/index.js [FoodItem/index.js]
<<< @/react/redux-美团/02_渲染分类列表/components/FoodsCategory/FoodItem/index.scss [FoodItem/index.scss]

:::




::: details Menu组件

::: code-group 

<<< @/react/redux-美团/02_渲染分类列表/components/Menu/index.js
<<< @/react/redux-美团/02_渲染分类列表/components/Menu/index.scss

:::



::: details NavBar组件

::: code-group 

<<< @/react/redux-美团/02_渲染分类列表/components/NavBar/index.js
<<< @/react/redux-美团/02_渲染分类列表/components/NavBar/index.scss

:::




::: details redux目录

::: code-group 

<<< @/react/redux-美团/02_渲染分类列表/store/modules/foodsStore.js
<<< @/react/redux-美团/02_渲染分类列表/store/index.js

:::

![案例](/react/redux-meituan/20240823153159.png)