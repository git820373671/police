<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="memorandum">
      <router-link to="/member/list">
        <img src="../../assets/images/icon2.png"/> 备忘录
      </router-link>
    </div>
    <footer-bar :footerData="footerData"></footer-bar>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  import FooterBar from '../common/footer'
  export default{
    name: 'memberUser',
    components: {
      FooterBar: FooterBar,
      HeaderMenu: HeaderMenu
    },
    data () {
      return {
        headerData: {
          title: '我的',
          news: true
        },
        footerData: {
          selected: 'user'
        }
      }
    }
  }
</script>
