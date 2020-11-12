<template>
  <div class="score">
    <div class="s-mer">
      <div class="sm-num">{{list.delivery}}</div>
      <div class="s-name">商家评分</div>
    </div>
    <div class="s-other">
      <div class="so-taste">口味 <Star :num=list.flavor></Star> <div>{{list.flavor}}</div> </div>
      <div class="so-pack">包装 <Star :num=list.packing></Star><div>{{list.packing}}</div></div>
    </div>
    <div class="s-delivery">
      <div class="sd-num">{{list.score}}</div>
      <div class="s-name">配送评分</div>
    </div>
  </div>
</template>

<script>
import Star from '@/components/Star.vue'
export default {
  props:['list'],
  components:{
    Star,
  }

};
</script>

<style lang="scss" scoped>
.score {
  display: flex;
  margin-bottom: 0.2rem;
  padding: 0.3rem 0;
  .s-mer,
  .s-other,
  .s-delivery {
    padding: 0 6%;
    flex: 0 0 auto;
    height: 1rem;
    width: 0.96rem;
    
    .s-name {
      font-size: 12px;
      color: #999;
    }
  }
  .s-mer {
    text-align: center;
    .sm-num {
      font-size: 27px;
      height: 0.6rem;
      line-height: 0.6rem;
      color: #ffb000;
    }
  }
  .s-other{
        flex: 1 1 auto;
        padding-left: 0;
        font-size: 11px;
        .so-taste{
          display: flex;
          margin: 3px 0 10px;
        }
        .so-pack{
          display: flex;
        }
  }
  .s-delivery{
    text-align: center;
    .sd-num {
      font-size: 27px;
      height: 0.6rem;
      line-height: 0.6rem;
      color: #999;
    }
  }
}
</style>