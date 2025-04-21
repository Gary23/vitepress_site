<template>
  <div class="father">
		<div>{{ car1 }}</div>
		<button @click="changePrice1">car1价格加10</button>
		<hr>
		<div>{{ car2 }}</div>
		<button @click="changePrice2">car2价格加10</button>
	</div>
</template>

<script setup lang="ts" name="Father">
	/**
	 * markRaw 是用来标记一个对象为不可响应式的，即这个对象不会被 Vue 实例的响应式系统所跟踪。
	 * 这意味着对这个对象的任何修改都不会触发 Vue 的响应式更新。
	 * 通常，Vue 会自动将一个对象及其所有子对象都标记为响应式的，除非使用 markRaw 来标记。
	 */

	import { reactive, markRaw } from 'vue'

	let car1 = {
		brand: 'BMW',
		price: 100
	}
	car1 = markRaw(car1)
	let car2 = reactive(car1)

	function changePrice1() {
		car1.price += 10
	}

	function changePrice2() {
		car2.price += 10
	}

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>