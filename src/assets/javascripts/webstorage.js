export const localStorage = {
  set: (key, data) => {
    let dataStr = JSON.stringify(data)
    window.localStorage.setItem(key, dataStr)
  },
  get: (key) => {
    let dataStr = window.localStorage.getItem(key)
    if (!dataStr) return false
    try {
      return JSON.parse(dataStr)
    } catch(e) {
      console.log(e, dataStr)
      return false
    }
  },
  removeItem: (key) => {
    window.localStorage.removeItem(key)
  }
}

export const sessionStorage = {
  set: (key, data) => {
    let dataStr = JSON.stringify(data)
    if (!dataStr) return false
    try {
      return JSON.parse(dataStr)
    } catch(e) {
      console.log(e, dataStr)
      return false
    }
  },
  get: (key) => {
    let dataStr = window.sessionStorage.getItem(key)
    return dataStr ? JSON.parse(dataStr) : null
  },
  removeItem: (key) => {
    window.sessionStorage.removeItem(key)
  }
}
