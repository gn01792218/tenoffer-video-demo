<template>
    <div class="flex items-center pt-10">
        <LiveVideo />
    </div>
    <button @click="logOut">登出</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import LiveVideo from "@/components/video/LiveVideo.vue";
import useLogin from "@/composable/user/useLogin";
const { logOut } = useLogin()
</script>

<style scoped>
</style>