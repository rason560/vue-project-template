console.log(process.env)
const HOSTURL = process.env.VUE_APP_ISTEST === 'true' ? 'https://sa.autojfun.com' : 'https://sa.banlvs.com'

export const apis = {
  host: HOSTURL
}

export default apis