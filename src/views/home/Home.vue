<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :list="banners" />
    <home-recommend :recommends="recommends" />
    <home-hobby />
    <tab-control class="tab-control" :titles="['流行','经典','精选']" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'


import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeHobby from './childComps/HomeHobby'

import {
  getMultidata,
  getHomeGoods
} from 'network/home'
//首页组件
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeHobby,
    TabControl
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  created() {
    this.getMultidata()
    // this.getHomeGoods('pop', 1)
    // this.getHomeGoods('new', 1)
    // this.getHomeGoods('cell', 1)
  },
  methods: {
    getMultidata() {
      getMultidata().then(
        res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
    },
    getHomeGoods(type, page) {
      getHomeGoods(type, page).then(
        res => {
          // console.log(res)
          let a = [1,2,3]
          console.log(...a)
        }
      )
    }
  },
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>