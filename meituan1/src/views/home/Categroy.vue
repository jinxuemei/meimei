<template>
  <div>
    <ul class="cate-box">
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
    axios
      .get("http://admin.gxxmglzx.com/tender/test/get_type")
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
  display: flex;
  flex-wrap: wrap;
  .cate-list {
    width: 44px;
    text-align: center;
    color: #333;
    font-size: 11px;
    margin: 15px 0 5px;
    img {
      width: 44px;
      height: 44px;
      margin-top: 14px;
    }
  }
}
</style>