import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.directive('click-outside', {
	mounted(el, binding) {
	  el.clickOutsideEvent = function(event: MouseEvent) {
		if (!(el === event.target || el.contains(event.target) || (event.target as HTMLElement).classList.contains('excepct-outside-click'))) {
		  binding.value(event);
		}
	  };
	  
	  document.addEventListener('click', el.clickOutsideEvent)
	},
	unmounted(el) {
	  document.removeEventListener('click', el.clickOutsideEvent)
	},
  });
app.use(createPinia()).mount('#app')