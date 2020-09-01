<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    var deviceWidth = document.documentElement.clientWidth;
    deviceWidth =
      deviceWidth < 320 ? 320 : deviceWidth > 640 ? 640 : deviceWidth;
    document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
  },
};
</script>
<style lang="scss">
@import "/assets/css/reset";
</style>
