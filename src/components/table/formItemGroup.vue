<template>
  <section class="form-item-group">
    <el-row>
      <el-col
        :span="item.span || 8"
        v-for="(item, index) in formList"
        :key="index"
      >
        <!-- input-->
        <div
          :class="[
            'input-group',
            'custorm-class-' + index,
            item.textAlign ? `text-${item.textAlign}` : 'text-right',
          ]"
          v-if="item.type === 'input'"
        >
          <label
            :for="'input' + index"
            :style="{
              flex: item.labelWidth ? `0 0 ${item.labelWidth}px` : '0 0 100px',
            }"
            >{{ item.label }}：</label
          >
          <div
            class="input-bar"
            :style="{
              flex: item.formItemWidth ? `0 0 ${item.formItemWidth}px` : 1,
            }"
          >
            <el-input
              :id="'input' + index"
              v-model="item.value"
              :placeholder="
                item.placeholder ||
                (item.type === 'input' ? '请输入相关信息' : '请选择')
              "
              :clearable="item.clearable || true"
              @change="(e) => item.onChange(formList, index, e)"
              @blur="(e) => item.onBlur(formList, index, e)"
              @focus="(e) => item.onFocus(formList, index, e)"
            />
          </div>
        </div>

        <!--  select -->
        <div
          :class="[
            'input-group',
            'custorm-class-' + index,
            item.textAlign ? `text-${item.textAlign}` : 'text-right',
          ]"
          v-if="item.type === 'select'"
        >
          <label
            :for="'input' + index"
            :style="{
              flex: item.labelWidth ? `0 0 ${item.labelWidth}px` : '0 0 100px',
            }"
            >{{ item.label }}：</label
          >
          <div
            class="input-bar"
            :style="{
              flex: item.formItemWidth ? `0 0 ${item.formItemWidth}px` : 1,
            }"
          >
            <el-select
              :id="'input' + index"
              v-model="item.value"
              :placeholder="
                item.placeholder || item.type === 'input'
                  ? '请输入相关信息'
                  : '请选择'
              "
              :filterable="true"
              :multiple="item.multiple === true"
              :collapse-tags="item.collapseTags === true"
              :collapse-tags-tooltip="item.collapseTags === true"
              :clearable="item.clearable || true"
              :remote-method="
                (text) =>
                  item.remoteMethod
                    ? item.remoteMethod(formList, index, text)
                    : {}
              "
              remote
              reserve-keyword
              :loading="item.loading"
              loading-text="加载中"
              @change="(e) => item.onChange(formList, index, e)"
              @blur="(e) => item.onBlur(formList, index, e)"
              @focus="(e) => item.onFocus(formList, index, e)"
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
          :class="[
            'input-group',
            'custorm-class-' + index,
            item.textAlign ? `text-${item.textAlign}` : 'text-right',
          ]"
          v-if="item.type === 'selectAsync'"
        >
          <label
            :for="'input' + index"
            :style="{
              flex: item.labelWidth ? `0 0 ${item.labelWidth}px` : '0 0 100px',
            }"
            >{{ item.label }}：</label
          >
          <div
            class="input-bar"
            :style="{
              flex: item.formItemWidth ? `0 0 ${item.formItemWidth}px` : 1,
            }"
          >
            <el-select
              :id="'input' + index"
              v-model="item.value"
              :placeholder="
                item.placeholder || item.type === 'input'
                  ? '请输入相关信息'
                  : '请选择'
              "
              :filterable="true"
              :clearable="item.clearable || true"
              :multiple="item.multiple === true"
              :collapse-tags="item.collapseTags === true"
              :collapse-tags-tooltip="item.collapseTags === true"
              remote
              reserve-keyword
              :remote-method="
                (text) =>
                  item.remoteMethod
                    ? item.remoteMethod(formList, index, text)
                    : {}
              "
              loading
              loading-text="加载中"
              @change="(e) => item.onChange(formList, index, e)"
              @blur="(e) => item.onBlur(formList, index, e)"
              @focus="(e) => item.onFocus(formList, index, e)"
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
          :class="[
            'input-group',
            'custorm-class-' + index,
            item.textAlign ? `text-${item.textAlign}` : 'text-right',
          ]"
          v-if="item.type === 'radio'"
        >
          <label
            :for="'input' + index"
            :style="{
              flex: item.labelWidth ? `0 0 ${item.labelWidth}px` : '0 0 100px',
            }"
            >{{ item.label }}：</label
          >
          <div
            class="input-bar"
            :style="{
              flex: item.formItemWidth ? `0 0 ${item.formItemWidth}px` : 1,
            }"
          >
            <el-radio-group
              :id="'input' + index"
              v-model="item.value"
              @change="(e) => item.onChange(formList, index, e)"
              @blur="(e) => item.onBlur(formList, index, e)"
              @focus="(e) => item.onFocus(formList, index, e)"
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

        <!--  checkbox -->
        <div
          :class="[
            'input-group',
            'custorm-class-' + index,
            item.textAlign ? `text-${item.textAlign}` : 'text-right',
          ]"
          v-if="item.type === 'checkbox'"
        >
          <label
            :for="'input' + index"
            :style="{
              flex: item.labelWidth ? `0 0 ${item.labelWidth}px` : '0 0 100px',
            }"
            >{{ item.label }}：</label
          >
          <div
            class="input-bar"
            :style="{
              flex: item.formItemWidth ? `0 0 ${item.formItemWidth}px` : 1,
            }"
          >
            <el-checkbox-group
              :id="'input' + index"
              v-model="item.value"
              @change="(e) => item.onChange(formList, index, e)"
            >
              <el-checkbox
                :label="cur.value"
                :disabled="cur.disabled"
                v-for="cur in item.options"
                :key="cur.value"
              >
                {{ cur.label }}
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>

        <!--  date -->
        <div
          :class="[
            'input-group',
            'custorm-class-' + index,
            item.textAlign ? `text-${item.textAlign}` : 'text-right',
          ]"
          v-if="item.type === 'date'"
        >
          <label
            :for="'input' + index"
            :style="{
              flex: item.labelWidth ? `0 0 ${item.labelWidth}px` : '0 0 100px',
            }"
            >{{ item.label }}：</label
          >
          <div
            class="input-bar"
            :style="{
              flex: item.formItemWidth ? `0 0 ${item.formItemWidth}px` : 1,
            }"
          >
            <el-date-picker
              v-model="item.value"
              type="date"
              :placeholder="item.placeholder || '请选择日期'"
              :format="item.format || 'YYYY-MM-DD'"
              :value-format="item.valueFormat || 'YYYY-MM-DD'"
              @change="(e) => item.onChange(formList, index, e)"
              @blur="(e) => item.onBlur(formList, index, e)"
              @focus="(e) => item.onFocus(formList, index, e)"
            />
          </div>
        </div>

        <!--  date范围 -->
        <div
          :class="[
            'input-group',
            'custorm-class-' + index,
            item.textAlign ? `text-${item.textAlign}` : 'text-right',
          ]"
          v-if="item.type === 'dateRange'"
        >
          <label
            :for="'input' + index"
            :style="{
              flex: item.labelWidth ? `0 0 ${item.labelWidth}px` : '0 0 100px',
            }"
            >{{ item.label }}：</label
          >
          <div
            class="input-bar"
            :style="{
              flex: item.formItemWidth ? `0 0 ${item.formItemWidth}px` : 1,
            }"
          >
            <el-date-picker
              v-model="item.value"
              type="daterange"
              :start-placeholder="item.startPlaceholder || '请选择开始日期'"
              :end-placeholder="item.endPlaceholder || '请选择结束日期'"
              :format="item.format || 'YYYY-MM-DD'"
              :value-format="item.valueFormat || 'YYYY-MM-DD'"
              :shortcuts="item.shortcuts || shortcuts"
              :range-separator="item.rangSeparator || '-'"
              @change="(e) => item.onChange(formList, index, e)"
              @blur="(e) => item.onBlur(formList, index, e)"
              @focus="(e) => item.onFocus(formList, index, e)"
            />
          </div>
        </div>

        <!--  dateTime -->
        <div
          :class="[
            'input-group',
            'custorm-class-' + index,
            item.textAlign ? `text-${item.textAlign}` : 'text-right',
          ]"
          v-if="item.type === 'dateTime'"
        >
          <label
            :for="'input' + index"
            :style="{
              flex: item.labelWidth ? `0 0 ${item.labelWidth}px` : '0 0 100px',
            }"
            >{{ item.label }}：</label
          >
          <div
            class="input-bar"
            :style="{
              flex: item.formItemWidth ? `0 0 ${item.formItemWidth}px` : 1,
            }"
          >
            <el-date-picker
              v-model="item.value"
              type="datetime"
              :placeholder="item.placeholder || '请选择时间'"
              :format="item.format || 'YYYY-MM-DD HH:mm:ss'"
              :value-format="item.valueFormat || 'YYYY-MM-DD HH:mm:ss'"
              @change="(e) => item.onChange(formList, index, e)"
              @blur="(e) => item.onBlur(formList, index, e)"
              @focus="(e) => item.onFocus(formList, index, e)"
            />
          </div>
        </div>

        <!--  datetimerange -->
        <div
          :class="[
            'input-group',
            'custorm-class-' + index,
            item.textAlign ? `text-${item.textAlign}` : 'text-right',
          ]"
          v-if="item.type === 'dateTimeRange'"
        >
          <label
            :for="'input' + index"
            :style="{
              flex: item.labelWidth ? `0 0 ${item.labelWidth}px` : '0 0 100px',
            }"
            >{{ item.label }}：</label
          >
          <div
            class="input-bar"
            :style="{
              flex: item.formItemWidth ? `0 0 ${item.formItemWidth}px` : 1,
            }"
          >
            <el-date-picker
              v-model="item.value"
              type="datetimerange"
              :start-placeholder="item.startPlaceholder || '请选择开始时间'"
              :end-placeholder="item.endPlaceholder || '请选择结束时间'"
              :format="item.format || 'YYYY-MM-DD HH:mm:ss'"
              :value-format="item.valueFormat || 'YYYY-MM-DD HH:mm:ss'"
              :shortcuts="item.shortcutsTime || shortcutsTime"
              :range-separator="item.rangSeparator || '-'"
              @change="(e) => item.onChange(formList, index, e)"
              @blur="(e) => item.onBlur(formList, index, e)"
              @focus="(e) => item.onFocus(formList, index, e)"
            />
          </div>
        </div>
      </el-col>
    </el-row>
    <slot></slot>
  </section>
</template>

<script>
import { computed, onMounted, reactive, onBeforeMount } from "vue";
export default {
  name: "formItemGroup",
  props: {
    formConfig: {
      type: Array,
      default: [],
    },
  },
  setup({ formConfig },context) {
    const defaultFunction = () => {
      return "no event";
    };

    const formListConfig = formConfig.map((item) => {
      if (["checkbox"].includes(item.type)) {
        item.value = item.value || [];
      } else {
        item.value = item.value || "";
      }
      item.onChange = item.onChange || defaultFunction;
      item.onBlur = item.onBlur || defaultFunction;
      item.onFocus = item.onFocus || defaultFunction;
      if (item.remoteMethod) {
        item.loading = false;
      }
      return item;
    });
    // 表单配置
    let formList = reactive(formListConfig);

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
      context.emit('getFormData',getFormData())
      return getFormData();
    };
    //重置
    const reset = () => {
      formList = formList.map((item) => {
        item.value = "";
        return item;
      });
      return true;
    };
    //获取参数数据
    const getFormData = () => {
      const result = formList.reduce((cur, item) => {
        cur[item.key] = item.value;
        return cur;
      }, {});
      return result;
    };
    //执行列表请求
    onMounted(async () => {
      const arr = [...formList];
      for (let i in arr) {
        const cur = arr[i];
        if (cur.loadApi && cur.loadApi instanceof Function) {
          cur.options = await cur.loadApi();
        }
      }
      formList = arr;
    });
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