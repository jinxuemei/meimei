<template>
  <div id="container">
      <h2>
          黄婉晴
      </h2>
      <p> 别傻了 </p>
      <router-link to="/vuex">vuex</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
#container{
    h2{
        background: greenyellow;
    }
    p{
        background: hotpink;
    }
}
</style>