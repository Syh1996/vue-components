import Count from './components/count.vue';
/* import ElementPlus from 'element-plus' */
const components = [Count];
const install = Vue=>{
/*     Vue.component(ElementPlus,ElementPlus) */
    components.forEach(item=>{
        Vue.component(item.name,item)
    })   
}
export default install;