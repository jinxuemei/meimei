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
      // console.log(typeIndex,index);
      let prod = state.prodlist[typeIndex].content[index];
      if(prod.count){
        Vue.set(prod,'count',prod.count+1)
      }else{
        Vue.set(prod,'count',1);
      }
    },
    minus(state,{typeIndex,index}){
      // console.log(typeIndex,index);
      let prod = state.prodlist[typeIndex].content[index];
      if(prod.count>1){
        Vue.set(prod,'count',prod.count-1)
      }else{
        Vue.set(prod,'count',0);
      }
    }
  },
  getters:{
    total(state){
      let sum=0;
      state.prodlist.forEach((type)=>{
        // console.log(type);
        type.content.forEach(prod =>{
          if(prod.count > 0){
            sum += prod.count;
          }
        })
      })
      return sum;
    },
    totalPrice(state){
      let sumPrice = 0;
      state.prodlist.forEach((type)=>{
        type.content.forEach(prod =>{
          if(prod.count > 0){
            sumPrice +=prod.count * prod.price;
          }
        })
      })
      return sumPrice;
    }
  },
  actions: {
  },
  modules: {
  }
})
