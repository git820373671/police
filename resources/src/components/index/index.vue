<template>
  <div class="h100 bg-f2">
    <header-menu :headerData="headerData"></header-menu>
    <div class="index">
      <div class="welcome-text"><img src="../../assets/images/hello.png"/></div>
      <ul class="floor1">
        <li>
          <p>
            <router-link to="/task/list"><img src="../../assets/images/floor1-1.png"/><span>我的任务</span></router-link>
          </p>
        </li>
        <li>
          <p>
            <router-link to="/user/case"><img src="../../assets/images/floor1-2.png"/><span>我的案件</span></router-link>
          </p>
        </li>
      </ul>
      <ul class="floor2">
        <li>
          <p>
            <router-link to="/need/list"><img src="../../assets/images/floor2-1.png"/><span>查询需求</span></router-link>
          </p>
        </li>
        <li>
          <p>
            <router-link to="/information/list"><img src="../../assets/images/floor2-2.png"/><span>信息研判</span>
            </router-link>
          </p>
        </li>
        <li>
          <p>
            <router-link to="/"><img src="../../assets/images/floor2-3.png"/><span>案件串并</span></router-link>
          </p>
        </li>
        <li>
          <p>
            <router-link to="/dispatch/list"><img src="../../assets/images/floor2-4.png"/><span>指挥调度</span>
            </router-link>
          </p>
        </li>
        <li>
          <p>
            <router-link to="/release/list"><img src="../../assets/images/floor2-5.png"/><span>预警发布</span></router-link>
          </p>
        </li>
        <li>
          <p>
            <router-link to="/control/list"><img src="../../assets/images/floor2-6.png"/><span>查缉布控</span></router-link>
          </p>
        </li>
      </ul>
    </div>
    <footer-bar :footerData="footerData"></footer-bar>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  import FooterBar from '../common/footer'
  export default{
    name: 'index',
    components: {
      FooterBar: FooterBar,
      HeaderMenu: HeaderMenu
    },
    data () {
      return {
        headerData: {
          title: '我的首页',
          left: false,
          photoSrc: '/static/data/img/userHeader.jpg',
          news: true
        },
        footerData: {
          selected: 'index'
        },
        user: {
          name: '张先生'
        }
      }
    }
  }
</script>
