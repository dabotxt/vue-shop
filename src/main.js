import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from "axios";
// import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
//导入全局样式表
import './assets/css/global.css'
import animated from 'animate.css'
Vue.prototype.$axios = axios
Vue.use(animated)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
