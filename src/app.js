import Count from './components/count.vue';
import SLoading from './components/loading';
const components = [SLoading,Count];
const install = Vue=>{
    components.forEach(item=>{
        Vue.component(item.name,item)
    })   
}
export default install;