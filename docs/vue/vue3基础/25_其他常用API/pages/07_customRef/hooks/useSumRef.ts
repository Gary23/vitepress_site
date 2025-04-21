/**
 * @description 自定义ref
 */

import { customRef } from 'vue'
let initValue = 0
let timer
let sum2 = customRef((track, trigger) => {
	return {
		get() {
			console.log('get')
			// track() 是用来追踪依赖的
			track()
			return initValue
		},
		set(value) {
			clearTimeout(timer)
			timer = setTimeout(() => {
				console.log('set', value)
				initValue = value
				// trigger() 是用来触发更新的
				trigger()
			}, 3000)
		}
	}
})
export default sum2