<template>
  <div class="container">
    <!-- 使用vant的搜索和轮播组件，拼成的搜索跑马灯-->
    <van-search class="search" shape="round" />
    <!-- 点击事件不冒泡-->
    <van-swipe
      @change="getDefaultMsg"
      class="roll"
      :loop="true"
      :vertical="true"
      :autoplay="autoplay"
      :touchable="false"
      :show-indicators="false"
    >
      <van-swipe-item @click="search" v-for="(item,index) in messages" :key="index">{{item}}</van-swipe-item>
    </van-swipe>

    <!-- 子页面插槽-->
    <nuxt-child></nuxt-child>

    <!-- 底部导航 -->

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      active: 0,
      autoplay: 3000,
      messages: [
        "大使痛批闯关美国",
        "哈尔滨疫情跨省传播",
        "云南严重干旱",
        "天猫总裁因传言致歉1"
      ],
      show: false
    };
  },
  methods: {
    //vant轮播组件 onchange回调index
    getDefaultMsg(index: number) {
      console.log(index);
    },
    //点击假搜索
    search() {
      console.log(!this.show);
      this.show = !this.show;
    }
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.search {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

.roll {
  position: absolute;
  width: 100%;
  left: 2.5rem;
  top: 0.95rem;
  height: 1.875rem;
  z-index: 1;
  color: #7f828b;
  text-align: left !important;
}

.roll.van-swipe-item {
  font-size: 1rem;
  font-weight: 400;
}
</style>
