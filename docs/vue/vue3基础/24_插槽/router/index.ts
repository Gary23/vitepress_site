import { createRouter, createWebHistory } from 'vue-router'
import Slot1 from '@/pages/01_slot_默认插槽/Father.vue'
import Slot2 from '@/pages/02_slot_具名插槽/Father.vue'
import Slot3 from '@/pages/03_slot_作用域插槽/Father.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/slot1',
			component: Slot1
		},
		{
			path: '/slot2',
			component: Slot2
		},
		{
			path: '/slot3',
			component: Slot3
		},
	]
})