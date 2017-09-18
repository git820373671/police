<template>
  <div class="h100 bg-f2">
    <header-menu :headerData="headerData"></header-menu>
    <div class="listA">
      <ul class="">
        <li v-for="item in listData" :key="item.id">
          <router-link to="/release/detail">
          <div class="photo">
            <img :src="item.photoSrc"/>
          </div>
          <div class="information information-c">
            <h3>{{item.title}}</h3>
            <div class="detail">{{item.detail}}</div>
            <div class="state" v-if="item.state==1">通过</div>
            <div class="state text-danger" v-if="item.state==2">拒绝</div>
            <div class="detail-bottom">
              <p class="left">热度：{{item.num}}</p>
              <p class="right">{{item.time}}</p>
            </div>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="add-btn">
      <router-link to="/release/add">
        <img src="../../assets/images/add.png"/></router-link>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'ReleaseList',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '发布预警',
          left: true
        },
        listData: {}
      }
    },
    created: function () {
      var url = '/static/data/releaseList.json'
      var prams = {}
      var $this = this
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        $this.listData = data.list
      })
    }
  }
</script>
