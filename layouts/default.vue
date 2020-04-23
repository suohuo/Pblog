<template>
  <div>
    <nuxt />
    <!-- 底部导航 -->
    <van-tabbar keep-alive v-model="tagName" active-color="#f2826a">
      <van-tabbar-item
        v-for="(item,index) in tabbar"
        :key="index"
        :name="item.path"
        :icon="item.icon"
        :to="{path:item.path}"
      >{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar: [
        { path: "/home", name: "首页", icon: "home-o" },
        { path: "/collect", name: "收藏", icon: "star-o" },
        { path: "/my", name: "我", icon: "manager-o" }
      ],
      tagName: "/"
    };
  },
  beforeMount() {
    //初进入时
    const filter = item => this.$route.path.indexOf(item.path) != -1;
    const result = this.tabbar.filter(filter);
    this.tagName = result[0].path;
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
