<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="detail1">
      <ul class="detail-list last-bor">
        <li>案件标题：{{detailData.title}}</li>
        <li>案件编号：{{detailData.code}}</li>
        <li>{{detailData.detail}}</li>
      </ul>
    </div>
    <div class="sub-btn sub-btns">
      <mt-button type="primary" size="large">拒绝</mt-button>
      <mt-button type="primary" size="large">下达指令</mt-button>
    </div>
  </div>
</template>
<script>
  import HeaderMenu from '../common/header'
  import Uploader from '../common/uploader'
  export default{
    name: 'InformationDetail',
    components: {
      HeaderMenu: HeaderMenu,
      Uploader: Uploader
    },
    data: function () {
      return {
        headerData: {
          title: '信息研判',
          left: true
        },
        detailData: {},
        subData: {
          detail: ''
        }
      }
    },
    created: function () {
      var url = '/static/data/informationDetail.json'
      this.$ajax_get(url, '', function (data) {
        if (!data.success) return
        this.detailData = data.detailData
      })
    },
    methods: {}
  }
</script>
