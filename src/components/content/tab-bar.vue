<template>
  <div>


    <mt-tabbar v-model="selected" :fixed=fixed>
      <mt-tab-item id="home" @click.native="goTo('/home')">
        <img slot="icon" src="" />
        外卖
      </mt-tab-item>
      <mt-tab-item id="category" @click.native="goTo('/category')">
        <img slot="icon" src="" />
        订单
      </mt-tab-item>
      <mt-tab-item id="cart" @click.native="goTo('/cart')">
        <img slot="icon" src="" />
        发现
      </mt-tab-item>
      <mt-tab-item id="profile" @click.native="goTo('/profile')">
        <img slot="icon" src="" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
          selected:'',
          fixed:true
        }
    },
    methods:{
        goTo(path){
          this.$router.replace(path)
        }
    }
};
</script>

<style>
</style>