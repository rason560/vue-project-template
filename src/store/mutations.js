import { localStorage } from '../assets/javascripts/webstorage'
// import { delCookie } from '../assets/javascripts/cookie'
export default {
  set_tokenid (state, tokenid) {
    if (tokenid) {
      state.tokenid = tokenid
      localStorage.set('tokenid', tokenid)
    }
  },
  set_user (state, data) {
    state.userinfo = data
    localStorage.set('userinfo', data)
    // console.log('用户资料获取成功')
  },
  logout (state) {
    localStorage.removeItem('userinfo')
    state.tokenid = null
    state.userinfo = null
    // console.log('用户登出...')
  },
  set_index (state, boolean) {
    state.isIndex = boolean
  },
  save_scrollData (state, { pageName, scrollTop}) {
    state.scrollData[pageName] = { scrollTop: scrollTop }
  },
  delete_scrollData (state, pageName) {
    delete state.scrollData[pageName]
  }
}
