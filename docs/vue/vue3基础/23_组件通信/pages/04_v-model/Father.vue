<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <h4>{{ username2 }}</h4>
    <h4>{{ password2 }}</h4>
    <!-- 
    v-model用在html标签上，model本质上就是value属性和input事件的语法糖
    <input type="text" v-model="username">
    <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> 
    -->


    <!-- 在组件使用v-model -->
    <AtguiguInput :value="username" @update:value="username = $event" :mima="password" @update:mima="password = $event"/>
    <br>
    <br>
    <!-- 两种写法一样 -->
    <AtguiguInput v-model:value="username2" v-model:mima="password2"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import AtguiguInput from './AtguiguInput.vue'
  // 数据
  let username = ref('zhansan')
  let password = ref('123')
  let username2 = ref('lisi')
  let password2 = ref('456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
