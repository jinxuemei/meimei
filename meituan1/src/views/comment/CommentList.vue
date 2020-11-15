<template>
  <div>
    <div class="class-box">
      <span>全部</span>
      <span>好评</span>
      <span>差评</span>
      <span>有图评价</span>
    </div>
    <ul class="eva-box">
      <li class="eva-list">
        <img
          src="https://img.meituan.net/avatar/6bfdbb0e522217d27ba51b69a8a89a4212210.jpg"
          alt=""
        />
        <div class="eva-info">
          <div class="user-info">
            <div class="user-name">匿名用户</div>
            <div class="eva-time">2020-11-07</div>
          </div>
          <div class="del-time">37分钟送达</div>
          <div class="eva-content">
            挺好吃的，包装好，给的丸子都是好丸子#麻辣烫套餐15自选10种#
          </div>
        </div>
      </li>
            <li class="eva-list">
        <img
          src="https://img.meituan.net/avatar/6bfdbb0e522217d27ba51b69a8a89a4212210.jpg"
          alt=""
        />
        <div class="eva-info">
          <div class="user-info">
            <div class="user-name">匿名用户</div>
            <div class="eva-time">2020-11-07</div>
          </div>
          <div class="del-time">37分钟送达</div>
          <div class="eva-content">
            挺好吃的，包装好，给的丸子都是好丸子#麻辣烫套餐15自选10种#
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['list'],
};
</script>

<style lang="scss" scoped>
.class-box {
  padding: 0.3rem 0.28rem 0.1rem 0.28rem;
  border-top: 0.2rem solid #f4f4f4;
  border-bottom: 0.02rem solid #e4e4e4;
  color: #666;
  span {
    display: inline-block;
    vertical-align: middle;
    padding: 0 0.24rem;
    height: 0.52rem;
    line-height: 0.54rem;
    margin: 0 10px 10px 0;
    font-size: 13px;
    text-align: center;
    border: solid 1px #bbb;
    border-radius: 0.52rem;
  }
}
.eva-box {
  padding-left: 0.3rem;
  .eva-list {
    display: flex;
    padding: 0.3rem 0.3rem 0.2rem 0;
    img {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: 0.2rem;
      border-radius: 50%;
    }
    .eva-info {
      flex: 1;
      .user-info {
        line-height: 0.3rem;
        display: flex;
        justify-content: space-between;
        .user-name {
          color: #2f2f2f;
          font-size: 16px;
        }
        .eva-time {
          font-size: 12px;
          color: #898989;
        }
      }
      .del-time {
        margin-top: 0.14rem;
        line-height: 0.24rem;
        color: #666;
        font-size: 0.24rem;
      }
      .eva-content {
        font-size: 0.28rem;
        line-height: 0.4rem;
        color: #2f2f2f;
        padding-top: 0.28rem;
        padding-bottom: 0.04rem;
      }
    }
  }
}
</style>