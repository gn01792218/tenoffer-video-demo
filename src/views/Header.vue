<template>
<div class="h-[100px] p-5 flex">
    <div class="w-auto ml-auto mr-5">
        <button class="primary-btn" @click="updateStreamUrl(np)">更新串流網址</button>
    </div>
    <div class="w-auto mr-5">
        <button class="primary-btn" @click="fullScreen(np)">全螢幕播放</button>
    </div>
    <!-- <div class="w-auto mr-5">
        <button class="primary-btn" @click="turnOffVideo(np,!stop)">
            <i v-show="stop" class="bi bi-play"></i>
            <i v-show="!stop" class="bi bi-stop"></i>
        </button>
    </div>
    <div class="w-auto mr-5">
        <button class="primary-btn" @click="mutedVideo(np,!muted)">
            <i v-show="muted" class="bi bi-volume-up"></i>
            <i v-show="!muted" class="bi bi-volume-mute"></i>
        </button>
    </div> -->
    <div class="w-[100px]">
        <button class="primary-btn" @click="logOut">登出</button>
    </div>
</div>
</template>
<script setup lang="ts">
import useLogin from "@/composable/user/useLogin";
import useLiveVideo from "@/composable/liveVideo/useLiveVideo";
import { onMounted } from "vue";
const { logOut } = useLogin()
const { np ,muted,stop,fullScreen ,updateStreamUrl,mutedVideo,turnOffVideo } = useLiveVideo()

</script>