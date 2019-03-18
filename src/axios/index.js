import axios from 'axios'
import qs from 'qs'
import store from '../store'
import router from '../router'
import throttle from 'lodash/throttle'
import Vue from 'vue'
import api from '../api'
import { Toast } from 'vant'
Vue.use(Toast)

// axios 配置
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = api.host

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data, {arrayFormat: 'brackets'})
    }
    if (store.state.token) {
      config.headers['Access-Token'] = `${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 410) {
      // 410 清除token信息并跳转到登录页面
      store.commit('logout')
      let redirectUrl = router.currentRoute.fullPath
      router.push({
        path: '/login',
        query: {
          redirect: redirectUrl
        }
      })
    } else if (response.status !== 200) {
      return Promise.reject(response.data)
    } else {
      return response.data
    }
    return Promise.reject(response.data)
  },
  throttle((error) => {
    if (typeof error.response !== 'undefined') {
      switch (error.response.status) {
        case 410:
          // 清除token信息并跳转到登录页面
          store.commit('logout')
          if (router.currentRoute.fullPath !== '/login') {
            let redirectUrl = router.currentRoute.fullPath
            router.push({
              path: '/login',
              query: {
                redirect: redirectUrl
              }
            })
          }
          break
      }
    }
    try {
      let errorMsg = error.response.data.message || '请求失败，请检查访问地址是否正确'
      Toast({
        message: errorMsg
      })
    } catch (e) {
      // console.log(e)
      Toast({
        message: '请求失败，请检查网络是否畅通'
      })
    }

  }, 500)
)

const ajax = (method, url, params = {}, options) => {
  let [_params, _data] = method === 'get' ? [params, ''] : ['', params]
  let _options = Object.assign({
    method: method,
    url: url,
    params: _params,
    data: _data
  }, options)
  return axios(_options)
}

const $axios = {
  get: (url, params = {}, options) => {
    return ajax('get', url, params, options)
  },
  post: (url, params = {}, options) => {
    return ajax('post', url, params, options)
  }
}

export default $axios
