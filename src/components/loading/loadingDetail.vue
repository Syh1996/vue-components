<template>
  <div
    :class="['detail', customClass]"
    v-show="show"
    :style="{
      backgroundColor: hasBackground ? backgroundColor : 'transparent',
    }"
  >
    <!--  加载动画1，线性缩放收缩动画 -->
    <div class="linerGradentScale" v-if="type === 'linerGradentScale'">
      <div
        v-for="item in 5"
        :key="item"
        :style="{ backgroundColor: barBackground }"
      ></div>
    </div>

    <!-- 加载动画2，环形旋转动画 -->
    <div class="circleRotate" v-if="type === 'circleRotate'">
      <div class="fillCrcile"></div>
    </div>

    <!-- 加载动画3，正方形拆开动画 -->
    <div class="squearSplit" v-if="type === 'squearSplit'">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- 加载动画4，圆形交换动画 -->
    <div class="positionChange" v-if="type === 'positionChange'"></div>

    <!--菱形旋转动画-->
    <div class="diamondRotate" v-if="type === 'diamondRotate'">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!--以下为其它动画-->
    <div :class="['othorAni',type]" v-if="/animation\-\d/.test(type)">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>
    <p class="loading-text" v-if="showText">{{loadingText}}</p>
  </div>
</template>

<script>
export default {
  name: "detail",
  props: {
    //动画类型
    type: {
      type: String,
    },
    //是否显示
    show: {
      type: Boolean,
    },
    //线性渐变时的柱状条颜色
    barBackground: {
      type: String,
      default: "#5a81ff",
    },
    //是否有背景透明度填充
    hasBackground: {
      type: Boolean,
      default: true,
    },
    //背景颜色
    backgroundColor: {
      type: String,
      default: "rgba(255,255,255,.8)",
    },
    //自定义class
    customClass: {
      type: String,
      default: "",
    },
    //loading文字
    loadingText:{
      type:String,
      default:"加载中..."
    },
    //是否展示loadingText
    showText:{
      type:Boolean,
      default:false
    }
  },
};
</script>

<style scoped lang="less">
@import "../../assets/less/loadingDetail.less";
</style>