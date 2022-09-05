<template>
  <section class="form-item-group">
    <el-row :gutter="20">
      <el-col
        :span="item.span || 8"
        v-for="(item, index) in formList"
        :key="index"
      >
        <!-- input-->
        <div
          :class="['input-group', 'custorm-class-' + index]"
          v-if="item.type === 'input'"
        >
          <label :for="'input' + index">{{ item.label }}：</label>
          <div
            class="input-bar"
            :style="{ flex: item.width ? `0 0 ${item.width}px` : 1 }"
          >
            <el-input
              :id="'input' + index"
              v-model="item.value"
              :placeholder="
                item.placeholder ||
                (item.type === 'input' ? '请输入相关信息' : '请选择')
              "
              :clearable="item.clearable || true"
              @change="e=>item.onChange(formList, index,e)"
              @blur="e=>item.onBlur(formList, index,e)"
              @focus="e=>item.onFocus(formList, index,e)"
            />
          </div>
        </div>

        <!--  select -->
        <div
          :class="['input-group', 'custorm-class-' + index]"
          v-if="item.type === 'select'"
        >
          <label :for="'input' + index">{{ item.label }}：</label>
          <div
            class="input-bar"
            :style="{ flex: item.width ? `0 0 ${item.width}px` : 1 }"
          >
            <el-select
              :id="'input' + index"
              v-model="item.value"
              :placeholder="
                item.placeholder || item.type === 'input'
                  ? '请输入相关信息'
                  : '请选择'
              "
              :clearable="item.clearable || true"
              @change="e=>item.onChange(formList, index,e)"
              @blur="e=>item.onBlur(formList, index,e)"
              @focus="e=>item.onFocus(formList, index,e)"
            >
              <el-option
                v-for="opt in item.options"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              />
            </el-select>
          </div>
        </div>

        <!--  selectAsync -->
        <div
          :class="['input-group', 'custorm-class-' + index]"
          v-if="item.type === 'selectAsync'"
        >
          <label :for="'input' + index">{{ item.label }}：</label>
          <div
            class="input-bar"
            :style="{ flex: item.width ? `0 0 ${item.width}px` : 1 }"
          >
            <el-select
              :id="'input' + index"
              v-model="item.value"
              :placeholder="
                item.placeholder || item.type === 'input'
                  ? '请输入相关信息'
                  : '请选择'
              "
              :clearable="item.clearable || true"
              @change="e=>item.onChange(formList, index,e)"
              @blur="e=>item.onBlur(formList, index,e)"
              @focus="e=>item.onFocus(formList, index,e)"
            >
              <el-option
                v-for="opt in item.options"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              />
            </el-select>
          </div>
        </div>

        <!--  radio -->
        <div
          :class="['input-group', 'custorm-class-' + index]"
          v-if="item.type === 'radio'"
        >
          <label :for="'input' + index">{{ item.label }}：</label>
          <div
            class="input-bar"
            :style="{ flex: item.width ? `0 0 ${item.width}px` : 1 }"
          >
            <el-radio-group
              :id="'input' + index"
              v-model="item.value"
              @change="e=>item.onChange(formList, index,e)"
              @blur="e=>item.onBlur(formList, index,e)"
              @focus="e=>item.onFocus(formList, index,e)"
            >
              <el-radio
                :label="opt.value"
                v-for="opt in item.options"
                :key="opt.value"
                >{{ opt.label }}</el-radio
              >
            </el-radio-group>
          </div>
        </div>

        <!--  date -->
        <div
          :class="['input-group', 'custorm-class-' + index]"
          v-if="item.type === 'date'"
        >
          <label :for="'input' + index">{{ item.label }}：</label>
          <div
            class="input-bar"
            :style="{ flex: item.width ? `0 0 ${item.width}px` : 1 }"
          >
            <el-date-picker
              v-model="item.value"
              type="date"
              :placeholder="item.placeholder || '请选择日期'"
              style="width: 100%"
              :format="item.format || 'YYYY-MM-DD'"
              :value-format="item.valueFormat || 'YYYY-MM-DD'"
              @change="e=>item.onChange(formList, index,e)"
              @blur="e=>item.onBlur(formList, index,e)"
              @focus="e=>item.onFocus(formList, index,e)"
            />
          </div>
        </div>

        <!--  date范围 -->
        <div
          :class="['input-group', 'custorm-class-' + index]"
          v-if="item.type === 'dateRange'"
        >
          <label :for="'input' + index">{{ item.label }}：</label>
          <div
            class="input-bar"
            :style="{ flex: item.width ? `0 0 ${item.width}px` : 1 }"
          >
            <el-date-picker
              v-model="item.value"
              type="daterange"
              style="width: 100%"
              :start-placeholder="item.startPlaceholder || '请选择开始日期'"
              :end-placeholder="item.endPlaceholder || '请选择结束日期'"
              :format="item.format || 'YYYY-MM-DD'"
              :value-format="item.valueFormat || 'YYYY-MM-DD'"
              :shortcuts="item.shortcuts || shortcuts"
              :range-separator="item.rangSeparator || '-'"
              @change="e=>item.onChange(formList, index,e)"
              @blur="e=>item.onBlur(formList, index,e)"
              @focus="e=>item.onFocus(formList, index,e)"
            />
          </div>
        </div>

        <!--  dateTime -->
        <div
          :class="['input-group', 'custorm-class-' + index]"
          v-if="item.type === 'dateTime'"
        >
          <label :for="'input' + index">{{ item.label }}：</label>
          <div
            class="input-bar"
            :style="{ flex: item.width ? `0 0 ${item.width}px` : 1 }"
          >
            <el-date-picker
              v-model="item.value"
              type="datetime"
              :placeholder="item.placeholder || '请选择时间'"
              style="width: 100%"
              :format="item.format || 'YYYY-MM-DD HH:mm:ss'"
              :value-format="item.valueFormat || 'YYYY-MM-DD HH:mm:ss'"
              @change="e=>item.onChange(formList, index,e)"
              @blur="e=>item.onBlur(formList, index,e)"
              @focus="e=>item.onFocus(formList, index,e)"
            />
          </div>
        </div>

        <!--  datetimerange -->
        <div
          :class="['input-group', 'custorm-class-' + index]"
          v-if="item.type === 'dateTimeRange'"
        >
          <label :for="'input' + index">{{ item.label }}：</label>
          <div
            class="input-bar"
            :style="{ flex: item.width ? `0 0 ${item.width}px` : 1 }"
          >
            <el-date-picker
              v-model="item.value"
              type="datetimerange"
              :start-placeholder="item.startPlaceholder || '请选择开始时间'"
              :end-placeholder="item.endPlaceholder || '请选择结束时间'"
              style="width: 100%"
              :format="item.format || 'YYYY-MM-DD HH:mm:ss'"
              :value-format="item.valueFormat || 'YYYY-MM-DD HH:mm:ss'"
              :shortcuts="item.shortcutsTime || shortcutsTime"
              :range-separator="item.rangSeparator || '-'"
              @change="e=>item.onChange(formList, index,e)"
              @blur="e=>item.onBlur(formList, index,e)"
              @focus="e=>item.onFocus(formList, index,e)"
            />
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="handle-btn">
      <el-button icon="RefreshLeft" @click="reset">重置</el-button>
      <el-button type="primary" icon="Search" @click="search">查询</el-button>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
const defaultFormList = [
  {
    label: "用户名",
    key: "user",
    type: "input",
    placeholder: "请输入啊~~~",
    clearable: true,
    value: "",
    span: 16,
    onBlur:(formList,index,e)=>{
      console.log(formList,index,e);
    }
  },
  {
    label: "性别",
    key: "sex",
    type: "select",
    options: [
      { label: "男", value: "1" },
      { label: "女", value: "2" },
    ],
    onChange: (configList) => {
      console.log(configList);
    },
  },
  {
    label: "远程搜索列表1",
    key: "asyncList",
    type: "selectAsync",
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
    label: "学校",
    key: "school",
    type: "radio",
    options: [
      { label: "重庆师范大学", value: "重庆师范大学" },
      { label: "重庆大学", value: "重庆大学" },
      { label: "重庆医科大学", value: "重庆医科大学" },
    ],
    span: 16,
    onChange:(formList,index)=>{
      console.log(formList,index);
      const arr = [...formList];
      formList = formList.map(item=>{
        if(item.key ==='curschool'){
          item.value = arr[index].value 
        };
        return item;
      })
      
    }
  },
  {
    label: "当前学校",
    key: "curschool",
    type: "input",
    span: 8,
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
export default {
  name: "formItemGroup",
  setup() {
    const formListConfig = defaultFormList.map((item) => {
      item.value = item.value || "";
      return item;
    });
    // 表单配置
    let formList = reactive(formListConfig);
    onMounted(async () => {
      const arr = [...formList];
      const defaultFunction = () => {
        return false;
      };
      for (let i in arr) {
        const cur = arr[i];
        if (cur.loadApi && cur.loadApi instanceof Function) {
          cur.options = await cur.loadApi();
        }
        cur.onChange = cur.onChange || defaultFunction;
        cur.onBlur = cur.onBlur || defaultFunction;
        cur.onFocus = cur.onFocus || defaultFunction;
      }
      formList = arr;
    });
    //日期快捷方式
    const shortcuts = reactive([
      {
        text: "最近三天",
        value: () => {
          const end = new Date();
          const start = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
          return [start, end];
        },
      },
      {
        text: "最近一周",
        value: () => {
          const end = new Date();
          const start = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          return [start, end];
        },
      },
      {
        text: "最近半月",
        value: () => {
          const end = new Date();
          const start = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000);
          return [start, end];
        },
      },
      {
        text: "最近一月",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setMonth(start.getMonth() - 1);
          return [start, end];
        },
      },
      {
        text: "最近三月",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setMonth(start.getMonth() - 3);
          return [start, end];
        },
      },
      {
        text: "最近半年",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setMonth(start.getMonth() - 6);
          return [start, end];
        },
      },
      {
        text: "最近一年",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setFullYear(start.getFullYear() - 1);
          return [start, end];
        },
      },
      {
        text: "最近两年",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setFullYear(start.getFullYear() - 2);
          return [start, end];
        },
      },
      {
        text: "最近三年",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setFullYear(start.getFullYear() - 2);
          return [start, end];
        },
      },
    ]);
    // 时间快捷方式
    const shortcutsTime = reactive([
      {
        text: "当天",
        value: () => {
          const end = new Date();
          const start = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
          return [start, end];
        },
      },
      {
        text: "最近三天",
        value: () => {
          const end = new Date();
          const start = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
          return [start, end];
        },
      },
      {
        text: "最近一周",
        value: () => {
          const end = new Date();
          const start = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          return [start, end];
        },
      },
      {
        text: "最近一月",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setMonth(start.getMonth() - 1);
          return [start, end];
        },
      },
      {
        text: "最近三月",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setMonth(start.getMonth() - 3);
          return [start, end];
        },
      },
      {
        text: "最近半年",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setMonth(start.getMonth() - 6);
          return [start, end];
        },
      },
      {
        text: "最近一年",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setFullYear(start.getFullYear() - 1);
          return [start, end];
        },
      },
    ]);
    //查询
    const search = () => {
      const result = getFormData();
      console.log(result);
    };
    //重置
    const reset = () => {
      formList = formList.map((item) => {
        item.value = "";
        return item;
      });
    };
    //获取参数数据
    const getFormData = () => {
      const result = formList.reduce((cur, item) => {
        cur[item.key] = item.value;
        return cur;
      }, {});
      return result;
    };
    return {
      formList,
      search,
      reset,
      shortcuts,
      shortcutsTime,
      getFormData,
    };
  },
};
</script>

<style scoped lang="less">
@import "@/assets/less/formItemGroup.less";
</style>