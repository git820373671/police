<template>
  <div class="h100 bg-f2">
    <header-menu :headerData="headerData"></header-menu>
    <div class="listA">
      <ul class="last-border">
        <li v-for="(item,index) in listData" :key="item.id">

          <div class="photo">
            <img :src="item.photoSrc"/>
          </div>
          <div class="information">
            <router-link to="/information/detail">
              <h3>{{item.title}}</h3>
              <div class="detail">{{item.detail}}</div>
              <div class="state">{{item.state}}</div>
            </router-link>
            <div class="case m-t-5"><span>案件编号： </span>
              <p class="case-copy" v-on:click="copy()">{{item.code}} <i>拷贝</i></p></div>
          </div>

        </li>
      </ul>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'InformationList',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '信息研判',
          left: true
        },
        listData: {}
      }
    },
    created: function () {
      var url = '/static/data/informationList.json'
      var prams = {}
      var $this = this
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        $this.listData = data.list
      })
    },
    methods: {
      copy: function () {
        this.$toast({
          message: '复制成功',
          duration: 1000
        })
      }
    }
  }
</script>
