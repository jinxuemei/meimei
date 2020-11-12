<template>
  <div>
    <detail-header></detail-header>
    <van-tabs v-model="active" animated color="#ffd300">
      <van-tab :title="'点菜'">点餐页</van-tab>
      <van-tab :title="'评价'">
        <comment></comment>
      </van-tab>
      <van-tab :title="'商家'">商家页</van-tab>
    </van-tabs>
    <!-- {{$route.query.id}} -->
  </div>
</template>

<script>
// import axios from 'axios'
import DetailHeader from "./DetailHeader";
import Comment from "@/views/comment/index.vue"
export default {
    data(){
        return {
          // id:this.$route.query.id,
          active:0
        };
    },
  components: {
    DetailHeader,
    Comment
  },

};
</script>

<style lang="scss" scoped>
</style>