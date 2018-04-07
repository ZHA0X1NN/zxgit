import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import home from '../components/Home'
import homeList from '../components/home/list.vue'
import homeMine from '../components/home/mine.vue'
import about from '../components/mine/About.vue'
import userinfo from '../components/mine/UserInfo.vue'
import ele from '../components/list/Ele.vue'
import check from "../components/list/Check.vue"
import water from '../components/list/Water.vue'
import health from '../components/list/Health.vue'
import changePW from '../components/mine/ChangePW.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login,
      meta: {
        index: 1,
      }
    },
    {
      path: '/home',
      redirect: '/home/list',
      name: 'home',
      component: home,
      meta: {
        index: 2,
        requireAuth: true
      },
      children: [{
        path: '/home/list',
        name: 'list',
        component: homeList,
        meta: {
          index: 3,
          requireAuth: true
        }
      }, {
        path: '/home/mine',
        name: 'mine',
        component: homeMine,
        meta: {
          index: 3,
          requireAuth: true
        }
      }]
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        index: 4,
        requireAuth: true
      }
    }, {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo,
      meta: {
        index: 4,
        requireAuth: true
      }
    }, {
      path: '/ele',
      name: 'ele',
      component: ele,
      meta: {
        index: 4,
        requireAuth: true
      }
    }, {
      path: '/water',
      name: 'water',
      component: water,
      meta: {
        index: 4,
        requireAuth: true
      }
    }, {
      path: '/check',
      name: 'check',
      component: check,
      meta: {
        index: 4,
        requireAuth: true
      }
    }, {
      path: '/health',
      name: 'health',
      component: health,
      meta: {
        index: 4,
        requireAuth: true
      }
    }, {
      path: '/changePW',
      name: 'changePW',
      component: changePW,
      meta: {
        index: 4,
        requireAuth: true
      }
    }
  ]
})
