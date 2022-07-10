import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/style.css'
NodePlayer.load(()=>{
    createApp(App).use(router).use(store).mount('#app')
})

router.beforeEach((to,from ,next)=>{
    let userToken = localStorage.getItem('token')
    console.log(userToken)
    if(userToken){
        next()
    }else{
        if(to.path==='/'){
            next()
        }
        if(to.path==='/VideoDemo'){
            alert('請先登入會員，才能使用視訊服務')
            next('/')
        }
    }
})

