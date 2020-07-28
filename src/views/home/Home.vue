<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="center">购物街</div>
    </navBar>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,key) in banners" :key="key">
          <a :href="item.link">
            <img :src="item.image" alt />
          </a>
        </mt-swipe-item>
      </mt-swipe>
      <recommendview :recommends="recommends" />
      <feature/>
      <tabControl class="tabcontrol" :titles="['流行','新款','精选']" />
  
  <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>54</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
  </ul>
  </div>

  
</template>

<script>
import navBar from "components/common/navbar/navBar";
import tabControl from 'components/content/tabControl'

import recommendview from './recommendview'
import feature from './feature'

import { request } from "network/request";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
          'pop':{page: 0, list: []},
          'news':{page: 0, list: []},
          'sell':{page: 0, list: []}
      }
    };
  },
  components: {
    navBar,
    recommendview,
    feature,
    tabControl
  },
  created() {
    request({
      url: "/home/multidata",
    }).then((data) => {
      this.banners = data.data.banner.list;
      this.recommends = data.data.recommend.list;
    });
  },
};
</script>

<style>
#home {
    padding-top: 44px;
}
.home-nav {
  background-color: #ff8198;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.mint-swipe {
  height: 200px;
}
.mint-swipe-items-wrap a img {
  width: 100%;
}
.tabcontrol{
    position: sticky;
    top: 40px;
    background-color: #fff;
}
</style>