import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/router/routes'

const router = createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes,
  //滚动行为
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
