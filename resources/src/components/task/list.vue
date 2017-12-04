<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="listD">
      <ul>
        <li v-for="item in listData" :key="item.id">
          <router-link to="/user/detail2">
            <p>指令标题：{{item.title}}</p>
            <p>下发时间：{{item.time}}</p>
            <div class="icon"><img src="../../assets/images/icon4.png"/></div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'TaskList',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '我的任务',
          left: true
        },
        listData: {}
      }
    },
    created: function () {
      console.log('this.$route.params', this.$route.params)
      var url = '/static/data/taskList.json'
      var prams = {}
      var $this = this
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        $this.listData = data.list
      })
    }
  }
</script>
