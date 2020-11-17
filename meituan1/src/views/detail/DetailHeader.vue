<template>
  <div class="header">
    <div class="back" @click="$router.go(-1)">&lt;</div>
    <div class="info">
      <img
        :src="storeMsg.img"
        alt=""
      />
      <div class="i-basic">
        <div class="i-time">{{storeMsg.minute}}分钟|{{storeMsg.distance}}</div>
        <div class="i-notice">{{storeMsg.notice}}</div>
        <div class="i-full">{{storeMsg.full}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['storeMsg']
};
</script>

<style lang="scss" scoped>
.header {
  //   padding-bottom: 0.4rem;
  color: rgb(255, 255, 255);
  background-color: rgb(46, 47, 59);
  .back {
    height: 1rem;
    font-size: 20px;
    line-height: 1rem;
    padding-left: 0.2rem;
  }
  .info {
    display: flex;
    padding: 0.2rem;
    margin-bottom: 0.4rem;
    img {
      width: 1.7rem;
      height: 1.28rem;
    }
    .i-basic {
      flex: 1;
      padding-left: 0.2rem;
      .i-time,
      .i-notice ,.i-full{
        height: 0.32rem;
        line-height: 0.32rem;
        font-size: 12px;
        padding-bottom: 5px;
        overflow: hidden;
      }
      .i-notice {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 10px;
      }
    }
  }
}
</style>