<template>
  <li class="tab-bar-item" @click="liClick">
    <div v-if="isShow">
      <slot name="icon-on" />
    </div>
    <div v-else>
      <slot name="icon" />
    </div>
    <div :style="color">
      <slot name="text" />
    </div>
  </li>
</template>

<script>
export default {
  name: "tab-bar-item",
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isShow() {
      // console.log(this.path != this.$route.path)
      return this.$route.path.indexOf(this.path) !== -1 ?true: false
    },
    color() {
      return this.isShow ?{color:this.activeColor}: {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type:String,
      default: 'red'
    }
  },
  created() {
    // if (this.path != this.$route.path) {
    //   this.isActive = false
    // } else {
    //   this.isActive = true
    // }
  },
  methods: {
    liClick() {
      // console.log(1)
      if (this.$route.path.indexOf(this.path)) {
        this.$router.push(this.path)
        // this.isActive = false
      }
    }
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  width: 24px;
}
.active {
  color: #d4237a;
}
</style>