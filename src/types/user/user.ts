export interface User{
    userName:string,
    password:string,
    userToken: string,
    isLogin: boolean,
}
export interface UserLoginData{
    account:string,
    password:string
}