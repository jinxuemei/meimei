<template>
  <div class="score">
    <div class="s-mer">
      <div>6.9</div>
      <div >商家评分</div>
    </div>
    <div class="s-other">
      <div>口味 4.6</div>
      <div>包装 4.6</div>
    </div>
    <div class="s-delivery">
      <div></div>
      <div>配送评分</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.score {
  display: flex;
  margin-bottom: 0.2rem;
  padding: 0.3rem 0;
  .s-mer {
    padding: 0 6%;
    flex: 0 0 auto;
    height:1rem;
    width: 0.96rem;
    text-align: center;
    
  }
}
</style>