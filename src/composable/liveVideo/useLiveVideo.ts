import { ref, computed } from "vue"
import { useStore } from "vuex"
import { getUserInfo } from '@/api'
const np = new NodePlayer();
export default function useLiveVideo() {
    //響應式
    const loadingVideo = ref(true);
    //store
    const store = useStore()
    const liveVideo = store.state.liveVideo
    const videoStram = computed(() => {
        return liveVideo.videoStram
    })
    const muted = computed(()=>{
        return liveVideo.Muted
    })
    const stop = computed(()=>{
        return liveVideo.stop
    })
    //方法
     function setLiveVIdeoUrl(url:string){
        store.commit('liveVideo/setVideoStream',url)
    }
    function createVideo(np: NodePlayer) {
        console.log('初始化視訊')
        np.setView("video");
        np.setScaleMode(0);
        np.setBufferTime(300);
        np.on("error", (e) => {
            console.log("直播發生錯誤", e);
        });
        np.on("videoInfo", (w) => {
            console.log("顯示Video", w);
            loadingVideo.value = false;
        });
        np.on("stop", () => {
            console.log("結束播放Video");
            loadingVideo.value = true;
        });
    }
    function startPlay(np: NodePlayer, streamUrl: string) {
        // console.log("LiveVideo開始撥放", testPlayUrl);
        np.setKeepScreenOn();
        np.start(streamUrl);
    }
    function stopPlay(np: NodePlayer) {
        np.stop();
        np.clearView(); //清除上一個視頻留下的東西
        console.log('useVideo Stop')
    }
    //全螢幕
    function fullScreen(np: NodePlayer) {
        np.fullscreen()
    }
    //turnOff video
    function turnOffVideo(np:NodePlayer,off:boolean){
        store.commit('liveVideo/setStopVideo',off)
        if(off){
            stopPlay(np)
        }else{
            startPlay(np,videoStram.value)
        }
    }
    //靜音/開啟音量
    function mutedVideo(np:NodePlayer,muted:boolean){
        store.commit('liveVideo/setVideoMuted',muted)
        if(muted){
            np.setVolume(0)
        }else{
            np.setVolume(1)
        }
    }
    //更新視訊網址
    function updateStreamUrl(np:NodePlayer){
        getUserInfo()?.then(res=>{
            switch (res.data.code) {
                case 200:
                    if(videoStram.value === res.data.data[0].link) alert('目前已是最新網址')
                    setLiveVIdeoUrl(res.data.data[0].link)
                    stopPlay(np)
                    startPlay(np,res.data.data[0].link)
                    break
            }
        })
    }
   
    return {
        //data
        np,
        videoStram,
        muted,
        stop,
        loadingVideo,
        //methods
        createVideo,
        setLiveVIdeoUrl,
        turnOffVideo,
        startPlay,
        stopPlay,
        fullScreen,
        mutedVideo,
        updateStreamUrl,
    }
}