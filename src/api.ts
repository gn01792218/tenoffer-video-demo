//引入你配置的axios
import req from './http'
import { UserLoginData } from '@/types/user/user'
//API
export const getUserToken = (userLoginData:UserLoginData) => {
  return req('post',`/api/auth/login`,userLoginData)
}
export const removeUserToken = () => {
  return req('get',`/api/auth/logout`)
}

//目前主要用來更新使用者資訊(包含串流)
export const getUserInfo = () => {
  return req('get',`/api/auth/user`)
}