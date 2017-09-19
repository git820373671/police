<template>
  <div class="radio-box">
    <mt-radio
      align="right"
      v-model="radioData.value"
      :options="radioData.radioList">
    </mt-radio>
  </div>
</template>
<script>
  export default{
    name: 'select-box',
    data: function () {
      return {}
    },
    props: {
      radioData: {
        type: Object,
        radioList: []
      }
    }
  }
</script>
