<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="detail2">
      <mt-tabbar v-model="barActive" class="tab-bar">
        <mt-tab-item id="bar1">
          查询需求
        </mt-tab-item>
        <mt-tab-item id="bar2">
          下达指令
        </mt-tab-item>
        <mt-tab-item id="bar3">
          信息研判
        </mt-tab-item>
        <mt-tab-item id="bar4">
          查缉布控
        </mt-tab-item>
      </mt-tabbar>
      <mt-tab-container v-model="conActive">
        <mt-tab-container-item id="con1">
          <ul class="detail-list">
            <li>案件编号：{{detailData1.code}}</li>
            <li>具体信息：{{detailData1.detail}}</li>
            <li>发起人：{{detailData1.name}}</li>
          </ul>
          <h3 class="title-1">相关资料：</h3>
          <ul class="detail-img">
            <li v-for="item in detailData1.src" :key="item.id">
              <img :src="item">
            </li>
          </ul>
          <ul class="detail-list">
            <h3 class="title-2">话单需求</h3>
            <li>查询号码：{{detailData1.Ncode}}</li>
            <li>姓名：{{detailData1.Nname}}</li>
          </ul>
          <h3 class="title-1">相关资料：</h3>
          <ul class="detail-img">
            <li v-for="item in detailData1.src" :key="item.id">
              <img :src="item">
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="con2">
          <ul class="detail-list">
            <li>指令标题：{{detailData2.title}}</li>
            <li>指令内容：{{detailData2.detail}}</li>
            <li>下发时间：{{detailData2.time}}</li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="con3">
          <h3 class="title-1 m-t-5">{{detailData3.title}}</h3>
          <div class="detail-box">{{detailData3.detail}} </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="con4">
          <ul class="detail-list">
            <li>案件信息：{{detailData4.infor}}</li>
            <li>案件编号：{{detailData4.code}}</li>
            <li>姓名：{{detailData4.name}}</li>
            <li>身份证：{{detailData4.code2}}</li>
            <li>电话：{{detailData4.tel}}</li>
            <li>布控日期：{{detailData4.data}}</li>
            <li>车牌号：{{detailData4.car}}</li>
            <li>描述：{{detailData4.detail}}</li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="add-btn">
      <router-link to="/release/add">
        <img src="../../assets/images/add.png"/></router-link>
    </div>
    <div class="sub-btn">
      <mt-button type="primary" size="large" v-on:click="goDetail">查看详情</mt-button>
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
          title: '案件详情',
          left: true,
          link: true,
          linkPath: '/user/detail2',
          linkName: '查看详情'
        },
        detailData1: {},
        detailData2: {},
        detailData3: {},
        detailData4: {},
        barActive: 'bar1',
        conActive: 'con1'
      }
    },
    watch: {
      'barActive': function (newData, oldData) {
        if (newData === 'bar1') {
          this.conActive = 'con1'
        } else if (newData === 'bar2') {
          this.conActive = 'con2'
        } else if (newData === 'bar3') {
          this.conActive = 'con3'
        } else if (newData === 'bar4') {
          this.conActive = 'con4'
        }
      }
    },
    created: function () {
      var url1 = '/static/data/caseTab1.json'
      this.$ajax_get(url1, '', function (data) {
        if (!data.success) return
        this.detailData1 = data.detailData
      })
      var url2 = '/static/data/caseTab2.json'
      this.$ajax_get(url2, '', function (data) {
        if (!data.success) return
        this.detailData2 = data.detailData
      })
      var url3 = '/static/data/caseTab3.json'
      this.$ajax_get(url3, '', function (data) {
        if (!data.success) return
        this.detailData3 = data.detailData
      })
      var url4 = '/static/data/caseTab4.json'
      this.$ajax_get(url4, '', function (data) {
        if (!data.success) return
        this.detailData4 = data.detailData
      })
    },
    methods: {
      goDetail: function () {
        this.$router.push({
          path: '/user/detail2'
        })
      }
    }
  }
</script>
