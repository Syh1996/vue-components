export const defaultFormList = [
  {
    label: "用户名",
    key: "user",
    type: "input",
    placeholder: "请输入啊~~~",
    clearable: true,
    value: "",
    span: 16,
    onBlur: (formList, index, e) => {
      console.log(formList, index, e);
    },
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
    onChange: (formList, index, e) => {
      let arr = [...formList];
      arr = arr.map(item => {
        if (item.key === 'asyncList') {
          item.options = [{
            label: e === '1' ? '男' : '女',
            value: e
          }]
          item.value = e;
        }
        return item;
      })
      formList = arr;
    },
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
    /*  multiple:true, */
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
    onChange: (formList, index) => {
      console.log(formList, index);
      const arr = [...formList];
      formList = formList.map((item) => {
        if (item.key === "curschool") {
          item.value = arr[index].value;
        }
        return item;
      });
    },
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
    onChange: (formList, index,e) => {
       console.log(formList,index,e);
    },
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