interface State {
  userToken: string,
  isLogin: boolean,
}
export const state: State = {
  userToken: "",
  isLogin: false,
};
export const actions = {}

export const mutations = {
  setAuthToken(state: State, payload: string) {
    state.userToken = payload
    localStorage.setItem("token",payload)
  },
  setLogin(state:State,payload:boolean){
    state.isLogin = payload
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