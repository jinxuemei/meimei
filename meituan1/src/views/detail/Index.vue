<template>
  <div class="de-wrapper">
    <div class="content">
      <detail-header :storeMsg = 'storeMsg'></detail-header>
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
      <Cart v-if="active==0" :storeMsg = 'storeMsg'></Cart>
    </div>
   
  </div>
</template>

<script>
// import axios from 'axios'
import DetailHeader from "./DetailHeader";
import Comment from "@/views/comment/index.vue";
import Order from "@/views/order/index.vue";
import BetterScroll from "better-scroll";
import Cart from "../cart"
import axios from 'axios';

export default {
  data() {
    return {
      // id:this.$route.query.id,
      active: 0,
      storeMsg:{}
    };
  },
  components: {
    DetailHeader,
    Comment,
    Order,
    Cart
  },
  mounted() {
    setTimeout(() => {
      let detailScroll = new BetterScroll(".de-wrapper", {
        click: true,
        bounce: false,
      });
    },1000);

    axios.get('http://admin.gxxmglzx.com/tender/test/get_store_id?id='+this.$route.query.id)
    .then((res)=>{
      // console.log(res.data.data);
      this.storeMsg = res.data.data;
    }).catch(err=>{
      console.log(err);
    })
  },
};
</script>

<style lang="scss" scoped>
.de-wrapper {
  height: 100vh;
  overflow: hidden;
 
}
</style>