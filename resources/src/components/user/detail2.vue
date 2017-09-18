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
        <li>案件编号：{{detailData.code}}</li>
      </ul>
      <h3 class="title-1  m-t-20">相关资料：</h3>
      <div class="detail-box" style="min-height: 100px"> 反馈内容：{{detailData.infor}} </div>

    </div>

  </div>
</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'MemberAdd',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '查看案件',
          left: true,
          link: true,
          linkPath: '/user/caseTab',
          linkName: '查看其它'
        },
        detailData: {}
      }
    },
    created: function () {
      var url = '/static/data/caseDetail2.json'

      this.$ajax_get(url, '', function (data) {
        if (!data.success) return
        this.detailData = data.detailData
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
