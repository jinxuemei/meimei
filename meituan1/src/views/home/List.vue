<template>
  <div>
    <ul class="store-box">
      <li class="store-list" v-for="obj in List" :key="obj.id">
        <img class="store-img" :src="obj.img" alt="" />
        <div class="store-info">
          <h2 class="si-name">{{ obj.name }}</h2>
          <div class="si-number">
            <div class="sin-score">
              <Star :num="parseFloat(obj.score)"></Star>
              <span>{{ obj.score }}</span>
              <span class="sins-num">月售{{ obj.num }}+</span>
            </div>
            <div class="si-minute">配送时间：{{ obj.minute }}</div>
          </div>
          <!-- <div class="info-num"></div> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Star from "@/components/Star";
export default {
  data() {
    return {
      List: [],
    };
  },
  components: {
    Star,
  },
  created() {
    axios
      .get("http://admin.gxxmglzx.com/tender/test/get_store?current=0&size=10")
      .then((res) => {
        // console.log(res);
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
    padding: 0 0.2rem;
    margin-bottom: 0.5rem;
    margin-top: 0.2rem;
    display: flex;
    .store-img {
      margin-right: 0.16rem;
      width: 1.52rem;
    }
    .store-info {
      flex: 1;

      .si-name {
        font-size: 16px;
        color: #333;
        line-height: 1.4;
      }

      .si-number {
        font-size: 11px;
        display: flex;
        line-height: 1.4;
        margin-top: 4px;
        .sin-score {
          display: flex;
          .sins-num {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>