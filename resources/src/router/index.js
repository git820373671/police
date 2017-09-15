import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import '../assets/script/layout.js'
import '../assets/css/style.css'
import Index from '../components/index/index.vue'
// 查缉布控
import ControlList from '../components/control/list.vue'
import ControlAdd from '../components/control/add.vue'
// 发布预警
import ReleaseList from '../components/release/list.vue'
import ReleaseAdd from '../components/release/add.vue'
// 信息研判
import InformationList from '../components/information/list.vue'
// 我的
// 我的案件
import UserCase from '../components/user/case.vue'
Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/control/list',
      name: 'ControlList',
      component: ControlList
    },
    {
      path: '/control/add',
      name: 'ControlAdd',
      component: ControlAdd
    },
    {
      path: '/release/list',
      name: 'ReleaseList',
      component: ReleaseList
    },
    {
      path: '/release/add',
      name: 'ReleaseAdd',
      component: ReleaseAdd
    },
    {
      path: '/information/list',
      name: 'InformationList',
      component: InformationList
    },
    {
      path: '/user/case',
      name: 'UserCase',
      component: UserCase
    }
  ]
})
