<template>
  <!-- <Count /> -->
  <h2>标题类<span class="toggle-btn" @click="toggleChange">+</span></h2>
  <div class="toggle-box">
    <tableTitle themeColor="blue" title="结果"></tableTitle>
    <tableTitle themeColor="orange" title="查询条件"></tableTitle>
    <tableTitle title="标题"></tableTitle>
  </div>
  <h2>表单类<span class="toggle-btn" @click="toggleChange">+</span></h2>
  <div class="toggle-box">
    <formItemGroup :formConfig="formConfig" ref="formItemGroup">
      <div class="handle-btn">
        <el-button icon="RefreshLeft" @click="reset">重置</el-button>
        <el-button type="primary" icon="Search" @click="search">查询</el-button>
        
      </div>
    </formItemGroup>
  </div>


  <h2>表格类<span class="toggle-btn" @click="toggleChange">+</span></h2>
  <div class="toggle-box">
    <tableComponents :tableConfig="tableConfig" :tableData="tableData2" :tableColumnConfig="tableColumnConfig" @getSelectRow="getSelectRow">
         <template #batchHandle="{data}">
            <el-button type="danger" @click="deleteItem(data)">批量删除</el-button>
        </template>
         <template #date="{data}">
           <p @click="showData(data)">{{data.date.replaceAll('-','/')}}</p>
        </template>
        <template #handle="data">
            <el-button type="danger" @click="deleteItem(data)">删除</el-button>
        </template>

    </tableComponents>
  </div>

 <h2>分页类<span class="toggle-btn" @click="toggleChange">+</span></h2>
  <div class="toggle-box">
      <Pagination  @getPaginationData="getPaginationData"></Pagination>
  </div>


  <h2>Loading动画类<span class="toggle-btn" @click="toggleChange">+</span></h2>
  <div class="toggle-box">
    <!--     <pre>
    /**
      *  参数说明：
      *  type            动画类型，参考以下动画类型
      *  show            控制动画显示与隐藏
      *  hasBackground   是否有背景遮罩  默认为true
      *  backgroundColor 自定义背景遮罩 支持16进制颜色 rgba rgb 英文单词  默认rgba(255,255,255,.8)
      *  customClass     指定组件的class名称
    **/

    &lt;Loading
      :type="item"
      :show="true"
      :hasBackground="true"
      backgroundColor="rgba(255,255,255,.8)"
      customClass="custom-class"&gt;
      
      &lt;你的组件/&gt;
   
    &lt;/Loading&gt;
  </pre
    > -->
    <section
      class="loading-list"
      v-for="(item, index) in loadings"
      :key="index"
    >
      <h3 :id="item">{{ index + 1 }}.&nbsp;type="{{ item }}"</h3>
      <Loading
        :type="item"
        :show="true"
        :hasBackground="true"
        customClass="custom-class"
        showText
        loadingText="请求中"
      >
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </Loading>
    </section>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import Count from "./components/count";
import Loading from "./components/loading";
import tableTitle from "./components/table/table-title.vue";
import formItemGroup from "./components/table/formItemGroup.vue";
import { defaultFormList } from "./testData.js";
import tableComponents from './components/table/table.vue';
import Pagination from './components/pagination';
export default {
  name: "App",
  components: {
    Count,
    Loading,
    tableTitle,
    formItemGroup,
    tableComponents,
    Pagination
  },
  setup() {
    const tableDataDefault = [
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
    ];
    const tableData = ref(tableDataDefault);
    const loadings = reactive([
      "linerGradentScale",
      "circleRotate",
      "squearSplit",
      "positionChange",
      "diamondRotate",
      "animation-1",
      "animation-2",
      "animation-3",
      "animation-4",
      "animation-5",
      "animation-6",
      "animation-7",
      "animation-8",
    ]);
    const formConfig = reactive(defaultFormList);
    const formItemGroup = ref("");
    const getStyle = (element, attr) => {
      if (element.currentStyle) {
        return element.currentStyle[attr];
      } else {
        return window.getComputedStyle(element)[attr];
      }
    };
    const toggleChange = (e) => {
      const curEle = e.target;
      const nextEle = curEle.parentNode.nextElementSibling;
      const nextEleHeight = getStyle(nextEle, "height");
      nextEle.style.height = nextEleHeight === "0px" ? "auto" : "0px";
    };
    const deleteItem = data=>{
      console.log(data);
    }

    const search = () => {
      const curRef = formItemGroup.value;
      const searchData = curRef.search();
      console.log(searchData);
    };
    const reset = ()=>{
        const curRef = formItemGroup.value;
        curRef.reset();
    }
    const getSelectRow = row=>{
      console.log('当前rows:',row);
    }
    const tableConfig = {
      border:true,
      stripe:true,
      maxHeight:400,
      selection:true,
      tableLayout:'fixed',
      rowClassName:(row)=>{
        return 'shao'
      },
      indexMethod:index=>{
        return '->'+index* 2;
      },
      cellClassName:(row)=>{
        //console.log(row);
      },
      showIndex:true
    }
    const tableColumnConfig = {
      date :{title: '日期',key:'date'},
      name:{title:'姓名',key:'name',sortable:true},
      address:{title:'地址',key:'address',width:300},
      handle:{title:'操作',key:'handle',fixed:'right',width:120}
    }
    const getPaginationData = opt=>{
      console.log(opt);
    }
     const tableData2 = reactive([
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
      loadings,
      toggleChange,
      formConfig,
      formItemGroup,
      search,
      reset,
      tableData2,
      tableColumnConfig,
      tableConfig,
      getSelectRow,
      getPaginationData,
      deleteItem
    };
  },
};
</script>
<style>
@import "@/assets/less/global.less";
</style>
<style scoped lang="less">
.empty-div {
  height: 600px;
  background-color: #a4a4a4;
  width: 600px;

  overflow: hidden;
}
.loading-list {
  margin-top: 20px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  padding: 20px;
}
h2 {
  width: 1200px;
  margin: 0 auto 20px;
  position: relative;
  .toggle-btn {
    font-size: 30px;
    position: absolute;
    right: 10px;
    top: 0px;
    user-select: none;
    cursor: pointer;
    color: cadetblue;
  }
}
pre {
  background-color: #ddd;
  padding: 20px;
  color: #333;
  font-size: 20px;

  box-sizing: border-box;
}
.toggle-box {
  width: 1200px;
  margin: 0 auto;
  transition: all 0.5s;
  overflow: hidden;
}
</style>

