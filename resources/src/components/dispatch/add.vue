<template>
  <div class="h100 bg-f1">
    <header-menu :headerData="headerData"></header-menu>
    <div class="content">
      <mt-field label="案件标题：" v-model="subData.title"></mt-field>
      <mt-field label="案件内容：" type="textarea" rows="8" v-model="subData.detail"></mt-field>
      <div class="length">{{textNum}}/5000</div>
    </div>

    <div class="listD listDs">
      <ul>
        <li v-on:click="isSelect=true">
          <p>参与单位</p>
          <div class="icon"><img src="../../assets/images/icon4.png"/></div>
        </li>
        <li v-on:click="isSelect=true">
          <p>研判组织方式</p>
          <div class="icon"><img src="../../assets/images/icon4.png"/></div>
        </li>
      </ul>
    </div>
    <div class="sub-btn">
      <mt-button type="primary" size="large" v-on:click="submit">发布</mt-button>
    </div>
    <div class="pop-box" v-if="isSelect">
      <h2 class="pop-title">选择参与战位</h2>
      <select-box :selectData='selectData'></select-box>
      <div class="pop-btn" v-on:click="(isRadio=true , isSelect=false)">下一步</div>
    </div>
    <div class="pop-box" v-if="isRadio">
      <h2 class="pop-title">选择研判组织方式</h2>
      <raido-box :radioData='radioData' v-if="isRadio"></raido-box>
      <div class="pop-btn" v-on:click="(isRadio=false)">确定</div>
    </div>
  </div>

</template>
<script>
  import HeaderMenu from '../common/header'
  import selectBox from '../common/select'
  import raidoBox from '../common/raidoBox'
  export default{
    name: 'DispatchAdd',
    components: {
      HeaderMenu: HeaderMenu,
      selectBox: selectBox,
      raidoBox: raidoBox
    },
    data: function () {
      return {
        headerData: {
          title: '重大案件指挥调度',
          left: true
        },
        selectData: {
          'selectList': [],
          'value': ''
        },
        isSelect: false,
        radioData: {
          'radioList': [],
          'value': ''
        },
        isRadio: false,
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
    created: function () {
      var selectUrl = '/static/data/select.json'
      this.$ajax_get(selectUrl, '', function (data) {
        if (!data.success) return
        this.selectData.selectList = data.selectData
      })
      var radioUrl = '/static/data/radio.json'
      this.$ajax_get(radioUrl, '', function (data) {
        if (!data.success) return
        this.radioData.radioList = data.radioData
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
              path: '/information/detail'
            })
          }, 1500)
        })
      }
    }
  }
</script>
