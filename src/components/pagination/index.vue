<template>
  <section :class="['pagination', custormConfig.align]">
    <el-pagination
      v-model:currentPage="custormConfig.currentPage"
      v-model:page-size="custormConfig.pageSize"
      :page-sizes="custormConfig.sizes"
      :small="custormConfig.small"
      :disabled="custormConfig.disabled"
      :background="custormConfig.background"
      :layout="custormConfig.layout"
      :total="custormConfig.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </section>
</template>

<script>
import { reactive } from "vue";
const defaultConfig = {
  align: "right",
  currentPage: 1,
  pageSize: 10,
  pageSizes: [10, 20, 30, 50, 100],
  total: 0,
  small: false,
  background: true,
  disabled: false,
  layout: "total, prev, pager, next,sizes, jumper",
};
export default {
  name: "pagination",
  props: {
    config: {
      type: Object,
      default: defaultConfig,
    },
  },
  setup({ config },{emit}) {
    const custormConfig = reactive({ ...defaultConfig, ...config });
    const setPagination = { currentPage: 0, pageSize: 10 };
    const handleSizeChange = (val) => {
      setPagination.pageSize = val;
      emit("getPaginationData", setPagination);
    };
    const handleCurrentChange = (val) => {
      setPagination.currentPage = val;
      emit("getPaginationData", setPagination);
    };
    return {
      custormConfig,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style scoped lang="less">
.pagination {
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  &.left {
    .el-pagination {
      float: left;
    }
  }
  &.right {
    .el-pagination {
      float: right;
    }
  }
  /deep/ .el-pagination__sizes{
      margin-left: 20px;
  }
}
</style>