import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'
// import axios from 'axios'
// import api from '../api'
// import { Toast } from 'vant'
import { localStorage } from '../assets/javascripts/webstorage'


Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'history',
  // base: process.env.NODE_ENV === 'production' ? '/h5/' : '',
  routes
})

// 页面刷新后从本地储存中获取token和userinfo并重新赋值
let tokenid = localStorage.get('tokenid')
let userinfo = localStorage.get('userinfo')
if (tokenid) store.commit('set_tokenid', tokenid)
if (userinfo) store.commit('set_user', userinfo)

Router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.notAuth)) {
    next()
  } else if (store.state.tokenid) {
    next()
  } else {
    console.log(next)
    next({
      path: '/login',
      replace: true,
      query: {
        redirect: to.path
      }
    })
  }
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