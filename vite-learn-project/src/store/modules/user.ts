import {defineStore} from "pinia";
import {store} from "../index";


export const useUserStore = defineStore({
    id: "pure-user",
    state: () => ({
        username: '',
        roles: ''
    }),
    actions: {
        /** 存储用户名 */
        SET_USERNAME(username: string) {
            this.username = username;
        },
        /** 存储角色 */
        SET_ROLES(roles: string) {
            this.roles = roles;
        }
    }
})

export function useUserStoreHook() {
    return useUserStore(store);
}
