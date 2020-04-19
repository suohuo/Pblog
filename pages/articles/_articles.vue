<template>
  <div>
    {{this.$route.params.articles}}
    {{this.$route.params.id}}
  </div>
</template>

<script>
import Vue from "vue";
export default {
  mounted() {
    console.log(this.$route.query);
  }
};
</script>

<style>
</style>
