<template>
  <router-view/>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from '@vue/runtime-core'
let beforeUnloadTime = ref(0)
let gapTime = ref(0)

const beforeunloadHandler = () => {
  console.log('刷新')
  localStorage.removeItem("token")
  beforeUnloadTime.value = new Date().getTime();
}

const unloadHandler = () => {
  gapTime.value = new Date().getTime() - beforeUnloadTime.value;
  //判断是窗口关闭还是刷新
  if (gapTime.value <= 5) {//浏览器关闭
    localStorage.removeItem("token")
  }
}

onMounted(() => {
  //监听页面卸载（关闭）或刷新
  window.addEventListener('beforeunload', () => beforeunloadHandler())

  window.addEventListener('unload', () => unloadHandler())
})
</script>
