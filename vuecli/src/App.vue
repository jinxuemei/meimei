<template>
  <div id="app">
    <router-view></router-view>
   <!-- jinxiemeisazi
   <test></test> -->
   <router-link to="/home">首页</router-link>
   <router-link to="/test">测试页面</router-link>
  
  </div>
</template>
<script>
// import Test from "./views/Test";
export default {
  // components: {
  //   Test
  // }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
