<template>
  <div class="h100 bg-f2">
    <header-menu :headerData="headerData"></header-menu>
    <div class="listB">
      <ul>
        <li v-for="item in listData" :key="item.id">
          <router-link to="/need/detail">
            <div class="photo">
              <img :src="item.photoSrc"/>
            </div>
            <div class="information">
              <h3>案件信息：{{item.title}}</h3>
              <div class="detail">发起人：{{item.name}}</div>
              <div class="state">{{item.state}}</div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="add-btn">
      <router-link to="/need/add">
        <img src="../../assets/images/add.png"/></router-link>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'NeedList',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '查询需求',
          left: true
        },
        listData: {}
      }
    },
    created: function () {
      var url = '/static/data/needList.json'
      var prams = {}
      var $this = this
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        $this.listData = data.list
      })
    }
  }
</script>
