interface State {
  videoStram:string,
  Muted:boolean,
  stop:boolean,
}
export const state: State = {
  videoStram:'',
  Muted:false,
  stop:false,
};
export const actions = {}

export const mutations = {
  setVideoStream(state:State,payload:string){
    state.videoStram = payload
  },
  setVideoMuted(state:State,payload:boolean){
    state.Muted = payload
  },
  setStopVideo(state:State,payload:boolean){
    state.stop = payload
    console.log('停止與否',state.stop)
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