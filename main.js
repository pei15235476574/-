// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import bus from './eventBus'
// import {fetch} from './http.js'
Vue.config.productionTip = false
// Vue.prototype.$fetch = fetch;
Vue.prototype.$http = axios;
Vue.prototype.$bus = bus;
Vue.directive('demo',{
	bind:function(el,binding,vnode){
		 var s = JSON.stringify
	  	el.style.backgroundColor= binding.value.color;
	  	el.innerHTML = binding.value.text;
	  	el.style.color = binding.value.fontColor;
	      // 'name: '       + s(binding.name) + '<br>' +
	      // 'value: '      + s(binding.value) + '<br>' +
	      // 'expression: ' + s(binding.expression) + '<br>' +
	      // 'argument: '   + s(binding.arg) + '<br>' +
	      // 'modifiers: '  + s(binding.modifiers) + '<br>' +
	      // 'vnode keys: ' + Object.keys(vnode).join(', ')
	   	
	}
})
Vue.component('anchored-heading', {
  template: ` <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="level === 6">
      <slot></slot>
    </h6>`,
  props: {
    level: {
      type: Number,
      // 必须提供字段
      required: true
    }
  }
})
Vue.component('my-component',{
	template :`<div>我是自定义组件</div>`
})


Vue.filter('capitalize',function(value){
		if(!value) return '';
		value = value.toString();
		return value.charAt(0).toUpperCase() + value.slice(1)
	})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
