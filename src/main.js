import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import router from './router'
import axios from './axios' 
import { Button } from 'vant'
import 'normalize.css'
import './assets/stylus/theme.styl'
import './assets/stylus/global.styl'

Vue.use(VueRouter)

const vantComponents = { Button }
Object.keys(vantComponents).forEach(key => {
  Vue.use(vantComponents[key])
})

Vue.prototype.$axios = axios
Vue.prototype.$store = store

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
