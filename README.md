# 说明文档

### 重要提示

项目基于日常开发过程中出现频率最多的功能

方法集成仍在开发中，已有功能不受影响，后续将持续扩展其它功能

暂不支持国际化

基于vue3，vue2无法使用

开发基于element-plus，使用前请安装element-plus，参考：https://element-plus.gitee.io/zh-CN/guide/quickstart.html

项目图标基于@element-plus/icons-vue，使用前请安装 ，否则会导致图标无法展示，参考：https://element-plus.gitee.io/zh-CN/component/icon.html#%E4%BD%BF%E7%94%A8%E5%9B%BE%E6%A0%87

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





### 标题封装

   ``````html
   <table-title title="查询" themeColor="red"></table-title>
   ``````
| 参数       | 说明       | 默认值   |
| ---------- | ---------- | -------- |
| title      | 展示的文字 | 查询     |
| themeColor | 主题颜色   | \#2c75ec |

**效果图**

![http://server.yuhongshao.cn/static/yuhongshao/20220909144501.png](http://server.yuhongshao.cn/static/yuhongshao/20220909144501.png)





### 表格封装

``````html
    <table-components
      :tableConfig="tableConfig"
      :tableData="tableData"
      :tableColumnConfig="tableColumnConfig"
      @getSelectRow="getSelectRow"
    >
        <!-- 表格头部操作栏  slotName不可变 -->
        <template #batchHandle="{data}">
            <el-button type="danger" @click="deleteItem(data)">批量删除</el-button>
        </template>
        
        <!-- 自定义时间  -->
         <template #date="{data}">
           <p @click="showData(data)">{{data.date.replaceAll('-','/')}}</p>
        </template>
        
        <!-- 操作栏按钮slot  -->
        <template #handle="data">
            <el-button type="danger" @click="deleteItem(data)">删除</el-button>
            <el-button type="danger" @click="edit(data)">编辑</el-button>
        </template>
        
  </table-components>

<script>
  setup(){
    //表格列配置
    // 相关属性与element-plus一致，请参考element-plus
    const tableColumnConfig = {
      date: { title: "日期", key: "date" },
      name: { title: "姓名", key: "name", sortable: true },
      address: { title: "地址", key: "address", width: 300 },
      handle: { title: "操作", key: "handle", fixed: "right", width: 120 },
    };
   //表格样式全局配置   
   const tableConfig = {
      border: true,       //是否带有纵向边框   默认false
      stripe: true,	      // 是否为斑马纹 table   默认false
      maxHeight: 400,     //Table 的最大高度。 合法的值为数字或者单位为 px 的高度。
      selection: false,   // 是否有选中框   默认true
      tableLayout: "fixed", //设置表格单元、行和列的布局方式    fixed / auto   默认auto
      rowClassName: (row) => {   // 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。
        return "shao";
      },					 
      indexMethod: (index) => {
        return "->" + index * 2;   //序号方法，默认1,2,3排序 
      },
      cellClassName: (row) => {
        //console.log(row);       // 单元格自定义class名,row为当前行详细信息
      },
      showIndex: true,	   // 是否展示序号
    };
      
     //表格数据
      const tableData = reactive([
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ]);
      
      
     return {
         tableData,
         tableColumnConfig
     }
  }
   
</script>
``````



**效果图**

![http://server.yuhongshao.cn/static/yuhongshao/20220909160349.png](http://server.yuhongshao.cn/static/yuhongshao/20220909160349.png)





### 分页封装

``````html
 <pagination :config="config" @getPaginationData="getPaginationData">
 </pagination>
``````
| 参数               | 说明                         | 默认值                                                     |
| ------------------ | ---------------------------- | ---------------------------------------------------------- |
| config.currentPage | 当前页                       | Number型，默认值：1                                        |
| config.pageSize    | 分页展示的数量               | Number型，默认值：10                                       |
| config.pageSizes   | 每页显示个数选择器的选项设置 | Number[]型，默认值：[10, 20, 30, 50, 100]                  |
| config.total       | 数据总数                     | Number型，默认值：0                                        |
| config.small       | 是否使用小型分页样式         | Boolean型，默认值：false                                   |
| config.background  | 是否为分页按钮添加背景色     | Boolean型，默认值：true                                    |
| config.disabled    | 是否禁用分页                 | Boolean型，默认值：false                                   |
| config.layout      | 组件布局，子组件名用逗号分隔 | String型，默认值："total, prev, pager, next,sizes, jumper" |
| config.align       | 分页组件对齐方式             | String型，默认值“right"，支持"left/center/right"           |



| 方法               | 说明                       | 返回参数                     |
| ------------------ | -------------------------- | ---------------------------- |
| @getPaginationData | 分页数量、当前页变化时触发 | ({currentPage,pageSize})=>{} |

**效果图**

![http://server.yuhongshao.cn/static/yuhongshao/20220909154254.png](http://server.yuhongshao.cn/static/yuhongshao/20220909154254.png)





**提示**

分页组件已内部有初始值，如果与效果图无区别，config参数可以不传，不传时使用默认配置。

如果某个功能有区别，可传入部分参数即可，无需传入全部参数

如

``````html
 <pagination :config="{align:'center',total:1000}" @getPaginationData="getPaginationData">
 </pagination>
``````

![http://server.yuhongshao.cn/static/yuhongshao/20220909153922.png](http://server.yuhongshao.cn/static/yuhongshao/20220909153922.png)

> 所有参数均按照element-plus驼峰命名，详细请参考： https://element-plus.gitee.io/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7





### 搜索功能

**效果**

![http://server.yuhongshao.cn/static/yuhongshao/20220909165442.png](http://server.yuhongshao.cn/static/yuhongshao/20220909165442.png)



**参数**

| 参数          | 说明                                              | 备注                                                         |
| ------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| label         | 展示label                                         |                                                              |
| textAlign     | 展示label对齐方式                                 | 可选['left','center','right']                                |
| labelWidth    | 展示label文字的宽度                               | Number类型，默认100                                          |
| key           | 绑定的值字段  即v-model=""                        | 必填                                                         |
| type          | 组件类型                                          | input/select/selectAsync/radio/checkbox/date/dateRange/dateTime/dateTimeRange |
| options       | type='select'时，列表配置                         | options: [<br/>      { label: "男", value: "1" },<br/>      { label: "女", value: "2" },<br/>    ] |
| remoteMethod  | type="select/selectAsync"时，远程调接口动态搜索   | 函数需要返回值<br>(formList, index, text) =>{<br>   formList:是当前配置列表<br>   index当前 配置项的下标<br>   text当前输入的值<br>} |
| span          | 布局与el-row>el-col :span相同                     | 可选[1-24]，如8时，表示一行展示3列                           |
| placeholder   | placeholder提示信息                               |                                                              |
| clearable     | 是否展示清除按钮                                  | Boolean类型，默认true                                        |
| multiple      | type="select/selectAsync"时，是否可以多选列表     | Boolean类型，默认false                                       |
| collapseTags  | type="select/selectAsync"且多选时，多选项是否折叠 | 参考：https://element-plus.gitee.io/zh-CN/component/select.html#select-%E5%B1%9E%E6%80%A7 |
| loadApi       | type="selectAsync"时，可调用接口获取列表          | 当数据列表来源于后台接口时，配置loadApi，底层将自动调用，并为options赋值 |
| rangSeparator | type="dateRange/dateTimeRange"时,分割符           | 默认'-'                                                      |


**方法**
| 方法     | 说明                           | 备注                                                         |
| -------- | ------------------------------ | ------------------------------------------------------------ |
| onChange | onChange(formList,index,value) | (formList, index, text) =>{<br/>   formList:是当前配置列表<br/>   index当前 配置项的下标<br/>   text当前输入的值<br/>} |
| onBlur   | onBlur(formList,index,value)   | (formList, index, text) =>{<br/>   formList:是当前配置列表<br/>   index当前 配置项的下标<br/>   text当前输入的值<br/>} |
| onFocus  | onFocus(formList,index,value)  | (formList, index, text) =>{<br/>   formList:是当前配置列表<br/>   index当前 配置项的下标<br/>   text当前输入的值<br/>} |

``````html
<formItemGroup :formConfig="formConfig" ref="formItemGroup">
     <!-- 操作栏slot -->
      <div class="handle-btn">
        <el-button icon="RefreshLeft" @click="reset">重置</el-button>
        <el-button type="primary" icon="Search" @click="search">查询</el-button>
      </div>
</formItemGroup>

<script>
const defaultFormList = [
  {
    label: "用户名",
    key: "user",
    type: "input",
    placeholder: "请输入啊~~~",
    clearable: true,
    span: 16,
  },
  {
    label: "性别",
    key: "sex",
    textAlign: 'center',
    type: "select",
    options: [
      { label: "男", value: "1" },
      { label: "女", value: "2" },
    ],
    remoteMethod: async (formList, index, text) => {
      formList[index].loading = true;
      let result = [];
      if(text){
         result = await new Promise((resolve) => {
          setTimeout(() => {
            const arr = [];
            for (let i = 1; i < 10; i++) {
              arr.push({
                label: `${text}-${i}`,
                value: `${text}-${i}`
              });
            }
            resolve(arr);
          }, 2000);
        });
      }
      formList[index].options = result ;
      formList[index].loading = false;
    }
  },
  {
    label: "远程搜索列表1",
    key: "asyncList",
    type: "selectAsync",
    multiple:true, 
    collapseTags: true,
    labelWidth: 140,
    textAlign: 'left',
    loadApi: async () => {
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          const arr = [];
          for (let i = 1; i < 10; i++) {
            arr.push({
              label: "列表" + i,
              value: "结果" + i,
            });
          }
          resolve(arr);
        }, 2000);
      });

      return result;
    },
  },

  {
    label: "学校单选",
    key: "school",
    type: "radio",
    options: [
      { label: "重庆师范大学", value: "重庆师范大学" },
      { label: "重庆大学", value: "重庆大学" },
      { label: "重庆医科大学", value: "重庆医科大学" },
    ],
    span: 16,
  },
  {
    label: "学校多选",
    key: "school2",
    type: "checkbox",
    options: [
      { label: "重庆师范大学", value: "重庆师范大学" },
      { label: "重庆大学", value: "重庆大学" },
      { label: "重庆医科大学", value: "重庆医科大学" },
    ],
    span: 16,
  },
  {
    label: "日期",
    key: "date",
    type: "date",
    placeholder: "请输入啊~~~",
    clearable: true,
  },
  {
    label: "日期范围",
    key: "daterange",
    type: "dateRange",
    placeholder: "请输入啊~~~",
    clearable: true,
    rangSeparator: "至",
  },
  {
    label: "时间",
    key: "time",
    type: "dateTime",
    placeholder: "请输入啊~~~",
    clearable: true,
  },
  {
    label: "时间范围",
    key: "dateTimeRange2",
    type: "dateTimeRange",
    placeholder: "请输入啊~~~",
    clearable: true,
    span: 16,
  },
  {
    label: "学历",
    key: "xueli",
    type: "input",

    clearable: true,
    value: "",
  },
];
</script>
``````





#### 常见问题

* 如何清除、联动列表?

  ``````html
  <script>
    const defaultFormList = [{
      label: "学校单选",
      key: "school",
      type: "radio",
      options: [
        { label: "重庆师范大学", value: "重庆师范大学" },
        { label: "重庆大学", value: "重庆大学" },
        { label: "重庆医科大学", value: "重庆医科大学" },
      ],
      span: 16,
      onChange:(formList,index,value)=>{
         formList = formList.map(item=>{
              if(item.key === 'curSchool'){
                   item.value = value
              }
         }) 
      }
    },
      {
      label: "当前学校",
      key: "cuSchool",
      type: "input",
      clearable: true,
    },                       
                            ]
  </script>
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

| 参数            | 说明                                                         | 备注                                     |
| --------------- | ------------------------------------------------------------ | ---------------------------------------- |
| type            | String类型<br/><br/>动画类型可选<br/>      "linerGradentScale",<br/>      "circleRotate",<br/>      "squearSplit",<br/>      "positionChange",<br/>      "diamondRotate",<br/>      "animation-1",<br/>      "animation-2",<br/>      "animation-3",<br/>      "animation-4",<br/>      "animation-5",<br/>      "animation-6",<br/>      "animation-7",<br/>      "animation-8",<br/>    其中一种，详情请根据效果预览选择适应项目的加载动画 | 详见效果预览链接                         |
| show            | boolean类型<br>控制加载显示与隐藏                            | Boolean型                                |
| hasBackground   | boolean类型<br/>是否有背景遮罩                               | 默认为true                               |
| customClass     | string类型<br>自定义class名                                  | String型                                 |
| backgroundColor | string类型<br>当hasBackground=true时，可配置背景遮罩颜色     | String型，默认值："rgba(255,255,255,.8)" |
| barBackground   | string类型<br>当type=linerGradentScale时，可配置动画块背景颜色，type=其它时无效 | String型                                 |
| loadingText     | string类型<br>加载动画显示的文字                             | String型，默认值： 加载中...             |
| showText        | boolean类型<br>是否显示加载中...文字                         | Boolean型，默认值：  false               |

### 其它

工作原因，刚刚开始总结封装，后续会慢慢增长功能中

如果你有好的建议可以与我email->[1045749725@qq.com](mailto:1045749725@qq.com)

使用过程中，如果当前项目已经批量使用，因需求变更，无法扩展时，可与我联系，我将尽量扩展支持

