<template>
  <div class="vd w-[980px] mx-auto relative">
    <div class="fullscreen-video">
      <canvas id="video" width="980" height="588" /><br />
      <videoLoading v-show="loadingVideo" />
      <i class="absolute right-[0.5%] bottom-[4%] text-white bi bi-arrows-fullscreen" @click="fullScreen(np)"></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import VideoLoading from "@/components/video/VideoLoading.vue";
import useLiveVideo from "@/composable/liveVideo/useLiveVideo"
const { np,videoStram ,loadingVideo ,startPlay,stopPlay,fullScreen } = useLiveVideo()

//初始化
onMounted(() => {
  console.log("初始化");
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
  startPlay(np,videoStram.value);
});

//解決視窗失焦掉秒數問題
window.addEventListener("focus", () => {
  if (np) {
    console.log('執行')
    stopPlay(np);
    startPlay(np,videoStram.value);
  }
});
</script>
