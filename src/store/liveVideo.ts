interface State {
  videoStram:string,
}
export const state: State = {
  videoStram:''
};
export const actions = {}

export const mutations = {
  setVideoStream(state:State,payload:string){
    state.videoStram = payload
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