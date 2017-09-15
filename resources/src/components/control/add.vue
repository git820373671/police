<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="content">
      <mt-field label="案件信息：" v-model="subData.infor"></mt-field>
      <mt-field label="案件编号：" v-model="subData.num"></mt-field>
      <mt-field label="身份证：" v-model="subData.code"></mt-field>
      <mt-field label="电 话：" type="tel" v-model="subData.tel"></mt-field>
      <mt-field label="布控日期：" type="date" v-model="subData.date"></mt-field>
      <mt-field label="车牌号：" v-model="subData.car"></mt-field>
      <mt-field label="描 述：" type="textarea" rows="8" v-model="subData.detail" ></mt-field>
    </div>
    <div class="sub-btn">
      <mt-button type="primary" size="large" v-on:click="submit">提交布控</mt-button>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'ControlAdd',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '查缉布控',
          left: true
        },
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
