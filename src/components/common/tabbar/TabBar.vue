<template>
  <ul class="tab-bar-ul">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'tab-bar'
};
</script>
<style scoped>
.tab-bar-ul {
  font-size: 16px;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eeeeee;
  box-shadow: 0 3px 10px rgba(100,100,100,.6)
}

</style>