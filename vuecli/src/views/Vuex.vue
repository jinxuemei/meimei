<template>
    <div>
        Vuex
        {{
            $store.state.count
        }}
        {{count}}
        <button>++</button>
    </div>
</template>

<script>
   //mapState 映射State状态  ...mapState 打开对象
    import { mapState } from "vuex";
    //计算属性
    export default {
        computed:{
            ...mapState(['count'])
        },

        created(){
            this.$store.dispatch('getMovieList')
        }
    }
</script>

<style lang="scss" scoped>

</style>