import { getUserInfo } from '@/api'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default function useUser(){
    const store = useStore()
    const videoStream = computed(()=>{
        return store.state.liveVideo.videoStram
    })
    function updateStreamUrl(){
        
        getUserInfo()?.then(res=>{
            switch (res.data.code) {
                case 200:
                    console.log(res.data.data[0].link)
                    if(videoStream.value === res.data.data[0].link) alert('目前已是最新網址')
                    store.commit('liveVideo/setVideoStream',res.data.data[0].link)
                    break
            }
        })
    }
    return {
        //data
        //methods
        updateStreamUrl,
    }
}