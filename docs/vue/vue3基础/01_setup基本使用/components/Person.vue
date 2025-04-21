<template>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <button @click="openTel">查看联系方式</button>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">修改年龄</button>
</template>

<script lang="ts">
export default {
  name: 'Person',
  setup() {
    // 写data数据，非响应式数据
    let name = '张三'
    let age = 18
    let tel = '123456789'

    // 写methods方法  setup里this是undefined
    function openTel() {
      alert(tel)
    }
    function changeName() {
      // 点击按钮后修改后的内容不会同步到view中，因为是非响应式数据
      name = '李四'
    }
    function changeAge() {
      age = 20
    }
    // 将数据和方法返回出去，在template中可以直接使用
    return {name, age, openTel, changeName, changeAge}
  }
}
</script>

<style scoped>

</style>
