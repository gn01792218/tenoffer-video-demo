<template>
<router-link
        class="mr-5 mb-5 btn bg-slate-600"
        to="/VideoDemo"
>VideoDemo</router-link>
<button class="border" @click="toVIdeoDemo">VdeoDEmo</button>
  
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const routers = router.getRoutes()
console.log(routers)
// defineProps<{ msg: string }>();

// const count = ref(0);

function toVIdeoDemo(){
  router.push('/VideoDemo')
  console.log('進入',router)
}
</script>
