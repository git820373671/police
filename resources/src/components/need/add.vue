<template>
  <div class="h100 bg-f0">
    <header-menu :headerData="headerData"></header-menu>
    <div class="content p-t-20">
      <div class="drop-down"><p @click="showList()" v-bind:class="{show:isShow}">查询类型<i></i></p>
        <ul v-bind:class="{show:isShow}" id="dropList">
          <li class="active" @click="getMenu('002')" id="002">话单查询</li>
          <li @click="getMenu('123')" id="123">数据查询</li>
        </ul>
      </div>
      <mt-field label="案件编号：" v-model="subData.code"></mt-field>
      <mt-field label="录入信息：" v-model="subData.detail"></mt-field>
      <div class="up-img"><h3>上传相关资料jpg／png</h3>
        <uploader></uploader>
      </div>
    </div>
    <div class="sub-btn">
      <mt-button type="primary" size="large" v-on:click="submit">录入</mt-button>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  import Uploader from '../common/uploader'
  export default{
    name: 'NeedAdd',
    components: {
      HeaderMenu: HeaderMenu,
      Uploader: Uploader
    },
    data: function () {
      return {
        headerData: {
          title: '录入需求',
          left: true
        },
        textNum: 0,
        subData: {
          code: '',
          detail: ''
        },
        isShow: false
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
              path: '/information/list'
            })
          }, 1500)
        })
      },
      showList: function () {
        if (this.isShow) {
          this.isShow = false
        } else {
          this.isShow = true
        }
      },
      getMenu: function (id) {
        var $el = document.getElementById('dropList').getElementsByClassName('active')
        var $elC = document.getElementById(id)
        for (var i = 0; i < $el.length; i++) {
          $el[i].setAttribute('class', '')
        }
        $elC.setAttribute('class', 'active')
        this.isShow = false
      }
    }
  }
</script>
