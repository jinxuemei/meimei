<template>
  <div>
    <ul class="cate-box">
      <!--绑定数组 v-for -->
      <li class="cate-list" v-for="obj in cateList" :key="obj.id">
        <img :src="obj.img" alt="" />
        <p>{{ obj.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cateList: [],
    };
  },
  created() {
    axios.get("http://admin.gxxmglzx.com/tender/test/get_type")//请求
      .then((res) => {
        console.log(res.data);
        let result = res.data;
        if (result.errcode == 200) {
          this.cateList = result.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.cate-box {
  display: flex;//父元素flex，子元素的宽度不固定% or rem  弹性盒模型的样式一般在父元素设置
  flex-wrap: wrap;  //换行 默认不换行
  .cate-list {
    width: 20%;
    text-align: center;
    color: #333;
    font-size: 11px;
    margin-top: 0.3rem;;
    img {
      width: 62%;
      height: 62%;
      // margin-top: 14px;
    }
  }
}
</style>