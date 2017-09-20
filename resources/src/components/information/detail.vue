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
      <mt-button type="primary" size="large" v-on:click="isSelect=true">下达指令</mt-button>
    </div>
    <div class="pop-box" v-if="isSelect">
      <h2 class="pop-title">选择参与战位</h2>
      <select-box :selectData='selectData'></select-box>
      <div class="pop-btn" v-on:click="(isCheck=true , isSelect=false)">下一步</div>
    </div>
    <div class="pop-box" v-if="isCheck">
      <h2 class="pop-title">选择研判组织方式</h2>
      <raido-box :checkData='checkData' v-if="isCheck"></raido-box>
      <div class="pop-btn" v-on:click="(isCheck=false)">确定</div>
    </div>
  </div>
</template>
<script>
  import HeaderMenu from '../common/header'
  import Uploader from '../common/uploader'
  import selectBox from '../common/select'
  import raidoBox from '../common/raidoBox'
  export default{
    name: 'InformationDetail',
    components: {
      HeaderMenu: HeaderMenu,
      Uploader: Uploader,
      selectBox: selectBox,
      raidoBox: raidoBox
    },
    data: function () {
      return {
        headerData: {
          title: '信息研判',
          left: true
        },
        selectData: {
          'selectList': [],
          'value': []
        },
        isSelect: false,
        checkData: {
          'checkList': [],
          'value': []
        },
        isCheck: false,
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
      var selectUrl = '/static/data/select.json'
      this.$ajax_get(selectUrl, '', function (data) {
        if (!data.success) return
        this.selectData.selectList = data.selectData
      })
      var checkUrl = '/static/data/check.json'
      this.$ajax_get(checkUrl, '', function (data) {
        if (!data.success) return
        this.checkData.checkList = data.checkData
      })
    },
    methods: {}
  }
</script>
