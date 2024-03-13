//统一管理用户接口
import request from '@/utils/request'
import type {LoginData, loginResData} from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data:LoginData) => request.post<any,loginResData>(API.LOGIN_URL, data)

export const reqUserInfo = () => request.get(API.USERINFO_URL)

