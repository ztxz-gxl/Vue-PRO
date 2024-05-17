import { createApp } from 'vue'
import AppRouter from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'

const app = createApp(App)
app.use(AppRouter).use(scroll)
app.use(ElementPlus)
Object.keys(ElementPlusIconsVue).forEach(function (key) {
    app.component(ElementPlusIconsVue[key].name, ElementPlusIconsVue[key])
})
app.mount('#app')
