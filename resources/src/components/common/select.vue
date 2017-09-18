<template>
  <div class="select-box">
    <ul class="box-level-one">
      <li v-for="item in selectData.selectList">

        <mt-radio
          :title="item.title"
          align="right"
          v-model="selectData.value"
          :options="item.child">
        </mt-radio>

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
    }
  }
</script>
