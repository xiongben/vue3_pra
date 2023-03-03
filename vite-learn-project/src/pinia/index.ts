import { defineStore } from "pinia";

export interface UserInfo {
    name: string,
    age: number,
    interest: string,
    score: number
}
export const mainStore = defineStore('main',{
    state:()=>{
        return {
            token: '',
            userInfo: {}
        }
    },
    getters: {
        getToken: (state) => state.token,
        getUserInfo: (state) => state.userInfo
    },
    actions: {
        setToken(val: string){
            this.token = val
        },
        setUserInfo(val: UserInfo){
            this.userInfo = val
        }
    }
})
