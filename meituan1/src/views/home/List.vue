<template>
  <div>
    <ul class="store-box">
      <li class="store-list" v-for="obj in List" :key="obj.id">
        <img class="store-img" :src="obj.img" alt=""/>
        <div class="store-info">
          <h2 class="info-name">{{obj.name}}</h2>
          <div class="">
              <div>评分</div>
              <span>4.9</span>
              <span class="i-num">月售{{obj.num}}+</span>
          </div>
          <!-- <div class="info-num"></div> -->
          <div class="info-minute"> 配送时间：{{obj.minute}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      List: [],
    };
  },
  created() {
    axios
      .get("http://admin.gxxmglzx.com/tender/test/get_store?current=1&size=10")
      .then((res) => {
        console.log(res);
        this.List = res.data.data.list;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.store-box {
 
  .store-list {
    padding:0 0.2rem;
    margin-bottom: 0.5rem;
    margin-top: 0.2rem;
    display: flex;
    .store-img {
        margin-right: 0.16rem;
      width: 1.52rem;
    }
    .store-info{
       flex: 1;
        .info-name{
            font-size: 16px;
            color: #333;
            line-height: 1.4;
        }
        .info-num{
            font-size: 11px;
        }
    }
  }
}
</style>