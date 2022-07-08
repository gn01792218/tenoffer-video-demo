import { ref, computed } from "vue"
import { useStore } from "vuex"
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
    function createVideo(np: NodePlayer) {
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
    return {
        //data
        np,
        videoStram,
        loadingVideo,
        //methods
        createVideo,
        startPlay,
        stopPlay,
        fullScreen,
    }
}