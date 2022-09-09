import '@/assets/less/global.less';
//import Count from './components/count.vue';
import SLoading from './components/loading';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import FormItemGroup from './components/table/formItemGroup.vue';
import TableTitle from './components/table/table-title.vue';
import TableComponents from './components/table/table.vue';
import Pagination from './components/pagination'
const components = [SLoading,FormItemGroup,TableTitle,TableComponents,Pagination];
const install = Vue=>{
    components.forEach(item=>{
        Vue.component(item.name,item)
    }) 
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        Vue.component(key, component)
    }
}
export default install;