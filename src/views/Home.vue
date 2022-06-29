<template>
<div class="bg-red-300">
  <LiveVideo />
</div>
  
</template>
<script setup lang="ts">
import { ref } from "vue";
import LiveVideo from "@/components/LiveVideo.vue";
defineProps<{ msg: string }>();

const count = ref(0);
</script>

<style scoped></style>
