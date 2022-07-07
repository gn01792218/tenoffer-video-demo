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