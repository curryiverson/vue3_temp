import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user/index'
import type { LoginData, loginResData } from '@/api/user/type'
import type { UserState } from './types/type'
import { routes } from '@/router/routes'

export const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: '',
      menuRoutes: routes,
    }
  },
  actions: {
    async userLogin(data: LoginData) {
      let result: loginResData = await reqLogin(data)
      console.log('result', result)
      if (result.code === 200) {
        this.token = result.data.token as string
        return '登录成功'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  persist: true,
})
