// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import Public from './components/common/data.vue'
import axios from 'axios'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$ajax = axios
Vue.prototype.Public = Public

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    console.log(to.meta.account)
    console.log(sessionStorage.getItem('account'))
    if (sessionStorage.getItem('token') && (to.meta.account === sessionStorage.getItem('account'))) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
