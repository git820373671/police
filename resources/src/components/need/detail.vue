<template>
  <div class="h100 bg-f0">
    <header-menu :headerData="headerData"></header-menu>
    <div class="detail1">
      <ul class="detail-list">
        <li>案件编号：{{detailData.code}}</li>
        <li>具体信息：{{detailData.detail}}</li>
        <li>需求情况：{{detailData.state}}</li>
        <li>发起人：{{detailData.name}}</li>
      </ul>
      <h3 class="title-1">相关资料：</h3>
      <ul class="detail-img p-t-20">
        <li v-for="item in detailData.src" :key="item.id">
          <img :src="item">
        </li>
      </ul>
      <h3 class="title-2">话单需求：</h3>
      <ul class="detail-list">
        <li>查询号码：{{detailData.Ncode}}</li>
        <li>姓名：{{detailData.Nname}}</li>
      </ul>
      <div class="up-img"><h3>相关资料:</h3>
        <uploader></uploader>
      </div>
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
    name: 'MemberAdd',
    components: {
      HeaderMenu: HeaderMenu,
      Uploader: Uploader
    },
    data: function () {
      return {
        headerData: {
          title: '需求详情',
          left: true
        },
        detailData: {},
        subData: {
          detail: ''
        }
      }
    },
    created: function () {
      var url = '/static/data/needDetail.json'
      this.$ajax_get(url, '', function (data) {
        if (!data.success) return
        this.detailData = data.detailData
      })
    },
    methods: {}
  }
</script>
