import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.$bus = new Vue()//注册事件总线
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
