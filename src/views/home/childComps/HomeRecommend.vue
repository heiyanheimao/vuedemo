<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  //首页推荐组件
  export default {
    name: 'HomeRecommend',
    props: {
      recommends: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .item {
    flex: 1;
  }
  .item img {
    width: 70%;
    margin-bottom: 10px;
  }
</style>