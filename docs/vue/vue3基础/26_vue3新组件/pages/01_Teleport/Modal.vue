<template>
  <button @click="isShow = true">展示弹窗</button>
  <Teleport to="body">
    <div class="modal-wrap" v-show="isShow">
      <h3>我是弹窗标题</h3>
      <p>我是弹窗内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts" name="Modal">
/**
 * Teleport组件：用于将组件的内容移动到指定的DOM元素中
 * 注意：Teleport组件只能用于组件的内容，不能用于组件的标签
 */

import { ref } from 'vue'
let isShow = ref(false)
</script>

<style scoped>
.modal-wrap {
  width: 200px;
  height: 200px;
  background: #d3d3d3;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px;
  text-align: center;

  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}
</style>