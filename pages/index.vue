<template>
  <div class="container" overflow:hidden>
    <!-- 使用vant的搜索和轮播组件，拼成的搜索跑马灯-->
    <van-search @click="search" class="search" shape="round" fixed />
    <!-- 点击事件不冒泡-->
    <van-swipe
      @change="getDefaultMsg"
      class="roll"
      :loop="true"
      :vertical="true"
      :autoplay="autoplay"
      :touchable="false"
      :show-indicators="false"
      fixed
    >
      <van-swipe-item @click="search" v-for="(item,index) in messages" :key="index">{{item}}</van-swipe-item>
    </van-swipe>

    <!-- pop弹窗 -->
    <Pop :show="show" :title="title" container="body" @func="closePop">
      <!-- pop弹窗插槽 -->
      <div slot="popContent">
        <!-- pop弹窗插槽 搜索 -->
        <div>
          <van-search
            class="realSearch"
            v-model="value"
            :placeholder="placeholder"
            @search="selectHotSpot"
            shape="round"
          />
          <p v-if="this.value==''" class="realSearchCancel" @click="closePop">取消</p>
          <p v-else class="realSearchCancel" @click="selectHotSpot">搜索</p>
        </div>
        <!-- pop弹窗插槽 历史搜索记录 -->
        <div class="history"></div>

        <!-- pop弹窗插槽 热度搜索榜 -->
        <div class="hotspotTitle">
          <van-icon name="fire" color="red"></van-icon>
          <span>今日热点</span>
          <van-cell v-for="(item,index) in messages" :key="index">
            <p @click="selectHotSpot(index)">
              <span style="color:#a00000">{{index+1}}.</span>
              {{item}}
            </p>
          </van-cell>
        </div>
      </div>
    </Pop>

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
import Pop from "../components/Pop.vue";

export default Vue.extend({
  components: {
    Pop
  },
  data() {
    return {
      active: 0,
      autoplay: 3000,
      messages: [
        "大使痛批闯关美国",
        "哈尔滨疫情跨省传播",
        "云南严重干旱",
        "天猫总裁因传言致歉1",
        "大使痛批闯关美国1",
        "哈尔滨疫情跨省传播1",
        "云南严重干旱1",
        "天猫总裁因传言致歉2",
        "大使痛批闯关美国2",
        "哈尔滨疫情跨省传播2",
        "云南严重干旱2",
        "天猫总裁因传言致歉3",
        "大使痛批闯关美国3",
        "哈尔滨疫情跨省传播3",
        "云南严重干旱3",
        "天猫总裁因传言致歉4",
        "大使痛批闯关美国4",
        "哈尔滨疫情跨省传播4",
        "云南严重干旱4",
        "天猫总裁因传言致歉4"
      ],
      show: false,
      title: "Pblog",
      //搜索内容
      value: "",
      placeholder: ""
    };
  },
  methods: {
    //vant轮播组件 onchange回调index
    getDefaultMsg(index: number) {
      this.placeholder = this.messages[index];
      console.log(index);
    },
    //点击假搜索
    search() {
      console.log(!this.show);
      this.show = !this.show;
    },
    //pop子组件调用
    closePop() {
      this.show = false;
    },
    //真搜索
    onSearch() {
      alert("搜索" + this.value);
    },
    //点击热点
    selectHotSpot(index?: number) {
      const hotspot = index && this.messages[index];
      this.value = hotspot || this.value;
      this.onSearch();
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
.realSearch {
  width: 85%;
  left: 0;
  top: 0;
  display: inline-block;
}
.realSearchCancel {
  left: 85%;
  top: 0;
  display: inline-block;
}
.history {
  margin-top: 1rem;
}
.hotspotTitle {
  margin-top: 0.625rem;
  margin-left: 1rem;
}
.hotspotTitle .van-cell {
  margin-left: -1rem;
}
</style>
