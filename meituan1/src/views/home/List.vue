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
            <div class="si-minute">{{ obj.minute }}分钟</div>
          </div>
          <!-- <div class="info-num"></div> -->
        </div>
      </li>
    </ul>
    <img class="loading" v-show="isShow" src="@/assets/images/loading.gif" alt="">
  </div>
</template>

<script>
import axios from "axios";
import Star from "@/components/Star";
export default {
  data() {
    return {
      List: [],
      pageNum:0,
      isShow:true,
      isFinished:false
    };
  },
  components: {
    Star,
  },
  methods:{
    getData(){
      axios.get("http://admin.gxxmglzx.com/tender/test/get_store?current="+this.pageNum+"&size=10")
      .then((res) => {
        // console.log(res);

        this.List = [...this.List,...res.data.data.list];
        this.pageNum++;
        this.isShow=false;
        if(this.list.length == res.data.data.total){
          this.isFinished = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  created() {
    this.getData()

    window.onscroll = ()=>{

      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      // console.log(scrollTop,clientHeight,scrollHeight);
      if((Math.ceil(scrollTop)+clientHeight==scrollHeight)&& !this.isFinished ){
        this.isShow=true;
        this.getData()
      }
    }
  }
  
}
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

          // .sins-num{
          //   margin-left: 10px;
          // }
        }
        .si-minute{
          flex: 1;
        }
      }
    }
  }
}
.loading{
  position: fixed;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  width:1.4rem;
  height:1.4rem;
}

</style>