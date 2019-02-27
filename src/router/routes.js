const routes = [{
  path: '',
  component: () => import('@/layouts/default'),
  children: [{
    path: '',
    name: 'index',
    component: () => import('@/pages/index'),
    meta: { title: '首页' }
  }]
}]

export default routes