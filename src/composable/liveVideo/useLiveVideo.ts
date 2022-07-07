import { ref, computed } from "vue"
import { useStore } from "vuex"

export default function useLiveVideo() {
    const np = new NodePlayer();
    //響應式
    const loadingVideo = ref(true);
    //store
    const store = useStore()
    const videoStram = computed(() => {
        return store.state.liveVideo.videoStram
    })

    //方法
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
        startPlay,
        stopPlay,
        fullScreen,
    }
}