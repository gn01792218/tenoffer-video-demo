<template>
<div class="h-[100px] p-5">
    <div class="w-[100px] ml-auto">
        <button class="primary-btn" @click="logOut">登出</button>
    </div>
</div>
</template>
<script setup lang="ts">
import useLogin from "@/composable/user/useLogin";
const { logOut } = useLogin()

</script>