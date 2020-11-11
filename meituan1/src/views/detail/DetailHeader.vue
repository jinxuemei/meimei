<template>
  <div class="header">
    <div class="back" @click="$router.go(-1)">&lt;</div>
    <div class="info">
      <img
        src="https://p0.meituan.net/business/d1659468973156ce1dc3c73042aa8460110048.png"
        alt=""
      />
      <div class="i-basic">
        <div class="i-time">30分钟|549m</div>
        <div class="i-notice">公告</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      .i-notice {
        height: 0.32rem;
        line-height: 0.32rem;
        font-size: 12px;
        padding-bottom: 5px;
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