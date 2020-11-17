import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prodlist:[]
  },
  mutations: {
    save(state,list){
      state.prodlist = list;
    },
    add(state,{typeIndex,index}){
      let prod = state.prodlist[typeIndex].content[index];
      if(prod.count){
        Vue.set(prod,'count',prod.count+1)
      }else{
        Vue.set(prod,'count',1);
      }

    }
  },
  actions: {
  },
  modules: {
  }
})
