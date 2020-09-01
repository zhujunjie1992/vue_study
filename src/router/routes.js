const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/index')
  }
]

export default routes