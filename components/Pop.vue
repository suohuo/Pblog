<template>
  <div>
    <!-- pop框 -->
    <van-popup
      v-model="show"
      position="bottom"
      :overlay="false"
      :get-container="container"
      :duration="0.3"
      style="height:100%;width:100%"
    >
      <!-- 头部导航栏 -->
      <van-nav-bar :title="title" :border="false">
        <template #left>
          <van-icon name="arrow-left" size="23" @click="onClickLeft" color="black" />
        </template>
      </van-nav-bar>
      <!-- popContent插槽 -->
      <slot name="popContent"></slot>
    </van-popup>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    show: Boolean,
    container: String
  },
  data() {
    return {};
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
</style>