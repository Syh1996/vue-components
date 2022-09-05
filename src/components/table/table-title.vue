<template>
   <section class="table-title">
       <h3 :style="{borderColor: themeColor}"><span :style="{backgroundColor: themeColor}" class="line"></span>{{title}}</h3>
   </section>
</template>

<script>
import { watchEffect } from 'vue';
export default {
     name:'tableTitle',
     props:{
        title:{
            type:String,
            default: '查询'
        },
        themeColor:{
            type:String,
            default: '#2c75ec'
        }
     },
     setup(){
     }
}
</script>

<style scoped lang="less">
@import '@/assets/less/table-title.less';
</style>