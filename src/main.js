import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const application = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    application.component(key, component)
}
application.use(ElementPlus,{
    locale: zhCn,
  }).mount('#app')
