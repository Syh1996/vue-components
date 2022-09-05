import '@/assets/less/global.less';
import Count from './components/count.vue';
import SLoading from './components/loading';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const components = [SLoading,Count];
const install = Vue=>{
    components.forEach(item=>{
        Vue.component(item.name,item)
    }) 
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        Vue.component(key, component)
    }
}
export default install;