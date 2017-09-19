<template>
  <div class="h100 bg-f2">
    <div class="login">
      <div class="img-box logo"><img src="../../assets/images/logo.jpg"/></div>
      <mt-field label="ID：" v-model="username"></mt-field>
      <mt-field label="密码：" type="password" v-model="password"></mt-field>
      <mt-button size="large" v-on:click="submit">登 录</mt-button>
    </div>
  </div>

</template>
<script>
  export default{
    name: 'Login',
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      submit: function () {
        if (!!this.username && !!this.password) {
          var url = '/static/data/submit.json'
          var prams = {
            username: this.username,
            password: this.password
          }
          this.$ajax_get(url, prams, function (data) {
            console.log('传参数', prams)
            if (!data.success) return
            this.$router.push({
              path: '/'
            })
          })
        } else {
          this.$toast({
            message: '请输入用户名或密码',
            duration: 1000
          })
        }
      }
    }
  }
</script>
