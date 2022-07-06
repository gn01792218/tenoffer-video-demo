import { useRouter } from "vue-router";
export default function useRouterUtil(){
    const router = useRouter()
    function routerPush(path:string) {
        router.push(path)
    }
    return {
        //methods
        routerPush,
    }
}