import { useRouter } from "vue-router";

export default function useLogin(){
    const router = useRouter()
    function routerPush(path:string) {
        router.push(path)
      }
    return {
        routerPush,
    }
}