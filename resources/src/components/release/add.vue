<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="content">
      <mt-field label="标题：" v-model="subData.title" class="grey"></mt-field>
      <mt-field label="输入内容：" type="textarea" rows="8" v-model="subData.detail"  class="grey"></mt-field>
      <div class="length">{{textNum}}/5000</div>
    </div>
    <div class="sub-btn">
      <mt-button type="primary" size="large" v-on:click="submit">发布</mt-button>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    name: 'ReleaseAdd',
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '发布预警',
          left: true
        },
        textNum: 0,
        subData: {
          title: '',
          detail: ''
        }
      }
    },
    watch: {
      'subData.detail': function (dataText) {
        this.textNum = dataText.length
        if (dataText.length >= 5000) {
          this.$toast({
            message: '最多只能输入5000字符',
            duration: 1000
          })
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
              path: '/release/list'
            })
          }, 1500)
        })
      }
    }
  }
</script>
