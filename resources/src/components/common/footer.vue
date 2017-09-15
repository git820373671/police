<template>
  <div class="footer" >
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="index">
        <div class="icon-f-1"></div>
      </mt-tab-item>
      <mt-tab-item id="user">
        <div class="icon-f-2"></div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default{
    name: 'footer-bar',
    data: function () {
      return {
        selected: 'index'
      }
    },
    watch: {
      selected: function (newData, oldData) {
        if (newData === 'index') {
          this.$router.push({
            path: '/'
          })
        } else if (newData === 'user') {
          this.$router.push({
            path: '/'
          })
        }
      }
    }
  }
</script>
