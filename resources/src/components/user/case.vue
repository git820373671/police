<template>
  <div class="h100 bg-f2">
    <header-menu :headerData="headerData"></header-menu>
    <div class="listA">
      <ul class="last-border">
        <li v-for="item in listData" :key="item.id">

          <div class="photo">
            <img :src="item.photoSrc"/>
          </div>
          <div class="information information-b">
            <router-link :to="{name:'UserDetail', params: {id:'item.id'}}">
              <h3>{{item.title}}</h3>
              <div class="detail">{{item.detail}}</div>
              <div class="state">{{item.state}}</div>
              <div class="name m-t-5">发起人：{{item.name}}</div>
            </router-link>
            <div class="case m-t-5">
              <p class="case-copy"  v-on:click="copy()">{{item.code}} <i>拷贝</i></p>
              <span>案件编号： </span>
            </div>
          </div>

        </li>
      </ul>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'UserCase',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '我的案件',
          left: true
        },
        listData: {}
      }
    },
    created: function () {
      var url = '/static/data/caseList.json'
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
