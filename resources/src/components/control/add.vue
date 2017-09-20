<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="content">
      <mt-field label="案件信息：" v-model="subData.infor"></mt-field>
      <mt-field label="案件编号：" v-model="subData.num"></mt-field>
      <mt-field label="身份证：" v-model="subData.code"></mt-field>
      <mt-field label="电 话：" type="tel" v-model="subData.tel"></mt-field>
      <mt-field label="布控日期：" v-model="subData.date"></mt-field>
      <mt-field label="车牌号：" v-model="subData.car"></mt-field>
      <mt-field label="描 述：" type="textarea" rows="8" v-model="subData.detail"></mt-field>
    </div>
    <div class="sub-btn sub-btns">
      <mt-button type="primary" size="large" v-on:click="submit">提交布控</mt-button>
      <mt-button type="primary" size="large" v-on:click="isSelect=true">下达指令</mt-button>
    </div>
    <div class="pop-box" v-if="isSelect">
      <h2 class="pop-title">选择参与战位</h2>
      <select-box :selectData='selectData'></select-box>
      <div class="pop-btn" v-on:click="isSelect=false">下一步</div>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  import selectBox from '../common/select'
  export default{
    name: 'ControlAdd',
    components: {
      HeaderMenu: HeaderMenu,
      selectBox: selectBox
    },
    data: function () {
      return {
        headerData: {
          title: '查缉布控',
          left: true
        },
        selectData: {
          'selectList': [],
          'value': []
        },
        isSelect: false,
        subData: {
          infor: '',
          num: '',
          code: '',
          tel: '',
          date: '',
          car: '',
          detail: ''
        }
      }
    },
    created: function () {
      var selectUrl = '/static/data/select.json'
      this.$ajax_get(selectUrl, '', function (data) {
        if (!data.success) return
        this.selectData.selectList = data.selectData
      })
    },
    methods: {
      submit: function () {
        var url = '/static/data/submit.json'
        var prams = {
          data: this.subData
        }
        var $this = this
        this.$ajax_get(url, prams, function (data) {
          if (!data.success) return
          this.$toast({
            message: '提交成功',
            duration: 1000
          })
          setTimeout(function () {
            $this.$router.push({
              path: '/control/list'
            })
          }, 1500)
        })
      }
    }
  }
</script>
