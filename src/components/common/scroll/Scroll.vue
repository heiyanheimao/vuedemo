<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
//滚动插件
export default {
  name: 'scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
   probeType: {
     type: Number,
     default: 0
   } 
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType
    })
    this.scroll.on('scroll', (postion) => {
      this.$emit('scroll',postion)
      this.$bus.$emit('test')
    })
  },
  methods: {
    scrollTop(x, y, time = 1000) {
      this.scroll.scrollTo(x, y, time)
    }
  },
}
</script>

<style>

</style>