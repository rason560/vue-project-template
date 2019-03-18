// const HOSTURL = process.env.VUE_APP_ISTEST ? 'https://sa.autojfun.com' : 'https://sa.banlvs.com/'

module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/mop/digitalcampus/" : "/",
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: HOSTURL,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // },
    disableHostCheck: true,
    host: '0.0.0.0'
    // port: 9000
  }
  // productionSourceMap: false
}