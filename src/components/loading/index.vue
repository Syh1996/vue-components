<template>
   <div class="loading-box" ref="loadingBox">
      
        <slot></slot>
        <LoadingDetail v-bind="$attrs"></LoadingDetail>
   </div>
</template>

<script>
import { onMounted,ref } from '@vue/runtime-core';
import LoadingDetail from './loadingDetail';
export default {
    name:'s-Loading',
    components:{
        LoadingDetail
    },
    setup(){
        const loadingBox = ref();
        const getStyle = (ele,attr)=>{
            if(ele.currentStyle){
                return ele.currentStyle[attr];
            }else{
                return window.getComputedStyle(ele)[attr];
            }
        }
        onMounted(()=>{
            const chlidNodes = loadingBox.value.children[0];
            const loading =  loadingBox.value.children[1];
            loading.style.width = getStyle(chlidNodes,'width')
        });
        return {
            loadingBox
        }
    }
}
</script>

<style scoped lang="less">
.loading-box{
    position: relative;
    overflow: hidden;
}
</style>