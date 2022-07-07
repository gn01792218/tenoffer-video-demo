
import { computed } from "vue"
import { useStore } from "vuex"
import useRouterUtil from '@/composable/util/useRouter'
import { getUserToken, removeUserToken } from '@/api'
export default function useLogin() {
    const { routerPush } = useRouterUtil()
    const store = useStore()
    const isPending = computed(() => {
        return store.state.user.loginPending
    })
    function loginRequest(userName: string, password: string) {
        if (!userName || !password) return
        store.commit('user/setLoginPending', true)
        //發送登入請求
        getUserToken({ account: userName, password: password })?.then(res => {
            switch (res.data.code) {
                case 200:
                    localStorage.setItem("token", res.data.data.token)
                    store.commit('user/setUserName', userName)
                    routerPush('/VideoDemo')
                    break
            }
            store.commit('user/setLoginPending', false)
        }).catch(error => {
            console.log(error)
            alert('查無使用者')
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
    function loginRespond() {
        //登入失敗
        //取消pending

        //登入成功
        //1.設置token
        //2.取消pending
        store.commit('user/setLoginPending', false)
        routerPush('/VideoDemo')
    }
    return {
        //data
        isPending,
        //methods
        loginRequest,
        logOut,
    }
}