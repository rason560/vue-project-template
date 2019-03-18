export default {
  // setUser ({commit}, data) {
  //   commit('set_user', data)
  // },
  saveScroll ({commit}, object) {
    commit('save_scrollData', object)
  },
  deleteScroll ({commit}, pageName) {
    commit('delete_scrollData', pageName)
  }
}