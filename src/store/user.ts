import {User} from '../types/user/user'
interface State {
  user:Partial<User>
  loginPending:boolean
}
export const state: State = {
  user:{
    isLogin:false
  },
  loginPending:false
};
export const actions = {}

export const mutations = {
  setUserName(state:State,payload:string){
    state.user.userName = payload
  },
  setUserPassword(state:State,payload:string){
    state.user.password = payload
  },
  setAuthToken(state: State, payload: string) {
    state.user.userToken = payload
    localStorage.setItem("token",payload)
  },
  setLogin(state:State,payload:boolean){
    state.user.isLogin = payload
  },
  setLoginPending(state:State,payload:boolean){
    state.loginPending = payload
  }
};
export const getters = {}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};