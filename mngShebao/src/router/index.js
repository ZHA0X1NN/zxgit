import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import index from '../components/index.vue'
import error from '../components/common/error.vue'
import home from '../components/admin/home.vue'
import dormitory from '../components/admin/mng-Dormitory.vue'
import WEinput from '../components/admin/mng-WEinput.vue'
import arrearage from '../components/admin/mng-arrearage.vue'
import highEle from '../components/admin/mng-highEle.vue'
import checkSleep from '../components/admin/mng-checkSleep.vue'
import checkInfo from '../components/admin/mng-checkInfo.vue'
import healthLook from '../components/admin/mng-healthLook.vue'
import healthInfo from '../components/admin/mng-healthInfo.vue'
import checkRel from '../components/admin/mng-checkDel.vue'
import water from '../components/water/water.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: login
  },
  {
    path: '/error',
    component: error
  },
  {
    path: '/index',
    redirect: '/index/home',
    meta: {
      requireAuth: true,
      account: '1'
    },
    component: index,
    children: [{
      path: '/index/home', // 主页
      meta: {
        requireAuth: true,
        account: '1'

      },
      component: home
    },
    {
      path: '/index/dormitory', // 宿舍管理
      meta: {
        requireAuth: true,
        account: '1'
      },
      component: dormitory
    },
    {
      path: '/index/WEinput', // 电费录入
      meta: {
        requireAuth: true,
        account: '1'
      },
      component: WEinput
    },
    {
      path: '/index/arrearage', // 欠费寝室
      meta: {
        requireAuth: true,
        account: '1'
      },
      component: arrearage
    },
    {
      path: '/index/highEle', // 高电量寝室
      meta: {
        requireAuth: true,
        account: '1'
      },
      component: highEle
    },
    {
      path: '/index/checkSleep', // 查寝录入
      meta: {
        requireAuth: true,
        account: '1'
      },
      component: checkSleep
    },
    {
      path: '/index/checkInfo', // 查寝详情
      meta: {
        requireAuth: true,
        account: '1'
      },
      component: checkInfo
    },
    {
      path: '/index/checkDel', // 销寝
      meta: {
        requireAuth: true,
        account: '1'
      },
      component: checkRel
    },
    {
      path: '/index/healthLook', // 宿舍卫生录入
      meta: {
        requireAuth: true,
        account: '1'
      },
      component: healthLook
    },
    {
      path: '/index/healthInfo', // 宿舍卫生信息
      meta: {
        requireAuth: true,
        account: '1'
      },
      component: healthInfo
    }

    ]
  }, {
    path: '/water', // 宿舍管理
    meta: {
      requireAuth: true,
      account: '2'
    },
    component: water
  }
  ]

})
