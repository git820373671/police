<template>
  <div class="select-box">
    <ul class="box-level-one" id="selectBox">
      <li v-for="(item,index) in selectData.selectList">
        <h3 class="select-title" v-on:click="toggle(index)">{{item.title}}</h3>
        <div class="select-con" v-bind:id="index">
          <mt-radio
            align="right"
            v-model="selectData.value"
            :options="item.child">
          </mt-radio>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name: 'select-box',
    data: function () {
      return {}
    },
    props: {
      selectData: {
        type: Object,
        selectList: []
      }
    },
    mounted: function () {
      var $this = this
      setTimeout(function () {
        $this.toggle('0')
      }, 0)
    },
    methods: {
      toggle: function (id) {
        var $elC = document.getElementById('selectBox').getElementsByClassName('select-con')
        for (var i = 0; i < $elC.length; i++) {
          $elC[i].setAttribute('class', 'select-con')
        }
        var $el = document.getElementById(id)
        $el.setAttribute('class', 'select-con show')
      }
    }
  }
</script>
