<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <swiper :options="swiperOption" ref="mySwiper" v-if="banners.length">
      <!-- slides -->
      <swiper-slide :key="index" v-for="(item,index) in banners">
        <!-- <a :href="item.link"> -->
          <img src="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg" width="100%" />
        <!-- </a>  -->
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div v-else>加载中...</div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getMultidata } from 'network/home'
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      swiperOption: {
        pagination: { el: ".swiper-pagination" },
        //设定初始化时slide的索引
        initialSlide: 0,
        //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        direction: 'horizontal',
        autoplay: {
          delay: 500, //1秒切换一次
          disableOnInteraction: false,
        },
        //环状轮播
        loop: true,
        slidesPerView: 'auto',
        loopedSlides: 3,
        loopAdditionalSlides: 0,
        //一个屏幕展示的数量
        slidesPerView: 1,
        //间距
        spaceBetween: 0,
        //修改swiper自己或子元素时，自动初始化swiper
        observer: true,
        //修改swiper的父元素时，自动初始化swiper 	
        observeParents: true,
        speed: 500
      }
    }
  },
  components: {
    NavBar,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  created() {
    getMultidata().then(res => {
      console.log(res.data)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.swiper-pagination > span {
  background: #fff;
}
</style>