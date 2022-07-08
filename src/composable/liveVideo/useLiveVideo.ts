import { ref, computed } from "vue"
import { useStore } from "vuex"
import { getUserInfo } from '@/api'
const np = new NodePlayer();
export default function useLiveVideo() {
    //響應式
    const loadingVideo = ref(true);
    //store
    const store = useStore()
    const videoStram = computed(() => {
        return store.state.liveVideo.videoStram
    })
    //方法
     function setLiveVIdeoUrl(url:string){
        store.commit('liveVideo/setVideoStream',url)
    }
    function createVideo(np: NodePlayer) {
        console.log('初始化視訊')
        np.setView("video");
        np.setScaleMode(1);
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
    }
    //全螢幕
    function fullScreen(np: NodePlayer) {
        np.fullscreen()
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
        loadingVideo,
        //methods
        createVideo,
        setLiveVIdeoUrl,
        startPlay,
        stopPlay,
        fullScreen,
        updateStreamUrl,
    }
}