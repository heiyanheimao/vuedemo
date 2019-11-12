<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="list.length">
      <!-- slides -->
      <swiper-slide :key="index" v-for="(item,index) in list">
        <a :href="item.link">
          <img :src="item.image" width="100%" />
        </a> 
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div v-else style="height:195px;">加载中...</div>
</template>

<script>
export default {
  //首页轮播图组件
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: { el: ".swiper-pagination" },
        //设定初始化时slide的索引
        initialSlide: 0,
        //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        direction: 'horizontal',
        autoplay: {
          delay: 2000, //1秒切换一次
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
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
}
</script>

<style>
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
</style>