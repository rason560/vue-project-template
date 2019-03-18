export default {
  getScrollTop: (state) => (pageName) => {
    return state.scrollData[pageName] ? state.scrollData[pageName].scrollTop : undefined
  }
}