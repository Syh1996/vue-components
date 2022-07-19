<template>
    <div class="count">
          <el-button  @click="setVal(-1)"  type="primary">-</el-button>
          <span class="val">当前值:{{countVal}} </span>
           <el-button @click="setVal(1)"   type="primary">+</el-button>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name:'count',
    setup(){
        const countVal = ref(100);
        const setVal = val=>{
            countVal.value +=val;
        }
        return {
            countVal,
            setVal
        }
    }
}
</script>

<style scoped lang="less">
.count{
    display: inline-block;
    background-color: #ccc;
    .val{
        color: red;
        margin: 0 10px;
    }
}
</style>