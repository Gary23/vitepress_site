import {createApp} from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'
// 创建应用
const app = createApp(App)
// 全局注册组件
app.component('Hello', Hello)
// 全局注册属性
app.config.globalProperties.x = 123
// 全局注册类型声明
declare module 'vue' {
  // 声明全局属性的类型
  interface ComponentCustomProperties {
     x: number
  }
}
// 全局注册指令
app.directive('beauty', (element, binding) => {
  console.log(binding)
  element.innerText += Number(binding.value)
  element.style.color = 'red'
})

// 挂载应用
app.mount('#app')