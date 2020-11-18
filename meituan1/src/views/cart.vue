<template>
  <div>
    <div class="cart">
      <div class="circle">
        <span class="iconfont icon-gouwuche"></span >
        <span v-if="$store.getters.total>0">{{$store.getters.total}}</span>
      </div >
      <div class="fee">
        <p>另需配送费{{storeMsg.fee}}元
          {{$store.getters.totalPrice}}
        </p>
      </div>
      <div class="price">
        <p>{{storeMsg.price}}元起送</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["storeMsg"]
};
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #3b3b3c;
  display: flex;
  .circle{
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: #656565;
    position: relative;
    top: -10px;
    margin: 0 10px;
    text-align: center;
    line-height: 1rem;
    .icon-gouwuche{
      font-size: 28px;
      color: #c4c4c4;
      font-weight: 700;
    }
  }
  .fee{
    flex: 3;
    height: 50px;
    line-height: 50px;
    color: #999;
  }
  .price{
    flex: 1;
    height: 50px;
    line-height: 50px;
    color: #999;
  }
}
</style>