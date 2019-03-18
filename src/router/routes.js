const routes = [{
  path: '',
  component: () => import('@/layouts/default'),
  children: [{
    path: '',
    name: 'index',
    component: () => import('@/pages/index'),
    meta: { title: '首页', notAuth: true }
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login'),
    meta: { title: '登录', notAuth: true }
  }]
}]

export default routes