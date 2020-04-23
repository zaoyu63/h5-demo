<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" url="/#/home">首页</van-tabbar-item>
      <van-tabbar-item icon="fire-o" url="/#/fire">骨架屏</van-tabbar-item>
      <van-tabbar-item icon="setting-o" url="/#/setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
        active: 0
      }
    }
  };
</script>
