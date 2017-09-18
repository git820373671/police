<template>
  <div class="h100 bg-f2">
    <header-menu :headerData="headerData"></header-menu>
    <div class="listC">
      <ul>
        <li v-for="item in listData" :key="item.id">
          <div class="time">
           {{item.time}}
          </div>
          <div class="information">
            <h3>{{item.title}}</h3>
            <div class="detail">{{item.detail}}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="add-btn">
      <router-link to="/member/add">
        <img src="../../assets/images/add.png"/></router-link>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'MemberList',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '备忘录',
          left: true
        },
        listData: {}
      }
    },
    created: function () {
      var url = '/static/data/memberList.json'
      var prams = {}
      var $this = this
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        $this.listData = data.list
      })
    }
  }
</script>
