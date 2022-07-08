import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('@/views/Home.vue')
  },
  {
    path: '/VideoDemo',
    name: 'VideoDemo',
    component:()=>import('@/views/VideoDemo.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  // history:createWebHashHistory(),
  routes
})
export default router
