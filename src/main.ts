import { createApp } from 'vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//svg配置文件
import 'virtual:svg-icons-register'

//全局组件注册
import gloablComponent from '@/components/index'

//引入全局样式
import '@/styles/index.scss'

//引入路由
import router from '@/router/index'

//引入pinia
import pinia from '@/store/index'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(gloablComponent)
app.use(router)
app.use(pinia)
// console.log(import.meta.env)
app.mount('#app')
