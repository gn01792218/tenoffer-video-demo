//引入你配置的axios
import req from './http'

//API
export const getUserToken = (name:string,pass:string) => {
  return req('post',`/api/auth/login`,{account:name,password:pass})
}