export const localStorage = {
  set: (key, data) => {
    let dataStr = JSON.stringify(data)
    window.localStorage.setItem(key, dataStr)
  },
  get: (key) => {
    let dataStr = window.localStorage.getItem(key)
    return JSON.parse(dataStr)
  },
  removeItem: (key) => {
    window.localStorage.removeItem(key)
  }
}

export const sessionStorage = {
  set: (key, data) => {
    let dataStr = JSON.stringify(data)
    window.sessionStorage.setItem(key, dataStr)
  },
  get: (key) => {
    let dataStr = window.sessionStorage.getItem(key)
    return JSON.parse(dataStr)
  },
  removeItem: (key) => {
    window.sessionStorage.removeItem(key)
  }
}
