import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueResource)

new Vue({
  render: h => h(App),
}).$mount('#app')
