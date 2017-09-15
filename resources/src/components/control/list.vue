<template>
  <div>
    <header-menu :headerData="headerData"></header-menu>
    <div class="listA">
      <ul>
        <li v-for="item in listData" :key="item.id">
          <div class="photo">
            <img :src="item.photoSrc"/>
          </div>
          <div class="information">
            <h3>{{item.title}}</h3>
            <div class="state">{{item.state}}</div>
            <div class="case m-t-5"><span>案件编号： </span>
              <p class="case-copy">{{item.code}} <i>拷贝</i></p></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="add-btn">
      <router-link to="/control/add">
        <img src="../../assets/images/add.png"/></router-link>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'ControlList',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '查缉布控',
          left: true
        },
        listData: {}
      }
    },
    created: function () {
      var url = '/static/data/controlList.json'
      var prams = {}
      var $this = this
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        $this.listData = data.list
      })
    }
  }
</script>
