<template>
  <div class="vd w-[980px] mx-auto relative">
    <div class="fullscreen-video">
      <canvas id="video" class="primary-border-color border-4 rounded-sm" width="980" height="588" /><br />
      <videoLoading v-show="loadingVideo" />
      <i class="absolute right-[0.5%] bottom-[5%] text-white bi bi-arrows-fullscreen" @click="fullScreen(np)"></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import VideoLoading from "@/components/video/VideoLoading.vue";
import useLiveVideo from "@/composable/liveVideo/useLiveVideo"
const { np,videoStram ,loadingVideo ,createVideo,startPlay,stopPlay,fullScreen,updateStreamUrl } = useLiveVideo()

//初始化
onMounted(() => {
  createVideo(np)
  if(!videoStram.value)updateStreamUrl(np)
  startPlay(np,videoStram.value);
});

//解決視窗失焦掉秒數問題
window.addEventListener("focus", () => {
  if (np) {
    stopPlay(np);
    startPlay(np,videoStram.value);
  }
});
</script>
