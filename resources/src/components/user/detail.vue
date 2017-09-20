<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="detail1">
      <ul class="detail-list last-bor">
        <li>案件信息：{{detailData.infor}}</li>
        <li>案件详情：{{detailData.detail}}</li>
        <li>案件来源：<span class="badge">{{detailData.from}}</span></li>
        <li>案件类型：<span class="badge">{{detailData.type}}</span></li>
        <li>报案时间：{{detailData.data}}</li>
        <li>案发地点：{{detailData.area}}</li>
        <li>报案人电话：{{detailData.tel}}</li>
        <li>报案人：{{detailData.name}}</li>
        <li v-if="detailData.state==1">案件编号：{{detailData.code}}</li>
      </ul>
    </div>
    <div class="sub-btn sub-btns" v-if="detailData.state==1">
      <mt-button type="primary" size="large">拒绝</mt-button>
      <mt-button type="primary" size="large" v-on:click="isSelect=true">下达指令</mt-button>
    </div>
    <div class="sub-btn" v-if="detailData.state==2">
      <mt-button type="primary" size="large" v-on:click="goResult">反馈结果</mt-button>
    </div>
    <div class="pop-box" v-if="isSelect">
      <h2 class="pop-title">选择参与战位</h2>
      <select-box :selectData='selectData'></select-box>
      <div class="pop-btn" v-on:click="isSelect=false">确认</div>
    </div>
  </div>
</template>
<script>
  import HeaderMenu from '../common/header'
  import selectBox from '../common/select'
  export default{
    name: 'UserDetail',
    components: {
      HeaderMenu: HeaderMenu,
      selectBox: selectBox
    },
    data: function () {
      return {
        headerData: {
          title: '案件详情',
          left: true,
          link: false,
          linkPath: '/user/caseTab',
          linkName: '查看其它'
        },
        selectData: {
          'selectList': [],
          'value': []
        },
        isSelect: false,
        detailData: {}
      }
    },
    created: function () {
      var url = '/static/data/caseDetail.json'
      this.$ajax_get(url, '', function (data) {
        if (!data.success) return
        this.detailData = data.detailData
        if (data.detailData.state === '1') {
          this.headerData.link = true
        } else {
          this.headerData.link = false
        }
      })
      var selectUrl = '/static/data/select.json'
      this.$ajax_get(selectUrl, '', function (data) {
        if (!data.success) return
        this.selectData.selectList = data.selectData
      })
    },
    methods: {
      goResult: function () {
        this.$router.push({
          path: '/user/add'
        })
      }
    }
  }
</script>
