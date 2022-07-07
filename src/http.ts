import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
// axios實例
const service = axios.create({
  baseURL:import.meta.env.VITE_APP_API_URL?.toString(),
  headers: { 'Content-Type': 'application/json' },
  timeout: 20000 // 超时时间
});
//請求頭
const header = getAuthorizationHeader()
// 请求攔截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err: any) => {
    Promise.reject(err);
  }
);
// 回應攔截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (err: any) => {
    let errMsg = '';
    if (err && err.response.status) {
      switch (err.response.status) {
        case 400:
          errMsg = '登入失敗，可能是帳號或密碼錯誤';
          break;
        // case 401: //未登入或認證過期，清除本地和vuex中的token
        //   if()
        //   break;
        case 403:
          errMsg = '拒絕訪問';
          break;
        case 408:
          errMsg = '請求超時';
          break;
        case 500:
          errMsg = 'server內部錯誤';
          break;
        case 501:
          errMsg = 'server未實現';
          break;
        case 503:
          errMsg = '服務不可用';
          break;
        default:
          errMsg = err.response.data.msg;
          break;
      }
    } else {
      errMsg = err;
    }
    console.log(errMsg)
    // Message.error(errMsg);
    return Promise.reject(errMsg);
  }
);
//header
function getAuthorizationHeader(){
  let Authorization = "Bearer"+window.localStorage.getItem("token")
  return {headers:{'Authorization': Authorization}}
}
export default (method:string ,url:string ,data = {} , config?:AxiosRequestConfig)=>{
    method = method.toLowerCase()
    switch(method){
        case 'get':
            return service.get(url,header)
        case 'post':
          return service.post(url,data)
    }

}
// export default service;