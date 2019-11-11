<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#d4237a">
      <img slot="icon" src="~assets/img/home.svg" alt="">
      <img slot="icon-on" src="~assets/img/home_on.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#d4237a">
      <img slot="icon" src="~assets/img/category.svg" alt="">
      <img slot="icon-on" src="~assets/img/category_on.svg" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#d4237a">
      <img slot="icon" src="~assets/img/cart.svg" alt="">
      <img slot="icon-on" src="~assets/img/cart_on.svg" alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#d4237a">
      <img slot="icon" src="~assets/img/profile.svg" alt="">
      <img slot="icon-on" src="~assets/img/profile_on.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>