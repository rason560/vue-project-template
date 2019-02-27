import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
// import * as getters from './getters'
import mutations from './mutations'
// import actions from './actions'
// import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
  // getters,
  // actions
  // modules
})

export default store
