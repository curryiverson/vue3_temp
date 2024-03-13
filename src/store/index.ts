import { createPinia } from 'pinia'
// 引入pinia本地持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
