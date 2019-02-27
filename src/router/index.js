import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'history',
  // base: process.env.NODE_ENV === 'production' ? '/h5/' : '',
  routes
})

Router.beforeResolve((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else if (document.title !== 'vant-template') {
    document.title = 'vant-template'
  }
  next()
})

export default Router