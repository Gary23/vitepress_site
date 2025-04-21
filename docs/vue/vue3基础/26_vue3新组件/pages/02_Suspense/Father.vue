<template>
  <div class="father">
		<h3>我是Father组件</h3>
		<Suspense>
			<template v-slot:default>
				<Child />
			</template>
			<template v-slot:fallback>
				loading......
			</template>
		</Suspense>
  </div>
</template>

<script setup lang="ts" name="Father">
/**
 * Suspense 组件
 * 可以包裹一个组件，当组件加载完成后，会显示组件内容，否则显示fallback内容
 */
import Child from './Child.vue'

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>