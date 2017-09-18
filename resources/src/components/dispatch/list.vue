<template>
  <div class="h100 bg-f2">
    <header-menu :headerData="headerData"></header-menu>
    <div class="listE">
      <ul>
        <li v-for="item in listData" :key="item.id">
          <router-link to="/dispatch/detail">
          <h3 class="title">{{item.title}}</h3>
          <div class="unit"><p class="left">参与单位：</p>
            <span class="badge" v-for="$span in item.company">{{$span}}</span>
          </div>
          <div class="unit"><p class="left">研判组织方式：</p>
            <i v-for="$i in item.way">{{$i}}</i>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="add-btn">
      <router-link to="/dispatch/add">
        <img src="../../assets/images/add.png"/></router-link>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'DispatchList',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '重大案件指挥调度',
          left: true
        },
        listData: {}
      }
    },
    created: function () {
      var url = '/static/data/dispatchList.json'
      var prams = {}
      var $this = this
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        $this.listData = data.list
      })
    }
  }
</script>
