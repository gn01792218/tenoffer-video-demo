<template>
  <div class="vd w-[980px] mx-auto">
    <div class="fullscreen-video mx-auto">
      <canvas id="video" width="980" height="588" /><br />
      <VideoLoading v-show="loadingVideo" />
    </div>
  </div>
  
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import VideoLoading from "@/components/video/VideoLoading.vue";
//直播物件
const inputVideoStream = ref('')
const flvStream = ref("https://v1.gamenow.online/live?app=bwtc&stream=watch01");
const loadingVideo = ref(true);
//初始化
let np = new NodePlayer();
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
  startPlay();
});
function startPlay() {
  // console.log("LiveVideo開始撥放", testPlayUrl);
  np.setKeepScreenOn();
  np.start(flvStream.value);
  // np.start(testPlayUrl); //測試時使用，播放兔寶寶
}
function stopPlay() {
  np.stop();
  np.clearView(); //清除上一個視頻留下的東西
}
function switchVideo(videoStream: string) {
  flvStream.value = videoStream;
  stopPlay();
  startPlay();
  if(inputVideoStream.value) inputVideoStream.value = ''
}
//全螢幕
function fullScreen(np:NodePlayer) {
  np.fullscreen()
}
//解決視窗失焦掉秒數問題
window.addEventListener("focus", () => {
  if (np) {
    console.log('執行')
    stopPlay();
    startPlay();
  }
});
</script>
