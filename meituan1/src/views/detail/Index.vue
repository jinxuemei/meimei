<template>
  <div class="de-wrapper">
    <div class="content">
      <detail-header></detail-header>
      <van-tabs v-model="active" animated color="#ffd300">
        <van-tab :title="'点菜'">
          <Order></Order>
        </van-tab>
        <van-tab :title="'评价'">
          <comment></comment>
        </van-tab>
        <van-tab :title="'商家'">商家页</van-tab>
      </van-tabs>
      <!-- {{$route.query.id}} -->
    </div>
    <div class="cart" v-if="active==0"></div>
  </div>
</template>

<script>
// import axios from 'axios'
import DetailHeader from "./DetailHeader";
import Comment from "@/views/comment/index.vue";
import Order from "@/views/order/index.vue";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      // id:this.$route.query.id,
      active: 0,
    };
  },
  components: {
    DetailHeader,
    Comment,
    Order,
  },
  mounted() {
    setTimeout(() => {
      let detailScroll = new BetterScroll(".de-wrapper", {
        click: true,
        bounce: false,
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.de-wrapper {
  height: 100vh;
  overflow: hidden;
  .cart{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #3b3b3c;
  }
}
</style>