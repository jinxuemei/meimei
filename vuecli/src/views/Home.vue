<template>
    <div>
        
        {{
            $store.state.count
        }}
        <h2>靳雪梅</h2>
        <router-link to="/home/aa">A</router-link>
        |
        <router-link to="/home/bb">B</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>