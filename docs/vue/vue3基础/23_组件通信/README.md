# 组件通信

**目录结构**

```
.
├─ src
│  ├─ pages
│  │  ├─ 01_props
│  │  │  ├─ Child.vue
│  │  │  └─ Father.vue
│  │  ├─ 02_custom-event
│  │  │  ├─ Child.vue
│  │  │  └─ Father.vue
│  │  ├─ 03_mitt
│  │  │  ├─ Child1.vue
│  │  │  ├─ Child2.vue
│  │  │  └─ Father.vue
│  │  ├─ 04_v-model
│  │  │  ├─ AtguiguInput.vue
│  │  │  └─ Father.vue
│  │  ├─ 05_$attrs
│  │  │  ├─ Child.vue
│  │  │  ├─ Father.vue
│  │  │  └─ GrandChild.vue
│  │  ├─ 06_$refs-$parent
│  │  │  ├─ Child1.vue
│  │  │  ├─ Child2.vue
│  │  │  └─ Father.vue
│  │  ├─ 07_provide-inject
│  │  │  ├─ Child.vue
│  │  │  ├─ Father.vue
│  │  │  └─ GrandChild.vue
│  ├─ router
│  │  └─ index.ts
│  ├─ utils
│  │  └─ emitter.ts
├─ App.vue
└─ main.ts
```

::: details 根目录
::: code-group
<<< @/vue/vue3基础/23_组件通信/App.vue
<<< @/vue/vue3基础/23_组件通信/main.ts
:::

::: details pages/01_props
::: code-group
<<< @/vue/vue3基础/23_组件通信/pages/01_props/Father.vue
<<< @/vue/vue3基础/23_组件通信/pages/01_props/Child.vue
:::
::: details pages/02_custom-event
::: code-group
<<< @/vue/vue3基础/23_组件通信/pages/02_custom-event/Father.vue
<<< @/vue/vue3基础/23_组件通信/pages/02_custom-event/Child.vue
:::
::: details pages/03_mitt
::: code-group
<<< @/vue/vue3基础/23_组件通信/pages/03_mitt/Father.vue
<<< @/vue/vue3基础/23_组件通信/pages/03_mitt/Child1.vue
<<< @/vue/vue3基础/23_组件通信/pages/03_mitt/Child2.vue
:::
::: details pages/04_v-model
::: code-group
<<< @/vue/vue3基础/23_组件通信/pages/04_v-model/Father.vue
<<< @/vue/vue3基础/23_组件通信/pages/04_v-model/AtguiguInput.vue
:::
::: details pages/05_$attrs
::: code-group
<<< @/vue/vue3基础/23_组件通信/pages/05_$attrs/Father.vue
<<< @/vue/vue3基础/23_组件通信/pages/05_$attrs/Child.vue
<<< @/vue/vue3基础/23_组件通信/pages/05_$attrs/GrandChild.vue
:::
::: details pages/06_$refs-$parent
::: code-group
<<< @/vue/vue3基础/23_组件通信/pages/06_$refs-$parent/Father.vue
<<< @/vue/vue3基础/23_组件通信/pages/06_$refs-$parent/Child1.vue
<<< @/vue/vue3基础/23_组件通信/pages/06_$refs-$parent/Child2.vue
:::
::: details pages/07_provide-inject
::: code-group
<<< @/vue/vue3基础/23_组件通信/pages/07_provide-inject/Father.vue
<<< @/vue/vue3基础/23_组件通信/pages/07_provide-inject/Child.vue
<<< @/vue/vue3基础/23_组件通信/pages/07_provide-inject/GrandChild.vue
:::

::: details router
::: code-group
<<< @/vue/vue3基础/23_组件通信/router/index.ts
:::

::: details utils
::: code-group
<<< @/vue/vue3基础/23_组件通信/utils/emitter.ts
:::