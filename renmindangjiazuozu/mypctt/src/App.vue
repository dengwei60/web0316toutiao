<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang='less'>
*{
  --themeColor:#ea4245;
}
.tt-message{
  height: 50px;
  width: 400px;
  line-height: 50px;
  text-align: center;
  color: red;
  // border: 1px solid #6ac144;
  background-color: white;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
}
</style>
