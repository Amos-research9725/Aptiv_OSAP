import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store, key } from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueAxios from 'vue-axios'
import axios from "axios"
import 'echarts-liquidfill'
// import * as echarts from 'echarts'; //引入echarts(5.0以上版本去除了exprot default)

const app = createApp(App)
// app.config.globalProperties.$echarts = echarts  //绑定实例

app.use(router).use(store, key).use(VueAxios, axios).use(ElementPlus).mount('#app')