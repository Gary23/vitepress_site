# 插槽

**目录结构**

```
.
├─ src
│  ├─ pages
│  │  ├─ 01_slot_默认插槽
│  │  │  ├─ Category.vue
│  │  │  └─ Father.vue
│  │  ├─ 02_slot_具名插槽
│  │  │  ├─ Category.vue
│  │  │  └─ Father.vue
│  │  └─ 03_slot_作用域插槽
│  │     ├─ Father.vue
│  │     └─ Game.vue
│  ├─ router
│  │  └─ index.ts
├─ App.vue
└─ main.ts
```

::: details 根目录
::: code-group
<<< @/vue/vue3基础/24_插槽/App.vue
<<< @/vue/vue3基础/24_插槽/main.ts
:::

::: details pages/01_slot_默认插槽
::: code-group
<<< @/vue/vue3基础/24_插槽/pages/01_slot_默认插槽/Father.vue
<<< @/vue/vue3基础/24_插槽/pages/01_slot_默认插槽/Category.vue
:::
::: details pages/02_slot_具名插槽
::: code-group
<<< @/vue/vue3基础/24_插槽/pages/02_slot_具名插槽/Father.vue
<<< @/vue/vue3基础/24_插槽/pages/02_slot_具名插槽/Category.vue
:::
::: details pages/03_slot_作用域插槽
::: code-group
<<< @/vue/vue3基础/24_插槽/pages/03_slot_作用域插槽/Father.vue
<<< @/vue/vue3基础/24_插槽/pages/03_slot_作用域插槽/Game.vue
:::

::: details router
::: code-group
<<< @/vue/vue3基础/24_插槽/router/index.ts
:::
