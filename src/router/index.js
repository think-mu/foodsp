/*
 * @Author: huangzibin
 * @Date: 2020-03-15 22:12:40
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-03-16 10:44:55
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const CoSelect = () => import('views/company/CoSelect')
const CoInfoSelect = () => import('views/company/CoInfoSelect')
const CoInfo = () => import('views/company/CoInfo')
const BaseInfo = () => import('views/module/BaseInfo')
const CoRule = () => import('views/module/CoRule')

Vue.use(VueRouter)

const routes=[
  {
    path: '',
    redirect: '/home' 
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '食品动态监管平台 '
    }
  },
  {
    path: '/coselect',
    component: CoSelect,
    meta: {
      title: '企业选择'
    }
  },
  {
    path: '/coinfoselect',
    component: CoInfoSelect,
    meta: {
      title: '企业信息查看'
    }
  },
  {
    path: '/coinfo',
    component: CoInfo,
    meta: {
      title: '企业信息'
    }
  },
  {
    path: '/baseinfo',
    component: BaseInfo,
    meta: {
      title: '企业基础信息'
    }
  },
  {
    path: '/corule',
    component: CoRule,
    meta: {
      title: '企业基础信息'
    }
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
