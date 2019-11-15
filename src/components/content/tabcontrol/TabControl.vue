<template>
  <div class="tab-control">
    <div class="title" v-for="(item,index) in titles" :key="index" >
      <span :class="{active: index=== nowIndex}" @click="itemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      nowIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  methods: {
    itemClick(i) {
      this.nowIndex = i
      this.$emit('tabClick',i)
    }
  },
}
</script>

<style>
  .tab-control {
    width: 100%;
    display: flex;
    text-align: center;
    background-color: #fff;
  }
  .title {
    flex: 1;
  }
  .title span {
    /* display: inline-block; */
    height: 40px;
    line-height: 40px;
    padding: 5px;
  }
  .title  .active {
    border-bottom: 2px solid var(--color-high-text);
    color: var(--color-high-text);
  }
</style>