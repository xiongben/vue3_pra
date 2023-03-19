import {defineStore} from "pinia";
import {store} from "../index";
import {getLogin, refreshTokenApi, RefreshTokenResult, UserResult} from "@/api/user";
import {storageSession} from "@pureadmin/utils";
import {DataInfo, removeToken, sessionKey, setToken} from "@/utils/auth";


export const useUserStore = defineStore({
    id: "pure-user",
    state: () => ({
        username: '',
        roles: storageSession().getItem<DataInfo<number>>(sessionKey)?.roles ?? [],
    }),
    actions: {
        /** 存储用户名 */
        SET_USERNAME(username: string) {
            this.username = username;
        },
        /** 存储角色 */
        SET_ROLES(roles: Array<string>) {
            this.roles = roles;
        },
        async loginByUsername(data: object) {
            return new Promise<UserResult>((resolve, reject) => {
                getLogin(data).then(data => {
                    if (data) {
                        setToken(data.data)
                        resolve(data)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        /** 前端登出（不调用接口） */
        logOut() {
            this.username = "";
            this.roles = [];
            removeToken();
            // useMultiTagsStoreHook().handleTags("equal", [...routerArrays]);
            // resetRouter();
            // router.push("/login");
        },
        /** 刷新`token` */
        async handRefreshToken(data: object) {
            return new Promise<RefreshTokenResult>((resolve, reject) => {
                refreshTokenApi(data)
                    .then(data => {
                        if (data) {
                            setToken(data.data);
                            resolve(data);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
})

export function useUserStoreHook() {
    return useUserStore(store);
}
