<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="content">
      <h3  class="content-title">提交相关资料</h3>
      <mt-field label="反馈内容：" type="textarea" rows="8" v-model="subData.detail" class="grey"></mt-field>
    </div>
    <div class="sub-btn">
      <mt-button type="primary" size="large" v-on:click="submit">提交资料</mt-button>
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
          title: '案件反馈',
          left: true,
          upload: true
        },
        textNum: 0,
        subData: {
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
              path: '/user/detail2'
            })
          }, 1500)
        })
      }
    }
  }
</script>
