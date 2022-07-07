
import { ref, computed } from "vue"
import { useStore } from "vuex"
import useRouterUtil from '@/composable/util/useRouter'
import { getUserToken, removeUserToken } from '@/api'
export default function useLogin() {
    //其他compasoble
    const { routerPush } = useRouterUtil()
    //響應式資料
    const userName = ref("")
    const userpassword = ref("")
    //store
    const store = useStore()
    const isPending = computed(() => {
        return store.state.user.loginPending
    })
    //方法
    function loginRequest(userName: string, password: string) {
        if (!userName || !password) return
        store.commit('user/setLoginPending', true)
        //發送登入請求
        getUserToken({ account: userName, password: password })?.then(res => {
            switch (res.data.code) {
                case 200:
                    localStorage.setItem("token", res.data.data.token)
                    store.commit('liveVideo/setVideoStream',res.data.data.user.link)
                    store.commit('user/setUserName', userName)
                    routerPush('/VideoDemo')
                    break
            }
            store.commit('user/setLoginPending', false)
        })
        .catch(error => {
            alert(error)
            store.commit('user/setLoginPending', false)
        })
    }
    function logOut() {
        removeUserToken()?.then(res => {
            console.log(res)
            switch (res.data.code) {
                case 200:
                    localStorage.removeItem("token")
                    routerPush('/')
                    break
            }
        })
    }
    return {
        //data
        isPending,
        userName,
        userpassword,
        //methods
        loginRequest,
        logOut,
    }
}