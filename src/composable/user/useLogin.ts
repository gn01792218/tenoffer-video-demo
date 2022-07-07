
import { computed } from "vue"
import { useStore } from "vuex"
import useRouterUtil from '@/composable/util/useRouter'
export default function useLogin(){
    const { routerPush } = useRouterUtil()
    const store = useStore()
    const isPending = computed(()=>{
        return store.state.user.loginPending
    })
    function loginRequest(userName:string,password:string){
        
        if(!userName || !password) return
        
        //發送登入請求

        // //設置本第資訊
        // store.commit('user/setLoginPending',true)
        // store.commit('user/setUserName',userName)
        // store.commit('user/setUserPassword',password)

        // //暫時的
        // setTimeout(()=>{
        //     store.commit('user/setLoginPending',false)
        //     routerPush('/VideoDemo')
        // },2000)

    }
    function loginRespond(){
        //登入失敗
        //取消pending
        
        //登入成功
        //1.設置token
        //2.取消pending
        store.commit('user/setLoginPending',false)
        routerPush('/VideoDemo')
    }
    return {
        //data
        isPending,
        //methods
        loginRequest,
    }
}