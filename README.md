# 说明文档

### 重要提示

方法集成仍在开发中，已有功能不受影响，后续将持续扩展其它功能

### 安装

``````
npm i s-vue-components -S
``````

***项目基于vue.3x，不适用于vue3.x以下的版本***

### 使用

``````js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
+ import sVueComponents from 's-vue-components';
+ import 's-vue-components/dist/app.css';
createApp(App).use(router).use(sVueComponents).mount('#app')

``````

### Loading加载时动画

新增11种全新加载时的动画，效果预览请点击：[http://vuedocs.yuhongshao.cn/](http://vuedocs.yuhongshao.cn/)

``````html
 <s-Loading
        :type="item"
        :show="true"
        :hasBackground="true"
        customClass="custom-class"
      >
       <你的组件></你的组件>
 </s-Loading>
``````

配置参数说明

| 参数            | 说明                                                         | 备注                     |
| --------------- | ------------------------------------------------------------ | ------------------------ |
| type            | String类型<br/><br/>动画类型可选<br/>      "linerGradentScale",<br/>      "circleRotate",<br/>      "squearSplit",<br/>      "positionChange",<br/>      "diamondRotate",<br/>      "animation-1",<br/>      "animation-2",<br/>      "animation-3",<br/>      "animation-4",<br/>      "animation-5",<br/>      "animation-6",<br/>      "animation-7",<br/>      "animation-8",<br/>    其中一种，详情请根据效果预览选择适应项目的加载动画 | 详见效果预览链接         |
| show            | boolean类型<br>控制加载显示与隐藏                            |                          |
| hasBackground   | boolean类型<br/>是否有背景遮罩                               | 默认为true               |
| customClass     | string类型<br>自定义class名                                  |                          |
| backgroundColor | string类型<br>当hasBackground=true时，可配置背景遮罩颜色     | 默认rgba(255,255,255,.8) |
| barBackground   | string类型<br>当type=linerGradentScale时，可配置动画块背景颜色，type=其它时无效 |                          |
| loadingText     | string类型<br>加载动画显示的文字                             | 默认 加载中...           |
| showText        | boolean类型<br>是否显示加载中...文字                         | 默认  false              |

### 其它

工作原因，刚刚开始总结封装，后续会慢慢增长功能中

如果你有好的建议可以与我email->[1045749725@qq.com](mailto:1045749725@qq.com)

