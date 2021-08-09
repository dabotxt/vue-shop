import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/home'
import Welcome from '../components/welcome'
import Users from '../components/user/users'
import Father from '../components/father'
import Fuzujian from '../components/fuzujian'
import Ceshi from '../components/ceshi'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, name: 'login'},
    { 
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome, name: 'welcome'},
        { path: '/users', component: Users, name: 'users'},
        { path: '/users2', component: Father, name: 'users2', meta: {keepAlive: false}},
        { path: '/users3', component: Fuzujian, name: 'users3', meta: {keepAlive: true}},
        { path: '/users4', component: Ceshi, name: 'user4', meta: {keepAlive: false}}
        ] 
    }
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
