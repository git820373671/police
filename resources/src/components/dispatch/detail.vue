<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="detail1">
      <h3 class="title-1">{{detailData.title}}</h3>
      <div class="detail-box">{{detailData.detail}} </div>
      <div class="listE detail-listE">
        <div class="unit"><p class="left">参与单位：</p>
          <span class="badge" v-for="$span in detailData.company">{{$span}}</span>
        </div>
        <div class="unit"><p class="left">研判组织方式：</p>
          <i v-for="$i in detailData.way">{{$i}}</i>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'DispatchDetail',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '重大案件指挥调度',
          left: true
        },
        detailData: {}
      }
    },
    created: function () {
      var url = '/static/data/dispatchDetail.json'

      this.$ajax_get(url, '', function (data) {
        if (!data.success) return
        this.detailData = data.detailData
      })
    }
  }
</script>
