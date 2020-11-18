<template>
  <div class="or-container">
    <!-- 左侧 -->
    <div class="nav-box">
      <ul>
        <li
          :class="{ active: index == currentIndex, 'cate-list': true }"
          v-for="(obj, index) in nav"
          :key="obj.id"
          @click="select(index)"
        >
          {{ obj.name }}
        </li>
      </ul>
    </div>
    <div class="pro-box">
      <div>
        <div class="prod-cate-list" v-for="(obj, typeIndex) in goods" :key="typeIndex">
          <h2>{{ obj.name }}</h2>
          <ul>
            <li class="prod-list" v-for="(prod,index) in obj.content" :key="prod.id">
              <img class="prod-img" :src="prod.img" alt="" />
              <div>
                <p>{{ prod.name }}</p>
                <p>{{ prod.price }}</p>
              </div>
              <div class="add-cart">
                <span class="iconfont icon-jianhao" v-if="prod.count>0" @click="$store.commit('minus',{typeIndex,index})"></span>
                <span class="num" v-if="prod.count>0">{{prod.count}}</span>
                <span class="iconfont icon-jiahao" @click="$store.commit('add',{typeIndex,index})"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      nav: [],
      goods: [],
      currentIndex: 0,
      scrollY: 0,
      pod: [],
    };
  },

  methods: {
    select(index) {
      let prodCatelist = document.getElementsByClassName("prod-cate-list");
      this.proScroll.scrollToElement(prodCatelist[index], 300);
      this.currentIndex = index;
    },
    getPos() {
      let prodCatelist = document.getElementsByClassName("prod-cate-list");
      let H = 0;
      for (let i = 0; i < prodCatelist.length; i++) {
        if (i == 0) {
          this.pod.push(0);
        } else {
          H += prodCatelist[i - 1].offsetHeight;
          this.pod.push(H);
        }
      }
      // console.log(this.pod);
    },
  },
  created() {
    axios
      .get(
        `http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`
      )
      .then((res) => {
        // console.log(res.data.data);
        this.nav = res.data.data.nav;
        this.goods = res.data.data.goods;

        //vuex存储数据
        this.$store.commit('save',this.goods);

        //等待DOM更新以后执行回调函数
        this.$nextTick(() => {
          this.navScroll = new BetterScroll(".nav-box", {
            click: true,
            bounce: false,
          });
          this.proScroll = new BetterScroll(".pro-box", {
            click: true,
            bounce: false,
            probeType: 3,
          });
          this.proScroll.on("scroll", (position) => {
            // console.log(position.x,position.y);
            this.scrollY = Math.abs(position.y);
            // console.log(this.scrollY);
          });
          this.getPos();
        });
      });
  },
  watch: {
    scrollY(val) {
      // console.log(val);
      let catelist = document.querySelectorAll(".cate-list");
      for (let index = 0; index < this.pod.length; index++) {
        let pos1 = this.pod[index];
        let pos2 = this.pod[index + 1];
        if (val >= pos1 && val < pos2) {
          // console.log(index);
          this.currentIndex = index;
          this.navScroll.scrollToElement(catelist[index], 300);
          break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.or-container {
  display: flex;
  padding-bottom: 50px;
  .nav-box {
    height: calc(100vh - 94px);
    flex: 1;
    li {
      padding: 0.18rem 0.24rem 0.44rem;
      background: #f5f5f5;
      &.active {
        color: red;
      }
    }
  }
  .pro-box {
    height: calc(100vh - 94px);
    flex: 3;
    .prod-list {
      display: flex;
      position: relative;
      padding-bottom: 0.4rem;
      .prod-img {
        width: 1.5rem;
      }
      p {
        flex: 1;
      }
      .add-cart{
        position: absolute;
        right: 0.2rem;
        bottom: 0;
        .icon-jianhao{
          color: #e2e3e5;
          font-size: 24px;
          vertical-align: middle;
        }
        .icon-jiahao{
          color: #ffbd27;
          font-size: 24px;
          vertical-align: middle;
        }
        .num{
          vertical-align: middle;
           margin:0 0.1rem;
        }
      }
    }
  }
}
</style>