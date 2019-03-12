import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
// import * as getters from './getters'
// import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions
  // getters,
  // modules
})

export default store
