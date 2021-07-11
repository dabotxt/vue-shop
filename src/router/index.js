import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/home'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login},
    { path: '/home', component: Home}
  ]
})

router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 来自哪个路径
  //next 允许访问将要访问的路径
  if (to.path === '/login') return next()
  //获取token
  const tokenstr = sessionStorage.getItem('token')
  if (!tokenstr) return next('/login')
  next()
})
export default router
