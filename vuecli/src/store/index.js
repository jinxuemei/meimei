import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  //存储状态 其他组件都可以取数据
  state: {
    count:0,
    list:[]
  },
  mutations: {
    //同步请求
    // 修改state中list
    addList(state, arr) {
      state.list = arr;
    }
  },
  actions: {
    getMovieList({commit}){
      console.log("调用了");
      //异步请求
      axios.get('https://bird.ioliu.cn/v1?url=https://frodo.douban.com/api/v2/subject_collection/movie_showing/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a')
      .then((res) =>{
        console.log(res.data.subject_collection_items);
        commit('addList',res.data.subject_collection_itemss)
      }).catch((error)=>{
        console.log(error);
      })
    }
  },
  modules: {
  }
})
