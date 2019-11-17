<template>
  <div class="back-top">
    <img src="~assets/img/top.svg" alt="">
  </div>
</template>

<script>
//回到顶部
export default {
  name: 'BackTop'
}
</script>

<style>
.back-top {
  height:32px;
  vertical-align: middle;
  position: fixed;
  right: 10px;
  bottom: 60px;
  background-color: #fff;
  border-radius: 50%;
}
</style>