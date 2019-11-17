<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <b-scroll class="wrapper" ref="scroll" :probeType="3" @scroll="contentScroll">
      <home-swiper :list="banners" />
      <home-recommend :recommends="recommends" />
      <home-hobby />
      <tab-control class="tab-control" @tabClick="tabClick" :titles="['流行','经典','精选']" />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
        <li>51</li>
        <li>52</li>
        <li>53</li>
        <li>54</li>
        <li>55</li>
        <li>56</li>
        <li>57</li>
        <li>58</li>
        <li>59</li>
        <li>60</li>
        <li>61</li>
        <li>62</li>
        <li>63</li>
        <li>64</li>
        <li>65</li>
        <li>66</li>
        <li>67</li>
        <li>68</li>
        <li>69</li>
        <li>70</li>
        <li>71</li>
        <li>72</li>
        <li>73</li>
        <li>74</li>
        <li>75</li>
        <li>76</li>
        <li>77</li>
        <li>78</li>
        <li>79</li>
        <li>80</li>
        <li>81</li>
        <li>82</li>
        <li>83</li>
        <li>84</li>
        <li>85</li>
        <li>86</li>
        <li>87</li>
        <li>88</li>
        <li>89</li>
        <li>90</li>
        <li>91</li>
        <li>92</li>
        <li>93</li>
        <li>94</li>
        <li>95</li>
        <li>96</li>
        <li>97</li>
        <li>98</li>
        <li>99</li>
        <li>100</li>
      </ul>
    </b-scroll>
    <back-top @click.native="topClick" v-show="!isTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import BScroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabcontrol/TabControl'
import BackTop from 'components/content/backtop/BackTop'

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
      },
      isTop: true
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeHobby,
    TabControl,
    BScroll,
    BackTop
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
          let a = [1, 2, 3]
          console.log(...a)
        }
      )
    },
    tabClick(i) {
      console.log(i)
    },
    topClick() {
      this.$refs.scroll.scrollTop(0,0,1000)
    },
    contentScroll(position) {
      this.isTop = position.y > -300
      this.$bus.$on('test', () => {
        //事件总线
        console.log('aaa');
      })
    }
  },
}
</script>

<style scoped>
#home {
  position: relative;
  padding-top: 44px;
  height: 100vh;
  left: 0;
  right: 0;
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
.wrapper {
  overflow: hidden;
  position: absolute;
  /* height: 300px; */
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
}

</style>