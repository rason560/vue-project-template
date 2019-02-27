// 设置cookies
export const setCookie = function (name, value, days = 7) {
  // 默认过期时间：1天
  let dataStr = JSON.stringify(value)
  let exp = new Date()
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000) // Days * 24 * 60 * 60 * 1000
  document.cookie = name + '=' + escape(dataStr) + ';expires=' + exp.toGMTString() + '; path=/'
}

// 读取cookies
export const getCookie = function (name) {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) {
    let dataStr = unescape(arr[2])
    return JSON.parse(dataStr)
  } else {
    return null
  }
}

// 删除cookies
export const delCookie = function (name) {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}
