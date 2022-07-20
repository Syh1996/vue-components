<template>
   <div class="loading-box">
        <slot></slot>
        <LoadingDetail v-bind="$attrs"></LoadingDetail>
   </div>
</template>

<script>
import LoadingDetail from './loadingDetail';
export default {
    name:'s-Loading',
    components:{
        LoadingDetail
    }
}
</script>

<style scoped lang="less">
.loading-box{
    position: relative;
    overflow: hidden;
}
</style>