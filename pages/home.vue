<template>
  <div class="container">
    <!-- 使用vant的搜索和轮播组件，拼成的搜索跑马灯-->
    <div>
      <van-search @click="search" class="search" shape="round" fixed />
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
    </div>

    <!-- 标签导航栏-->
    <div class="tag">
      <van-tabs v-model="tagIndex" line-height="0px">
        <van-tab
          v-for="(tag,index) in category"
          :key="index"
          :to="{path:'/home/category/'+index}"
          :append="false"
        >
          <template #title>
            <van-tag v-if="tagIndex==index" color="#f2826a" round plain>{{ tag }}</van-tag>
            <van-tag v-else color="#707070" round plain>{{ tag }}</van-tag>
          </template>
        </van-tab>
      </van-tabs>
    </div>

    <nuxt-child keep-alive :key="tagIndex"></nuxt-child>

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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Pop from "../components/Pop.vue";

export default Vue.extend({
  name: "index",
  components: {
    Pop
  },
  data() {
    return {
      autoplay: 3000,
      category: [
        "js",
        "java",
        "pathon",
        "mysql",
        "cs",
        "js",
        "java",
        "pathon",
        "mysql",
        "cs"
      ],
      messages: ["pathon", "mysql", "java", "js", "cs"],

      show: false,
      title: "Pblog",
      //搜索内容
      value: "",
      placeholder: "",
      //防止keep-alive保存空白页给0
      tagIndex: -1
      // currentIndex: 0
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
  },
  mounted() {
    //初进入时
    const index = this.$route.params.category || "0";
    this.$router.push({
      path: "/category/" + index
    });
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

.container .nuxt-child {
  height: 50%;
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
  width: 80%;
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

.tag {
  position: absolute;
  width: 100%;
  left: 0;
  top: 3rem;
}

.tag .van-tag {
  font-size: 0.75rem;
  height: 1.5rem;
  justify-content: center;
  width: 4rem;
}
</style>
