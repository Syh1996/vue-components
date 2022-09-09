<template>
  <section class="table-components">
    <div class="batch-handle" v-if="$slots['batchHandle']">
       <slot name="batchHandle" :data="selectTr.value"></slot>
    </div>
    <el-table
      :data="tableData"
      :border="tableGlobalConfig.border === true"
      :stripe="tableGlobalConfig.stripe === true"
      :row-class-name="(row) => tableGlobalConfig.rowClassName(row)"
      :max-height="tableGlobalConfig.maxHeight"
      :table-layout="tableGlobalConfig.tableLayout"
      :cell-class-name="tableGlobalConfig.cellClassName"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        v-if="tableGlobalConfig.selection"
      />
      <el-table-column
        type="index"
        label="序号"
        :index="tableGlobalConfig.indexMethod"
        v-if="tableGlobalConfig.showIndex"
        width="80"
      />
      <el-table-column
        :label="item.title"
        v-for="item in tableColumnConfig"
        :key="item"
        :width="item.width || 'auto'"
        :fixed="item.fixed || false"
        :sortable="item.sortable || false"
      >
        <template #default="scope">
          <div v-if="item.key !== 'handle'">
            <div v-if="$slots[item.key]">
              <slot :name="item.key" :data="scope.row"></slot>
            </div>
            <p v-else>{{ scope.row[item.key] }}</p>
          </div>
          <div v-else>
            <slot name="handle" :row="scope.row"></slot>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "tableComponents",
  props: {
    tableData: {
      type: Array,
      default: [],
    },
    tableColumnConfig: {
      type: Object,
      default: {},
    },
    tableConfig: {
      type: Object,
      default: {},
    },
  },
  setup(props, context) {
    let tableGlobalConfig = reactive(props.tableConfig);
    //选择的表行
    let selectTr = reactive({value:[]});
    //初始表单配置默认值
    const initTableGlobalConfig = () => {
      tableGlobalConfig = {
        border: false,
        stripe: false,
        showIndex: true,
        rowClassName: () => {
          return "custorm-row";
        },
        indexMethod: (index) => {
          return index + 1;
        },
        cellClassName: () => {
          return "custorm-row";
        },
        maxHeight: "auto",
        selection: true,
        tableLayout: "fixed",
        ...tableGlobalConfig,
      };
    };
    initTableGlobalConfig();
    //表格选择
    const handleSelectionChange = (val) => {
      selectTr.value  = val;
      context.emit("getSelectRow", val);
    };

    return {
      tableGlobalConfig,
      selectTr,
      handleSelectionChange,
    };
  },
};
</script>

<style scoped lang="less">
.table-components{
  .batch-handle{
    margin-bottom: 15px;
    text-align: right;
  }
}
</style>