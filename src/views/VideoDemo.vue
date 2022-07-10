<template>
    <Header />
    <div class="flex items-center">
        <LiveVideo />
    </div>
</template>
<script setup lang="ts">
import LiveVideo from "@/components/video/LiveVideo.vue";
import Header from '@/views/Header.vue'
import { onMounted } from "@vue/runtime-core";
import useRoute  from "@/composable/util/useRouter";
onMounted(()=>{
    const { routerPush } = useRoute()
    let userToken = localStorage.getItem('token')
    if(!userToken){
        
    }
})

</script>