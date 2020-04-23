<template>
  <div class="ArticleCard">
    <van-panel :title="title" :desc="author" :status="time">
      <div>
        <p class="introduce">简介:</p>
        <div class="van-multi-ellipsis--l2 context">{{context}}</div>
      </div>
      <van-image
        round
        width="3rem"
        height="3rem"
        src="http://img5.imgtn.bdimg.com/it/u=187504917,1597926590&fm=26&gp=0.jpg"
      />
      <template #footer class="footer">
        <van-rate v-model="value" allow-half void-icon="star" :readonly="true" void-color="#eee" />
        <van-button
          :to="{path:'/articles/'+category+'?id='+id}"
          :append="false"
          round
          size="small"
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
        >立即阅读</van-button>
      </template>
    </van-panel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    author: String,
    time: String,
    context: String,
    category: String,
    id: String
  },
  data() {
    return {
      value: 1.5
    };
  },
  methods: {
    onClickLeft() {
      this.$emit("func");
    }
  },
  created() {}
});
</script>

<style>
.ArticleCard {
  width: 100%;
  height: 8rem;
  margin-top: 0;
}
.ArticleCard .introduce {
  position: absolute;
  left: 5rem;
  color: #919191;
  font-size: 0.75rem;
}
.ArticleCard .context {
  margin-left: 7rem;
  /* overflow: hidden; */
  width: 70%;
  /* height: 3.13rem; */
  font-size: 0.625rem;
  /* text-align-last: left; */
}
.ArticleCard .van-image {
  position: absolute;
  top: 0.6rem;
  left: 1rem;
}
.ArticleCard .van-rate {
  /* height: 10rem; */
  margin-left: 3rem;
}
.ArticleCard .van-button {
  margin-left: 4rem;
  width: 6rem;
  height: 1.5rem;
}
</style>