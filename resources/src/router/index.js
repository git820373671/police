import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import '../assets/script/layout.js'
import '../assets/css/style.css'
import Index from '../components/index/index.vue'
// 查询需求
import NeedList from '../components/need/list.vue'
import NeedAdd from '../components/need/add.vue'
import NeedDetail from '../components/need/detail.vue'
// 查缉布控
import ControlList from '../components/control/list.vue'
import ControlAdd from '../components/control/add.vue'
// 发布预警
import ReleaseList from '../components/release/list.vue'
import ReleaseAdd from '../components/release/add.vue'
import ReleaseDetail from '../components/release/detail.vue'
// 信息研判
import InformationList from '../components/information/list.vue'
import InformationAdd from '../components/information/add.vue'
import InformationDetail from '../components/information/detail.vue'
import InformationDetail2 from '../components/information/detail2.vue'
// 我的
// 我的案件
import UserCase from '../components/user/case.vue'
import UserAdd from '../components/user/add.vue'
import UserDetail from '../components/user/detail.vue'
import UserDetail2 from '../components/user/detail2.vue'
// 中心我的
import MemberUser from '../components/member/user.vue'
import MemberList from '../components/member/list.vue'
import MemberAdd from '../components/member/add.vue'
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
      path: '/need/add',
      name: 'NeedAdd',
      component: NeedAdd
    },
    {
      path: '/need/list',
      name: 'NeedList',
      component: NeedList
    },
    {
      path: '/need/detail',
      name: 'NeedDetail',
      component: NeedDetail
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
      path: '/release/detail',
      name: 'ReleaseDetail',
      component: ReleaseDetail
    },
    {
      path: '/information/list',
      name: 'InformationList',
      component: InformationList
    },
    {
      path: '/information/add',
      name: 'InformationAdd',
      component: InformationAdd
    },
    {
      path: '/information/detail',
      name: 'InformationDetail',
      component: InformationDetail
    },
    {
      path: '/information/detail2',
      name: 'InformationDetail2',
      component: InformationDetail2
    },
    {
      path: '/user/case',
      name: 'UserCase',
      component: UserCase
    },
    {
      path: '/user/add',
      name: 'UserAdd',
      component: UserAdd
    },
    {
      path: '/user/detail',
      name: 'UserDetail',
      component: UserDetail
    },
    {
      path: '/user/detail2',
      name: 'UserDetail2',
      component: UserDetail2
    },
    {
      path: '/member/user',
      name: 'MemberUser',
      component: MemberUser
    },
    {
      path: '/member/list',
      name: 'MemberList',
      component: MemberList
    },
    {
      path: '/member/add',
      name: 'MemberAdd',
      component: MemberAdd
    }
  ]
})
