<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="detail1">
      <h3 class="title-1">{{detailData.title}}</h3>
      <div class="detail-box" style="min-height: 200px">{{detailData.detail}} </div>
    </div>

  </div>
</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'ReleaseDetail',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '发布预警',
          left: true
        },
        detailData: {}
      }
    },
    created: function () {
      var url = '/static/data/releaseDetail.json'

      this.$ajax_get(url, '', function (data) {
        if (!data.success) return
        this.detailData = data.detailData
      })
    }
  }
</script>
